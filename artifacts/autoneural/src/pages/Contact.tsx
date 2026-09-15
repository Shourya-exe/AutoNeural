import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactContent } from '@/components/pages/ContactContent';

export default function Contact() {
  return (
    <div className="flex min-h-screen w-full flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <ContactContent />
      <Footer />
    </div>
  );
}
