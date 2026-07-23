// src/pages/GoLive.jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore'
import TopBar from '../components/TopBar'
import { Radio, Gavel, Package } from 'lucide-react'

const ART_TYPES = ['Painting', 'Drawing', 'Digital', 'Photography', 'Sculpture', 'Textile', 'Mixed Media', 'Print', 'Other']

const DEMO_LISTINGS = [
  { id: 'p1', title: 'Golden Hour', price: 280, listingType: 'fixed', artType: 'Painting' },
  { id: 'p2', title: 'Neon Dreams', currentBid: 120, startingBid: 80, listingType: 'auction', artType: 'Digital' },
]

async function notifyFollowersGoingLive(artistId, artistName, showTitle) {
  try {
    const followersSnap = await getDocs(collection(db, 'users', artistId, 'followers'))
    const sends = followersSnap.docs
      .map(d => d.data().email)
      .filter(Boolean)
      .map(followerEmail =>
        fetch('/.netlify/functions/email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'artist_going_live',
            data: { followerEmail, artistName, showTitle },
          }),
        }).catch(err => console.error('artist_going_live email failed for', followerEmail, err))
      )
    await Promise.all(sends)
  } catch (err) {
    console.error('Could not load followers for going-live notification:', err)
  }
}

export default function GoLive() {
  const { user, profile } = useAuth()
  const navigate = useNavigate()
  const toast = useToast()

  const [form, setForm] = useState({
    title: '',
    description: '',
    artType: '',
    allowBidding: true,
  })
  const [starting, setStarting] = useState(false)
  const [myListings, setMyListings] = useState(DEMO_LISTINGS)
  const [selectedPiece, setSelectedPiece] = useState(null)
  const [startingBid, setStartingBid] = useState('')

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  useEffect(() => {
    async function loadListings() {
      if (!user) return
      try {
        const q = query(collection(db, 'listings'), where('artistId', '==', user.uid), where('status', '==', 'active'))
        const snap = await getDocs(q)
        const real = snap.docs.map(d => ({ id: d.id, ...d.data() }))
        if (real.length > 0) setMyListings(real)
      } catch (e) {
        // fallback to demo
      }
    }
    loadListings()
  }, [user])

  async function startShow() {
    if (!form.title) { toast.error('Give your show a title.'); return }
    if (!form.artType) { toast.error('Select an art type.'); return }
    if (form.allowBidding && !selectedPiece) { toast.error('Select a piece to auction, or turn off bidding.'); return }
    if (form.allowBidding && !startingBid) { toast.error('Set a starting bid.'); return }

    setStarting(true)

    try {
      const roomName = `show_${user.uid}_${Date.now()}`
      const showData = {
        title: form.title,
        description: form.description,
        artType: form.artType,
        allowBidding: form.allowBidding,
        artistId: user.uid,
        artistName: profile?.displayName || 'Artist',
        roomName,
        status: 'live',
        viewerCount: 0,
        pieceId: form.allowBidding ? selectedPiece.id : null,
        pieceTitle: form.allowBidding ? selectedPiece.title : null,
        startingBid: form.allowBidding ? parseFloat(startingBid) : null,
        currentBid: form.allowBidding ? parseFloat(startingBid) : null,
        currentBidder: null,
        currentBidderId: null,
        reservePrice: form.allowBidding && selectedPiece?.reservePrice ? selectedPiece.reservePrice : null,
        createdAt: serverTimestamp(),
      }

      const docRef = await addDoc(collection(db, 'shows'), showData)
      toast.success('Show created! Starting your stream...')

      notifyFollowersGoingLive(user.uid, profile?.displayName || 'Artist', form.title)

      navigate(`/show/${docRef.id}?host=true&room=${roomName}`)
    } catch (err) {
      toast.error('Could not start show. Try again.')
      console.error(err)
    } finally {
      setStarting(false)
    }
  }

  return (
    <div className="page">
      <TopBar title="Go Live" back />

      <div className="container" style={{ paddingTop: 'var(--sp-6)', maxWidth: 480 }}>

        <div style={{ textAlign: 'center', marginBottom: 'var(--sp-8)' }}>
          <div style={{ width: 72, height: 72, borderRadius: 'var(--r-lg)', background: 'rgba(255,77,77,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--sp-4)' }}>
            <Radio size={32} color="var(--coral)" />
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--sp-2)' }}>
            Start a Live Show
          </h2>
          <p style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)' }}>
            Stream live, auction your art, and connect with buyers in real time.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>

          <div className="input-group">
            <label className="input-label">Show Title *</label>
            <input
              className="input"
              type="text"
              placeholder="e.g. Sunday Painting Drop"
              value={form.title}
              onChange={e => set('title', e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Description</label>
            <textarea
              className="input"
              placeholder="Tell viewers what to expect..."
              value={form.description}
              onChange={e => set('description', e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Art Type *</label>
            <div className="chips">
              {ART_TYPES.map(t => (
                <button
                  key={t}
                  type="button"
                  className={`chip ${form.artType === t ? 'selected' : ''}`}
                  onClick={() => set('artType', t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div style={{ padding: 'var(--sp-4)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={form.allowBidding}
                onChange={e => set('allowBidding', e.target.checked)}
                style={{ width: 18, height: 18, accentColor: 'var(--coral)', cursor: 'pointer', flexShrink: 0 }}
              />
              <div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Gavel size={14} color="var(--coral)" /> Live Bidding
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>Auction a piece during your show</div>
              </div>
            </label>
          </div>

          {form.allowBidding && (
            <div>
              <div className="input-label" style={{ marginBottom: 'var(--sp-3)' }}>Select Piece to Auction *</div>
              {myListings.length === 0 ? (
                <div style={{ padding: 'var(--sp-6)', textAlign: 'center', color: 'var(--slate)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)' }}>
                  <Package size={24} style={{ margin: '0 auto var(--sp-3)', opacity: 0.4 }} />
                  <p style={{ fontSize: 'var(--text-sm)' }}>You don't have any listings yet.</p>
                  <button className="btn btn-primary btn-sm" style={{ marginTop: 'var(--sp-3)' }} onClick={() => navigate('/list')}>
                    List a Piece First
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                  {myListings.map(p => (
                    <div
                      key={p.id}
                      onClick={() => setSelectedPiece(p)}
                      style={{
                        padding: 'var(--sp-3)',
                        border: `2px solid ${selectedPiece?.id === p.id ? 'var(--coral)' : 'rgba(255,248,240,0.1)'}`,
                        borderRadius: 'var(--r-md)',
                        cursor: 'pointer',
                        background: selectedPiece?.id === p.id ? 'var(--coral-soft)' : 'transparent',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{p.title}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>
                        {p.listingType === 'fixed' ? `$${p.price}` : `Bid: $${p.currentBid || p.startingBid}`}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {selectedPiece?.reservePrice && (
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gold)', marginTop: 'var(--sp-2)' }}>
                  This piece has a ${selectedPiece.reservePrice} reserve set - it will carry over to this live auction.
                </div>
              )}
            </div>
          )}

          {form.allowBidding && selectedPiece && (
            <div className="input-group">
              <label className="input-label">Starting Bid *</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>$</span>
                <input
                  className="input"
                  type="number"
                  placeholder="50"
                  value={startingBid}
                  onChange={e => setStartingBid(e.target.value)}
                  style={{ paddingLeft: 28 }}
                />
              </div>
            </div>
          )}

          <button
            className="btn btn-primary btn-lg btn-full"
            onClick={startShow}
            disabled={starting}
          >
            <Radio size={18} />
            {starting ? 'Starting...' : 'Start Live Show'}
          </button>
        </div>
      </div>
    </div>
  )
}