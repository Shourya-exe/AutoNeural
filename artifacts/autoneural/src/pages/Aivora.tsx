import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AivoraContent } from '@/components/pages/AivoraContent';

export default function Aivora() {
  return (
    <div className="flex min-h-screen w-full flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <AivoraContent />
      <Footer />
    </div>
  );
}
