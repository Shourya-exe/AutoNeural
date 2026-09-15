import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Headline numbers.
 *
 * The figure is rendered at its **final value** during prerendering, so
 * crawlers, answer engines and no-JS visitors read "120+" rather than the
 * count-up's starting "0+". The animation then runs from 0 on the client once
 * the card scrolls into view.
 *
 * The value is deliberately not a heading — a screen reader announcing
 * "heading level 3, 0 plus" is noise. The number and its label are exposed as
 * one labelled group instead.
 */

type Stat = {
  key: string;
  label: string;
  value: number;
  suffix: string;
};

const STATS: Stat[] = [
  { key: 'projects', label: 'Projects Delivered', value: 120, suffix: '+' },
  { key: 'clients', label: 'Business Clients', value: 40, suffix: '+' },
  { key: 'countries', label: 'Countries Served', value: 12, suffix: '' },
  { key: 'processes', label: 'Processes Automated', value: 2, suffix: 'M+' },
  { key: 'hours', label: 'Hours Saved', value: 500, suffix: 'K+' },
  { key: 'satisfaction', label: 'Client Satisfaction', value: 98, suffix: '%' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  // Starts at the real number so server and first client paint agree; the
  // effect below rewinds to 0 and counts up only once, in the browser.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let start: number | undefined;
    const duration = 2000;

    const step = (now: number) => {
      start ??= now;
      const progress = Math.min((now - start) / duration, 1);
      // easeOutQuart
      setDisplay(Math.floor(value * (1 - Math.pow(1 - progress, 4))));
      if (progress < 1) frame = requestAnimationFrame(step);
      else setDisplay(value);
    };

    setDisplay(0);
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <section className="py-24 bg-muted" data-testid="statistics-section">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="sr-only">Autoneural by the numbers</h2>
        <dl className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.key}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border flex flex-col justify-center items-center text-center"
              data-testid={`stat-card-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <dd className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-3 tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="text-secondary-foreground font-medium text-sm md:text-base">
                {stat.label}
              </dt>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
