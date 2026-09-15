import { motion } from 'framer-motion';

export function Insights() {
  return (
      <section id="insights" className="py-32 bg-background" data-testid="insights-section">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <motion.h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                From the Team
              </motion.h2>
              <div className="w-20 h-1 bg-primary rounded-full" style={{ width: '0px' }} />
            </div>
            <motion.a href="#insights" className="text-primary font-medium hover:text-foreground transition-colors inline-flex items-center gap-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              View All Notes →
            </motion.a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="group cursor-pointer" data-testid="insight-card-0" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="block p-8 rounded-2xl bg-muted border border-border group-hover:bg-white group-hover:shadow-clay group-hover:border-primary/20 transition-all duration-500 h-full flex flex-col">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-white border border-border rounded-md text-xs font-mono font-medium text-foreground tracking-wide group-hover:border-primary/20 transition-colors">
                    AI Agents
                  </span>
                  <span className="text-sm text-secondary-foreground">
                    18 Jun 2026
                  </span>
                  <span className="text-sm text-secondary-foreground">
                    · 6 min read
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  AI agents vs chatbots: what actually changes for your business
                </h3>
                <p className="text-secondary-foreground mb-8 leading-relaxed flex-grow">
                  A chatbot answers. An agent acts. Here is where the line sits, and how to tell which one your process needs.
                </p>
                <div className="mt-auto font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  Read More
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div className="group cursor-pointer" data-testid="insight-card-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="block p-8 rounded-2xl bg-muted border border-border group-hover:bg-white group-hover:shadow-clay group-hover:border-primary/20 transition-all duration-500 h-full flex flex-col">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-white border border-border rounded-md text-xs font-mono font-medium text-foreground tracking-wide group-hover:border-primary/20 transition-colors">
                    Automation
                  </span>
                  <span className="text-sm text-secondary-foreground">
                    2 May 2026
                  </span>
                  <span className="text-sm text-secondary-foreground">
                    · 8 min read
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  The WhatsApp automation playbook for Indian businesses
                </h3>
                <p className="text-secondary-foreground mb-8 leading-relaxed flex-grow">
                  Template approval, opt-outs, broadcast limits, and the flows that actually convert on the official Business API.
                </p>
                <div className="mt-auto font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  Read More
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div className="group cursor-pointer" data-testid="insight-card-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="block p-8 rounded-2xl bg-muted border border-border group-hover:bg-white group-hover:shadow-clay group-hover:border-primary/20 transition-all duration-500 h-full flex flex-col">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-white border border-border rounded-md text-xs font-mono font-medium text-foreground tracking-wide group-hover:border-primary/20 transition-colors">
                    Web Development
                  </span>
                  <span className="text-sm text-secondary-foreground">
                    21 Mar 2026
                  </span>
                  <span className="text-sm text-secondary-foreground">
                    · 5 min read
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  Website speed is a revenue metric, not a vanity score
                </h3>
                <p className="text-secondary-foreground mb-8 leading-relaxed flex-grow">
                  What a 1-second delay costs on mobile, and the five fixes that recover most of it without a redesign.
                </p>
                <div className="mt-auto font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  Read More
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}
