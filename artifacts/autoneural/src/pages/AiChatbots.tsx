import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AiChatbotsContent } from '@/components/pages/AiChatbotsContent';

export default function AiChatbots() {
  return (
    <div className="flex min-h-screen w-full flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <AiChatbotsContent />
      <Footer />
    </div>
  );
}
