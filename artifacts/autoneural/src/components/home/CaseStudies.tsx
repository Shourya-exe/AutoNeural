import { motion } from 'framer-motion';

export function CaseStudies() {
  return (
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
  );
}
