import logoImg from '../assets/Untitled.webp'

export default function Logo({ markSize = 40 }) {
  return (
    <img src={logoImg} alt="Quran Lalithasaram" className="logo" style={{ height: markSize, width: 'auto' }} />
  )
}
