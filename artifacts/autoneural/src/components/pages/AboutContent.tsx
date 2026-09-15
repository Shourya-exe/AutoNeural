import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ContactForm } from '@/components/ContactForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { Statistics } from '@/components/Statistics';
import { ArrowRight, BadgeCheck, Building2, ChevronRight, FilePenLine, GitBranch, Headphones, KeyRound, Lock, Mail, MapPin, MessageCircle, MessageCircleQuestionMark, Phone, Quote, ReceiptIndianRupee, ShieldCheck, Star, Undo2, UserCheck } from 'lucide-react';

export function AboutContent() {
  return (
      <main className="flex-grow">
        <section className="relative overflow-hidden bg-background pb-16 pt-32 md:pb-20 md:pt-40">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(241,236,229,0.85)_0%,_rgba(248,245,240,0.96)_52%,_rgba(241,236,229,0.75)_100%)]" />
          <div className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-primary/[0.08] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-background to-transparent" />
          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <motion.nav className="mb-8 flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-secondary-foreground" aria-label="Breadcrumb" initial={{ opacity: 0, y: 11.599 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <ChevronRight size={13} aria-hidden="true" />
              <span className="text-foreground">
                About
              </span>
            </motion.nav>
            <motion.p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              About Autoneural
            </motion.p>
            <motion.h1 className="mb-6 max-w-4xl font-serif text-[clamp(2.9rem,6.2vw,5.6rem)] font-semibold leading-[0.92] text-foreground" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              A small team that ships
              <span className="block text-primary">
                systems businesses actually use.
              </span>
            </motion.h1>
            <motion.p className="mb-9 max-w-2xl text-lg leading-8 text-secondary-foreground" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              We are an AI-first software team working with businesses that do not have an in-house engineering department. We scope honestly, build in the open, hand over everything, and stay reachable after launch.
            </motion.p>
            <motion.div className="flex flex-col flex-wrap gap-3 sm:flex-row" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground border border-white/20 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.35),0_6px_18px_-4px_rgba(107,30,50,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8B3048] hover:shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.5),0_10px_24px_-4px_rgba(107,30,50,0.45)] md:text-base">
                Work with us
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:bg-card md:text-base">
                What we do
              </Link>
            </motion.div>
          </div>
        </section>
        <Statistics />
        <section className="py-24 bg-foreground text-background" data-testid="why-autoneural-section">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  The Autoneural Difference
                </motion.h2>
                <motion.p className="text-lg text-gray-400 mb-8 max-w-md" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  Most businesses do not need more complicated software. They need tools that remove delays, reduce mistakes, and make daily work easier.
                </motion.p>
                <motion.div  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <a href="#contact" className="bg-primary text-white px-8 py-4 rounded-full text-base font-medium shadow-clay hover:shadow-clay-hover hover:-translate-y-1 transition-all duration-300 inline-block">
                    Transform Your Business
                  </a>
                </motion.div>
              </div>
              <motion.div className="rounded-3xl border border-white/15 bg-white/[0.06] p-8 md:p-12 backdrop-blur-md shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.15),0_20px_45px_-10px_rgba(0,0,0,0.5)]" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="space-y-8">
                  <div className="flex justify-between text-xs font-mono font-bold tracking-widest uppercase border-b border-white/10 pb-4">
                    <span className="text-gray-500">
                      The usual way
                    </span>
                    <span className="text-primary text-right">
                      With Autoneural
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-4 group">
                    <span className="text-sm md:text-lg text-gray-500 line-through decoration-gray-600 w-1/2">
                      Repeated manual tasks
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500 group-hover:text-primary transition-colors">
                        →
                      </span>
                    </div>
                    <span className="text-base md:text-xl font-heading font-bold text-white w-1/2 text-right">
                      Work done automatically
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-4 group">
                    <span className="text-sm md:text-lg text-gray-500 line-through decoration-gray-600 w-1/2">
                      Long software projects
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500 group-hover:text-primary transition-colors">
                        →
                      </span>
                    </div>
                    <span className="text-base md:text-xl font-heading font-bold text-white w-1/2 text-right">
                      Useful tools launched faster
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-4 group">
                    <span className="text-sm md:text-lg text-gray-500 line-through decoration-gray-600 w-1/2">
                      Reports after the problem
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500 group-hover:text-primary transition-colors">
                        →
                      </span>
                    </div>
                    <span className="text-base md:text-xl font-heading font-bold text-white w-1/2 text-right">
                      Clear updates while work happens
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-4 group">
                    <span className="text-sm md:text-lg text-gray-500 line-through decoration-gray-600 w-1/2">
                      Apps that do not talk
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500 group-hover:text-primary transition-colors">
                        →
                      </span>
                    </div>
                    <span className="text-base md:text-xl font-heading font-bold text-white w-1/2 text-right">
                      Connected tools and data
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-4 group">
                    <span className="text-sm md:text-lg text-gray-500 line-through decoration-gray-600 w-1/2">
                      One-size-fits-all software
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500 group-hover:text-primary transition-colors">
                        →
                      </span>
                    </div>
                    <span className="text-base md:text-xl font-heading font-bold text-white w-1/2 text-right">
                      Built around your business
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="about" className="py-32 bg-background" data-testid="team-section">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-20 text-center">
              <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                The Founders
              </motion.h2>
              <motion.p className="text-lg text-secondary-foreground max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                A hands-on team focused on building practical systems that business owners and teams can actually use.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <motion.div className="group relative bg-[rgba(248,245,240,0.85)] backdrop-blur-md border border-[rgba(107,30,50,0.14)] rounded-3xl overflow-hidden shadow-clay shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.9),0_18px_45px_-12px_rgba(69,19,35,0.08)] hover:shadow-clay-hover hover:-translate-y-1 transition-all duration-500" data-testid="team-member-0" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img alt="Palash Lochan Mahana, Founder &amp; Chief Marketing Officer at Autoneural" width={1254} height={1254} loading="lazy" decoding="async" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="/assets/palash_lochan_mahana_founder_portrait-DUGUGd_X.webp" />
                </div>
                <div className="p-8">
                  <p className="text-primary font-mono text-xs font-semibold uppercase tracking-widest mb-2">
                    Founder &amp; Chief Marketing Officer
                  </p>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                    Palash Lochan Mahana
                  </h3>
                  <p className="text-secondary-foreground leading-relaxed text-sm md:text-base">
                    Palash helps businesses understand where AI can create real value, shape the right offer, and turn ideas into clear product and growth plans.
                  </p>
                  <a href="https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/" className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:text-[#8B3048] hover:underline underline-offset-4 transition-all" target="_blank" rel="noopener noreferrer">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                      </path>
                    </svg>
                    LinkedIn Profile
                  </a>
                </div>
              </motion.div>
              <motion.div className="group relative bg-[rgba(248,245,240,0.85)] backdrop-blur-md border border-[rgba(107,30,50,0.14)] rounded-3xl overflow-hidden shadow-clay shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.9),0_18px_45px_-12px_rgba(69,19,35,0.08)] hover:shadow-clay-hover hover:-translate-y-1 transition-all duration-500" data-testid="team-member-1" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img alt="Priyanshu Maity, Chief Technology Officer at Autoneural" width={1254} height={1254} loading="lazy" decoding="async" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" src="/assets/priyanshu_maity_cto_portrait-dnTgGttd.webp" />
                </div>
                <div className="p-8">
                  <p className="text-primary font-mono text-xs font-semibold uppercase tracking-widest mb-2">
                    Chief Technology Officer
                  </p>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                    Priyanshu Maity
                  </h3>
                  <p className="text-secondary-foreground leading-relaxed text-sm md:text-base">
                    Priyanshu leads product engineering at Autoneural, building reliable AI tools, automations, dashboards, and custom software for business teams.
                  </p>
                  <a href="https://www.linkedin.com/in/priyanshumaity/" className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:underline underline-offset-4 transition-all" target="_blank" rel="noopener noreferrer">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                      </path>
                    </svg>
                    LinkedIn Profile
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="trust" className="border-y border-border bg-muted/50 py-24 md:py-28" data-testid="trust-signals-section">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-14 max-w-3xl">
              <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                How we work
              </motion.p>
              <motion.h2 className="mb-5 font-serif text-5xl font-semibold leading-[0.96] text-foreground md:text-6xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Six commitments we put in writing.
              </motion.h2>
              <motion.p className="text-lg leading-8 text-secondary-foreground" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Handing your operations to an outside team is a real risk. These are the terms we give every client so that risk stays small and reversible.
              </motion.p>
            </div>
            <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="guarantee-0" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FilePenLine size={22} aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  NDA before anything sensitive
                </h3>
                <p className="text-sm leading-6 text-secondary-foreground">
                  We sign your NDA — or ours — before we look at data, systems, or documents.
                </p>
              </motion.div>
              <motion.div className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="guarantee-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GitBranch size={22} aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  You own the code
                </h3>
                <p className="text-sm leading-6 text-secondary-foreground">
                  Source code, repositories, cloud accounts, and documentation are handed to you at the end. No lock-in.
                </p>
              </motion.div>
              <motion.div className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="guarantee-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ReceiptIndianRupee size={22} aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  Fixed price per phase
                </h3>
                <p className="text-sm leading-6 text-secondary-foreground">
                  You approve a scope and a number before work starts. No open-ended hourly invoices.
                </p>
              </motion.div>
              <motion.div className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="guarantee-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Undo2 size={22} className="lucide-undo-2" aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  Working demo before you commit
                </h3>
                <p className="text-sm leading-6 text-secondary-foreground">
                  We show a real, working slice of the system before you sign off on the full build.
                </p>
              </motion.div>
              <motion.div className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="guarantee-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Headphones size={22} aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  Support after launch
                </h3>
                <p className="text-sm leading-6 text-secondary-foreground">
                  Every project ships with a support window, monitoring, and a named person to call.
                </p>
              </motion.div>
              <motion.div className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="guarantee-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <UserCheck size={22} aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  One team, start to finish
                </h3>
                <p className="text-sm leading-6 text-secondary-foreground">
                  The people who scope your project are the people who build it. Nothing gets handed to strangers.
                </p>
              </motion.div>
            </div>
            <motion.div className="rounded-3xl border border-border bg-foreground p-8 text-background md:p-10" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="mb-7 flex items-center gap-3">
                <ShieldCheck size={22} className="text-primary" aria-hidden="true" />
                <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
                  Security and data handling
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <Lock size={17} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm leading-6 text-gray-300">
                    Encrypted in transit and at rest
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <KeyRound size={17} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm leading-6 text-gray-300">
                    Least-privilege access, secrets in a managed vault
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <ShieldCheck size={17} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm leading-6 text-gray-300">
                    PII masking in transcripts, logs, and exports
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <MapPin size={17} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm leading-6 text-gray-300">
                    Region-pinned or on-premise hosting on request
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <BadgeCheck size={17} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm leading-6 text-gray-300">
                    Audit trails on every automated action
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <GitBranch size={17} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm leading-6 text-gray-300">
                    Code review and staged releases on every change
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="testimonials" className="py-32 bg-muted" data-testid="testimonials-section">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-16 text-center">
              <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Client Results
              </motion.p>
              <motion.h2 className="mb-4 font-serif text-5xl font-semibold leading-[0.96] text-foreground md:text-6xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                What our clients say.
              </motion.h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-primary" style={{ width: '0px' }} />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay-hover" data-testid="testimonial-card-0" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Quote size={64} className="pointer-events-none absolute -right-3 -top-3 text-primary/[0.07] transition-colors duration-500 group-hover:text-primary/[0.13]" aria-hidden="true" />
                <div className="relative z-10 mb-5 flex items-center gap-3">
                  <div className="flex gap-0.5">
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-primary">
                    3-month payback
                  </span>
                </div>
                <p className="relative z-10 mb-8 flex-grow text-base leading-7 text-foreground">
                  “Autoneural did not just build us software; they re-engineered the workflow around it. The system paid for itself inside three months.”
                </p>
                <div className="relative z-10 mt-auto flex items-center justify-between gap-4 border-t border-border pt-5">
                  <div className="min-w-0">
                    <h3 className="truncate font-heading font-bold text-foreground">
                      James Harrington
                    </h3>
                    <p className="truncate text-sm text-secondary-foreground">
                      COO, Global Logistics Ltd
                    </p>
                  </div>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-muted text-secondary-foreground">
                    <Building2 size={19} className="lucide-building-2" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>
              <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay-hover" data-testid="testimonial-card-1" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Quote size={64} className="pointer-events-none absolute -right-3 -top-3 text-primary/[0.07] transition-colors duration-500 group-hover:text-primary/[0.13]" aria-hidden="true" />
                <div className="relative z-10 mb-5 flex items-center gap-3">
                  <div className="flex gap-0.5">
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-primary">
                    68% fewer routine queries
                  </span>
                </div>
                <p className="relative z-10 mb-8 flex-grow text-base leading-7 text-foreground">
                  “The WhatsApp assistant now handles most of our dealer questions. Our team only steps in for the orders that actually need a decision.”
                </p>
                <div className="relative z-10 mt-auto flex items-center justify-between gap-4 border-t border-border pt-5">
                  <div className="min-w-0">
                    <h3 className="truncate font-heading font-bold text-foreground">
                      Aparna Nair
                    </h3>
                    <p className="truncate text-sm text-secondary-foreground">
                      Head of Sales, Meridian Exports
                    </p>
                  </div>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-muted text-secondary-foreground">
                    <Building2 size={19} className="lucide-building-2" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>
              <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay-hover" data-testid="testimonial-card-2" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Quote size={64} className="pointer-events-none absolute -right-3 -top-3 text-primary/[0.07] transition-colors duration-500 group-hover:text-primary/[0.13]" aria-hidden="true" />
                <div className="relative z-10 mb-5 flex items-center gap-3">
                  <div className="flex gap-0.5">
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-primary">
                    Delivered on schedule
                  </span>
                </div>
                <p className="relative z-10 mb-8 flex-grow text-base leading-7 text-foreground">
                  “Rare combination of deep ML knowledge and pragmatic engineering. They scoped it honestly, shipped on time, and stayed for the handover.”
                </p>
                <div className="relative z-10 mt-auto flex items-center justify-between gap-4 border-t border-border pt-5">
                  <div className="min-w-0">
                    <h3 className="truncate font-heading font-bold text-foreground">
                      Sarah Jenkins
                    </h3>
                    <p className="truncate text-sm text-secondary-foreground">
                      VP of Engineering, FinTech Solutions
                    </p>
                  </div>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-muted text-secondary-foreground">
                    <Building2 size={19} className="lucide-building-2" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>
              <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay-hover" data-testid="testimonial-card-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Quote size={64} className="pointer-events-none absolute -right-3 -top-3 text-primary/[0.07] transition-colors duration-500 group-hover:text-primary/[0.13]" aria-hidden="true" />
                <div className="relative z-10 mb-5 flex items-center gap-3">
                  <div className="flex gap-0.5">
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-primary">
                    2.4x more enquiries
                  </span>
                </div>
                <p className="relative z-10 mb-8 flex-grow text-base leading-7 text-foreground">
                  “Our new website loads instantly and reads well on a phone. Enquiries through the site more than doubled in the first quarter.”
                </p>
                <div className="relative z-10 mt-auto flex items-center justify-between gap-4 border-t border-border pt-5">
                  <div className="min-w-0">
                    <h3 className="truncate font-heading font-bold text-foreground">
                      Rohit Menon
                    </h3>
                    <p className="truncate text-sm text-secondary-foreground">
                      Founder, Corewave Interiors
                    </p>
                  </div>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-muted text-secondary-foreground">
                    <Building2 size={19} className="lucide-building-2" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>
              <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay-hover" data-testid="testimonial-card-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Quote size={64} className="pointer-events-none absolute -right-3 -top-3 text-primary/[0.07] transition-colors duration-500 group-hover:text-primary/[0.13]" aria-hidden="true" />
                <div className="relative z-10 mb-5 flex items-center gap-3">
                  <div className="flex gap-0.5">
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-primary">
                    Admin work near zero
                  </span>
                </div>
                <p className="relative z-10 mb-8 flex-grow text-base leading-7 text-foreground">
                  “The agents they built removed almost all of our sales admin. The team spends its day selling instead of updating records.”
                </p>
                <div className="relative z-10 mt-auto flex items-center justify-between gap-4 border-t border-border pt-5">
                  <div className="min-w-0">
                    <h3 className="truncate font-heading font-bold text-foreground">
                      Michael Chen
                    </h3>
                    <p className="truncate text-sm text-secondary-foreground">
                      Head of Sales Ops, Enterprise CRM Inc
                    </p>
                  </div>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-muted text-secondary-foreground">
                    <Building2 size={19} className="lucide-building-2" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>
              <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay-hover" data-testid="testimonial-card-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Quote size={64} className="pointer-events-none absolute -right-3 -top-3 text-primary/[0.07] transition-colors duration-500 group-hover:text-primary/[0.13]" aria-hidden="true" />
                <div className="relative z-10 mb-5 flex items-center gap-3">
                  <div className="flex gap-0.5">
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                    <Star size={15} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-primary">
                    Live in 5 weeks
                  </span>
                </div>
                <p className="relative z-10 mb-8 flex-grow text-base leading-7 text-foreground">
                  “They explained everything in plain language. For a non-technical team, that made the whole project feel manageable.”
                </p>
                <div className="relative z-10 mt-auto flex items-center justify-between gap-4 border-t border-border pt-5">
                  <div className="min-w-0">
                    <h3 className="truncate font-heading font-bold text-foreground">
                      Fatima Rahman
                    </h3>
                    <p className="truncate text-sm text-secondary-foreground">
                      Operations Manager, Bluecrest Health
                    </p>
                  </div>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-muted text-secondary-foreground">
                    <Building2 size={19} className="lucide-building-2" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="insights" className="py-32 bg-background" data-testid="insights-section">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <motion.h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  From the Team
                </motion.h2>
                <div className="w-20 h-1 bg-primary rounded-full" style={{ width: '0px' }} />
              </div>
              <motion.a href="#insights" className="text-primary font-medium hover:text-foreground transition-colors inline-flex items-center gap-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                View All Notes →
              </motion.a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div className="group cursor-pointer" data-testid="insight-card-0" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="block p-8 rounded-2xl bg-[rgba(248,245,240,0.85)] backdrop-blur-md border border-[rgba(107,30,50,0.12)] shadow-clay shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.9),0_14px_35px_-10px_rgba(69,19,35,0.06)] group-hover:bg-[rgba(248,245,240,0.96)] group-hover:shadow-clay-hover group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-[rgba(248,245,240,0.95)] border border-[rgba(107,30,50,0.14)] rounded-full text-xs font-mono font-semibold text-primary tracking-wide group-hover:border-primary/30 transition-colors">
                      AI Agents
                    </span>
                    <span className="text-sm text-secondary-foreground">
                      18 Jun 2026
                    </span>
                    <span className="text-sm text-secondary-foreground">
                      · 6 min read
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    AI agents vs chatbots: what actually changes for your business
                  </h3>
                  <p className="text-secondary-foreground mb-8 leading-relaxed flex-grow">
                    A chatbot answers. An agent acts. Here is where the line sits, and how to tell which one your process needs.
                  </p>
                  <div className="mt-auto font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    Read More
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
              <motion.div className="group cursor-pointer" data-testid="insight-card-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="block p-8 rounded-2xl bg-[rgba(248,245,240,0.85)] backdrop-blur-md border border-[rgba(107,30,50,0.12)] shadow-clay shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.9),0_14px_35px_-10px_rgba(69,19,35,0.06)] group-hover:bg-[rgba(248,245,240,0.96)] group-hover:shadow-clay-hover group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-[rgba(248,245,240,0.95)] border border-[rgba(107,30,50,0.14)] rounded-full text-xs font-mono font-semibold text-primary tracking-wide group-hover:border-primary/30 transition-colors">
                      Automation
                    </span>
                    <span className="text-sm text-secondary-foreground">
                      2 May 2026
                    </span>
                    <span className="text-sm text-secondary-foreground">
                      · 8 min read
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    The WhatsApp automation playbook for Indian businesses
                  </h3>
                  <p className="text-secondary-foreground mb-8 leading-relaxed flex-grow">
                    Template approval, opt-outs, broadcast limits, and the flows that actually convert on the official Business API.
                  </p>
                  <div className="mt-auto font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    Read More
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
              <motion.div className="group cursor-pointer" data-testid="insight-card-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="block p-8 rounded-2xl bg-[rgba(248,245,240,0.85)] backdrop-blur-md border border-[rgba(107,30,50,0.12)] shadow-clay shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.9),0_14px_35px_-10px_rgba(69,19,35,0.06)] group-hover:bg-[rgba(248,245,240,0.96)] group-hover:shadow-clay-hover group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-[rgba(248,245,240,0.95)] border border-[rgba(107,30,50,0.14)] rounded-full text-xs font-mono font-semibold text-primary tracking-wide group-hover:border-primary/30 transition-colors">
                      Web Development
                    </span>
                    <span className="text-sm text-secondary-foreground">
                      21 Mar 2026
                    </span>
                    <span className="text-sm text-secondary-foreground">
                      · 5 min read
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    Website speed is a revenue metric, not a vanity score
                  </h3>
                  <p className="text-secondary-foreground mb-8 leading-relaxed flex-grow">
                    What a 1-second delay costs on mobile, and the five fixes that recover most of it without a redesign.
                  </p>
                  <div className="mt-auto font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    Read More
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="faq" className="bg-background py-24 md:py-28" data-testid="faq-section">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  Straight answers
                </motion.p>
                <motion.h2 className="mb-5 font-serif text-4xl font-semibold leading-[0.98] text-foreground md:text-5xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  Questions we get asked before every project.
                </motion.h2>
                <motion.p className="mb-8 max-w-md text-base leading-7 text-secondary-foreground" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  If something is not covered here, ask us directly — we would rather answer honestly than let you guess.
                </motion.p>
                <motion.div  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background shadow-clay transition-all duration-300 hover:-translate-y-1 hover:bg-accent md:text-base">
                    <MessageCircleQuestionMark size={17} aria-hidden="true" />
                    Ask your question
                  </Link>
                </motion.div>
              </div>
              <FaqAccordion group="general" />
            </div>
          </div>
        </section>
        <section id="contact" className="bg-foreground py-0 text-background" data-testid="contact-section">
          <div className="grid min-h-[780px] grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-20 xl:px-24">
              <motion.div  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Get in touch
                </p>
                <h2 className="mb-6 font-serif text-5xl font-semibold leading-[0.96] text-white md:text-6xl">
                  Tell us what you want to make easier.
                </h2>
                <p className="mb-10 max-w-xl text-lg leading-8 text-gray-400">
                  Share the work that takes too much time, the customer questions you keep answering, or the reports your team builds by hand. We will suggest a practical AI or automation plan.
                </p>
              <ContactForm />
              </motion.div>
            </div>
            <div className="relative flex overflow-hidden border-l border-white/5 bg-[#111]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#111_100%)]" />
              <div className="relative z-10 flex flex-col justify-center gap-10 p-8 md:p-12 lg:p-20">
                <div>
                  <h3 className="mb-4 font-heading text-3xl font-bold text-white">
                    What happens next
                  </h3>
                  <p className="max-w-xl text-base leading-8 text-gray-400">
                    We read your message, understand the business problem, and reply with the simplest next step. No heavy technical explanation needed.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <div className="mb-2 flex items-center gap-3 text-white">
                      <MessageCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                      <span className="font-semibold">
                        1. Quick discussion
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-gray-400">
                      We discuss your current work process and where time is being lost.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <div className="mb-2 flex items-center gap-3 text-white">
                      <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                      <span className="font-semibold">
                        2. Simple solution plan
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-gray-400">
                      You get a clear plan for what can be automated, what it may cost, and how long it can take.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <div className="mb-2 flex items-center gap-3 text-white">
                      <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                      <span className="font-semibold">
                        3. Build and support
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-gray-400">
                      We build, test, launch, and help your team use the system confidently.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-6 font-heading text-2xl font-bold text-white">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <a href="mailto:autoneural.official3011@gmail.com" className="flex items-center gap-4 text-gray-400 transition-colors hover:text-primary">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5">
                        <Mail size={18} className="text-white" aria-hidden="true" />
                      </span>
                      <span className="break-all text-base">
                        autoneural.official3011@gmail.com
                      </span>
                    </a>
                    <a href="mailto:official@autoneural.in" className="flex items-center gap-4 text-gray-400 transition-colors hover:text-primary">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5">
                        <Mail size={18} className="text-white" aria-hidden="true" />
                      </span>
                      <span className="break-all text-base">
                        official@autoneural.in
                      </span>
                    </a>
                    <a href="tel:+916297927642" className="flex items-center gap-4 text-gray-400 transition-colors hover:text-primary">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5">
                        <Phone size={18} className="text-white" aria-hidden="true" />
                      </span>
                      <span className="text-base">
                        +91 62979 27642
                      </span>
                    </a>
                    <div className="flex items-center gap-4 text-gray-400">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5">
                        <MapPin size={18} className="text-white" aria-hidden="true" />
                      </span>
                      <span className="text-base">
                        India, serving businesses worldwide
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
