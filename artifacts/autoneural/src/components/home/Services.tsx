import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowUpRight, Bot, BrainCircuit, ChartLine, Cloud, Code, Cpu, Database, Globe, Lightbulb, PhoneCall, Sparkles, Unplug, Workflow } from 'lucide-react';

export function Services() {
  return (
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
              <div className="group block rounded-2xl p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:shadow-clay-hover border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md hover:border-primary/30">
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
              <Link href="/ai-chatbots" className="group block rounded-2xl p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:shadow-clay-hover border border-primary/25 bg-[rgba(248,245,240,0.92)] backdrop-blur-md hover:border-primary/50">
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
              <Link href="/aivora" className="group block rounded-2xl p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:shadow-clay-hover border border-primary/25 bg-[rgba(248,245,240,0.92)] backdrop-blur-md hover:border-primary/50">
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
              <Link href="/ai-chatbots" className="group block rounded-2xl p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:shadow-clay-hover border border-primary/25 bg-[rgba(248,245,240,0.92)] backdrop-blur-md hover:border-primary/50">
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
              <Link href="/website-development" className="group block rounded-2xl p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:shadow-clay-hover border border-primary/25 bg-[rgba(248,245,240,0.92)] backdrop-blur-md hover:border-primary/50">
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
              <div className="group block rounded-2xl p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:shadow-clay-hover border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md hover:border-primary/30">
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
              <div className="group block rounded-2xl p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:shadow-clay-hover border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md hover:border-primary/30">
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
              <div className="group block rounded-2xl p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:shadow-clay-hover border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md hover:border-primary/30">
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
              <div className="group block rounded-2xl p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:shadow-clay-hover border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md hover:border-primary/30">
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
              <div className="group block rounded-2xl p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:shadow-clay-hover border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md hover:border-primary/30">
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
              <div className="group block rounded-2xl p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:shadow-clay-hover border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md hover:border-primary/30">
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
              <div className="group block rounded-2xl p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:shadow-clay-hover border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md hover:border-primary/30">
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
              <div className="group block rounded-2xl p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:shadow-clay-hover border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md hover:border-primary/30">
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
  );
}
