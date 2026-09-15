import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Blocks, ClipboardList, Cog, MessageSquareQuote, Rocket, ShieldCheck, Sparkles, WandSparkles } from 'lucide-react';

export function CustomAgents() {
  return (
      <section id="custom-agents" className="relative overflow-hidden border-y border-primary/20 py-24 md:py-28" data-testid="custom-agents-section">
        <div className="absolute inset-0 bg-[linear-gradient(125deg,_rgba(241,236,229,0.85)_0%,_rgba(248,245,240,0.96)_45%,_rgba(241,236,229,0.9)_100%)]" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-[460px] w-[460px] rounded-full bg-primary/[0.12] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-accent/[0.12] blur-3xl" />
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
                  <motion.span className="absolute left-0 whitespace-nowrap text-primary" initial={{ opacity: 0, y: -26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                    sales agent.
                  </motion.span>
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
  );
}
