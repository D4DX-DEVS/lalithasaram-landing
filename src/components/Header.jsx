import { useState } from 'react'
import Logo from './Logo.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/#about', label: 'About' },
    { href: '/#features', label: 'Features' },
    { href: '/#screenshots', label: 'Screenshots' },
    { href: '/#how', label: 'How it Works' },
    { href: '/#support', label: 'Support Us' },
  ]

  return (
    <header>
      <nav>
        <Logo />
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
          ))}
          <li><a href="/#download" className="nav-cta" onClick={() => setOpen(false)}>Get App</a></li>
        </ul>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(o => !o)}>
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  )
}
