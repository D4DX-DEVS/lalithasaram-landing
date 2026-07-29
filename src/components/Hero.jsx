import homeScreenshot from '../assets/screenshots/02-home.jpeg'

export default function Hero() {
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

        <div className="phone-wrap">
          <div className="phone">
            <div className="phone-btn action"></div>
            <div className="phone-btn vol-up"></div>
            <div className="phone-btn vol-down"></div>
            <div className="phone-btn power"></div>
            <div className="phone-btn camera-control"></div>
            <div className="phone-screen">
              <img src={homeScreenshot} alt="Quran Lalithasaram app home screen" className="phone-screen-img active" style={{ objectPosition: 'top' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
