// src/pages/Discover.jsx
import { useState, useEffect } from 'react'
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import TopBar from '../components/TopBar'
import ArtCard from '../components/ArtCard'
import LiveCard from '../components/LiveCard'
import { Flame, Sparkles, Clock } from 'lucide-react'

const ART_TYPES = ['All', 'Painting', 'Drawing', 'Digital', 'Photography', 'Sculpture', 'Textile', 'Mixed Media', 'Print']

// Demo data until Firebase is seeded
const DEMO_PIECES = [
  { id: 'a1', title: 'Golden Hour', artistName: 'Maya R.', price: 280, listingType: 'fixed', artType: 'Painting' },
  { id: 'a2', title: 'Neon Dreams', artistName: 'Dev K.', currentBid: 120, startingBid: 80, listingType: 'auction', artType: 'Digital' },
  { id: 'a3', title: 'Untitled No. 7', artistName: 'Sara L.', price: 95, listingType: 'fixed', artType: 'Drawing' },
  { id: 'a4', title: 'City Pulse', artistName: 'James O.', currentBid: 340, startingBid: 200, listingType: 'auction', artType: 'Photography' },
  { id: 'a5', title: 'Soul Fragment', artistName: 'Nia P.', price: 175, listingType: 'fixed', artType: 'Mixed Media' },
  { id: 'a6', title: 'Bloom', artistName: 'Chen W.', price: 420, listingType: 'fixed', artType: 'Textile' },
]

const DEMO_SHOWS = [
  { id: 's1', artistName: 'Maya R.', title: 'Painting Live Drop', viewerCount: 84 },
  { id: 's2', artistName: 'Dev K.', title: 'Digital Art Auction', viewerCount: 217 },
  { id: 's3', artistName: 'Nia P.', title: 'Mixed Media Session', viewerCount: 41 },
]

export default function Discover() {
  const [activeTab, setActiveTab] = useState('All')
  const [pieces, setPieces]       = useState(DEMO_PIECES)
  const [shows, setShows]         = useState(DEMO_SHOWS)
  const [feed, setFeed]           = useState('trending')

  const filtered = activeTab === 'All' ? pieces : pieces.filter(p => p.artType === activeTab)

  return (
    <div className="page">
      <TopBar showSearch />

      {/* Hero */}
      <div className="grain-overlay" style={{
        background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--charcoal3) 100%)',
        padding: 'var(--sp-8) var(--sp-4) var(--sp-10)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative coral blob */}
        <div style={{
          position: 'absolute', top: -60, right: -60,
          width: 200, height: 200,
          background: 'radial-gradient(circle, rgba(255,77,77,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -40, left: -40,
          width: 180, height: 180,
          background: 'radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--coral)', marginBottom: 'var(--sp-2)' }}>
            Original art only
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginBottom: 'var(--sp-4)' }}>
            The gallery<br />is always open.
          </h1>
          <p style={{ color: 'var(--slate)', maxWidth: 340, fontSize: 'var(--text-sm)' }}>
            Buy one-of-a-kind pieces from independent artists — live or anytime.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 'var(--sp-6)' }}>

        {/* Live Now */}
        {shows.length > 0 && (
          <section style={{ marginBottom: 'var(--sp-8)' }}>
            <div className="section-header">
              <span className="section-title flex items-center gap-2">
                <span className="live-dot" /> Live Now
              </span>
              <a href="/live" className="section-link">See all</a>
            </div>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', overflowX: 'auto', paddingBottom: 'var(--sp-2)', scrollbarWidth: 'none' }}>
              {shows.map(s => <LiveCard key={s.id} show={s} />)}
            </div>
          </section>
        )}

        {/* Feed toggle */}
        <div className="flex gap-2 mb-4">
          {[
            { key: 'trending', label: 'Trending', icon: Flame },
            { key: 'new',      label: 'New',      icon: Sparkles },
            { key: 'ending',   label: 'Ending Soon', icon: Clock },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              className={`chip ${feed === key ? 'selected' : ''}`}
              onClick={() => setFeed(key)}
              style={{ display: 'flex', alignItems: 'center', gap: 4 }}
            >
              <Icon size={11} /> {label}
            </button>
          ))}
        </div>

        {/* Art type filter */}
        <div className="chips mb-4" style={{ overflowX: 'auto', flexWrap: 'nowrap', paddingBottom: 4 }}>
          {ART_TYPES.map(t => (
            <button
              key={t}
              className={`chip ${activeTab === t ? 'selected' : ''}`}
              onClick={() => setActiveTab(t)}
              style={{ flexShrink: 0 }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Art Grid */}
        <div className="art-grid">
          {filtered.map(p => <ArtCard key={p.id} piece={p} />)}
        </div>

        {filtered.length === 0 && (
          <div className="text-center" style={{ padding: 'var(--sp-16) 0', color: 'var(--slate)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--sp-4)' }}>🎨</div>
            <p>No {activeTab} pieces yet.</p>
            <p style={{ fontSize: 'var(--text-sm)', marginTop: 4 }}>Be the first to list one!</p>
          </div>
        )}
      </div>
    </div>
  )
}
