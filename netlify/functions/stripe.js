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
    if (action === 'create_payment_intent') {
      // NOTE: this is a plain charge to the PLATFORM's own balance - no destination-charge
      // fields (transfer_data / application_fee_amount) are set here anymore. Funds are
      // only ever moved to the artist's connected account later, via the separate
      // 'create_transfer' action below, after the buyer confirms delivery. This is the
      // "separate charges and transfers" Stripe Connect pattern, chosen deliberately so
      // the platform actually holds funds until delivery is confirmed, rather than
      // auto-transferring at charge time.
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
    if (action === 'create_transfer') {
      // Called only when the buyer confirms delivery. Moves the artist's payout
      // portion from the platform's balance to their connected account.
      const { paymentIntentId, artistStripeId, amount, orderId } = data;
      if (!paymentIntentId || !artistStripeId || !amount || !orderId) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Missing required transfer fields' }) };
      }

      // Look up the original charge so the transfer can reference it via
      // source_transaction - this makes Stripe wait for that charge's funds to
      // actually be available rather than failing for insufficient platform balance.
      const intent = await stripe.paymentIntents.retrieve(paymentIntentId);
      const chargeId = intent.latest_charge;
      if (!chargeId) {
        return { statusCode: 400, body: JSON.stringify({ error: 'No charge found on this PaymentIntent - cannot release payout' }) };
      }

      // Idempotency key tied to the order: if this request is somehow sent twice
      // (double-click, network retry), Stripe returns the original transfer instead
      // of creating a second one and double-paying the artist.
      const transfer = await stripe.transfers.create(
        {
          amount: Math.round(amount),
          currency: 'usd',
          destination: artistStripeId,
          source_transaction: chargeId,
          transfer_group: orderId,
        },
        {
          idempotencyKey: `payout-${orderId}`,
        }
      );

      return {
        statusCode: 200,
        body: JSON.stringify({ transferId: transfer.id }),
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