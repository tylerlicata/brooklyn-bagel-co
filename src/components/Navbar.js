// src/components/Navbar.js
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Menu',     path: '/menu'     },
  { label: 'Order',    path: '/order'    },
  { label: 'Catering', path: '/catering' },
  { label: 'About',    path: '/about'    },
  { label: 'Contact',  path: '/contact'  },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // check on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navClass = [
    'navbar',
    isHome ? 'navbar--home' : '',
    scrolled ? 'navbar--scrolled' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <nav className={navClass}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo" aria-label="Brooklyn Bagel Co.">
            <img src="/logo.png" alt="Brooklyn Bagel Co." />
          </Link>

          <ul className="navbar__links">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/order" className="navbar__cta btn btn-primary">
            Order Now
          </Link>

          <button
            className={`navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        <div className="navbar__stripe flag-stripe" />
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${menuOpen ? 'mobile-drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-drawer__flag flag-stripe" />
        <ul className="mobile-drawer__links">
          {navLinks.map((link, i) => (
            <li key={link.path} style={{ animationDelay: `${i * 55}ms` }}>
              <Link to={link.path} className="mobile-drawer__link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/order" className="btn btn-primary mobile-drawer__cta">
          Order Now
        </Link>
      </div>

      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </>
  );
}
