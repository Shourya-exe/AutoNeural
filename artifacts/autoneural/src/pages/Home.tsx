import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { CustomAgents } from '@/components/home/CustomAgents';
import { AivoraSpotlight } from '@/components/home/AivoraSpotlight';
import { Statistics } from '@/components/home/Statistics';
import { Services } from '@/components/home/Services';
import { Omnichannel } from '@/components/home/Omnichannel';
import { ChatbotFeatures } from '@/components/home/ChatbotFeatures';
import { CoreMetrics } from '@/components/home/CoreMetrics';
import { Integrations } from '@/components/home/Integrations';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { ClientResults } from '@/components/home/ClientResults';
import { CaseStudies } from '@/components/home/CaseStudies';
import { Industries } from '@/components/home/Industries';
import { Process } from '@/components/home/Process';
import { TechStack } from '@/components/home/TechStack';
import { WhyAutoneural } from '@/components/home/WhyAutoneural';
import { TrustSignals } from '@/components/home/TrustSignals';
import { Team } from '@/components/home/Team';
import { Testimonials } from '@/components/home/Testimonials';
import { Faq } from '@/components/home/Faq';
import { Insights } from '@/components/home/Insights';
import { Contact } from '@/components/home/Contact';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <CustomAgents />
        <AivoraSpotlight />
        <Statistics />
        <Services />
        <Omnichannel />
        <ChatbotFeatures />
        <CoreMetrics />
        <Integrations />
        <FeaturedProjects />
        <ClientResults />
        <CaseStudies />
        <Industries />
        <Process />
        <TechStack />
        <WhyAutoneural />
        <TrustSignals />
        <Team />
        <Testimonials />
        <Faq />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
