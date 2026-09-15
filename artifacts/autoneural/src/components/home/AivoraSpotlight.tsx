import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, CalendarCheck, Database, Mic, PhoneCall, PhoneOff, Volume2 } from 'lucide-react';

export function AivoraSpotlight() {
  return (
      <section id="aivora" className="relative overflow-hidden border-y border-aivora/25 py-24 md:py-28" data-testid="aivora-spotlight">
        <div className="absolute inset-0 bg-[linear-gradient(125deg,_rgba(241,236,229,0.85)_0%,_rgba(248,245,240,0.96)_48%,_rgba(241,236,229,0.9)_100%)]" />
        <div className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-aivora/[0.16] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 right-0 h-[380px] w-[380px] rounded-full bg-primary/[0.08] blur-3xl" />
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div>
              <motion.p className="mb-6 inline-flex items-center gap-2 rounded-full border border-aivora/40 bg-card/80 px-4 py-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-aivora-deep shadow-sm backdrop-blur" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                New · Our own product
              </motion.p>
              <motion.div className="mb-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <span className="inline-flex items-center gap-3 ">
                  <svg viewBox="0 0 40 40" className="h-12 w-12" fill="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="«r2»-fill" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#E8D5B7">
                        </stop>
                        <stop offset="0.55" stopColor="#C9A063">
                        </stop>
                        <stop offset="1" stopColor="#A67C3D">
                        </stop>
                      </linearGradient>
                    </defs>
                    <rect x="1" y="1" width={38} height={38} rx="12" fill="url(#«r2»-fill)">
                    </rect>
                    <rect x="1" y="1" width={38} height={38} rx="12" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2">
                    </rect>
                    <g stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" opacity="0.95">
                      <path d="M12 17.5v5">
                      </path>
                      <path d="M16.5 13.5v13">
                      </path>
                      <path d="M21 10.5v19">
                      </path>
                      <path d="M25.5 15v10">
                      </path>
                      <path d="M30 18.5v3">
                      </path>
                    </g>
                  </svg>
                  <span className="flex flex-col leading-none">
                    <span className="font-serif font-semibold tracking-tight text-foreground text-4xl">
                      Aivora
                    </span>
                    <span className="mt-1 font-mono font-semibold uppercase tracking-[0.18em] text-aivora-deep text-[0.68rem]">
                      by Autoneural
                    </span>
                  </span>
                </span>
              </motion.div>
              <motion.h2 className="mb-6 font-serif text-[clamp(2.4rem,4.4vw,3.8rem)] font-semibold leading-[0.96] text-foreground" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Meet Aivora.
                <span className="block text-primary">
                  The AI that answers your phone.
                </span>
              </motion.h2>
              <motion.p className="mb-9 max-w-xl text-lg leading-8 text-secondary-foreground" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                We build AI agents to order. Aivora is the one we built for the phone, packaged as a product: a calling agent, a CRM that fills itself in from the conversation, and the follow-ups that used to depend on someone remembering.
              </motion.p>
              <div className="mb-9 grid gap-4 sm:grid-cols-3">
                <motion.div className="rounded-2xl border border-border bg-card/75 p-5 backdrop-blur-sm" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <PhoneCall size={20} className="mb-3 text-aivora-deep" aria-hidden="true" />
                  <p className="mb-1.5 font-heading text-sm font-semibold text-foreground">
                    Answers and calls back
                  </p>
                  <p className="text-xs leading-5 text-secondary-foreground">
                    Picks up your business number and returns every enquiry, inside your hours.
                  </p>
                </motion.div>
                <motion.div className="rounded-2xl border border-border bg-card/75 p-5 backdrop-blur-sm" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <CalendarCheck size={20} className="mb-3 text-aivora-deep" aria-hidden="true" />
                  <p className="mb-1.5 font-heading text-sm font-semibold text-foreground">
                    Books the appointment
                  </p>
                  <p className="text-xs leading-5 text-secondary-foreground">
                    Qualifies the caller in conversation and puts the slot straight in your calendar.
                  </p>
                </motion.div>
                <motion.div className="rounded-2xl border border-border bg-card/75 p-5 backdrop-blur-sm" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                  <Database size={20} className="mb-3 text-aivora-deep" aria-hidden="true" />
                  <p className="mb-1.5 font-heading text-sm font-semibold text-foreground">
                    Writes the CRM record
                  </p>
                  <p className="text-xs leading-5 text-secondary-foreground">
                    Contact, transcript, summary and next step — filed before the call ends.
                  </p>
                </motion.div>
              </div>
              <motion.div className="flex flex-col gap-3 sm:flex-row" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <Link data-testid="aivora-spotlight-cta" href="/aivora" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-clay transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:shadow-clay-hover md:text-base">
                  Explore Aivora
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:bg-card md:text-base">
                  Book a demo call
                </Link>
              </motion.div>
            </div>
            <motion.div className="flex justify-center lg:justify-end" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="relative z-20 w-[264px] sm:w-[296px] " aria-label="Aivora call in progress" style={{ transform: 'translateY(-13.598px)' }}>
                <div className="aivora-panel  p-4 sm:p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(145deg,#ead5b6,#fff8ed)] text-sm font-semibold text-aivora-deep">
                        ER
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-tight text-foreground">
                          Emily Roberts
                        </p>
                        <p className="mt-1 flex items-center gap-1.5 text-[11px] font-medium text-aivora-live">
                          <span className="relative flex h-2 w-2">
                            <span className="aivora-ping absolute inset-0 rounded-full bg-aivora-live" />
                            <span className="relative h-2 w-2 rounded-full bg-aivora-live" />
                          </span>
                          Live AI call
                        </p>
                      </div>
                    </div>
                    <span className="aivora-numerals text-xs font-medium text-secondary-foreground">
                      02:26
                    </span>
                  </div>
                  <div className="mb-4 flex h-10 items-center justify-center gap-[3px] rounded-2xl bg-aivora/10 px-3" aria-hidden="true">
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.49162)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.966789)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.869007)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.439074)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.239115)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.94087)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.876704)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.803842)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.738925)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.773776)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.289706)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.46349)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.383972)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.663097)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.497387)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.337063)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.455634)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.307969)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.723361)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.748184)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.829223)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.683572)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.275807)' }} />
                    <span className="h-7 w-[2px] origin-center rounded-full bg-[linear-gradient(to_top,#a67c3d,#e0be84)] transition-transform duration-[90ms]" style={{ transform: 'scaleY(0.367616)' }} />
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <button type="button" aria-label="Mute call" aria-pressed="false" className="aivora-panel aivora-panel-thin grid h-10 w-10 place-items-center rounded-full text-foreground" tabIndex={0}>
                      <Mic className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-destructive text-white shadow-sm" aria-hidden="true">
                      <PhoneOff className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="aivora-panel aivora-panel-thin grid h-10 w-10 place-items-center rounded-full text-foreground" aria-hidden="true">
                      <Volume2 className="lucide-volume-2 h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}
