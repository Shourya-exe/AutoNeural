import { motion } from 'framer-motion';
import { Building2, Car, Factory, GraduationCap, HardHat, HeartPulse, House, Landmark, Ship, ShoppingBag, Truck, Utensils } from 'lucide-react';

export function Industries() {
  return (
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
  );
}
