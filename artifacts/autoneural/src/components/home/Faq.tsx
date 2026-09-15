import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { FaqAccordion } from '@/components/FaqAccordion';
import { MessageCircleQuestionMark } from 'lucide-react';

export function Faq() {
  return (
      <section id="faq" className="bg-background py-24 md:py-28" data-testid="faq-section">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Straight answers
              </motion.p>
              <motion.h2 className="mb-5 font-serif text-4xl font-semibold leading-[0.98] text-foreground md:text-5xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Questions we get asked before every project.
              </motion.h2>
              <motion.p className="mb-8 max-w-md text-base leading-7 text-secondary-foreground" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                If something is not covered here, ask us directly — we would rather answer honestly than let you guess.
              </motion.p>
              <motion.div  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background shadow-clay transition-all duration-300 hover:-translate-y-1 hover:bg-accent md:text-base">
                  <MessageCircleQuestionMark size={17} aria-hidden="true" />
                  Ask your question
                </Link>
              </motion.div>
            </div>
            <FaqAccordion group="general" />
          </div>
        </div>
      </section>
  );
}
