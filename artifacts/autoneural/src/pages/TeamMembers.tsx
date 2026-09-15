import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { TeamMembersContent } from '@/components/pages/TeamMembersContent';

export default function TeamMembers() {
  return (
    <div className="flex min-h-screen w-full flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <TeamMembersContent />
      <Footer />
    </div>
  );
}
