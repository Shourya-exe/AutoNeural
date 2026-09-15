import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ContactForm } from '@/components/ContactForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { ArrowRight, ArrowUpRight, BadgeCheck, Blocks, Boxes, ChartLine, Check, ChevronRight, Cpu, FilePenLine, Gauge, GitBranch, Globe, Headphones, KeyRound, Layers, LayoutTemplate, Lock, Mail, MapPin, MessageCircle, MessageCircleQuestionMark, MonitorSmartphone, Phone, ReceiptIndianRupee, Search, ShieldCheck, ShoppingCart, Sparkles, Store, Timer, TrendingUp, Undo2, UserCheck, Users, Wrench, Zap } from 'lucide-react';

export function WebsiteDevelopmentContent() {
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
                Website Development
              </span>
            </motion.nav>
            <motion.p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              Website Development
            </motion.p>
            <motion.h1 className="mb-6 max-w-4xl font-serif text-[clamp(2.9rem,6.2vw,5.6rem)] font-semibold leading-[0.92] text-foreground" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              Websites that load fast,
              <span className="block text-primary">
                read well, and actually sell.
              </span>
            </motion.h1>
            <motion.p className="mb-9 max-w-2xl text-lg leading-8 text-secondary-foreground" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              Design, build, and launch — from a five-page business site to a full customer portal. Every build ships fast on mobile, ranks properly, and gives your team the controls to run it without calling a developer.
            </motion.p>
            <motion.div className="flex flex-col flex-wrap gap-3 sm:flex-row" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <Link data-testid="webdev-cta-primary" href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-clay transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:shadow-clay-hover md:text-base">
                Start your website
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a href="#packages" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:bg-card md:text-base">
                See packages
              </a>
            </motion.div>
            <motion.div className="mt-14 overflow-hidden rounded-3xl border border-border bg-card shadow-clay" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="flex items-center gap-3 border-b border-border bg-muted/70 px-5 py-3.5">
                <span className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#F5544C]" />
                  <span className="h-3 w-3 rounded-full bg-[#F5BE4F]" />
                  <span className="h-3 w-3 rounded-full bg-[#4FC46B]" />
                </span>
                <span className="mx-auto flex max-w-sm flex-1 items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs text-secondary-foreground">
                  <Lock size={11} className="text-[#4FC46B]" aria-hidden="true" />
                  yourbusiness.com
                </span>
                <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.14em] text-secondary-foreground sm:inline">
                  98 / 100
                </span>
              </div>
              <div className="grid gap-6 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-9">
                <div>
                  <div className="mb-4 h-2.5 w-24 rounded-full bg-primary/40" />
                  <div className="mb-3 h-7 w-full rounded-lg bg-foreground/[0.09]" />
                  <div className="mb-3 h-7 w-4/5 rounded-lg bg-foreground/[0.09]" />
                  <div className="mb-6 h-4 w-3/5 rounded-lg bg-foreground/[0.05]" />
                  <div className="flex gap-3">
                    <div className="h-10 w-32 rounded-full bg-foreground" />
                    <div className="h-10 w-28 rounded-full border border-border bg-background" />
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-border bg-background/70 p-3">
                      <Timer size={15} className="mb-2 text-primary" aria-hidden="true" />
                      <p className="font-heading text-base font-bold text-foreground">
                        &lt;1s
                      </p>
                      <p className="text-[0.62rem] leading-4 text-secondary-foreground">
                        Typical load time
                      </p>
                    </div>
                    <div className="rounded-xl border border-border bg-background/70 p-3">
                      <Gauge size={15} className="mb-2 text-primary" aria-hidden="true" />
                      <p className="font-heading text-base font-bold text-foreground">
                        90+
                      </p>
                      <p className="text-[0.62rem] leading-4 text-secondary-foreground">
                        Lighthouse on mobile
                      </p>
                    </div>
                    <div className="rounded-xl border border-border bg-background/70 p-3">
                      <Cpu size={15} className="mb-2 text-primary" aria-hidden="true" />
                      <p className="font-heading text-base font-bold text-foreground">
                        2–6 wk
                      </p>
                      <p className="text-[0.62rem] leading-4 text-secondary-foreground">
                        Design to launch
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(150deg,_rgba(107,30,50,0.12),_rgba(139,48,72,0.08))] border border-[rgba(107,30,50,0.12)] p-5">
                  <div className="mb-4 h-3 w-20 rounded-full bg-foreground/15" />
                  <div className="space-y-3">
                    <motion.div className="h-9 rounded-lg border border-border/60 bg-card/80" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                    </motion.div>
                    <motion.div className="h-9 rounded-lg border border-border/60 bg-card/80" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                    </motion.div>
                    <motion.div className="h-9 rounded-lg border border-border/60 bg-card/80" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                    </motion.div>
                    <motion.div className="h-9 rounded-lg border border-border/60 bg-card/80" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                    </motion.div>
                  </div>
                  <motion.div className="mt-5 flex items-center gap-2 rounded-xl bg-foreground px-4 py-3 text-background" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                    <Sparkles size={15} className="text-primary" aria-hidden="true" />
                    <span className="text-xs">
                      Assistant: “Want a quote for this?”
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="border-y border-border bg-muted/50 py-24 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-14 max-w-3xl">
              <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                What we build
              </motion.p>
              <motion.h2 className="mb-5 font-serif text-5xl font-semibold leading-[0.96] text-foreground md:text-6xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Six kinds of build, one standard.
              </motion.h2>
              <motion.p className="text-lg leading-8 text-secondary-foreground" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Whether it is a brochure site or a logged-in portal, the same rules apply: fast, clear, measurable, and yours to control.
              </motion.p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <motion.div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="webdev-build-0" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Globe size={22} aria-hidden="true" />
                </span>
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                  Business &amp; marketing sites
                </h3>
                <p className="mb-6 flex-grow text-sm leading-6 text-secondary-foreground">
                  The site that convinces a buyer you are worth talking to — fast, clear, and built to convert.
                </p>
                <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Custom design
                  </span>
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    CMS editing
                  </span>
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Lead capture
                  </span>
                </div>
              </motion.div>
              <motion.div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="webdev-build-1" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <LayoutTemplate size={22} aria-hidden="true" />
                </span>
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                  Landing pages &amp; campaigns
                </h3>
                <p className="mb-6 flex-grow text-sm leading-6 text-secondary-foreground">
                  Single-purpose pages built around one offer, wired to your ads and analytics from day one.
                </p>
                <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    A/B ready
                  </span>
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Conversion tracking
                  </span>
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Fast turnaround
                  </span>
                </div>
              </motion.div>
              <motion.div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="webdev-build-2" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShoppingCart size={22} aria-hidden="true" />
                </span>
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                  E-commerce storefronts
                </h3>
                <p className="mb-6 flex-grow text-sm leading-6 text-secondary-foreground">
                  Shopify, WooCommerce, or a custom headless store with the checkout flow your margins need.
                </p>
                <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Payments
                  </span>
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Inventory sync
                  </span>
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Abandoned cart flows
                  </span>
                </div>
              </motion.div>
              <motion.div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="webdev-build-3" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Layers size={22} aria-hidden="true" />
                </span>
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                  Web applications
                </h3>
                <p className="mb-6 flex-grow text-sm leading-6 text-secondary-foreground">
                  Dashboards, portals, and internal tools with real logins, roles, and data behind them.
                </p>
                <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Auth &amp; roles
                  </span>
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Live data
                  </span>
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Admin panels
                  </span>
                </div>
              </motion.div>
              <motion.div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="webdev-build-4" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Users size={22} aria-hidden="true" />
                </span>
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                  Customer &amp; partner portals
                </h3>
                <p className="mb-6 flex-grow text-sm leading-6 text-secondary-foreground">
                  A private area where clients track orders, download documents, and raise requests themselves.
                </p>
                <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Self-service
                  </span>
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Document vault
                  </span>
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Ticketing
                  </span>
                </div>
              </motion.div>
              <motion.div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="webdev-build-5" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Wrench size={22} aria-hidden="true" />
                </span>
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                  Rescue &amp; redesign
                </h3>
                <p className="mb-6 flex-grow text-sm leading-6 text-secondary-foreground">
                  Slow, dated, or broken site? We audit it, keep the pages that earn traffic, and rebuild the rest.
                </p>
                <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    SEO-safe migration
                  </span>
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Speed fixes
                  </span>
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Redirect mapping
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="bg-background py-24 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div>
                <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  Inside every build
                </motion.p>
                <motion.h2 className="font-serif text-5xl font-semibold leading-[0.96] text-foreground md:text-6xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  The parts you cannot see
                  <span className="block text-primary">
                    are the parts that pay off.
                  </span>
                </motion.h2>
              </div>
              <motion.p className="max-w-xl text-lg leading-8 text-secondary-foreground" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                A pretty site that loads in four seconds loses money quietly. These six things are standard on every project, not upsells.
              </motion.p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div className="group rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Zap className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  Loads in under a second
                </h3>
                <p className="text-sm leading-6 text-secondary-foreground">
                  Code splitting, image optimisation, edge caching, and zero blocking scripts. Speed is a design constraint, not a cleanup task.
                </p>
              </motion.div>
              <motion.div className="group rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <MonitorSmartphone className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  Designed mobile-first
                </h3>
                <p className="text-sm leading-6 text-secondary-foreground">
                  Most of your visitors arrive on a phone on a mid-range connection. That is the device we design for first.
                </p>
              </motion.div>
              <motion.div className="group rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Search className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  Search-ready at launch
                </h3>
                <p className="text-sm leading-6 text-secondary-foreground">
                  Semantic markup, structured data, sitemaps, canonical tags, Open Graph cards, and analytics wired up before go-live.
                </p>
              </motion.div>
              <motion.div className="group rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Blocks className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  Your team edits the content
                </h3>
                <p className="text-sm leading-6 text-secondary-foreground">
                  A CMS or admin panel for text, images, blog posts, and case studies. No developer in the loop for a price change.
                </p>
              </motion.div>
              <motion.div className="group rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Sparkles className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  AI built in, not bolted on
                </h3>
                <p className="text-sm leading-6 text-secondary-foreground">
                  An assistant that answers visitor questions and books calls, using the same knowledge base as your other channels.
                </p>
              </motion.div>
              <motion.div className="group rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Lock className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  Secure and accessible
                </h3>
                <p className="text-sm leading-6 text-secondary-foreground">
                  HTTPS, security headers, spam-protected forms, keyboard navigation, and WCAG AA contrast throughout.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden bg-foreground py-24 text-background md:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px]" />
          <div className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
              <div>
                <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  Performance we hold ourselves to
                </motion.p>
                <motion.h2 className="mb-6 font-serif text-5xl font-semibold leading-[0.96] text-white md:text-6xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  We do not launch a slow website.
                </motion.h2>
                <motion.p className="mb-8 max-w-xl text-lg leading-8 text-gray-400" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  Before go-live, every site is measured on a throttled mobile connection. If it does not clear our bar, it does not ship — and you get the report either way.
                </motion.p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm leading-6 text-gray-300">
                    <Check size={17} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    Real-device testing, not just desktop Chrome
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-gray-300">
                    <Check size={17} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    Core Web Vitals monitored after launch, not just before
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-gray-300">
                    <Check size={17} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    A written performance report handed over with the site
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                <motion.div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <div className="relative mb-4 h-28 w-28">
                    <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="7">
                      </circle>
                      <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--primary))" strokeWidth="7" strokeLinecap="round" strokeDasharray="263.89378290154264" strokeDashoffset="263.89378290154264">
                      </circle>
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center font-heading text-2xl font-bold text-white">
                      0
                    </span>
                  </div>
                  <p className="font-heading text-sm font-semibold text-white">
                    Performance
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Lighthouse, mobile
                  </p>
                </motion.div>
                <motion.div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <div className="relative mb-4 h-28 w-28">
                    <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="7">
                      </circle>
                      <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--primary))" strokeWidth="7" strokeLinecap="round" strokeDasharray="263.89378290154264" strokeDashoffset="263.89378290154264">
                      </circle>
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center font-heading text-2xl font-bold text-white">
                      0
                    </span>
                  </div>
                  <p className="font-heading text-sm font-semibold text-white">
                    Accessibility
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    WCAG AA baseline
                  </p>
                </motion.div>
                <motion.div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <div className="relative mb-4 h-28 w-28">
                    <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="7">
                      </circle>
                      <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--primary))" strokeWidth="7" strokeLinecap="round" strokeDasharray="263.89378290154264" strokeDashoffset="263.89378290154264">
                      </circle>
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center font-heading text-2xl font-bold text-white">
                      0
                    </span>
                  </div>
                  <p className="font-heading text-sm font-semibold text-white">
                    Best practices
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Security &amp; modern APIs
                  </p>
                </motion.div>
                <motion.div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <div className="relative mb-4 h-28 w-28">
                    <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="7">
                      </circle>
                      <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--primary))" strokeWidth="7" strokeLinecap="round" strokeDasharray="263.89378290154264" strokeDashoffset="263.89378290154264">
                      </circle>
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center font-heading text-2xl font-bold text-white">
                      0
                    </span>
                  </div>
                  <p className="font-heading text-sm font-semibold text-white">
                    SEO
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Crawlable &amp; structured
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-y border-border bg-muted/50 py-24 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-14 max-w-3xl">
              <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                How it runs
              </motion.p>
              <motion.h2 className="font-serif text-5xl font-semibold leading-[0.96] text-foreground md:text-6xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Five stages. No surprises.
              </motion.h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
              <motion.div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary font-mono text-xs font-bold text-white">
                  1
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Discover
                </h3>
                <p className="mb-3 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-primary">
                  Days 1–3
                </p>
                <p className="text-sm leading-6 text-secondary-foreground">
                  We learn what the site has to achieve, who it speaks to, and what your competitors already own.
                </p>
              </motion.div>
              <motion.div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary font-mono text-xs font-bold text-white">
                  2
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Design
                </h3>
                <p className="mb-3 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-primary">
                  Week 1–2
                </p>
                <p className="text-sm leading-6 text-secondary-foreground">
                  Wireframes, then a full visual design of every key page. You approve the look before a line of code.
                </p>
              </motion.div>
              <motion.div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary font-mono text-xs font-bold text-white">
                  3
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Build
                </h3>
                <p className="mb-3 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-primary">
                  Week 2–4
                </p>
                <p className="text-sm leading-6 text-secondary-foreground">
                  Pixel-accurate front end, CMS wiring, forms, integrations, and a staging link you can watch grow daily.
                </p>
              </motion.div>
              <motion.div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary font-mono text-xs font-bold text-white">
                  4
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Launch
                </h3>
                <p className="mb-3 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-primary">
                  Week 4–5
                </p>
                <p className="text-sm leading-6 text-secondary-foreground">
                  Performance pass, SEO checks, redirects, analytics, and a supervised go-live with rollback ready.
                </p>
              </motion.div>
              <motion.div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary font-mono text-xs font-bold text-white">
                  5
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Grow
                </h3>
                <p className="mb-3 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-primary">
                  Ongoing
                </p>
                <p className="text-sm leading-6 text-secondary-foreground">
                  Monthly reporting, content support, speed monitoring, and iterative improvements based on real traffic.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="bg-background py-20">
          <div className="container mx-auto px-6 md:px-12">
            <motion.p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-secondary-foreground" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              The stack we build on
            </motion.p>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
              <motion.div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-sm" title="React" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-110" height={30} width={30} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(97, 218, 251)' }}>
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z">
                  </path>
                </svg>
                <span className="text-xs font-medium text-secondary-foreground">
                  React
                </span>
              </motion.div>
              <motion.div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-sm" title="Next.js" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-110" height={30} width={30} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(31, 31, 31)' }}>
                  <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z">
                  </path>
                </svg>
                <span className="text-xs font-medium text-secondary-foreground">
                  Next.js
                </span>
              </motion.div>
              <motion.div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-sm" title="TypeScript" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-110" height={30} width={30} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(49, 120, 198)' }}>
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z">
                  </path>
                </svg>
                <span className="text-xs font-medium text-secondary-foreground">
                  TypeScript
                </span>
              </motion.div>
              <motion.div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-sm" title="Tailwind" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-110" height={30} width={30} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(6, 182, 212)' }}>
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z">
                  </path>
                </svg>
                <span className="text-xs font-medium text-secondary-foreground">
                  Tailwind
                </span>
              </motion.div>
              <motion.div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-sm" title="Vite" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-110" height={30} width={30} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(100, 108, 255)' }}>
                  <path d="M13.056 23.238a.57.57 0 0 1-1.02-.355v-5.202c0-.63-.512-1.143-1.144-1.143H5.148a.57.57 0 0 1-.464-.903l3.777-5.29c.54-.753 0-1.804-.93-1.804H.57a.574.574 0 0 1-.543-.746.6.6 0 0 1 .08-.157L5.008.78a.57.57 0 0 1 .467-.24h14.589a.57.57 0 0 1 .466.903l-3.778 5.29c-.54.755 0 1.806.93 1.806h5.745c.238 0 .424.138.513.322a.56.56 0 0 1-.063.603z">
                  </path>
                </svg>
                <span className="text-xs font-medium text-secondary-foreground">
                  Vite
                </span>
              </motion.div>
              <motion.div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-sm" title="Motion" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-110" height={30} width={30} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(0, 85, 255)' }}>
                  <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z">
                  </path>
                </svg>
                <span className="text-xs font-medium text-secondary-foreground">
                  Motion
                </span>
              </motion.div>
              <motion.div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-sm" title="Sanity CMS" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-110" height={30} width={30} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(240, 62, 47)' }}>
                  <path d="m23.327 15.205-.893-1.555-4.321 2.632 4.799-6.11.726-.426-.179-.27.33-.421-1.515-1.261-.693.883-13.992 8.186 5.173-6.221 9.636-5.282-.915-1.769-5.248 2.876 2.584-3.106-1.481-1.305-5.816 6.994-5.777 3.168 4.423-5.847 2.771-1.442-.88-1.789-8.075 4.203L6.186 4.43 4.648 3.198 0 9.349l.072.058.868 1.768 5.153-2.683-4.696 6.207.77.617.458.885 5.425-2.974-5.974 7.185 1.481 1.304.297-.358 14.411-8.459-4.785 6.094.078.065-.007.005.992 1.726 6.364-3.877-2.451 3.954 1.642 1.077L24 15.648z">
                  </path>
                </svg>
                <span className="text-xs font-medium text-secondary-foreground">
                  Sanity CMS
                </span>
              </motion.div>
              <motion.div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-sm" title="WordPress" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-110" height={30} width={30} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(33, 117, 155)' }}>
                  <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0">
                  </path>
                </svg>
                <span className="text-xs font-medium text-secondary-foreground">
                  WordPress
                </span>
              </motion.div>
              <motion.div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-sm" title="Stripe" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-110" height={30} width={30} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(99, 91, 255)' }}>
                  <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z">
                  </path>
                </svg>
                <span className="text-xs font-medium text-secondary-foreground">
                  Stripe
                </span>
              </motion.div>
              <motion.div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-sm" title="PostgreSQL" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-110" height={30} width={30} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(65, 105, 225)' }}>
                  <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z">
                  </path>
                </svg>
                <span className="text-xs font-medium text-secondary-foreground">
                  PostgreSQL
                </span>
              </motion.div>
              <motion.div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-sm" title="Vercel" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-110" height={30} width={30} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(31, 31, 31)' }}>
                  <path d="m12 1.608 12 20.784H0Z">
                  </path>
                </svg>
                <span className="text-xs font-medium text-secondary-foreground">
                  Vercel
                </span>
              </motion.div>
              <motion.div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-sm" title="Cloudflare" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-110" height={30} width={30} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(243, 128, 32)' }}>
                  <path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727">
                  </path>
                </svg>
                <span className="text-xs font-medium text-secondary-foreground">
                  Cloudflare
                </span>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="packages" className="border-y border-border bg-muted/50 py-24 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-14 max-w-3xl">
              <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Packages
              </motion.p>
              <motion.h2 className="mb-5 font-serif text-5xl font-semibold leading-[0.96] text-foreground md:text-6xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Pick the scope. We quote a fixed price.
              </motion.h2>
              <motion.p className="text-lg leading-8 text-secondary-foreground" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Every package is quoted as a fixed number after a short call, so you know the cost before anything starts. Hosting and domain are billed at cost, in your own accounts.
              </motion.p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <motion.div className="relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 border-border bg-card shadow-sm hover:border-primary/30 hover:shadow-clay" data-testid="webdev-package-0" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Store size={22} aria-hidden="true" />
                </span>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Launch
                </h3>
                <p className="mb-5 text-sm text-secondary-foreground">
                  For a first professional presence
                </p>
                <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] border border-border bg-muted text-secondary-foreground">
                  <Timer size={13} aria-hidden="true" />
                  2–3 weeks
                </p>
                <ul className="mb-8 flex-grow space-y-3">
                  <li className="flex items-start gap-3 text-sm leading-6 text-secondary-foreground">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    Up to 6 custom-designed pages
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-secondary-foreground">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    Mobile-first responsive build
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-secondary-foreground">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    Contact form with phone capture
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-secondary-foreground">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    Basic SEO setup + sitemap
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-secondary-foreground">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    Analytics and search console
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-secondary-foreground">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    30 days of post-launch support
                  </li>
                </ul>
                <Link href="/contact" className="mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 md:text-base bg-foreground text-background hover:bg-accent">
                  Get a quote
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </motion.div>
              <motion.div className="relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 border-primary/40 bg-foreground text-background shadow-clay" data-testid="webdev-package-1" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3.5 py-1.5 font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white">
                  Most chosen
                </span>
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <ChartLine size={22} aria-hidden="true" />
                </span>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Growth
                </h3>
                <p className="mb-5 text-sm text-gray-400">
                  For businesses that sell through the site
                </p>
                <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] bg-white/10 text-primary">
                  <Timer size={13} aria-hidden="true" />
                  4–6 weeks
                </p>
                <ul className="mb-8 flex-grow space-y-3">
                  <li className="flex items-start gap-3 text-sm leading-6 text-gray-300">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    Everything in Launch
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-gray-300">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    Up to 15 pages + blog / case studies
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-gray-300">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    CMS so your team edits everything
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-gray-300">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    AI website assistant + lead routing
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-gray-300">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    CRM, WhatsApp, and payment integrations
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-gray-300">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    Advanced SEO, schema, and speed tuning
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-gray-300">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    90 days of support and reporting
                  </li>
                </ul>
                <Link href="/contact" className="mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 md:text-base bg-primary text-white hover:bg-primary/90">
                  Get a quote
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </motion.div>
              <motion.div className="relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 border-border bg-card shadow-sm hover:border-primary/30 hover:shadow-clay" data-testid="webdev-package-2" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Boxes size={22} aria-hidden="true" />
                </span>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Custom
                </h3>
                <p className="mb-5 text-sm text-secondary-foreground">
                  For portals, stores, and web apps
                </p>
                <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] border border-border bg-muted text-secondary-foreground">
                  <Timer size={13} aria-hidden="true" />
                  Scoped per project
                </p>
                <ul className="mb-8 flex-grow space-y-3">
                  <li className="flex items-start gap-3 text-sm leading-6 text-secondary-foreground">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    Everything in Growth
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-secondary-foreground">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    Logins, roles, and permissions
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-secondary-foreground">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    Custom database and API layer
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-secondary-foreground">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    E-commerce or booking engine
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-secondary-foreground">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    Third-party system integrations
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-secondary-foreground">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    Dedicated staging and CI pipeline
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-6 text-secondary-foreground">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                    Ongoing retainer available
                  </li>
                </ul>
                <Link href="/contact" className="mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 md:text-base bg-foreground text-background hover:bg-accent">
                  Get a quote
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="results" className="bg-background py-24 md:py-28" data-testid="client-results-section">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div>
                <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  Website results
                </motion.p>
                <motion.h2 className="font-serif text-5xl font-semibold leading-[0.96] text-foreground md:text-6xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  Sites we shipped, and what moved.
                </motion.h2>
              </div>
              <motion.p className="max-w-xl text-lg leading-8 text-secondary-foreground" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                A website is worth what it earns. These are the numbers our clients tracked after launch.
              </motion.p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <motion.article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay" data-testid="client-result-0" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
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
                  Website questions, answered plainly.
                </motion.h2>
                <motion.p className="mb-8 max-w-md text-base leading-7 text-secondary-foreground" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  The things every business asks us before a website project starts.
                </motion.p>
                <motion.div  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background shadow-clay transition-all duration-300 hover:-translate-y-1 hover:bg-accent md:text-base">
                    <MessageCircleQuestionMark size={17} aria-hidden="true" />
                    Ask your question
                  </Link>
                </motion.div>
              </div>
              <FaqAccordion group="website" />
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
