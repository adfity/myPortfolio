import Link from 'next/link';
import SectionReveal from '@/components/SectionReveal';

export default function ProjectsTeaser() {
  return (
    <section id="projects" className="teaser">
      <div className="wrap">
        <div className="section__eyebrow">FIG. 03 — LOG</div>
        <h2 className="section__title">My Projects</h2>

        <div className="split split--photo-right">
          <SectionReveal from="right" className="split__photo">
            <div className="split__photo-frame">
              <img src="/images/pak1.jpg" alt="Cuplikan proyek Adit Fitra Yoga" />
            </div>
          </SectionReveal>

          <SectionReveal from="left" className="split__text">
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
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}