// src/pages/Home.js
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, staggerDelay } from '../hooks/useScrollAnimation';
import { menuCategories, businessInfo } from '../data/menu';
import './Home.css';

import heroBagel from '../assets/hero-bagel.jpg';
const HERO_IMAGE = heroBagel;

// Pull best-selling sandwiches for the preview strip
const bestsellers = menuCategories
  .find(c => c.id === 'sandwiches').items.slice(0, 4);

function AnimatedSection({ children, className = '', delay = 0 }) {
  const [ref, visible] = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`anim-section ${visible ? 'anim-section--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);

  // Parallax on hero
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      el.style.backgroundPositionY = `calc(50% + ${y * 0.4}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="home">

      {/* ── HERO ── */}
      <section className="hero" ref={heroRef} style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="hero__overlay" />
        <div className="hero__content container">
          <span className="eyebrow hero__eyebrow">Est. Millville, New Jersey</span>
          <h1 className="hero__title">
            Brooklyn<br />
            <em>Flavor.</em>
          </h1>
          <p className="hero__sub">
            Authentic bagels & Italian deli classics — handmade daily<br />
            using imported Italian flour and extra virgin olive oil.
          </p>
          <div className="hero__actions">
            <Link to="/order" className="btn btn-primary hero__btn">
              Order Online
            </Link>
            <Link to="/menu" className="btn btn-outline hero__btn">
              View Menu
            </Link>
          </div>
          <div className="hero__hours">
            <span className="hero__hours-dot" />
            <span>Open Daily · {businessInfo.hours.open} – {businessInfo.hours.close}</span>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="pillars section">
        <div className="container">
          <AnimatedSection className="pillars__grid">
            {[
              { num: '01', title: 'Italian Import', body: 'Every bagel starts with 00-grade flour and cold-pressed olive oil shipped directly from Campania.' },
              { num: '02', title: 'Hand-Rolled Daily', body: 'No shortcuts. Our bakers arrive at 4 AM to roll, proof, and bake every single bagel before we open.' },
              { num: '03', title: 'Boar\'s Head Always', body: "We don't compromise on cold cuts. Boar's Head meats — nothing else — on every sandwich we build." },
              { num: '04', title: 'Brooklyn Since Day One', body: 'The recipes, the spirit, and the attitude all come from Brooklyn. We just planted roots in Millville.' },
            ].map((p, i) => (
              <div key={p.num} className="pillar" style={staggerDelay(i, 100)}>
                <span className="pillar__num">{p.num}</span>
                <h4 className="pillar__title">{p.title}</h4>
                <p className="pillar__body">{p.body}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── FLAG DIVIDER ── */}
      <div className="flag-stripe" />

      {/* ── BESTSELLERS ── */}
      <section className="bestsellers section">
        <div className="container">
          <AnimatedSection className="bestsellers__head">
            <span className="eyebrow">Best-Selling Sandwiches</span>
            <h2>Made to Order.<br /><em>Made Right.</em></h2>
          </AnimatedSection>

          <div className="bestsellers__grid">
            {bestsellers.map((item, i) => (
              <AnimatedSection key={item.id} className="bscard" delay={i * 80}>
                <div className="bscard__num">{String(i + 1).padStart(2, '0')}</div>
                <div className="bscard__body">
                  <h4 className="bscard__name">{item.name}</h4>
                  <p className="bscard__desc">{item.description}</p>
                </div>
                <div className="bscard__price">${item.price.toFixed(2)}</div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="bestsellers__cta">
            <Link to="/menu" className="btn btn-green">See Full Menu</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ITALIAN HERITAGE BAND ── */}
      <section className="heritage">
        <div className="heritage__inner container">
          <AnimatedSection className="heritage__text">
            <span className="eyebrow" style={{ color: 'rgba(255,240,225,0.5)' }}>Our Roots</span>
            <h2 className="heritage__title">Italian Heritage.<br />Brooklyn Flavor.<br /><em>Handmade Daily.</em></h2>
            <p className="heritage__body">
              Three generations of craft — from the streets of Naples to the corner delis of Brooklyn,
              and now to the heart of Millville. Every recipe we use has been earned, not invented.
            </p>
            <Link to="/about" className="btn btn-outline" style={{ marginTop: '32px' }}>
              Our Story
            </Link>
          </AnimatedSection>
          <div className="heritage__badge">
            <img src="/logo.png" alt="Brooklyn Bagel Co." />
          </div>
        </div>
      </section>

      {/* ── CATERING CTA ── */}
      <section className="catering-band section">
        <div className="container">
          <AnimatedSection className="catering-band__inner">
            <div className="catering-band__text">
              <span className="eyebrow">Catering & Events</span>
              <h2>Feeding a Crowd?<br /><em>We've Got You.</em></h2>
              <p>
                Corporate lunches, family celebrations, game day spreads — we deliver
                the full Brooklyn Bagel experience wherever you need it.
              </p>
            </div>
            <div className="catering-band__actions">
              <Link to="/catering" className="btn btn-primary">Catering Info</Link>
              <a href={`mailto:${businessInfo.catering}`} className="btn btn-green">
                Email Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>


    </main>
  );
}
