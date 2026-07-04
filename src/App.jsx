// src/App.jsx
import { useState, useEffect } from 'react'
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { useAuth } from './context/AuthContext'
import BottomNav from './components/BottomNav'
import Discover from './pages/Discover'
import Live from './pages/Live'
import Store from './pages/Store'
import Profile from './pages/Profile'
import Auth from './pages/Auth'
import ListArt from './pages/ListArt'
import Admin from './pages/Admin'
import ConnectStripe from './pages/ConnectStripe'
import PieceDetail from './pages/PieceDetail'
import Checkout from './pages/Checkout'
import GoLive from './pages/GoLive'
import ShowRoom from './pages/ShowRoom'
import Orders from './pages/Orders'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100dvh', color: 'var(--slate)' }}>Loading…</div>
  if (!user) return <Navigate to="/auth" replace />
  return children
}
function ArtistRoute({ children }) {
  const { user, isArtist, loading } = useAuth()
  if (loading) return null
  if (!user) return <Navigate to="/auth" replace />
  if (!isArtist) return <Navigate to="/profile" replace />
  return children
}

function OrderComplete() {
  const navigate = useNavigate()
  // 'checking' -> verifying with Stripe, 'succeeded' -> confirmed paid,
  // 'failed' -> payment did not succeed, 'unknown' -> no client secret in URL at all
  const [status, setStatus] = useState('checking')

  useEffect(() => {
    async function verifyAndNotify() {
      const params = new URLSearchParams(window.location.search)
      const clientSecret = params.get('payment_intent_client_secret')

      if (!clientSecret) {
        // Page was reached without a Stripe redirect (e.g. direct nav) - nothing to verify
        setStatus('unknown')
        return
      }

      try {
        const stripe = await stripePromise
        const { paymentIntent, error } = await stripe.retrievePaymentIntent(clientSecret)

        if (error || !paymentIntent) {
          console.error('Could not retrieve payment intent:', error)
          setStatus('failed')
          return
        }

        if (paymentIntent.status === 'succeeded') {
          setStatus('succeeded')

          // Fire payment_complete email using metadata attached at intent creation
          // (location.state from Checkout.jsx does not survive this redirect)
          const meta = paymentIntent.metadata || {}
          if (meta.buyerEmail && meta.pieceTitle && meta.total) {
            try {
              await fetch('/.netlify/functions/email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  type: 'payment_complete',
                  data: {
                    buyerEmail: meta.buyerEmail,
                    pieceTitle: meta.pieceTitle,
                    total: meta.total,
                  },
                }),
              })
            } catch (emailErr) {
              // Don't block the success screen on an email failure
              console.error('payment_complete email failed:', emailErr)
            }
          } else {
            console.error('PaymentIntent succeeded but metadata was incomplete, skipped payment_complete email:', meta)
          }
        } else {
          // e.g. requires_payment_method (declined), requires_action, canceled
          console.error('PaymentIntent did not succeed, status:', paymentIntent.status)
          setStatus('failed')
        }
      } catch (err) {
        console.error('Error verifying payment:', err)
        setStatus('failed')
      }
    }

    verifyAndNotify()
  }, [])

  if (status === 'checking') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100dvh', padding: 'var(--sp-6)', textAlign: 'center', color: 'var(--slate)' }}>
        Confirming your payment...
      </div>
    )
  }

  if (status === 'failed') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100dvh', padding: 'var(--sp-6)', textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: 'var(--sp-4)' }}>⚠️</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--sp-3)' }}>
          Payment Not Completed
        </h2>
        <p style={{ color: 'var(--slate)', marginBottom: 'var(--sp-6)', maxWidth: 300 }}>
          Something went wrong confirming your payment. If you were charged, contact support - otherwise please try again.
        </p>
        <button className="btn btn-primary" onClick={() => navigate('/orders')}>
          View Orders
        </button>
      </div>
    )
  }

  // 'succeeded' or 'unknown' (unknown = reached page directly with no way to verify, so we don't claim failure)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100dvh', padding: 'var(--sp-6)', textAlign: 'center' }}>
      <div style={{ fontSize: '4rem', marginBottom: 'var(--sp-4)' }}>🎨</div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--sp-3)' }}>
        Payment Complete!
      </h2>
      <p style={{ color: 'var(--slate)', marginBottom: 'var(--sp-6)', maxWidth: 300 }}>
        Your purchase is confirmed. The artist will be notified and funds will be released after you confirm delivery.
      </p>
      <button className="btn btn-primary" onClick={() => navigate('/')}>
        Back to Discover
      </button>
    </div>
  )
}

const noNavPaths = ['/auth', '/checkout', '/order-complete']
export default function App() {
  const { user } = useAuth()
  const hideNav = noNavPaths.some(p => window.location.pathname.startsWith(p))
    || window.location.pathname.startsWith('/show/')
  return (
    <>
      <Routes>
        <Route path="/"                element={<Discover />} />
        <Route path="/live"            element={<Live />} />
        <Route path="/store"           element={<Store />} />
        <Route path="/auth"            element={user ? <Navigate to="/" replace /> : <Auth />} />
        <Route path="/profile"         element={<Profile />} />
        <Route path="/list"            element={<ArtistRoute><ListArt /></ArtistRoute>} />
        <Route path="/connect-stripe"  element={<ProtectedRoute><ConnectStripe /></ProtectedRoute>} />
        <Route path="/admin"           element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="/piece/:id"       element={<PieceDetail />} />
        <Route path="/checkout"        element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path="/order-complete"  element={<OrderComplete />} />
        <Route path="/go-live"         element={<ArtistRoute><GoLive /></ArtistRoute>} />
        <Route path="/show/:id"        element={<ShowRoom />} />
        <Route path="/orders"          element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path="*"                element={<Navigate to="/" replace />} />
      </Routes>
      {!hideNav && <BottomNav />}
    </>
  )
}