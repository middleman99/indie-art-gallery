// src/App.jsx
import { useState, useEffect } from 'react'
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom'
import { doc, updateDoc, getDoc } from 'firebase/firestore'
import { db } from './firebase'
import { useAuth } from './context/AuthContext'
import BottomNav from './components/BottomNav'
import Discover from './pages/Discover'
import LandingPage from './pages/LandingPage'
import ArtistProfile from './pages/ArtistProfile'
import Search from './pages/Search'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
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
  const [status, setStatus] = useState('checking')

  useEffect(() => {
    async function verifyAndNotify() {
      const params = new URLSearchParams(window.location.search)
      const clientSecret = params.get('payment_intent_client_secret')
      const paymentIntentId = params.get('payment_intent')

      if (!clientSecret || !paymentIntentId) {
        setStatus('unknown')
        return
      }

      try {
        const res = await fetch('/.netlify/functions/stripe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'get_payment_intent',
            data: { paymentIntentId, clientSecret },
          }),
        })
        const result = await res.json()

        if (!res.ok || result.error) {
          console.error('Could not retrieve payment intent:', result.error)
          setStatus('failed')
          return
        }

        if (result.status === 'succeeded') {
          setStatus('succeeded')
          const meta = result.metadata || {}

          if (meta.orderId) {
            try {
              await updateDoc(doc(db, 'orders', meta.orderId), {
                status: 'paid',
                paymentIntentId: paymentIntentId,
              })
            } catch (orderErr) {
              console.error('Could not update order status to paid for orderId', meta.orderId, orderErr)
            }

            if (meta.pieceId) {
              try {
                await updateDoc(doc(db, 'listings', meta.pieceId), {
                  status: 'sold',
                  pendingOrderId: null,
                  pendingSaleExpiresAt: null,
                })
              } catch (listingErr) {
                console.error('Could not finalize listing to sold for pieceId', meta.pieceId, listingErr)
              }
            }
          } else {
            console.error('No orderId in payment metadata - order status was not updated. This is expected for direct Buy Now purchases with no pre-existing order.')
          }

          // Certificate of Authenticity - generated BEFORE the email, so the link
          // can be included in it. Reads the order doc directly (rather than
          // widening Stripe metadata further) since it already has pieceTitle,
          // artistName, buyerName, and winningBid in one place. Best-effort: any
          // failure here is logged but never blocks the success screen or the
          // payment_complete email that follows.
          let certificateUrl = null
          if (meta.orderId) {
            try {
              const orderSnap = await getDoc(doc(db, 'orders', meta.orderId))
              if (orderSnap.exists()) {
                const orderData = orderSnap.data()
                const certRes = await fetch('/.netlify/functions/certificate', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    action: 'generate_certificate',
                    data: {
                      pieceTitle: orderData.pieceTitle,
                      artistName: orderData.artistName,
                      buyerName: orderData.buyerName,
                      salePrice: orderData.winningBid,
                      orderId: meta.orderId,
                    },
                  }),
                })
                const certResult = await certRes.json()
                if (certRes.ok && certResult.certificateUrl) {
                  certificateUrl = certResult.certificateUrl
                  await updateDoc(doc(db, 'orders', meta.orderId), { certificateUrl })
                } else {
                  console.error('Certificate generation failed:', certResult.error)
                }
              }
            } catch (certErr) {
              console.error('Could not generate certificate of authenticity:', certErr)
            }
          }

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
                    certificateUrl,
                  },
                }),
              })
            } catch (emailErr) {
              console.error('payment_complete email failed:', emailErr)
            }
          } else {
            console.error('PaymentIntent succeeded but metadata was incomplete, skipped payment_complete email:', meta)
          }
        } else {
          console.error('PaymentIntent did not succeed, status:', result.status)
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
  const isLoggedOutLandingPage = !user && window.location.pathname === '/'
  const hideNav = isLoggedOutLandingPage
    || noNavPaths.some(p => window.location.pathname.startsWith(p))
    || window.location.pathname.startsWith('/show/')
  return (
    <>
      <Routes>
        <Route path="/"                element={user ? <Discover /> : <LandingPage />} />
        <Route path="/live"            element={<Live />} />
        <Route path="/store"           element={<Store />} />
        <Route path="/auth"            element={user ? <Navigate to="/" replace /> : <Auth />} />
        <Route path="/profile"         element={<Profile />} />
        <Route path="/list"            element={<ArtistRoute><ListArt /></ArtistRoute>} />
        <Route path="/connect-stripe"  element={<ProtectedRoute><ConnectStripe /></ProtectedRoute>} />
        <Route path="/admin"           element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="/piece/:id"       element={<PieceDetail />} />
        <Route path="/artist/:id"      element={<ArtistProfile />} />
        <Route path="/search"          element={<Search />} />
        <Route path="/terms"           element={<TermsOfService />} />
        <Route path="/privacy"         element={<PrivacyPolicy />} />
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