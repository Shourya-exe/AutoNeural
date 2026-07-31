import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoPath from '@assets/Screenshot_2026-07-24_at_17.10.40_1785394019308.png';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Industries', href: '#industries' },
    { name: 'About', href: '#about' },
    { name: 'Insights', href: '#insights' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
        data-testid="navbar"
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group" data-testid="link-home">
            <img 
              src={logoPath} 
              alt="Autoneural Logo" 
              className="w-10 h-10 object-contain rounded-full bg-white shadow-sm"
            />
            <span className="font-heading font-bold tracking-tight text-xl text-primary">
              AUTONEURAL
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
                data-testid={`link-${link.name.toLowerCase()}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 inline-block"
              data-testid="button-book-consultation"
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 lg:hidden overflow-y-auto"
            data-testid="mobile-drawer"
          >
            <nav className="flex flex-col gap-6 text-center mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-heading font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium shadow-sm w-full inline-block"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="mobile-button-book-consultation"
                >
                  Book a Consultation
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
