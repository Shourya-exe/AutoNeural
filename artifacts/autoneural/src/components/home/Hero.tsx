import { motion } from 'framer-motion';
import heroIllustration from '@assets/generated_images/hero-illustration.jpg';

export function Hero() {
  return (
    <section 
      className="relative min-h-[100dvh] pt-32 pb-20 flex items-center overflow-hidden" 
      data-testid="hero-section"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#EEF2FF,_#FAF9F6)] -z-10" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-[84px] leading-[1.05] font-heading font-bold text-foreground tracking-[-0.03em] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Enterprise AI Solutions That Transform Businesses.
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-secondary-foreground mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Autoneural builds intelligent software, AI agents, enterprise automation and custom digital platforms that help organisations streamline operations, automate repetitive work and accelerate growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
            </motion.div>
          </div>

          {/* Right Illustration */}
          <motion.div 
            className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full max-w-[500px] aspect-square rounded-[2rem] overflow-hidden shadow-clay bg-white border border-border p-2"
            >
              <img 
                src={heroIllustration} 
                alt="Autoneural Enterprise AI Illustration" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
