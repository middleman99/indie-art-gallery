// src/pages/ResaleListing.jsx
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { db } from '../firebase'
import { doc, getDoc, updateDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import TopBar from '../components/TopBar'
import { Lock, Gavel, DollarSign, Package, Monitor } from 'lucide-react'

export default function ResaleListing() {
  const { orderId } = useParams()
  const { user, profile } = useAuth()
  const navigate = useNavigate()
  const toast = useToast()

  const [order, setOrder] = useState(null)
  const [originalListing, setOriginalListing] = useState(null)
  const [originalArtistName, setOriginalArtistName] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const [form, setForm] = useState({
    description: '',
    listingType: 'fixed',
    price: '',
    startingBid: '',
    reservePrice: '',
    auctionDuration: '24',
    deliveryType: 'physical',
  })

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  useEffect(() => {
    async function load() {
      if (!user || !orderId) return
      try {
        const orderSnap = await getDoc(doc(db, 'orders', orderId))
        if (!orderSnap.exists()) {
          toast.error('Order not found.')
          navigate('/collection')
          return
        }
        const orderData = { id: orderSnap.id, ...orderSnap.data() }

        if (orderData.buyerId !== user.uid) {
          toast.error('This is not your order.')
          navigate('/collection')
          return
        }
        if (orderData.status !== 'delivered') {
          toast.error('You can only relist a piece after delivery has been confirmed.')
          navigate('/collection')
          return
        }
        if (orderData.relisted) {
          toast.error('This piece has already been relisted.')
          navigate('/collection')
          return
        }

        setOrder(orderData)

        if (orderData.pieceId) {
          try {
            const listingSnap = await getDoc(doc(db, 'listings', orderData.pieceId))
            if (listingSnap.exists()) setOriginalListing(listingSnap.data())
          } catch (e) {
            // fine - resale can proceed without the original listing's extra details
          }
        }

        if (orderData.originalArtistId) {
          try {
            const artistSnap = await getDoc(doc(db, 'users', orderData.originalArtistId))
            if (artistSnap.exists()) setOriginalArtistName(artistSnap.data().displayName || orderData.artistName)
            else setOriginalArtistName(orderData.artistName)
          } catch (e) {
            setOriginalArtistName(orderData.artistName)
          }
        }
      } catch (err) {
        console.error('Could not load order for resale:', err)
        toast.error('Could not load this piece. Try again.')
        navigate('/collection')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [user, orderId])

  async function handleSubmit(e) {
    e.preventDefault()
    if (form.listingType === 'fixed' && !form.price) { toast.error('Set a price.'); return }
    if (form.listingType === 'auction' && !form.startingBid) { toast.error('Set a starting bid.'); return }

    setSaving(true)
    try {
      const royaltyPercent = order.royaltyPercent || 0

      const listingData = {
        title: order.pieceTitle,
        titleLower: order.pieceTitle.trim().toLowerCase(),
        description: form.description.trim(),
        artType: originalListing?.artType || '',
        medium: originalListing?.medium || '',
        dimensions: originalListing?.dimensions || '',
        year: originalListing?.year || '',
        imageUrl: originalListing?.imageUrl || '',
        originalArtistId: order.originalArtistId,
        originalArtistName: originalArtistName || order.artistName,
        royaltyPercent,
        isResale: true,
        previousOwnerId: user.uid,
        previousOwnerName: profile?.displayName || 'Previous Owner',
        sourceOrderId: order.id,
        artistId: user.uid,
        artistName: profile?.displayName || 'Seller',
        listingType: form.listingType,
        price: form.listingType === 'fixed' ? parseFloat(form.price) : null,
        startingBid: form.listingType === 'auction' ? parseFloat(form.startingBid) : null,
        reservePrice: form.listingType === 'auction' && form.reservePrice ? parseFloat(form.reservePrice) : null,
        currentBid: null,
        auctionEndsAt: form.listingType === 'auction'
          ? new Date(Date.now() + parseInt(form.auctionDuration, 10) * 60 * 60 * 1000)
          : null,
        currentBidderId: null,
        currentBidderName: null,
        auctionClosed: false,
        deliveryType: form.deliveryType,
        allowOffers: false,
        status: 'active',
        bidCount: 0,
        viewCount: 0,
        wishlistCount: 0,
        createdAt: serverTimestamp(),
        soldAt: null,
        buyerId: null,
      }

      const newListingRef = await addDoc(collection(db, 'listings'), listingData)

      await updateDoc(doc(db, 'orders', order.id), {
        relisted: true,
        resaleListingId: newListingRef.id,
      })

      toast.success('Resale listing published!')
      navigate(`/piece/${newListingRef.id}`)
    } catch (err) {
      console.error('Could not publish resale listing:', err)
      toast.error('Could not publish. Try again.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', color: 'var(--slate)' }}>
        Loading...
      </div>
    )
  }

  if (!order) return null

  return (
    <div className="page">
      <TopBar title="Relist This Piece" back />

      <div className="container" style={{ paddingTop: 'var(--sp-6)', maxWidth: 560 }}>

        <div style={{ padding: 'var(--sp-4)', background: 'rgba(255,215,0,0.06)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,215,0,0.2)', marginBottom: 'var(--sp-6)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 'var(--sp-3)' }}>
            <Lock size={12} /> Locked - Resale Royalty
          </div>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--cream)', lineHeight: 1.6 }}>
            <strong>{order.pieceTitle}</strong> was originally created by <strong>{originalArtistName}</strong>.
            {royaltyDisplay(order.royaltyPercent)}
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>

          <div className="input-group">
            <label className="input-label">Condition / Description</label>
            <textarea
              className="input"
              placeholder="Describe the piece's current condition and any details for buyers..."
              value={form.description}
              onChange={e => set('description', e.target.value)}
            />
          </div>

          <div className="divider" />

          <div>
            <div className="input-label" style={{ marginBottom: 'var(--sp-3)' }}>Delivery Type *</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-3)' }}>
              {[
                { value: 'physical', label: 'Physical', desc: 'Buyer pays shipping', icon: Package },
                { value: 'digital', label: 'Digital', desc: 'File unlocks on payment', icon: Monitor },
              ].map(({ value, label, desc, icon: Icon }) => (
                <div key={value} onClick={() => set('deliveryType', value)} style={{ padding: 'var(--sp-4)', border: `2px solid ${form.deliveryType === value ? 'var(--coral)' : 'rgba(255,248,240,0.1)'}`, borderRadius: 'var(--r-md)', cursor: 'pointer', background: form.deliveryType === value ? 'var(--coral-soft)' : 'transparent', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <Icon size={18} color={form.deliveryType === value ? 'var(--coral)' : 'var(--slate)'} />
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{label}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="divider" />

          <div>
            <div className="input-label" style={{ marginBottom: 'var(--sp-3)' }}>Listing Type *</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-3)' }}>
              {[
                { value: 'fixed', label: 'Fixed Price', desc: 'Set your price', icon: DollarSign },
                { value: 'auction', label: 'Auction', desc: 'Let buyers bid', icon: Gavel },
              ].map(({ value, label, desc, icon: Icon }) => (
                <div key={value} onClick={() => set('listingType', value)} style={{ padding: 'var(--sp-4)', border: `2px solid ${form.listingType === value ? 'var(--coral)' : 'rgba(255,248,240,0.1)'}`, borderRadius: 'var(--r-md)', cursor: 'pointer', background: form.listingType === value ? 'var(--coral-soft)' : 'transparent', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <Icon size={18} color={form.listingType === value ? 'var(--coral)' : 'var(--slate)'} />
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{label}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {form.listingType === 'fixed' && (
            <div className="input-group">
              <label className="input-label">Price (USD) *</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>$</span>
                <input className="input" type="number" min="1" step="0.01" required placeholder="0.00" value={form.price} onChange={e => set('price', e.target.value)} style={{ paddingLeft: 28 }} />
              </div>
            </div>
          )}

          {form.listingType === 'auction' && (
            <>
              <div className="input-group">
                <label className="input-label">Starting Bid (USD) *</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>$</span>
                  <input className="input" type="number" min="1" step="0.01" required placeholder="0.00" value={form.startingBid} onChange={e => set('startingBid', e.target.value)} style={{ paddingLeft: 28 }} />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Reserve Price (optional)</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>$</span>
                  <input className="input" type="number" min="0" step="0.01" placeholder="No reserve" value={form.reservePrice} onChange={e => set('reservePrice', e.target.value)} style={{ paddingLeft: 28 }} />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Auction Duration</label>
                <select className="input" value={form.auctionDuration} onChange={e => set('auctionDuration', e.target.value)}>
                  <option value="12">12 hours</option>
                  <option value="24">24 hours</option>
                  <option value="48">48 hours</option>
                  <option value="72">3 days</option>
                  <option value="168">7 days</option>
                </select>
              </div>
            </>
          )}

          <button className="btn btn-primary btn-lg btn-full" type="submit" disabled={saving}>
            {saving ? 'Publishing...' : 'Publish Resale Listing'}
          </button>
        </form>
      </div>
    </div>
  )
}

function royaltyDisplay(royaltyPercent) {
  if (!royaltyPercent) {
    return ' This piece has no resale royalty set - the full sale proceeds go to you.'
  }
  return ` ${royaltyPercent}% of this sale will automatically go to them - this can't be changed.`
}