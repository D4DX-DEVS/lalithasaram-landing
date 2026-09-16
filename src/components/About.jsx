import appIcon from '../assets/icon-1024b.webp'

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
        </div>
      </div>
    </section>
  )
}
