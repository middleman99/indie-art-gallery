// src/pages/Profile.jsx
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { doc, setDoc, updateDoc, collection, query, where, getDocs, onSnapshot, addDoc, serverTimestamp, getCountFromServer } from 'firebase/firestore'
import { db } from '../firebase'
import { Camera, Edit2, LogOut, Plus, Radio, Store, CreditCard, Package, CheckCircle2, Circle, ChevronRight } from 'lucide-react'
import ArtCard from '../components/ArtCard'

const ART_TYPES = ['Painting', 'Drawing', 'Digital', 'Photography', 'Sculpture', 'Textile', 'Mixed Media', 'Print', 'Installation', 'Other']

const CLOUDINARY_CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
const CLOUDINARY_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

// Same upload pattern as ListArt.jsx - duplicated locally rather than shared,
// to avoid touching the already-working listing upload flow for a small helper.
async function uploadToCloudinary(file) {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', CLOUDINARY_PRESET)
  formData.append('folder', 'indie-art-gallery')

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`, {
    method: 'POST',
    body: formData,
  })
  const data = await res.json()
  if (data.error) throw new Error(data.error.message)
  return data.secure_url
}

const DEMO_PIECES = [
  { id: 'p1', title: 'Golden Hour', artistName: 'You', price: 280, listingType: 'fixed' },
  { id: 'p2', title: 'Neon Dreams', artistName: 'You', currentBid: 120, startingBid: 80, listingType: 'auction' },
]

// Guided setup checklist for new artists. Runs its own live Firestore query
// for listings, rather than trusting the (currently hardcoded/demo) listings
// section further down this page.
function OnboardingChecklist({ profile, user, navigate, onEditProfile }) {
  const [hasListing, setHasListing] = useState(null) // null = still checking

  useEffect(() => {
    if (!user?.uid) return
    let cancelled = false
    async function checkListings() {
      try {
        const q = query(
          collection(db, 'listings'),
          where('artistId', '==', user.uid),
          where('status', '==', 'active')
        )
        const snap = await getDocs(q)
        if (!cancelled) setHasListing(snap.docs.length > 0)
      } catch (e) {
        console.error('Could not check listings for onboarding checklist:', e)
        if (!cancelled) setHasListing(false)
      }
    }
    checkListings()
    return () => { cancelled = true }
  }, [user?.uid])

  // Avoid a flash of "incomplete" before we know the real listing status
  if (hasListing === null) return null

  const steps = [
    {
      key: 'profile',
      label: 'Complete your profile',
      sublabel: 'Add a bio and pick your art types',
      done: !!(profile?.bio?.trim() && profile?.artTypes?.length > 0),
      action: onEditProfile,
    },
    {
      key: 'stripe',
      label: 'Connect your bank account',
      sublabel: 'Required to receive payouts',
      // FIX: was profile?.stripeAccountId, which is set the instant a shell Stripe
      // account is created - before the artist ever completes real onboarding.
      // stripeOnboardingComplete is only set true after Stripe confirms
      // payoutsEnabled + detailsSubmitted (see ConnectStripe.jsx).
      done: !!profile?.stripeOnboardingComplete,
      action: () => navigate('/connect-stripe'),
    },
    {
      key: 'listing',
      label: 'List your first piece',
      sublabel: 'Get it in front of buyers',
      done: hasListing,
      action: () => navigate('/list'),
    },
  ]

  const doneCount = steps.filter(s => s.done).length
  if (doneCount === steps.length) return null // fully set up, don't clutter the page

  return (
    <div style={{
      marginBottom: 'var(--sp-6)',
      padding: 'var(--sp-5)',
      background: 'rgba(255,215,0,0.06)',
      borderRadius: 'var(--r-lg)',
      border: '1px solid rgba(255,215,0,0.2)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--sp-3)' }}>
        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)' }}>Get set up</h4>
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--gold)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
          {doneCount}/{steps.length}
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 999, marginBottom: 'var(--sp-4)', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${(doneCount / steps.length) * 100}%`,
          background: 'var(--gold)',
          borderRadius: 999,
          transition: 'width 0.3s ease',
        }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-1)' }}>
        {steps.map(step => (
          <button
            key={step.key}
            onClick={step.done ? undefined : step.action}
            disabled={step.done}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--sp-3)',
              padding: 'var(--sp-3)',
              background: 'transparent',
              border: 'none',
              borderRadius: 'var(--r-md)',
              cursor: step.done ? 'default' : 'pointer',
              textAlign: 'left',
              width: '100%',
              opacity: step.done ? 0.6 : 1,
            }}
          >
            {step.done
              ? <CheckCircle2 size={20} color="var(--green-ok)" style={{ flexShrink: 0 }} />
              : <Circle size={20} color="var(--slate)" style={{ flexShrink: 0 }} />}
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                textDecoration: step.done ? 'line-through' : 'none',
              }}>
                {step.label}
              </div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>{step.sublabel}</div>
            </div>
            {!step.done && <ChevronRight size={16} color="var(--slate)" style={{ flexShrink: 0 }} />}
          </button>
        ))}
      </div>
    </div>
  )
}

// Artist-facing pending offers - simple accept/decline. Accepting creates a real
// order (reusing the exact same order shape as auction wins and Buy Now) and
// auto-declines any other pending offers on the same listing, so the piece can't
// accidentally end up "sold" to two different buyers.
function OffersPanel({ user }) {
  const [offers, setOffers] = useState([])
  const [respondingId, setRespondingId] = useState(null)

  useEffect(() => {
    if (!user?.uid) return
    const q = query(collection(db, 'offers'), where('artistId', '==', user.uid), where('status', '==', 'pending'))
    const unsub = onSnapshot(q, snap => {
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      list.sort((a, b) => {
        const aT = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(0)
        const bT = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(0)
        return bT - aT
      })
      setOffers(list)
    }, err => console.error('Could not load offers:', err))
    return unsub
  }, [user?.uid])

  async function respond(offer, accept) {
    if (respondingId) return
    setRespondingId(offer.id)
    try {
      if (accept) {
        const paymentDeadline = new Date(Date.now() + 60 * 60 * 1000)
        const newOrderRef = doc(collection(db, 'orders'))

        await setDoc(newOrderRef, {
          showId: null,
          pieceId: offer.listingId,
          pieceTitle: offer.pieceTitle,
          winningBid: offer.amount,
          buyerId: offer.buyerId,
          buyerName: offer.buyerName,
          artistId: offer.artistId,
          artistName: offer.artistName,
          status: 'pending_payment',
          paymentDeadline,
          createdAt: serverTimestamp(),
        })

        try {
          await updateDoc(doc(db, 'listings', offer.listingId), {
            status: 'pending_sale',
            pendingOrderId: newOrderRef.id,
            pendingSaleExpiresAt: paymentDeadline,
          })
        } catch (listingErr) {
          console.error('Could not lock listing after accepting offer:', listingErr)
        }

        await updateDoc(doc(db, 'offers', offer.id), { status: 'accepted' })

        const othersQ = query(
          collection(db, 'offers'),
          where('listingId', '==', offer.listingId),
          where('status', '==', 'pending')
        )
        const othersSnap = await getDocs(othersQ)
        await Promise.all(
          othersSnap.docs
            .filter(d => d.id !== offer.id)
            .map(d => updateDoc(doc(db, 'offers', d.id), { status: 'declined' }))
        )
      } else {
        await updateDoc(doc(db, 'offers', offer.id), { status: 'declined' })
      }
    } catch (err) {
      console.error('Could not respond to offer:', err)
    } finally {
      setRespondingId(null)
    }
  }

  if (offers.length === 0) return null

  return (
    <div style={{ marginBottom: 'var(--sp-6)' }}>
      <div className="section-header">
        <span className="section-title">Pending Offers</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
        {offers.map(offer => (
          <div key={offer.id} style={{ padding: 'var(--sp-4)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,248,240,0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--sp-2)' }}>
              <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{offer.pieceTitle}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--gold)' }}>${offer.amount}</div>
            </div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', marginBottom: 'var(--sp-3)' }}>from {offer.buyerName}</div>
            <div style={{ display: 'flex', gap: 'var(--sp-2)' }}>
              <button className="btn btn-primary btn-sm" style={{ flex: 1 }} onClick={() => respond(offer, true)} disabled={respondingId === offer.id}>
                Accept
              </button>
              <button className="btn btn-ghost btn-sm" style={{ flex: 1 }} onClick={() => respond(offer, false)} disabled={respondingId === offer.id}>
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Profile() {
  const { user, profile, isArtist, logout, refreshProfile } = useAuth()
  const navigate = useNavigate()
  const toast = useToast()
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [uploadingAvatar, setUploadingAvatar] = useState(false)
  const avatarFileRef = useRef()
  const [listedCount, setListedCount] = useState(null)
  const [soldCount, setSoldCount] = useState(null)
  const [editForm, setEditForm] = useState({
    bio: profile?.bio || '',
    instagram: profile?.instagram || '',
    website: profile?.website || '',
    artTypes: profile?.artTypes || [],
  })

  useEffect(() => {
    if (!user?.uid) return
    async function loadStats() {
      try {
        const listedSnap = await getCountFromServer(
          query(collection(db, 'listings'), where('artistId', '==', user.uid), where('status', '==', 'active'))
        )
        setListedCount(listedSnap.data().count)
      } catch (e) {
        console.error('Could not load listed count:', e)
        setListedCount(0)
      }
      try {
        const soldSnap = await getCountFromServer(
          query(collection(db, 'orders'), where('artistId', '==', user.uid), where('status', 'in', ['paid', 'delivered']))
        )
        setSoldCount(soldSnap.data().count)
      } catch (e) {
        console.error('Could not load sold count:', e)
        setSoldCount(0)
      }
    }
    loadStats()
  }, [user?.uid])

  // FIX: verify real Stripe onboarding status rather than trusting stripeAccountId's
  // mere presence. This is the same check as ConnectStripe.jsx, duplicated here
  // (matching this file's existing pattern of small duplicated helpers) because
  // Stripe's return_url lands the artist back on THIS page (/profile?stripe=success),
  // so the "Payouts Active" badge needs to update itself right when they land here,
  // not only if they happen to revisit /connect-stripe afterward.
  useEffect(() => {
    async function verifyStripeStatus() {
      if (!user?.uid || !profile?.stripeAccountId || profile?.stripeOnboardingComplete) return
      try {
        const res = await fetch('/.netlify/functions/stripe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'get_account_status',
            data: { accountId: profile.stripeAccountId },
          }),
        })
        const status = await res.json()
        if (res.ok && status.payoutsEnabled && status.detailsSubmitted) {
          await updateDoc(doc(db, 'users', user.uid), { stripeOnboardingComplete: true })
          await refreshProfile()
        }
      } catch (err) {
        console.error('Could not verify Stripe onboarding status:', err)
      }
    }
    verifyStripeStatus()
  }, [user?.uid, profile?.stripeAccountId, profile?.stripeOnboardingComplete])

  if (!user) {
    return (
      <div className="page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--sp-4)', minHeight: '80vh' }}>
        <div style={{ fontSize: '3rem' }}>🎨</div>
        <h2 style={{ fontFamily: 'var(--font-display)' }}>Join Indie Art Gallery</h2>
        <p style={{ color: 'var(--slate)', textAlign: 'center', maxWidth: 280 }}>
          Sign in to manage your profile, list art, and go live.
        </p>
        <button className="btn btn-primary btn-lg" onClick={() => navigate('/auth')}>
          Sign In / Join Free
        </button>
      </div>
    )
  }

  const initials = profile?.displayName?.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2) || '?'

  async function saveProfile() {
    setSaving(true)
    try {
      await updateDoc(doc(db, 'users', user.uid), editForm)
      toast.success('Profile saved.')
      setEditing(false)
    } catch (e) {
      toast.error('Could not save. Try again.')
    } finally {
      setSaving(false)
    }
  }

  async function handleAvatarPick(e) {
    const file = e.target.files[0]
    if (!file) return
    if (file.size > 10 * 1024 * 1024) { toast.error('Image must be under 10MB.'); return }

    setUploadingAvatar(true)
    try {
      const avatarUrl = await uploadToCloudinary(file)
      await updateDoc(doc(db, 'users', user.uid), { avatarUrl })
      await refreshProfile()
      toast.success('Profile photo updated.')
    } catch (err) {
      console.error(err)
      toast.error('Could not upload photo. Try again.')
    } finally {
      setUploadingAvatar(false)
      e.target.value = ''
    }
  }

  function toggleArtType(t) {
    setEditForm(f => ({
      ...f,
      artTypes: f.artTypes.includes(t) ? f.artTypes.filter(x => x !== t) : [...f.artTypes, t]
    }))
  }

  return (
    <div className="page" style={{ paddingTop: 'var(--sp-6)' }}>
      <div className="container">

        {/* AVATAR + ACTIONS ROW */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--sp-4)' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <div className="avatar avatar-lg" style={{ border: '3px solid var(--charcoal2)', fontSize: 'var(--text-xl)', overflow: 'hidden' }}>
              {profile?.avatarUrl
                ? <img src={profile.avatarUrl} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : initials}
            </div>
            <button
              type="button"
              onClick={() => avatarFileRef.current?.click()}
              disabled={uploadingAvatar}
              style={{ position: 'absolute', bottom: 0, right: 0, width: 24, height: 24, borderRadius: '50%', background: 'var(--coral)', border: '2px solid var(--charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: uploadingAvatar ? 'default' : 'pointer', opacity: uploadingAvatar ? 0.6 : 1 }}
            >
              <Camera size={11} color="#fff" />
            </button>
            <input ref={avatarFileRef} type="file" accept="image/*" onChange={handleAvatarPick} style={{ display: 'none' }} />
          </div>
          <div style={{ display: 'flex', gap: 'var(--sp-2)' }}>
            <button className="btn btn-ghost btn-sm" onClick={() => setEditing(e => !e)}>
              <Edit2 size={13} /> Edit
            </button>
            <button className="btn btn-ghost btn-sm" onClick={async () => { await logout(); navigate('/auth') }}>
              <LogOut size={13} />
            </button>
          </div>
        </div>

        {/* NAME + BADGES */}
        <div style={{ marginBottom: 'var(--sp-4)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)' }}>{profile?.displayName}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', marginTop: 'var(--sp-2)', flexWrap: 'wrap' }}>
            {profile?.role && (
              <span className="badge badge-slate" style={{ textTransform: 'capitalize' }}>{profile.role}</span>
            )}
            {isArtist && <span className="badge badge-gold">Artist</span>}
            {/* FIX: was profile?.stripeAccountId - showed "Payouts Active" the instant
                the shell account was created, before onboarding actually finished. */}
            {isArtist && profile?.stripeOnboardingComplete && (
              <span className="badge" style={{ background: 'rgba(46,204,113,0.15)', color: 'var(--green-ok)' }}>Payouts Active</span>
            )}
          </div>
          {profile?.bio && (
            <p style={{ marginTop: 'var(--sp-3)', fontSize: 'var(--text-sm)', color: 'var(--slate)', lineHeight: 1.6 }}>{profile.bio}</p>
          )}
        </div>

        {/* STATS */}
        <div style={{ display: 'flex', gap: 'var(--sp-4)', paddingBottom: 'var(--sp-4)', borderBottom: '1px solid rgba(255,248,240,0.08)', marginBottom: 'var(--sp-4)' }}>
          {[[listedCount === null ? '…' : listedCount, 'Listed'], [soldCount === null ? '…' : soldCount, 'Sold'], [profile?.followerCount || 0, 'Followers']].map(([val, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--coral)' }}>{val}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* ONBOARDING CHECKLIST - only for artists, hides itself once complete */}
        {isArtist && (
          <OnboardingChecklist
            profile={profile}
            user={user}
            navigate={navigate}
            onEditProfile={() => setEditing(true)}
          />
        )}

        {isArtist && <OffersPanel user={user} />}

        {/* EDIT FORM */}
        {editing && (
          <div style={{ marginBottom: 'var(--sp-6)', padding: 'var(--sp-5)', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--r-lg)', border: '1px solid rgba(255,248,240,0.08)' }}>
            <h4 style={{ marginBottom: 'var(--sp-4)' }}>Edit Profile</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
              <div className="input-group">
                <label className="input-label">Bio</label>
                <textarea className="input" placeholder="Tell the world about your art"
                  value={editForm.bio} onChange={e => setEditForm(f => ({ ...f, bio: e.target.value }))} />
              </div>
              <div className="input-group">
                <label className="input-label">Instagram</label>
                <input className="input" type="text" placeholder="@handle"
                  value={editForm.instagram} onChange={e => setEditForm(f => ({ ...f, instagram: e.target.value }))} />
              </div>
              <div className="input-group">
                <label className="input-label">Website</label>
                <input className="input" type="url" placeholder="https://yoursite.com"
                  value={editForm.website} onChange={e => setEditForm(f => ({ ...f, website: e.target.value }))} />
              </div>
              {isArtist && (
                <div className="input-group">
                  <label className="input-label">Art Types</label>
                  <div className="chips" style={{ marginTop: 'var(--sp-2)' }}>
                    {ART_TYPES.map(t => (
                      <button key={t} className={`chip ${editForm.artTypes.includes(t) ? 'selected' : ''}`}
                        onClick={() => toggleArtType(t)} type="button">{t}</button>
                    ))}
                  </div>
                </div>
              )}
              <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
                <button className="btn btn-ghost" onClick={() => setEditing(false)} style={{ flex: 1 }}>Cancel</button>
                <button className="btn btn-primary" onClick={saveProfile} disabled={saving} style={{ flex: 2 }}>
                  {saving ? 'Saving' : 'Save Profile'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* QUICK ACTIONS — everyone */}
        <div style={{ marginBottom: 'var(--sp-6)', display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
          {isArtist && (
            <div style={{ display: 'flex', gap: 'var(--sp-3)' }}>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => navigate('/list')}>
                <Plus size={16} /> List Art
              </button>
              <button className="btn btn-gold" style={{ flex: 1 }} onClick={() => navigate('/go-live')}>
                <Radio size={16} /> Go Live
              </button>
            </div>
          )}
          {isArtist && (
            <button className="btn btn-ghost btn-full" onClick={() => navigate('/connect-stripe')}>
              <CreditCard size={16} />
              {/* FIX: was profile?.stripeAccountId - see badge fix above for why */}
              {profile?.stripeOnboardingComplete ? 'Manage Payouts' : 'Connect Bank Account to Get Paid'}
            </button>
          )}
          <button className="btn btn-ghost btn-full" onClick={() => navigate('/orders')}>
            <Package size={16} /> My Orders
          </button>
        </div>

        {/* MY LISTINGS */}
        {isArtist && (
          <section>
            <div className="section-header">
              <span className="section-title">My Listings</span>
              <a href="/list" className="section-link" style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Plus size={12} /> Add</a>
            </div>
            {DEMO_PIECES.length > 0 ? (
              <div className="art-grid">
                {DEMO_PIECES.map(p => <ArtCard key={p.id} piece={p} />)}
              </div>
            ) : (
              <div style={{ padding: 'var(--sp-10) 0', textAlign: 'center', color: 'var(--slate)' }}>
                <Store size={32} style={{ margin: '0 auto var(--sp-4)', opacity: 0.4 }} />
                <p>No listings yet.</p>
                <button className="btn btn-primary btn-sm" style={{ marginTop: 'var(--sp-4)' }} onClick={() => navigate('/list')}>
                  List your first piece
                </button>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  )
}