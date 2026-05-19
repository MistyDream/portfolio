import { SiteHeader } from './components/layout/SiteHeader';
import { CapabilitiesSection } from './sections/CapabilitiesSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { HeroSection } from './sections/HeroSection';

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-text-primary">
      <SiteHeader />
      <HeroSection />
      <CapabilitiesSection />
      <ExperienceSection />
    </main>
  );
}
