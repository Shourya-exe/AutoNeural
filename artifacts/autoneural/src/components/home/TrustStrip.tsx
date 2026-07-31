import { 
  SiGoogle, 
  SiSap, 
  SiAccenture,
  SiZoom,
  SiSlackware,
  SiAnthropic,
  SiNestjs,
  SiDocker,
} from 'react-icons/si';

export function TrustStrip() {
  const logos = [
    { icon: SiGoogle, name: 'Google' },
    { icon: SiSap, name: 'SAP' },
    { icon: SiAccenture, name: 'Accenture' },
    { icon: SiZoom, name: 'Zoom' },
    { icon: SiSlackware, name: 'Slack' },
    { icon: SiAnthropic, name: 'Anthropic' },
    { icon: SiNestjs, name: 'NestJS' },
    { icon: SiDocker, name: 'Docker' },
  ];

  // Double the array to ensure seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 border-y border-border bg-background overflow-hidden" data-testid="trust-strip">
      <div className="container mx-auto px-6 text-center mb-8">
        <p className="text-sm font-medium text-secondary-foreground uppercase tracking-widest">
          Trusted by businesses building the future
        </p>
      </div>
      
      <div className="relative w-full flex">
        {/* Left gradient mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Infinite marquee container */}
        <div className="flex w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {duplicatedLogos.map((Logo, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center w-40 sm:w-48 px-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
              title={Logo.name}
            >
              <Logo.icon size={36} className="text-foreground" />
            </div>
          ))}
        </div>

        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
