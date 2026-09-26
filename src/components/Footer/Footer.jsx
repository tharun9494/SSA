import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Dedicated Architectural SVG Icons
const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const MapPinIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ArrowUpRightIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Main 4-Column Grid */}
        <div className="footer-content">
          
          {/* Column 1: Studio Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Studio</h4>
            <p className="footer-brand-title">S.S. ASSOCIATES</p>
            <p className="footer-address">
              15/703, Above City Union Bank<br />
              Kamalanagar, Anantapur<br />
              Andhra Pradesh 515001
            </p>
            <a 
              href="https://maps.app.goo.gl/HceqbRbxvj4Ktr2c9" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-map-link"
            >
              <MapPinIcon size={14} />
              <span>Google Maps Location</span>
              <ArrowUpRightIcon size={13} />
            </a>
          </div>

          {/* Column 2: Navigation & Services */}
          <div className="footer-section">
            <h4 className="footer-heading">Architecture & Practice</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/services" className="footer-nav-link">Our Services</Link>
              </li>
              <li>
                <Link to="/work" className="footer-nav-link">Selected Works</Link>
              </li>
              <li>
                <Link to="/office" className="footer-nav-link">About Studio</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-nav-link">Contact & Inquiries</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support & Legal */}
          <div className="footer-section">
            <h4 className="footer-heading">Support & Legal</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/support" className="footer-nav-link">Support & Help Desk</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="footer-nav-link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="footer-nav-link">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Icons */}
          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-contact-items">
              <a href="tel:+919542630670" className="footer-contact-link">
                <PhoneIcon size={14} />
                <span>+91 95426 30670</span>
              </a>
              <a href="mailto:studio@ssassociates.com" className="footer-contact-link">
                <MailIcon size={14} />
                <span>studio@ssassociates.com</span>
              </a>
            </div>

            <div className="footer-social-wrapper">
              <span className="footer-social-label">Follow Our Studio</span>
              <div className="footer-social-icons">
                <a 
                  href="https://www.instagram.com/ssa_associates/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-icon-btn" 
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-icon-btn" 
                  aria-label="Facebook"
                >
                  <FacebookIcon size={18} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-icon-btn" 
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-icon-btn" 
                  aria-label="YouTube"
                >
                  <YoutubeIcon size={18} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-copy">
            &copy; {new Date().getFullYear()} S.S. Associates — Architects . Planners . Structural Engineers . Valuers. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <Link to="/services">Services</Link>
            <span className="dot-sep">&bull;</span>
            <Link to="/support">Support</Link>
            <span className="dot-sep">&bull;</span>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="dot-sep">&bull;</span>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
