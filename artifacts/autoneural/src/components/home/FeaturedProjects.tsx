import { motion } from 'framer-motion';

export function FeaturedProjects() {
  const projects = [
    {
      title: "AI Seafood Trade Operating System",
      category: "Platform & Automation",
      description: "Complete AI-powered trade OS for seafood exporters. Automated customs, pricing intelligence, and predictive buyer matching.",
      tech: ["React", "Python", "OpenAI", "PostgreSQL", "AWS"],
      image: "/attached_assets/generated_images/project-dashboard.jpg"
    },
    {
      title: "Healthcare AI Platform",
      category: "Predictive Machine Learning",
      description: "Patient outcome prediction and clinical workflow automation for NHS-scale deployments, reducing administrative overhead securely.",
      tech: ["TypeScript", "FastAPI", "PyTorch", "Terraform"],
      image: "/attached_assets/generated_images/project-dashboard.jpg"
    },
    {
      title: "Manufacturing Automation",
      category: "Computer Vision",
      description: "Computer vision plus robotics orchestration for precision manufacturing lines, achieving a 99.9% fault detection rate in real-time.",
      tech: ["C++", "TensorFlow", "Edge AI", "Docker"],
      image: "/attached_assets/generated_images/project-dashboard.jpg"
    },
    {
      title: "Enterprise CRM Automation",
      category: "Agentic AI",
      description: "AI-enhanced CRM replacing manual sales ops for a 500-person enterprise. Automated data entry, lead scoring, and meeting summarization.",
      tech: ["Salesforce", "LangChain", "Node.js", "Redis"],
      image: "/attached_assets/generated_images/project-dashboard.jpg"
    },
    {
      title: "Recruitment AI Agent",
      category: "Autonomous Systems",
      description: "End-to-end hiring automation: CV screening against complex heuristics, automated interview scheduling, and personalized candidate comms.",
      tech: ["Next.js", "OpenAI", "Pinecone", "Vercel"],
      image: "/attached_assets/generated_images/project-dashboard.jpg"
    },
    {
      title: "Financial Process Automation",
      category: "Workflow Automation",
      description: "Accounts payable and receivable automation cutting finance team overhead by 70%. Intelligent OCR and reconciliation pipelines.",
      tech: ["Azure", "Python", "React", "Azure Document Intelligence"],
      image: "/attached_assets/generated_images/project-dashboard.jpg"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-white" data-testid="featured-projects-section">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            Our Work
          </motion.h2>
          <motion.p
            className="text-lg text-secondary-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Mission-critical systems designed to handle immense scale. We don't build toys—we build infrastructure.
          </motion.p>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
              data-testid={`project-block-${index}`}
            >
              {/* Image side */}
              <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 1 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group border border-border shadow-clay">
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
              </motion.div>

              {/* Content side */}
              <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 1 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-col items-start">
                  <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium tracking-wide mb-6">
                    {project.category}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-lg text-secondary-foreground mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-muted text-foreground text-sm rounded-md border border-border">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors group"
                  >
                    View Case Study 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
