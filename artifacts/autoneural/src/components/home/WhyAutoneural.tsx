import { motion } from 'framer-motion';

export function WhyAutoneural() {
  return (
      <section className="py-24 bg-foreground text-background" data-testid="why-autoneural-section">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                The Autoneural Difference
              </motion.h2>
              <motion.p className="text-lg text-gray-400 mb-8 max-w-md" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Most businesses do not need more complicated software. They need tools that remove delays, reduce mistakes, and make daily work easier.
              </motion.p>
              <motion.div  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <a href="#contact" className="inline-block rounded-full bg-gradient-to-r from-[#8B3048] via-[#6B1E32] to-[#451323] px-8 py-4 text-base font-medium text-white border border-white/20 shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.4),0_8px_24px_-4px_rgba(107,30,50,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.6),0_14px_30px_-4px_rgba(107,30,50,0.55)]">
                  Transform Your Business
                </a>
              </motion.div>
            </div>
            <motion.div className="rounded-3xl border border-white/15 bg-white/[0.06] p-8 md:p-12 backdrop-blur-md shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.15),0_20px_45px_-10px_rgba(0,0,0,0.5)]" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="space-y-8">
                <div className="flex justify-between text-xs font-mono font-bold tracking-widest uppercase border-b border-white/10 pb-4">
                  <span className="text-gray-500">
                    The usual way
                  </span>
                  <span className="text-primary text-right">
                    With Autoneural
                  </span>
                </div>
                <div className="flex justify-between items-center gap-4 group">
                  <span className="text-sm md:text-lg text-gray-500 line-through decoration-gray-600 w-1/2">
                    Repeated manual tasks
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-500 group-hover:text-primary transition-colors">
                      →
                    </span>
                  </div>
                  <span className="text-base md:text-xl font-heading font-bold text-white w-1/2 text-right">
                    Work done automatically
                  </span>
                </div>
                <div className="flex justify-between items-center gap-4 group">
                  <span className="text-sm md:text-lg text-gray-500 line-through decoration-gray-600 w-1/2">
                    Long software projects
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-500 group-hover:text-primary transition-colors">
                      →
                    </span>
                  </div>
                  <span className="text-base md:text-xl font-heading font-bold text-white w-1/2 text-right">
                    Useful tools launched faster
                  </span>
                </div>
                <div className="flex justify-between items-center gap-4 group">
                  <span className="text-sm md:text-lg text-gray-500 line-through decoration-gray-600 w-1/2">
                    Reports after the problem
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-500 group-hover:text-primary transition-colors">
                      →
                    </span>
                  </div>
                  <span className="text-base md:text-xl font-heading font-bold text-white w-1/2 text-right">
                    Clear updates while work happens
                  </span>
                </div>
                <div className="flex justify-between items-center gap-4 group">
                  <span className="text-sm md:text-lg text-gray-500 line-through decoration-gray-600 w-1/2">
                    Apps that do not talk
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-500 group-hover:text-primary transition-colors">
                      →
                    </span>
                  </div>
                  <span className="text-base md:text-xl font-heading font-bold text-white w-1/2 text-right">
                    Connected tools and data
                  </span>
                </div>
                <div className="flex justify-between items-center gap-4 group">
                  <span className="text-sm md:text-lg text-gray-500 line-through decoration-gray-600 w-1/2">
                    One-size-fits-all software
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-500 group-hover:text-primary transition-colors">
                      →
                    </span>
                  </div>
                  <span className="text-base md:text-xl font-heading font-bold text-white w-1/2 text-right">
                    Built around your business
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}
