// src/pages/ArtistProfile.jsx
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { db } from '../firebase'
import { doc, onSnapshot, getDoc, setDoc, deleteDoc, updateDoc, increment, collection, query, where, getDocs } from 'firebase/firestore'
import TopBar from '../components/TopBar'
import ArtCard from '../components/ArtCard'
import LiveCard from '../components/LiveCard'
import { UserPlus, UserCheck, Instagram, Globe, Store, Radio } from 'lucide-react'

export default function ArtistProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const toast = useToast()

  const [artist, setArtist] = useState(null)
  const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState([])
  const [shows, setShows] = useState([])
  const [isFollowing, setIsFollowing] = useState(false)
  const [followLoading, setFollowLoading] = useState(false)
  const [followChecked, setFollowChecked] = useState(false)

  const isOwnProfile = user?.uid === id

  // Live artist doc, so followerCount (and anything else) updates in real time
  // for anyone currently viewing this page - including right after a follow/unfollow.
  useEffect(() => {
    if (!id) return
    const unsub = onSnapshot(
      doc(db, 'users', id),
      snap => {
        if (snap.exists()) setArtist({ uid: snap.id, ...snap.data() })
        else setArtist(null)
        setLoading(false)
      },
      err => {
        console.error('Could not load artist profile:', err)
        setLoading(false)
      }
    )
    return unsub
  }, [id])

  // Listings + shows - one-time load rather than live, to avoid extra reads on
  // every render for content that doesn't need second-by-second freshness here.
  useEffect(() => {
    if (!id) return
    async function loadContent() {
      try {
        const listingsQ = query(collection(db, 'listings'), where('artistId', '==', id), where('status', '==', 'active'))
        const listingsSnap = await getDocs(listingsQ)
        setListings(listingsSnap.docs.map(d => ({ id: d.id, ...d.data() })))
      } catch (e) {
        console.error('Could not load artist listings:', e)
      }
      try {
        const showsQ = query(collection(db, 'shows'), where('artistId', '==', id))
        const showsSnap = await getDocs(showsQ)
        const list = showsSnap.docs.map(d => ({ id: d.id, ...d.data() }))
        list.sort((a, b) => {
          const aT = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(0)
          const bT = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(0)
          return bT - aT
        })
        setShows(list)
      } catch (e) {
        console.error('Could not load artist shows:', e)
      }
    }
    loadContent()
  }, [id])

  // Check follow status - a single get() on your own follow doc, allowed by the
  // updated Firestore rules even though you can't list the artist's full follower list.
  useEffect(() => {
    if (!user || isOwnProfile || !id) { setFollowChecked(true); return }
    async function checkFollowing() {
      try {
        const snap = await getDoc(doc(db, 'users', id, 'followers', user.uid))
        setIsFollowing(snap.exists())
      } catch (e) {
        console.error('Could not check follow status:', e)
      } finally {
        setFollowChecked(true)
      }
    }
    checkFollowing()
  }, [user, id, isOwnProfile])

  async function toggleFollow() {
    if (!user) { navigate('/auth'); return }
    if (isOwnProfile) return
    setFollowLoading(true)
    try {
      const followerDocRef = doc(db, 'users', id, 'followers', user.uid)
      const artistDocRef = doc(db, 'users', id)
      if (isFollowing) {
        await deleteDoc(followerDocRef)
        await updateDoc(artistDocRef, { followerCount: increment(-1) })
        setIsFollowing(false)
      } else {
        await setDoc(followerDocRef, { email: user.email, followedAt: new Date().toISOString() })
        await updateDoc(artistDocRef, { followerCount: increment(1) })
        setIsFollowing(true)
      }
    } catch (e) {
      console.error('Follow toggle failed:', e)
      toast.error('Could not update follow status. Try again.')
    } finally {
      setFollowLoading(false)
    }
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100dvh', color: 'var(--slate)' }}>
        Loading…
      </div>
    )
  }

  if (!artist) {
    return (
      <div className="page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', gap: 'var(--sp-4)' }}>
        <p style={{ color: 'var(--slate)' }}>Artist not found.</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Discover</button>
      </div>
    )
  }

  const initials = artist.displayName?.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) || '?'

  return (
    <div className="page">
      <TopBar title={artist.displayName || 'Artist'} back />

      <div className="container" style={{ paddingTop: 'var(--sp-6)' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-4)', marginBottom: 'var(--sp-4)' }}>
          <div className="avatar avatar-lg" style={{ border: '3px solid var(--charcoal2)', fontSize: 'var(--text-xl)', overflow: 'hidden' }}>
            {artist.avatarUrl
              ? <img src={artist.avatarUrl} alt={artist.displayName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : initials}
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)' }}>{artist.displayName}</h2>
            <span className="badge badge-gold">Artist</span>
          </div>
        </div>

        {artist.bio && (
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--slate)', lineHeight: 1.6, marginBottom: 'var(--sp-4)' }}>
            {artist.bio}
          </p>
        )}

        {(artist.instagram || artist.website) && (
          <div style={{ display: 'flex', gap: 'var(--sp-4)', marginBottom: 'var(--sp-4)', flexWrap: 'wrap' }}>
            {artist.instagram && (
              <a
                href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 'var(--text-xs)', color: 'var(--slate)' }}
              >
                <Instagram size={14} /> {artist.instagram}
              </a>
            )}
            {artist.website && (
              <a
                href={artist.website}
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 'var(--text-xs)', color: 'var(--slate)' }}
              >
                <Globe size={14} /> Website
              </a>
            )}
          </div>
        )}

        {/* STATS */}
        <div style={{ display: 'flex', gap: 'var(--sp-4)', paddingBottom: 'var(--sp-4)', borderBottom: '1px solid rgba(255,248,240,0.08)', marginBottom: 'var(--sp-4)' }}>
          {[[listings.length, 'Listed'], [artist.totalSales || 0, 'Sold'], [artist.followerCount || 0, 'Followers']].map(([val, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--coral)' }}>{val}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* FOLLOW BUTTON - hidden on your own profile */}
        {!isOwnProfile && followChecked && (
          <button
            className={isFollowing ? 'btn btn-ghost btn-full' : 'btn btn-primary btn-full'}
            onClick={toggleFollow}
            disabled={followLoading}
            style={{ marginBottom: 'var(--sp-6)' }}
          >
            {isFollowing ? <UserCheck size={16} /> : <UserPlus size={16} />}
            {followLoading ? 'Updating...' : isFollowing ? 'Following' : 'Follow'}
          </button>
        )}

        {/* LISTINGS */}
        <section style={{ marginBottom: 'var(--sp-8)' }}>
          <div className="section-header">
            <span className="section-title">Listings</span>
          </div>
          {listings.length > 0 ? (
            <div className="art-grid">
              {listings.map(p => <ArtCard key={p.id} piece={p} />)}
            </div>
          ) : (
            <div style={{ padding: 'var(--sp-8) 0', textAlign: 'center', color: 'var(--slate)' }}>
              <Store size={28} style={{ margin: '0 auto var(--sp-3)', opacity: 0.4 }} />
              <p style={{ fontSize: 'var(--text-sm)' }}>No active listings.</p>
            </div>
          )}
        </section>

        {/* SHOWS */}
        <section>
          <div className="section-header">
            <span className="section-title">Shows</span>
          </div>
          {shows.length > 0 ? (
            <div style={{ display: 'flex', gap: 'var(--sp-3)', overflowX: 'auto', paddingBottom: 'var(--sp-2)' }}>
              {shows.map(s => <LiveCard key={s.id} show={s} />)}
            </div>
          ) : (
            <div style={{ padding: 'var(--sp-8) 0', textAlign: 'center', color: 'var(--slate)' }}>
              <Radio size={28} style={{ margin: '0 auto var(--sp-3)', opacity: 0.4 }} />
              <p style={{ fontSize: 'var(--text-sm)' }}>No shows yet.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}