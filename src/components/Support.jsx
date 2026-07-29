import { useState } from 'react'
import supportQr from '../assets/support-qr.png'

const BANK_ROWS = [
  { label: 'Account Name', value: 'D4DX INNOVATIONS LLP' },
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
          <span className="eyebrow">Support Us</span>
          <h2>Help keep Lalithasaram free for everyone</h2>
          <p>This platform runs on the generosity of readers like you. Your contribution helps us cover hosting, development and reach more people with the Qur'an's message.</p>
        </div>
        <div className="support-inner">
          <div className="support-qr">
            <div className="qr-box">
              <img src={supportQr} alt="Scan to pay via UPI" width="100%" height="100%" />
            </div>
            <strong>Scan to Contribute</strong>
            <span>UPI / GPay / PhonePe / Paytm</span>
          </div>
          <div className="support-details">
            <h2>Bank Transfer Details</h2>
            <p>Prefer a direct transfer? Use the account details below. Every contribution, big or small, helps sustain this work.</p>
            <table className="bank-table">
              <tbody>
                {BANK_ROWS.map(row => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>
                      {row.display || row.value}
                      {row.value && <CopyButton text={row.value} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="support-foot">
              <div className="upi-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>
                UPI ID: vyapar.176971524101@hdfcbank
                <CopyButton text="vyapar.176971524101@hdfcbank" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
