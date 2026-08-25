import Sidebar from '@/components/home/Sidebar';
import Hero from '@/components/Hero';
import AboutTeaser from '@/components/home/AboutTeaser';
import ProjectsTeaser from '@/components/home/ProjectsTeaser';
import ContactTeaser from '@/components/home/ContactTeaser';
import HomeScrollSnap from '@/components/home/HomeScrollSnap';

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