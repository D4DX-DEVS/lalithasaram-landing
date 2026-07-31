import { useEffect, useState } from 'react'
import landingScn1 from '../assets/landing-scn1.webp'
import landingScn2 from '../assets/landing-scn2.webp'
import landingScn3 from '../assets/landing-scn3.webp'

const HERO_IMAGES = [
  { src: landingScn1 },
  { src: landingScn2, style: { height: '70%', top: '50%', transform: 'translateY(-50%)' } },
  { src: landingScn3 },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % HERO_IMAGES.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="bg-blob b1"></div>
      <div className="bg-blob b2"></div>
      <div className="container hero-inner">
        <div>
          <h1>
            Understand the Qur'an in your own language
            <span className="ml grad-text">ഖുർആൻ ലളിതസാരം</span>
          </h1>
          <p className="lead">
            A digital companion built to help ordinary readers grasp the messages, meanings and teachings
            of the Holy Qur'an — in simple, clear Malayalam, wherever you are.
          </p>
          <div className="hero-actions">
            <a href="#download" className="btn btn-primary">
              Download App
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#support" className="btn btn-ghost">Support Us</a>
          </div>
        </div>

        <div className="hero-visual">
          {HERO_IMAGES.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt="Quran Lalithasaram app preview"
              className={`hero-visual-img${i === index ? ' active' : ''}`}
              style={img.style}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
