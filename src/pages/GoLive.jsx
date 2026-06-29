// src/pages/GoLive.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import TopBar from '../components/TopBar'
import { Radio, Video, Users, Gavel } from 'lucide-react'

const ART_TYPES = ['Painting', 'Drawing', 'Digital', 'Photography', 'Sculpture', 'Textile', 'Mixed Media', 'Print', 'Other']

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

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  async function startShow() {
    if (!form.title) { toast.error('Give your show a title.'); return }
    if (!form.artType) { toast.error('Select an art type.'); return }
    setStarting(true)

    try {
      // Create show in Firestore
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
        currentBid: null,
        currentBidder: null,
        createdAt: serverTimestamp(),
      }

      const docRef = await addDoc(collection(db, 'shows'), showData)
      toast.success('Show created! Starting your stream...')
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

        {/* Header */}
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

        {/* Form */}
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

          {/* Features */}
          <div style={{ padding: 'var(--sp-4)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
            <div className="input-label" style={{ marginBottom: 'var(--sp-3)' }}>Show Features</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
              {[
                { key: 'allowBidding', label: 'Live Bidding', desc: 'Run live auctions during your show', icon: Gavel },
              ].map(({ key, label, desc, icon: Icon }) => (
                <label key={key} style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={form[key]}
                    onChange={e => set(key, e.target.checked)}
                    style={{ width: 18, height: 18, accentColor: 'var(--coral)', cursor: 'pointer', flexShrink: 0 }}
                  />
                  <div>
                    <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Icon size={14} color="var(--coral)" /> {label}
                    </div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>{desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div style={{ padding: 'var(--sp-4)', background: 'rgba(255,215,0,0.06)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,215,0,0.15)' }}>
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 'var(--sp-2)' }}>Tips for a great show</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
              {[
                'Good lighting makes your art pop',
                'Have your pieces ready before going live',
                'Engage with viewers in the chat',
                'Raid another artist when you end',
              ].map(tip => (
                <div key={tip} style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', display: 'flex', gap: 'var(--sp-2)' }}>
                  <span style={{ color: 'var(--gold)' }}>→</span> {tip}
                </div>
              ))}
            </div>
          </div>

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