'use client';

import { useState } from 'react';

const EMAIL = 'aditfy06@gmail.com';
const PHONE_DISPLAY = '+62 831-3510-3868';
const PHONE_WA = '6283135103868';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('> Isi dulu semua field.');
      return;
    }

    const subject = encodeURIComponent(`Pesan dari portfolio — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus('> Membuka aplikasi email...');
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section__eyebrow">FIG. 04 — TRANSMISSION</div>
        <h2 className="section__title">Hubungi Saya</h2>

        <div className="contact__grid">
          <div className="brut-box">
            <span className="brut-box__label">Channels</span>
            <ul className="contact__list">
              <li>
                <a href={`mailto:${EMAIL}`}>
                  <span className="contact__prompt">&gt;</span> {EMAIL}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${PHONE_WA}`} target="_blank" rel="noreferrer">
                  <span className="contact__prompt">&gt;</span> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href="#hero">
                  <span className="contact__prompt">&gt;</span> Bandung, Indonesia
                </a>
              </li>
            </ul>
          </div>

          <div className="brut-box">
            <span className="brut-box__label">Send Message</span>
            <form className="brut-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Nama</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nama kamu"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@contoh.com"
                />
              </div>
              <div>
                <label htmlFor="message">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tulis pesanmu di sini..."
                />
              </div>
              <button type="submit" className="brut-btn brut-btn--primary brut-btn--full">
                → Kirim Pesan
              </button>
              <div className="brut-form__status">{status}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
