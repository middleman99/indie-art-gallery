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
