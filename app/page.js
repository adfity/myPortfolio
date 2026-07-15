import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import AboutTeaser from '@/components/AboutTeaser';
import ProjectsTeaser from '@/components/ProjectsTeaser';
import ContactTeaser from '@/components/ContactTeaser';
import SectionReveal from '@/components/SectionReveal';

export default function HomePage() {
  return (
    <div className="home-layout">
      <Sidebar />
      <div className="home-layout__content">
        <Hero />
        <div className="hazard" aria-hidden="true" />
        <SectionReveal>
          <AboutTeaser />
        </SectionReveal>
        <div className="hazard" aria-hidden="true" />
        <SectionReveal>
          <ProjectsTeaser />
        </SectionReveal>
        <div className="hazard" aria-hidden="true" />
        <SectionReveal>
          <ContactTeaser />
        </SectionReveal>
      </div>
    </div>
  );
}