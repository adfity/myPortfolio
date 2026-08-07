import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import AboutTeaser from '@/components/AboutTeaser';
import ProjectsTeaser from '@/components/ProjectsTeaser';
import ContactTeaser from '@/components/ContactTeaser';
import HomeScrollSnap from '@/components/HomeScrollSnap';

export default function HomePage() {
  return (
    <div className="home-layout">
      <HomeScrollSnap />
      <Sidebar />
      <div className="home-layout__content">
        <Hero />
        <AboutTeaser />
        <ProjectsTeaser />
        <ContactTeaser />
      </div>
    </div>
  );
}