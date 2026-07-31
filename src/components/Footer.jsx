import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import d4dxLogo from '../assets/d4dx_logo.webp'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo markSize={36} />
            <p>Helping ordinary readers understand the messages, meanings and teachings of the Holy Qur'an — simply, clearly, and free for everyone.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#features">Features</a></li>
              <li><a href="/#screenshots">Screenshots</a></li>
              <li><a href="/#how">How it Works</a></li>
              <li><a href="/#download">Download</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="/#support">Donate</a></li>
              <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@d4dx.co" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
              <li><a href="/#faq">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © 2026 Quran Lalithasaram. All rights reserved.<br />
            Powered by <a href="https://d4dx.co/" target="_blank" rel="noopener noreferrer" className="powered-by-link">D4DX <img src={d4dxLogo} alt="D4DX" className="powered-by-logo" /></a>
          </span>
          <div className="flinks">
            <Link to="/privacy-policy">Privacy</Link><Link to="/terms-conditions">Terms</Link><a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@d4dx.co" target="_blank" rel="noopener noreferrer">info@d4dx.co</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
