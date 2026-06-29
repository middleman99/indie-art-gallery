# 🎨 Indie Art Gallery

> Buy, sell, and discover original art — live or anytime.
> Built under Middleman Merchants LLC

---

## Phase 1 — What's Built

- ✅ PWA shell (installable on Android/iOS)
- ✅ Full design system (coral/cream/charcoal/gold)
- ✅ Firebase Auth (signup with role selection, login)
- ✅ Firestore user profiles
- ✅ Discover page (live shows + art grid + filters)
- ✅ Store / Browse page (search + filter + sort)
- ✅ Live shows page (live now + upcoming)
- ✅ Artist profile with edit, stats, listings
- ✅ List Art page (fixed price + auction, physical + digital)
- ✅ Admin dashboard (manager@middlemanmerchants.com only)
- ✅ Bottom navigation
- ✅ Toast notifications

## Coming Next

- 🔜 Phase 2: Stripe Connect (artist payouts, buyer checkout, buyer's premium)
- 🔜 Phase 3: LiveKit live video + real-time bidding + raid feature
- 🔜 Phase 4: Admin dashboard (real data, ban tools, payout management)
- 🔜 Phase 5: Google Play (TWA submission)

---

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project called `indie-art-gallery`
3. Enable **Authentication** → Email/Password
4. Enable **Firestore Database** → Start in test mode
5. Enable **Storage** → Start in test mode
6. Go to Project Settings → Your apps → Add Web App
7. Copy the config values

### 3. Environment Variables
```bash
cp .env.example .env.local
# Fill in your Firebase values
```

### 4. Run locally
```bash
npm run dev
```

### 5. Deploy to Netlify
```bash
npm run build
# Drag the `dist/` folder to Netlify, or connect your GitHub repo
# Add all VITE_ env vars in Netlify → Site Settings → Environment Variables
```

---

## Firestore Security Rules (set these in Firebase Console)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
    }
    match /listings/{listingId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth.uid == resource.data.artistId;
    }
  }
}
```

---

## Fee Structure

| Sale Price   | Artist Fee | Buyer's Premium |
|---|---|---|
| Under $100   | 8%         | 5%              |
| $100–$499    | 6%         | 5%              |
| $500+        | 4%         | 3%              |

Fees are deducted from artist payout after buyer confirms delivery.

---

## Admin Access
Only `manager@middlemanmerchants.com` has admin access — enforced in the app and in Firestore rules (Phase 4).
