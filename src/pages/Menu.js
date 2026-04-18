// src/pages/Menu.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuCategories } from '../data/menu';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Menu.css';

function MenuItem({ item, index }) {
  const [ref, visible] = useScrollAnimation({ threshold: 0.05 });
  return (
    <div
      ref={ref}
      className={`menu-item ${visible ? 'menu-item--visible' : ''}`}
      style={{ transitionDelay: `${Math.min(index * 35, 280)}ms` }}
    >
      <div className="menu-item__left">
        <h4 className="menu-item__name">{item.name}</h4>
        {item.description && (
          <p className="menu-item__desc">{item.description}</p>
        )}
      </div>
      <div className="menu-item__right">
        {item.tag && <span className="menu-item__tag">{item.tag}</span>}
        <div className="menu-item__prices">
          {item.price != null && (
            <span className="menu-item__price">
              {item.priceWhole ? 'Slice · ' : ''}${item.price.toFixed(2)}
            </span>
          )}
          {item.priceWhole != null && (
            <span className="menu-item__price menu-item__price--whole">
              Whole · ${item.priceWhole.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);
  const activeCategory = menuCategories.find(c => c.id === activeTab);

  return (
    <main className="menu-page">

      {/* ── Page Header ── */}
      <header className="menu-page-header">
        <div className="container">
          <span className="eyebrow">Brooklyn Bagel Co.</span>
          <h1 className="menu-page-header__title">The Menu</h1>
          <p className="menu-page-header__sub">
            Made fresh every morning. Served all day. No compromises.
          </p>
        </div>
        <div className="flag-stripe" style={{ marginTop: '40px' }} />
      </header>

      {/* ── Tabs ── */}
      <div className="menu-tabs-bar">
        <div className="menu-tabs">
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              className={`menu-tab ${activeTab === cat.id ? 'menu-tab--active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Menu Body ── */}
      <section className="menu-body">
        <div className="container">

          <div className="menu-cat-header">
            <div>
              <h2 className="menu-cat-header__title">{activeCategory.label}</h2>
              {activeCategory.description && (
                <p className="menu-cat-header__desc">{activeCategory.description}</p>
              )}
            </div>
            <Link to="/order" className="btn btn-primary">
              Order Now
            </Link>
          </div>

          <div className="menu-items-list" key={activeTab}>
            {activeCategory.items.map((item, i) => (
              <MenuItem key={item.id} item={item} index={i} />
            ))}
          </div>

          {activeTab === 'sandwiches' && (
            <div className="menu-byo-note">
              <span className="eyebrow">Customize It</span>
              <p>
                Want to build your own? Choose your base, bread, and add-ons.
                <button className="menu-byo-link" onClick={() => setActiveTab('buildyourown')}>
                  See Build Your Own →
                </button>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="menu-cta">
        <div className="flag-stripe" />
        <div className="menu-cta__inner container">
          <div>
            <h3 className="menu-cta__title">Ready to Order?</h3>
            <p className="menu-cta__sub">Fresh. Fast. Brooklyn.</p>
          </div>
          <div className="menu-cta__actions">
            <Link to="/order" className="btn btn-primary">Order Online</Link>
            <Link to="/catering" className="btn btn-outline">Catering</Link>
          </div>
        </div>
        <div className="flag-stripe" />
      </section>

    </main>
  );
}
