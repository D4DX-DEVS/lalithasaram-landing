import appIcon from '../assets/icon-1024b.png'

const POINTS = [
  { title: 'Clear, everyday Malayalam', desc: "No difficult words — meanings explained the way you'd explain to a friend." },
  { title: 'Built for daily reflection', desc: 'Read a little every day and carry its guidance into your life.' },
  { title: 'Free access for everyone', desc: 'Supported entirely by the generosity of readers like you.' },
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
          <h2>A simpler path to the meanings of the Qur'an</h2>
          <p>
            The "Quran Lalithasaram" app and website have been developed with the aim of helping ordinary
            readers understand the messages, meanings, and teachings of the Holy Qur'an in a simple, clear,
            and accessible manner.
          </p>
          <p>
            This digital platform is designed to help you develop a deeper connection with the Holy Qur'an,
            reflect upon its meanings, and apply its divine guidance in your daily life.
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
