// src/pages/PieceDetail.jsx
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc, addDoc, collection, serverTimestamp, onSnapshot, updateDoc, increment, runTransaction } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import TopBar from '../components/TopBar'
import { Heart, Share2, Package, Monitor, Gavel, ShoppingBag, Clock, Trophy } from 'lucide-react'

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

// Closes an expired, not-yet-closed listing auction. Runs as a transaction so that
// if multiple visitors happen to load this page around the same time after the
// deadline, only one of them actually wins the race and closes it / creates the order.
// This is the "lazy close" mechanism - there's no scheduled backend job (would require
// Cloud Functions + the Blaze plan, deliberately avoided elsewhere in this project),
// so closing only happens whenever someone next visits the page after the deadline.
async function tryCloseExpiredAuction(piece) {
  if (piece.isDemo) return
  if (piece.listingType !== 'auction') return
  if (piece.auctionClosed) return
  if (!piece.auctionEndsAt) return

  const endsAt = piece.auctionEndsAt.toDate ? piece.auctionEndsAt.toDate() : new Date(piece.auctionEndsAt)
  if (new Date() < endsAt) return // not expired yet

  const listingRef = doc(db, 'listings', piece.id)
  const hasWinner = !!piece.currentBidderId
  const newOrderRef = hasWinner ? doc(collection(db, 'orders')) : null

  try {
    await runTransaction(db, async (transaction) => {
      const freshSnap = await transaction.get(listingRef)
      if (!freshSnap.exists() || freshSnap.data().auctionClosed) return // someone else already closed it
      const fresh = freshSnap.data()

      if (fresh.currentBidderId) {
        transaction.update(listingRef, {
          auctionClosed: true,
          status: 'sold',
          soldAt: serverTimestamp(),
          buyerId: fresh.currentBidderId,
        })
        transaction.set(newOrderRef, {
          showId: null,
          pieceId: piece.id,
          pieceTitle: fresh.title,
          winningBid: fresh.currentBid,
          buyerId: fresh.currentBidderId,
          buyerName: fresh.currentBidderName || 'Buyer',
          artistId: fresh.artistId,
          artistName: fresh.artistName,
          status: 'pending_payment',
          paymentDeadline: new Date(Date.now() + 60 * 60 * 1000),
          createdAt: serverTimestamp(),
        })
      } else {
        transaction.update(listingRef, { auctionClosed: true })
      }
    })
  } catch (e) {
    console.error('Could not close expired listing auction:', e)
  }
}

const DEMO_PIECES = {
  'a1': { id: 'a1', title: 'Golden Hour', artistName: 'Maya R.', artistId: 'demo1', price: 280, listingType: 'fixed', artType: 'Painting', medium: 'Acrylic on canvas', dimensions: '24" x 36"', year: '2024', description: 'A stunning depiction of the last light of day washing over an urban landscape. Painted with bold strokes and warm tones.', deliveryType: 'physical', allowOffers: true, isDemo: true },
  'a2': { id: 'a2', title: 'Neon Dreams', artistName: 'Dev K.', artistId: 'demo2', currentBid: 120, startingBid: 80, listingType: 'auction', artType: 'Digital', description: 'A digital exploration of city life at night. Available as a high resolution print.', deliveryType: 'digital', allowOffers: false, isDemo: true },
  'a3': { id: 'a3', title: 'Untitled No. 7', artistName: 'Sara L.', artistId: 'demo3', price: 95, listingType: 'fixed', artType: 'Drawing', medium: 'Charcoal on paper', dimensions: '11" x 14"', year: '2025', description: 'Part of an ongoing series exploring negative space and form.', deliveryType: 'physical', allowOffers: false, isDemo: true },
  'b1': { id: 'b1', title: 'Golden Hour', artistName: 'Maya R.', artistId: 'demo1', price: 280, listingType: 'fixed', artType: 'Painting', medium: 'Acrylic on canvas', dimensions: '24" x 36"', year: '2024', description: 'A stunning depiction of the last light of day washing over an urban landscape.', deliveryType: 'physical', allowOffers: true, isDemo: true },
  'b2': { id: 'b2', title: 'Neon Dreams', artistName: 'Dev K.', artistId: 'demo2', currentBid: 120, startingBid: 80, listingType: 'auction', artType: 'Digital', description: 'A digital exploration of city life at night.', deliveryType: 'digital', allowOffers: false, isDemo: true },
  'b3': { id: 'b3', title: 'Untitled No. 7', artistName: 'Sara L.', artistId: 'demo3', price: 95, listingType: 'fixed', artType: 'Drawing', medium: 'Charcoal on paper', dimensions: '11" x 14"', year: '2025', description: 'Part of an ongoing series exploring negative space and form.', deliveryType: 'physical', allowOffers: false, isDemo: true },
  'b4': { id: 'b4', title: 'City Pulse', artistName: 'James O.', artistId: 'demo4', currentBid: 340, startingBid: 200, listingType: 'auction', artType: 'Photography', description: 'Urban energy captured in a single frame.', deliveryType: 'physical', allowOffers: false, isDemo: true },
  'b5': { id: 'b5', title: 'Soul Fragment', artistName: 'Nia P.', artistId: 'demo5', price: 175, listingType: 'fixed', artType: 'Mixed Media', description: 'An exploration of identity through layered materials.', deliveryType: 'physical', allowOffers: true, isDemo: true },
  'b6': { id: 'b6', title: 'Bloom', artistName: 'Chen W.', artistId: 'demo6', price: 420, listingType: 'fixed', artType: 'Textile', description: 'Hand woven textile art with natural dyes.', deliveryType: 'physical', allowOffers: false, isDemo: true },
  'b7': { id: 'b7', title: 'Dark Matter', artistName: 'Alex T.', artistId: 'demo7', price: 680, listingType: 'fixed', artType: 'Painting', description: 'Large format abstract painting.', deliveryType: 'physical', allowOffers: true, isDemo: true },
  'b8': { id: 'b8', title: 'Frequency', artistName: 'Jo M.', artistId: 'demo8', currentBid: 55, startingBid: 40, listingType: 'auction', artType: 'Digital', description: 'Digital art exploring sound and color.', deliveryType: 'digital', allowOffers: false, isDemo: true },
}

const ART_EMOJIS = ['🎨', '🖼️', '🎭', '✏️', '🖌️', '🎪', '🌈', '🎬']

function useCountdown(endTime) {
  const [secondsLeft, setSecondsLeft] = useState(null)
  useEffect(() => {
    if (!endTime) return
    function tick() {
      const end = endTime.toDate ? endTime.toDate() : new Date(endTime)
      setSecondsLeft(Math.max(0, Math.floor((end - new Date()) / 1000)))
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [endTime])
  return secondsLeft
}

function formatCountdown(seconds) {
  if (seconds === null) return ''
  const d = Math.floor(seconds / 86400)
  const h = Math.floor((seconds % 86400) / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  if (d > 0) return `${d}d ${h}h left`
  if (h > 0) return `${h}h ${m}m left`
  return `${m}m ${s}s left`
}

export default function PieceDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user, profile } = useAuth()
  const toast = useToast()

  const [piece, setPiece] = useState(null)
  const [loading, setLoading] = useState(true)
  const [bidAmount, setBidAmount] = useState('')
  const [offerAmount, setOfferAmount] = useState('')
  const [showOffer, setShowOffer] = useState(false)
  const [buyingNow, setBuyingNow] = useState(false)
  const [placingBid, setPlacingBid] = useState(false)
  const [sendingOffer, setSendingOffer] = useState(false)

  const emoji = ART_EMOJIS[id?.charCodeAt(0) % ART_EMOJIS.length] || '🎨'

  useEffect(() => {
    if (DEMO_PIECES[id]) {
      setPiece(DEMO_PIECES[id])
      setLoading(false)
      return
    }
    // Live listener, not a one-time load - so bids from other viewers show up in
    // real time here, same as live-show auctions already do in ShowRoom.jsx.
    const unsub = onSnapshot(
      doc(db, 'listings', id),
      snap => {
        if (snap.exists()) setPiece({ id: snap.id, ...snap.data() })
        else toast.error('Piece not found.')
        setLoading(false)
      },
      err => {
        console.error('Could not load piece:', err)
        toast.error('Could not load piece.')
        setLoading(false)
      }
    )
    return unsub
  }, [id])

  // Lazy-close check: fires whenever piece data changes (including on load). Harmless
  // to call repeatedly - it's a no-op unless the deadline has genuinely passed and the
  // auction isn't already closed, per the checks inside tryCloseExpiredAuction itself.
  useEffect(() => {
    if (piece) tryCloseExpiredAuction(piece)
  }, [piece])

  const secondsLeft = useCountdown(piece?.listingType === 'auction' ? piece?.auctionEndsAt : null)

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
  const auctionExpired = piece.listingType === 'auction' && piece.auctionEndsAt && secondsLeft === 0
  const auctionEnded = piece.auctionClosed || auctionExpired

  async function handleBuyNow() {
    if (!user) { navigate('/auth'); return }
    if (piece.isDemo) {
      toast.error('This is a demo piece and is not available for purchase.')
      return
    }
    setBuyingNow(true)
    try {
      const orderRef = await addDoc(collection(db, 'orders'), {
        showId: null,
        pieceId: piece.id,
        pieceTitle: piece.title,
        winningBid: piece.price,
        buyerId: user.uid,
        buyerName: profile?.displayName || 'Buyer',
        artistId: piece.artistId,
        artistName: piece.artistName,
        status: 'pending_payment',
        paymentDeadline: new Date(Date.now() + 60 * 60 * 1000),
        createdAt: serverTimestamp(),
      })
      navigate('/checkout', { state: { piece, orderId: orderRef.id } })
    } catch (err) {
      console.error('Could not create order for Buy Now:', err)
      toast.error('Could not start checkout. Try again.')
    } finally {
      setBuyingNow(false)
    }
  }

  async function handlePlaceBid() {
    if (!user) { navigate('/auth'); return }
    if (piece.isDemo) { toast.error('Demo piece - bidding is not available.'); return }
    if (auctionEnded) { toast.error('This auction has ended.'); return }

    const current = piece.currentBid || piece.startingBid
    const amount = parseFloat(bidAmount)
    if (!amount || amount <= current) {
      toast.error(`Bid must be higher than $${current}`)
      return
    }

    setPlacingBid(true)
    try {
      await updateDoc(doc(db, 'listings', piece.id), {
        currentBid: amount,
        currentBidderId: user.uid,
        currentBidderName: profile?.displayName || 'Anonymous',
        bidCount: increment(1),
      })
      toast.success(`Bid of $${amount} placed!`)
      setBidAmount('')
    } catch (err) {
      console.error('Bid failed:', err)
      toast.error('Could not place bid. Try again.')
    } finally {
      setPlacingBid(false)
    }
  }

  async function handleOffer() {
    if (!user) { navigate('/auth'); return }
    if (piece.isDemo) { toast.error('Demo piece - offers are not available.'); return }
    const amount = parseFloat(offerAmount)
    if (!amount || amount <= 0) {
      toast.error('Enter a valid offer amount.')
      return
    }
    setSendingOffer(true)
    try {
      await addDoc(collection(db, 'offers'), {
        listingId: piece.id,
        pieceTitle: piece.title,
        buyerId: user.uid,
        buyerName: profile?.displayName || 'Buyer',
        artistId: piece.artistId,
        artistName: piece.artistName,
        amount,
        status: 'pending',
        createdAt: serverTimestamp(),
      })
      toast.success(`Offer of $${amount} sent to the artist!`)
      setShowOffer(false)
      setOfferAmount('')
    } catch (err) {
      console.error('Offer failed:', err)
      toast.error('Could not send offer. Try again.')
    } finally {
      setSendingOffer(false)
    }
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
          ) : auctionEnded ? (
            <div style={{ padding: 'var(--sp-4)', background: 'rgba(46,204,113,0.08)', borderRadius: 'var(--r-md)', border: '1px solid rgba(46,204,113,0.2)', textAlign: 'center' }}>
              <Trophy size={24} color="var(--green-ok)" style={{ margin: '0 auto var(--sp-2)' }} />
              <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                {piece.currentBidderName ? `Won by ${piece.currentBidderName} — $${piece.currentBid}` : 'Auction ended — no bids'}
              </div>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-3)' }}>
                <span style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)' }}>Current bid</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--gold)' }}>${piece.currentBid || piece.startingBid}</span>
              </div>
              {piece.auctionEndsAt && secondsLeft !== null && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 'var(--text-xs)', color: secondsLeft < 3600 ? 'var(--coral)' : 'var(--gold)', fontFamily: 'var(--font-mono)', marginBottom: 'var(--sp-3)' }}>
                  <Clock size={12} /> {formatCountdown(secondsLeft)}
                </div>
              )}
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
                <button className="btn btn-gold" onClick={handlePlaceBid} disabled={placingBid}>
                  <Gavel size={16} /> {placingBid ? '...' : 'Bid'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Physical shipping notice */}
        {piece.deliveryType === 'physical' && (
          <div style={{ padding: 'var(--sp-3)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', marginBottom: 'var(--sp-4)', fontSize: 'var(--text-xs)', color: 'var(--slate)', display: 'flex', alignItems: 'flex-start', gap: 'var(--sp-3)' }}>
            <Clock size={14} style={{ flexShrink: 0, marginTop: 1 }} />
            <span>Once you receive this piece, confirm delivery from your Orders page to release payment to the artist.</span>
          </div>
        )}

        {/* Buy Now button */}
        {piece.listingType === 'fixed' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
            <button className="btn btn-primary btn-lg btn-full" onClick={handleBuyNow} disabled={buyingNow}>
              <ShoppingBag size={18} /> {buyingNow ? 'Starting checkout...' : `Buy Now — $${fees.total}`}
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
              <button className="btn btn-primary" onClick={handleOffer} disabled={sendingOffer}>
                {sendingOffer ? '...' : 'Send'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}