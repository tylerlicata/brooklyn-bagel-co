// src/pages/About.js
import './SimplePage.css';

export default function About() {
  return (
    <main className="simple-page">
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">Our Story</span>
          <h1 className="page-header__title">Italian Heritage.<br />Brooklyn Soul.</h1>
        </div>
        <div className="flag-stripe page-header__stripe" />
      </header>

      <section className="section container">
        <div className="about-grid">
          <div className="about-text">
            <h2>From Naples to Brooklyn<br />to Millville.</h2>
            <p>
              What started as a family tradition in the kitchens of Campania became a Brooklyn institution —
              and now it's ours to share with Millville, New Jersey. Every recipe we use carries three
              generations of craft: the patience of hand-rolling, the discipline of imported ingredients,
              and the heart of a neighborhood deli that actually cares who walks through the door.
            </p>
            <p>
              We use 00-grade flour shipped from Italy, cold-pressed extra virgin olive oil, and Boar's Head
              meats — because quality isn't a marketing line for us. It's the only way we know how to cook.
            </p>
            <p>
              Open every day at 6 AM. No shortcuts. No excuses. Just Brooklyn.
            </p>
          </div>
          <div className="about-badge">
            <img src="/logo.png" alt="Brooklyn Bagel Co." />
            <div className="about-badge__caption">
              <span>Est. Millville, NJ</span>
              <span>26 Main Street</span>
            </div>
          </div>
        </div>

        <div className="about-values">
          {[
            ['Ingredient First', 'No shortcuts on sourcing. If it isn\'t right, it isn\'t on the menu.'],
            ['Made Daily',       'Everything is baked, rolled, or prepared fresh the morning you order it.'],
            ['Community',        'We\'re a neighborhood deli. We remember your order and we mean it.'],
          ].map(([title, body]) => (
            <div key={title} className="about-value">
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
