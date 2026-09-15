import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { IndustriesContent } from '@/components/pages/IndustriesContent';

export default function Industries() {
  return (
    <div className="flex min-h-screen w-full flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <IndustriesContent />
      <Footer />
    </div>
  );
}
