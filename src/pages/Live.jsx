// src/pages/Live.jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../context/AuthContext'
import TopBar from '../components/TopBar'
import LiveCard from '../components/LiveCard'
import { Radio, Calendar, Palette, ShoppingBag } from 'lucide-react'

export default function Live() {
  const { user, isArtist } = useAuth()
  const navigate = useNavigate()
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, 'shows'), where('status', '==', 'live'))
    const unsub = onSnapshot(q, snap => {
      setShows(snap.docs.map(d => ({ id: d.id, ...d.data() })))
      setLoading(false)
    }, () => setLoading(false))
    return unsub
  }, [])

  return (
    <div className="page">
      <TopBar />

      <div className="container" style={{ paddingTop: 'var(--sp-4)' }}>
        <div className="flex items-center justify-between mb-6">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
            <span className="live-dot" /> Live Shows
          </h1>
          {isArtist && (
            <button className="btn btn-primary btn-sm" onClick={() => navigate('/go-live')}>
              <Radio size={14} /> Go Live
            </button>
          )}
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 'var(--sp-10) 0', color: 'var(--slate)' }}>
            Loading shows...
          </div>
        ) : shows.length > 0 ? (
          <section style={{ marginBottom: 'var(--sp-8)' }}>
            <div className="section-header">
              <span className="section-title" style={{ fontSize: 'var(--text-lg)' }}>On Now</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>{shows.length} live</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--sp-3)' }}>
              {shows.map(s => <LiveCard key={s.id} show={s} />)}
            </div>
          </section>
        ) : (
          <div
            className="grain-overlay"
            style={{
              textAlign: 'center',
              padding: 'var(--sp-10) var(--sp-6)',
              marginBottom: 'var(--sp-8)',
              borderRadius: 'var(--r-lg)',
              background: 'linear-gradient(160deg, var(--coral-soft), var(--gold-soft))',
              border: '1px solid rgba(28,26,23,0.06)',
            }}
          >
            <div style={{
              width: 64, height: 64, margin: '0 auto var(--sp-5)',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--coral), var(--gold))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: 'var(--shadow-card)',
            }}>
              <Palette size={26} color="var(--white)" />
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 6 }}>
              No live shows right now
            </p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--slate)', maxWidth: 340, margin: '0 auto var(--sp-5)' }}>
              Artists go live to paint, unveil new work, and auction pieces in real time. Check back soon — or browse the gallery while you wait.
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-sm" onClick={() => navigate('/store')}>
                <ShoppingBag size={14} /> Browse the Store
              </button>
              {isArtist && (
                <button className="btn btn-ghost btn-sm" onClick={() => navigate('/go-live')}>
                  <Radio size={14} /> Be the first to go live
                </button>
              )}
            </div>
          </div>
        )}

        {!user && (
          <div style={{ marginTop: 'var(--sp-8)', padding: 'var(--sp-6)', background: 'rgba(255,77,77,0.08)', borderRadius: 'var(--r-lg)', border: '1px solid rgba(255,77,77,0.2)', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', marginBottom: 'var(--sp-3)' }}>Ready to bid?</p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--slate)', marginBottom: 'var(--sp-4)' }}>Create a free account to join live shows and bid on art.</p>
            <button className="btn btn-primary" onClick={() => navigate('/auth')}>Join Indie Art Gallery</button>
          </div>
        )}
      </div>
    </div>
  )
}