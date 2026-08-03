import Link from 'next/link';
import SectionReveal from '@/components/SectionReveal';

export default function AboutTeaser() {
  return (
    <section id="about" className="teaser">
      <div className="wrap">
        <div className="split split--photo-left">
          <SectionReveal from="left" className="split__photo">
            <div className="split__photo-frame">
              <img src="/images/pak1.jpg" alt="Foto Adit Fitra Yoga" />
            </div>
          </SectionReveal>

          <SectionReveal from="right" className="split__text">
            <div className="right-teaser__head">
              <div className="section__eyebrow">FIG. 02 — RECORD</div>
              <h2 className="section__title">About Me</h2>
            </div>

            <div className="brut-box teaser__box">
              <span className="brut-box__label">Bio</span>
              <p className="teaser__text">
                A brief introduction my journey as a software engineer.
              </p>
              <Link href="/about" className="brut-btn">
                Learn More
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}