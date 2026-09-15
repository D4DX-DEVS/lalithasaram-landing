import appIcon from '../assets/icon-1024b.webp'

const POINTS = [
  { title: 'വ്യക്തവും ലളിതവുമായ മലയാളം', desc: 'ബുദ്ധിമുട്ടുള്ള വാക്കുകളില്ലാതെ ലളിതമായ വിശദീകരണങ്ങൾ.' },
  { title: 'ദിവസേനയുള്ള ചിന്തയ്ക്കായി രൂപകൽപ്പന ചെയ്തത്', desc: 'ദിവസവും അൽപ്പം വായിക്കുക, അതിന്റെ മാർഗനിർദേശം ജീവിതത്തിൽ പകർത്തുക.' },
  { title: 'എല്ലാവർക്കും സൗജന്യം', desc: 'നിങ്ങളെപ്പോലുള്ള വായനക്കാരുടെ ഉദാരമായ പിന്തുണയിലൂടെ സാധ്യമായത്.' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-visual">
          <img src={appIcon} alt="Quran Lalithasaram logo" className="about-logo-img" />
        </div>
        <div>
          <span className="eyebrow">എന്തുകൊണ്ട് ലളിതസാരം</span>
          <h2>ഖുർആൻ ആശയങ്ങളിലേക്കുള്ള ലളിതമായ വഴി</h2>
          <p className="ml">
            വിശുദ്ധ ഖുർആന്റെ സന്ദേശങ്ങൾ സാധാരണക്കാർക്ക് ലളിതമായി മനസ്സിലാക്കാനും ജീവിതത്തിൽ പകർത്താനും സഹായിക്കുക
            എന്ന ലക്ഷ്യത്തോടെയാണ് ഖുർആൻ ലളിതസാരം തയ്യാറാക്കിയിരിക്കുന്നത്.
          </p>
          <p className="ml">
            ഖുർആൻ കൂടുതൽ ആളുകളിലേക്ക് എത്തിക്കുക എന്നത് ഒരു വലിയ ദൗത്യമാണ്. ഈ സംരംഭത്തെ ഡിജിറ്റൽ ലോകത്ത് കൂടുതൽ
            മികവോടെ മുന്നോട്ട് കൊണ്ടുപോകുന്നതിനും പരിപാലിക്കുന്നതിനും നിങ്ങളുടെ പിന്തുണ ആവശ്യമാണ്.
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
