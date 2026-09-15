import { useEffect, useState } from 'react'
import home from '../assets/screenshots/02-home.webp'
import mushaf from '../assets/screenshots/mushaf.webp'
import audio from '../assets/screenshots/04-audio.webp'
import settings from '../assets/screenshots/05-settings.webp'
import ayahNormal from '../assets/screenshots/06-ayah-normal.webp'
import ayahWordByWord from '../assets/screenshots/07-ayah-wordbyword.webp'

const SHOTS = [
  { src: home, label: 'ഹോം' },
  { src: ayahNormal, label: 'ആയത്ത് കാഴ്ച' },
  { src: ayahWordByWord, label: 'വാക്ക് തിരിച്ച്' },
  { src: mushaf, label: 'മുസ്ഹഫ്' },
  { src: audio, label: 'ഓഡിയോ പ്ലെയർ' },
  { src: settings, label: 'സെറ്റിംഗ്സ്' },
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
          <span className="eyebrow">സ്ക്രീൻഷോട്ടുകൾ</span>
          <h2>ആപ്പ് പ്രവർത്തനത്തിൽ കാണുക</h2>
          <p>യഥാർത്ഥ ഖുർആൻ ലളിതസാരം ആപ്പിന്റെ ഒരു ദ്രുത കാഴ്ച — ഹോം, വായനാ കാഴ്ചകൾ, ഓഡിയോ, സെറ്റിംഗ്സ്.</p>
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
