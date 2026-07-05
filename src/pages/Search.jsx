// src/pages/Search.jsx
import { useState, useEffect } from 'react'
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../context/AuthContext'
import TopBar from '../components/TopBar'
import ArtCard from '../components/ArtCard'
import { Search as SearchIcon, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Search() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [term, setTerm] = useState('')
  const [listings, setListings] = useState([])
  const [artists, setArtists] = useState([])
  const [searching, setSearching] = useState(false)
  const [searched, setSearched] = useState(false)

  // Debounced search - waits 400ms after typing stops before actually querying,
  // so we're not firing a query on every single keystroke.
  useEffect(() => {
    const trimmed = term.trim().toLowerCase()
    if (!trimmed) {
      setListings([])
      setArtists([])
      setSearched(false)
      return
    }

    const timeout = setTimeout(async () => {
      setSearching(true)
      try {
        const listingsQ = query(
          collection(db, 'listings'),
          where('status', '==', 'active'),
          where('titleLower', '>=', trimmed),
          where('titleLower', '<=', trimmed + '\uf8ff'),
          limit(20)
        )
        const listingsSnap = await getDocs(listingsQ)
        setListings(listingsSnap.docs.map(d => ({ id: d.id, ...d.data() })))
      } catch (err) {
        console.error('Listing search failed:', err)
        setListings([])
      }

      // Artist search requires being logged in - the users collection's read rule
      // is "if request.auth != null", so a logged-out visitor's query here will
      // fail with permission-denied. Skip it cleanly rather than show an error.
      if (user) {
        try {
          const artistsQ = query(
            collection(db, 'users'),
            where('displayNameLower', '>=', trimmed),
            where('displayNameLower', '<=', trimmed + '\uf8ff'),
            limit(10)
          )
          const artistsSnap = await getDocs(artistsQ)
          setArtists(
            artistsSnap.docs
              .map(d => ({ id: d.id, ...d.data() }))
              .filter(u => u.role === 'artist' || u.role === 'both')
          )
        } catch (err) {
          console.error('Artist search failed:', err)
          setArtists([])
        }
      } else {
        setArtists([])
      }

      setSearching(false)
      setSearched(true)
    }, 400)

    return () => clearTimeout(timeout)
  }, [term, user])

  return (
    <div className="page">
      <TopBar back title="Search" />

      <div className="container" style={{ paddingTop: 'var(--sp-4)', maxWidth: 600 }}>
        <div style={{ position: 'relative', marginBottom: 'var(--sp-5)' }}>
          <SearchIcon size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)' }} />
          <input
            className="input"
            type="text"
            autoFocus
            placeholder="Search art or artists..."
            value={term}
            onChange={e => setTerm(e.target.value)}
            style={{ paddingLeft: 40 }}
          />
        </div>

        {!user && (
          <div style={{ marginBottom: 'var(--sp-5)', padding: 'var(--sp-3)', background: 'rgba(255,215,0,0.06)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,215,0,0.15)', fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>
            Sign in to also search for artists by name - right now this only searches art titles.
          </div>
        )}

        {!term.trim() ? (
          <div style={{ textAlign: 'center', padding: 'var(--sp-12) 0', color: 'var(--slate)' }}>
            <SearchIcon size={32} style={{ margin: '0 auto var(--sp-4)', opacity: 0.3 }} />
            <p>Search for art by title, or artists by name.</p>
            <p style={{ fontSize: 'var(--text-xs)', marginTop: 'var(--sp-2)' }}>Matches from the start of the name - try the first few letters.</p>
          </div>
        ) : searching ? (
          <div style={{ textAlign: 'center', padding: 'var(--sp-10) 0', color: 'var(--slate)' }}>
            Searching...
          </div>
        ) : (
          <>
            {artists.length > 0 && (
              <section style={{ marginBottom: 'var(--sp-6)' }}>
                <div className="section-header">
                  <span className="section-title">Artists</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                  {artists.map(a => (
                    <div
                      key={a.id}
                      onClick={() => navigate(`/artist/${a.id}`)}
                      style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', padding: 'var(--sp-3)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)', cursor: 'pointer' }}
                    >
                      <div className="avatar" style={{ width: 36, height: 36, fontSize: 'var(--text-sm)', overflow: 'hidden', flexShrink: 0 }}>
                        {a.avatarUrl
                          ? <img src={a.avatarUrl} alt={a.displayName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          : <User size={16} />}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{a.displayName}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {listings.length > 0 && (
              <section>
                <div className="section-header">
                  <span className="section-title">Art</span>
                </div>
                <div className="art-grid">
                  {listings.map(p => <ArtCard key={p.id} piece={p} />)}
                </div>
              </section>
            )}

            {searched && artists.length === 0 && listings.length === 0 && (
              <div style={{ textAlign: 'center', padding: 'var(--sp-12) 0', color: 'var(--slate)' }}>
                <p>No results for "{term}".</p>
                <p style={{ fontSize: 'var(--text-xs)', marginTop: 'var(--sp-2)' }}>Try the first few letters of a title or artist name instead of the middle of a word.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}