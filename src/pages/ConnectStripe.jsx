// src/pages/ConnectStripe.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import TopBar from '../components/TopBar'
import { CreditCard, CheckCircle, ExternalLink } from 'lucide-react'

export default function ConnectStripe() {
  const { user, profile, refreshProfile } = useAuth()
  const toast = useToast()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const isConnected = !!profile?.stripeAccountId

  async function connectStripe() {
    setLoading(true)
    try {
      // Reuse the existing Stripe account if one was already created for this artist,
      // instead of creating a brand new one every time this button is clicked. Without
      // this check, clicking Connect Stripe more than once (e.g. retrying after an
      // earlier error) silently created duplicate Stripe accounts, and whichever one
      // happened to save to Firestore last might not be the one that actually
      // completed onboarding - a real bug that caused a confusing "Restricted account"
      // failure later, at payout time, that had nothing to do with the payout code itself.
      let accountId = profile?.stripeAccountId

      if (!accountId) {
        const res = await fetch('/.netlify/functions/stripe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'create_account', data: {} }),
        })
        const accountData = await res.json()

        if (!res.ok || !accountData.accountId) {
          console.error('Stripe account creation failed:', accountData.error || accountData)
          toast.error(accountData.error || 'Could not create your Stripe account. Try again.')
          setLoading(false)
          return
        }
        accountId = accountData.accountId

        // Save accountId to Firebase
        await updateDoc(doc(db, 'users', user.uid), {
          stripeAccountId: accountId,
        })
        await refreshProfile()
      }

      // Get onboarding link
      const res2 = await fetch('/.netlify/functions/stripe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create_account_link',
          data: {
            accountId,
            returnUrl: window.location.origin,
          },
        }),
      })
      const linkData = await res2.json()

      if (!res2.ok || !linkData.url) {
        console.error('Stripe onboarding link creation failed:', linkData.error || linkData)
        toast.error(linkData.error || 'Your Stripe account was created, but we could not start onboarding. Try again from this page.')
        setLoading(false)
        return
      }

      // Redirect to Stripe onboarding
      window.location.href = linkData.url

    } catch (err) {
      toast.error('Could not connect Stripe. Try again.')
      console.error(err)
      setLoading(false)
    }
  }

  return (
    <div className="page">
      <TopBar title="Get Paid" back />

      <div className="container" style={{ paddingTop: 'var(--sp-8)', maxWidth: 480 }}>

        {isConnected ? (
          <div style={{ textAlign: 'center', padding: 'var(--sp-10) 0' }}>
            <CheckCircle size={48} color="var(--green-ok)" style={{ margin: '0 auto var(--sp-4)' }} />
            <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: 'var(--sp-3)' }}>
              You're set up to get paid
            </h2>
            <p style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)', marginBottom: 'var(--sp-6)' }}>
              Your Stripe account is connected. You'll receive payouts after buyers confirm delivery.
            </p>
            <button className="btn btn-ghost" onClick={() => navigate('/profile')}>
              Back to Profile
            </button>
          </div>
        ) : (
          <div>
            <div style={{ textAlign: 'center', marginBottom: 'var(--sp-8)' }}>
              <div style={{ width: 72, height: 72, borderRadius: 'var(--r-lg)', background: 'rgba(255,77,77,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--sp-4)' }}>
                <CreditCard size={32} color="var(--coral)" />
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--sp-3)' }}>
                Connect your bank account
              </h2>
              <p style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                We use Stripe to send your earnings directly to your bank account. It's free and takes about 2 minutes.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)', marginBottom: 'var(--sp-8)' }}>
              {[
                'Free to set up — no monthly fees',
                'Payouts after buyer confirms delivery',
                'Stripe handles all security and compliance',
                'Earnings deposited directly to your bank',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', fontSize: 'var(--text-sm)' }}>
                  <CheckCircle size={16} color="var(--green-ok)" style={{ flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>

            <button
              className="btn btn-primary btn-lg btn-full"
              onClick={connectStripe}
              disabled={loading}
            >
              <ExternalLink size={16} />
              {loading ? 'Connecting…' : 'Connect with Stripe'}
            </button>

            <p style={{ textAlign: 'center', fontSize: 'var(--text-xs)', color: 'var(--slate)', marginTop: 'var(--sp-4)' }}>
              You'll be redirected to Stripe to complete setup safely.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}