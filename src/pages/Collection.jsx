// src/pages/Collection.jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { collection, query, where, onSnapshot, doc, getDoc } from 'firebase/firestore'
import TopBar from '../components/TopBar'
import { Package, Repeat, ShieldCheck } from 'lucide-react'

function useOwnedPieceImages(orders) {
  const [images, setImages] = useState({})

  useEffect(() => {
    let cancelled = false
    async function loadImages() {
      const results = {}
      await Promise.all(
        orders.map(async (order) => {
          if (!order.pieceId) return
          try {
            const snap = await getDoc(doc(db, 'listings', order.pieceId))
            if (snap.exists()) results[order.id] = snap.data().imageUrl || null
          } catch (e) {
            // Listing may have been deleted or resold past this reference - fine, just no image
          }
        })
      )
      if (!cancelled) setImages(results)
    }
    if (orders.length > 0) loadImages()
    return () => { cancelled = true }
  }, [orders])

  return images
}

export default function Collection() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) { setLoading(false); return }
    const q = query(
      collection(db, 'orders'),
      where('buyerId', '==', user.uid),
      where('status', '==', 'delivered')
    )
    const unsub = onSnapshot(q, snap => {
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      list.sort((a, b) => {
        const aT = a.deliveryConfirmedAt?.toDate ? a.deliveryConfirmedAt.toDate() : new Date(0)
        const bT = b.deliveryConfirmedAt?.toDate ? b.deliveryConfirmedAt.toDate() : new Date(0)
        return bT - aT
      })
      setOrders(list)
      setLoading(false)
    }, err => {
      console.error('Could not load collection:', err)
      setLoading(false)
    })
    return unsub
  }, [user])

  const images = useOwnedPieceImages(orders)

  if (!user) {
    return (
      <div className="page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', gap: 'var(--sp-4)' }}>
        <Package size={32} color="var(--slate)" />
        <p style={{ color: 'var(--slate)' }}>Sign in to view your collection.</p>
        <button className="btn btn-primary" onClick={() => navigate('/auth')}>Sign In</button>
      </div>
    )
  }

  return (
    <div className="page">
      <TopBar title="My Collection" back />

      <div className="container" style={{ paddingTop: 'var(--sp-6)' }}>

        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--slate)', marginBottom: 'var(--sp-6)', lineHeight: 1.6 }}>
          Original art you own, verified through Indie Art Gallery. If you ever resell a piece here, the original artist automatically receives their resale royalty.
        </p>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 'var(--sp-10)', color: 'var(--slate)' }}>Loading...</div>
        ) : orders.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 'var(--sp-10)', color: 'var(--slate)' }}>
            <ShieldCheck size={32} style={{ margin: '0 auto var(--sp-4)', opacity: 0.4 }} />
            <p>Nothing here yet.</p>
            <p style={{ fontSize: 'var(--text-xs)', marginTop: 'var(--sp-2)' }}>Pieces you buy and confirm delivery on will show up here as your verified collection.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
            {orders.map(order => (
              <div key={order.id} style={{ display: 'flex', gap: 'var(--sp-4)', padding: 'var(--sp-4)', background: 'rgba(28,26,23,0.04)', borderRadius: 'var(--r-lg)', border: '1px solid rgba(28,26,23,0.08)' }}>
                <div style={{ width: 72, height: 72, borderRadius: 'var(--r-md)', background: 'linear-gradient(135deg, rgba(255,77,77,0.08), rgba(255,215,0,0.06))', flexShrink: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {images[order.id] ? (
                    <img src={images[order.id]} alt={order.pieceTitle} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span style={{ fontSize: '1.5rem' }}>🎨</span>
                  )}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', marginBottom: 2 }}>{order.pieceTitle}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', marginBottom: 'var(--sp-1)' }}>by {order.artistName}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', fontFamily: 'var(--font-mono)' }}>Purchased for ${order.winningBid}</div>
                  {order.relisted ? (
                    <div style={{ marginTop: 'var(--sp-2)', fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>
                      Currently listed for resale
                    </div>
                  ) : (
                    <button
                      className="btn btn-ghost btn-sm"
                      style={{ marginTop: 'var(--sp-2)' }}
                      onClick={() => navigate(`/relist/${order.id}`)}
                    >
                      <Repeat size={12} /> Relist
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}