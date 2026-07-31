import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Search, FlaskConical, LayoutTemplate, PenTool, Code2, CheckCircle2, Rocket, Activity, RefreshCw } from 'lucide-react';

export function Process() {
  const steps = [
    { name: "Discovery", desc: "Understanding constraints and requirements.", icon: Search },
    { name: "Research", desc: "Data audit, tech stack evaluation, and feasibility.", icon: FlaskConical },
    { name: "Architecture", desc: "System design, security protocol, and data modeling.", icon: LayoutTemplate },
    { name: "Design", desc: "UI/UX, human-in-the-loop interfaces.", icon: PenTool },
    { name: "Development", desc: "Iterative sprints with core engineering.", icon: Code2 },
    { name: "Testing", desc: "QA, penetration testing, model validation.", icon: CheckCircle2 },
    { name: "Deployment", desc: "CI/CD pipelines, containerized rollout.", icon: Rocket },
    { name: "Monitoring", desc: "Observability, logging, performance tracking.", icon: Activity },
    { name: "Optimisation", desc: "Continuous model training and cost optimization.", icon: RefreshCw }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-muted relative" data-testid="process-section">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            How We Work
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Background Track Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-border transform md:-translate-x-1/2 rounded-full" />
          
          {/* Animated Fill Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-primary transform md:-translate-x-1/2 rounded-full origin-top"
            style={{ height }}
          />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center w-full" data-testid={`process-step-${index}`}>
                  {/* Icon Center */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-muted flex items-center justify-center z-10 shadow-sm">
                    <step.icon size={20} className="text-primary" />
                  </div>

                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                      <span className="text-xs font-mono font-bold text-primary mb-2 block tracking-widest">
                        PHASE 0{index + 1}
                      </span>
                      <h4 className="text-xl font-heading font-bold text-foreground mb-2">{step.name}</h4>
                      <p className="text-secondary-foreground text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
