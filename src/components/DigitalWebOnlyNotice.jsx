// src/components/DigitalWebOnlyNotice.jsx
import { Monitor, ExternalLink } from 'lucide-react'
import { WEBSITE_URL } from '../utils/platform'

// Shown in place of purchase controls for digital pieces inside the Android
// app. Keeps digital-goods checkout on the website only (see utils/platform).
export default function DigitalWebOnlyNotice({ pieceId }) {
  const webUrl = pieceId ? `${WEBSITE_URL}/piece/${pieceId}` : WEBSITE_URL
  return (
    <div
      style={{
        padding: 'var(--sp-4)',
        background: 'rgba(212,175,55,0.08)',
        borderRadius: 'var(--r-md)',
        border: '1px solid rgba(212,175,55,0.25)',
        textAlign: 'center',
      }}
    >
      <Monitor size={20} color="var(--coral)" style={{ margin: '0 auto var(--sp-2)' }} />
      <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', marginBottom: 4 }}>
        Digital pieces are purchased on the website
      </div>
      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--slate)', marginBottom: 'var(--sp-4)' }}>
        Open this piece on indieartgallery.live to buy or bid on it.
      </div>
      <a
        href={webUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-ghost btn-full"
        style={{ display: 'inline-flex' }}
      >
        <ExternalLink size={16} /> Continue on Website
      </a>
    </div>
  )
}
