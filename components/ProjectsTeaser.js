import Link from 'next/link';
import SectionReveal from '@/components/SectionReveal';

export default function ProjectsTeaser() {
  return (
    <section id="projects" className="teaser">
      <div className="wrap">
        <SectionReveal from="left" className="split__text">
          <div className="teaser__head teaser__head--tight">
            <div className="section__eyebrow">FIG. 03 — LOG</div>
            <h2 className="section__title">My Projects</h2>
          </div>
        </SectionReveal>

        <div className="split split--photo-right">
          <SectionReveal from="right" className="split__photo">
            <div className="split__photo-frame">
              <img src="/images/profile/proje.png" alt="Projects Showcase" />
            </div>
          </SectionReveal>

          <SectionReveal from="left" className="split__text">
            <div className="brut-box teaser__box teaser__box--wide teaser__box--h-match">
              <span className="brut-box__label">Highlight</span>
              <p className="teaser__text">
                Selected works I’ve created over the years, as well as what I’m currently working on.
              </p>
              <Link href="/projects" className="brut-btn">
                Learn More
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}