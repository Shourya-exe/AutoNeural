import { motion } from 'framer-motion';
import { BadgeCheck, FilePenLine, GitBranch, Headphones, KeyRound, Lock, MapPin, ReceiptIndianRupee, ShieldCheck, Undo2, UserCheck } from 'lucide-react';

export function TrustSignals() {
  return (
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
  );
}
