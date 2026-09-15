import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WebsiteDevelopmentContent } from '@/components/pages/WebsiteDevelopmentContent';

export default function WebsiteDevelopment() {
  return (
    <div className="flex min-h-screen w-full flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <WebsiteDevelopmentContent />
      <Footer />
    </div>
  );
}
