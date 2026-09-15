import { motion } from 'framer-motion';
import { ArrowRight, BellRing, BookOpenCheck, Braces, CalendarClock, FileSearch, Fingerprint, GitBranch, Handshake, Languages, Layers, MailCheck, ShieldCheck, Sparkles, Timer, Workflow } from 'lucide-react';

export function ChatbotFeatures() {
  return (
      <section id="chatbot-features" className="bg-background py-24 md:py-28" data-testid="chatbot-features-section">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-14 max-w-3xl">
            <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              Feature Rich AI Chatbot
            </motion.p>
            <motion.h2 className="mb-5 font-serif text-5xl font-semibold leading-[0.96] text-foreground md:text-6xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              Everything the conversation needs. Nothing you have to babysit.
            </motion.h2>
            <motion.p className="text-lg leading-8 text-secondary-foreground" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              A chatbot is only useful if it can finish the job. Ours answers, verifies, books, updates your systems, and knows exactly when to bring in a human.
            </motion.p>
          </div>
          <div className="mb-6 grid gap-6 lg:grid-cols-2">
            <motion.div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-clay md:p-10" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary/[0.06] blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
              <div className="relative">
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Handshake size={26} aria-hidden="true" />
                </span>
                <h3 className="mb-3 font-heading text-2xl font-semibold text-foreground md:text-3xl">
                  Hybrid AI + live agent
                </h3>
                <p className="mb-6 max-w-lg text-base leading-7 text-secondary-foreground">
                  The bot handles the routine. The moment a conversation needs a person, it hands over with the full transcript, customer record, and a suggested reply already drafted.
                </p>
                <ul className="flex flex-wrap gap-2">
                  <li className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3.5 py-2 text-xs font-medium text-secondary-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Instant human takeover
                  </li>
                  <li className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3.5 py-2 text-xs font-medium text-secondary-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Shared inbox for your team
                  </li>
                  <li className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3.5 py-2 text-xs font-medium text-secondary-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Zero context lost
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-clay md:p-10" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary/[0.06] blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
              <div className="relative">
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <BookOpenCheck size={26} aria-hidden="true" />
                </span>
                <h3 className="mb-3 font-heading text-2xl font-semibold text-foreground md:text-3xl">
                  Trained on your business
                </h3>
                <p className="mb-6 max-w-lg text-base leading-7 text-secondary-foreground">
                  We feed it your catalogue, price lists, SOPs, PDFs, past tickets, and website. It answers from your material — with source citations — instead of guessing.
                </p>
                <ul className="flex flex-wrap gap-2">
                  <li className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3.5 py-2 text-xs font-medium text-secondary-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Docs, sheets &amp; site ingestion
                  </li>
                  <li className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3.5 py-2 text-xs font-medium text-secondary-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Cited answers
                  </li>
                  <li className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3.5 py-2 text-xs font-medium text-secondary-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Guard-railed against invented facts
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <motion.div className="group rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" data-testid="chatbot-feature-0" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <GitBranch className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                Condition-based flows
              </h3>
              <p className="text-sm leading-6 text-secondary-foreground">
                Different journeys for different answers, plans, and customer tiers.
              </p>
            </motion.div>
            <motion.div className="group rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" data-testid="chatbot-feature-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <Languages className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                Multilingual
              </h3>
              <p className="text-sm leading-6 text-secondary-foreground">
                English, Hindi, Bengali, Arabic and more — including full RTL support.
              </p>
            </motion.div>
            <motion.div className="group rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" data-testid="chatbot-feature-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <MailCheck className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                Automated follow-ups
              </h3>
              <p className="text-sm leading-6 text-secondary-foreground">
                Email and WhatsApp sequences that chase quiet leads for you.
              </p>
            </motion.div>
            <motion.div className="group rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" data-testid="chatbot-feature-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <Fingerprint className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                Email &amp; mobile OTP
              </h3>
              <p className="text-sm leading-6 text-secondary-foreground">
                Dual verification before the bot reveals account-level information.
              </p>
            </motion.div>
            <motion.div className="group rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" data-testid="chatbot-feature-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <ShieldCheck className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                Data masking
              </h3>
              <p className="text-sm leading-6 text-secondary-foreground">
                Card, ID, and phone numbers masked in transcripts and exports.
              </p>
            </motion.div>
            <motion.div className="group rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" data-testid="chatbot-feature-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <CalendarClock className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                Booking &amp; scheduling
              </h3>
              <p className="text-sm leading-6 text-secondary-foreground">
                Real-time calendar slots, reminders, and automatic rescheduling.
              </p>
            </motion.div>
            <motion.div className="group rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" data-testid="chatbot-feature-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <Workflow className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                Action-taking agents
              </h3>
              <p className="text-sm leading-6 text-secondary-foreground">
                Creates the ticket, updates the CRM, raises the invoice — not just chat.
              </p>
            </motion.div>
            <motion.div className="group rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" data-testid="chatbot-feature-7" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <FileSearch className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                Document understanding
              </h3>
              <p className="text-sm leading-6 text-secondary-foreground">
                Reads invoices, POs, and forms a customer sends mid-conversation.
              </p>
            </motion.div>
            <motion.div className="group rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" data-testid="chatbot-feature-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <BellRing className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                Smart notifications
              </h3>
              <p className="text-sm leading-6 text-secondary-foreground">
                Alerts to your team the moment a high-value lead starts chatting.
              </p>
            </motion.div>
            <motion.div className="group rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" data-testid="chatbot-feature-9" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <Braces className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                Custom API actions
              </h3>
              <p className="text-sm leading-6 text-secondary-foreground">
                Any internal system with an endpoint becomes a bot capability.
              </p>
            </motion.div>
            <motion.div className="group rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" data-testid="chatbot-feature-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <Timer className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                Sub-second replies
              </h3>
              <p className="text-sm leading-6 text-secondary-foreground">
                Cached retrieval and streaming responses keep waiting time near zero.
              </p>
            </motion.div>
            <motion.div className="group rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-clay" data-testid="chatbot-feature-11" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <Layers className="mb-4 text-secondary-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
              <h3 className="mb-2 font-heading text-base font-semibold text-foreground">
                Multi-agent routing
              </h3>
              <p className="text-sm leading-6 text-secondary-foreground">
                Sales, support, and billing agents in one bot, each with its own rules.
              </p>
            </motion.div>
            <motion.a href="/contact" className="group flex flex-col justify-between rounded-2xl border border-primary/30 bg-foreground p-6 text-background transition-all duration-300 hover:-translate-y-1 hover:shadow-clay-hover sm:col-span-2 lg:col-span-1" data-testid="chatbot-feature-more" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div>
                <Sparkles className="mb-4 text-primary" aria-hidden="true" />
                <h3 className="mb-2 font-heading text-xl font-semibold text-white">
                  50+ more features
                </h3>
                <p className="text-sm leading-6 text-gray-400">
                  Sentiment scoring, A/B tested flows, on-premise deployment, custom analytics, role permissions, and whatever else your process needs.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Ask us about yours
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </motion.a>
          </div>
        </div>
      </section>
  );
}
