import { useState } from 'react'

const FAQS = [
  {
    q: 'Is the app free to use?',
    a: 'Yes, Quran Lalithasaram is completely free on Android, iOS and the web — no ads, no subscriptions.',
  },
  {
    q: 'What languages are supported?',
    a: 'The Qur\'an text is in Arabic, with word-by-word Malayalam meaning and audio recitation in Malayalam alongside the original Arabic recitation. The app interface is in English.',
  },
  {
    q: 'Can I listen to audio offline?',
    a: 'Yes — download a Surah once and play its audio anytime after that, even without an internet connection.',
  },
  {
    q: 'Where can I download the app?',
    a: (
      <>
        Check the Lalithasaram app on{' '}
        <a href="https://play.google.com/store/apps/details?id=com.d4media.lalithasaram" target="_blank" rel="noopener noreferrer">Google Play</a>
        {' '}or the{' '}
        <a href="https://apps.apple.com/in/app/quran-lalithasaram/id1180558504" target="_blank" rel="noopener noreferrer">App Store</a>
        {' '}for full details, or read directly on{' '}
        <a href="https://lalithasaram.net/" target="_blank" rel="noopener noreferrer">lalithasaram.net</a>.
      </>
    ),
  },
  {
    q: 'Is my data secure?',
    a: 'The app does not collect any personal user data. See our full Privacy Policy for details.',
  },
  {
    q: 'How can I support the project?',
    a: 'This platform runs on reader contributions. Use the Support Us section above to donate via UPI or bank transfer — every contribution helps keep it free for everyone.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about Quran Lalithasaram.</p>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={item.q}>
              <button className="faq-question" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{item.q}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              {open === i && <div className="faq-answer">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
