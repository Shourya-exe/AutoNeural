import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import projectImg from '@assets/generated_images/project-dashboard.jpg';

const projects = [
  {
    title: "AI Seafood Trade Operating System",
    category: "Platform & Automation",
    description: "Complete AI-powered trade OS for seafood exporters. Automated customs, pricing intelligence, and predictive buyer matching.",
    tech: ["React", "Python", "OpenAI", "PostgreSQL", "AWS"],
    image: projectImg,
  },
  {
    title: "Healthcare AI Platform",
    category: "Predictive Machine Learning",
    description: "Patient outcome prediction and clinical workflow automation for NHS-scale deployments, reducing administrative overhead securely.",
    tech: ["TypeScript", "FastAPI", "PyTorch", "Terraform"],
    image: projectImg,
  },
  {
    title: "Manufacturing Automation",
    category: "Computer Vision",
    description: "Computer vision plus robotics orchestration for precision manufacturing lines, achieving a 99.9% fault detection rate in real-time.",
    tech: ["C++", "TensorFlow", "Edge AI", "Docker"],
    image: projectImg,
  },
  {
    title: "Enterprise CRM Automation",
    category: "Agentic AI",
    description: "AI-enhanced CRM replacing manual sales ops for a 500-person enterprise. Automated data entry, lead scoring, and meeting summarization.",
    tech: ["Salesforce", "LangChain", "Node.js", "Redis"],
    image: projectImg,
  },
  {
    title: "Recruitment AI Agent",
    category: "Autonomous Systems",
    description: "End-to-end hiring automation: CV screening against complex heuristics, automated interview scheduling, and personalised candidate comms.",
    tech: ["Next.js", "OpenAI", "Pinecone", "Vercel"],
    image: projectImg,
  },
  {
    title: "Financial Process Automation",
    category: "Workflow Automation",
    description: "Accounts payable and receivable automation cutting finance team overhead by 70%. Intelligent OCR and reconciliation pipelines.",
    tech: ["Azure", "Python", "React", "Azure Document Intelligence"],
    image: projectImg,
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 bg-background" data-testid="featured-projects-section">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <motion.p
            className="text-primary font-mono text-xs font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            Selected Work
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            Projects That Move Industries
          </motion.h2>
          <motion.p
            className="text-lg text-secondary-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From intelligent trade platforms to autonomous AI agents — each project is a production-grade solution built for real enterprise scale.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group bg-[#FAF9F6] border border-border rounded-3xl overflow-hidden hover:shadow-clay hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              data-testid={`project-card-${idx}`}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <p className="text-primary font-mono text-xs font-semibold uppercase tracking-widest mb-3">
                  {project.category}
                </p>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-heading font-bold text-foreground leading-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground flex-shrink-0 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 mt-0.5" />
                </div>
                <p className="text-secondary-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono bg-white border border-border text-secondary-foreground px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
