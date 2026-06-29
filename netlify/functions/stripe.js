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
    // Create Stripe Connect account for artist
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

    // Create onboarding link for artist
    if (action === 'create_account_link') {
      const accountLink = await stripe.accountLinks.create({
        account: data.accountId,
        refresh_url: `${data.returnUrl}/connect-stripe`,
        return_url: `${data.returnUrl}/profile?stripe=success`,
        type: 'account_onboarding',
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ url: accountLink.url }),
      };
    }

    // Create payment intent for buyer
    if (action === 'create_payment_intent') {
      const { amount, artistStripeId, platformFeePercent } = data;

      const intentParams = {
        amount: Math.round(amount),
        currency: 'usd',
      };

      // Only add transfer if artist has a Stripe account
      if (artistStripeId) {
        const platformFee = Math.round(amount * platformFeePercent);
        intentParams.application_fee_amount = platformFee;
        intentParams.transfer_data = {
          destination: artistStripeId,
        };
      }

      const intent = await stripe.paymentIntents.create(intentParams);

      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: intent.client_secret }),
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