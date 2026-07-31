import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Bot, 
  Workflow, 
  Code, 
  Database, 
  Unplug, 
  Sparkles, 
  BrainCircuit, 
  Cloud, 
  LineChart, 
  Cpu, 
  Blocks 
} from 'lucide-react';

export function Services() {
  const services = [
    { icon: Lightbulb, name: "AI Consulting", desc: "Strategic AI roadmaps for enterprise transformation" },
    { icon: Bot, name: "AI Agent Development", desc: "Autonomous AI agents that work 24/7" },
    { icon: Workflow, name: "Business Process Automation", desc: "End-to-end workflow automation" },
    { icon: Code, name: "Enterprise Software", desc: "Bespoke platforms built to scale" },
    { icon: Database, name: "Custom CRM & ERP", desc: "Systems designed around your workflow" },
    { icon: Unplug, name: "Workflow Automation", desc: "Connect every tool in your stack" },
    { icon: Sparkles, name: "Generative AI Solutions", desc: "LLMs and gen-AI embedded in your products" },
    { icon: BrainCircuit, name: "Machine Learning", desc: "Predictive models built on your data" },
    { icon: Cloud, name: "Cloud Architecture", desc: "Scalable, secure cloud-native infrastructure" },
    { icon: LineChart, name: "Data Engineering", desc: "Pipelines that turn raw data into insight" },
    { icon: Cpu, name: "MLOps", desc: "Production ML that actually stays in production" },
    { icon: Blocks, name: "AI Integration", desc: "Connect AI to your existing systems seamlessly" }
  ];

  return (
    <section id="services" className="py-24 bg-background" data-testid="services-section">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            What We Build
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-clay hover:-translate-y-1 transition-all duration-300 group"
              data-testid={`service-card-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.name}
              </h3>
              <p className="text-secondary-foreground text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
