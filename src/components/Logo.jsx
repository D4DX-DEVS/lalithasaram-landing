export default function Logo({ markSize = 40 }) {
  return (
    <div className="logo">
      <svg className="logo-mark" width={markSize} height={markSize} viewBox="0 0 100 100" fill="none">
        <defs>
          <linearGradient id="lg1" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0" stopColor="#14B8A6" />
            <stop offset="1" stopColor="#9333EA" />
          </linearGradient>
        </defs>
        <rect x="14" y="14" width="72" height="72" rx="10" transform="rotate(45 50 50)" stroke="url(#lg1)" strokeWidth="4" />
        <rect x="24" y="24" width="52" height="52" rx="8" transform="rotate(45 50 50)" stroke="url(#lg1)" strokeWidth="2" opacity=".5" />
        <path d="M50 30 l4 6 M46 30 l-4 6" stroke="url(#lg1)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="24" r="4" stroke="url(#lg1)" strokeWidth="2.5" fill="none" />
        <path d="M38 68 v-16 c0-8 5-14 12-14 s12 6 12 14 v16" stroke="url(#lg1)" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M32 68 v-10 c0-5 3-9 7-9" stroke="url(#lg1)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M68 68 v-10 c0-5 -3-9 -7-9" stroke="url(#lg1)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <line x1="30" y1="68" x2="70" y2="68" stroke="url(#lg1)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="logo-word">
        <span className="grad-text">ഖുർആൻ</span>
        <span className="grad-text ml">ലളിതസാരം</span>
      </div>
    </div>
  )
}
