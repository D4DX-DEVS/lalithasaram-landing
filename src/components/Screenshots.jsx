import { useEffect, useState } from 'react'
import home from '../assets/screenshots/02-home.jpeg'
import mushaf from '../assets/screenshots/03-mushaf.jpeg'
import audio from '../assets/screenshots/04-audio.jpeg'
import settings from '../assets/screenshots/05-settings.jpeg'
import ayahNormal from '../assets/screenshots/06-ayah-normal.jpeg'
import ayahWordByWord from '../assets/screenshots/07-ayah-wordbyword.jpeg'

const SHOTS = [
  { src: home, label: 'Home' },
  { src: ayahNormal, label: 'Ayah View' },
  { src: ayahWordByWord, label: 'Word-by-word' },
  { src: mushaf, label: 'Mushaf' },
  { src: audio, label: 'Audio Player' },
  { src: settings, label: 'Settings' },
]

const N = SHOTS.length

export default function Screenshots() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % N)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const go = delta => setIndex(i => (i + delta + N) % N)

  return (
    <section className="screenshots" id="screenshots">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Screenshots</span>
          <h2>See the app in action</h2>
          <p>A quick look at the real Quran Lalithasaram app — home, reading views, audio and settings.</p>
        </div>
        <div className="screenshot-coverflow">
          <button className="screenshot-nav prev" aria-label="Previous" onClick={() => go(-1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <div className="screenshot-stage">
            {SHOTS.map((s, i) => {
              let offset = i - index
              if (offset > N / 2) offset -= N
              if (offset < -N / 2) offset += N
              const abs = Math.abs(offset)
              const style = {
                transform: `translateX(${offset * 70}%) scale(${Math.max(1 - abs * 0.18, 0.5)})`,
                opacity: abs === 0 ? 1 : Math.max(0.45 - (abs - 1) * 0.25, 0),
                filter: abs === 0 ? 'none' : 'blur(1px)',
                zIndex: 10 - abs,
                pointerEvents: abs === 0 ? 'auto' : 'none',
              }
              return (
                <div className="screenshot-slide-card" style={style} key={s.label}>
                  <img src={s.src} alt={`${s.label} screen`} />
                </div>
              )
            })}
          </div>
          <button className="screenshot-nav next" aria-label="Next" onClick={() => go(1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
        <span className="screenshot-caption">{SHOTS[index].label}</span>
        <div className="screenshot-dots">
          {SHOTS.map((s, i) => (
            <button
              key={s.label}
              className={`screenshot-dot${i === index ? ' active' : ''}`}
              aria-label={s.label}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
