import Link from 'next/link';
import SectionReveal from '@/components/SectionReveal';

export default function AboutTeaser() {
  return (
    <section id="about" className="teaser">
      <div className="wrap">
        <div className="section__eyebrow">FIG. 02 — RECORD</div>
        <h2 className="section__title">About Me</h2>

        <div className="split split--photo-left">
          <SectionReveal from="left" className="split__photo">
            <div className="split__photo-frame">
              <img src="/images/pak1.jpg" alt="Foto Adit Fitra Yoga" />
            </div>
          </SectionReveal>

          <SectionReveal from="right" className="split__text">
            <div className="brut-box teaser__box">
              <span className="brut-box__label">Bio</span>
              <p className="teaser__text">
                Lulusan Sistem Informasi dari Universitas Adhirajasa Reswara Sanjaya
                (IPK 3.76/4.00). Fokus di Web Development &amp; Data Analysis, cepat
                belajar hal baru dan terbiasa kerja dalam tim.
              </p>
              <Link href="/about" className="brut-btn">
                → Lihat Selengkapnya
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}