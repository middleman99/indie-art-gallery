// src/pages/PrivacyPolicy.jsx
import TopBar from '../components/TopBar'

export default function PrivacyPolicy() {
  return (
    <div className="page">
      <TopBar title="Privacy Policy" back />
      <div className="container" style={{ paddingTop: 'var(--sp-6)', paddingBottom: 'var(--sp-10)', maxWidth: 700 }}>
        <p style={{ color: 'var(--slate)', fontSize: 'var(--text-xs)', marginBottom: 'var(--sp-6)' }}>
          Last updated: July 2026
        </p>

        <div style={{ fontSize: 'var(--text-sm)', lineHeight: 1.8, color: 'var(--cream)' }}>

          <p style={{ marginBottom: 'var(--sp-5)' }}>
            This Privacy Policy describes how Middleman Merchants LLC ("Company," "we," "us"),
            operator of Indie Art Gallery (the "Platform"), collects, uses, and shares
            information when you use the Platform.
          </p>

          <h3 style={sectionStyle}>1. Information We Collect</h3>
          <p style={pStyle}>We collect the following categories of information:</p>
          <ul style={ulStyle}>
            <li><strong>Account information:</strong> email address, display name, password (stored securely by our authentication provider, never in plain text), bio, profile photo, art type preferences, Instagram handle, and website link if provided.</li>
            <li><strong>Artist payout information:</strong> a Stripe connected-account identifier. We do not collect or store your bank account or debit card numbers directly — that information is provided directly to Stripe.</li>
            <li><strong>Listings and transactions:</strong> artwork titles, descriptions, images, prices, bids, offers, and order records.</li>
            <li><strong>Live streaming and chat:</strong> chat messages sent during live shows. Live video/audio is transmitted through our streaming provider to enable the live show; we do not currently record or store live video streams.</li>
            <li><strong>Usage data:</strong> standard technical data collected by our infrastructure providers (e.g. IP address, device/browser type) as part of normal web hosting and security operations.</li>
          </ul>

          <h3 style={sectionStyle}>2. How We Use Information</h3>
          <p style={pStyle}>We use collected information to:</p>
          <ul style={ulStyle}>
            <li>Operate the marketplace (listings, bidding, checkout, payouts)</li>
            <li>Communicate with you (order confirmations, auction results, account notices)</li>
            <li>Maintain platform safety (fraud prevention, enforcement of our Terms of Service)</li>
            <li>Improve and maintain the Platform</li>
          </ul>

          <h3 style={sectionStyle}>3. Third-Party Service Providers</h3>
          <p style={pStyle}>
            We rely on the following third-party providers to operate the Platform. Each
            processes certain data on our behalf, under their own respective privacy and
            security practices:
          </p>
          <ul style={ulStyle}>
            <li><strong>Firebase (Google):</strong> user authentication and our application database</li>
            <li><strong>Stripe:</strong> payment processing and artist payouts. Stripe is PCI-compliant; we never receive or store your full card number</li>
            <li><strong>Cloudinary:</strong> hosting of uploaded artwork and profile images</li>
            <li><strong>LiveKit:</strong> live video/audio streaming infrastructure for live auctions</li>
            <li><strong>Resend:</strong> delivery of transactional emails (order confirmations, auction notifications)</li>
            <li><strong>Netlify:</strong> web hosting and serverless functions</li>
          </ul>

          <h3 style={sectionStyle}>4. Cookies and Tracking</h3>
          <p style={pStyle}>
            As of this writing, the Platform does not use third-party advertising trackers or
            analytics services (such as Google Analytics or advertising pixels). Standard
            technical data is processed only as necessary by our infrastructure providers listed
            above to deliver the service.
          </p>

          <h3 style={sectionStyle}>5. Data Sharing</h3>
          <p style={pStyle}>
            We do not sell your personal information. We share information only with the
            service providers listed above as necessary to operate the Platform, with other
            users as necessary for a transaction (e.g. an artist sees a buyer's display name and
            delivery-relevant information for an order), or where required by law.
          </p>

          <h3 style={sectionStyle}>6. Data Retention</h3>
          <p style={pStyle}>
            We retain account and transaction information for as long as your account is active
            and as needed to comply with legal, tax, and accounting obligations related to
            completed transactions.
          </p>

          <h3 style={sectionStyle}>7. Security</h3>
          <p style={pStyle}>
            We use industry-standard security practices, including access-controlled databases
            and encrypted connections, to protect your information. No system is completely
            secure, and we cannot guarantee absolute security.
          </p>

          <h3 style={sectionStyle}>8. Your Rights</h3>
          <p style={pStyle}>
            You may request access to, correction of, or deletion of your personal information
            by contacting us at the email below. We will respond to verified requests consistent
            with applicable law.
          </p>

          <h3 style={sectionStyle}>9. Children's Privacy</h3>
          <p style={pStyle}>
            The Platform is intended for users 18 years of age and older. We do not knowingly
            collect information from anyone under 18. If we learn that we have collected
            information from a user under 18, we will delete it.
          </p>

          <h3 style={sectionStyle}>10. Changes to This Policy</h3>
          <p style={pStyle}>
            We may update this Privacy Policy from time to time. Continued use of the Platform
            after changes take effect constitutes acceptance of the revised policy.
          </p>

          <h3 style={sectionStyle}>11. Contact</h3>
          <p style={pStyle}>
            Questions about this Privacy Policy, or requests regarding your personal information,
            can be directed to{' '}
            <a href="mailto:manager@middlemanmerchants.com" style={{ color: 'var(--coral)' }}>
              manager@middlemanmerchants.com
            </a>.
          </p>

          <p style={{ ...pStyle, marginTop: 'var(--sp-8)', fontSize: 'var(--text-xs)', color: 'var(--slate)', fontStyle: 'italic' }}>
            This document is a general template reflecting how Indie Art Gallery currently
            operates and has not been reviewed by an attorney. It is provided for informational
            purposes and should be reviewed by qualified legal counsel, particularly if you
            operate in jurisdictions with specific data protection requirements (e.g. GDPR,
            CCPA), before being relied upon as a binding privacy commitment.
          </p>
        </div>
      </div>
    </div>
  )
}

const sectionStyle = { fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', marginTop: 'var(--sp-6)', marginBottom: 'var(--sp-2)' }
const pStyle = { marginBottom: 'var(--sp-3)', color: 'var(--slate)' }
const ulStyle = { marginBottom: 'var(--sp-3)', paddingLeft: 'var(--sp-6)', color: 'var(--slate)' }