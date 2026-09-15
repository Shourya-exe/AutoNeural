import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronRight, ArrowRight, Briefcase, Linkedin, Layers } from 'lucide-react';
import { TEAM_MEMBERS_DATA, type TeamMember } from '@/data/team';

function initialsOf(name: string) {
  return name
    .replace(/[\[\]]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join('');
}

const CATEGORIES = ['All', 'Engineering', 'AI & Automation', 'Product & Design', 'Operations'] as const;

export function TeamMembersContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredMembers = selectedCategory === 'All'
    ? TEAM_MEMBERS_DATA
    : TEAM_MEMBERS_DATA.filter((m) => m.category === selectedCategory);

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(238,221,196,0.72)_0%,_rgba(250,247,239,0.94)_52%,_rgba(244,235,219,0.86)_100%)]" />
        <div className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-primary/[0.09] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-background to-transparent" />

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <motion.nav
            className="mb-8 flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-secondary-foreground"
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <ChevronRight size={13} aria-hidden="true" />
            <Link href="/about" className="transition-colors hover:text-primary">
              Company
            </Link>
            <ChevronRight size={13} aria-hidden="true" />
            <span className="text-foreground">Team Members</span>
          </motion.nav>

          {/* Sub-nav Tabs */}
          <motion.div
            className="mb-8 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
          >
            <Link
              href="/about"
              className="rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-secondary-foreground hover:border-foreground hover:text-foreground transition-all"
            >
              About Overview
            </Link>
            <Link
              href="/founders"
              className="rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-secondary-foreground hover:border-foreground hover:text-foreground transition-all"
            >
              Founders &amp; Leadership
            </Link>
            <span
              className="rounded-full border border-primary bg-primary/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary shadow-sm"
              aria-current="page"
            >
              Team Directory
            </span>
          </motion.div>

          <motion.p
            className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            Engineering &amp; Operations
          </motion.p>

          <motion.h1
            className="mb-6 max-w-4xl font-serif text-[clamp(2.9rem,6.2vw,5.6rem)] font-semibold leading-[0.92] text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            The builders behind{' '}
            <span className="block text-primary">the systems.</span>
          </motion.h1>

          <motion.p
            className="mb-9 max-w-2xl text-lg leading-8 text-secondary-foreground"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Meet the Autoneural team building AI agents, autonomous workflow automations, and high-performance software for businesses that want to scale cleanly.
          </motion.p>

          <motion.div
            className="flex flex-col flex-wrap gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-clay transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:shadow-clay-hover md:text-base"
            >
              Work with our team
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link
              href="/founders"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:bg-card md:text-base"
            >
              Executive Leadership
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Directory & Role Filter Section */}
      <section className="py-24 bg-background border-t border-border/60" data-testid="team-members-section">
        <div className="container mx-auto px-6 md:px-12">
          {/* Category Filter Tabs */}
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Team Directory
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Specialized by Domain
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'bg-foreground text-background shadow-sm'
                        : 'bg-card border border-border text-secondary-foreground hover:border-foreground hover:text-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Members Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredMembers.map((member: TeamMember, idx) => (
                <motion.div
                  key={member.id}
                  layout
                  data-testid={`team-card-${member.id}`}
                  className="group relative bg-[#FAF9F6] border border-border rounded-3xl overflow-hidden shadow-clay hover:shadow-clay-hover hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                >
                  <div>
                    {/* Portrait or Initials Placeholder */}
                    <div className="aspect-[4/3] overflow-hidden relative bg-muted">
                      {member.image ? (
                        <img
                          alt={`${member.name}, ${member.role} at Autoneural`}
                          width={member.width ?? 1254}
                          height={member.height ?? 1254}
                          loading="lazy"
                          decoding="async"
                          className={`w-full h-full object-cover ${member.objectPosition} group-hover:scale-105 transition-transform duration-700`}
                          src={member.image}
                        />
                      ) : (
                        <div
                          role="img"
                          aria-label={member.name}
                          className="w-full h-full bg-muted flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-700"
                        >
                          <span className="font-heading font-bold text-6xl md:text-7xl text-primary/30 select-none tracking-tight">
                            {initialsOf(member.name)}
                          </span>
                          <span className="mt-2 font-mono text-[10px] uppercase tracking-widest text-slate-400">
                            {member.role}
                          </span>
                        </div>
                      )}

                      <span className="absolute top-4 right-4 rounded-full bg-card/90 backdrop-blur-sm border border-border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground shadow-sm">
                        {member.category}
                      </span>
                    </div>

                    {/* Member Details */}
                    <div className="p-8">
                      <p className="text-primary font-mono text-xs font-semibold uppercase tracking-widest mb-2">
                        {member.role}
                      </p>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                        {member.name}
                      </h3>
                      <p className="text-secondary-foreground leading-relaxed text-sm mb-6">
                        {member.bio}
                      </p>

                      <div className="pt-4 border-t border-border/60">
                        <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1 flex items-center gap-1.5">
                          <Layers size={13} className="text-primary" />
                          Primary Responsibility
                        </h4>
                        <p className="text-xs leading-relaxed text-secondary-foreground font-medium">
                          {member.primaryResponsibility}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn / Team Link */}
                  <div className="px-8 pb-8 pt-2">
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn Profile
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        Autoneural Engineering Team
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Join the Team / Contact Section */}
      <section className="py-20 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Want to build with Autoneural?
          </h3>
          <p className="text-secondary-foreground mb-8 text-base leading-relaxed">
            We are always interested in collaborating with sharp AI engineers, workflow automation specialists, and full-stack builders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-clay transition-all hover:-translate-y-0.5 hover:bg-accent"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/founders"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-foreground"
            >
              Founders &amp; Leadership
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
