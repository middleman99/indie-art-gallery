// src/pages/ShowRoom.jsx
import { useState, useEffect, useRef } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { doc, getDoc, updateDoc, collection, addDoc, onSnapshot, serverTimestamp, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import {
  LiveKitRoom,
  VideoConference,
  RoomAudioRenderer,
} from '@livekit/components-react'
import '@livekit/components-styles'
import { Eye, Send, Gavel, Radio, LogOut, Zap } from 'lucide-react'

function Chat({ showId, user, profile }) {
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const bottomRef = useRef()

  useEffect(() => {
    const q = query(
      collection(db, 'shows', showId, 'chat'),
      orderBy('createdAt', 'asc'),
      limit(50)
    )
    const unsub = onSnapshot(q, snap => {
      setMessages(snap.docs.map(d => ({ id: d.id, ...d.data() })))
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
    })
    return unsub
  }, [showId])

  async function sendMessage(e) {
    e.preventDefault()
    if (!text.trim() || !user) return
    await addDoc(collection(db, 'shows', showId, 'chat'), {
      text: text.trim(),
      userId: user.uid,
      userName: profile?.displayName || 'Guest',
      createdAt: serverTimestamp(),
    })
    setText('')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--sp-3)', display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
        {messages.map(m => (
          <div key={m.id} style={{ fontSize: 'var(--text-xs)', lineHeight: 1.4 }}>
            <span style={{ fontWeight: 700, color: m.userId === 'system' ? 'var(--gold)' : 'var(--coral)' }}>{m.userName}: </span>
            <span style={{ color: 'var(--cream)' }}>{m.text}</span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={sendMessage} style={{ padding: 'var(--sp-3)', borderTop: '1px solid rgba(255,248,240,0.08)', display: 'flex', gap: 'var(--sp-2)' }}>
        <input
          className="input"
          type="text"
          placeholder={user ? 'Say something...' : 'Sign in to chat'}
          value={text}
          onChange={e => setText(e.target.value)}
          disabled={!user}
          style={{ padding: '8px 12px', fontSize: 'var(--text-xs)' }}
        />
        <button type="submit" className="btn btn-primary btn-sm" disabled={!user}>
          <Send size={12} />
        </button>
      </form>
    </div>
  )
}

function BidPanel({ showId, show, user, profile }) {
  const [bidAmount, setBidAmount] = useState('')
  const [placing, setPlacing] = useState(false)
  const toast = useToast()

  const currentBid = show?.currentBid || show?.startingBid || 0

  async function placeBid() {
    if (!user) { toast.error('Sign in to bid.'); return }
    const amount = parseFloat(bidAmount)
    if (!amount || amount <= currentBid) {
      toast.error(`Bid must be higher than $${currentBid}`)
      return
    }
    setPlacing(true)
    try {
      await updateDoc(doc(db, 'shows', showId), {
        currentBid: amount,
        currentBidder: profile?.displayName || 'Anonymous',
        currentBidderId: user.uid,
      })
      await addDoc(collection(db, 'shows', showId, 'chat'), {
        text: `🔨 ${profile?.displayName} bid $${amount}!`,
        userId: 'system',
        userName: 'System',
        createdAt: serverTimestamp(),
      })
      toast.success(`Bid of $${amount} placed!`)
      setBidAmount('')
    } catch (err) {
      toast.error('Could not place bid.')
    } finally {
      setPlacing(false)
    }
  }

  return (
    <div style={{ padding: 'var(--sp-3)', background: 'rgba(255,215,0,0.06)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,215,0,0.2)', margin: 'var(--sp-3)' }}>
      {show?.pieceTitle && (
        <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, marginBottom: 'var(--sp-2)', color: 'var(--cream)' }}>
          🎨 {show.pieceTitle}
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--sp-2)' }}>
        <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gold)' }}>
          <Gavel size={12} style={{ display: 'inline', marginRight: 4 }} />
          Live Auction
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--gold)' }}>${currentBid}</span>
      </div>
      {show?.currentBidder && (
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', marginBottom: 'var(--sp-2)' }}>
          Leading: {show.currentBidder}
        </div>
      )}
      <div style={{ display: 'flex', gap: 'var(--sp-2)' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>$</span>
          <input
            className="input"
            type="number"
            placeholder={`${currentBid + 5}`}
            value={bidAmount}
            onChange={e => setBidAmount(e.target.value)}
            style={{ paddingLeft: 22, padding: '8px 8px 8px 22px', fontSize: 'var(--text-xs)' }}
          />
        </div>
        <button className="btn btn-gold btn-sm" onClick={placeBid} disabled={placing}>
          {placing ? '...' : 'Bid'}
        </button>
      </div>
    </div>
  )
}

function RaidModal({ showId, onClose, artistName }) {
  const [shows, setShows] = useState([])
  const [raiding, setRaiding] = useState(false)
  const toast = useToast()
  const navigate = useNavigate()

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, 'shows')),
      snap => {
        const live = snap.docs
          .map(d => ({ id: d.id, ...d.data() }))
          .filter(s => s.status === 'live' && s.id !== showId)
        setShows(live)
      }
    )
    return unsub
  }, [showId])

  async function raid(targetShow) {
    setRaiding(true)
    try {
      await addDoc(collection(db, 'shows', showId, 'chat'), {
        text: `⚡ ${artistName} is raiding ${targetShow.artistName}! Everyone follow!`,
        userId: 'system',
        userName: 'System',
        createdAt: serverTimestamp(),
      })
      await updateDoc(doc(db, 'shows', showId), { status: 'ended' })
      toast.success(`Raiding ${targetShow.artistName}!`)
      setTimeout(() => navigate(`/show/${targetShow.id}`), 1500)
    } catch (err) {
      toast.error('Could not raid. Try again.')
      setRaiding(false)
    }
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="sheet" onClick={e => e.stopPropagation()}>
        <div className="sheet-handle" />
        <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: 'var(--sp-2)' }}>
          ⚡ Raid a Show
        </h3>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--slate)', marginBottom: 'var(--sp-4)' }}>
          Send your viewers to another live artist.
        </p>

        {shows.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 'var(--sp-8)', color: 'var(--slate)' }}>
            <p>No other shows live right now.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
            {shows.map(s => (
              <div key={s.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--sp-4)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{s.artistName}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>{s.title}</div>
                </div>
                <button className="btn btn-primary btn-sm" onClick={() => raid(s)} disabled={raiding}>
                  <Zap size={12} /> Raid
                </button>
              </div>
            ))}
          </div>
        )}

        <button className="btn btn-ghost btn-full" style={{ marginTop: 'var(--sp-4)' }} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default function ShowRoom() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { user, profile } = useAuth()
  const toast = useToast()

  const isHost = searchParams.get('host') === 'true'

  const [show, setShow] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showRaid, setShowRaid] = useState(false)

  useEffect(() => {
    if (!id) return
    const unsub = onSnapshot(doc(db, 'shows', id), snap => {
      if (snap.exists()) setShow({ id: snap.id, ...snap.data() })
    })
    return unsub
  }, [id])

  useEffect(() => {
    if (!show) return
    async function getToken() {
      try {
        const res = await fetch('/.netlify/functions/livekit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            roomName: show.roomName,
            participantName: profile?.displayName || `Guest_${Date.now()}`,
            isHost,
          }),
        })
        const { token, error } = await res.json()
        if (error) throw new Error(error)
        setToken(token)
      } catch (err) {
        toast.error('Could not connect to stream.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    getToken()
  }, [show])

  async function endShow() {
    try {
      await updateDoc(doc(db, 'shows', id), { status: 'ended' })
      toast.success('Show ended.')
      navigate('/live')
    } catch (err) {
      toast.error('Could not end show.')
    }
  }

  if (loading || !show) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100dvh', color: 'var(--slate)' }}>
      Connecting to stream...
    </div>
  )

  return (
    <div style={{ height: '100dvh', display: 'flex', flexDirection: 'column', background: 'var(--charcoal)' }}>

      <div style={{ padding: 'var(--sp-3) var(--sp-4)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,248,240,0.08)', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
          <button onClick={() => navigate('/live')} style={{ background: 'none', border: 'none', color: 'var(--slate)', cursor: 'pointer', fontSize: 'var(--text-sm)' }}>
            ← Back
          </button>
          <div>
            <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>{show.title}</div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>by {show.artistName}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}>
          <span className="badge badge-live" style={{ fontSize: 10 }}>
            <span className="live-dot" style={{ width: 6, height: 6 }} /> LIVE
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>
            <Eye size={12} /> {show.viewerCount || 0}
          </span>
        </div>
      </div>

      <div style={{ flex: '0 0 45%', background: '#000', position: 'relative' }}>
        {token ? (
          <LiveKitRoom
            token={token}
            serverUrl={import.meta.env.VITE_LIVEKIT_URL}
            connect={true}
            video={isHost}
            audio={isHost}
            style={{ height: '100%' }}
          >
            <VideoConference />
            <RoomAudioRenderer />
          </LiveKitRoom>
        ) : (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate)' }}>
            <Radio size={32} style={{ opacity: 0.3 }} />
          </div>
        )}
      </div>

      {show.allowBidding && <BidPanel showId={id} show={show} user={user} profile={profile} />}

      <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,248,240,0.08)', flexShrink: 0 }}>
        <div style={{ flex: 1, padding: 'var(--sp-3)', color: 'var(--coral)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center', borderBottom: '2px solid var(--coral)' }}>
          Chat
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Chat showId={id} user={user} profile={profile} />
      </div>

      {isHost && (
        <div style={{ padding: 'var(--sp-3)', borderTop: '1px solid rgba(255,248,240,0.08)', display: 'flex', gap: 'var(--sp-3)', flexShrink: 0 }}>
          <button className="btn btn-ghost btn-sm" style={{ flex: 1 }} onClick={() => setShowRaid(true)}>
            <Zap size={14} /> Raid
          </button>
          <button className="btn btn-ghost btn-sm" style={{ flex: 1, color: 'var(--red-err)', borderColor: 'var(--red-err)' }} onClick={endShow}>
            <LogOut size={14} /> End Show
          </button>
        </div>
      )}

      {showRaid && (
        <RaidModal
          showId={id}
          onClose={() => setShowRaid(false)}
          artistName={profile?.displayName || 'Artist'}
        />
      )}
    </div>
  )
}