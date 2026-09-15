import { Link } from 'wouter';
import { NewsletterForm } from './NewsletterForm';

export function Footer() {
  return (
      <footer className="border-t border-border bg-background pb-12 pt-24" data-testid="footer">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
            <div className="lg:col-span-2">
              <Link href="/" className="mb-6 flex items-center gap-3">
                <img alt="Autoneural" width={32} height={32} loading="lazy" decoding="async" className="h-8 w-8 rounded-full" src="/media/autoneural-logo.webp" />
                <span className="font-heading text-xl font-bold text-primary">
                  AUTONEURAL
                </span>
              </Link>
              <p className="mb-8 max-w-sm text-secondary-foreground">
                Custom AI agents, chatbots, automations, dashboards, and high-performing websites for businesses that want to save time and grow faster.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/company/autoneural" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground transition-colors hover:text-primary" aria-label="Autoneural on LinkedIn" data-testid="social-linkedin">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                    </path>
                  </svg>
                </a>
                <a href="https://twitter.com/autoneural" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground transition-colors hover:text-primary" aria-label="Autoneural on X" data-testid="social-twitter">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z">
                    </path>
                  </svg>
                </a>
                <a href="https://github.com/autoneural" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground transition-colors hover:text-primary" aria-label="Autoneural on GitHub" data-testid="social-github">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-6 font-heading font-semibold text-foreground">
                Company
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-secondary-foreground transition-colors hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/founders" className="text-secondary-foreground transition-colors hover:text-primary">
                    Founders &amp; Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/team-members" className="text-secondary-foreground transition-colors hover:text-primary">
                    Team Members
                  </Link>
                </li>
                <li>
                  <Link href="/services#process" className="text-secondary-foreground transition-colors hover:text-primary">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="text-secondary-foreground transition-colors hover:text-primary">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-secondary-foreground transition-colors hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 font-heading font-semibold text-foreground">
                Services
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/aivora" className="text-secondary-foreground transition-colors hover:text-primary">
                    Aivora — AI Calling Agent
                  </Link>
                </li>
                <li>
                  <Link href="/website-development" className="text-secondary-foreground transition-colors hover:text-primary">
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link href="/ai-chatbots" className="text-secondary-foreground transition-colors hover:text-primary">
                    AI Chatbots &amp; Agents
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-secondary-foreground transition-colors hover:text-primary">
                    Task Automation
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-secondary-foreground transition-colors hover:text-primary">
                    Custom Software
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 font-heading font-semibold text-foreground">
                Capabilities
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/aivora#aivora-capabilities" className="text-secondary-foreground transition-colors hover:text-primary">
                    What Aivora Does
                  </Link>
                </li>
                <li>
                  <Link href="/aivora#aivora-plans" className="text-secondary-foreground transition-colors hover:text-primary">
                    Aivora Plans
                  </Link>
                </li>
                <li>
                  <Link href="/ai-chatbots#omnichannel" className="text-secondary-foreground transition-colors hover:text-primary">
                    Omnichannel Support
                  </Link>
                </li>
                <li>
                  <Link href="/ai-chatbots#chatbot-features" className="text-secondary-foreground transition-colors hover:text-primary">
                    Chatbot Features
                  </Link>
                </li>
                <li>
                  <Link href="/ai-chatbots#integrations" className="text-secondary-foreground transition-colors hover:text-primary">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 font-heading font-semibold text-foreground">
                Newsletter
              </h3>
              <p className="mb-4 text-sm text-secondary-foreground">
                Simple notes on AI, automation, and business growth.
              </p>
              <NewsletterForm />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-secondary-foreground md:flex-row">
            <p>
              © 2026 Autoneural. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/contact" className="transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/contact" className="transition-colors hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
}
