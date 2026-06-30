// src/pages/Live.jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../context/AuthContext'
import TopBar from '../components/TopBar'
import LiveCard from '../components/LiveCard'
import { Radio, Calendar } from 'lucide-react'

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
          <div style={{ textAlign: 'center', padding: 'var(--sp-10) 0', color: 'var(--slate)', marginBottom: 'var(--sp-8)' }}>
            <Radio size={32} style={{ margin: '0 auto var(--sp-4)', opacity: 0.3 }} />
            <p>No one is live right now.</p>
            {isArtist && (
              <button className="btn btn-primary btn-sm" style={{ marginTop: 'var(--sp-4)' }} onClick={() => navigate('/go-live')}>
                Be the first to go live
              </button>
            )}
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