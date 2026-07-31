import { useEffect, useState } from 'react'

const FEATURES = [
  { title: 'Simple Malayalam Translation', desc: 'Every verse translated into simple, natural Malayalam—clear, accurate, and easy to understand.', path: 'M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15z' },
  { title: 'Audio Recitation & Translation', desc: "Listen to beautiful Qur'an recitations while following the translation and understanding the meaning of every verse.", path: 'M9 18V5l12-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zM21 16a3 3 0 11-6 0 3 3 0 016 0z' },
  { title: 'Word-by-Word Meaning', desc: "Tap any Qur'anic word to instantly view its Malayalam meaning.", path: 'M12 3v18M5 8l7-5 7 5M5 8v11a1 1 0 001 1h12a1 1 0 001-1V8' },
  { title: 'Bookmarks', desc: 'Save your favorite verses and return to them anytime for reflection and inspiration.', path: 'M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2z' },
  { title: 'Instant Search', desc: 'Find any surah, ayah, topic or keyword across the entire Qur\'an in seconds.', path: null, circle: true },
  { title: 'Offline Reading', desc: "Read the Qur'an and its meanings anytime, even without an internet connection.", path: 'M12 2a10 10 0 000 20 10 10 0 010-20z' },
  { title: 'Night Mode', desc: 'Enjoy a comfortable reading experience with a dark theme, ideal for early mornings and late nights.', path: 'M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z' },
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
          <span className="eyebrow">Features</span>
          <h2>Everything you need to read with understanding</h2>
          <p>Designed from the ground up for readers who want more than just recitation — real understanding, every single day.</p>
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
