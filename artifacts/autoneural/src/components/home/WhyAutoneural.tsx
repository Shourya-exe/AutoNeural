import { motion } from 'framer-motion';

export function WhyAutoneural() {
  const comparisons = [
    { old: "Manual Repetitive Work", new: "Autonomous AI Agents" },
    { old: "Months of Development", new: "Weeks to Deployment" },
    { old: "Reactive Reporting", new: "Predictive Intelligence" },
    { old: "Disconnected Systems", new: "Unified Ecosystems" },
    { old: "Generic SaaS Subscriptions", new: "Purpose-Built Solutions" }
  ];

  return (
    <section className="py-24 bg-foreground text-background" data-testid="why-autoneural-section">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              The Autoneural Difference
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Traditional software solves yesterday's problems. We build intelligent systems designed to adapt to tomorrow.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a 
                href="#contact" 
                className="bg-primary text-white px-8 py-4 rounded-full text-base font-medium shadow-clay hover:shadow-clay-hover hover:-translate-y-1 transition-all duration-300 inline-block"
              >
                Transform Your Business
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm"
          >
            <div className="space-y-8">
              <div className="flex justify-between text-xs font-mono font-bold tracking-widest uppercase border-b border-white/10 pb-4">
                <span className="text-gray-500">Traditional Software</span>
                <span className="text-primary text-right">Autoneural AI</span>
              </div>
              
              {comparisons.map((row, idx) => (
                <div key={idx} className="flex justify-between items-center gap-4 group">
                  <span className="text-sm md:text-lg text-gray-500 line-through decoration-gray-600 w-1/2">
                    {row.old}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-500 group-hover:text-primary transition-colors">→</span>
                  </div>
                  <span className="text-base md:text-xl font-heading font-bold text-white w-1/2 text-right">
                    {row.new}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
