import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ContactForm } from '@/components/ContactForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { BadgeCheck, ChevronRight, FilePenLine, GitBranch, Headphones, KeyRound, Lock, Mail, MapPin, MessageCircle, MessageCircleQuestionMark, Phone, ReceiptIndianRupee, ShieldCheck, Undo2, UserCheck } from 'lucide-react';

export function ContactContent() {
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
                Contact
              </span>
            </motion.nav>
            <motion.p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              Contact
            </motion.p>
            <motion.h1 className="mb-6 max-w-4xl font-serif text-[clamp(2.9rem,6.2vw,5.6rem)] font-semibold leading-[0.92] text-foreground" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              Tell us what is slow,
              <span className="block text-primary">
                and we will tell you what to do.
              </span>
            </motion.h1>
            <motion.p className="mb-9 max-w-2xl text-lg leading-8 text-secondary-foreground" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              Send the details below and we reply within one working day — usually the same day. Prefer to talk first? Call or WhatsApp us and skip the form entirely.
            </motion.p>
            <motion.div className="flex flex-col flex-wrap gap-3 sm:flex-row" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <a href="tel:+916297927642" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-clay transition-all duration-300 hover:-translate-y-1 hover:bg-accent md:text-base">
                Call +91 62979 27642
              </a>
              <a href="https://wa.me/916297927642?text=Hi%20Autoneural!%20I'd%20like%20to%20discuss%20an%20AI%20project%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F8F52] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#177242] md:text-base">
                Message on WhatsApp
              </a>
            </motion.div>
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
      </main>
  );
}
