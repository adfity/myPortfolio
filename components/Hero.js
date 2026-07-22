import Link from 'next/link';
import { FileText, Mail } from "lucide-react";
import SectionReveal from '@/components/SectionReveal';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="wrap">
        <div className="hero__grid">
          <SectionReveal from="right" className="hero__photo-col">
            <div className="hero__photo-frame">
              <img
                src="/images/pak1.jpg"
                alt="Foto Adit Fitra Yoga"
                className="hero__photo"
              />
            </div>
          </SectionReveal>

          <SectionReveal from="left" className="hero__text-col">
            <div className="hero__index">FIG. 01 — PROFILE</div>
            <h1 className="hero__name">jack d. oslo</h1>
            <span className="hero__role">Web Developer / Data Analyst</span>
            <p className="hero__desc">
              Hi! I'm Adit, a web developer and data analyst. I specialize in 
              bridging software engineering with modern data analytics to build 
              fast, scalable web applications powered by intelligent data processing systems.
            </p>
            <div className="hero__cta">
              <Link href="/projects" className="brut-btn brut-btn--primary">
                <FileText size={18} strokeWidth={2} />
                <span>My CV</span>
              </Link>
              <Link href="/contact" className="brut-btn">
                <Mail size={18} strokeWidth={2} />
                <span>Contact Me</span>
              </Link>
            </div>
            <div className="hero__meta">
              Bandung, Indonesia <span className="hero__cursor">_</span>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}