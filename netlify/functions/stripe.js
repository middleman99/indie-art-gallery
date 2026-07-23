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
      // Real onboarding completion check. create_account only creates a shell
      // account - it does NOT mean the artist has entered bank details or passed
      // identity verification. This is the fix for the bug where the UI showed
      // "You're set up to get paid" the instant Connect Stripe was clicked, before
      // the artist ever reached Stripe's own onboarding form. payouts_enabled is
      // the flag that actually matters for whether Stripe will release money to
      // this account; details_submitted is included as a secondary signal.
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