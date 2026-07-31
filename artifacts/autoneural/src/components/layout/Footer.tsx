import { FaLinkedin } from 'react-icons/fa';
import { SiX, SiGithub } from 'react-icons/si';
import logoPath from '@assets/Screenshot_2026-07-24_at_17.10.40_1785394019308.png';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-24 pb-12" data-testid="footer">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoPath} alt="Autoneural Logo" className="w-8 h-8 rounded-full" />
              <span className="font-heading font-bold text-xl text-primary">AUTONEURAL</span>
            </div>
            <p className="text-secondary-foreground mb-8 max-w-sm">
              The AI partner enterprises trust when the stakes are high. We build intelligent software and mission-critical systems.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors" data-testid="social-linkedin">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors" data-testid="social-twitter">
                <SiX size={20} />
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary transition-colors" data-testid="social-github">
                <SiGithub size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-secondary-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-secondary-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#projects" className="text-secondary-foreground hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-secondary-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">Expertise</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">AI Consulting</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">Agent Development</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">Enterprise Systems</a></li>
              <li><a href="#" className="text-secondary-foreground hover:text-primary transition-colors">Process Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6">Newsletter</h4>
            <p className="text-secondary-foreground text-sm mb-4">Insights on enterprise AI, delivered monthly.</p>
            <form className="flex flex-col gap-3" data-testid="form-newsletter">
              <input 
                type="email" 
                placeholder="Work email address" 
                className="bg-muted border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                data-testid="input-newsletter-email"
                required
              />
              <button 
                type="submit"
                className="bg-foreground text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-primary transition-colors"
                data-testid="button-newsletter-submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground">
          <p>&copy; {new Date().getFullYear()} Autoneural. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
