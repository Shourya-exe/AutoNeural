export interface FounderProfile {
  id: string;
  name: string;
  role: string;
  shortIntro: string;
  about: string;
  responsibilities: string[];
  relevantExperience: string[];
  image: string | null;
  objectPosition: 'object-center' | 'object-top';
  linkedin: string | null;
  isPlaceholder?: boolean;
  width?: number;
  height?: number;
}

export const FOUNDERS_DATA: FounderProfile[] = [
  {
    id: 'cto',
    name: 'Priyanshu Maity',
    role: 'Chief Technology Officer',
    shortIntro:
      'Priyanshu leads product engineering at Autoneural, building reliable AI tools, automations, dashboards, and custom software for business teams.',
    about:
      'Leading technical vision and engineering execution across all Autoneural platforms, ensuring our AI architectures, agent pipelines, and custom software adhere to enterprise standards of reliability, performance, and security.',
    responsibilities: [
      'Architecture of agentic workflows, LLM orchestration, and low-latency voice pipelines.',
      'Engineering team leadership, code quality, and security compliance.',
      'Infrastructure scaling, cloud orchestration, and multi-system API integrations.',
    ],
    relevantExperience: [
      'Full-stack systems engineering, custom AI agent development, and workflow automation.',
      'Architecting production AI applications, telephony agents, and real-time business dashboards.',
    ],
    image: '/media/priyanshu-maity.webp',
    objectPosition: 'object-top',
    linkedin: 'https://www.linkedin.com/in/priyanshumaity/',
    isPlaceholder: false,
    width: 1254,
    height: 1254,
  },
  {
    id: 'founder-cmo',
    name: 'Palash Lochan Mahana',
    role: 'Founder & Chief Marketing Officer',
    shortIntro:
      'Palash helps businesses understand where AI can create real value, shape the right offer, and turn ideas into clear product and growth plans.',
    about:
      'As Founder and CMO, Palash steers the strategic direction, brand positioning, and client growth of Autoneural, translating complex AI capabilities into tangible business outcomes that save time and move real numbers.',
    responsibilities: [
      'Founding vision, company direction, and product-market positioning.',
      'Client discovery, solution scoping, and enterprise growth strategies.',
      'Brand communication, marketing operations, and strategic customer relationships.',
    ],
    relevantExperience: [
      'Go-to-market strategy, business automation consulting, and commercial operations.',
      'Advising leadership teams on practical AI adoption and measurable workflow transformation.',
    ],
    image: '/media/palash-lochan-mahana.webp',
    objectPosition: 'object-center',
    linkedin: 'https://www.linkedin.com/in/palash-lochan-mahana-9b274330a/',
    isPlaceholder: false,
    width: 1254,
    height: 1254,
  },
];
