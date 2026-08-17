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

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api/stripe') return handleStripe(request, env);
    if (url.pathname === '/api/email') return handleEmail(request, env);
    if (url.pathname === '/api/livekit') return handleLivekit(request, env);
    if (url.pathname === '/api/certificate') return handleCertificate(request, env);

    if (url.pathname.startsWith('/api/')) {
      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Anything else falls through to static assets (dist/), which
    // [assets] not_found_handling handles as an SPA (serves index.html).
    return env.ASSETS.fetch(request);
  },
};
