import type { CapacitorConfig } from '@capacitor/cli';

// This app bundles its OWN copy of the built web assets (webDir: 'dist') into
// the APK, instead of loading indieartgallery.live remotely - it runs fully
// standalone as a real installed app, not a wrapped webpage: no network
// round-trip to fetch the app shell, no dependency on the live site being up
// to even open. It still talks to the internet for actual data (Firebase,
// Stripe, the Cloudflare Worker /api/* endpoints, LiveKit) exactly like any
// native app would - see src/utils/platform.js's API_BASE, which prefixes
// those calls with the full indieartgallery.live origin on native builds
// since relative paths would otherwise resolve against the local bundle.
// androidScheme/allowNavigation still matter here even without server.url:
// the local bundle is served from https://localhost, and allowNavigation
// covers any full-page navigations (e.g. a payment redirect) to these hosts.
const config: CapacitorConfig = {
  appId: 'com.middlemanmerchants.indieartgallery',
  appName: 'Indie Art Gallery',
  webDir: 'dist',
  server: {
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
