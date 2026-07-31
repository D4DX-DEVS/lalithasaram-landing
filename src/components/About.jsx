import appIcon from '../assets/icon-1024b.webp'

const POINTS = [
  { title: 'Clear, Everyday Malayalam', desc: 'Simple explanations without difficult words.' },
  { title: 'Built for Daily Reflection', desc: 'Read a little every day and live by its guidance.' },
  { title: 'Free for Everyone', desc: 'Made possible through the generous support of readers like you.' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-visual">
          <img src={appIcon} alt="Quran Lalithasaram logo" className="about-logo-img" />
        </div>
        <div>
          <span className="eyebrow">Why Lalithasaram</span>
          <h2>A Simpler Path to the Meanings of the Qur'an</h2>
          <p>
            The Quran Lalithasaram app and website have been developed to help ordinary readers understand
            the messages, meanings, and teachings of the Holy Qur'an in a simple, clear, and accessible way.
          </p>
          <p>
            This digital platform is designed to deepen your connection with the Qur'an, encourage reflection
            on its meanings, and help you apply its divine guidance in your daily life.
          </p>
          <div className="about-points">
            {POINTS.map(p => (
              <div className="about-point" key={p.title}>
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <div><strong>{p.title}</strong><span>{p.desc}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
