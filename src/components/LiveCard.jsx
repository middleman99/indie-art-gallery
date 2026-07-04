// src/components/LiveCard.jsx
import { useNavigate } from 'react-router-dom'
import { Eye } from 'lucide-react'
export default function LiveCard({ show }) {
  const navigate = useNavigate()
  const isLive = show.status === 'live'
  return (
    <div
      className="live-card"
      onClick={() => navigate(`/show/${show.id}`)}
      style={{ minWidth: 160, cursor: 'pointer' }}
    >
      {show.thumbnailUrl && (
        <img src={show.thumbnailUrl} alt={show.artistName} className="live-card-thumb" />
      )}
      <div className="live-card-top">
        {isLive ? (
          <span className="badge badge-live">
            <span className="live-dot" style={{ width: 6, height: 6 }} />
            LIVE
          </span>
        ) : (
          <span className="badge badge-slate">Ended</span>
        )}
        <span className="viewer-count">
          <Eye size={10} />
          {show.viewerCount || 0}
        </span>
      </div>
      <div className="live-card-overlay">
        {show.artistId ? (
          <div
            style={{ fontSize: 'var(--text-xs)', fontWeight: 700, marginBottom: 2, cursor: 'pointer', textDecoration: 'underline', textDecorationColor: 'transparent', display: 'inline-block' }}
            onClick={e => { e.stopPropagation(); navigate(`/artist/${show.artistId}`) }}
            onMouseEnter={e => e.currentTarget.style.textDecorationColor = 'currentColor'}
            onMouseLeave={e => e.currentTarget.style.textDecorationColor = 'transparent'}
          >
            {show.artistName}
          </div>
        ) : (
          <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, marginBottom: 2 }}>{show.artistName}</div>
        )}
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)' }}>{show.title}</div>
      </div>
    </div>
  )
}