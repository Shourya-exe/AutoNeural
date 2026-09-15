import { motion } from 'framer-motion';

export function Hero() {
  return (
      <section className="relative overflow-hidden bg-background lg:min-h-[100dvh]" data-testid="hero-section">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,_rgba(241,236,229,0.88)_0%,_rgba(248,245,240,0.96)_44%,_rgba(241,236,229,0.8)_100%)]" />
        <div className="absolute bottom-0 left-0 h-44 w-full bg-gradient-to-t from-background to-transparent" />
        <div className="relative z-10 grid min-h-[100dvh] grid-cols-1 items-center gap-4 px-6 pb-12 pt-32 md:px-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:pb-0 lg:pt-28 xl:px-20">
          <div className="max-w-[760px]">
            <motion.p className="mb-6 flex flex-wrap items-center gap-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-secondary-foreground md:text-xs" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <span className="text-primary">
                AUTONEURAL
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              AI tools for real business work
            </motion.p>
            <motion.h1 className="mb-7 font-serif text-[clamp(3.4rem,7.4vw,8.1rem)] font-semibold leading-[0.88] tracking-normal text-foreground" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              Autoneural
              <span className="block">
                AI Systems
                <span className="text-primary">
                  .
                </span>
              </span>
            </motion.h1>
            <motion.div className="relative mb-7 h-[250px] overflow-hidden rounded-t-[7rem] bg-[linear-gradient(180deg,_rgba(107,30,50,0.10),_rgba(139,48,72,0.06)_58%,_transparent)] lg:hidden" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <img alt="Autoneural AI agents automating business workflows, connecting WhatsApp, Gmail, Slack and CRM tools" width={1106} height={1081} fetchPriority="high" decoding="async" className="absolute bottom-0 left-1/2 h-[108%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom" draggable="false" src="/media/hero-agents.webp" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
            </motion.div>
            <motion.p className="mb-7 max-w-xl text-base leading-8 text-secondary-foreground md:text-lg md:leading-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              We build practical AI tools that handle repetitive work, answer customers, organize data, and connect your business apps so your team can focus on growth.
            </motion.p>
            <motion.div className="mb-8 flex flex-wrap gap-2.5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(107,30,50,0.14)] bg-[rgba(248,245,240,0.75)] px-3.5 py-2 text-sm font-medium text-secondary-foreground shadow-sm backdrop-blur-md">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                AI workers
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(107,30,50,0.14)] bg-[rgba(248,245,240,0.75)] px-3.5 py-2 text-sm font-medium text-secondary-foreground shadow-sm backdrop-blur-md">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Task automation
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(107,30,50,0.14)] bg-[rgba(248,245,240,0.75)] px-3.5 py-2 text-sm font-medium text-secondary-foreground shadow-sm backdrop-blur-md">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Smart chatbots
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(107,30,50,0.14)] bg-[rgba(248,245,240,0.75)] px-3.5 py-2 text-sm font-medium text-secondary-foreground shadow-sm backdrop-blur-md">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Business dashboards
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(107,30,50,0.14)] bg-[rgba(248,245,240,0.75)] px-3.5 py-2 text-sm font-medium text-secondary-foreground shadow-sm backdrop-blur-md">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Custom software
              </span>
            </motion.div>
            <motion.div className="mb-8 flex flex-col flex-wrap gap-3 sm:flex-row" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <a href="#contact" className="rounded-full bg-primary px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground border border-white/20 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.35),0_8px_20px_-4px_rgba(107,30,50,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8B3048] hover:shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.5),0_12px_28px_-4px_rgba(107,30,50,0.45)] md:text-base" data-testid="hero-button-consultation">
                Book a Call
              </a>
              <a href="#projects" className="rounded-full border border-[rgba(107,30,50,0.14)] bg-[rgba(248,245,240,0.75)] px-6 py-3.5 text-center text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary md:text-base" data-testid="hero-button-work">
                View Work
              </a>
              <a href="https://wa.me/916297927642?text=Hi%20Autoneural!%20I'd%20like%20to%20discuss%20an%20AI%20project%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[#1F8F52] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#177242] md:text-base" data-testid="hero-button-whatsapp">
                <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z">
                  </path>
                </svg>
                WhatsApp
              </a>
            </motion.div>
            <motion.div className="hidden max-w-xl grid-cols-1 gap-3 sm:grid sm:grid-cols-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="border-l border-primary/35 pl-4">
                <div className="font-heading text-xl font-bold text-foreground md:text-2xl">
                  Less busywork
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-secondary-foreground">
                  for your team
                </div>
              </div>
              <div className="border-l border-primary/35 pl-4">
                <div className="font-heading text-xl font-bold text-foreground md:text-2xl">
                  Faster replies
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-secondary-foreground">
                  for customers
                </div>
              </div>
              <div className="border-l border-primary/35 pl-4">
                <div className="font-heading text-xl font-bold text-foreground md:text-2xl">
                  Clearer data
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-secondary-foreground">
                  for decisions
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div className="pointer-events-none relative hidden h-[calc(100dvh-7rem)] max-h-[840px] min-h-[650px] self-end overflow-hidden lg:block" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="absolute bottom-0 right-0 h-[82%] w-[92%] rounded-t-full bg-[linear-gradient(180deg,_rgba(107,30,50,0.10),_rgba(139,48,72,0.06)_55%,_transparent)]" />
            <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
            <img alt="Autoneural AI agents automating business workflows, connecting WhatsApp, Gmail, Slack and CRM tools" width={1106} height={1081} fetchPriority="high" decoding="async" className="absolute bottom-0 right-[-2vw] h-[92%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_30px_60px_rgba(44,30,20,0.18)]" draggable="false" src="/media/hero-agents.webp" />
          </motion.div>
        </div>
      </section>
  );
}
