import { motion } from 'framer-motion';

export function Insights() {
  const insights = [
    {
      tag: "Artificial Intelligence",
      title: "The Shift from Generative to Agentic AI in the Enterprise",
      excerpt: "Why chat interfaces were just the beginning, and how autonomous agents are reshaping organizational structures.",
      date: "Oct 24, 2025"
    },
    {
      tag: "Enterprise Software",
      title: "Building Resilient Data Pipelines for Machine Learning",
      excerpt: "The unglamorous but essential reality of production ML: getting your data infrastructure right before training models.",
      date: "Oct 12, 2025"
    },
    {
      tag: "Automation",
      title: "Measuring ROI on Intelligent Workflow Automation",
      excerpt: "A framework for calculating the true financial impact of replacing manual processes with AI orchestration.",
      date: "Sep 28, 2025"
    }
  ];

  return (
    <section id="insights" className="py-32 bg-white" data-testid="insights-section">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              From the Team
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
          <motion.a 
            href="#" 
            className="text-primary font-medium hover:text-foreground transition-colors inline-flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            View All Insights →
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
              data-testid={`insight-card-${idx}`}
            >
              <div className="block p-8 rounded-2xl bg-muted border border-border group-hover:bg-white group-hover:shadow-clay group-hover:border-primary/20 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-white border border-border rounded-md text-xs font-mono font-medium text-foreground tracking-wide group-hover:border-primary/20 transition-colors">
                    {post.tag}
                  </span>
                  <span className="text-sm text-secondary-foreground">{post.date}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-secondary-foreground mb-8 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  Read More <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
