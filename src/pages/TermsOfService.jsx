// src/pages/TermsOfService.jsx
import TopBar from '../components/TopBar'

export default function TermsOfService() {
  return (
    <div className="page">
      <TopBar title="Terms of Service" back />
      <div className="container" style={{ paddingTop: 'var(--sp-6)', paddingBottom: 'var(--sp-10)', maxWidth: 700 }}>
        <p style={{ color: 'var(--slate)', fontSize: 'var(--text-xs)', marginBottom: 'var(--sp-6)' }}>
          Last updated: July 2026
        </p>

        <div style={{ fontSize: 'var(--text-sm)', lineHeight: 1.8, color: 'var(--cream)' }}>

          <p style={{ marginBottom: 'var(--sp-5)' }}>
            These Terms of Service ("Terms") govern your access to and use of Indie Art Gallery
            (the "Platform"), operated by Middleman Merchants LLC, a Georgia limited liability
            company ("Company," "we," "us"). By creating an account or using the Platform, you
            agree to these Terms. If you do not agree, do not use the Platform.
          </p>

          <h3 style={sectionStyle}>1. Eligibility</h3>
          <p style={pStyle}>
            You must be at least 18 years old to create an account or use the Platform. By
            registering, you represent that you are 18 or older and have the legal capacity to
            enter into these Terms.
          </p>

          <h3 style={sectionStyle}>2. Description of Service</h3>
          <p style={pStyle}>
            Indie Art Gallery is a marketplace connecting independent artists with buyers.
            Artists may list original artwork for a fixed price or auction, and may host live
            video auctions. Buyers may purchase listed work, place bids in live or listing
            auctions, or submit purchase offers. The Company facilitates these transactions but
            is not a party to the sale of any individual piece of art.
          </p>

          <h3 style={sectionStyle}>3. Accounts</h3>
          <p style={pStyle}>
            You are responsible for maintaining the confidentiality of your account credentials
            and for all activity under your account. You must provide accurate registration
            information and keep it up to date.
          </p>

          <h3 style={sectionStyle}>4. Artist Terms</h3>
          <p style={pStyle}>
            By listing a piece, you represent and warrant that it is your own original work and
            that you hold all rights necessary to sell it. Listing fraudulent, stolen, or
            infringing work is grounds for immediate account termination. To receive payouts,
            artists must connect a Stripe account and complete Stripe's identity verification
            process. The Company does not guarantee any minimum level of sales or visibility.
          </p>

          <h3 style={sectionStyle}>5. Fees</h3>
          <p style={pStyle}>
            The Platform charges a tiered fee deducted from the artist's payout, and a buyer's
            premium added to the buyer's total, based on the sale price:
          </p>
          <ul style={ulStyle}>
            <li>Under $100: 8% artist fee, 5% buyer's premium</li>
            <li>$100 – $499: 6% artist fee, 5% buyer's premium</li>
            <li>$500 and above: 4% artist fee, 3% buyer's premium</li>
          </ul>
          <p style={pStyle}>
            Fees are disclosed to both parties before a sale completes and are subject to change
            with notice.
          </p>

          <h3 style={sectionStyle}>6. Payments and Payouts</h3>
          <p style={pStyle}>
            All payments are processed by Stripe. The Company does not directly receive or store
            your full payment card details. For physical or digital goods requiring delivery,
            the Platform holds the buyer's payment until the buyer confirms delivery was
            received; only then is the artist's portion transferred to their connected Stripe
            account. Buyers who win a live or listing auction generally have a limited window
            (currently one hour) to complete payment before the item may be released back for
            sale.
          </p>

          <h3 style={sectionStyle}>7. Refunds, Disputes, and Chargebacks</h3>
          <p style={pStyle}>
            Because the Company holds buyer funds until delivery is confirmed, the Company is
            responsible for handling refunds and payment disputes (including chargebacks)
            arising from transactions on the Platform. This does not obligate the Company to
            refund any specific transaction; refund decisions are made at the Company's
            discretion based on the circumstances, evidence provided, and applicable law. Buyers
            and artists agree to cooperate in good faith to resolve delivery or quality disputes
            directly where possible before escalating to the Company.
          </p>

          <h3 style={sectionStyle}>8. Live Streaming and Conduct</h3>
          <p style={pStyle}>
            Artists may host live video auctions with real-time chat. You agree not to use live
            streams or chat to harass, threaten, defraud, or abuse other users. The Company may
            end a live stream, remove content, or suspend an account for violations of this
            section, at its discretion.
          </p>

          <h3 style={sectionStyle}>9. Prohibited Conduct</h3>
          <p style={pStyle}>
            You agree not to: list counterfeit, stolen, or infringing work; misrepresent
            yourself or a listing; manipulate bidding (including bidding on your own listings);
            circumvent Platform fees by arranging off-platform payment for a Platform-listed
            item; or use the Platform for any unlawful purpose.
          </p>

          <h3 style={sectionStyle}>10. Intellectual Property</h3>
          <p style={pStyle}>
            Artists retain all ownership rights in their artwork. By listing a piece, you grant
            the Company a non-exclusive, worldwide license to display, reproduce, and promote
            images and descriptions of that piece in connection with operating the Platform.
          </p>

          <h3 style={sectionStyle}>11. Account Termination</h3>
          <p style={pStyle}>
            The Company may suspend or terminate any account, at its discretion, for violation
            of these Terms, fraudulent activity, or conduct harmful to other users or the
            Platform.
          </p>

          <h3 style={sectionStyle}>12. Disclaimers</h3>
          <p style={pStyle}>
            The Platform is provided "as is" without warranties of any kind. The Company does
            not verify the authenticity, condition, quality, or value of any artwork beyond the
            representations made by the listing artist, and disclaims responsibility for the
            accuracy of any listing.
          </p>

          <h3 style={sectionStyle}>13. Limitation of Liability</h3>
          <p style={pStyle}>
            To the maximum extent permitted by law, the Company's total liability arising from
            your use of the Platform will not exceed the fees the Company actually received in
            connection with the transaction giving rise to the claim.
          </p>

          <h3 style={sectionStyle}>14. Indemnification</h3>
          <p style={pStyle}>
            You agree to indemnify and hold the Company harmless from claims arising from your
            listings, your conduct on the Platform, or your violation of these Terms.
          </p>

          <h3 style={sectionStyle}>15. Governing Law</h3>
          <p style={pStyle}>
            These Terms are governed by the laws of the State of Georgia, without regard to its
            conflict-of-law principles. Any dispute arising from these Terms or the Platform
            will be subject to the exclusive jurisdiction of the state and federal courts
            located in Georgia, unless otherwise required by applicable law.
          </p>

          <h3 style={sectionStyle}>16. Changes to These Terms</h3>
          <p style={pStyle}>
            The Company may update these Terms from time to time. Continued use of the Platform
            after changes take effect constitutes acceptance of the revised Terms.
          </p>

          <h3 style={sectionStyle}>17. Contact</h3>
          <p style={pStyle}>
            Questions about these Terms can be directed to{' '}
            <a href="mailto:manager@middlemanmerchants.com" style={{ color: 'var(--coral)' }}>
              manager@middlemanmerchants.com
            </a>.
          </p>

          <p style={{ ...pStyle, marginTop: 'var(--sp-8)', fontSize: 'var(--text-xs)', color: 'var(--slate)', fontStyle: 'italic' }}>
            This document is a general template reflecting how Indie Art Gallery currently
            operates and has not been reviewed by an attorney. It is provided for informational
            purposes and should be reviewed by qualified legal counsel before being relied upon
            as a binding legal agreement.
          </p>
        </div>
      </div>
    </div>
  )
}

const sectionStyle = { fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', marginTop: 'var(--sp-6)', marginBottom: 'var(--sp-2)' }
const pStyle = { marginBottom: 'var(--sp-3)', color: 'var(--slate)' }
const ulStyle = { marginBottom: 'var(--sp-3)', paddingLeft: 'var(--sp-6)', color: 'var(--slate)' }