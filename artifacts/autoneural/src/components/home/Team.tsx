import { motion } from 'framer-motion';

type Member = {
  name: string;
  role: string;
  bio: string | null;
  image: string | null;
  /** How the portrait is cropped inside the 4:3 frame. */
  objectPosition: 'object-center' | 'object-top';
  linkedin: string;
  /** Portrait intrinsic size, so the browser reserves the right space. */
  width: number;
  height: number;
};

const members: Member[] = [
  {
    name: 'Palash Lochan Mahana',
    role: 'Founder & Chief Marketing Officer',
    bio: 'Palash helps businesses understand where AI can create real value, shape the right offer, and turn ideas into clear product and growth plans.',
    image: '/media/palash-lochan-mahana.webp',
    objectPosition: 'object-center',
    linkedin: 'https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/',
    width: 1254,
    height: 1254,
  },
  {
    name: 'Priyanshu Maity',
    role: 'Chief Technology Officer',
    bio: 'Priyanshu leads product engineering at Autoneural, building reliable AI tools, automations, dashboards, and custom software for business teams.',
    image: '/media/priyanshu-maity.webp',
    objectPosition: 'object-top',
    linkedin: 'https://www.linkedin.com/in/priyanshumaity/',
    width: 1254,
    height: 1254,
  },
  {
    name: 'Shourya Kumar',
    role: 'Technical Lead',
    bio: 'Shourya is a Technical Lead focused on AI innovation, system architecture, and building scalable, intelligent solutions, leading projects from concept to execution.',
    image: '/media/shourya-kumar.jpeg',
    objectPosition: 'object-top',
    linkedin: 'https://www.linkedin.com/in/shourya-kumar-887b10424/',
    width: 1254,
    height: 1254,
  },
];

/** "Shourya Kumar" -> "SK". Used when a member has no portrait yet. */
function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join('');
}

export function Team() {
  return (
    <section id="about" className="py-32 bg-background" data-testid="team-section">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            The Founders
          </motion.h2>
          <motion.p
            className="text-lg text-secondary-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            A hands-on team focused on building practical systems that business owners and teams can
            actually use.
          </motion.p>
        </div>

        {/* Two columns, with a lone third card centred at the same width rather
            than left-aligned against an empty cell. */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto
                     [&>*:last-child:nth-child(odd)]:lg:col-span-2
                     [&>*:last-child:nth-child(odd)]:lg:w-[calc(50%-1.25rem)]
                     [&>*:last-child:nth-child(odd)]:lg:mx-auto"
        >
          {members.map((member, idx) => (
            <motion.div
              key={member.name}
              className="group relative bg-[#FAF9F6] border border-border rounded-3xl overflow-hidden shadow-clay hover:shadow-clay-hover hover:-translate-y-1 transition-all duration-500"
              data-testid={`team-member-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.15 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                {member.image ? (
                  <img
                    alt={`${member.name}, ${member.role} at Autoneural`}
                    width={member.width}
                    height={member.height}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover ${member.objectPosition} group-hover:scale-105 transition-transform duration-700`}
                    src={member.image}
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={member.name}
                    className="w-full h-full bg-muted flex items-center justify-center group-hover:scale-105 transition-transform duration-700"
                  >
                    <span className="font-heading font-bold text-6xl md:text-7xl text-primary/30 select-none tracking-tight">
                      {initialsOf(member.name)}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8">
                <p className="text-primary font-mono text-xs font-semibold uppercase tracking-widest mb-2">
                  {member.role}
                </p>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  {member.name}
                </h3>
                {member.bio && (
                  <p className="text-secondary-foreground leading-relaxed text-sm md:text-base">
                    {member.bio}
                  </p>
                )}
                <a
                  href={member.linkedin}
                  className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:underline underline-offset-4 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
