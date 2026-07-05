// src/pages/Orders.jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { db } from '../firebase'
import { collection, query, where, onSnapshot, doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import TopBar from '../components/TopBar'
import { Clock, Trophy, Package, AlertCircle, CheckCircle2 } from 'lucide-react'

function calculateFees(price) {
  let artistFee, buyerPremium
  if (price >= 500) { artistFee = 0.04; buyerPremium = 0.03 }
  else if (price >= 100) { artistFee = 0.06; buyerPremium = 0.05 }
  else { artistFee = 0.08; buyerPremium = 0.05 }
  const buyerPremiumAmount = price * buyerPremium
  const total = price + buyerPremiumAmount
  const artistPayout = price - price * artistFee
  return {
    buyerPremiumAmount: buyerPremiumAmount.toFixed(2),
    total: total.toFixed(2),
    buyerPremiumPercent: (buyerPremium * 100).toFixed(0),
    artistPayout: artistPayout.toFixed(2),
  }
}

function TimeRemaining({ deadline }) {
  const [text, setText] = useState('')

  useEffect(() => {
    function tick() {
      const end = deadline.toDate ? deadline.toDate() : new Date(deadline)
      const diff = end - new Date()
      if (diff <= 0) { setText('Expired'); return }
      const mins = Math.floor(diff / 60000)
      const secs = Math.floor((diff % 60000) / 1000)
      setText(`${mins}m ${secs}s left`)
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [deadline])

  return <span>{text}</span>
}

export default function Orders() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const toast = useToast()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [confirmingId, setConfirmingId] = useState(null) // orderId currently being confirmed, prevents double-click

  useEffect(() => {
    if (!user) { setLoading(false); return }
    const q = query(
      collection(db, 'orders'),
      where('buyerId', '==', user.uid)
    )
    const unsub = onSnapshot(q, snap => {
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      list.sort((a, b) => {
        const aTime = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(0)
        const bTime = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(0)
        return bTime - aTime
      })
      setOrders(list)
      setLoading(false)
    }, (err) => {
      console.error('Orders query error:', err)
      setLoading(false)
    })
    return unsub
  }, [user])

  async function confirmDelivery(order) {
    if (confirmingId) return // a confirmation is already in flight, ignore extra clicks
    if (!order.paymentIntentId) {
      toast.error('This order is missing payment info and cannot be released yet. Contact support.')
      return
    }

    setConfirmingId(order.id)
    try {
      // Look up the artist's CURRENT Stripe account fresh, rather than trusting
      // anything stored at order-creation time (which never even existed for this field).
      const artistSnap = await getDoc(doc(db, 'users', order.artistId))
      const artistStripeId = artistSnap.exists() ? artistSnap.data().stripeAccountId : null

      if (!artistStripeId) {
        toast.error(`${order.artistName} hasn't connected a bank account yet, so payout can't be released. Contact support.`)
        return
      }

      const fees = calculateFees(order.winningBid)
      const payoutAmountCents = Math.round(parseFloat(fees.artistPayout) * 100)

      const res = await fetch('/.netlify/functions/stripe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create_transfer',
          data: {
            paymentIntentId: order.paymentIntentId,
            artistStripeId,
            amount: payoutAmountCents,
            orderId: order.id,
          },
        }),
      })
      const result = await res.json()
      if (result.error) throw new Error(result.error)

      await updateDoc(doc(db, 'orders', order.id), {
        status: 'delivered',
        payoutTransferId: result.transferId,
        deliveryConfirmedAt: serverTimestamp(),
      })

      toast.success('Delivery confirmed! Payout released to the artist.')
    } catch (err) {
      console.error('Confirm delivery / payout release failed:', err)
      toast.error('Could not confirm delivery. Try again, or contact support if this keeps happening.')
    } finally {
      setConfirmingId(null)
    }
  }

  if (!user) {
    return (
      <div className="page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', gap: 'var(--sp-4)' }}>
        <Package size={32} color="var(--slate)" />
        <p style={{ color: 'var(--slate)' }}>Sign in to view your orders.</p>
        <button className="btn btn-primary" onClick={() => navigate('/auth')}>Sign In</button>
      </div>
    )
  }

  return (
    <div className="page">
      <TopBar title="My Orders" back />

      <div className="container" style={{ paddingTop: 'var(--sp-6)', maxWidth: 560 }}>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 'var(--sp-10)', color: 'var(--slate)' }}>Loading...</div>
        ) : orders.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 'var(--sp-10)', color: 'var(--slate)' }}>
            <Package size={32} style={{ margin: '0 auto var(--sp-4)', opacity: 0.4 }} />
            <p>No orders yet.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
            {orders.map(order => {
              const fees = calculateFees(order.winningBid)
              const isPending = order.status === 'pending_payment'
              const isPaid = order.status === 'paid'
              const isDelivered = order.status === 'delivered'
              const isExpired = order.paymentDeadline && new Date() > (order.paymentDeadline.toDate ? order.paymentDeadline.toDate() : new Date(order.paymentDeadline))

              return (
                <div key={order.id} style={{ padding: 'var(--sp-5)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-lg)', border: `1px solid ${isPending && !isExpired ? 'rgba(255,215,0,0.3)' : 'rgba(255,248,240,0.08)'}` }}>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--sp-3)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}>
                      <Trophy size={16} color="var(--gold)" />
                      <span style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>Auction Won</span>
                    </div>
                    {isPending && !isExpired && (
                      <span className="badge" style={{ background: 'rgba(255,215,0,0.15)', color: 'var(--gold)' }}>Payment Due</span>
                    )}
                    {isExpired && isPending && (
                      <span className="badge" style={{ background: 'rgba(255,59,59,0.15)', color: 'var(--red-err)' }}>Expired</span>
                    )}
                    {isPaid && (
                      <span className="badge" style={{ background: 'rgba(46,204,113,0.15)', color: 'var(--green-ok)' }}>Paid - Awaiting Delivery</span>
                    )}
                    {isDelivered && (
                      <span className="badge" style={{ background: 'rgba(46,204,113,0.15)', color: 'var(--green-ok)' }}>Delivered</span>
                    )}
                  </div>

                  <div style={{ fontSize: 'var(--text-lg)', fontFamily: 'var(--font-display)', marginBottom: 4 }}>
                    {order.pieceTitle}
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', marginBottom: 'var(--sp-3)' }}>
                    by {order.artistName}
                  </div>

                  <div style={{ padding: 'var(--sp-3)', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--r-md)', marginBottom: 'var(--sp-3)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', marginBottom: 4 }}>
                      <span style={{ color: 'var(--slate)' }}>Winning bid</span>
                      <span>${order.winningBid}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', marginBottom: 4 }}>
                      <span style={{ color: 'var(--slate)' }}>Buyer's premium ({fees.buyerPremiumPercent}%)</span>
                      <span style={{ color: 'var(--slate)' }}>+${fees.buyerPremiumAmount}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, paddingTop: 'var(--sp-2)', borderTop: '1px solid rgba(255,248,240,0.08)' }}>
                      <span>Total</span>
                      <span style={{ color: 'var(--coral)', fontFamily: 'var(--font-mono)' }}>${fees.total}</span>
                    </div>
                  </div>

                  {isPending && !isExpired && order.paymentDeadline && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', fontSize: 'var(--text-xs)', color: 'var(--gold)', marginBottom: 'var(--sp-3)' }}>
                      <Clock size={12} />
                      <TimeRemaining deadline={order.paymentDeadline} />
                    </div>
                  )}

                  {isExpired && isPending && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', fontSize: 'var(--text-xs)', color: 'var(--red-err)', marginBottom: 'var(--sp-3)' }}>
                      <AlertCircle size={12} />
                      Payment window expired. Item released back to auction.
                    </div>
                  )}

                  {isPending && !isExpired && (
                    <button
                      className="btn btn-primary btn-full"
                      onClick={() => navigate('/checkout', {
                        state: {
                          piece: {
                            title: order.pieceTitle,
                            price: order.winningBid,
                            listingType: 'fixed',
                            artistStripeId: null,
                          },
                          orderId: order.id,
                        }
                      })}
                    >
                      Pay ${fees.total} Now
                    </button>
                  )}

                  {isPaid && (
                    <button
                      className="btn btn-primary btn-full"
                      onClick={() => confirmDelivery(order)}
                      disabled={confirmingId === order.id}
                    >
                      <CheckCircle2 size={16} />
                      {confirmingId === order.id ? 'Confirming...' : 'Confirm Delivery Received'}
                    </button>
                  )}

                  {isDelivered && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', fontSize: 'var(--text-xs)', color: 'var(--green-ok)' }}>
                      <CheckCircle2 size={12} />
                      Delivery confirmed - payout released to {order.artistName}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}