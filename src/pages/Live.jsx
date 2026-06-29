// src/pages/Live.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import TopBar from '../components/TopBar'
import LiveCard from '../components/LiveCard'
import { Radio, Calendar } from 'lucide-react'

const LIVE_SHOWS = [
  { id: 's1', artistName: 'Maya R.', title: 'Painting Live Drop', viewerCount: 84, artType: 'Painting' },
  { id: 's2', artistName: 'Dev K.', title: 'Digital Art Auction', viewerCount: 217, artType: 'Digital' },
  { id: 's3', artistName: 'Nia P.', title: 'Mixed Media Session', viewerCount: 41, artType: 'Mixed Media' },
  { id: 's4', artistName: 'James O.', title: 'Photography & Prints', viewerCount: 129, artType: 'Photography' },
]

const UPCOMING = [
  { id: 'u1', artistName: 'Sara L.', title: 'Ink Drawing Drop', scheduledFor: 'Today at 7 PM ET', artType: 'Drawing' },
  { id: 'u2', artistName: 'Chen W.', title: 'Textile Art Showcase', scheduledFor: 'Tomorrow at 2 PM ET', artType: 'Textile' },
  { id: 'u3', artistName: 'Alex T.', title: 'Large Format Paintings', scheduledFor: 'Sat at 6 PM ET', artType: 'Painting' },
]

export default function Live() {
  const { user, isArtist } = useAuth()
  const navigate = useNavigate()

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

        {/* Live now grid */}
        {LIVE_SHOWS.length > 0 ? (
          <section style={{ marginBottom: 'var(--sp-8)' }}>
            <div className="section-header">
              <span className="section-title" style={{ fontSize: 'var(--text-lg)' }}>On Now</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>{LIVE_SHOWS.length} live</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--sp-3)' }}>
              {LIVE_SHOWS.map(s => (
                <LiveCard key={s.id} show={s} onClick={() => navigate(`/show/${s.id}`)} />
              ))}
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

        {/* Upcoming */}
        <section>
          <div className="section-header">
            <span className="section-title" style={{ fontSize: 'var(--text-lg)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Calendar size={18} /> Upcoming
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
            {UPCOMING.map(s => (
              <div key={s.id} style={{ padding: 'var(--sp-4)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)', display: 'flex', alignItems: 'center', gap: 'var(--sp-4)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 'var(--r-sm)', background: 'rgba(255,77,77,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
                  🎨
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', marginBottom: 2 }}>{s.artistName}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>{s.title}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gold)', fontWeight: 600 }}>{s.scheduledFor}</div>
                  <button style={{ marginTop: 4, fontSize: 'var(--text-xs)', color: 'var(--coral)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    Remind me
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

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