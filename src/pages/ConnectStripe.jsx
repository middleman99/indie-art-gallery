// src/pages/ConnectStripe.jsx
import { useState, useEffect } from 'react'
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
  const [checkingStatus, setCheckingStatus] = useState(false)

  // FIX: an artist is only actually connected once Stripe confirms real onboarding
  // completion (payoutsEnabled) - NOT the instant a shell account is created.
  // stripeAccountId existing just means create_account succeeded; it says nothing
  // about whether the artist ever saw or finished the actual onboarding form.
  const isConnected = !!profile?.stripeOnboardingComplete

  // If an account exists but we haven't confirmed onboarding is actually done,
  // verify with Stripe directly. This covers: returning from the Stripe redirect
  // (?stripe=success), reopening the app later, or closing the tab mid-onboarding
  // and coming back - all cases where relying on the redirect alone would miss it.
  useEffect(() => {
    async function verifyStatus() {
      if (!profile?.stripeAccountId || profile?.stripeOnboardingComplete) return
      setCheckingStatus(true)
      try {
        const res = await fetch('/.netlify/functions/stripe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'get_account_status',
            data: { accountId: profile.stripeAccountId },
          }),
        })
        const status = await res.json()
        if (res.ok && status.payoutsEnabled && status.detailsSubmitted) {
          await updateDoc(doc(db, 'users', user.uid), { stripeOnboardingComplete: true })
          await refreshProfile()
        }
      } catch (err) {
        console.error('Could not verify Stripe onboarding status:', err)
      } finally {
        setCheckingStatus(false)
      }
    }
    verifyStatus()
  }, [profile?.stripeAccountId, profile?.stripeOnboardingComplete])

  async function connectStripe() {
    setLoading(true)
    try {
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

        await updateDoc(doc(db, 'users', user.uid), {
          stripeAccountId: accountId,
        })
        await refreshProfile()
      }

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
        ) : profile?.stripeAccountId ? (
          <div style={{ textAlign: 'center', padding: 'var(--sp-10) 0' }}>
            <div style={{ width: 72, height: 72, borderRadius: 'var(--r-lg)', background: 'rgba(255,215,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--sp-4)' }}>
              <CreditCard size={32} color="var(--gold)" />
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--sp-3)' }}>
              Onboarding not finished yet
            </h2>
            <p style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)', marginBottom: 'var(--sp-6)', lineHeight: 1.7 }}>
              You started connecting your bank account but Stripe hasn't confirmed your details yet. Finish onboarding to start receiving payouts.
            </p>
            <button className="btn btn-primary btn-lg btn-full" onClick={connectStripe} disabled={loading}>
              <ExternalLink size={16} />
              {loading ? 'Connecting…' : checkingStatus ? 'Checking status…' : 'Finish Setting Up'}
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