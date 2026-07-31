import { motion } from 'framer-motion';
import founderPhoto from '@assets/ChatGPT_Image_Jul_24,_2026,_05_05_03_PM_1785394829255.png';
import ctoPhoto from '@assets/priyanshu_maity_personal_branding_portrait_1785394829258.jpg';

const founders = [
  {
    name: "Arjun Sharma",
    role: "Founder & Chief Marketing Officer",
    bio: "A visionary entrepreneur with a decade of experience bridging cutting-edge AI research and real-world enterprise deployment. Arjun has led go-to-market strategy for AI products across healthcare, finance, and logistics.",
    image: founderPhoto,
    linkedin: "#",
  },
  {
    name: "Priyanshu Maity",
    role: "Co-Founder & Chief Technology Officer",
    bio: "Full-stack AI engineer and systems architect with deep expertise in large language models, distributed infrastructure, and enterprise-grade automation pipelines. Priyanshu leads all technical strategy and product engineering at Autoneural.",
    image: ctoPhoto,
    linkedin: "#",
  },
];

export function Team() {
  return (
    <section id="about" className="py-32 bg-white" data-testid="team-section">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-20 text-center">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            The Founders
          </motion.h2>
          <motion.p
            className="text-lg text-secondary-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Built by engineers and operators who have lived the enterprise AI challenge firsthand.
          </motion.p>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {founders.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group relative bg-[#FAF9F6] border border-border rounded-3xl overflow-hidden shadow-clay hover:shadow-clay-hover hover:-translate-y-1 transition-all duration-500"
              data-testid={`team-member-${idx}`}
            >
              {/* Portrait */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Info */}
              <div className="p-8">
                <p className="text-primary font-mono text-xs font-semibold uppercase tracking-widest mb-2">
                  {member.role}
                </p>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  {member.name}
                </h3>
                <p className="text-secondary-foreground leading-relaxed text-sm md:text-base">
                  {member.bio}
                </p>

                {/* LinkedIn */}
                <a
                  href={member.linkedin}
                  className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:underline underline-offset-4 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
