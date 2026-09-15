import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicesContent } from '@/components/pages/ServicesContent';

export default function Services() {
  return (
    <div className="flex min-h-screen w-full flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <ServicesContent />
      <Footer />
    </div>
  );
}
