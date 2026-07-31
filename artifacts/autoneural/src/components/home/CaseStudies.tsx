import { motion } from 'framer-motion';

export function CaseStudies() {
  const cases = [
    {
      metric: "80%",
      label: "Reduction in Manual Work",
      project: "Healthcare AI Platform",
      challenge: "High administrative burden tracking patient outcomes across thousands of records daily.",
      solution: "Deployed a secure predictive NLP system to automate clinical coding and extraction."
    },
    {
      metric: "5×",
      label: "Faster Processing",
      project: "Financial Process Automation",
      challenge: "Finance team struggling with backlogs due to manual invoice reconciliation.",
      solution: "End-to-end OCR and rule-based workflow pipelines handling AP/AR autonomously."
    },
    {
      metric: "92%",
      label: "Customer Satisfaction",
      project: "Enterprise CRM Automation",
      challenge: "Sales team missing quota due to time spent maintaining CRM data.",
      solution: "Agentic AI assistant handling data entry, scheduling, and meeting debriefs seamlessly."
    }
  ];

  return (
    <section className="py-24 bg-muted border-y border-border" data-testid="case-studies-section">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            Proven Results
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((cs, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-border hover:shadow-clay transition-all duration-300 flex flex-col h-full"
              data-testid={`case-study-card-${idx}`}
            >
              <div className="mb-8">
                <span className="text-6xl font-heading font-bold text-primary block mb-2">{cs.metric}</span>
                <span className="text-lg font-medium text-foreground">{cs.label}</span>
              </div>
              <div className="mb-6 border-b border-border pb-6">
                <span className="text-xs uppercase tracking-widest text-secondary-foreground font-semibold mb-2 block">Project</span>
                <h4 className="text-xl font-heading font-semibold text-foreground">{cs.project}</h4>
              </div>
              <div className="space-y-4 flex-grow">
                <div>
                  <span className="text-xs uppercase tracking-widest text-secondary-foreground font-semibold mb-1 block">Challenge</span>
                  <p className="text-sm text-secondary-foreground leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-secondary-foreground font-semibold mb-1 block">Solution</span>
                  <p className="text-sm text-foreground leading-relaxed font-medium">{cs.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
