import { useEffect, useState } from 'react'

const FEATURES = [
  { title: 'ലളിതമായ മലയാളം പരിഭാഷ', desc: 'ഓരോ വാക്യവും ലളിതവും സ്വാഭാവികവുമായ മലയാളത്തിലേക്ക് പരിഭാഷപ്പെടുത്തിയിരിക്കുന്നു — വ്യക്തവും കൃത്യവും എളുപ്പത്തിൽ മനസ്സിലാക്കാവുന്നതും.', path: 'M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15z' },
  { title: 'ഓഡിയോ പാരായണവും പരിഭാഷയും', desc: 'മനോഹരമായ ഖുർആൻ പാരായണം കേൾക്കുമ്പോൾ തന്നെ പരിഭാഷ പിന്തുടർന്ന് ഓരോ വാക്യത്തിന്റെയും അർത്ഥം മനസ്സിലാക്കാം.', path: 'M9 18V5l12-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zM21 16a3 3 0 11-6 0 3 3 0 016 0z' },
  { title: 'വാക്ക് തിരിച്ചുള്ള അർത്ഥം', desc: 'ഏതൊരു ഖുർആൻ വാക്കിലും ടാപ്പ് ചെയ്ത് അതിന്റെ മലയാളം അർത്ഥം തൽക്ഷണം കാണാം.', path: 'M12 3v18M5 8l7-5 7 5M5 8v11a1 1 0 001 1h12a1 1 0 001-1V8' },
  { title: 'ബുക്ക്മാർക്കുകൾ', desc: 'നിങ്ങളുടെ പ്രിയപ്പെട്ട വാക്യങ്ങൾ സൂക്ഷിച്ചുവെച്ച് എപ്പോൾ വേണമെങ്കിലും വീണ്ടും വായിച്ച് ചിന്തിക്കാം.', path: 'M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2z' },
  { title: 'തൽക്ഷണ തിരയൽ', desc: 'ഏതൊരു സൂറത്തും ആയത്തും വിഷയവും വാക്കും സെക്കൻഡുകൾക്കുള്ളിൽ മുഴുവൻ ഖുർആനിലും കണ്ടെത്താം.', path: null, circle: true },
  { title: 'ഓഫ്‌ലൈൻ വായന', desc: 'ഇന്റർനെറ്റ് കണക്ഷൻ ഇല്ലാതെ തന്നെ എപ്പോൾ വേണമെങ്കിലും ഖുർആനും അതിന്റെ അർത്ഥങ്ങളും വായിക്കാം.', path: 'M12 2a10 10 0 000 20 10 10 0 010-20z' },
  { title: 'നൈറ്റ് മോഡ്', desc: 'അതിരാവിലെയും രാത്രി വൈകിയും അനുയോജ്യമായ ഡാർക്ക് തീമിലൂടെ സൗകര്യപ്രദമായ വായനാനുഭവം ആസ്വദിക്കാം.', path: 'M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z' },
]

const N = FEATURES.length
const MAX_VISIBLE = 4
const SLIDES = [...FEATURES, ...FEATURES.slice(0, MAX_VISIBLE)]

function getVisibleCount() {
  if (typeof window === 'undefined') return MAX_VISIBLE
  const w = window.innerWidth
  if (w < 640) return 1
  if (w < 980) return 2
  return MAX_VISIBLE
}

function FeatureCard({ f, basis }) {
  return (
    <div className="feature-slide" style={{ flexBasis: `${basis}%` }}>
      <div className="feature-card">
        <div className="feature-card-head">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              {f.circle
                ? <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>
                : <path d={f.path} />}
            </svg>
          </div>
          <h3>{f.title}</h3>
        </div>
        <p>{f.desc}</p>
      </div>
    </div>
  )
}

export default function Features() {
  const [pos, setPos] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [visible, setVisible] = useState(getVisibleCount)
  const dotIndex = pos % N
  const slideBasis = 100 / visible

  useEffect(() => {
    const onResize = () => setVisible(getVisibleCount())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true)
      setPos(p => p + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (pos < N) return
    const timeout = setTimeout(() => {
      setAnimate(false)
      setPos(p => p - N)
    }, 600)
    return () => clearTimeout(timeout)
  }, [pos])

  const goTo = i => {
    setAnimate(true)
    setPos(i)
  }

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">സവിശേഷതകൾ</span>
          <h2>മനസ്സിലാക്കി വായിക്കാൻ വേണ്ടതെല്ലാം</h2>
          <p>വെറും പാരായണത്തിനപ്പുറം യഥാർത്ഥ ധാരണ ആഗ്രഹിക്കുന്ന വായനക്കാർക്കായി അടിസ്ഥാനം മുതൽ രൂപകൽപ്പന ചെയ്തത് — എല്ലാ ദിവസവും.</p>
        </div>
        <div className="feature-carousel">
          <div
            className="feature-track"
            style={{
              transform: `translateX(-${pos * slideBasis}%)`,
              transition: animate ? 'transform .6s cubic-bezier(.65,0,.35,1)' : 'none',
            }}
          >
            {SLIDES.map((f, i) => <FeatureCard f={f} basis={slideBasis} key={i} />)}
          </div>
        </div>
        <div className="feature-dots">
          {FEATURES.map((f, i) => (
            <button
              key={f.title}
              className={`feature-dot${i === dotIndex ? ' active' : ''}`}
              aria-label={f.title}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
