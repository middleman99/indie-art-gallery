// worker/livekit.js
// Ported from netlify/functions/livekit.js
import { AccessToken } from 'livekit-server-sdk';

export async function handleLivekit(request, env) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const { roomName, participantName, isHost } = body;
  if (!roomName || !participantName) {
    return json({ error: 'Missing roomName or participantName' }, 400);
  }

  try {
    const at = new AccessToken(env.LIVEKIT_API_KEY, env.LIVEKIT_API_SECRET, {
      identity: participantName,
    });

    at.addGrant({
      roomJoin: true,
      room: roomName,
      canPublish: isHost === true,
      canSubscribe: true,
      canPublishData: true,
    });

    const token = await at.toJwt();
    return json({ token });
  } catch (err) {
    console.error('LiveKit error:', err);
    return json({ error: err.message }, 500);
  }
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
