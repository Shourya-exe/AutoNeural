import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ContactForm } from '@/components/ContactForm';
import { ArrowRight, ArrowUpRight, BadgeCheck, Building2, Car, ChevronRight, Factory, FilePenLine, GitBranch, GraduationCap, HardHat, Headphones, HeartPulse, House, KeyRound, Landmark, Lock, Mail, MapPin, MessageCircle, Phone, Quote, ReceiptIndianRupee, ShieldCheck, Ship, ShoppingBag, Star, TrendingUp, Truck, Undo2, UserCheck, Utensils } from 'lucide-react';

export function IndustriesContent() {
  return (
      <main className="flex-grow">
        <section className="relative overflow-hidden bg-background pb-16 pt-32 md:pb-20 md:pt-40">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(238,221,196,0.72)_0%,_rgba(250,247,239,0.94)_52%,_rgba(244,235,219,0.86)_100%)]" />
          <div className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-primary/[0.09] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-background to-transparent" />
          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <motion.nav className="mb-8 flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-secondary-foreground" aria-label="Breadcrumb" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <ChevronRight size={13} aria-hidden="true" />
              <span className="text-foreground">
                Industries
              </span>
            </motion.nav>
            <motion.p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              Industries
            </motion.p>
            <motion.h1 className="mb-6 max-w-4xl font-serif text-[clamp(2.9rem,6.2vw,5.6rem)] font-semibold leading-[0.92] text-foreground" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              We learn your industry
              <span className="block text-primary">
                before we write any code.
              </span>
            </motion.h1>
            <motion.p className="mb-9 max-w-2xl text-lg leading-8 text-secondary-foreground" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              Twelve sectors, one method: understand how the work actually happens, find where time and money leak, and build the smallest system that closes the gap.
            </motion.p>
            <motion.div className="flex flex-col flex-wrap gap-3 sm:flex-row" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-clay transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:shadow-clay-hover md:text-base">
                Talk about your sector
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </section>
        <section id="industries" className="py-24 bg-background" data-testid="industries-section">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-16">
              <motion.h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Industries We Serve
              </motion.h2>
              <div className="w-20 h-1 bg-primary rounded-full" style={{ width: '0px' }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              <motion.div className="group p-6 bg-muted rounded-2xl border border-transparent hover:border-primary/30 hover:bg-white hover:shadow-clay hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="industry-card-0" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <HeartPulse size={32} className="text-secondary-foreground group-hover:text-primary transition-colors mb-4" aria-hidden="true" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Healthcare
                </h3>
                <p className="text-sm text-secondary-foreground">
                  Appointments, records, follow-ups
                </p>
              </motion.div>
              <motion.div className="group p-6 bg-muted rounded-2xl border border-transparent hover:border-primary/30 hover:bg-white hover:shadow-clay hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="industry-card-1" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Factory size={32} className="text-secondary-foreground group-hover:text-primary transition-colors mb-4" aria-hidden="true" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Manufacturing
                </h3>
                <p className="text-sm text-secondary-foreground">
                  Quality checks and factory reports
                </p>
              </motion.div>
              <motion.div className="group p-6 bg-muted rounded-2xl border border-transparent hover:border-primary/30 hover:bg-white hover:shadow-clay hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="industry-card-2" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <ShoppingBag size={32} className="text-secondary-foreground group-hover:text-primary transition-colors mb-4" aria-hidden="true" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Retail
                </h3>
                <p className="text-sm text-secondary-foreground">
                  Orders, stock, customer support
                </p>
              </motion.div>
              <motion.div className="group p-6 bg-muted rounded-2xl border border-transparent hover:border-primary/30 hover:bg-white hover:shadow-clay hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="industry-card-3" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Landmark size={32} className="text-secondary-foreground group-hover:text-primary transition-colors mb-4" aria-hidden="true" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Finance
                </h3>
                <p className="text-sm text-secondary-foreground">
                  Invoices, approvals, risk checks
                </p>
              </motion.div>
              <motion.div className="group p-6 bg-muted rounded-2xl border border-transparent hover:border-primary/30 hover:bg-white hover:shadow-clay hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="industry-card-4" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <HardHat size={32} className="text-secondary-foreground group-hover:text-primary transition-colors mb-4" aria-hidden="true" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Construction
                </h3>
                <p className="text-sm text-secondary-foreground">
                  Site updates and safety records
                </p>
              </motion.div>
              <motion.div className="group p-6 bg-muted rounded-2xl border border-transparent hover:border-primary/30 hover:bg-white hover:shadow-clay hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="industry-card-5" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Truck size={32} className="text-secondary-foreground group-hover:text-primary transition-colors mb-4" aria-hidden="true" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Logistics
                </h3>
                <p className="text-sm text-secondary-foreground">
                  Routes, shipments, delivery tracking
                </p>
              </motion.div>
              <motion.div className="group p-6 bg-muted rounded-2xl border border-transparent hover:border-primary/30 hover:bg-white hover:shadow-clay hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="industry-card-6" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Utensils size={32} className="text-secondary-foreground group-hover:text-primary transition-colors mb-4" aria-hidden="true" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Hospitality
                </h3>
                <p className="text-sm text-secondary-foreground">
                  Bookings, pricing, guest support
                </p>
              </motion.div>
              <motion.div className="group p-6 bg-muted rounded-2xl border border-transparent hover:border-primary/30 hover:bg-white hover:shadow-clay hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="industry-card-7" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <GraduationCap size={32} className="text-secondary-foreground group-hover:text-primary transition-colors mb-4" aria-hidden="true" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Education
                </h3>
                <p className="text-sm text-secondary-foreground">
                  Student support and admin work
                </p>
              </motion.div>
              <motion.div className="group p-6 bg-muted rounded-2xl border border-transparent hover:border-primary/30 hover:bg-white hover:shadow-clay hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="industry-card-8" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Building2 size={32} className="lucide-building-2 text-secondary-foreground group-hover:text-primary transition-colors mb-4" aria-hidden="true" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Government
                </h3>
                <p className="text-sm text-secondary-foreground">
                  Forms, files, public requests
                </p>
              </motion.div>
              <motion.div className="group p-6 bg-muted rounded-2xl border border-transparent hover:border-primary/30 hover:bg-white hover:shadow-clay hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="industry-card-9" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Ship size={32} className="text-secondary-foreground group-hover:text-primary transition-colors mb-4" aria-hidden="true" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Seafood Export
                </h3>
                <p className="text-sm text-secondary-foreground">
                  Buyers, pricing, export documents
                </p>
              </motion.div>
              <motion.div className="group p-6 bg-muted rounded-2xl border border-transparent hover:border-primary/30 hover:bg-white hover:shadow-clay hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="industry-card-10" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <House size={32} className="text-secondary-foreground group-hover:text-primary transition-colors mb-4" aria-hidden="true" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Real Estate
                </h3>
                <p className="text-sm text-secondary-foreground">
                  Leads, listings, property reports
                </p>
              </motion.div>
              <motion.div className="group p-6 bg-muted rounded-2xl border border-transparent hover:border-primary/30 hover:bg-white hover:shadow-clay hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="industry-card-11" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Car size={32} className="text-secondary-foreground group-hover:text-primary transition-colors mb-4" aria-hidden="true" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Automotive
                </h3>
                <p className="text-sm text-secondary-foreground">
                  Production, service, customer updates
                </p>
              </motion.div>
            </div>
          </div>
        </section>
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
        <section className="py-24 bg-muted border-y border-border" data-testid="case-studies-section">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-16 text-center">
              <motion.h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Proven Results
              </motion.h2>
              <div className="w-20 h-1 bg-primary rounded-full mx-auto" style={{ width: '0px' }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div className="bg-white p-10 rounded-2xl shadow-sm border border-border hover:shadow-clay transition-all duration-300 flex flex-col h-full" data-testid="case-study-card-0" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="mb-8">
                  <span className="text-6xl font-heading font-bold text-primary block mb-2">
                    80%
                  </span>
                  <span className="text-lg font-medium text-foreground">
                    Reduction in Manual Work
                  </span>
                </div>
                <div className="mb-6 border-b border-border pb-6">
                  <span className="text-xs uppercase tracking-widest text-secondary-foreground font-semibold mb-2 block">
                    Project
                  </span>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    Healthcare Admin Assistant
                  </h3>
                </div>
                <div className="space-y-4 flex-grow">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-secondary-foreground font-semibold mb-1 block">
                      Challenge
                    </span>
                    <p className="text-sm text-secondary-foreground leading-relaxed">
                      Staff were spending too much time reading records, preparing notes, and organizing patient follow-ups.
                    </p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-secondary-foreground font-semibold mb-1 block">
                      Solution
                    </span>
                    <p className="text-sm text-foreground leading-relaxed font-medium">
                      We built a secure assistant that prepares summaries, organizes tasks, and helps staff move faster.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="bg-white p-10 rounded-2xl shadow-sm border border-border hover:shadow-clay transition-all duration-300 flex flex-col h-full" data-testid="case-study-card-1" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="mb-8">
                  <span className="text-6xl font-heading font-bold text-primary block mb-2">
                    5×
                  </span>
                  <span className="text-lg font-medium text-foreground">
                    Faster Processing
                  </span>
                </div>
                <div className="mb-6 border-b border-border pb-6">
                  <span className="text-xs uppercase tracking-widest text-secondary-foreground font-semibold mb-2 block">
                    Project
                  </span>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    Finance Paperwork Automation
                  </h3>
                </div>
                <div className="space-y-4 flex-grow">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-secondary-foreground font-semibold mb-1 block">
                      Challenge
                    </span>
                    <p className="text-sm text-secondary-foreground leading-relaxed">
                      Invoices and payment files were waiting in queues because every detail had to be checked by hand.
                    </p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-secondary-foreground font-semibold mb-1 block">
                      Solution
                    </span>
                    <p className="text-sm text-foreground leading-relaxed font-medium">
                      We built a tool that reads documents, checks key details, and sends files to the right person.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="bg-white p-10 rounded-2xl shadow-sm border border-border hover:shadow-clay transition-all duration-300 flex flex-col h-full" data-testid="case-study-card-2" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="mb-8">
                  <span className="text-6xl font-heading font-bold text-primary block mb-2">
                    92%
                  </span>
                  <span className="text-lg font-medium text-foreground">
                    Customer Satisfaction
                  </span>
                </div>
                <div className="mb-6 border-b border-border pb-6">
                  <span className="text-xs uppercase tracking-widest text-secondary-foreground font-semibold mb-2 block">
                    Project
                  </span>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    Enterprise CRM Automation
                  </h3>
                </div>
                <div className="space-y-4 flex-grow">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-secondary-foreground font-semibold mb-1 block">
                      Challenge
                    </span>
                    <p className="text-sm text-secondary-foreground leading-relaxed">
                      Sales teams were losing time updating customer records instead of speaking with prospects.
                    </p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-secondary-foreground font-semibold mb-1 block">
                      Solution
                    </span>
                    <p className="text-sm text-foreground leading-relaxed font-medium">
                      We automated updates, follow-ups, meeting notes, and reminders so the team could focus on selling.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
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
              <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-clay" data-testid="testimonial-card-0" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
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
              <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-clay" data-testid="testimonial-card-1" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
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
              <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-clay" data-testid="testimonial-card-2" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
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
              <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-clay" data-testid="testimonial-card-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
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
              <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-clay" data-testid="testimonial-card-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
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
              <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-clay" data-testid="testimonial-card-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
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
