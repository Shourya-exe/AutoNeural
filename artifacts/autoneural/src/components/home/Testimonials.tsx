import { motion } from 'framer-motion';
import { Building2, Quote, Star } from 'lucide-react';

export function Testimonials() {
  return (
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
            <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay-hover" data-testid="testimonial-card-0" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
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
            <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay-hover" data-testid="testimonial-card-1" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
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
            <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay-hover" data-testid="testimonial-card-2" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
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
            <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay-hover" data-testid="testimonial-card-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
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
            <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay-hover" data-testid="testimonial-card-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
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
            <motion.div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(107,30,50,0.12)] bg-[rgba(248,245,240,0.85)] backdrop-blur-md p-8 shadow-clay transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-clay-hover" data-testid="testimonial-card-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
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
  );
}
