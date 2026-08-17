// src/pages/DeleteAccount.jsx
//
// Public, no-login-required page satisfying Google Play's requirement that
// account deletion be requestable via a web resource, not just in-app
// (Profile.jsx has the in-app path for logged-in users).
import TopBar from '../components/TopBar'
import { Trash2 } from 'lucide-react'

export default function DeleteAccount() {
  return (
    <div className="page">
      <TopBar title="Delete Account" back />
      <div className="container" style={{ paddingTop: 'var(--sp-6)', paddingBottom: 'var(--sp-10)', maxWidth: 600 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--sp-6)' }}>
          <Trash2 size={28} color="var(--coral)" style={{ margin: '0 auto var(--sp-3)' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)' }}>
            Request Account Deletion
          </h2>
        </div>

        <div style={{ fontSize: 'var(--text-sm)', lineHeight: 1.8, color: 'var(--cream)' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', marginBottom: 'var(--sp-2)' }}>
            If you have the app or website open
          </h3>
          <p style={{ color: 'var(--slate)', marginBottom: 'var(--sp-5)' }}>
            Log in, go to <strong>Profile</strong>, scroll to <strong>Danger Zone</strong>, and select
            <strong> Delete Account</strong>. This signs you out immediately and deletes your profile
            and personal data.
          </p>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', marginBottom: 'var(--sp-2)' }}>
            If you can't log in, or don't have the app
          </h3>
          <p style={{ color: 'var(--slate)', marginBottom: 'var(--sp-5)' }}>
            Email{' '}
            <a href="mailto:manager@middlemanmerchants.com?subject=Account%20Deletion%20Request" style={{ color: 'var(--coral)' }}>
              manager@middlemanmerchants.com
            </a>{' '}
            from the address on your account (or including your account email and display name) with
            the subject "Account Deletion Request." We will verify and delete your account and
            personal data within 30 days.
          </p>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', marginBottom: 'var(--sp-2)' }}>
            What gets deleted
          </h3>
          <p style={{ color: 'var(--slate)', marginBottom: 'var(--sp-2)' }}>
            Your account profile, bio, uploaded photos, and login credentials are deleted.
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', marginBottom: 'var(--sp-2)', marginTop: 'var(--sp-5)' }}>
            What's retained, and why
          </h3>
          <p style={{ color: 'var(--slate)', marginBottom: 'var(--sp-2)' }}>
            Records of completed orders and payouts (amounts, dates, and the listing involved) are
            retained as long as required for tax, accounting, and fraud-prevention obligations, as
            described in our{' '}
            <a href="/privacy" style={{ color: 'var(--coral)' }}>Privacy Policy</a>. These are not
            linked to a usable account once deletion is complete.
          </p>
        </div>
      </div>
    </div>
  )
}
