import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Screenshots from './components/Screenshots.jsx'
import Download from './components/Download.jsx'
import Support from './components/Support.jsx'
import Footer from './components/Footer.jsx'
import PrivacyPolicy from './components/LegalPage.jsx'
import TermsConditions from './components/TermsConditions.jsx'

function Home() {
  return (
    <>
      <Hero />
      <Support />
      <About />
      <Screenshots />
      <Download />
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function ScrollbarVisibility() {
  useEffect(() => {
    let hideTimeout
    const onScroll = () => {
      document.documentElement.classList.add('is-scrolling')
      clearTimeout(hideTimeout)
      hideTimeout = setTimeout(() => {
        document.documentElement.classList.remove('is-scrolling')
      }, 800)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(hideTimeout)
    }
  }, [])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollbarVisibility />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
      <Footer />
    </>
  )
}
