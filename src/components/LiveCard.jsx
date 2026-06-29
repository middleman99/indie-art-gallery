// src/components/LiveCard.jsx
import { useNavigate } from 'react-router-dom'
import { Eye } from 'lucide-react'

export default function LiveCard({ show }) {
  const navigate = useNavigate()

  return (
    <div
      className="live-card"
      onClick={() => navigate(`/live/${show.id}`)}
      style={{ minWidth: 160 }}
    >
      {show.thumbnailUrl && (
        <img src={show.thumbnailUrl} alt={show.artistName} className="live-card-thumb" />
      )}

      <div className="live-card-top">
        <span className="badge badge-live">
          <span className="live-dot" style={{ width: 6, height: 6 }} />
          LIVE
        </span>
        <span className="viewer-count">
          <Eye size={10} />
          {show.viewerCount || 0}
        </span>
      </div>

      <div className="live-card-overlay">
        <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, marginBottom: 2 }}>{show.artistName}</div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>{show.title}</div>
      </div>
    </div>
  )
}
