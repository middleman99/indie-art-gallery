// src/pages/PieceDetail.jsx
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import TopBar from '../components/TopBar'
import { Heart, Share2, Package, Monitor, Gavel, ShoppingBag, Clock } from 'lucide-react'

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
  const platformFee = price * artistFee
  const artistPayout = price - platformFee
  return {
    price,
    buyerPremiumAmount: buyerPremiumAmount.toFixed(2),
    total: total.toFixed(2),
    platformFee: platformFee.toFixed(2),
    artistPayout: artistPayout.toFixed(2),
    buyerPremiumPercent: (buyerPremium * 100).toFixed(0),
  }
}

const DEMO_PIECES = {
  'a1': { id: 'a1', title: 'Golden Hour', artistName: 'Maya R.', artistId: 'demo1', price: 280, listingType: 'fixed', artType: 'Painting', medium: 'Acrylic on canvas', dimensions: '24" x 36"', year: '2024', description: 'A stunning depiction of the last light of day washing over an urban landscape. Painted with bold strokes and warm tones.', deliveryType: 'physical', allowOffers: true },
  'a2': { id: 'a2', title: 'Neon Dreams', artistName: 'Dev K.', artistId: 'demo2', currentBid: 120, startingBid: 80, listingType: 'auction', artType: 'Digital', description: 'A digital exploration of city life at night. Available as a high resolution print.', deliveryType: 'digital', allowOffers: false },
  'a3': { id: 'a3', title: 'Untitled No. 7', artistName: 'Sara L.', artistId: 'demo3', price: 95, listingType: 'fixed', artType: 'Drawing', medium: 'Charcoal on paper', dimensions: '11" x 14"', year: '2025', description: 'Part of an ongoing series exploring negative space and form.', deliveryType: 'physical', allowOffers: false },
  'b1': { id: 'b1', title: 'Golden Hour', artistName: 'Maya R.', artistId: 'demo1', price: 280, listingType: 'fixed', artType: 'Painting', medium: 'Acrylic on canvas', dimensions: '24" x 36"', year: '2024', description: 'A stunning depiction of the last light of day washing over an urban landscape.', deliveryType: 'physical', allowOffers: true },
  'b2': { id: 'b2', title: 'Neon Dreams', artistName: 'Dev K.', artistId: 'demo2', currentBid: 120, startingBid: 80, listingType: 'auction', artType: 'Digital', description: 'A digital exploration of city life at night.', deliveryType: 'digital', allowOffers: false },
  'b3': { id: 'b3', title: 'Untitled No. 7', artistName: 'Sara L.', artistId: 'demo3', price: 95, listingType: 'fixed', artType: 'Drawing', medium: 'Charcoal on paper', dimensions: '11" x 14"', year: '2025', description: 'Part of an ongoing series exploring negative space and form.', deliveryType: 'physical', allowOffers: false },
  'b4': { id: 'b4', title: 'City Pulse', artistName: 'James O.', artistId: 'demo4', currentBid: 340, startingBid: 200, listingType: 'auction', artType: 'Photography', description: 'Urban energy captured in a single frame.', deliveryType: 'physical', allowOffers: false },
  'b5': { id: 'b5', title: 'Soul Fragment', artistName: 'Nia P.', artistId: 'demo5', price: 175, listingType: 'fixed', artType: 'Mixed Media', description: 'An exploration of identity through layered materials.', deliveryType: 'physical', allowOffers: true },
  'b6': { id: 'b6', title: 'Bloom', artistName: 'Chen W.', artistId: 'demo6', price: 420, listingType: 'fixed', artType: 'Textile', description: 'Hand woven textile art with natural dyes.', deliveryType: 'physical', allowOffers: false },
  'b7': { id: 'b7', title: 'Dark Matter', artistName: 'Alex T.', artistId: 'demo7', price: 680, listingType: 'fixed', artType: 'Painting', description: 'Large format abstract painting.', deliveryType: 'physical', allowOffers: true },
  'b8': { id: 'b8', title: 'Frequency', artistName: 'Jo M.', artistId: 'demo8', currentBid: 55, startingBid: 40, listingType: 'auction', artType: 'Digital', description: 'Digital art exploring sound and color.', deliveryType: 'digital', allowOffers: false },
}

const ART_EMOJIS = ['🎨', '🖼️', '🎭', '✏️', '🖌️', '🎪', '🌈', '🎬']

export default function PieceDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const toast = useToast()

  const [piece, setPiece] = useState(null)
  const [loading, setLoading] = useState(true)
  const [bidAmount, setBidAmount] = useState('')
  const [offerAmount, setOfferAmount] = useState('')
  const [showOffer, setShowOffer] = useState(false)

  const emoji = ART_EMOJIS[id?.charCodeAt(0) % ART_EMOJIS.length] || '🎨'

  useEffect(() => {
    async function load() {
      if (DEMO_PIECES[id]) {
        setPiece(DEMO_PIECES[id])
        setLoading(false)
        return
      }
      try {
        const snap = await getDoc(doc(db, 'listings', id))
        if (snap.exists()) setPiece({ id: snap.id, ...snap.data() })
        else toast.error('Piece not found.')
      } catch (e) {
        toast.error('Could not load piece.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', color: 'var(--slate)' }}>
      Loading...
    </div>
  )

  if (!piece) return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', color: 'var(--slate)', gap: 'var(--sp-4)' }}>
      <div style={{ fontSize: '3rem' }}>🔍</div>
      <p>Piece not found.</p>
      <button className="btn btn-ghost" onClick={() => navigate('/store')}>Browse Store</button>
    </div>
  )

  const price = piece.listingType === 'fixed' ? piece.price : (piece.currentBid || piece.startingBid)
  const fees = calculateFees(price)

  function handleBuyNow() {
    if (!user) { navigate('/auth'); return }
    navigate('/checkout', { state: { piece } })
  }

  async function handlePlaceBid() {
    if (!user) { navigate('/auth'); return }
    if (!bidAmount || parseFloat(bidAmount) <= (piece.currentBid || piece.startingBid)) {
      toast.error(`Bid must be higher than $${piece.currentBid || piece.startingBid}`)
      return
    }
    toast.success(`Bid of $${bidAmount} placed!`)
    setBidAmount('')
  }

  async function handleOffer() {
    if (!user) { navigate('/auth'); return }
    if (!offerAmount || parseFloat(offerAmount) <= 0) {
      toast.error('Enter a valid offer amount.')
      return
    }
    toast.success(`Offer of $${offerAmount} sent to artist!`)
    setShowOffer(false)
    setOfferAmount('')
  }

  return (
    <div className="page">
      <TopBar back />

      <div className="container" style={{ paddingTop: 'var(--sp-4)', maxWidth: 600 }}>

        {/* Art image */}
        <div style={{ width: '100%', aspectRatio: '1', background: 'linear-gradient(135deg, rgba(255,77,77,0.08), rgba(255,215,0,0.06))', borderRadius: 'var(--r-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', marginBottom: 'var(--sp-5)', overflow: 'hidden' }}>
          {piece.imageUrl ? (
            <img src={piece.imageUrl} alt={piece.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <span>{emoji}</span>
          )}
        </div>

        {/* Title + actions */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 'var(--sp-3)' }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', marginBottom: 4 }}>{piece.title}</h1>
            <p style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)' }}>by {piece.artistName}</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--sp-2)' }}>
            <button style={{ background: 'none', border: 'none', color: 'var(--slate)', cursor: 'pointer' }}>
              <Heart size={20} />
            </button>
            <button style={{ background: 'none', border: 'none', color: 'var(--slate)', cursor: 'pointer' }}>
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="chips" style={{ marginBottom: 'var(--sp-4)' }}>
          {piece.artType && <span className="chip selected" style={{ cursor: 'default' }}>{piece.artType}</span>}
          {piece.medium && <span className="chip" style={{ cursor: 'default' }}>{piece.medium}</span>}
          {piece.dimensions && <span className="chip" style={{ cursor: 'default' }}>{piece.dimensions}</span>}
          {piece.year && <span className="chip" style={{ cursor: 'default' }}>{piece.year}</span>}
          <span className="chip" style={{ cursor: 'default', display: 'flex', alignItems: 'center', gap: 4 }}>
            {piece.deliveryType === 'digital' ? <Monitor size={11} /> : <Package size={11} />}
            {piece.deliveryType === 'digital' ? 'Digital' : 'Physical'}
          </span>
        </div>

        {/* Description */}
        {piece.description && (
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--slate)', lineHeight: 1.7, marginBottom: 'var(--sp-5)' }}>
            {piece.description}
          </p>
        )}

        <div className="divider" />

        {/* Pricing */}
        <div style={{ marginBottom: 'var(--sp-5)' }}>
          {piece.listingType === 'fixed' ? (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-3)' }}>
                <span style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)' }}>Price</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--coral)' }}>${piece.price}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-3)' }}>
                <span style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)' }}>Buyer's premium ({fees.buyerPremiumPercent}%)</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--slate)' }}>+${fees.buyerPremiumAmount}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 'var(--sp-3)', borderTop: '1px solid rgba(255,248,240,0.08)' }}>
                <span style={{ fontWeight: 600 }}>Total</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--cream)' }}>${fees.total}</span>
              </div>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-3)' }}>
                <span style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)' }}>Current bid</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--gold)' }}>${piece.currentBid || piece.startingBid}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-3)' }}>
                <span style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)' }}>Buyer's premium ({fees.buyerPremiumPercent}%)</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--slate)' }}>+${fees.buyerPremiumAmount}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 'var(--sp-3)', borderTop: '1px solid rgba(255,248,240,0.08)', marginBottom: 'var(--sp-4)' }}>
                <span style={{ fontWeight: 600 }}>Total if you win</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--cream)' }}>${fees.total}</span>
              </div>

              {/* Bid input */}
              <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                  <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>$</span>
                  <input
                    className="input"
                    type="number"
                    placeholder={`${(piece.currentBid || piece.startingBid) + 5}`}
                    value={bidAmount}
                    onChange={e => setBidAmount(e.target.value)}
                    style={{ paddingLeft: 28 }}
                  />
                </div>
                <button className="btn btn-gold" onClick={handlePlaceBid}>
                  <Gavel size={16} /> Bid
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Physical shipping notice */}
        {piece.deliveryType === 'physical' && (
          <div style={{ padding: 'var(--sp-3)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', marginBottom: 'var(--sp-4)', fontSize: 'var(--text-xs)', color: 'var(--slate)', display: 'flex', alignItems: 'flex-start', gap: 'var(--sp-3)' }}>
            <Clock size={14} style={{ flexShrink: 0, marginTop: 1 }} />
            <span>Buyer handles shipping label. You'll need to confirm tracking number within 48 hours of purchase to release payment to artist.</span>
          </div>
        )}

        {/* Buy Now button */}
        {piece.listingType === 'fixed' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
            <button className="btn btn-primary btn-lg btn-full" onClick={handleBuyNow}>
              <ShoppingBag size={18} /> Buy Now — ${fees.total}
            </button>
            {piece.allowOffers && (
              <button className="btn btn-ghost btn-full" onClick={() => setShowOffer(s => !s)}>
                Make an Offer
              </button>
            )}
          </div>
        )}

        {/* Offer input */}
        {showOffer && (
          <div style={{ marginTop: 'var(--sp-4)', padding: 'var(--sp-4)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
            <div className="input-label" style={{ marginBottom: 'var(--sp-3)' }}>Your Offer</div>
            <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>$</span>
                <input className="input" type="number" placeholder="Your offer" value={offerAmount} onChange={e => setOfferAmount(e.target.value)} style={{ paddingLeft: 28 }} />
              </div>
              <button className="btn btn-primary" onClick={handleOffer}>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}