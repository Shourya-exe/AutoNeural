import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { Statistics } from '@/components/home/Statistics';
import { Services } from '@/components/home/Services';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { CaseStudies } from '@/components/home/CaseStudies';
import { Industries } from '@/components/home/Industries';
import { Process } from '@/components/home/Process';
import { TechStack } from '@/components/home/TechStack';
import { WhyAutoneural } from '@/components/home/WhyAutoneural';
import { Team } from '@/components/home/Team';
import { Testimonials } from '@/components/home/Testimonials';
import { Insights } from '@/components/home/Insights';
import { Contact } from '@/components/home/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <Statistics />
        <Services />
        <FeaturedProjects />
        <CaseStudies />
        <Industries />
        <Process />
        <TechStack />
        <WhyAutoneural />
        <Team />
        <Testimonials />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
