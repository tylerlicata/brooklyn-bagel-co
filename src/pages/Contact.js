// src/pages/Contact.js
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { businessInfo } from '../data/menu';
import './SimplePage.css';

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', phone: '', message: '', type: 'general' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      await addDoc(collection(db, 'contact_submissions'), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '', type: 'general' });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  return (
    <main className="simple-page">
      <header className="page-header">
        <div className="container">
          <span className="eyebrow">Get In Touch</span>
          <h1 className="page-header__title">Contact Us</h1>
          <p className="page-header__sub">
            Questions, feedback, or just want to say hello — we're here.
          </p>
        </div>
        <div className="flag-stripe page-header__stripe" />
      </header>

      <section className="section container">
        <div className="contact-grid">

          {/* Info column */}
          <div className="contact-info">
            <div className="contact-info__block">
              <span className="eyebrow">Location</span>
              <address>{businessInfo.address}</address>
            </div>
            <div className="contact-info__block">
              <span className="eyebrow">Hours</span>
              <p>{businessInfo.hours.label} · {businessInfo.hours.open} – {businessInfo.hours.close}</p>
            </div>
            <div className="contact-info__block">
              <span className="eyebrow">Phone</span>
              <a href={`tel:${businessInfo.phone}`}>{businessInfo.phone}</a>
            </div>
            <div className="contact-info__block">
              <span className="eyebrow">Email</span>
              <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
            </div>
            <div className="contact-info__block">
              <span className="eyebrow">Catering</span>
              <a href={`mailto:${businessInfo.catering}`}>{businessInfo.catering}</a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {status === 'success' ? (
              <div className="contact-success">
                <span className="contact-success__icon">✓</span>
                <h3>Message Received!</h3>
                <p>We'll get back to you within one business day.</p>
                <button className="btn btn-green" onClick={() => setStatus('idle')}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Your name" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="your@email.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone (optional)</label>
                    <input id="phone" name="phone" type="tel"
                      value={form.phone} onChange={handleChange}
                      placeholder="(000) 000-0000" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="type">Topic</label>
                    <select id="type" name="type" value={form.type} onChange={handleChange}>
                      <option value="general">General Inquiry</option>
                      <option value="catering">Catering</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="How can we help?" />
                </div>
                {status === 'error' && (
                  <p className="form-error">Something went wrong. Please try again or call us directly.</p>
                )}
                <button type="submit" className="btn btn-primary form-submit"
                  disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}
