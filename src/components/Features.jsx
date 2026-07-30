const FEATURES = [
  { title: 'Simple Malayalam Translation', desc: 'Every verse translated into simple, natural Malayalam—clear, accurate, and easy to understand.', path: 'M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15z' },
  { title: 'Beautiful Audio Recitation', desc: 'Listen to trusted reciters while following along with word-by-word meaning.', path: 'M9 18V5l12-2v13M9 18a3 3 0 11-6 0 3 3 0 016 0zM21 16a3 3 0 11-6 0 3 3 0 016 0z' },
  { title: 'Word-by-word Meaning', desc: 'Tap any Arabic word to instantly see its Malayalam meaning and root context.', path: 'M12 3v18M5 8l7-5 7 5M5 8v11a1 1 0 001 1h12a1 1 0 001-1V8' },
  { title: 'Bookmarks & Notes', desc: 'Save verses that move you and add your own personal reflections beside them.', path: 'M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2z' },
  { title: 'Instant Search', desc: 'Find any surah, ayah, topic or keyword across the entire Qur\'an in seconds.', path: null, circle: true },
  { title: 'Offline Reading', desc: 'Download once and read the Qur\'an and its meanings without an internet connection.', path: 'M12 2a10 10 0 000 20 10 10 0 010-20z' },
  { title: 'Comfortable Night Mode', desc: 'Easy on the eyes for early morning and late-night reading sessions.', path: 'M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z' },
  { title: 'Sync Across Devices', desc: 'Your bookmarks and reading progress follow you from phone to tablet to web.', path: 'M12 20l9-5-9-5-9 5 9 5z' },
  { title: 'Made with Care', desc: 'Built and maintained by volunteers, for the sake of Allah — free from ads forever.', path: 'M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z' },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Features</span>
          <h2>Everything you need to read with understanding</h2>
          <p>Designed from the ground up for readers who want more than just recitation — real understanding, every single day.</p>
        </div>
        <div className="feature-grid">
          {FEATURES.map(f => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  {f.circle
                    ? <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>
                    : <path d={f.path} />}
                </svg>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
