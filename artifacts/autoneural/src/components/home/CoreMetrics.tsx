import { motion } from 'framer-motion';
import { ArrowUpRight, ChartColumn, Clock4, Download, Gauge, Target, TrendingUp, Users } from 'lucide-react';

export function CoreMetrics() {
  return (
      <section id="metrics" className="relative overflow-hidden bg-foreground py-24 text-background md:py-28" data-testid="core-metrics-section">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="pointer-events-none absolute -right-20 top-10 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
            <div>
              <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Analyse · Core Metrics
              </motion.p>
              <motion.h2 className="mb-6 font-serif text-5xl font-semibold leading-[0.96] text-white md:text-6xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Track what matters. Download the proof.
              </motion.h2>
              <motion.p className="mb-9 max-w-xl text-lg leading-8 text-gray-400" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Every conversation is measured — volume, response time, resolution rate, leads captured, and revenue influenced. You get one dashboard that tells you whether the system is actually earning its place.
              </motion.p>
              <div className="mb-10 space-y-5">
                <motion.div className="flex gap-4" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary">
                    <TrendingUp size={19} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="mb-1 font-heading text-base font-semibold text-white">
                      Funnel visibility
                    </h3>
                    <p className="max-w-md text-sm leading-6 text-gray-400">
                      See where conversations start, stall, and convert — per channel, per campaign, per agent.
                    </p>
                  </div>
                </motion.div>
                <motion.div className="flex gap-4" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary">
                    <ChartColumn size={19} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="mb-1 font-heading text-base font-semibold text-white">
                      Patterns, not just numbers
                    </h3>
                    <p className="max-w-md text-sm leading-6 text-gray-400">
                      The top unanswered questions and repeat complaints, grouped automatically each week.
                    </p>
                  </div>
                </motion.div>
                <motion.div className="flex gap-4" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary">
                    <Download size={19} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="mb-1 font-heading text-base font-semibold text-white">
                      Exportable reports
                    </h3>
                    <p className="max-w-md text-sm leading-6 text-gray-400">
                      Scheduled CSV and PDF summaries delivered to your inbox or straight into your BI tool.
                    </p>
                  </div>
                </motion.div>
              </div>
              <motion.a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-clay transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                See a live dashboard
                <ArrowUpRight size={18} aria-hidden="true" />
              </motion.a>
            </div>
            <motion.div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm md:p-7" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-heading text-sm font-semibold text-white">
                    Conversation analytics
                  </p>
                  <p className="text-xs text-gray-500">
                    Last 7 days · all channels
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1.5 text-xs font-semibold text-primary">
                  <TrendingUp size={13} aria-hidden="true" />
                  +34% vs last week
                </span>
              </div>
              <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <Users size={18} className="mb-4 text-primary" aria-hidden="true" />
                  <div className="font-heading text-2xl font-bold text-white md:text-3xl">
                    0
                  </div>
                  <p className="mt-1.5 text-xs leading-5 text-gray-400">
                    Conversations handled
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <Target size={18} className="mb-4 text-primary" aria-hidden="true" />
                  <div className="font-heading text-2xl font-bold text-white md:text-3xl">
                    0
                  </div>
                  <p className="mt-1.5 text-xs leading-5 text-gray-400">
                    Qualified leads captured
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <Gauge size={18} className="mb-4 text-primary" aria-hidden="true" />
                  <div className="font-heading text-2xl font-bold text-white md:text-3xl">
                    0%
                  </div>
                  <p className="mt-1.5 text-xs leading-5 text-gray-400">
                    Resolved without a human
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <Clock4 size={18} className="lucide-clock-4 mb-4 text-primary" aria-hidden="true" />
                  <div className="font-heading text-2xl font-bold text-white md:text-3xl">
                    0.0s
                  </div>
                  <p className="mt-1.5 text-xs leading-5 text-gray-400">
                    Average first response
                  </p>
                </div>
              </div>
              <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                    Volume by day
                  </p>
                  <div className="flex items-center gap-4 text-[0.68rem] text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-sm bg-primary" />
                      Chat
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-sm bg-[#8B5CF6]" />
                      Voice
                    </span>
                  </div>
                </div>
                <div className="flex h-40 items-end justify-between gap-2 sm:gap-3">
                  <div className="flex flex-1 flex-col items-center gap-2">
                    <div className="flex w-full flex-col justify-end gap-0.5" style={{ height: '9rem' }}>
                      <div className="w-full rounded-t-md bg-[#8B5CF6]" style={{ height: '0px' }} />
                      <div className="w-full rounded-b-md bg-primary" title="90 conversations" style={{ height: '0px' }} />
                    </div>
                    <span className="text-[0.66rem] font-medium text-gray-500">
                      Mon
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-2">
                    <div className="flex w-full flex-col justify-end gap-0.5" style={{ height: '9rem' }}>
                      <div className="w-full rounded-t-md bg-[#8B5CF6]" style={{ height: '0px' }} />
                      <div className="w-full rounded-b-md bg-primary" title="108 conversations" style={{ height: '0px' }} />
                    </div>
                    <span className="text-[0.66rem] font-medium text-gray-500">
                      Tue
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-2">
                    <div className="flex w-full flex-col justify-end gap-0.5" style={{ height: '9rem' }}>
                      <div className="w-full rounded-t-md bg-[#8B5CF6]" style={{ height: '0px' }} />
                      <div className="w-full rounded-b-md bg-primary" title="98 conversations" style={{ height: '0px' }} />
                    </div>
                    <span className="text-[0.66rem] font-medium text-gray-500">
                      Wed
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-2">
                    <div className="flex w-full flex-col justify-end gap-0.5" style={{ height: '9rem' }}>
                      <div className="w-full rounded-t-md bg-[#8B5CF6]" style={{ height: '0px' }} />
                      <div className="w-full rounded-b-md bg-primary" title="134 conversations" style={{ height: '0px' }} />
                    </div>
                    <span className="text-[0.66rem] font-medium text-gray-500">
                      Thu
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-2">
                    <div className="flex w-full flex-col justify-end gap-0.5" style={{ height: '9rem' }}>
                      <div className="w-full rounded-t-md bg-[#8B5CF6]" style={{ height: '0px' }} />
                      <div className="w-full rounded-b-md bg-primary" title="148 conversations" style={{ height: '0px' }} />
                    </div>
                    <span className="text-[0.66rem] font-medium text-gray-500">
                      Fri
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-2">
                    <div className="flex w-full flex-col justify-end gap-0.5" style={{ height: '9rem' }}>
                      <div className="w-full rounded-t-md bg-[#8B5CF6]" style={{ height: '0px' }} />
                      <div className="w-full rounded-b-md bg-primary" title="101 conversations" style={{ height: '0px' }} />
                    </div>
                    <span className="text-[0.66rem] font-medium text-gray-500">
                      Sat
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-2">
                    <div className="flex w-full flex-col justify-end gap-0.5" style={{ height: '9rem' }}>
                      <div className="w-full rounded-t-md bg-[#8B5CF6]" style={{ height: '0px' }} />
                      <div className="w-full rounded-b-md bg-primary" title="67 conversations" style={{ height: '0px' }} />
                    </div>
                    <span className="text-[0.66rem] font-medium text-gray-500">
                      Sun
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                  Where conversations came from
                </p>
                <div className="space-y-3.5">
                  <div>
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <span className="text-gray-300">
                        WhatsApp
                      </span>
                      <span className="font-mono font-semibold text-white">
                        41%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full" style={{ backgroundColor: 'rgb(31, 143, 82)', width: '0px' }} />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <span className="text-gray-300">
                        Website
                      </span>
                      <span className="font-mono font-semibold text-white">
                        27%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full" style={{ backgroundColor: 'rgb(139, 48, 72)', width: '0px' }} />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <span className="text-gray-300">
                        Voice calls
                      </span>
                      <span className="font-mono font-semibold text-white">
                        16%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full" style={{ backgroundColor: 'rgb(139, 92, 246)', width: '0px' }} />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <span className="text-gray-300">
                        Instagram
                      </span>
                      <span className="font-mono font-semibold text-white">
                        10%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full" style={{ backgroundColor: 'rgb(193, 53, 132)', width: '0px' }} />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <span className="text-gray-300">
                        Others
                      </span>
                      <span className="font-mono font-semibold text-white">
                        6%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full" style={{ backgroundColor: 'rgb(122, 107, 91)', width: '0px' }} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-center text-[0.68rem] leading-5 text-gray-600">
                Illustrative dashboard. Your metrics, channels, and report schedule are configured to your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
  );
}
