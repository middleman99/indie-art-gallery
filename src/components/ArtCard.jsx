// src/components/ArtCard.jsx
import { useNavigate } from 'react-router-dom'
import { Heart } from 'lucide-react'
const ART_EMOJIS = ['🎨', '🖼️', '🎭', '✏️', '🖌️', '🎪', '🌈', '🎬']
export default function ArtCard({ piece }) {
  const navigate = useNavigate()
  const emoji = ART_EMOJIS[piece.id?.charCodeAt(0) % ART_EMOJIS.length] || '🎨'
  return (
    <div
      className="art-card"
      onClick={() => navigate(`/piece/${piece.id}`)}
      style={{ cursor: 'pointer' }}
    >
      {piece.imageUrl ? (
        <img src={piece.imageUrl} alt={piece.title} className="art-card-img" />
      ) : (
        <div className="art-card-img-placeholder">{emoji}</div>
      )}
      <div className="art-card-body">
        <div className="art-card-title truncate">{piece.title}</div>
        {piece.artistId ? (
          <div
            className="art-card-artist truncate"
            onClick={e => { e.stopPropagation(); navigate(`/artist/${piece.artistId}`) }}
            style={{ cursor: 'pointer', textDecoration: 'underline', textDecorationColor: 'transparent' }}
            onMouseEnter={e => e.currentTarget.style.textDecorationColor = 'currentColor'}
            onMouseLeave={e => e.currentTarget.style.textDecorationColor = 'transparent'}
          >
            by {piece.artistName}
          </div>
        ) : (
          <div className="art-card-artist truncate">by {piece.artistName}</div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'var(--sp-2)' }}>
          <div className={`art-card-price ${piece.listingType === 'auction' ? 'auction' : ''}`}>
            {piece.listingType === 'auction'
              ? `Bid: $${piece.currentBid || piece.startingBid}`
              : `$${piece.price}`}
          </div>
          <button
            onClick={e => e.stopPropagation()}
            style={{ background: 'none', border: 'none', color: 'var(--slate)', cursor: 'pointer', padding: 2 }}
          >
            <Heart size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}