import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { HeroSection } from '../components/HeroSection';
import { LeetCodeSection } from '../components/LeetCodeSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ServicesSection } from '../components/ServicesSection';

export function HomePage() {
  return (
    <main className="overflow-x-clip bg-canvas font-sans text-mist">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LeetCodeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
