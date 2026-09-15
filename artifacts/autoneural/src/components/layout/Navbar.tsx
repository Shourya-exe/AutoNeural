import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
  testId: string;
  /** Renders a "New" pill — suppressed while that route is the active one. */
  badge?: string;
};

const LINKS: NavLink[] = [
  { href: '/aivora', label: 'Aivora', testId: 'link-aivora', badge: 'New' },
  { href: '/services', label: 'Services', testId: 'link-services' },
  { href: '/website-development', label: 'Web Development', testId: 'link-web-development' },
  { href: '/ai-chatbots', label: 'AI Chatbots', testId: 'link-ai-chatbots' },
  { href: '/industries', label: 'Industries', testId: 'link-industries' },
  { href: '/about', label: 'About', testId: 'link-about' },
  { href: '/founders', label: 'Founders', testId: 'link-founders' },
  { href: '/team-members', label: 'Team', testId: 'link-team-members' },
];

export function Navbar() {
  const [rawLocation] = useLocation();
  // Some servers redirect "/aivora" to "/aivora/", so compare without the
  // trailing slash or the active state silently never matches.
  const location = rawLocation === '/' ? '/' : rawLocation.replace(/\/$/, '');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation, or it stays open over the new page.
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
      data-testid="navbar"
    >
      <div className="mx-auto flex w-[calc(100%-2rem)] max-w-7xl items-center justify-between rounded-full border border-[rgba(107,30,50,0.14)] bg-[rgba(248,245,240,0.85)] px-4 py-2.5 shadow-clay shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.9),0_12px_32px_-8px_rgba(69,19,35,0.06)] backdrop-blur-2xl md:px-6">
        <Link
          data-testid="link-home"
          href="/"
          className="group flex min-w-0 items-center gap-3"
        >
          <img
            alt="Autoneural"
            width={36}
            height={36}
            fetchPriority="high"
            decoding="async"
            className="h-9 w-9 rounded-full bg-white object-contain shadow-sm ring-1 ring-border"
            src="/media/autoneural-logo.webp"
          />
          <span className="hidden font-heading text-lg font-semibold tracking-tight text-foreground sm:inline">
            Autoneural
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" data-testid="nav-desktop">
          {LINKS.map((link) => {
            const active = location === link.href;
            return (
              <Link
                key={link.href}
                data-testid={link.testId}
                href={link.href}
                className={`group relative whitespace-nowrap text-sm font-medium transition-colors ${
                  active ? 'text-primary font-semibold' : 'text-secondary-foreground hover:text-primary'
                }`}
              >
                {link.label}
                {link.badge && !active && (
                  <span className="ml-1.5 inline-block rounded-full bg-primary/10 px-1.5 py-0.5 align-middle font-mono text-[0.55rem] font-bold uppercase tracking-[0.1em] text-primary">
                    {link.badge}
                  </span>
                )}
                <span
                  className={`absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary transition-opacity duration-300 ${
                    active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            data-testid="button-book-consultation"
            href="/contact"
            className="inline-block whitespace-nowrap rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground border border-white/20 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.35),0_6px_18px_-4px_rgba(107,30,50,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8B3048] hover:shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.5),0_10px_24px_-4px_rgba(107,30,50,0.45)]"
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-full border border-border bg-background/80 p-2 text-foreground backdrop-blur-md lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="mx-auto mt-3 w-[calc(100%-2rem)] max-w-7xl rounded-3xl border border-[rgba(107,30,50,0.14)] bg-[rgba(248,245,240,0.95)] p-4 shadow-clay shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.9),0_18px_45px_-10px_rgba(69,19,35,0.1)] backdrop-blur-2xl lg:hidden"
          data-testid="nav-mobile"
        >
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => {
              const active = location === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                      active
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-secondary-foreground hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    {link.label}
                    {link.badge && !active && (
                      <span className="ml-1.5 inline-block rounded-full bg-primary/10 px-1.5 py-0.5 align-middle font-mono text-[0.55rem] font-bold uppercase tracking-[0.1em] text-primary">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <Link
                href="/contact"
                className="block rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground border border-white/20 shadow-sm transition-colors hover:bg-[#8B3048]"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
