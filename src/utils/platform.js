// src/utils/platform.js
//
// Google Play policy requires purchases of digital content consumed inside
// the app to go through Google Play Billing, not a third-party processor
// like Stripe. Physical goods (shipped art) are exempt and can keep using
// Stripe. Rather than integrate Play Billing right now, the Android app
// blocks in-app purchase of digital pieces and sends buyers to the website
// to complete those - this keeps the whole app on Stripe with no Play
// Billing integration required, and avoids a policy rejection/suspension.
//
// @capacitor/core works fine on the plain web build too - isNativePlatform()
// simply returns false there, so this is safe to import everywhere.
import { Capacitor } from '@capacitor/core'

export function isNativeApp() {
  try {
    return Capacitor.isNativePlatform()
  } catch {
    return false
  }
}

export function isDigitalPurchaseBlocked(piece) {
  return isNativeApp() && piece?.deliveryType === 'digital'
}

export const WEBSITE_URL = 'https://indieartgallery.live'

// The Android app bundles its own copy of the built web assets (see
// capacitor.config.ts - webDir only, no server.url), so it runs from a local
// WebView origin instead of https://indieartgallery.live. Relative API calls
// like fetch('/api/stripe') would resolve against that local origin and fail,
// so native builds need the full origin prefixed on every /api/* call. On
// the plain website, API_BASE is '' so calls stay relative/same-origin as
// before - no behavior change there.
export const API_BASE = isNativeApp() ? WEBSITE_URL : ''
