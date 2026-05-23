import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Studio</h4>
          <p>
            S.S.Associates<br />
            Lakshmi Ratna Towers<br />
            D.No:15/703, opp. Jonna Iron Mart<br />
            Kamalanagar, Anantapur<br />
            Andhra Pradesh 515001
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            <a href="tel:+919542630670">+91 95426 30670</a>
            <a href="mailto:studio@ssassociates.com">studio@ssassociates.com</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Social</h4>
          <p>
            <a href="https://www.instagram.com/ssa_associates/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} S.S.Associates - Architects . planners. Structural Engineers . Valuers. All rights reserved.</span>
        <span>Site by Antigravity</span>
      </div>
    </footer>
  );
};

export default Footer;
