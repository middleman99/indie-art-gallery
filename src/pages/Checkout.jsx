// src/pages/Checkout.jsx
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import TopBar from '../components/TopBar'
import { Clock, ShieldCheck } from 'lucide-react'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

// Inner form component
function CheckoutForm({ piece, fees, clientSecret }) {
  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()
  const toast = useToast()
  const [processing, setProcessing] = useState(false)
  const [autopay, setAutopay] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!stripe || !elements) return
    setProcessing(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order-complete`,
      },
    })

    if (error) {
      toast.error(error.message)
      setProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>

      {/* Order summary */}
      <div style={{ padding: 'var(--sp-4)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--sp-2)', fontSize: 'var(--text-sm)' }}>
          <span style={{ color: 'var(--slate)' }}>{piece.title}</span>
          <span>${piece.price || piece.currentBid}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--sp-3)', fontSize: 'var(--text-sm)' }}>
          <span style={{ color: 'var(--slate)' }}>Buyer's premium ({fees.buyerPremiumPercent}%)</span>
          <span style={{ color: 'var(--slate)' }}>+${fees.buyerPremiumAmount}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 'var(--sp-3)', borderTop: '1px solid rgba(255,248,240,0.08)', fontWeight: 700 }}>
          <span>Total</span>
          <span style={{ color: 'var(--coral)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-lg)' }}>${fees.total}</span>
        </div>
      </div>

      {/* 1 hour notice */}
      <div style={{ padding: 'var(--sp-3)', background: 'rgba(255,215,0,0.06)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,215,0,0.15)', fontSize: 'var(--text-xs)', color: 'var(--slate)', display: 'flex', gap: 'var(--sp-3)', alignItems: 'flex-start' }}>
        <Clock size={14} style={{ flexShrink: 0, color: 'var(--gold)', marginTop: 1 }} />
        <span>You have <strong style={{ color: 'var(--gold)' }}>1 hour</strong> to complete this payment before the item is released back to other buyers.</span>
      </div>

      {/* Stripe Payment Element */}
      <div style={{ padding: 'var(--sp-4)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
        <div className="input-label" style={{ marginBottom: 'var(--sp-3)' }}>Payment Details</div>
        <PaymentElement options={{ layout: 'tabs' }} />
      </div>

      {/* Autopay toggle */}
      <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', cursor: 'pointer', fontSize: 'var(--text-sm)' }}>
        <input
          type="checkbox"
          checked={autopay}
          onChange={e => setAutopay(e.target.checked)}
          style={{ width: 18, height: 18, accentColor: 'var(--coral)', cursor: 'pointer' }}
        />
        Enable autopay for future auction wins
      </label>

      {/* Security notice */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', fontSize: 'var(--text-xs)', color: 'var(--slate)', justifyContent: 'center' }}>
        <ShieldCheck size={13} color="var(--green-ok)" />
        Secured by Stripe. We never store your card details.
      </div>

      <button
        className="btn btn-primary btn-lg btn-full"
        type="submit"
        disabled={!stripe || processing}
      >
        {processing ? 'Processing...' : `Pay $${fees.total}`}
      </button>
    </form>
  )
}

// Fee calculator
function calculateFees(price) {
  let artistFee, buyerPremium
  if (price >= 500) {
    artistFee = 0.04
    buyerPremium = 0.03
  } else if (price >= 100) {
    artistFee = 0.06
    buyerPremium = 0.05
  } else {
    artistFee = 0.08
    buyerPremium = 0.05
  }
  const buyerPremiumAmount = price * buyerPremium
  const total = price + buyerPremiumAmount
  return {
    price,
    buyerPremiumAmount: buyerPremiumAmount.toFixed(2),
    total: total.toFixed(2),
    platformFee: (price * artistFee).toFixed(2),
    artistPayout: (price - price * artistFee).toFixed(2),
    buyerPremiumPercent: (buyerPremium * 100).toFixed(0),
  }
}

export default function Checkout() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const toast = useToast()
  const { user } = useAuth()
  const [clientSecret, setClientSecret] = useState(null)
  const [loading, setLoading] = useState(true)

  const piece = state?.piece
  // Present only when arriving from Orders.jsx (an auction win with a pending order).
  // Absent for direct Buy Now purchases that never created an order doc first.
  const orderId = state?.orderId || null
  const price = piece?.listingType === 'fixed' ? piece.price : (piece?.currentBid || piece?.startingBid)
  const fees = piece ? calculateFees(price) : null

  useEffect(() => {
    if (!user) { navigate('/auth'); return }
    if (!piece) { navigate('/store'); return }

    async function createIntent() {
      try {
        const metadata = {
          pieceTitle: piece.title,
          buyerEmail: user.email,
          total: fees.total,
        }
        if (orderId) metadata.orderId = orderId

        const res = await fetch('/.netlify/functions/stripe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'create_payment_intent',
            data: {
              amount: Math.round(parseFloat(fees.total) * 100),
              // No artistStripeId/platformFeePercent here anymore - this charges the
              // platform's own balance only. The artist's payout is transferred
              // separately later, when the buyer confirms delivery (see Orders.jsx).
              // transferGroup links the eventual transfer back to this specific charge.
              transferGroup: orderId || undefined,
              // Metadata survives Stripe's full-page redirect to /order-complete,
              // where location.state (React Router) is no longer available.
              metadata,
            },
          }),
        })
        const { clientSecret, error } = await res.json()
        if (error) throw new Error(error)
        setClientSecret(clientSecret)
      } catch (err) {
        toast.error('Could not initialize payment. Try again.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    createIntent()
  }, [])

  if (!piece) return null

  const appearance = {
    theme: 'night',
    variables: {
      colorPrimary: '#FF4D4D',
      colorBackground: '#16213E',
      colorText: '#FFF8F0',
      colorDanger: '#FF3B3B',
      fontFamily: 'DM Sans, system-ui, sans-serif',
      borderRadius: '12px',
    },
  }

  return (
    <div className="page">
      <TopBar title="Checkout" back />

      <div className="container" style={{ paddingTop: 'var(--sp-6)', maxWidth: 480 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--sp-6)' }}>
          Complete Purchase
        </h2>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 'var(--sp-10)', color: 'var(--slate)' }}>
            Setting up payment...
          </div>
        ) : clientSecret ? (
          <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
            <CheckoutForm piece={piece} fees={fees} clientSecret={clientSecret} />
          </Elements>
        ) : (
          <div style={{ textAlign: 'center', padding: 'var(--sp-10)', color: 'var(--slate)' }}>
            <p>Could not load payment. Please try again.</p>
            <button className="btn btn-ghost" style={{ marginTop: 'var(--sp-4)' }} onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  )
}