import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutContent } from '@/components/pages/AboutContent';

export default function About() {
  return (
    <div className="flex min-h-screen w-full flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <AboutContent />
      <Footer />
    </div>
  );
}
