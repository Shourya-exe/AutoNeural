export type TeamMemberCategory =
  | 'Engineering'
  | 'AI & Automation'
  | 'Product & Design'
  | 'Operations';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: TeamMemberCategory[];
  bio: string;
  primaryResponsibility: string;
  image: string | null;
  objectPosition: 'object-center' | 'object-top';
  linkedin?: string;
  isPlaceholder?: boolean;
  width?: number;
  height?: number;
}

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: 'shourya-kumar',
    name: 'Shourya Kumar',
    role: 'Technical Lead',
    category: ['Engineering', 'AI & Automation'],
    bio: 'Shourya is a Technical Lead focused on AI innovation, system architecture, and building scalable, intelligent solutions, leading projects from concept to execution.',
    primaryResponsibility: 'AI System Architecture, Agent Pipelines & Core Engineering',
    image: '/media/shourya-kumar.jpeg',
    objectPosition: 'object-top',
    linkedin: 'https://www.linkedin.com/in/shourya-kumar-887b10424/',
    isPlaceholder: false,
    width: 1254,
    height: 1254,
  },
  {
    id: 'arpan-lead-ai-agent-developer',
    name: 'Arpan Biswas',
    role: 'Lead AI Agent Lead Developer',
    category: ['AI & Automation'],
    bio: 'Leading the development of autonomous multi-agent pipelines, intelligent tool coordination, and high-reliability LLM orchestration for enterprise systems.',
    primaryResponsibility: 'Lead AI Agent Architecture, Multi-Agent Coordination & LLM Pipelines',
    image: '/media/Lead AI Agent Lead Developer.jpeg',
    objectPosition: 'object-center',
    linkedin: 'https://www.linkedin.com/in/warriorbiswas/',
    isPlaceholder: false,
    width: 1254,
    height: 1254,
  },
  {
    id: 'soham-senior-backend-developer',
    name: 'Soham Chatterjee',
    role: 'Senior Backend Developer',
    category: ['Engineering'],
    bio: 'Architecting high-throughput backend infrastructure, resilient API microservices, database systems, and secure cloud integrations for mission-critical workflows.',
    primaryResponsibility: 'Core Backend Architecture, High-Throughput APIs & Cloud Scalability',
    image: '/media/soham-photo.png',
    objectPosition: 'object-center',
    isPlaceholder: false,
    width: 1254,
    height: 1254,
  },
];
