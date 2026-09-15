import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ContactForm } from '@/components/ContactForm';
import { FaqAccordion } from '@/components/FaqAccordion';
import { ArrowRight, ArrowUpRight, BadgeCheck, Blocks, BookOpen, Bot, Brain, BrainCircuit, Calculator, ChartLine, Check, ChevronRight, ClipboardList, Cloud, Code, Cog, Cpu, Database, FilePenLine, FileText, GitBranch, Globe, Headphones, Image, KeyRound, Lightbulb, Lock, Mail, MapPin, MessageCircle, MessageCircleQuestionMark, MessageSquareQuote, Network, PenLine, Phone, PhoneCall, Plus, ReceiptIndianRupee, Rocket, ShieldCheck, Sparkles, Split, TrendingUp, Undo2, Unplug, UserCheck, WandSparkles, Workflow } from 'lucide-react';

export function ServicesContent() {
  return (
      <main className="flex-grow">
        <section className="relative overflow-hidden bg-background pb-16 pt-32 md:pb-20 md:pt-40">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(241,236,229,0.85)_0%,_rgba(248,245,240,0.96)_52%,_rgba(241,236,229,0.75)_100%)]" />
          <div className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-primary/[0.08] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-background to-transparent" />
          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <motion.nav className="mb-8 flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-secondary-foreground" aria-label="Breadcrumb" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <ChevronRight size={13} aria-hidden="true" />
              <span className="text-foreground">
                Services
              </span>
            </motion.nav>
            <motion.p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              Services
            </motion.p>
            <motion.h1 className="mb-6 max-w-4xl font-serif text-[clamp(2.9rem,6.2vw,5.6rem)] font-semibold leading-[0.92] text-foreground" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              Practical AI, automation,
              <span className="block text-primary">
                and software that earns its cost.
              </span>
            </motion.h1>
            <motion.p className="mb-9 max-w-2xl text-lg leading-8 text-secondary-foreground" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              We start from the work that is slowing your team down — not from a product we are trying to sell. Then we build the smallest thing that fixes it, and grow from there.
            </motion.p>
            <motion.div className="flex flex-col flex-wrap gap-3 sm:flex-row" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-clay transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:shadow-clay-hover md:text-base">
                Book a discovery call
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link href="/website-development" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:bg-card md:text-base">
                Website development
              </Link>
            </motion.div>
          </div>
        </section>
        <section id="services" className="py-24 bg-background" data-testid="services-section">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-16">
              <motion.h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                What We Can Help With
              </motion.h2>
              <div className="w-20 h-1 bg-primary rounded-full" style={{ width: '0px' }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              <motion.div data-testid="service-card-0" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="group block rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-clay border-border bg-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-muted text-primary group-hover:bg-primary/10">
                    <Lightbulb aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 flex items-center gap-2 font-heading text-xl font-semibold text-foreground">
                    AI Planning
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary-foreground">
                    We find where AI can save time and money in your business.
                  </p>
                </div>
              </motion.div>
              <motion.div data-testid="service-card-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Link href="/ai-chatbots" className="group block rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-clay border-primary/30 bg-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-primary/12 text-primary">
                    <Bot aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 flex items-center gap-2 font-heading text-xl font-semibold text-foreground">
                    Custom AI Agents
                    <ArrowUpRight size={17} className="text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary-foreground">
                    Agents built to your requirements that answer, decide, and take action in your systems.
                  </p>
                </Link>
              </motion.div>
              <motion.div data-testid="service-card-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Link href="/aivora" className="group block rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-clay border-primary/30 bg-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-primary/12 text-primary">
                    <PhoneCall aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 flex items-center gap-2 font-heading text-xl font-semibold text-foreground">
                    Aivora — AI Calling Agent
                    <ArrowUpRight size={17} className="text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary-foreground">
                    Our own product: an AI agent that answers and places business calls, qualifies leads, books appointments, and keeps the CRM current.
                  </p>
                </Link>
              </motion.div>
              <motion.div data-testid="service-card-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Link href="/ai-chatbots" className="group block rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-clay border-primary/30 bg-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-primary/12 text-primary">
                    <Sparkles aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 flex items-center gap-2 font-heading text-xl font-semibold text-foreground">
                    Smart Chatbots
                    <ArrowUpRight size={17} className="text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary-foreground">
                    Support and sales bots for WhatsApp, websites, Instagram, and messaging platforms.
                  </p>
                </Link>
              </motion.div>
              <motion.div data-testid="service-card-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Link href="/website-development" className="group block rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-clay border-primary/30 bg-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-primary/12 text-primary">
                    <Globe aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 flex items-center gap-2 font-heading text-xl font-semibold text-foreground">
                    Website Development
                    <ArrowUpRight size={17} className="text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary-foreground">
                    Fast, secure, search-friendly websites and web apps that turn visitors into enquiries.
                  </p>
                </Link>
              </motion.div>
              <motion.div data-testid="service-card-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="group block rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-clay border-border bg-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-muted text-primary group-hover:bg-primary/10">
                    <Workflow aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 flex items-center gap-2 font-heading text-xl font-semibold text-foreground">
                    Task Automation
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary-foreground">
                    Remove repeated copy-paste work between apps and spreadsheets.
                  </p>
                </div>
              </motion.div>
              <motion.div data-testid="service-card-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="group block rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-clay border-border bg-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-muted text-primary group-hover:bg-primary/10">
                    <Code aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 flex items-center gap-2 font-heading text-xl font-semibold text-foreground">
                    Custom Software
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary-foreground">
                    Web apps, portals, and tools built around the way your team works.
                  </p>
                </div>
              </motion.div>
              <motion.div data-testid="service-card-7" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="group block rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-clay border-border bg-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-muted text-primary group-hover:bg-primary/10">
                    <Database aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 flex items-center gap-2 font-heading text-xl font-semibold text-foreground">
                    CRM &amp; ERP Help
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary-foreground">
                    Keep sales, stock, finance, and customer records updated automatically.
                  </p>
                </div>
              </motion.div>
              <motion.div data-testid="service-card-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="group block rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-clay border-border bg-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-muted text-primary group-hover:bg-primary/10">
                    <Unplug aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 flex items-center gap-2 font-heading text-xl font-semibold text-foreground">
                    App Connections
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary-foreground">
                    Connect WhatsApp, websites, CRMs, payment tools, and other systems.
                  </p>
                </div>
              </motion.div>
              <motion.div data-testid="service-card-9" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="group block rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-clay border-border bg-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-muted text-primary group-hover:bg-primary/10">
                    <BrainCircuit aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 flex items-center gap-2 font-heading text-xl font-semibold text-foreground">
                    Document Reading
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary-foreground">
                    Extract useful details from invoices, forms, contracts, and reports.
                  </p>
                </div>
              </motion.div>
              <motion.div data-testid="service-card-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="group block rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-clay border-border bg-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-muted text-primary group-hover:bg-primary/10">
                    <Cloud aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 flex items-center gap-2 font-heading text-xl font-semibold text-foreground">
                    Secure Cloud Setup
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary-foreground">
                    Host your software safely so it can grow with your business.
                  </p>
                </div>
              </motion.div>
              <motion.div data-testid="service-card-11" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="group block rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-clay border-border bg-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-muted text-primary group-hover:bg-primary/10">
                    <ChartLine aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 flex items-center gap-2 font-heading text-xl font-semibold text-foreground">
                    Dashboards
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary-foreground">
                    See orders, leads, finance, performance, and team activity in one place.
                  </p>
                </div>
              </motion.div>
              <motion.div data-testid="service-card-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="group block rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-clay border-border bg-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-muted text-primary group-hover:bg-primary/10">
                    <Cpu aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 flex items-center gap-2 font-heading text-xl font-semibold text-foreground">
                    Ongoing Support
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary-foreground">
                    We monitor, improve, and support the system after launch.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="custom-agents" className="relative overflow-hidden border-y border-primary/20 py-24 md:py-28" data-testid="custom-agents-section">
          <div className="absolute inset-0 bg-[linear-gradient(125deg,_rgba(241,236,229,0.85)_0%,_rgba(248,245,240,0.96)_45%,_rgba(241,236,229,0.8)_100%)]" />
          <div className="pointer-events-none absolute -left-24 -top-24 h-[460px] w-[460px] rounded-full bg-primary/[0.08] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-accent/[0.08] blur-3xl" />
          <div className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
              <div>
                <motion.p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 px-4 py-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <Sparkles size={13} aria-hidden="true" />
                  Custom-built · Not off the shelf
                </motion.p>
                <motion.h2 className="mb-6 font-serif text-[clamp(2.7rem,5.4vw,4.6rem)] font-semibold leading-[0.94] text-foreground" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  We build custom AI agents and chatbots
                  <span className="block text-primary">
                    exactly to your requirements.
                  </span>
                </motion.h2>
                <motion.div className="mb-7 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-heading text-xl font-semibold text-foreground md:text-2xl" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <span className="text-secondary-foreground">
                    Tell us what it should do —
                  </span>
                  <span className="relative inline-flex h-9 min-w-[13rem] items-baseline overflow-hidden">
                    <span className="absolute left-0 whitespace-nowrap text-primary" style={{ opacity: '1', transform: 'none' }}>
                      sales agent.
                    </span>
                  </span>
                </motion.div>
                <motion.p className="mb-9 max-w-xl text-lg leading-8 text-secondary-foreground" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  Most businesses do not fit a ready-made bot. So we build yours around your actual process — the questions your customers really ask, the systems you really use, and the rules your team really follows.
                </motion.p>
                <motion.div className="flex flex-col gap-3 sm:flex-row" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-clay transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:shadow-clay-hover md:text-base" data-testid="custom-agents-cta">
                    <WandSparkles size={17} aria-hidden="true" />
                    Describe your agent
                  </Link>
                  <Link href="/ai-chatbots" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:bg-card md:text-base">
                    See what they can do
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </motion.div>
              </div>
              <motion.div className="rounded-3xl border border-border bg-card/85 p-7 shadow-clay backdrop-blur-sm md:p-9" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <div className="mb-7 flex items-start gap-3 rounded-2xl border border-primary/25 bg-primary/[0.07] p-5">
                  <MessageSquareQuote size={20} className="mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm leading-6 text-foreground">
                    “We need something that answers dealer queries on WhatsApp in Hindi and English, checks stock in our ERP, and tells sales when an order is over ₹5 lakh.”
                  </p>
                </div>
                <ol className="relative space-y-6 border-l border-border pl-7">
                  <li className="relative">
                    <span className="absolute -left-[2.19rem] flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-card font-mono text-[0.62rem] font-bold text-primary">
                      1
                    </span>
                    <p className="font-heading text-base font-semibold text-foreground">
                      You describe the job
                    </p>
                    <p className="mt-1 text-sm leading-6 text-secondary-foreground">
                      “Answer order questions on WhatsApp and log them in Zoho.”
                    </p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[2.19rem] flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-card font-mono text-[0.62rem] font-bold text-primary">
                      2
                    </span>
                    <p className="font-heading text-base font-semibold text-foreground">
                      We map the flow
                    </p>
                    <p className="mt-1 text-sm leading-6 text-secondary-foreground">
                      Decisions, data sources, tools, and the handover rules.
                    </p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[2.19rem] flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-card font-mono text-[0.62rem] font-bold text-primary">
                      3
                    </span>
                    <p className="font-heading text-base font-semibold text-foreground">
                      We build &amp; train
                    </p>
                    <p className="mt-1 text-sm leading-6 text-secondary-foreground">
                      Your documents, your systems, your tone of voice.
                    </p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[2.19rem] flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-card font-mono text-[0.62rem] font-bold text-primary">
                      4
                    </span>
                    <p className="font-heading text-base font-semibold text-foreground">
                      Live in 2–4 weeks
                    </p>
                    <p className="mt-1 text-sm leading-6 text-secondary-foreground">
                      Tested, measured, and improved after launch.
                    </p>
                  </li>
                </ol>
                <div className="mt-7 flex items-center gap-3 rounded-2xl bg-foreground p-5 text-background">
                  <Rocket size={20} className="flex-shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm leading-6 text-gray-300">
                    Fixed scope, fixed timeline, and a working demo before you commit to the full build.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <motion.div className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <ClipboardList className="mb-4 text-primary" aria-hidden="true" />
                <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                  Built from your requirements
                </h3>
                <p className="text-sm leading-6 text-secondary-foreground">
                  We start with your process, your words, and your edge cases — not a template someone else outgrew.
                </p>
              </motion.div>
              <motion.div className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Blocks className="mb-4 text-primary" aria-hidden="true" />
                <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                  Your data, your tone
                </h3>
                <p className="text-sm leading-6 text-secondary-foreground">
                  Trained on your catalogue, SOPs, and past conversations so it sounds like your business, not a generic bot.
                </p>
              </motion.div>
              <motion.div className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Cog className="mb-4 text-primary" aria-hidden="true" />
                <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                  It does the work
                </h3>
                <p className="text-sm leading-6 text-secondary-foreground">
                  Books, updates, refunds, escalates, files. An agent that only talks is only half a solution.
                </p>
              </motion.div>
              <motion.div className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <ShieldCheck className="mb-4 text-primary" aria-hidden="true" />
                <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                  You stay in control
                </h3>
                <p className="text-sm leading-6 text-secondary-foreground">
                  Approval steps, guardrails, audit logs, and a human handover path on every critical action.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="process" className="relative scroll-mt-28 overflow-hidden bg-[#191b1f] py-24 text-white" data-testid="process-section">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.035)_0,rgba(255,255,255,0.035)_2px,transparent_2px,transparent_10px)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,48,72,0.18),transparent_38%),radial-gradient(circle_at_85%_65%,rgba(107,30,50,0.22),transparent_32%)]" />
          <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-12">
            <div className="mb-10 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  n8n-style Agent Flow
                </motion.p>
                <motion.h2 className="font-serif text-5xl font-semibold leading-[0.96] md:text-6xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  A real automation map, not just theory.
                </motion.h2>
              </div>
              <motion.p className="max-w-2xl text-lg leading-8 text-slate-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                This is how we design agentic workflows: a trigger starts the flow, conditions split the path, AI prepares the data, the agent uses memory and tools, then the final answer or action is sent back.
              </motion.p>
            </div>
            <motion.div className="rounded-lg border border-white/10 bg-[#202226] shadow-[0_30px_90px_rgba(0,0,0,0.35)]" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="flex flex-col gap-3 border-b border-white/10 bg-[#2a2d33] px-5 py-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-white">
                    <Bot className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold">
                      Telegram support agent workflow
                    </h3>
                    <p className="text-sm text-slate-400">
                      Trigger, branch, transcribe, edit fields, call AI agent, use tools, send response.
                    </p>
                  </div>
                </div>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Workflow running
                </div>
              </div>
              <div className="overflow-x-auto">
                <div className="relative h-[690px] min-w-[1420px]">
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1420 690" fill="none" aria-hidden="true">
                    <defs>
                      <filter id="flowGlow">
                        <feGaussianBlur stdDeviation="2" result="blur">
                        </feGaussianBlur>
                        <feMerge>
                          <feMergeNode in="blur">
                          </feMergeNode>
                          <feMergeNode in="SourceGraphic">
                          </feMergeNode>
                        </feMerge>
                      </filter>
                    </defs>
                    <path d="M122 236 H170" stroke="#8a929e" strokeWidth="2.2">
                    </path>
                    <path d="M250 226 C270 226 246 108 284 108" stroke="#8a929e" strokeWidth="2.2">
                    </path>
                    <path d="M250 246 H418" stroke="#58d08c" strokeWidth="2.4" filter="url(#flowGlow)">
                    </path>
                    <path d="M362 108 H430" stroke="#8a929e" strokeWidth="2.2">
                    </path>
                    <path d="M508 108 H576" stroke="#8a929e" strokeWidth="2.2">
                    </path>
                    <path d="M654 108 C735 108 690 248 808 248" stroke="#8a929e" strokeWidth="2.2">
                    </path>
                    <path d="M496 250 H808" stroke="#58d08c" strokeWidth="2.4" filter="url(#flowGlow)">
                    </path>
                    <path d="M988 250 H1114" stroke="#58d08c" strokeWidth="2.4" filter="url(#flowGlow)">
                    </path>
                    <path d="M720 382 C748 310 786 306 850 292" stroke="#58d08c" strokeWidth="2.1">
                    </path>
                    <path d="M842 386 C852 332 868 312 890 292" stroke="#58d08c" strokeWidth="2.1">
                    </path>
                    <path d="M932 324 C894 366 714 442 682 522" stroke="#8a929e" strokeWidth="1.8">
                    </path>
                    <path d="M934 324 C910 368 808 442 802 522" stroke="#58d08c" strokeWidth="2.1">
                    </path>
                    <path d="M938 324 C934 372 924 444 922 522" stroke="#8a929e" strokeWidth="1.8">
                    </path>
                    <path d="M944 324 C970 372 1036 446 1042 522" stroke="#8a929e" strokeWidth="1.8">
                    </path>
                    <path d="M952 322 C1016 370 1118 440 1162 522" stroke="#8a929e" strokeWidth="1.8">
                    </path>
                    <path d="M960 318 C1050 354 1222 430 1282 522" stroke="#8a929e" strokeWidth="1.8">
                    </path>
                  </svg>
                  <div className="absolute rounded-md border bg-[#34373f] shadow-[0_12px_34px_rgba(0,0,0,0.28)] border-emerald-500/70 h-[78px] w-[78px] left-[44px] top-[198px]">
                    <div className="relative flex h-full items-center justify-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-300">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z">
                          </path>
                        </svg>
                      </span>
                      <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full text-emerald-400">
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="absolute left-1/2 top-full mt-2 w-32 -translate-x-1/2 text-center">
                      <p className="text-sm font-bold leading-tight text-white">
                        Telegram Trigger
                      </p>
                      <p className="mt-0.5 text-[10px] leading-tight text-slate-400">
                        Updates: message
                      </p>
                    </div>
                  </div>
                  <div className="absolute rounded-md border bg-[#34373f] shadow-[0_12px_34px_rgba(0,0,0,0.28)] border-emerald-500/70 h-[78px] w-[78px] left-[178px] top-[198px]">
                    <div className="relative flex h-full items-center justify-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-300">
                        <Split className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full text-emerald-400">
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="absolute left-1/2 top-full mt-2 w-32 -translate-x-1/2 text-center">
                      <p className="text-sm font-bold leading-tight text-white">
                        If
                      </p>
                      <p className="mt-0.5 text-[10px] leading-tight text-slate-400">
                        branch check
                      </p>
                    </div>
                  </div>
                  <div className="absolute rounded-md border bg-[#34373f] shadow-[0_12px_34px_rgba(0,0,0,0.28)] border-slate-500/70 h-[78px] w-[78px] left-[284px] top-[70px]">
                    <div className="relative flex h-full items-center justify-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700/70 text-slate-200">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z">
                          </path>
                        </svg>
                      </span>
                      <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                    </div>
                    <div className="absolute left-1/2 top-full mt-2 w-32 -translate-x-1/2 text-center">
                      <p className="text-sm font-bold leading-tight text-white">
                        Telegram1
                      </p>
                      <p className="mt-0.5 text-[10px] leading-tight text-slate-400">
                        get: file
                      </p>
                    </div>
                  </div>
                  <div className="absolute rounded-md border bg-[#34373f] shadow-[0_12px_34px_rgba(0,0,0,0.28)] border-slate-500/70 h-[78px] w-[78px] left-[430px] top-[70px]">
                    <div className="relative flex h-full items-center justify-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700/70 text-slate-200">
                        <BrainCircuit className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                    </div>
                    <div className="absolute left-1/2 top-full mt-2 w-32 -translate-x-1/2 text-center">
                      <p className="text-sm font-bold leading-tight text-white">
                        OpenAI
                      </p>
                      <p className="mt-0.5 text-[10px] leading-tight text-slate-400">
                        transcribe recording
                      </p>
                    </div>
                  </div>
                  <div className="absolute rounded-md border bg-[#34373f] shadow-[0_12px_34px_rgba(0,0,0,0.28)] border-slate-500/70 h-[78px] w-[78px] left-[576px] top-[70px]">
                    <div className="relative flex h-full items-center justify-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700/70 text-slate-200">
                        <PenLine className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                    </div>
                    <div className="absolute left-1/2 top-full mt-2 w-32 -translate-x-1/2 text-center">
                      <p className="text-sm font-bold leading-tight text-white">
                        Edit Fields
                      </p>
                      <p className="mt-0.5 text-[10px] leading-tight text-slate-400">
                        manual
                      </p>
                    </div>
                  </div>
                  <div className="absolute rounded-md border bg-[#34373f] shadow-[0_12px_34px_rgba(0,0,0,0.28)] border-emerald-500/70 h-[78px] w-[78px] left-[418px] top-[212px]">
                    <div className="relative flex h-full items-center justify-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-300">
                        <PenLine className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full text-emerald-400">
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="absolute left-1/2 top-full mt-2 w-32 -translate-x-1/2 text-center">
                      <p className="text-sm font-bold leading-tight text-white">
                        Edit Fields1
                      </p>
                      <p className="mt-0.5 text-[10px] leading-tight text-slate-400">
                        manual
                      </p>
                    </div>
                  </div>
                  <div className="absolute rounded-md border bg-[#34373f] shadow-[0_12px_34px_rgba(0,0,0,0.28)] border-emerald-500/70 h-[74px] w-[190px] left-[808px] top-[211px]">
                    <div className="relative flex h-full items-center justify-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-300">
                        <Bot className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full text-emerald-400">
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="absolute left-1/2 top-full mt-2 w-32 -translate-x-1/2 text-center">
                      <p className="text-sm font-bold leading-tight text-white">
                        AI Agent
                      </p>
                      <p className="mt-0.5 text-[10px] leading-tight text-slate-400">
                        Tools Agent
                      </p>
                    </div>
                  </div>
                  <div className="absolute rounded-md border bg-[#34373f] shadow-[0_12px_34px_rgba(0,0,0,0.28)] border-emerald-500/70 h-[74px] w-[190px] left-[1114px] top-[212px]">
                    <div className="relative flex h-full items-center justify-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-300">
                        <BrainCircuit className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full text-emerald-400">
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="absolute left-1/2 top-full mt-2 w-32 -translate-x-1/2 text-center">
                      <p className="text-sm font-bold leading-tight text-white">
                        OpenAI1
                      </p>
                      <p className="mt-0.5 text-[10px] leading-tight text-slate-400">
                        Message Model
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-[666px] top-[342px]">
                    <div className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full border border-emerald-500/70 bg-[#34373f]">
                      <BrainCircuit className="h-7 w-7 text-slate-100" aria-hidden="true" />
                      <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <Check className="absolute bottom-0 right-1 h-4 w-4 text-emerald-400" aria-hidden="true" />
                    </div>
                    <p className="mt-2 w-[94px] -translate-x-4 text-center text-sm font-bold text-white">
                      OpenAI Chat Model
                    </p>
                  </div>
                  <div className="absolute left-[794px] top-[342px]">
                    <div className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full border border-emerald-500/70 bg-[#34373f]">
                      <Database className="h-7 w-7 text-slate-100" aria-hidden="true" />
                      <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <Check className="absolute bottom-0 right-1 h-4 w-4 text-emerald-400" aria-hidden="true" />
                    </div>
                    <p className="mt-2 w-[112px] -translate-x-6 text-center text-sm font-bold text-white">
                      Window Buffer Memory
                    </p>
                  </div>
                  <div className="absolute top-[522px]" style={{ left: '650px' }}>
                    <div className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full border bg-[#34373f] border-emerald-500/70">
                      <FileText className="h-6 w-6 text-slate-100" aria-hidden="true" />
                      <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <Check className="absolute bottom-0 right-1 h-4 w-4 text-emerald-400" aria-hidden="true" />
                    </div>
                    <p className="mt-2 w-[78px] -translate-x-2 text-center text-sm font-bold text-white">
                      Content
                    </p>
                  </div>
                  <div className="absolute top-[522px]" style={{ left: '770px' }}>
                    <div className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full border bg-[#34373f] border-red-400/70">
                      <Image className="h-6 w-6 text-slate-100" aria-hidden="true" />
                      <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <Check className="absolute bottom-0 right-1 h-4 w-4 text-red-400" aria-hidden="true" />
                    </div>
                    <p className="mt-2 w-[78px] -translate-x-2 text-center text-sm font-bold text-white">
                      Picture
                    </p>
                  </div>
                  <div className="absolute top-[522px]" style={{ left: '890px' }}>
                    <div className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full border bg-[#34373f] border-emerald-500/70">
                      <PenLine className="h-6 w-6 text-slate-100" aria-hidden="true" />
                      <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <Check className="absolute bottom-0 right-1 h-4 w-4 text-emerald-400" aria-hidden="true" />
                    </div>
                    <p className="mt-2 w-[78px] -translate-x-2 text-center text-sm font-bold text-white">
                      Rewrite text
                    </p>
                  </div>
                  <div className="absolute top-[522px]" style={{ left: '1010px' }}>
                    <div className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full border bg-[#34373f] border-emerald-500/70">
                      <GitBranch className="h-6 w-6 text-slate-100" aria-hidden="true" />
                      <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <Check className="absolute bottom-0 right-1 h-4 w-4 text-emerald-400" aria-hidden="true" />
                    </div>
                    <p className="mt-2 w-[78px] -translate-x-2 text-center text-sm font-bold text-white">
                      Post
                    </p>
                  </div>
                  <div className="absolute top-[522px]" style={{ left: '1130px' }}>
                    <div className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full border bg-[#34373f] border-emerald-500/70">
                      <Calculator className="h-6 w-6 text-slate-100" aria-hidden="true" />
                      <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <Check className="absolute bottom-0 right-1 h-4 w-4 text-emerald-400" aria-hidden="true" />
                    </div>
                    <p className="mt-2 w-[78px] -translate-x-2 text-center text-sm font-bold text-white">
                      Calculator
                    </p>
                  </div>
                  <div className="absolute top-[522px]" style={{ left: '1250px' }}>
                    <div className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full border bg-[#34373f] border-emerald-500/70">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="h-6 w-6 text-slate-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.24-1.122-.271C.103 5.033 0 4.982 0 4.898v-.455l.052-.045c.924-.005 5.401 0 5.401 0l.051.045v.434c0 .119-.075.176-.225.176l-.564.031c-.485.029-.727.164-.727.436 0 .135.053.33.166.601 1.082 2.646 4.818 10.521 4.818 10.521l.136.046 2.411-4.81-.482-1.067-1.658-3.264s-.318-.654-.428-.872c-.728-1.443-.712-1.518-1.447-1.617-.207-.023-.313-.05-.313-.149v-.468l.06-.045h4.292l.113.037v.451c0 .105-.076.15-.227.15l-.308.047c-.792.061-.661.381-.136 1.422l1.582 3.252 1.758-3.504c.293-.64.233-.801.111-.947-.07-.084-.305-.22-.812-.24l-.201-.021c-.052 0-.098-.015-.145-.051-.045-.031-.067-.076-.067-.129v-.427l.061-.045c1.247-.008 4.043 0 4.043 0l.059.045v.436c0 .121-.059.178-.193.178-.646.03-.782.095-1.023.439-.12.186-.375.589-.646 1.039l-2.301 4.273-.065.135 2.792 5.712.17.048 4.396-10.438c.154-.422.129-.722-.064-.895-.197-.172-.346-.273-.857-.295l-.42-.016c-.061 0-.105-.014-.152-.045-.043-.029-.072-.075-.072-.119v-.436l.059-.045h4.961l.041.045v.437c0 .119-.074.18-.209.18-.648.03-1.127.18-1.443.421-.314.255-.557.616-.736 1.067 0 0-4.043 9.258-5.426 12.339-.525 1.007-1.053.917-1.503-.031-.571-1.171-1.773-3.786-2.646-5.71l.053-.036z">
                        </path>
                      </svg>
                      <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                      <Check className="absolute bottom-0 right-1 h-4 w-4 text-emerald-400" aria-hidden="true" />
                    </div>
                    <p className="mt-2 w-[78px] -translate-x-2 text-center text-sm font-bold text-white">
                      Wikipedia
                    </p>
                  </div>
                  <span className="absolute font-mono text-[10px] font-semibold text-emerald-300 left-[254px] top-[214px]">
                    true
                  </span>
                  <span className="absolute font-mono text-[10px] font-semibold text-emerald-300 left-[254px] top-[246px]">
                    false
                  </span>
                  <span className="absolute font-mono text-[10px] font-semibold text-emerald-300 left-[336px] top-[250px]">
                    1 item
                  </span>
                  <span className="absolute font-mono text-[10px] font-semibold text-emerald-300 left-[650px] top-[250px]">
                    1 item
                  </span>
                  <span className="absolute font-mono text-[10px] font-semibold text-emerald-300 left-[1038px] top-[250px]">
                    1 item
                  </span>
                  <span className="absolute font-mono text-[10px] font-semibold text-emerald-300 left-[690px] top-[320px]">
                    Model
                  </span>
                  <span className="absolute font-mono text-[10px] font-semibold text-emerald-300 left-[808px] top-[320px]">
                    Memory
                  </span>
                  <span className="absolute font-mono text-[10px] font-semibold text-emerald-300 left-[945px] top-[336px]">
                    Tool
                  </span>
                  <div className="absolute left-[934px] top-[286px] grid h-6 w-6 place-items-center rounded-sm border border-slate-600 bg-[#2d3036] text-slate-400">
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="absolute left-[1268px] top-[287px] grid h-6 w-6 place-items-center rounded-sm border border-slate-600 bg-[#2d3036] text-slate-400">
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="absolute bottom-5 left-5 max-w-[570px] rounded-lg border border-white/10 bg-black/22 p-4 backdrop-blur">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                      <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
                      Simple explanation
                    </div>
                    <p className="text-sm leading-6 text-slate-300">
                      Example: a Telegram or WhatsApp message arrives. The workflow checks what kind of message it is, transcribes voice if needed, prepares clean data, lets the AI agent use memory and tools, then sends the right answer or update.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="stack" className="border-y border-border bg-muted/60 py-24 md:py-28" data-testid="tech-stack-section">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  Technology Stack
                </motion.p>
                <motion.h2 className="font-serif text-5xl font-semibold leading-[0.96] text-foreground md:text-6xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  The tools behind the work.
                </motion.h2>
              </div>
              <motion.p className="max-w-2xl text-lg leading-8 text-secondary-foreground" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                You do not need to know every tool here. This stack simply means your product can be fast, secure, connected to your apps, and ready for real customers.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
              <motion.div className="rounded-lg border border-border bg-card p-5 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <h3 className="mb-3 border-b border-border pb-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Experience Layer
                </h3>
                <p className="mb-5 min-h-[96px] text-sm leading-6 text-secondary-foreground">
                  The screens your team and customers use: dashboards, portals, forms, and admin panels.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="React">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" height={28} width={28} xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z">
                      </path>
                    </svg>
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      React
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="Next.js">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" height={28} width={28} xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z">
                      </path>
                    </svg>
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      Next.js
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="TypeScript">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" height={28} width={28} xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z">
                      </path>
                    </svg>
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      TypeScript
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="Tailwind CSS">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" height={28} width={28} xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z">
                      </path>
                    </svg>
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </motion.div>
              <motion.div className="rounded-lg border border-border bg-card p-5 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <h3 className="mb-3 border-b border-border pb-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Backend &amp; APIs
                </h3>
                <p className="mb-5 min-h-[96px] text-sm leading-6 text-secondary-foreground">
                  The behind-the-scenes engine that saves data, runs rules, and connects your business apps.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="Python">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" height={28} width={28} xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z">
                      </path>
                    </svg>
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      Python
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="FastAPI">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" height={28} width={28} xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896">
                      </path>
                    </svg>
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      FastAPI
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="Node.js">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" height={28} width={28} xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z">
                      </path>
                    </svg>
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      Node.js
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="NestJS">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" height={28} width={28} xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.131.047c-.173 0-.334.037-.483.087.316.21.49.49.576.806.007.043.019.074.025.117a.681.681 0 0 1 .013.112c.024.545-.143.614-.26.936-.18.415-.13.861.086 1.22a.74.74 0 0 0 .074.137c-.235-1.568 1.073-1.803 1.314-2.293.019-.428-.334-.713-.613-.911a1.37 1.37 0 0 0-.732-.21zM16.102.4c-.024.143-.006.106-.012.18-.006.05-.006.112-.012.161-.013.05-.025.1-.044.149-.012.05-.03.1-.05.149l-.067.142c-.02.025-.031.05-.05.075l-.037.055a2.152 2.152 0 0 1-.093.124c-.037.038-.068.081-.112.112v.006c-.037.031-.074.068-.118.1-.13.099-.278.173-.415.266-.043.03-.087.056-.124.093a.906.906 0 0 0-.118.099c-.043.037-.074.074-.111.118-.031.037-.068.08-.093.124a1.582 1.582 0 0 0-.087.13c-.025.05-.043.093-.068.142-.019.05-.037.093-.05.143a2.007 2.007 0 0 0-.043.155c-.006.025-.006.056-.012.08-.007.025-.007.05-.013.075 0 .05-.006.105-.006.155 0 .037 0 .074.006.111 0 .05.006.1.019.155.006.05.018.1.03.15.02.049.032.098.05.148.013.03.031.062.044.087l-1.426-.552c-.241-.068-.477-.13-.719-.186l-.39-.093c-.372-.074-.75-.13-1.128-.167-.013 0-.019-.006-.031-.006A11.082 11.082 0 0 0 8.9 2.855c-.378.025-.756.074-1.134.136a12.45 12.45 0 0 0-.837.174l-.279.074c-.092.037-.18.08-.266.118l-.205.093c-.012.006-.024.006-.03.012-.063.031-.118.056-.174.087a2.738 2.738 0 0 0-.236.118c-.043.018-.086.043-.124.062a.559.559 0 0 1-.055.03c-.056.032-.112.063-.162.094a1.56 1.56 0 0 0-.148.093c-.044.03-.087.055-.124.086-.006.007-.013.007-.019.013-.037.025-.08.056-.118.087l-.012.012-.093.074c-.012.007-.025.019-.037.025-.031.025-.062.056-.093.08-.006.013-.019.02-.025.025-.037.038-.074.069-.111.106-.007 0-.007.006-.013.012a1.742 1.742 0 0 0-.111.106c-.007.006-.007.012-.013.012a1.454 1.454 0 0 0-.093.1c-.012.012-.03.024-.043.036a1.374 1.374 0 0 1-.106.112c-.006.012-.018.019-.024.03-.05.05-.093.1-.143.15l-.018.018c-.1.106-.205.211-.317.304-.111.1-.229.192-.347.273a3.777 3.777 0 0 1-.762.421c-.13.056-.267.106-.403.149-.26.056-.527.161-.756.18-.05 0-.105.012-.155.018l-.155.037-.149.056c-.05.019-.099.044-.148.068-.044.031-.093.056-.137.087a1.011 1.011 0 0 0-.124.106c-.043.03-.087.074-.124.111-.037.043-.074.08-.105.124-.031.05-.068.093-.093.143a1.092 1.092 0 0 0-.087.142c-.025.056-.05.106-.068.161-.019.05-.037.106-.056.161-.012.05-.025.1-.03.15 0 .005-.007.012-.007.018-.012.056-.012.13-.019.167C.006 7.95 0 7.986 0 8.03a.657.657 0 0 0 .074.31v.006c.019.037.044.075.069.112.024.037.05.074.08.111.031.031.068.069.106.1a.906.906 0 0 0 .117.099c.149.13.186.173.378.272.031.019.062.031.1.05.006 0 .012.006.018.006 0 .013 0 .019.006.031a1.272 1.272 0 0 0 .08.298c.02.037.032.074.05.111.007.013.013.025.02.031.024.05.049.093.073.137l.093.13c.031.037.069.08.106.118.037.037.074.068.118.105 0 0 .006.006.012.006.037.031.074.062.112.087a.986.986 0 0 0 .136.08c.043.025.093.05.142.069a.73.73 0 0 0 .124.043c.007.006.013.006.025.012.025.007.056.013.08.019-.018.335-.024.65.026.762.055.124.328-.254.6-.688-.036.428-.061.93 0 1.079.069.155.44-.329.763-.862 4.395-1.016 8.405 2.02 8.826 6.31-.08-.67-.905-1.041-1.283-.948-.186.458-.502 1.047-1.01 1.413.043-.41.025-.83-.062-1.24a4.009 4.009 0 0 1-.769 1.562c-.588.043-1.177-.242-1.487-.67-.025-.018-.031-.055-.05-.08-.018-.043-.037-.087-.05-.13a.515.515 0 0 1-.037-.13c-.006-.044-.006-.087-.006-.137v-.093a.992.992 0 0 1 .031-.13c.013-.043.025-.086.044-.13.024-.043.043-.087.074-.13.105-.298.105-.54-.087-.682a.706.706 0 0 0-.118-.062c-.024-.006-.055-.018-.08-.025l-.05-.018a.847.847 0 0 0-.13-.031.472.472 0 0 0-.13-.019 1.01 1.01 0 0 0-.136-.012c-.031 0-.062.006-.093.006a.484.484 0 0 0-.137.019c-.043.006-.086.012-.13.024a1.068 1.068 0 0 0-.13.044c-.043.018-.08.037-.124.056-.037.018-.074.043-.118.062-1.444.942-.582 3.148.403 3.787-.372.068-.75.148-.855.229l-.013.012c.267.161.546.298.837.416.397.13.818.247 1.004.297v.006a5.996 5.996 0 0 0 1.562.112c2.746-.192 4.996-2.281 5.405-5.033l.037.161c.019.112.043.23.056.347v.006c.012.056.018.112.025.162v.024c.006.056.012.112.012.162.006.068.012.136.012.204v.1c0 .03.007.067.007.098 0 .038-.007.075-.007.112v.087c0 .043-.006.08-.006.124 0 .025 0 .05-.006.08 0 .044-.006.087-.006.137-.006.018-.006.037-.006.055l-.02.143c0 .019 0 .037-.005.056-.007.062-.019.118-.025.18v.012l-.037.174v.018l-.037.167c0 .007-.007.02-.007.025a1.663 1.663 0 0 1-.043.168v.018c-.019.062-.037.118-.05.174-.006.006-.006.012-.006.012l-.056.186c-.024.062-.043.118-.068.18-.025.062-.043.124-.068.18-.025.062-.05.117-.074.18h-.007c-.024.055-.05.117-.08.173a.302.302 0 0 1-.019.043c-.006.006-.006.013-.012.019a5.867 5.867 0 0 1-1.742 2.082c-.05.031-.099.069-.149.106-.012.012-.03.018-.043.03a2.603 2.603 0 0 1-.136.094l.018.037h.007l.26-.037h.006c.161-.025.322-.056.483-.087.044-.006.093-.019.137-.031l.087-.019c.043-.006.086-.018.13-.024.037-.013.074-.02.111-.031.62-.15 1.221-.354 1.798-.595a9.926 9.926 0 0 1-3.85 3.142c.714-.05 1.426-.167 2.114-.366a9.903 9.903 0 0 0 5.857-4.68 9.893 9.893 0 0 1-1.667 3.986 9.758 9.758 0 0 0 1.655-1.376 9.824 9.824 0 0 0 2.61-5.268c.21.98.272 1.99.18 2.987 4.474-6.241.371-12.712-1.346-14.416-.006-.013-.012-.019-.012-.031-.006.006-.006.006-.006.012 0-.006 0-.006-.007-.012 0 .074-.006.148-.012.223a8.34 8.34 0 0 1-.062.415c-.03.136-.068.273-.105.41-.044.13-.093.266-.15.396a5.322 5.322 0 0 1-.185.378 4.735 4.735 0 0 1-.477.688c-.093.111-.192.21-.292.31a3.994 3.994 0 0 1-.18.155l-.142.124a3.459 3.459 0 0 1-.347.241 4.295 4.295 0 0 1-.366.211c-.13.062-.26.118-.39.174a4.364 4.364 0 0 1-.818.223c-.143.025-.285.037-.422.05a4.914 4.914 0 0 1-.297.012 4.66 4.66 0 0 1-.422-.025 3.137 3.137 0 0 1-.421-.062 3.136 3.136 0 0 1-.415-.105h-.007c.137-.013.273-.025.41-.05a4.493 4.493 0 0 0 .818-.223c.136-.05.266-.112.39-.174.13-.062.248-.13.372-.204.118-.08.235-.161.347-.248.112-.087.217-.18.316-.279.105-.093.198-.198.291-.304.093-.111.18-.223.26-.334.013-.019.026-.044.038-.062.062-.1.124-.199.18-.298a4.272 4.272 0 0 0 .334-.775c.044-.13.075-.266.106-.403.025-.142.05-.278.062-.415.012-.142.025-.285.025-.421 0-.1-.007-.199-.013-.298a6.726 6.726 0 0 0-.05-.415 4.493 4.493 0 0 0-.092-.415c-.044-.13-.087-.267-.137-.397-.05-.13-.111-.26-.173-.384-.069-.124-.137-.248-.211-.366a6.843 6.843 0 0 0-.248-.34c-.093-.106-.186-.212-.285-.317a3.878 3.878 0 0 0-.161-.155c-.28-.217-.57-.421-.862-.607a1.154 1.154 0 0 0-.124-.062 2.415 2.415 0 0 0-.589-.26Z">
                      </path>
                    </svg>
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      NestJS
                    </span>
                  </div>
                </div>
              </motion.div>
              <motion.div className="rounded-lg border border-border bg-card p-5 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <h3 className="mb-3 border-b border-border pb-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  AI &amp; Automation
                </h3>
                <p className="mb-5 min-h-[96px] text-sm leading-6 text-secondary-foreground">
                  The tools that answer questions, read messages, automate tasks, and help staff work faster.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="OpenAI">
                    <Brain size={28} className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      OpenAI
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="Claude">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" height={28} width={28} xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z">
                      </path>
                    </svg>
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      Claude
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="LangChain">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" height={28} width={28} xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z">
                      </path>
                    </svg>
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      LangChain
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="n8n">
                    <Workflow size={28} className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      n8n
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="CrewAI">
                    <Bot size={28} className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      CrewAI
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="MCP">
                    <Network size={28} className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      MCP
                    </span>
                  </div>
                </div>
              </motion.div>
              <motion.div className="rounded-lg border border-border bg-card p-5 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <h3 className="mb-3 border-b border-border pb-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Data Systems
                </h3>
                <p className="mb-5 min-h-[96px] text-sm leading-6 text-secondary-foreground">
                  The place where customer records, orders, reports, files, and search data stay organized.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="PostgreSQL">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" height={28} width={28} xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z">
                      </path>
                    </svg>
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      PostgreSQL
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="MongoDB">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" height={28} width={28} xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z">
                      </path>
                    </svg>
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      MongoDB
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="Redis">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" height={28} width={28} xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z">
                      </path>
                    </svg>
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      Redis
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="Vector DBs">
                    <Brain size={28} className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      Vector DBs
                    </span>
                  </div>
                </div>
              </motion.div>
              <motion.div className="rounded-lg border border-border bg-card p-5 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <h3 className="mb-3 border-b border-border pb-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Cloud &amp; DevOps
                </h3>
                <p className="mb-5 min-h-[96px] text-sm leading-6 text-secondary-foreground">
                  The secure hosting and delivery setup that keeps your software available and ready to grow.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="AWS / GCP / Azure">
                    <Cloud size={28} className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      AWS / GCP / Azure
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="Docker">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" height={28} width={28} xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z">
                      </path>
                    </svg>
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      Docker
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="Terraform">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" height={28} width={28} xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44 0v7.575l6.561 3.79V3.787zm21.12 4.227l-6.561 3.791v7.574l6.56-3.787zM8.72 4.23v7.575l6.561 3.787V8.018zm0 8.405v7.575L15.28 24v-7.578z">
                      </path>
                    </svg>
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      Terraform
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="GitHub Actions">
                    <GitBranch size={28} className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      GitHub Actions
                    </span>
                  </div>
                  <div className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-border/70 bg-background/70 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-sm" title="Kubernetes">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="mb-3 text-secondary-foreground transition-colors group-hover:text-primary" height={28} width={28} xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z">
                      </path>
                    </svg>
                    <span className="text-xs font-semibold leading-tight text-secondary-foreground group-hover:text-foreground">
                      Kubernetes
                    </span>
                  </div>
                </div>
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
