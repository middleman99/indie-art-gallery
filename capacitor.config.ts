import type { CapacitorConfig } from '@capacitor/cli';

// This app is a Capacitor wrapper around the live Indie Art Gallery web app.
// We point the WebView at the production site (server.url) instead of bundling
// the built dist/ folder, because the app calls same-origin Netlify functions
// (/.netlify/functions/stripe, /email, /livekit, /certificate) via relative
// paths — those only resolve correctly when the page is actually served from
// indieartgallery.live. This also means every web deploy (including the
// planned Cloudflare Pages migration, as long as the custom domain stays the
// same) automatically updates the app with no new store submission needed.
const config: CapacitorConfig = {
  appId: 'com.middlemanmerchants.indieartgallery',
  appName: 'Indie Art Gallery',
  webDir: 'dist',
  server: {
    url: 'https://indieartgallery.live',
    androidScheme: 'https',
    allowNavigation: [
      'indieartgallery.live',
      '*.indieartgallery.live',
      '*.stripe.com',
      '*.firebaseapp.com',
      '*.googleapis.com',
      '*.livekit.cloud',
    ],
  },
  android: {
    allowMixedContent: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      launchAutoHide: true,
      backgroundColor: '#F4F2ED',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      overlaysWebView: false,
      style: 'LIGHT',
      backgroundColor: '#F4F2ED',
    },
  },
};

export default config;
