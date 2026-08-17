// worker/stripe.js
// Ported from netlify/functions/stripe.js (Netlify Lambda handler -> Cloudflare
// Worker fetch handler). Logic is unchanged - only the request/response
// plumbing and process.env -> env binding access changed.
import Stripe from 'stripe';

export async function handleStripe(request, env) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const stripe = new Stripe(env.STRIPE_SECRET_KEY);

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: 'Invalid JSON' }, 400);
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
      return json({ accountId: account.id });
    }

    if (action === 'create_account_link') {
      const accountLink = await stripe.accountLinks.create({
        account: data.accountId,
        refresh_url: `https://indieartgallery.live/connect-stripe`,
        return_url: `https://indieartgallery.live/profile?stripe=success`,
        type: 'account_onboarding',
      });
      return json({ url: accountLink.url });
    }

    if (action === 'get_account_status') {
      const { accountId } = data;
      if (!accountId) return json({ error: 'Missing accountId' }, 400);
      const account = await stripe.accounts.retrieve(accountId);
      return json({
        detailsSubmitted: !!account.details_submitted,
        chargesEnabled: !!account.charges_enabled,
        payoutsEnabled: !!account.payouts_enabled,
      });
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
      return json({ clientSecret: intent.client_secret });
    }

    if (action === 'get_payment_intent') {
      const { paymentIntentId, clientSecret } = data;
      if (!paymentIntentId || !clientSecret) {
        return json({ error: 'Missing paymentIntentId or clientSecret' }, 400);
      }
      const intent = await stripe.paymentIntents.retrieve(paymentIntentId);
      if (intent.client_secret !== clientSecret) {
        return json({ error: 'Client secret does not match this PaymentIntent' }, 403);
      }
      return json({ status: intent.status, metadata: intent.metadata || {} });
    }

    if (action === 'create_transfer') {
      const { paymentIntentId, artistStripeId, amount, orderId } = data;
      if (!paymentIntentId || !artistStripeId || !amount || !orderId) {
        return json({ error: 'Missing required transfer fields' }, 400);
      }
      const intent = await stripe.paymentIntents.retrieve(paymentIntentId);
      const chargeId = intent.latest_charge;
      if (!chargeId) {
        return json({ error: 'No charge found on this PaymentIntent - cannot release payout' }, 400);
      }
      const transfer = await stripe.transfers.create(
        {
          amount: Math.round(amount),
          currency: 'usd',
          destination: artistStripeId,
          source_transaction: chargeId,
          transfer_group: orderId,
        },
        { idempotencyKey: `payout-${orderId}-${artistStripeId}-${Math.round(amount)}` }
      );
      return json({ transferId: transfer.id });
    }

    if (action === 'create_split_transfer') {
      const { paymentIntentId, orderId, transfers } = data;
      if (!paymentIntentId || !orderId || !Array.isArray(transfers) || transfers.length === 0) {
        return json({ error: 'Missing required split transfer fields' }, 400);
      }
      const validTransfers = transfers.filter(t => t.stripeAccountId && t.amount > 0 && t.role);
      if (validTransfers.length === 0) {
        return json({ error: 'No valid transfers with a positive amount' }, 400);
      }
      const intent = await stripe.paymentIntents.retrieve(paymentIntentId);
      const chargeId = intent.latest_charge;
      if (!chargeId) {
        return json({ error: 'No charge found on this PaymentIntent - cannot release payout' }, 400);
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
          { idempotencyKey: `payout-${orderId}-${t.role}-${t.stripeAccountId}-${Math.round(t.amount)}` }
        );
        results.push({ role: t.role, transferId: transfer.id });
      }
      return json({ transfers: results });
    }

    if (action === 'refund_order') {
      const { paymentIntentId, transferId } = data;
      if (!paymentIntentId) return json({ error: 'Missing paymentIntentId' }, 400);
      if (transferId) {
        await stripe.transfers.createReversal(transferId);
      }
      const refund = await stripe.refunds.create(
        { payment_intent: paymentIntentId },
        { idempotencyKey: `refund-${paymentIntentId}` }
      );
      return json({ refundId: refund.id });
    }

    return json({ error: 'Unknown action' }, 400);
  } catch (err) {
    console.error('Stripe error:', err);
    return json({ error: err.message }, 500);
  }
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
