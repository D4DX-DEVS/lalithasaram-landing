const STEPS = [
  { num: '01', title: 'ഡൗൺലോഡ് ചെയ്ത് തുറക്കുക', desc: 'Google Play യിൽ നിന്നോ App Store ൽ നിന്നോ ആപ്പ് സൗജന്യമായി നേടുക, അല്ലെങ്കിൽ വെബ്സൈറ്റ് നേരിട്ട് ബ്രൗസറിൽ തുറക്കുക.' },
  { num: '02', title: 'സൂറത്തോ ആയത്തോ തിരഞ്ഞെടുക്കുക', desc: 'എല്ലാ 114 സൂറത്തുകളും ബ്രൗസ് ചെയ്യുക അല്ലെങ്കിൽ നിങ്ങൾക്ക് വേണ്ട വാക്യമോ വിഷയമോ വാക്കോ നേരിട്ട് തിരയുക.' },
  { num: '03', title: 'വായിക്കുക, കേൾക്കുക, ചിന്തിക്കുക', desc: 'ഓഡിയോയ്‌ക്കൊപ്പം പിന്തുടരുക, ലളിതമായ മലയാളം അർത്ഥം വായിക്കുക, നിങ്ങളെ സ്പർശിക്കുന്നത് സൂക്ഷിച്ചുവയ്ക്കുക.' },
]

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">തുടങ്ങാം</span>
          <h2>3 ഘട്ടങ്ങളിൽ അർത്ഥത്തോടെ വായന തുടങ്ങാം</h2>
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
