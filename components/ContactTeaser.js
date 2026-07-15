import Link from 'next/link';

export default function ContactTeaser() {
  return (
    <section id="contact" className="teaser">
      <div className="wrap">
        <div className="section__eyebrow">FIG. 04 — TRANSMISSION</div>
        <h2 className="section__title">Hubungi Saya</h2>

        <div className="brut-box teaser__box">
          <span className="brut-box__label">Channel</span>
          <p className="teaser__text">
            Terbuka untuk kolaborasi, magang, atau sekadar diskusi soal web dan
            data. Kirim pesan lewat email, WhatsApp, atau form kontak.
          </p>
          <Link href="/contact" className="brut-btn brut-btn--primary">
            → Hubungi Saya
          </Link>
        </div>
      </div>
    </section>
  );
}