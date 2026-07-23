// src/pages/ListArt.jsx
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import TopBar from '../components/TopBar'
import { Upload, DollarSign, Gavel, Package, Monitor } from 'lucide-react'

const ART_TYPES = ['Painting', 'Drawing', 'Digital', 'Photography', 'Sculpture', 'Textile', 'Mixed Media', 'Print', 'Installation', 'Other']

const CLOUDINARY_CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
const CLOUDINARY_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

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

export default function ListArt() {
  const { user, profile } = useAuth()
  const toast = useToast()
  const navigate = useNavigate()
  const fileRef = useRef()

  const [form, setForm] = useState({
    title: '',
    description: '',
    artType: '',
    medium: '',
    dimensions: '',
    year: new Date().getFullYear().toString(),
    provenance: '',
    estimateLow: '',
    estimateHigh: '',
    listingType: 'fixed',
    price: '',
    startingBid: '',
    reservePrice: '',
    auctionDuration: '24',
    deliveryType: 'physical',
    allowOffers: false,
    isOriginal: false,
  })

  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [saving, setSaving] = useState(false)
  const [uploadProgress, setUploadProgress] = useState('')

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  function pickImage(e) {
    const file = e.target.files[0]
    if (!file) return
    if (file.size > 10 * 1024 * 1024) { toast.error('Image must be under 10MB.'); return }
    setImageFile(file)
    setImagePreview(URL.createObjectURL(file))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.isOriginal) { toast.error('Confirm this is your original work.'); return }
    if (!form.artType) { toast.error('Select an art type.'); return }
    if (form.estimateLow && form.estimateHigh && parseFloat(form.estimateLow) > parseFloat(form.estimateHigh)) {
      toast.error('Estimate low value must not be higher than the high value.')
      return
    }
    setSaving(true)

    try {
      let imageUrl = ''
      if (imageFile) {
        setUploadProgress('Uploading image...')
        imageUrl = await uploadToCloudinary(imageFile)
        setUploadProgress('')
      }

      const listingData = {
        ...form,
        titleLower: form.title.trim().toLowerCase(),
        provenance: form.provenance.trim(),
        estimateLow: form.estimateLow ? parseFloat(form.estimateLow) : null,
        estimateHigh: form.estimateHigh ? parseFloat(form.estimateHigh) : null,
        price: form.listingType === 'fixed' ? parseFloat(form.price) : null,
        startingBid: form.listingType === 'auction' ? parseFloat(form.startingBid) : null,
        reservePrice: form.listingType === 'auction' && form.reservePrice ? parseFloat(form.reservePrice) : null,
        currentBid: null,
        auctionEndsAt: form.listingType === 'auction'
          ? new Date(Date.now() + parseInt(form.auctionDuration, 10) * 60 * 60 * 1000)
          : null,
        currentBidderId: null,
        currentBidderName: null,
        auctionClosed: false,
        imageUrl,
        artistId: user.uid,
        artistName: profile?.displayName || 'Unknown Artist',
        status: 'active',
        bidCount: 0,
        viewCount: 0,
        wishlistCount: 0,
        createdAt: serverTimestamp(),
        soldAt: null,
        buyerId: null,
      }

      const docRef = await addDoc(collection(db, 'listings'), listingData)
      toast.success('Listing published!')
      navigate(`/piece/${docRef.id}`)
    } catch (err) {
      toast.error('Could not publish. Try again.')
      console.error(err)
    } finally {
      setSaving(false)
      setUploadProgress('')
    }
  }

  return (
    <div className="page">
      <TopBar title="List a Piece" back />

      <div className="container" style={{ paddingTop: 'var(--sp-6)', maxWidth: 560 }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>

          {/* Image Upload */}
          <div>
            <div className="input-label" style={{ marginBottom: 'var(--sp-3)' }}>Artwork Photo *</div>
            {imagePreview ? (
              <div style={{ position: 'relative' }}>
                <img src={imagePreview} alt="Preview" style={{ width: '100%', maxHeight: 320, objectFit: 'contain', borderRadius: 'var(--r-md)', background: 'rgba(255,255,255,0.04)' }} />
                <button type="button" onClick={() => { setImageFile(null); setImagePreview(null) }}
                  style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,0.7)', border: 'none', color: '#fff', borderRadius: 'var(--r-full)', padding: '4px 10px', cursor: 'pointer', fontSize: 'var(--text-xs)' }}>
                  Change
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileRef.current?.click()}
                style={{ border: '2px dashed rgba(255,248,240,0.15)', borderRadius: 'var(--r-md)', padding: 'var(--sp-10)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--sp-3)', cursor: 'pointer', transition: 'border-color var(--t-fast)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--coral)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,248,240,0.15)'}
              >
                <Upload size={28} color="var(--slate)" />
                <span style={{ color: 'var(--slate)', fontSize: 'var(--text-sm)' }}>Tap to upload photo</span>
                <span style={{ color: 'var(--slate)', fontSize: 'var(--text-xs)' }}>JPG, PNG, WEBP — Max 10MB</span>
              </div>
            )}
            <input ref={fileRef} type="file" accept="image/*" onChange={pickImage} style={{ display: 'none' }} />
          </div>

          {/* Title */}
          <div className="input-group">
            <label className="input-label">Title *</label>
            <input className="input" required placeholder="What's this piece called?" value={form.title} onChange={e => set('title', e.target.value)} />
          </div>

          {/* Description */}
          <div className="input-group">
            <label className="input-label">Description</label>
            <textarea className="input" placeholder="Tell buyers about this piece..." value={form.description} onChange={e => set('description', e.target.value)} />
          </div>

          {/* Art type */}
          <div className="input-group">
            <label className="input-label">Art Type *</label>
            <div className="chips">
              {ART_TYPES.map(t => (
                <button key={t} type="button" className={`chip ${form.artType === t ? 'selected' : ''}`} onClick={() => set('artType', t)}>{t}</button>
              ))}
            </div>
          </div>

          {/* Medium + Year */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-3)' }}>
            <div className="input-group">
              <label className="input-label">Medium</label>
              <input className="input" placeholder="Oil on canvas..." value={form.medium} onChange={e => set('medium', e.target.value)} />
            </div>
            <div className="input-group">
              <label className="input-label">Year</label>
              <input className="input" type="number" min="1900" max="2099" value={form.year} onChange={e => set('year', e.target.value)} />
            </div>
          </div>

          {/* Dimensions */}
          <div className="input-group">
            <label className="input-label">Dimensions (optional)</label>
            <input className="input" placeholder='e.g. 24" x 36"' value={form.dimensions} onChange={e => set('dimensions', e.target.value)} />
          </div>

          {/* Provenance / condition notes - trust signal, shown on PieceDetail */}
          <div className="input-group">
            <label className="input-label">Provenance & Condition (optional)</label>
            <textarea
              className="input"
              placeholder="e.g. Created in the artist's studio in 2024. Excellent condition, no visible wear. Comes directly from the artist."
              value={form.provenance}
              onChange={e => set('provenance', e.target.value)}
            />
          </div>

          {/* Pre-sale estimate range - catalog-style, purely informational */}
          <div className="input-group">
            <label className="input-label">Estimated Value Range (optional)</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-3)' }}>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>$</span>
                <input className="input" type="number" min="0" step="0.01" placeholder="Low" value={form.estimateLow} onChange={e => set('estimateLow', e.target.value)} style={{ paddingLeft: 28 }} />
              </div>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>$</span>
                <input className="input" type="number" min="0" step="0.01" placeholder="High" value={form.estimateHigh} onChange={e => set('estimateHigh', e.target.value)} style={{ paddingLeft: 28 }} />
              </div>
            </div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', marginTop: 'var(--sp-2)' }}>
              Shown to buyers as a general value range, like an auction catalog estimate. Doesn't affect your actual price or bidding.
            </div>
          </div>

          <div className="divider" />

          {/* Delivery type */}
          <div>
            <div className="input-label" style={{ marginBottom: 'var(--sp-3)' }}>Delivery Type *</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-3)' }}>
              {[
                { value: 'physical', label: 'Physical', desc: 'Buyer pays shipping', icon: Package },
                { value: 'digital', label: 'Digital', desc: 'File unlocks on payment', icon: Monitor },
              ].map(({ value, label, desc, icon: Icon }) => (
                <div key={value} onClick={() => set('deliveryType', value)} style={{ padding: 'var(--sp-4)', border: `2px solid ${form.deliveryType === value ? 'var(--coral)' : 'rgba(255,248,240,0.1)'}`, borderRadius: 'var(--r-md)', cursor: 'pointer', background: form.deliveryType === value ? 'var(--coral-soft)' : 'transparent', transition: 'all var(--t-fast)', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <Icon size={18} color={form.deliveryType === value ? 'var(--coral)' : 'var(--slate)'} />
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{label}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* Listing type */}
          <div>
            <div className="input-label" style={{ marginBottom: 'var(--sp-3)' }}>Listing Type *</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-3)' }}>
              {[
                { value: 'fixed', label: 'Fixed Price', desc: 'Set your price', icon: DollarSign },
                { value: 'auction', label: 'Auction', desc: 'Let buyers bid', icon: Gavel },
              ].map(({ value, label, desc, icon: Icon }) => (
                <div key={value} onClick={() => set('listingType', value)} style={{ padding: 'var(--sp-4)', border: `2px solid ${form.listingType === value ? 'var(--coral)' : 'rgba(255,248,240,0.1)'}`, borderRadius: 'var(--r-md)', cursor: 'pointer', background: form.listingType === value ? 'var(--coral-soft)' : 'transparent', transition: 'all var(--t-fast)', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <Icon size={18} color={form.listingType === value ? 'var(--coral)' : 'var(--slate)'} />
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{label}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Price fields */}
          {form.listingType === 'fixed' && (
            <>
              <div className="input-group">
                <label className="input-label">Price (USD) *</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>$</span>
                  <input className="input" type="number" min="1" step="0.01" required placeholder="0.00" value={form.price} onChange={e => set('price', e.target.value)} style={{ paddingLeft: 28 }} />
                </div>
              </div>
              <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', cursor: 'pointer', fontSize: 'var(--text-sm)' }}>
                <input type="checkbox" checked={form.allowOffers} onChange={e => set('allowOffers', e.target.checked)}
                  style={{ width: 18, height: 18, accentColor: 'var(--coral)', cursor: 'pointer' }} />
                Allow buyers to make offers
              </label>
            </>
          )}

          {form.listingType === 'auction' && (
            <>
              <div className="input-group">
                <label className="input-label">Starting Bid (USD) *</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>$</span>
                  <input className="input" type="number" min="1" step="0.01" required placeholder="0.00" value={form.startingBid} onChange={e => set('startingBid', e.target.value)} style={{ paddingLeft: 28 }} />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Reserve Price (optional)</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>$</span>
                  <input className="input" type="number" min="0" step="0.01" placeholder="No reserve" value={form.reservePrice} onChange={e => set('reservePrice', e.target.value)} style={{ paddingLeft: 28 }} />
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', marginTop: 'var(--sp-2)' }}>
                  Hidden from bidders. If the highest bid doesn't reach this amount when the auction closes, the piece won't sell.
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Auction Duration</label>
                <select className="input" value={form.auctionDuration} onChange={e => set('auctionDuration', e.target.value)}>
                  <option value="12">12 hours</option>
                  <option value="24">24 hours</option>
                  <option value="48">48 hours</option>
                  <option value="72">3 days</option>
                  <option value="168">7 days</option>
                </select>
              </div>
            </>
          )}

          <div className="divider" />

          {/* Fee transparency */}
          <div style={{ padding: 'var(--sp-4)', background: 'var(--gold-soft)', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,215,0,0.2)' }}>
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 'var(--sp-2)' }}>Platform Fee</div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--cream)', lineHeight: 1.6 }}>
              {form.price && parseFloat(form.price) >= 500 ? '4% on sales $500+' :
               form.price && parseFloat(form.price) >= 100 ? '6% on sales $100-$499' :
               '8% on sales under $100'}
              {' '} deducted from your payout after delivery is confirmed.
            </div>
          </div>

          {/* Original work confirmation */}
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--sp-3)', cursor: 'pointer', fontSize: 'var(--text-sm)', lineHeight: 1.5 }}>
            <input type="checkbox" required checked={form.isOriginal} onChange={e => set('isOriginal', e.target.checked)}
              style={{ width: 18, height: 18, accentColor: 'var(--coral)', cursor: 'pointer', flexShrink: 0, marginTop: 2 }} />
            I confirm this is my original work and I own all rights to sell it. Fraud results in permanent ban.
          </label>

          <button className="btn btn-primary btn-lg btn-full" type="submit" disabled={saving}>
            {saving ? (uploadProgress || 'Publishing...') : 'Publish Listing'}
          </button>
        </form>
      </div>
    </div>
  )
}