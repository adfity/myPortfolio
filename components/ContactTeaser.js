import Link from 'next/link';
import SectionReveal from '@/components/SectionReveal';

export default function ContactTeaser() {
  return (
    <section id="contact" className="teaser">
      <div className="wrap">
        <div className="section__eyebrow">FIG. 04 — TRANSMISSION</div>
        <h2 className="section__title">Contact Me</h2>

        <div className="split split--photo-left">
          <SectionReveal from="left" className="split__photo">
            <div className="split__photo-frame">
              <img src="/images/pak1.jpg" alt="Foto kontak Adit Fitra Yoga" />
            </div>
          </SectionReveal>

          <SectionReveal from="right" className="split__text">
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
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}