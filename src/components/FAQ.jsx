import { useState } from 'react'

const FAQS = [
  {
    q: 'ആപ്പ് ഉപയോഗിക്കാൻ സൗജന്യമാണോ?',
    a: 'അതെ, ഖുർആൻ ലളിതസാരം Android, iOS, വെബ് എന്നിവയിൽ പൂർണ്ണമായും സൗജന്യമാണ് — പരസ്യങ്ങളില്ല, സബ്സ്ക്രിപ്ഷനുകളില്ല.',
  },
  {
    q: 'ഏതെല്ലാം ഭാഷകൾ പിന്തുണയ്ക്കുന്നു?',
    a: 'ഖുർആൻ വാചകം അറബിയിലാണ്, വാക്ക് തിരിച്ചുള്ള മലയാളം അർത്ഥവും ഒറിജിനൽ അറബി പാരായണത്തോടൊപ്പം മലയാളം ഓഡിയോ പാരായണവും ലഭ്യമാണ്. ആപ്പിന്റെ ഇന്റർഫേസ് ഇംഗ്ലീഷിലാണ്.',
  },
  {
    q: 'ഓഫ്‌ലൈനായി ഓഡിയോ കേൾക്കാൻ കഴിയുമോ?',
    a: 'അതെ — ഒരു സൂറത്ത് ഒരിക്കൽ ഡൗൺലോഡ് ചെയ്താൽ, ഇന്റർനെറ്റ് ഇല്ലാതെ തന്നെ എപ്പോൾ വേണമെങ്കിലും അതിന്റെ ഓഡിയോ പ്ലേ ചെയ്യാം.',
  },
  {
    q: 'ആപ്പ് എവിടെ നിന്ന് ഡൗൺലോഡ് ചെയ്യാം?',
    a: (
      <>
        ലളിതസാരം ആപ്പ്{' '}
        <a href="https://play.google.com/store/apps/details?id=com.d4media.lalithasaram" target="_blank" rel="noopener noreferrer">Google Play</a>
        {' '}അല്ലെങ്കിൽ{' '}
        <a href="https://apps.apple.com/in/app/quran-lalithasaram/id1180558504" target="_blank" rel="noopener noreferrer">App Store</a>
        {' '}ൽ പൂർണ്ണ വിവരങ്ങൾക്കായി പരിശോധിക്കുക, അല്ലെങ്കിൽ നേരിട്ട്{' '}
        <a href="https://lalithasaram.net/" target="_blank" rel="noopener noreferrer">lalithasaram.net</a>
        {' '}ൽ വായിക്കുക.
      </>
    ),
  },
  {
    q: 'എന്റെ ഡാറ്റ സുരക്ഷിതമാണോ?',
    a: 'ആപ്പ് ഒരു വ്യക്തിഗത ഉപയോക്തൃ ഡാറ്റയും ശേഖരിക്കുന്നില്ല. കൂടുതൽ വിവരങ്ങൾക്ക് ഞങ്ങളുടെ പൂർണ്ണ Privacy Policy കാണുക.',
  },
  {
    q: 'എനിക്ക് എങ്ങനെ ഈ പദ്ധതിയെ പിന്തുണയ്ക്കാം?',
    a: 'ഈ പ്ലാറ്റ്ഫോം വായനക്കാരുടെ സംഭാവനകളിലൂടെയാണ് പ്രവർത്തിക്കുന്നത്. UPI വഴിയോ ബാങ്ക് ട്രാൻസ്ഫർ വഴിയോ സംഭാവന ചെയ്യാൻ മുകളിലുള്ള "പിന്തുണയ്ക്കൂ" വിഭാഗം ഉപയോഗിക്കുക — ഓരോ സംഭാവനയും ഇത് എല്ലാവർക്കും സൗജന്യമായി നിലനിർത്താൻ സഹായിക്കുന്നു.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(-1)

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">ചോദ്യങ്ങൾ</span>
          <h2>പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ</h2>
          <p>ഖുർആൻ ലളിതസാരത്തെക്കുറിച്ചുള്ള സാധാരണ ചോദ്യങ്ങൾക്കുള്ള ഉത്തരങ്ങൾ കണ്ടെത്തുക.</p>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={item.q}>
              <button className="faq-question" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{item.q}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              {open === i && <div className="faq-answer">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
