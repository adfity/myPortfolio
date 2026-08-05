'use client';

import Link from 'next/link';
import { FileText, Mail } from "lucide-react";
import SectionReveal from '@/components/SectionReveal';
import PoopingChicken from '@/components/PoopingChicken';

function scrollToContact(e) {
  const target = document.getElementById('contact');
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', '/#contact');
  }
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="wrap">
        <div className="hero__grid">
          <SectionReveal from="right" className="hero__photo-col">
            <PoopingChicken className="hero__photo-chicken" />
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
                <FileText size={21} strokeWidth={2.7} />
                <span>My CV</span>
              </Link>
              <Link href="/#contact" className="brut-btn" onClick={scrollToContact}>
                <Mail size={21} strokeWidth={2.7} />
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