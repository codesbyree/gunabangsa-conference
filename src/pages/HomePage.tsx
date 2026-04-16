import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ScopesSection from '../components/home/ScopesSection';
import PublicationOpportunity from '../components/home/PublicationOpportunity';
import HomeMarquee from '../components/home/HomeMarquee';
import KeynotesSection from '../components/home/KeynotesSection';
import DeadlinesSection from '../components/home/DeadlinesSection';
import OrganizersPartners from '../components/home/OrganizersPartners';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScopesSection />
      <AboutSection />
      <PublicationOpportunity />
      <HomeMarquee />
      <KeynotesSection />
      <DeadlinesSection />
      <OrganizersPartners />
    </>
  );
}
