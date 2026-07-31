import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          // easeOutQuart
          const easeOut = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(end * easeOut));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function Statistics() {
  const stats = [
    { value: 120, suffix: "+", label: "Projects Delivered" },
    { value: 40, suffix: "+", label: "Enterprise Clients" },
    { value: 12, suffix: "", label: "Countries Served" },
    { value: 2, suffix: "M+", label: "Processes Automated" },
    { value: 500, suffix: "K+", label: "Hours Saved" },
    { value: 98, suffix: "%", label: "Customer Satisfaction" },
  ];

  return (
    <section className="py-24 bg-muted" data-testid="statistics-section">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border flex flex-col justify-center items-center text-center"
              data-testid={`stat-card-${index}`}
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-3 tracking-tight">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-secondary-foreground font-medium text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
