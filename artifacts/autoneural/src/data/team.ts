export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'All' | 'Engineering' | 'AI & Automation' | 'Product & Design' | 'Operations';
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
    category: 'Engineering',
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
    id: 'ai-engineer-placeholder',
    name: '[Team Profile / AI Engineer]',
    role: 'AI Systems Engineer',
    category: 'AI & Automation',
    bio: 'Specializing in LLM fine-tuning, RAG retrieval accuracy, vector embeddings, and multi-agent coordination frameworks.',
    primaryResponsibility: 'RAG Architectures, Model Evaluation & Prompt Optimization',
    image: null,
    objectPosition: 'object-center',
    isPlaceholder: true,
  },
  {
    id: 'fullstack-dev-placeholder',
    name: '[Team Profile / Full-Stack]',
    role: 'Full-Stack Developer',
    category: 'Engineering',
    bio: 'Building responsive interfaces, real-time client dashboards, and secure backend microservices that integrate with existing business stacks.',
    primaryResponsibility: 'React / Next.js Applications, Dashboard Development & Client Portals',
    image: null,
    objectPosition: 'object-center',
    isPlaceholder: true,
  },
  {
    id: 'backend-engineer-placeholder',
    name: '[Team Profile / Backend]',
    role: 'Backend & Cloud Engineer',
    category: 'Engineering',
    bio: 'Designing scalable API endpoints, database schemas, message queues, and high-availability cloud infrastructure.',
    primaryResponsibility: 'Cloud Architecture, PostgreSQL/Redis, API Gateways & Security',
    image: null,
    objectPosition: 'object-center',
    isPlaceholder: true,
  },
  {
    id: 'automation-engineer-placeholder',
    name: '[Team Profile / Automation]',
    role: 'Workflow Automation Engineer',
    category: 'AI & Automation',
    bio: 'Connecting third-party APIs, webhooks, and automation pipelines (n8n, Make, custom scripts) to eliminate manual business data entry.',
    primaryResponsibility: 'Workflow Orchestration, CRM / ERP Connectors & Event Triggers',
    image: null,
    objectPosition: 'object-center',
    isPlaceholder: true,
  },
  {
    id: 'uiux-designer-placeholder',
    name: '[Team Profile / Product Design]',
    role: 'UI/UX Product Designer',
    category: 'Product & Design',
    bio: 'Crafting intuitive conversation flows, interface ergonomics, typography systems, and high-conversion business software experiences.',
    primaryResponsibility: 'Design Systems, User Journey Mapping & Interactive Prototyping',
    image: null,
    objectPosition: 'object-center',
    isPlaceholder: true,
  },
  {
    id: 'operations-placeholder',
    name: '[Team Profile / Operations]',
    role: 'Operations & Client Delivery',
    category: 'Operations',
    bio: 'Coordinating project milestones, sprint delivery, quality audits, and handover documentation for enterprise client engagements.',
    primaryResponsibility: 'Project Scoping, Milestone Quality Assurance & Client Handover',
    image: null,
    objectPosition: 'object-center',
    isPlaceholder: true,
  },
];
