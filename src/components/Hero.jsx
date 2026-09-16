import { useEffect, useState } from 'react'
import landingScn1 from '../assets/landing-scn1.webp'
import landingScn2 from '../assets/landing-scn2.webp'
import landingScn3 from '../assets/landing-scn3.webp'

const HERO_IMAGES = [
  { src: landingScn1, alt: 'Surah list and home screen of the Quran Lalithasaram app' },
  { src: landingScn2, alt: 'Quran Lalithasaram app navigation menu', style: { height: '70%', top: '50%', transform: 'translateY(-50%)' } },
  { src: landingScn3, alt: 'Ayah reading view with Arabic text and Malayalam meaning' },
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
            <span className="ml grad-text">ഖുർആൻ ലളിതസാരം</span>
          </h1>
          <p className="ml lead">
            ഖുർആൻ സന്ദേശങ്ങൾ കൂടുതൽ ഹൃദയങ്ങളിലേക്ക് എത്തിക്കാനുള്ള സംരംഭം.
          </p>
          <div className="hero-actions">
            <a href="#download" className="btn btn-primary">
              Download App
            </a>
            <a href="#support" className="btn btn-ghost">Support Us</a>
          </div>
        </div>

        <div className="hero-visual">
          {HERO_IMAGES.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`hero-visual-img${i === index ? ' active' : ''}`}
              style={img.style}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
