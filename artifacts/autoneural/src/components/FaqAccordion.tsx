import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

import { FAQ_GROUPS, type FaqGroup } from '@/lib/faq';

type Props = {
  /** Which set of questions to render. */
  group: FaqGroup;
  /** Index open on first paint; -1 for all closed. */
  defaultOpen?: number;
};

/**
 * The FAQ accordion.
 *
 * Answers stay mounted and are hidden with `height: 0` rather than being
 * unmounted, so every answer is present in the prerendered HTML for crawlers
 * and answer engines even while collapsed. `FAQPage` structured data is
 * generated from the same array in `lib/faq.ts`.
 */
export function FaqAccordion({ group, defaultOpen = 0 }: Props) {
  const items = FAQ_GROUPS[group];
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = idx === openIndex;
        const panelId = `faq-${group}-panel-${idx}`;
        const buttonId = `faq-${group}-button-${idx}`;

        return (
          <motion.div
            key={item.question}
            className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
              isOpen ? 'border-primary/35 bg-card shadow-clay' : 'border-border bg-card/55'
            }`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
                data-testid={`faq-question-${idx}`}
              >
                <span className="font-heading text-base font-semibold text-foreground md:text-lg">
                  {item.question}
                </span>
                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-colors ${
                    isOpen
                      ? 'border-primary bg-primary text-white'
                      : 'border-border text-secondary-foreground'
                  }`}
                >
                  {isOpen ? <Minus size={15} aria-hidden="true" /> : <Plus size={15} aria-hidden="true" />}
                </span>
              </button>
            </h3>

            {/* The panel stays mounted so its answer is in the prerendered HTML
                for crawlers and answer engines, and collapses via a CSS grid
                row (0fr -> 1fr) rather than an animated pixel height. That
                needs no JS measurement, so it cannot end up stuck part-open,
                and it still animates smoothly. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className="px-6 pb-6 text-sm leading-7 text-secondary-foreground md:text-base"
                  data-testid={`faq-answer-${idx}`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
