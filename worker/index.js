// worker/index.js
//
// Entry point for the Cloudflare Worker that replaces Netlify (static site +
// serverless functions). wrangler.toml routes /api/* here first
// (run_worker_first) and serves everything else from the built dist/ via the
// ASSETS binding, with SPA fallback (see wrangler.toml [assets]).
import { handleStripe } from './stripe.js';
import { handleEmail } from './email.js';
import { handleLivekit } from './livekit.js';
import { handleCertificate } from './certificate.js';

// CORS: the Android app bundles its own copy of the web assets (see
// capacitor.config.ts - no server.url anymore), so it runs from a local
// WebView origin (https://localhost) rather than https://indieartgallery.live.
// That makes every /api/* call cross-origin from the app's point of view, so
// the Worker needs to explicitly allow it. These endpoints don't use cookies
// for auth (Firebase UID/tokens travel in the request body/headers instead),
// so a wildcard origin is safe here - there's no session to leak.
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

function withCors(response) {
  const headers = new Headers(response.headers);
  for (const [k, v] of Object.entries(CORS_HEADERS)) headers.set(k, v);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/api/')) {
      if (request.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: CORS_HEADERS });
      }

      if (url.pathname === '/api/stripe') return withCors(await handleStripe(request, env));
      if (url.pathname === '/api/email') return withCors(await handleEmail(request, env));
      if (url.pathname === '/api/livekit') return withCors(await handleLivekit(request, env));
      if (url.pathname === '/api/certificate') return withCors(await handleCertificate(request, env));

      return withCors(new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      }));
    }

    // Anything else falls through to static assets (dist/), which
    // [assets] not_found_handling handles as an SPA (serves index.html).
    return env.ASSETS.fetch(request);
  },
};
