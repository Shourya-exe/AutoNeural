import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronRight, ArrowRight, CheckCircle2, Award, Briefcase, Linkedin } from 'lucide-react';
import { FOUNDERS_DATA, type FounderProfile } from '@/data/founders';

function initialsOf(name: string) {
  return name
    .replace(/[\[\]]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join('');
}

export function FoundersContent() {
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
            <span className="text-foreground">Founders</span>
          </motion.nav>

          {/* Sub-nav Tabs (Company / Founders / Team) */}
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
            <span
              className="rounded-full border border-primary bg-primary/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary shadow-sm"
              aria-current="page"
            >
              Founders & Leadership
            </span>
            <Link
              href="/team-members"
              className="rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-secondary-foreground hover:border-foreground hover:text-foreground transition-all"
            >
              Team Directory
            </Link>
          </motion.div>

          <motion.p
            className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            Leadership
          </motion.p>

          <motion.h1
            className="mb-6 max-w-4xl font-serif text-[clamp(2.9rem,6.2vw,5.6rem)] font-semibold leading-[0.92] text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            Meet the people behind{' '}
            <span className="block text-primary">Autoneural.</span>
          </motion.h1>

          <motion.p
            className="mb-9 max-w-2xl text-lg leading-8 text-secondary-foreground"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Autoneural is built by a team focused on practical AI systems, autonomous agents, and custom software that solve real operational bottlenecks and earn their cost from day one.
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
              Start a conversation
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link
              href="/team-members"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:bg-card md:text-base"
            >
              View Engineering Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Leadership Grid Section */}
      <section className="py-24 bg-background border-t border-border/60" data-testid="founders-section">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Executive Leadership
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Hands-on leadership, pragmatic engineering.
            </h2>
            <p className="text-secondary-foreground text-base md:text-lg leading-relaxed">
              We scope honestly, architect in the open, and ensure every solution delivers measurable business value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {FOUNDERS_DATA.map((profile: FounderProfile, idx) => {
              const isFounderCmo = profile.id === 'founder-cmo';
              return (
                <motion.div
                  key={profile.id}
                  data-testid={`founder-card-${profile.id}`}
                  className="group relative bg-[#FAF9F6] border border-border rounded-3xl overflow-hidden shadow-clay hover:shadow-clay-hover hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.15 }}
                >
                  <div>
                    {/* Portrait Image or Initial Placeholder */}
                    <div className="aspect-[4/3] overflow-hidden relative bg-muted">
                      {profile.image ? (
                        <img
                          alt={`${profile.name}, ${profile.role} at Autoneural`}
                          width={profile.width ?? 1254}
                          height={profile.height ?? 1254}
                          loading="lazy"
                          decoding="async"
                          className={`w-full h-full object-cover ${profile.objectPosition} group-hover:scale-105 transition-transform duration-700`}
                          src={profile.image}
                        />
                      ) : (
                        <div
                          role="img"
                          aria-label={profile.name}
                          className="w-full h-full bg-muted flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-700"
                        >
                          <span className="font-heading font-bold text-6xl md:text-7xl text-primary/30 select-none tracking-tight">
                            {initialsOf(profile.name)}
                          </span>
                          <span className="mt-2 font-mono text-xs uppercase tracking-widest text-slate-400">
                            Leadership Profile
                          </span>
                        </div>
                      )}

                      {isFounderCmo && (
                        <span className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                          Founder &amp; CMO
                        </span>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-8">
                      <p className="text-primary font-mono text-xs font-semibold uppercase tracking-widest mb-2">
                        {profile.role}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                        {profile.name}
                      </h3>

                      {/* Short Professional Intro */}
                      <p className="text-secondary-foreground leading-relaxed text-sm md:text-base mb-6 font-medium">
                        {profile.shortIntro}
                      </p>

                      {/* About Section */}
                      <div className="mb-6 pt-5 border-t border-border/60">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2 flex items-center gap-1.5">
                          <Briefcase size={14} className="text-primary" />
                          About
                        </h4>
                        <p className="text-sm leading-relaxed text-secondary-foreground">
                          {profile.about}
                        </p>
                      </div>

                      {/* Key Responsibilities */}
                      <div className="mb-6 pt-5 border-t border-border/60">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3 flex items-center gap-1.5">
                          <CheckCircle2 size={14} className="text-primary" />
                          Core Responsibilities &amp; Focus
                        </h4>
                        <ul className="space-y-2">
                          {profile.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-secondary-foreground">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Relevant Experience */}
                      <div className="pt-5 border-t border-border/60">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3 flex items-center gap-1.5">
                          <Award size={14} className="text-primary" />
                          Relevant Experience
                        </h4>
                        <ul className="space-y-2">
                          {profile.relevantExperience.map((exp, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-secondary-foreground">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary-foreground/60 flex-shrink-0" />
                              <span>{exp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn / Social Link */}
                  <div className="px-8 pb-8 pt-2">
                    {profile.linkedin ? (
                      <a
                        href={profile.linkedin}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn Profile
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-xs font-mono text-slate-400">
                        Autoneural Executive Office
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy / CTA Section */}
      <section className="py-20 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Building systems that earn their keep.
          </h3>
          <p className="text-secondary-foreground mb-8 text-base leading-relaxed">
            Want to discuss how our leadership and engineering team can eliminate repetitive work and automate processes in your business?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-clay transition-all hover:-translate-y-0.5 hover:bg-accent"
            >
              Book a Discovery Call
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/team-members"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-foreground"
            >
              Meet the Broader Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
