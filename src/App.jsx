import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Features from './components/Features.jsx'
import Screenshots from './components/Screenshots.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Download from './components/Download.jsx'
import Support from './components/Support.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import PrivacyPolicy from './components/LegalPage.jsx'
import TermsConditions from './components/TermsConditions.jsx'

function Home() {
  return (
    <>
      <Hero />
      <Support />
      <About />
      <Features />
      <Screenshots />
      <HowItWorks />
      <Download />
      <FAQ />
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

export default function App() {
  return (
    <>
      <ScrollToTop />
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
