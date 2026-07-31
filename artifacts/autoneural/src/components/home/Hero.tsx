import { motion } from 'framer-motion';
import foundersImg from '@assets/founders_no_bg.png';

// ✏️ Update with your actual WhatsApp number (country code, no + or spaces)
const WHATSAPP_NUMBER = '447000000000';
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Autoneural! I'd like to discuss an AI project for my business.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background"
      data-testid="hero-section"
    >
      {/* Subtle vignette on left edge */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(ellipse_at_left,_rgba(53,88,230,0.04),_transparent_70%)] pointer-events-none -z-0" />

      {/* ── LEFT: text content ── */}
      <div className="relative z-10 w-full pt-32 pb-20 px-6 md:px-12 lg:px-16 xl:px-24 max-w-[52%]">

        {/* Eyebrow */}
        <motion.p
          className="text-primary font-mono text-xs font-semibold uppercase tracking-[0.2em] mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          AI‑First · Future‑Driven
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[1.02] font-heading font-bold text-foreground tracking-[-0.03em] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          Building AI That Works.{' '}
          <span className="text-primary">Scaling Businesses</span>{' '}
          That Win.
        </motion.h1>

        {/* Service pills */}
        <motion.div
          className="flex flex-wrap gap-2.5 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {['AI Automation', 'AI Agents', 'Enterprise Software', 'Intelligent Workflows'].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium shadow-clay hover:shadow-clay-hover hover:-translate-y-1 transition-all duration-300 text-center"
            data-testid="hero-button-consultation"
          >
            Book a Consultation
          </a>
          <a
            href="#projects"
            className="bg-transparent text-foreground border border-border hover:border-foreground hover:bg-muted px-8 py-4 rounded-full text-base font-medium transition-all duration-300 text-center"
            data-testid="hero-button-work"
          >
            View Our Work
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#1ebe5d] hover:-translate-y-1 transition-all duration-300"
            data-testid="hero-button-whatsapp"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="hidden lg:flex items-center gap-3 mt-16 text-xs font-mono text-muted-foreground uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="w-px h-10 bg-border origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          Scroll
        </motion.div>
      </div>

      {/* ── RIGHT: founders cutout ── */}
      <motion.div
        className="absolute right-0 bottom-0 h-full w-[52%] pointer-events-none select-none hidden lg:block"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Soft fade-in from left so cutout blends into background */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Soft fade from bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

        <img
          src={foundersImg}
          alt="Autoneural Founders"
          className="absolute bottom-0 right-0 h-[95%] w-auto object-contain object-bottom"
          draggable={false}
        />
      </motion.div>

      {/* Mobile: stacked founders image */}
      <motion.div
        className="lg:hidden absolute bottom-0 right-0 w-full opacity-10 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src={foundersImg}
          alt=""
          className="w-full object-contain object-bottom"
          draggable={false}
        />
      </motion.div>
    </section>
  );
}
