import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ContactForm';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export function Contact() {
  return (
      <section id="contact" className="bg-foreground py-0 text-background" data-testid="contact-section">
        <div className="grid min-h-[780px] grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-20 xl:px-24">
            <motion.div  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Get in touch
              </p>
              <h2 className="mb-6 font-serif text-5xl font-semibold leading-[0.96] text-white md:text-6xl">
                Tell us what you want to make easier.
              </h2>
              <p className="mb-10 max-w-xl text-lg leading-8 text-gray-400">
                Share the work that takes too much time, the customer questions you keep answering, or the reports your team builds by hand. We will suggest a practical AI or automation plan.
              </p>
              <ContactForm />
            </motion.div>
          </div>
          <div className="relative flex overflow-hidden border-l border-white/5 bg-[#111]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#111_100%)]" />
            <div className="relative z-10 flex flex-col justify-center gap-10 p-8 md:p-12 lg:p-20">
              <div>
                <h3 className="mb-4 font-heading text-3xl font-bold text-white">
                  What happens next
                </h3>
                <p className="max-w-xl text-base leading-8 text-gray-400">
                  We read your message, understand the business problem, and reply with the simplest next step. No heavy technical explanation needed.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-2 flex items-center gap-3 text-white">
                    <MessageCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span className="font-semibold">
                      1. Quick discussion
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-gray-400">
                    We discuss your current work process and where time is being lost.
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-2 flex items-center gap-3 text-white">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span className="font-semibold">
                      2. Simple solution plan
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-gray-400">
                    You get a clear plan for what can be automated, what it may cost, and how long it can take.
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-2 flex items-center gap-3 text-white">
                    <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span className="font-semibold">
                      3. Build and support
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-gray-400">
                    We build, test, launch, and help your team use the system confidently.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="mb-6 font-heading text-2xl font-bold text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a href="mailto:autoneural.official3011@gmail.com" className="flex items-center gap-4 text-gray-400 transition-colors hover:text-primary">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5">
                      <Mail size={18} className="text-white" aria-hidden="true" />
                    </span>
                    <span className="break-all text-base">
                      autoneural.official3011@gmail.com
                    </span>
                  </a>
                  <a href="mailto:official@autoneural.in" className="flex items-center gap-4 text-gray-400 transition-colors hover:text-primary">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5">
                      <Mail size={18} className="text-white" aria-hidden="true" />
                    </span>
                    <span className="break-all text-base">
                      official@autoneural.in
                    </span>
                  </a>
                  <a href="tel:+916297927642" className="flex items-center gap-4 text-gray-400 transition-colors hover:text-primary">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5">
                      <Phone size={18} className="text-white" aria-hidden="true" />
                    </span>
                    <span className="text-base">
                      +91 62979 27642
                    </span>
                  </a>
                  <div className="flex items-center gap-4 text-gray-400">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5">
                      <MapPin size={18} className="text-white" aria-hidden="true" />
                    </span>
                    <span className="text-base">
                      India, serving businesses worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
