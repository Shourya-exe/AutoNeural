import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronRight, ArrowRight, CheckCircle2, Award, Briefcase, Linkedin, Layers } from 'lucide-react';
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
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(241,236,229,0.85)_0%,_rgba(248,245,240,0.96)_52%,_rgba(241,236,229,0.75)_100%)]" />
        <div className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-primary/[0.08] blur-3xl" />
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
              className="rounded-full border border-[rgba(107,30,50,0.14)] bg-[rgba(248,245,240,0.7)] px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-secondary-foreground backdrop-blur-sm hover:border-primary hover:text-primary transition-all"
            >
              About Overview
            </Link>
            <span
              className="rounded-full border border-primary bg-primary/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary shadow-sm"
              aria-current="page"
            >
              Founders &amp; Leadership
            </span>
            <Link
              href="/team-members"
              className="rounded-full border border-[rgba(107,30,50,0.14)] bg-[rgba(248,245,240,0.7)] px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-secondary-foreground backdrop-blur-sm hover:border-primary hover:text-primary transition-all"
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
            The people steering{' '}
            <span className="block text-primary">Autoneural.</span>
          </motion.h1>

          <motion.p
            className="mb-9 max-w-2xl text-lg leading-8 text-secondary-foreground"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Executive vision, AI systems engineering, and client growth leadership behind every platform we deploy.
          </motion.p>

          <motion.div
            className="flex flex-col flex-wrap gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground border border-white/20 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.35),0_6px_18px_-4px_rgba(107,30,50,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8B3048] hover:shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.5),0_10px_24px_-4px_rgba(107,30,50,0.45)] md:text-base"
            >
              Speak with leadership
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link
              href="/team-members"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(107,30,50,0.14)] bg-[rgba(248,245,240,0.75)] px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary md:text-base"
            >
              View Engineering Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Profiles Grid */}
      <section className="py-24 bg-background border-t border-[rgba(107,30,50,0.12)]" data-testid="founders-grid-section">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Core Leadership
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Founding Partners
            </h2>
            <p className="text-secondary-foreground text-base">
              A balanced team of system architects, product engineers, and commercial strategists.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {FOUNDERS_DATA.map((profile: FounderProfile, idx) => {
              const isFounderCmo = profile.id === 'founder-cmo';
              return (
                <motion.div
                  key={profile.id}
                  data-testid={`founder-card-${profile.id}`}
                  className="group relative bg-[rgba(248,245,240,0.85)] backdrop-blur-md border border-[rgba(107,30,50,0.14)] rounded-3xl overflow-hidden shadow-clay shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.9),0_18px_45px_-12px_rgba(69,19,35,0.08)] hover:shadow-clay-hover hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
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
                          <span className="mt-2 font-mono text-[10px] uppercase tracking-widest text-slate-400">
                            {profile.role}
                          </span>
                        </div>
                      )}

                      {isFounderCmo && (
                        <span className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                          Founder &amp; CMO
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <p className="text-primary font-mono text-xs font-semibold uppercase tracking-widest mb-2">
                        {profile.role}
                      </p>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                        {profile.name}
                      </h3>
                      <p className="text-secondary-foreground leading-relaxed text-sm mb-6">
                        {profile.shortIntro}
                      </p>

                      <div className="mb-6 pt-4 border-t border-[rgba(107,30,50,0.12)]">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2.5 flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-primary" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-1.5">
                          {profile.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="text-xs text-secondary-foreground flex items-start gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-[rgba(107,30,50,0.12)]">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2 flex items-center gap-1.5">
                          <Layers size={13} className="text-primary" />
                          Strategic Focus
                        </h4>
                        <p className="text-xs leading-relaxed text-secondary-foreground">
                          {profile.about}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Link */}
                  <div className="px-8 pb-8 pt-2">
                    {profile.linkedin ? (
                      <a
                        href={profile.linkedin}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-[#8B3048] hover:underline underline-offset-4 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn Profile
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        Autoneural Leadership
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
      <section className="py-20 bg-[rgba(241,236,229,0.5)] border-t border-[rgba(107,30,50,0.12)]">
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground border border-white/20 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.35),0_6px_18px_-4px_rgba(107,30,50,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#8B3048]"
            >
              Book a Discovery Call
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/team-members"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(107,30,50,0.14)] bg-[rgba(248,245,240,0.75)] px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-primary hover:text-primary"
            >
              Meet the Broader Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
