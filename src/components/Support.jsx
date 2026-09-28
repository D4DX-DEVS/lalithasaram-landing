import { useState } from 'react'
import supportQr from '../assets/support-qr.webp'

const REASONS = [
  'ഖുർആൻ സന്ദേശങ്ങൾ കൂടുതൽ ആളുകളിലേക്ക് എത്തിക്കാം',
  'ഡിജിറ്റൽ ഉള്ളടക്കം തുടർച്ചയായി വികസിപ്പിക്കാം',
  'വെബ്സൈറ്റിന്റെയും അനുബന്ധ സംവിധാനങ്ങളുടെയും പരിപാലനം സാധ്യമാക്കാം',
  'കൂടുതൽ പഠനസൗഹൃദമായ സൗകര്യങ്ങൾ ഒരുക്കാം',
  'പുതിയ തലമുറയിലേക്ക് ഖുർആൻ സന്ദേശങ്ങൾ കൂടുതൽ ഫലപ്രദമായി എത്തിക്കാം',
]

const AMOUNTS = [
  { value: '₹200', amount: 200, desc: 'ഒരു വലിയ ദൗത്യത്തിന്റെ ഭാഗമാകാം.' },
  { value: '₹500', amount: 500, desc: 'കൂടുതൽ ആളുകളിലേക്ക് ഖുർആൻ സന്ദേശമെത്തിക്കാൻ ഒരു ചുവടുവെപ്പ്.' },
  { value: '₹1,000', amount: 1000, desc: 'ഡിജിറ്റൽ ഖുർആൻ സംരംഭത്തിന്റെ വളർച്ചക്ക് ശക്തമായ പിന്തുണ.' },
  { value: '₹5,000', amount: 5000, desc: 'ഖുർആൻ സന്ദേശങ്ങളുടെ വ്യാപനത്തിൽ പ്രധാന പങ്കാളിത്തം.' },
]

const UPI_ID = 'vyapar.176971524101@hdfcbank'
const UPI_PAYEE = 'Quran Lalithasaram'
const RAZORPAY_URL = 'https://rzp.io/rzp/support-quran-lalithasaram'

const isMobileDevice = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

function upiLink(amount) {
  const params = new URLSearchParams({
    pa: UPI_ID,
    pn: UPI_PAYEE,
    am: String(amount),
    cu: 'INR',
    tn: 'Donation to Quran Lalithasaram',
  })
  return `upi://pay?${params.toString()}`
}

const BANK_ROWS = [
  { label: 'Account Name', value: 'D4DX INNOVATIONS LLP' },
  { label: 'TID', value: '82182968' },
  { label: 'Account Number', value: '50200102639272' },
  { label: 'Bank & Branch', value: null, display: 'HDFC SmartHub Vyapar, CIVIL STATION' },
  { label: 'IFSC Code', value: 'HDFC0002811' },
]

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }
  return (
    <button className="copy-btn" onClick={handleCopy} role="status" aria-live="polite">
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

export default function Support() {
  const mobile = isMobileDevice()

  return (
    <section className="support" id="support">
      <div className="container">
        <div className="section-head">
          <h2><span className="grad-text">ഈ ദൗത്യത്തെ പിന്തുണയ്ക്കൂ</span></h2>
        </div>
        <p className="reasons-label ml">നിങ്ങളുടെ പിന്തുണയിലൂടെ</p>
        <ul className="support-reasons ml">
          {REASONS.map(reason => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
        <div className="support-amounts ml">
          <p className="amounts-lead">നിങ്ങൾക് എത്ര തുകയും സംഭാവന ചെയ്യാം</p>
          <div className="amount-grid">
            {AMOUNTS.map(a => (
              <a
                className="amount-card"
                href={mobile ? upiLink(a.amount) : RAZORPAY_URL}
                target={mobile ? undefined : '_blank'}
                rel={mobile ? undefined : 'noopener noreferrer'}
                key={a.value}
              >
                <strong>{a.value}</strong>
                <span>{a.desc}</span>
              </a>
            ))}
          </div>
          <p className="amounts-note">തുക എത്രയായാലും, നിങ്ങളുടെ ആത്മാർത്ഥമായ പിന്തുണ വിലപ്പെട്ടതാണ്.</p>
        </div>
        <div className="support-inner">
          <div className="support-qr">
            <div className="qr-box">
              <img src={supportQr} alt="Scan to pay via UPI" width="100%" height="100%" />
            </div>
            <strong>സംഭാവന ചെയ്യാൻ സ്കാൻ ചെയ്യുക</strong>
            <span>UPI / GPay / PhonePe / Paytm</span>
            <div className="razorpay-card">
              <span className="eyebrow">Razorpay പേയ്മെന്റ്</span>
              <h3>ഗേറ്റ്‌വേ വഴി സംഭാവന ചെയ്യാൻ</h3>
              <a href={RAZORPAY_URL} target="_blank" rel="noopener noreferrer" className="razorpay-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
                Support Now
              </a>
            </div>
          </div>
          <div className="support-details">
            <h2>Bank Transfer Details</h2>
            <table className="bank-table">
              <tbody>
                {BANK_ROWS.map(row => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.display || row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="upi-pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>
              UPI ID: vyapar.176971524101@hdfcbank
              <CopyButton text="vyapar.176971524101@hdfcbank" />
            </div>
            <div className="support-contact">
              <span>For queries, please contact us</span>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@d4dx.co" target="_blank" rel="noopener noreferrer"><span className="label">Email:</span> info@d4dx.co</a>
              <a href="tel:+919895804006"><span className="label">Call Now:</span> +91 98958 04006</a>
            </div>
          </div>
        </div>
        <div className="support-closing ml">
          <p>
            നിങ്ങൾ നൽകുന്ന പിന്തുണയിലൂടെ ഖുർആൻ സന്ദേശങ്ങൾ നാളെയും അനേകം ആളുകളിലേക്ക് എത്തിക്കാനാകും.
            നന്മയുടെ ഈ സംരംഭത്തിൽ നിങ്ങളും പങ്കാളിയാകൂ.
          </p>
          <blockquote>&ldquo;ഖുർആൻ സന്ദേശങ്ങൾ ഒരാളിലേക്കെങ്കിലും എത്താൻ നിങ്ങൾ ഒരു കാരണമാകൂ.&rdquo;</blockquote>
        </div>
      </div>
    </section>
  )
}
