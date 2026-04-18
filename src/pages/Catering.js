// src/pages/Catering.js
import { businessInfo } from '../data/menu';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './SimplePage.css';

const packages = [
  { name: 'The Brooklyn Spread', serves: '10–15', price: 'From $120', desc: 'Assorted bagels, cream cheeses, cold cuts, and a full coffee setup. Perfect for morning meetings.' },
  { name: 'Deli Feast',          serves: '20–30', price: 'From $220', desc: 'Signature sandwiches, pizza selection, salads, and Italian pastries. The full experience.' },
  { name: 'Custom Build',        serves: 'Any',    price: 'Custom',   desc: 'Work directly with our team to build the perfect spread for your event, budget, and headcount.' },
];

export default function Catering() {
  const [ref, visible] = useScrollAnimation();
  return (
    <main className="simple-page">
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">Events & Corporate</span>
          <h1 className="page-header__title">Catering</h1>
          <p className="page-header__sub">
            Brooklyn Bagel Co. brings the full deli experience to your office, venue, or backyard.
          </p>
        </div>
        <div className="flag-stripe page-header__stripe" />
      </header>

      <section className="section container">
        <div ref={ref} className={`catering-packages ${visible ? 'visible' : ''}`}>
          {packages.map((pkg, i) => (
            <div key={pkg.name} className="catering-pkg" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="catering-pkg__top">
                <h3>{pkg.name}</h3>
                <span className="catering-pkg__price">{pkg.price}</span>
              </div>
              <p className="catering-pkg__serves">Serves {pkg.serves}</p>
              <p className="catering-pkg__desc">{pkg.desc}</p>
            </div>
          ))}
        </div>

        <div className="catering-contact">
          <h2>Ready to Plan?</h2>
          <p>Reach out and we'll get back to you within one business day with a custom proposal.</p>
          <div className="catering-contact__actions">
            <a href={`mailto:${businessInfo.catering}`} className="btn btn-primary">
              Email Catering Team
            </a>
            <a href={`tel:${businessInfo.phone}`} className="btn btn-green">
              {businessInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
