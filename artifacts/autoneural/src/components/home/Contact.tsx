import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-foreground text-background py-0" data-testid="contact-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
        
        {/* Left Side: Form */}
        <div className="px-6 py-24 md:px-12 lg:px-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Let's Build the Future Together.
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-lg">
              Partner with Autoneural to engineer AI systems that fundamentally transform your enterprise.
            </p>

            <form className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="jane@acme.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Service</label>
                  <select defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
                    <option value="" disabled>Select an area of interest</option>
                    <option value="ai-consulting" className="text-black">AI Consulting</option>
                    <option value="agent-dev" className="text-black">AI Agent Development</option>
                    <option value="automation" className="text-black">Business Process Automation</option>
                    <option value="software" className="text-black">Enterprise Software Development</option>
                    <option value="other" className="text-black">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell us about your project or challenges..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-primary text-white py-4 rounded-xl font-medium text-lg shadow-clay hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 mt-4"
              >
                Book a Free Consultation
              </button>
            </form>
          </motion.div>
        </div>

        {/* Right Side: Info & Map Placeholder */}
        <div className="bg-[#111] relative overflow-hidden flex flex-col border-l border-white/5">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#111_100%)]"></div>

          <div className="relative z-10 flex-grow p-12 lg:p-24 flex flex-col justify-center gap-12">
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:hello@autoneural.ai" className="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail size={20} className="text-white" />
                  </div>
                  <span className="text-lg">hello@autoneural.ai</span>
                </a>
                <a href="tel:+4420XXXXXXXX" className="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Phone size={20} className="text-white" />
                  </div>
                  <span className="text-lg">+44 20 XXXX XXXX</span>
                </a>
                <div className="flex items-center gap-4 text-gray-400 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <span className="text-lg">London, United Kingdom</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden mt-8">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:12px_12px]"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_5px_rgba(53,88,230,0.5)] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
