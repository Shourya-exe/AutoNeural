import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export function ClientResults() {
  return (
      <section id="results" className="bg-background py-24 md:py-28" data-testid="client-results-section">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Measured outcomes
              </motion.p>
              <motion.h2 className="font-serif text-5xl font-semibold leading-[0.96] text-foreground md:text-6xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                What changed after we shipped.
              </motion.h2>
            </div>
            <motion.p className="max-w-xl text-lg leading-8 text-secondary-foreground" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              Every engagement is judged on one thing: whether a real number moved. These are the outcomes clients agreed we could publish.
            </motion.p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <motion.article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="client-result-0" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-border bg-muted px-3 py-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
                  Seafood Export
                </span>
                <ArrowUpRight size={17} className="text-secondary-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
              </div>
              <div className="mb-5 flex items-start gap-3 rounded-2xl bg-primary/[0.07] p-4">
                <TrendingUp size={18} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                <p className="font-heading text-base font-semibold leading-6 text-foreground">
                  68% fewer routine queries reaching the team
                </p>
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                WhatsApp dealer assistant
              </h3>
              <p className="mb-6 flex-grow text-sm leading-6 text-secondary-foreground">
                A bilingual WhatsApp agent that answers dealer stock and pricing questions, checks the ERP live, and escalates high-value orders to sales.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  WhatsApp
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  ERP
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  Bilingual
                </span>
              </div>
            </motion.article>
            <motion.article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="client-result-1" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-border bg-muted px-3 py-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
                  Logistics
                </span>
                <ArrowUpRight size={17} className="text-secondary-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
              </div>
              <div className="mb-5 flex items-start gap-3 rounded-2xl bg-primary/[0.07] p-4">
                <TrendingUp size={18} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                <p className="font-heading text-base font-semibold leading-6 text-foreground">
                  6 hours of manual reporting removed each day
                </p>
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                Live operations dashboard
              </h3>
              <p className="mb-6 flex-grow text-sm leading-6 text-secondary-foreground">
                One screen for shipments, delays, and driver performance, replacing four spreadsheets updated by hand every morning.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  Dashboards
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  Data
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  Automation
                </span>
              </div>
            </motion.article>
            <motion.article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="client-result-2" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-border bg-muted px-3 py-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
                  Interior Design
                </span>
                <ArrowUpRight size={17} className="text-secondary-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
              </div>
              <div className="mb-5 flex items-start gap-3 rounded-2xl bg-primary/[0.07] p-4">
                <TrendingUp size={18} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                <p className="font-heading text-base font-semibold leading-6 text-foreground">
                  2.4x more qualified enquiries
                </p>
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                Marketing site rebuild
              </h3>
              <p className="mb-6 flex-grow text-sm leading-6 text-secondary-foreground">
                A fast, image-heavy portfolio site with a conversational enquiry form, structured data, and a 98 Lighthouse performance score.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  Website
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  SEO
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  Performance
                </span>
              </div>
            </motion.article>
            <motion.article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="client-result-3" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-border bg-muted px-3 py-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
                  Healthcare
                </span>
                <ArrowUpRight size={17} className="text-secondary-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
              </div>
              <div className="mb-5 flex items-start gap-3 rounded-2xl bg-primary/[0.07] p-4">
                <TrendingUp size={18} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                <p className="font-heading text-base font-semibold leading-6 text-foreground">
                  92% of invoices processed without a person
                </p>
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                Invoice processing agent
              </h3>
              <p className="mb-6 flex-grow text-sm leading-6 text-secondary-foreground">
                Reads supplier invoices from email, extracts line items, matches them to purchase orders, and files exceptions for a human to review.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  Document AI
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  Finance
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  n8n
                </span>
              </div>
            </motion.article>
            <motion.article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="client-result-4" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-border bg-muted px-3 py-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
                  Real Estate
                </span>
                <ArrowUpRight size={17} className="text-secondary-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
              </div>
              <div className="mb-5 flex items-start gap-3 rounded-2xl bg-primary/[0.07] p-4">
                <TrendingUp size={18} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                <p className="font-heading text-base font-semibold leading-6 text-foreground">
                  First response time down to under 60 seconds
                </p>
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                Property lead router
              </h3>
              <p className="mb-6 flex-grow text-sm leading-6 text-secondary-foreground">
                Captures leads from the site, portals, and Instagram, scores them, and assigns each one to the right agent within a minute.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  CRM
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  Lead scoring
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  Instagram
                </span>
              </div>
            </motion.article>
            <motion.article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="client-result-5" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-border bg-muted px-3 py-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
                  Manufacturing
                </span>
                <ArrowUpRight size={17} className="text-secondary-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
              </div>
              <div className="mb-5 flex items-start gap-3 rounded-2xl bg-primary/[0.07] p-4">
                <TrendingUp size={18} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                <p className="font-heading text-base font-semibold leading-6 text-foreground">
                  Inspection paperwork eliminated entirely
                </p>
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                Quality inspection portal
              </h3>
              <p className="mb-6 flex-grow text-sm leading-6 text-secondary-foreground">
                A tablet-friendly portal for shop-floor inspections with photo capture, offline support, and automatic defect reporting.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  Custom software
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  Offline-first
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.66rem] text-secondary-foreground">
                  Reporting
                </span>
              </div>
            </motion.article>
          </div>
          <motion.p className="mt-8 rounded-2xl border border-primary/25 bg-primary/5 px-5 py-4 text-sm leading-6 text-secondary-foreground" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <span className="font-semibold text-foreground">
              Client privacy note:
            </span>
            client names are published only with permission, and we never expose live systems, credentials, or confidential processes.
            <Link href="/contact" className="font-semibold text-primary hover:underline">
              Ask us for references
            </Link>
            if you would like to speak to someone directly.
          </motion.p>
        </div>
      </section>
  );
}
