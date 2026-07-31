import { motion } from 'framer-motion';
import { SiGoogle } from 'react-icons/si';
import { Building2 } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Autoneural didn't just build us software; they re-engineered our entire workflow. The AI platform they delivered paid for itself in three months.",
      name: "James Harrington",
      role: "COO",
      company: "Global Logistics Ltd",
      icon: Building2
    },
    {
      quote: "Their team possesses a rare combination of deep academic ML knowledge and pragmatic enterprise engineering. They delivered perfectly.",
      name: "Sarah Jenkins",
      role: "VP of Engineering",
      company: "FinTech Solutions",
      icon: SiGoogle
    },
    {
      quote: "The autonomous agents Autoneural built have allowed our sales team to focus entirely on closing. Administrative overhead is practically zero.",
      name: "Michael Chen",
      role: "Head of Sales Ops",
      company: "Enterprise CRM Inc",
      icon: Building2
    }
  ];

  return (
    <section className="py-32 bg-muted" data-testid="testimonials-section">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
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
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-border hover:shadow-clay transition-all duration-300 relative overflow-hidden group flex flex-col h-full"
              data-testid={`testimonial-card-${idx}`}
            >
              <div className="text-[120px] font-heading font-black text-primary/10 absolute -top-8 -left-2 leading-none group-hover:text-primary/20 transition-colors duration-500 pointer-events-none">
                "
              </div>
              <div className="relative z-10 flex-grow">
                <p className="text-xl text-foreground font-medium mb-10 leading-relaxed">
                  {test.quote}
                </p>
              </div>
              <div className="relative z-10 flex items-center justify-between border-t border-border pt-6 mt-auto">
                <div>
                  <h4 className="font-heading font-bold text-foreground">{test.name}</h4>
                  <p className="text-sm text-secondary-foreground">{test.role}</p>
                </div>
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-secondary-foreground">
                  <test.icon size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
