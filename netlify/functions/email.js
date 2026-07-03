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
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const FROM = 'Indie Art Gallery <noreply@indieartgallery.live>';
  async function sendEmail(to, subject, html) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + RESEND_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from: FROM, to, subject, html }),
    });
    const result = await res.json();
    if (!res.ok) {
      throw new Error(result.message || 'Resend API error');
    }
    return result;
  }
  try {
    if (type === 'auction_won') {
      await sendEmail(
        data.buyerEmail,
        'You won the auction - Pay within 1 hour',
        '<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#1A1A2E;color:#FFF8F0;padding:40px;border-radius:12px;"><h1 style="color:#FFD700;font-size:28px;">You won the auction!</h1><p>Congratulations! You won <strong>' + data.pieceTitle + '</strong> by ' + data.artistName + '.</p><div style="background:rgba(255,255,255,0.08);padding:20px;border-radius:8px;margin:24px 0;"><p>Winning bid: <strong>$' + data.winningBid + '</strong></p><p>Buyers premium: <strong>$' + data.buyerPremium + '</strong></p><p style="font-size:20px;color:#FF4D4D;">Total due: <strong>$' + data.total + '</strong></p></div><p style="color:#FFD700;font-weight:bold;">You have 1 hour to complete payment or the item will be released.</p><a href="https://indieartgallery.live/orders" style="display:inline-block;background:#FF4D4D;color:white;padding:14px 28px;border-radius:999px;text-decoration:none;font-weight:bold;">Pay Now</a></div>'
      );
    }
    else if (type === 'order_confirmed') {
      await sendEmail(
        data.artistEmail,
        'Your piece sold for $' + data.amount,
        '<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#1A1A2E;color:#FFF8F0;padding:40px;border-radius:12px;"><h1 style="color:#2ECC71;font-size:28px;">You made a sale!</h1><p><strong>' + data.pieceTitle + '</strong> sold for <strong>$' + data.amount + '</strong>.</p><div style="background:rgba(255,255,255,0.08);padding:20px;border-radius:8px;margin:24px 0;"><p>Sale price: <strong>$' + data.amount + '</strong></p><p>Platform fee: <strong>-$' + data.platformFee + '</strong></p><p style="font-size:20px;color:#2ECC71;">Your payout: <strong>$' + data.artistPayout + '</strong></p></div><a href="https://indieartgallery.live/profile" style="display:inline-block;background:#FF4D4D;color:white;padding:14px 28px;border-radius:999px;text-decoration:none;font-weight:bold;">View Dashboard</a></div>'
      );
    }
    else if (type === 'payment_complete') {
      await sendEmail(
        data.buyerEmail,
        'Payment confirmed for ' + data.pieceTitle,
        '<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#1A1A2E;color:#FFF8F0;padding:40px;border-radius:12px;"><h1 style="color:#2ECC71;font-size:28px;">Payment confirmed!</h1><p>Your payment of <strong>$' + data.total + '</strong> for <strong>' + data.pieceTitle + '</strong> has been received.</p><a href="https://indieartgallery.live/orders" style="display:inline-block;background:#FF4D4D;color:white;padding:14px 28px;border-radius:999px;text-decoration:none;font-weight:bold;">View Orders</a></div>'
      );
    }
    else if (type === 'artist_going_live') {
      await sendEmail(
        data.followerEmail,
        data.artistName + ' is going live now on Indie Art Gallery!',
        '<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#1A1A2E;color:#FFF8F0;padding:40px;border-radius:12px;"><h1 style="color:#FF4D4D;font-size:28px;">' + data.artistName + ' is LIVE!</h1><p><strong>' + data.showTitle + '</strong></p><a href="https://indieartgallery.live/live" style="display:inline-block;background:#FF4D4D;color:white;padding:14px 28px;border-radius:999px;text-decoration:none;font-weight:bold;">Watch Now</a></div>'
      );
    }
    else {
      return { statusCode: 400, body: JSON.stringify({ error: 'Unknown notification type' }) };
    }
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error('Email error:', err.message);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};