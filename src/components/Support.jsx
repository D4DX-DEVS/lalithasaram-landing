import { useState } from 'react'
import supportQr from '../assets/support-qr.png'

const REASONS = [
  "Be a part of spreading the light of the Qur'an",
  "Your contribution brings the Qur'an's meaning closer to more hearts",
  "Help ordinary readers understand the Qur'an — donate today",
  "Knowledge of the Qur'an is a gift — share it",
  'Support Quran Lalithasaram — a Sadaqah Jariyah opportunity',
  "Empower minds with the message of the Qur'an",
  'Give today, benefit forever',
  'Help keep the app free for everyone, always',
]

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
  return <button className="copy-btn" onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</button>
}

export default function Support() {
  return (
    <section className="support" id="support">
      <div className="container">
        <div className="section-head">
          <h2>Support the <span className="grad-text">Noble Cause</span></h2>
        </div>
        <ul className="support-reasons">
          {REASONS.map(reason => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
        <div className="support-inner">
          <div className="support-qr">
            <div className="qr-box">
              <img src={supportQr} alt="Scan to pay via UPI" width="100%" height="100%" />
            </div>
            <strong>Scan to Contribute</strong>
            <span>UPI / GPay / PhonePe / Paytm</span>
            <div className="razorpay-card">
              <span className="eyebrow">Razorpay Payment</span>
              <h3>Quick support via gateway</h3>
              <p>Use Razorpay for fast and secure online payment.</p>
              <a href="https://rzp.io/rzp/lalithasaram-donation" target="_blank" rel="noopener noreferrer" className="razorpay-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
                Support Now
              </a>
            </div>
          </div>
          <div className="support-details">
            <h2>Bank Transfer Details</h2>
            <p>Prefer a direct transfer? Use the account details below. Every contribution, big or small, helps sustain this work.</p>
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
          </div>
        </div>
      </div>
    </section>
  )
}
