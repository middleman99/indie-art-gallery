const { Resend } = require('resend');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { type, data } = body;

  if (!type || !data) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing type or data' }) };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  // Auction won - notify buyer
  if (type === 'auction_won') {
    const { data: emailData, error } = await resend.emails.send({
      from: 'Indie Art Gallery <noreply@indieartgallery.live>',
      to: data.buyerEmail,
      subject: 'You won the auction - Pay within 1 hour',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #1A1A2E; color: #FFF8F0; padding: 40px; border-radius: 12px;">
          <h1 style="color: #FFD700; font-size: 28px;">You won the auction!</h1>
          <p style="font-size: 16px;">Congratulations! You won <strong>${data.pieceTitle}</strong> by ${data.artistName}.</p>
          <div style="background: rgba(255,255,255,0.08); padding: 20px; border-radius: 8px; margin: 24px 0;">
            <p style="margin: 0 0 8px 0;">Winning bid: <strong>$${data.winningBid}</strong></p>
            <p style="margin: 0 0 8px 0;">Buyer's premium: <strong>$${data.buyerPremium}</strong></p>
            <p style="margin: 0; font-size: 20px; color: #FF4D4D;">Total due: <strong>$${data.total}</strong></p>
          </div>
          <p style="color: #FFD700; font-weight: bold;">You have 1 hour to complete payment or the item will be released.</p>
          <a href="https://indieartgallery.live/orders" style="display: inline-block; background: #FF4D4D; color: white; padding: 14px 28px; border-radius: 999px; text-decoration: none; font-weight: bold; font-size: 16px; margin-top: 16px;">
            Pay Now
          </a>
          <p style="margin-top: 32px; font-size: 12px; color: #8B8FA8;">Indie Art Gallery - indieartgallery.live<br>Under Middleman Merchants LLC</p>
        </div>
      `,
    });
    if (error) {
      console.error('auction_won email error:', error);
      return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
    return { statusCode: 200, body: JSON.stringify({ success: true, id: emailData.id }) };
  }

  // Order confirmed - notify artist
  if (type === 'order_confirmed') {
    const { data: emailData, error } = await resend.emails.send({
      from: 'Indie Art Gallery <noreply@indieartgallery.live>',
      to: data.artistEmail,
      subject: `Your piece "${data.pieceTitle}" sold for $${data.amount}!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #1A1A2E; color: #FFF8F0; padding: 40px; border-radius: 12px;">
          <h1 style="color: #2ECC71; font-size: 28px;">You made a sale!</h1>
          <p style="font-size: 16px;"><strong>${data.pieceTitle}</strong> sold for <strong>$${data.amount}</strong>.</p>
          <div style="background: rgba(255,255,255,0.08); padding: 20px; border-radius: 8px; margin: 24px 0;">
            <p style="margin: 0 0 8px 0;">Sale price: <strong>$${data.amount}</strong></p>
            <p style="margin: 0 0 8px 0;">Platform fee: <strong>-$${data.platformFee}</strong></p>
            <p style="margin: 0; font-size: 20px; color: #2ECC71;">Your payout: <strong>$${data.artistPayout}</strong></p>
          </div>
          <p>Funds will be released to your bank account after the buyer confirms delivery.</p>
          <a href="https://indieartgallery.live/profile" style="display: inline-block; background: #FF4D4D; color: white; padding: 14px 28px; border-radius: 999px; text-decoration: none; font-weight: bold; font-size: 16px; margin-top: 16px;">
            View Dashboard
          </a>
          <p style="margin-top: 32px; font-size: 12px; color: #8B8FA8;">Indie Art Gallery - indieartgallery.live<br>Under Middleman Merchants LLC</p>
        </div>
      `,
    });
    if (error) {
      console.error('order_confirmed email error:', error);
      return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
    return { statusCode: 200, body: JSON.stringify({ success: true, id: emailData.id }) };
  }

  // Payment complete - notify buyer
  if (type === 'payment_complete') {
    const { data: emailData, error } = await resend.emails.send({
      from: 'Indie Art Gallery <noreply@indieartgallery.live>',
      to: data.buyerEmail,
      subject: `Payment confirmed for "${data.pieceTitle}"`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #1A1A2E; color: #FFF8F0; padding: 40px; border-radius: 12px;">
          <h1 style="color: #2ECC71; font-size: 28px;">Payment confirmed!</h1>
          <p>Your payment of <strong>$${data.total}</strong> for <strong>${data.pieceTitle}</strong> has been received.</p>
          <p>The artist has been notified and will be in touch about your piece soon.</p>
          <a href="https://indieartgallery.live/orders" style="display: inline-block; background: #FF4D4D; color: white; padding: 14px 28px; border-radius: 999px; text-decoration: none; font-weight: bold; font-size: 16px; margin-top: 16px;">
            View Orders
          </a>
          <p style="margin-top: 32px; font-size: 12px; color: #8B8FA8;">Indie Art Gallery - indieartgallery.live<br>Under Middleman Merchants LLC</p>
        </div>
      `,
    });
    if (error) {
      console.error('payment_complete email error:', error);
      return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
    return { statusCode: 200, body: JSON.stringify({ success: true, id: emailData.id }) };
  }

  // Artist going live - notify followers
  if (type === 'artist_going_live') {
    const { data: emailData, error } = await resend.emails.send({
      from: 'Indie Art Gallery <noreply@indieartgallery.live>',
      to: data.followerEmail,
      subject: `${data.artistName} is going live now on Indie Art Gallery!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #1A1A2E; color: #FFF8F0; padding: 40px; border-radius: 12px;">
          <h1 style="color: #FF4D4D; font-size: 28px;">${data.artistName} is LIVE!</h1>
          <p style="font-size: 16px;"><strong>${data.showTitle}</strong></p>
          <p>Join now to watch, chat, and bid on original art in real time.</p>
          <a href="https://indieartgallery.live/live" style="display: inline-block; background: #FF4D4D; color: white; padding: 14px 28px; border-radius: 999px; text-decoration: none; font-weight: bold; font-size: 16px; margin-top: 16px;">
            Watch Now
          </a>
          <p style="margin-top: 32px; font-size: 12px; color: #8B8FA8;">Indie Art Gallery - indieartgallery.live<br>Under Middleman Merchants LLC</p>
        </div>
      `,
    });
    if (error) {
      console.error('artist_going_live email error:', error);
      return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
    return { statusCode: 200, body: JSON.stringify({ success: true, id: emailData.id }) };
  }

  return { statusCode: 400, body: JSON.stringify({ error: 'Unknown notification type' }) };
};