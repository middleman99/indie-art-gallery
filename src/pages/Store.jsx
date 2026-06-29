// src/pages/Store.jsx
import { useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import TopBar from '../components/TopBar'
import ArtCard from '../components/ArtCard'

const ALL_PIECES = [
  { id: 'b1', title: 'Golden Hour', artistName: 'Maya R.', price: 280, listingType: 'fixed', artType: 'Painting', medium: 'Acrylic on canvas' },
  { id: 'b2', title: 'Neon Dreams', artistName: 'Dev K.', currentBid: 120, startingBid: 80, listingType: 'auction', artType: 'Digital' },
  { id: 'b3', title: 'Untitled No. 7', artistName: 'Sara L.', price: 95, listingType: 'fixed', artType: 'Drawing' },
  { id: 'b4', title: 'City Pulse', artistName: 'James O.', currentBid: 340, startingBid: 200, listingType: 'auction', artType: 'Photography' },
  { id: 'b5', title: 'Soul Fragment', artistName: 'Nia P.', price: 175, listingType: 'fixed', artType: 'Mixed Media' },
  { id: 'b6', title: 'Bloom', artistName: 'Chen W.', price: 420, listingType: 'fixed', artType: 'Textile' },
  { id: 'b7', title: 'Dark Matter', artistName: 'Alex T.', price: 680, listingType: 'fixed', artType: 'Painting' },
  { id: 'b8', title: 'Frequency', artistName: 'Jo M.', currentBid: 55, startingBid: 40, listingType: 'auction', artType: 'Digital' },
]

const SORT_OPTIONS = [
  { value: 'new',        label: 'Newest' },
  { value: 'price-asc',  label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'bids',       label: 'Most Bids' },
]

const ART_TYPES = ['All', 'Painting', 'Drawing', 'Digital', 'Photography', 'Sculpture', 'Textile', 'Mixed Media', 'Print']
const LISTING_TYPES = ['All', 'Buy Now', 'Auction']

export default function Store() {
  const [search, setSearch]       = useState('')
  const [artType, setArtType]     = useState('All')
  const [listType, setListType]   = useState('All')
  const [sort, setSort]           = useState('new')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = ALL_PIECES.filter(p => {
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.artistName.toLowerCase().includes(search.toLowerCase())
    const matchArt    = artType === 'All' || p.artType === artType
    const matchList   = listType === 'All' || (listType === 'Buy Now' ? p.listingType === 'fixed' : p.listingType === 'auction')
    return matchSearch && matchArt && matchList
  })

  return (
    <div className="page">
      <TopBar />

      <div className="container" style={{ paddingTop: 'var(--sp-4)' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--sp-4)' }}>
          Browse Art
        </h1>

        {/* Search bar */}
        <div style={{ position: 'relative', marginBottom: 'var(--sp-3)' }}>
          <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)' }} />
          <input
            className="input"
            type="text"
            placeholder="Search by title or artist…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ paddingLeft: 40 }}
          />
        </div>

        {/* Filter toggle + sort */}
        <div className="flex items-center justify-between mb-4">
          <button
            className={`chip ${showFilters ? 'selected' : ''}`}
            onClick={() => setShowFilters(f => !f)}
            style={{ display: 'flex', alignItems: 'center', gap: 6 }}
          >
            <SlidersHorizontal size={12} /> Filters
            {(artType !== 'All' || listType !== 'All') && (
              <span style={{ background: 'var(--coral)', color: '#fff', borderRadius: '50%', width: 16, height: 16, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                {[artType !== 'All', listType !== 'All'].filter(Boolean).length}
              </span>
            )}
          </button>

          <select
            className="input"
            value={sort}
            onChange={e => setSort(e.target.value)}
            style={{ width: 'auto', padding: '8px 12px', fontSize: 'var(--text-xs)' }}
          >
            {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        {/* Filters panel */}
        {showFilters && (
          <div style={{ marginBottom: 'var(--sp-4)', padding: 'var(--sp-4)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
            <div style={{ marginBottom: 'var(--sp-3)' }}>
              <div className="input-label" style={{ marginBottom: 'var(--sp-2)' }}>Art Type</div>
              <div className="chips">
                {ART_TYPES.map(t => (
                  <button key={t} className={`chip ${artType === t ? 'selected' : ''}`} onClick={() => setArtType(t)}>{t}</button>
                ))}
              </div>
            </div>
            <div>
              <div className="input-label" style={{ marginBottom: 'var(--sp-2)' }}>Listing Type</div>
              <div className="chips">
                {LISTING_TYPES.map(t => (
                  <button key={t} className={`chip ${listType === t ? 'selected' : ''}`} onClick={() => setListType(t)}>{t}</button>
                ))}
              </div>
            </div>
            {(artType !== 'All' || listType !== 'All') && (
              <button
                onClick={() => { setArtType('All'); setListType('All') }}
                style={{ marginTop: 'var(--sp-3)', fontSize: 'var(--text-xs)', color: 'var(--coral)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* Results */}
        <div style={{ marginBottom: 'var(--sp-3)', fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>
          {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} found
        </div>

        {filtered.length > 0 ? (
          <div className="art-grid">
            {filtered.map(p => <ArtCard key={p.id} piece={p} />)}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 'var(--sp-16) 0', color: 'var(--slate)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--sp-4)' }}>🔍</div>
            <p>No results. Try a different search or filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
