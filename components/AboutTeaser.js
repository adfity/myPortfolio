import Link from 'next/link';

export default function AboutTeaser() {
  return (
    <section id="about" className="teaser">
      <div className="wrap">
        <div className="section__eyebrow">FIG. 02 — RECORD</div>
        <h2 className="section__title">Tentang Saya</h2>

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
      </div>
    </section>
  );
}