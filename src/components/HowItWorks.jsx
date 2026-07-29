const STEPS = [
  { num: '01', title: 'Download & Open', desc: 'Get the app free from Google Play or the App Store, or open the website directly in your browser.' },
  { num: '02', title: 'Pick a Surah or Ayah', desc: 'Browse all 114 surahs or search directly for a verse, topic or keyword you want to explore.' },
  { num: '03', title: 'Read, Listen & Reflect', desc: 'Follow along with audio, read the simple Malayalam meaning, and save what speaks to you.' },
]

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Getting Started</span>
          <h2>Start reading with meaning in 3 steps</h2>
        </div>
        <div className="how-steps">
          {STEPS.map(s => (
            <div className="step" key={s.num}>
              <span className="num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
