import { motion } from 'framer-motion';
import { DynamicWorkflow } from './DynamicWorkflow';

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-28 overflow-hidden bg-[#191b1f] py-24 text-white" data-testid="process-section">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.035)_0,rgba(255,255,255,0.035)_2px,transparent_2px,transparent_10px)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,211,102,0.10),transparent_34%),radial-gradient(circle_at_85%_65%,rgba(211,106,38,0.12),transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="mb-10 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              n8n-style Agent Flow
            </motion.p>
            <motion.h2 className="font-serif text-5xl font-semibold leading-[0.96] md:text-6xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              A real automation map, not just theory.
            </motion.h2>
          </div>
          <motion.p className="max-w-2xl text-lg leading-8 text-slate-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            This is how we design agentic workflows: a trigger starts the flow, conditions split the path, AI prepares the data, the agent uses memory and tools, then the final answer or action is sent back.
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <DynamicWorkflow />
        </motion.div>
      </div>
    </section>
  );
}
