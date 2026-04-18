// src/pages/Order.js
import { businessInfo } from '../data/menu';
import './SimplePage.css';

export default function Order() {
  return (
    <main className="simple-page">
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">Skip the Line</span>
          <h1 className="page-header__title">Order Online</h1>
          <p className="page-header__sub">
            Place your order ahead — we'll have it ready when you arrive.
          </p>
        </div>
        <div className="flag-stripe page-header__stripe" />
      </header>

      <section className="section container">
        <div className="order-options">

          <div className="order-card order-card--primary">
            <span className="eyebrow">Pickup</span>
            <h2>Order for Pickup</h2>
            <p>
              Order online and pick up at 26 Main Street, Millville.
              We'll have everything ready and waiting — no waiting in line.
            </p>
            <div className="order-card__actions">
              {/* Replace href with your actual ordering platform URL */}
              <a href="#order-system" className="btn btn-primary">
                Start Your Order
              </a>
            </div>
            <div className="order-card__note">
              Powered by your ordering platform — configure in settings.
            </div>
          </div>

          <div className="order-card">
            <span className="eyebrow">Catering & Large Orders</span>
            <h2>Feed a Crowd</h2>
            <p>
              For orders of 10+ people or catering events, reach out directly
              and we'll build a custom spread for you.
            </p>
            <div className="order-card__actions">
              <a href={`mailto:${businessInfo.catering}`} className="btn btn-green">
                Email Catering
              </a>
              <a href={`tel:${businessInfo.phone}`} className="btn btn-outline" style={{ color: 'var(--ink)', borderColor: 'var(--divider)' }}>
                Call Us
              </a>
            </div>
          </div>

        </div>

        <div className="order-info">
          <div className="order-info__item">
            <span className="order-info__label">Location</span>
            <span className="order-info__value">{businessInfo.address}</span>
          </div>
          <div className="order-info__item">
            <span className="order-info__label">Hours</span>
            <span className="order-info__value">
              {businessInfo.hours.label} · {businessInfo.hours.open} – {businessInfo.hours.close}
            </span>
          </div>
          <div className="order-info__item">
            <span className="order-info__label">Phone</span>
            <a href={`tel:${businessInfo.phone}`} className="order-info__value order-info__link">
              {businessInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
