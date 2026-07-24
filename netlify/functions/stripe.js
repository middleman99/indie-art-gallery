const Stripe = require('stripe');
exports.handler = async (event) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }
  const { action, data } = body;
  try {
    if (action === 'create_account') {
      const account = await stripe.accounts.create({
        type: 'express',
        country: 'US',
        capabilities: {
          transfers: { requested: true },
        },
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ accountId: account.id }),
      };
    }
    if (action === 'create_account_link') {
      const accountLink = await stripe.accountLinks.create({
        account: data.accountId,
        refresh_url: `https://indieartgallery.live/connect-stripe`,
        return_url: `https://indieartgallery.live/profile?stripe=success`,
        type: 'account_onboarding',
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ url: accountLink.url }),
      };
    }
    if (action === 'get_account_status') {
      const { accountId } = data;
      if (!accountId) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Missing accountId' }) };
      }
      const account = await stripe.accounts.retrieve(accountId);
      return {
        statusCode: 200,
        body: JSON.stringify({
          detailsSubmitted: !!account.details_submitted,
          chargesEnabled: !!account.charges_enabled,
          payoutsEnabled: !!account.payouts_enabled,
        }),
      };
    }
    if (action === 'create_payment_intent') {
      const { amount, metadata, transferGroup } = data;
      const intentParams = {
        amount: Math.round(amount),
        currency: 'usd',
      };
      if (transferGroup) {
        intentParams.transfer_group = transferGroup;
      }
      if (metadata) {
        intentParams.metadata = {};
        for (const key in metadata) {
          if (metadata[key] !== undefined && metadata[key] !== null) {
            intentParams.metadata[key] = String(metadata[key]);
          }
        }
      }
      const intent = await stripe.paymentIntents.create(intentParams);
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: intent.client_secret }),
      };
    }
    if (action === 'get_payment_intent') {
      const { paymentIntentId, clientSecret } = data;
      if (!paymentIntentId || !clientSecret) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Missing paymentIntentId or clientSecret' }) };
      }
      const intent = await stripe.paymentIntents.retrieve(paymentIntentId);
      if (intent.client_secret !== clientSecret) {
        return { statusCode: 403, body: JSON.stringify({ error: 'Client secret does not match this PaymentIntent' }) };
      }
      return {
        statusCode: 200,
        body: JSON.stringify({
          status: intent.status,
          metadata: intent.metadata || {},
        }),
      };
    }
    if (action === 'create_transfer') {
      const { paymentIntentId, artistStripeId, amount, orderId } = data;
      if (!paymentIntentId || !artistStripeId || !amount || !orderId) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Missing required transfer fields' }) };
      }
      const intent = await stripe.paymentIntents.retrieve(paymentIntentId);
      const chargeId = intent.latest_charge;
      if (!chargeId) {
        return { statusCode: 400, body: JSON.stringify({ error: 'No charge found on this PaymentIntent - cannot release payout' }) };
      }
      const transfer = await stripe.transfers.create(
        {
          amount: Math.round(amount),
          currency: 'usd',
          destination: artistStripeId,
          source_transaction: chargeId,
          transfer_group: orderId,
        },
        {
          idempotencyKey: `payout-${orderId}-${artistStripeId}-${Math.round(amount)}`,
        }
      );
      return {
        statusCode: 200,
        body: JSON.stringify({ transferId: transfer.id }),
      };
    }
    if (action === 'create_split_transfer') {
      const { paymentIntentId, orderId, transfers } = data;
      if (!paymentIntentId || !orderId || !Array.isArray(transfers) || transfers.length === 0) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Missing required split transfer fields' }) };
      }
      const validTransfers = transfers.filter(t => t.stripeAccountId && t.amount > 0 && t.role);
      if (validTransfers.length === 0) {
        return { statusCode: 400, body: JSON.stringify({ error: 'No valid transfers with a positive amount' }) };
      }
      const intent = await stripe.paymentIntents.retrieve(paymentIntentId);
      const chargeId = intent.latest_charge;
      if (!chargeId) {
        return { statusCode: 400, body: JSON.stringify({ error: 'No charge found on this PaymentIntent - cannot release payout' }) };
      }

      const results = [];
      for (const t of validTransfers) {
        const transfer = await stripe.transfers.create(
          {
            amount: Math.round(t.amount),
            currency: 'usd',
            destination: t.stripeAccountId,
            source_transaction: chargeId,
            transfer_group: orderId,
          },
          {
            idempotencyKey: `payout-${orderId}-${t.role}-${t.stripeAccountId}-${Math.round(t.amount)}`,
          }
        );
        results.push({ role: t.role, transferId: transfer.id });
      }

      return {
        statusCode: 200,
        body: JSON.stringify({ transfers: results }),
      };
    }
    if (action === 'refund_order') {
      const { paymentIntentId, transferId } = data;
      if (!paymentIntentId) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Missing paymentIntentId' }) };
      }
      if (transferId) {
        await stripe.transfers.createReversal(transferId);
      }
      const refund = await stripe.refunds.create(
        { payment_intent: paymentIntentId },
        { idempotencyKey: `refund-${paymentIntentId}` }
      );
      return {
        statusCode: 200,
        body: JSON.stringify({ refundId: refund.id }),
      };
    }
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Unknown action' }),
    };
  } catch (err) {
    console.error('Stripe error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};