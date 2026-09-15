import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FoundersContent } from '@/components/pages/FoundersContent';

export default function Founders() {
  return (
    <div className="flex min-h-screen w-full flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <FoundersContent />
      <Footer />
    </div>
  );
}
