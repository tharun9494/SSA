import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logoMark from '../../assets/logo-mark.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy for Office Sub-Navigation inside Navbar (Desktop only)
  useEffect(() => {
    if (location.pathname !== '/office') return;

    const handleScroll = () => {
      if (window.innerWidth <= 991) return; // Managed locally on mobile scrollable subnav

      const sections = ['profile', 'people', 'awards', 'publications', 'events'];
      const scrollPosition = window.scrollY + 200; // Offset aligned with double-row navbar height

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { top } = element.getBoundingClientRect();
          const offsetTop = top + window.scrollY;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + element.offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth <= 991 ? 130 : 150;
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const isHomePage = location.pathname === '/';
  const isOfficePage = location.pathname === '/office';
  const navClass = (isScrolled || !isHomePage) ? 'solid' : 'transparent';
  const subnavClass = isOfficePage ? 'has-subnav' : '';

  return (
    <nav className={`navbar ${navClass} ${subnavClass}`}>
      <div className="navbar-container">
        {/* Logo + wordmark side by side */}
        <NavLink to="/" className="nav-brand" aria-label="SS Associates">
          <img src={logoMark} alt="" className="brand-logo" />
          <span className="brand-name">SS ASSOCIATES</span>
        </NavLink>

        {/* Desktop & Mobile Menu Columns */}
        <div className="nav-links-wrapper">
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <NavLink to="/work" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              work
            </NavLink>
            <NavLink to="/office" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              office
            </NavLink>

            {/* Embedded nested sub-navigation inside mobile drawer */}
            {isOfficePage && (
              <div className="mobile-drawer-sub-nav">
                {['profile', 'people', 'awards', 'publications', 'events'].map(item => (
                  <button
                    key={item}
                    className="mobile-drawer-sub-nav-link"
                    onClick={() => {
                      setIsMenuOpen(false); // Close drawer
                      setTimeout(() => scrollToSection(item), 400); // Scroll after slide-out closes
                    }}
                  >
                    — {item}
                  </button>
                ))}
              </div>
            )}

            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              contact
            </NavLink>
          </div>

          {/* Conditional Sub-navigation rendering under main links (Desktop only) */}
          {isOfficePage && (
            <div className="navbar-sub-nav">
              {['profile', 'people', 'awards', 'publications', 'events'].map(item => (
                <button
                  key={item}
                  className={`navbar-sub-nav-link ${activeSection === item ? 'active' : ''}`}
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
