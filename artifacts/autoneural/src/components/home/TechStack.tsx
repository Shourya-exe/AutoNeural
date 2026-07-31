import { motion } from 'framer-motion';
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, 
  SiNestjs, SiNodedotjs, SiPython, SiFastapi, 
  SiPostgresql, SiMongodb, SiRedis, 
  SiDocker, SiKubernetes, SiTerraform,
  SiLangchain, SiAnthropic
} from 'react-icons/si';
import { Cloud, Brain } from 'lucide-react';

export function TechStack() {
  const stack = [
    {
      category: "Frontend",
      techs: [
        { icon: SiReact, name: "React" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiTailwindcss, name: "Tailwind CSS" }
      ]
    },
    {
      category: "Backend",
      techs: [
        { icon: SiPython, name: "Python" },
        { icon: SiFastapi, name: "FastAPI" },
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiNestjs, name: "NestJS" }
      ]
    },
    {
      category: "Data & Cloud",
      techs: [
        { icon: SiPostgresql, name: "PostgreSQL" },
        { icon: SiRedis, name: "Redis" },
        { icon: Cloud, name: "AWS" },
        { icon: SiDocker, name: "Docker" }
      ]
    },
    {
      category: "AI & DevOps",
      techs: [
        { icon: Brain, name: "OpenAI" },
        { icon: SiLangchain, name: "LangChain" },
        { icon: SiAnthropic, name: "Anthropic" },
        { icon: SiKubernetes, name: "Kubernetes" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-background border-y border-border" data-testid="tech-stack-section">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            Built With Best-in-Class Technology
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h4 className="text-sm font-mono font-bold text-secondary-foreground uppercase tracking-widest mb-6 border-b border-border pb-2">
                {group.category}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {group.techs.map((tech, tIdx) => (
                  <div 
                    key={tIdx} 
                    className="flex flex-col items-center justify-center p-4 bg-muted rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-border transition-all duration-300 group"
                    title={tech.name}
                  >
                    <tech.icon size={32} className="text-secondary-foreground group-hover:text-primary transition-colors mb-3 grayscale group-hover:grayscale-0" />
                    <span className="text-xs font-medium text-secondary-foreground group-hover:text-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
