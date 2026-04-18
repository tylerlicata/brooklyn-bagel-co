// src/components/Footer.js
import { Link } from 'react-router-dom';
import { businessInfo } from '../data/menu';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="flag-stripe" />

      {/* ── Main footer body ── */}
      <div className="footer__body">
        <div className="footer__inner container">

          {/* Brand */}
          <div className="footer__brand">
            <img src="/logo.png" alt="Brooklyn Bagel Co." className="footer__logo" />
            <p className="footer__name">The Brooklyn<br />Bagel Company</p>
            <p className="footer__tagline">{businessInfo.tagline}</p>
            <div className="footer__social">
              {Object.entries(businessInfo.social).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noreferrer"
                   className="footer__social-link">
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="footer__divider" />

          {/* Links */}
          <div className="footer__col">
            <h5 className="footer__col-title">Navigate</h5>
            <ul className="footer__nav">
              {[['Menu','/menu'],['Order Online','/order'],['Catering','/catering'],
                ['About','/about'],['Contact','/contact']].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="footer__nav-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div className="footer__col">
            <h5 className="footer__col-title">Visit Us</h5>
            <address className="footer__address">
              26 Main Street<br />
              Millville, New Jersey 08332
            </address>
            <div className="footer__hours-block">
              <span className="footer__hours-label">Hours</span>
              <span className="footer__hours-value">
                {businessInfo.hours.open} – {businessInfo.hours.close} Daily
              </span>
            </div>
            <div className="footer__contact-block">
              <a href={`tel:${businessInfo.phone}`} className="footer__contact-link">
                {businessInfo.phone}
              </a>
              <a href={`mailto:${businessInfo.email}`} className="footer__contact-link">
                {businessInfo.email}
              </a>
            </div>
          </div>

          {/* Catering */}
          <div className="footer__col footer__col--cta">
            <h5 className="footer__col-title">Catering</h5>
            <p className="footer__cta-text">
              Corporate lunches, family celebrations, game day spreads — we bring
              the full Brooklyn Bagel experience to you.
            </p>
            <a href={`mailto:${businessInfo.catering}`} className="btn btn-primary footer__cta-btn">
              Inquire Now
            </a>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <span className="footer__copy">
            © {year} The Brooklyn Bagel Company. All Rights Reserved.
          </span>
          <span className="footer__craft">Handmade in Millville, NJ</span>
        </div>
      </div>

    </footer>
  );
}
