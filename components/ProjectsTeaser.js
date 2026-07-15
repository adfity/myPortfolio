import Link from 'next/link';

export default function ProjectsTeaser() {
  return (
    <section id="projects" className="teaser">
      <div className="wrap">
        <div className="section__eyebrow">FIG. 03 — LOG</div>
        <h2 className="section__title">Proyek &amp; Pengalaman</h2>

        <div className="brut-box teaser__box">
          <span className="brut-box__label">Highlight</span>
          <p className="teaser__text">
            Pengalaman membangun WebGIS di Badan Informasi Geospasial, sistem
            layanan internal di Diskominfo Jawa Barat, dan proyek backend dari
            bootcamp Maxy Academy.
          </p>
          <Link href="/projects" className="brut-btn">
            → Lihat Semua Proyek
          </Link>
        </div>
      </div>
    </section>
  );
}