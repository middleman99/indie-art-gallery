// src/pages/PieceDetail.jsx
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc, addDoc, collection, serverTimestamp, onSnapshot, updateDoc, increment, runTransaction } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import TopBar from '../components/TopBar'
import { Heart, Share2, Package, Monitor, Gavel, ShoppingBag, Clock, Trophy, ShieldCheck, Lock } from 'lucide-react'

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

// Whether the current high bid (or lack thereof) has cleared the artist's reserve.
// A listing with no reservePrice set always returns true, preserving the exact
// prior behavior for every auction created before this feature existed.
function isReserveMet(piece) {
  if (!piece.reservePrice) return true
  return (piece.currentBid || 0) >= piece.reservePrice
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

      // Reserve check: only actually sell if there's a winning bid AND (no reserve
      // was set, or the winning bid met it). A reserve that's never reached means
      // the auction closes with no sale - same as "no bids at all" from the buyer's
      // perspective, but the piece stays associated with its real highest bid for
      // the artist's own reference rather than being silently discarded.
      const reserveMet = !fresh.reservePrice || (fresh.currentBid || 0) >= fresh.reservePrice

      if (fresh.currentBidderId && reserveMet) {
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
        // Either no bids, or a reserve that was never met - close bidding without
        // a sale. Listing stays 'active' rather than 'sold' so the artist can see
        // it didn't move and decide whether to relist, lower the reserve, etc.
        transaction.update(listingRef, { auctionClosed: true })
      }
    })
  } catch (e) {
    console.error('Could not close expired listing auction:', e)
  }
}

// Reverts an abandoned Buy Now / offer-accept purchase back to 'active' once its
// payment window has genuinely passed, and marks the associated order 'expired'.
// Runs as a transaction so concurrent viewers can't double-process the same revert,
// and re-checks the order is still actually unpaid before touching it (in case
// payment succeeded in the interim).
async function tryRevertExpiredPendingSale(piece) {
  if (piece.isDemo) return
  if (piece.status !== 'pending_sale') return
  if (!piece.pendingSaleExpiresAt) return

  const expiresAt = piece.pendingSaleExpiresAt.toDate ? piece.pendingSaleExpiresAt.toDate() : new Date(piece.pendingSaleExpiresAt)
  if (new Date() < expiresAt) return // not expired yet

  const listingRef = doc(db, 'listings', piece.id)
  const orderRef = piece.pendingOrderId ? doc(db, 'orders', piece.pendingOrderId) : null

  try {
    await runTransaction(db, async (transaction) => {
      const freshListingSnap = await transaction.get(listingRef)
      if (!freshListingSnap.exists() || freshListingSnap.data().status !== 'pending_sale') return // already handled

      let orderStillUnpaid = true
      if (orderRef) {
        const freshOrderSnap = await transaction.get(orderRef)
        if (freshOrderSnap.exists() && freshOrderSnap.data().status !== 'pending_payment') {
          orderStillUnpaid = false // it was paid (or already expired) in the interim - don't touch it
        }
      }

      transaction.update(listingRef, {
        status: 'active',
        pendingOrderId: null,
        pendingSaleExpiresAt: null,
      })

      if (orderRef && orderStillUnpaid) {
        transaction.update(orderRef, { status: 'expired' })
      }
    })
  } catch (e) {
    console.error('Could not revert expired pending sale:', e)
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

  useEffect(() => {
    if (piece) tryCloseExpiredAuction(piece)
    if (piece) tryRevertExpiredPendingSale(piece)
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
  const hasWinningBid = !!piece.currentBidderId
  const reserveMet = isReserveMet(piece)

  async function handleBuyNow() {
    if (!user) { navigate('/auth'); return }
    if (piece.isDemo) {
      toast.error('This is a demo piece and is not available for purchase.')
      return
    }
    setBuyingNow(true)
    try {
      const listingRef = doc(db, 'listings', piece.id)
      const newOrderRef = doc(collection(db, 'orders'))
      const paymentDeadline = new Date(Date.now() + 60 * 60 * 1000)

      await runTransaction(db, async (transaction) => {
        const freshSnap = await transaction.get(listingRef)
        if (!freshSnap.exists()) throw new Error('This piece no longer exists.')
        if (freshSnap.data().status !== 'active') {
          throw new Error('This piece is no longer available - someone else may have just purchased it.')
        }

        transaction.update(listingRef, {
          status: 'pending_sale',
          pendingOrderId: newOrderRef.id,
          pendingSaleExpiresAt: paymentDeadline,
        })

        transaction.set(newOrderRef, {
          showId: null,
          pieceId: piece.id,
          pieceTitle: piece.title,
          winningBid: piece.price,
          buyerId: user.uid,
          buyerName: profile?.displayName || 'Buyer',
          artistId: piece.artistId,
          artistName: piece.artistName,
          status: 'pending_payment',
          paymentDeadline,
          createdAt: serverTimestamp(),
        })
      })

      navigate('/checkout', { state: { piece, orderId: newOrderRef.id } })
    } catch (err) {
      console.error('Could not create order for Buy Now:', err)
      toast.error(err.message || 'Could not start checkout. Try again.')
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

        <div style={{ width: '100%', aspectRatio: '1', background: 'linear-gradient(135deg, rgba(255,77,77,0.08), rgba(255,215,0,0.06))', borderRadius: 'var(--r-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', marginBottom: 'var(--sp-5)', overflow: 'hidden' }}>
          {piece.imageUrl ? (
            <img src={piece.imageUrl} alt={piece.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <span>{emoji}</span>
          )}
        </div>

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

        {piece.description && (
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--slate)', lineHeight: 1.7, marginBottom: 'var(--sp-5)' }}>
            {piece.description}
          </p>
        )}

        {(piece.estimateLow || piece.estimateHigh) && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', marginBottom: 'var(--sp-4)', fontSize: 'var(--text-sm)', color: 'var(--gold)' }}>
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Est.</span>
            <span style={{ fontFamily: 'var(--font-mono)' }}>
              {piece.estimateLow && piece.estimateHigh
                ? `$${piece.estimateLow} – $${piece.estimateHigh}`
                : `$${piece.estimateLow || piece.estimateHigh}+`}
            </span>
          </div>
        )}

        {piece.provenance && (
          <div style={{ padding: 'var(--sp-4)', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.06)', marginBottom: 'var(--sp-5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--slate)', marginBottom: 'var(--sp-2)' }}>
              <ShieldCheck size={13} /> Provenance & Condition
            </div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--cream)', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
              {piece.provenance}
            </p>
          </div>
        )}

        <div className="divider" />

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
            hasWinningBid && reserveMet ? (
              <div style={{ padding: 'var(--sp-4)', background: 'rgba(46,204,113,0.08)', borderRadius: 'var(--r-md)', border: '1px solid rgba(46,204,113,0.2)', textAlign: 'center' }}>
                <Trophy size={24} color="var(--green-ok)" style={{ margin: '0 auto var(--sp-2)' }} />
                <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                  Won by {piece.currentBidderName} — ${piece.currentBid}
                </div>
              </div>
            ) : hasWinningBid && !reserveMet ? (
              <div style={{ padding: 'var(--sp-4)', background: 'rgba(255,215,0,0.06)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,215,0,0.2)', textAlign: 'center' }}>
                <Lock size={20} color="var(--gold)" style={{ margin: '0 auto var(--sp-2)' }} />
                <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                  Reserve not met — piece did not sell
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', marginTop: 4 }}>
                  Highest bid was ${piece.currentBid}
                </div>
              </div>
            ) : (
              <div style={{ padding: 'var(--sp-4)', background: 'rgba(46,204,113,0.08)', borderRadius: 'var(--r-md)', border: '1px solid rgba(46,204,113,0.2)', textAlign: 'center' }}>
                <Trophy size={24} color="var(--green-ok)" style={{ margin: '0 auto var(--sp-2)' }} />
                <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                  Auction ended — no bids
                </div>
              </div>
            )
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-3)' }}>
                <span style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)' }}>Current bid</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--gold)' }}>${piece.currentBid || piece.startingBid}</span>
              </div>
              {piece.reservePrice && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 'var(--text-xs)', color: reserveMet ? 'var(--green-ok)' : 'var(--slate)', marginBottom: 'var(--sp-3)' }}>
                  <Lock size={11} />
                  {reserveMet ? 'Reserve met' : 'Reserve not yet met'}
                </div>
              )}
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

        {piece.deliveryType === 'physical' && (
          <div style={{ padding: 'var(--sp-3)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', marginBottom: 'var(--sp-4)', fontSize: 'var(--text-xs)', color: 'var(--slate)', display: 'flex', alignItems: 'flex-start', gap: 'var(--sp-3)' }}>
            <Clock size={14} style={{ flexShrink: 0, marginTop: 1 }} />
            <span>Once you receive this piece, confirm delivery from your Orders page to release payment to the artist.</span>
          </div>
        )}

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