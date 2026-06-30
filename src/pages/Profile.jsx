// src/pages/Profile.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { Camera, Edit2, LogOut, Plus, Radio, Store, CreditCard, Package } from 'lucide-react'
import ArtCard from '../components/ArtCard'

const ART_TYPES = ['Painting', 'Drawing', 'Digital', 'Photography', 'Sculpture', 'Textile', 'Mixed Media', 'Print', 'Installation', 'Other']

const DEMO_PIECES = [
  { id: 'p1', title: 'Golden Hour', artistName: 'You', price: 280, listingType: 'fixed' },
  { id: 'p2', title: 'Neon Dreams', artistName: 'You', currentBid: 120, startingBid: 80, listingType: 'auction' },
]

export default function Profile() {
  const { user, profile, isArtist, logout } = useAuth()
  const navigate = useNavigate()
  const toast = useToast()
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [editForm, setEditForm] = useState({
    bio: profile?.bio || '',
    instagram: profile?.instagram || '',
    website: profile?.website || '',
    artTypes: profile?.artTypes || [],
  })

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
            <div className="avatar avatar-lg" style={{ border: '3px solid var(--charcoal2)', fontSize: 'var(--text-xl)' }}>
              {initials}
            </div>
            <button style={{ position: 'absolute', bottom: 0, right: 0, width: 24, height: 24, borderRadius: '50%', background: 'var(--coral)', border: '2px solid var(--charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Camera size={11} color="#fff" />
            </button>
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
            {isArtist && profile?.stripeAccountId && (
              <span className="badge" style={{ background: 'rgba(46,204,113,0.15)', color: 'var(--green-ok)' }}>Payouts Active</span>
            )}
          </div>
          {profile?.bio && (
            <p style={{ marginTop: 'var(--sp-3)', fontSize: 'var(--text-sm)', color: 'var(--slate)', lineHeight: 1.6 }}>{profile.bio}</p>
          )}
        </div>

        {/* STATS */}
        <div style={{ display: 'flex', gap: 'var(--sp-4)', paddingBottom: 'var(--sp-4)', borderBottom: '1px solid rgba(255,248,240,0.08)', marginBottom: 'var(--sp-4)' }}>
          {[['0', 'Listed'], ['0', 'Sold'], ['0', 'Followers']].map(([val, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--coral)' }}>{val}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
            </div>
          ))}
        </div>

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
              {profile?.stripeAccountId ? 'Manage Payouts' : 'Connect Bank Account to Get Paid'}
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