import { faqSchemaFor } from './faq';
import { ROUTE_JSON_LD } from './seo-jsonld';

/**
 * Per-route SEO metadata.
 *
 * Single source of truth for the prerenderer (which bakes these into static
 * HTML at build time), the runtime <head> updater, and the sitemap generator.
 * Adding a route here is what makes it prerendered and indexable — registering
 * it in App.tsx alone is not enough.
 */

export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ?? 'https://autoneural.in'
).replace(/\/$/, '');

export const SITE_NAME = 'Autoneural';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export type RouteSeo = {
  /** Route path, always with a leading slash and no trailing slash (except "/"). */
  path: string;
  title: string;
  description: string;
  keywords?: string;
  /** Excluded from sitemap.xml and marked noindex. */
  noindex?: boolean;
  /** JSON-LD emitted for this route. */
  jsonLd?: Record<string, unknown>[];
};

export const ROUTES: RouteSeo[] = [
  {
    path: "/",
    title: "Autoneural | AI Agents, Chatbots & Automation for Business",
    description: "Custom AI agents, WhatsApp chatbots, workflow automation, dashboards and websites for growing businesses. Fixed-price scope, live in 2–4 weeks.",
    keywords: "AI agency India, custom AI agents, AI chatbot development, WhatsApp chatbot, business process automation, n8n automation, AI software development company, workflow automation services",
    jsonLd: ROUTE_JSON_LD["home"],
  },
  {
    path: "/services",
    title: "AI, Automation & Software Development Services",
    description: "AI planning, custom agents, chatbots, task automation, CRM and ERP integration, dashboards and software — scoped around what slows your team down.",
    keywords: "AI development services, business automation services, custom software development, CRM automation, ERP integration, AI consulting India, intelligent document processing, dashboard development",
    jsonLd: ROUTE_JSON_LD["services"],
  },
  {
    path: "/industries",
    title: "AI & Automation by Industry | Autoneural",
    description: "How we apply AI and automation in logistics, healthcare, retail, manufacturing, real estate, finance and export — with outcomes clients let us publish.",
    keywords: "AI for logistics, healthcare automation, retail AI chatbot, manufacturing automation, real estate lead automation, AI for exporters, industry AI solutions, finance document automation",
    jsonLd: ROUTE_JSON_LD["industries"],
  },
  {
    path: "/about",
    title: "About Autoneural | AI-First Software Studio",
    description: "A small AI-first engineering team for businesses with no in-house developers. We scope honestly, hand over everything and stay reachable after launch.",
    keywords: "Autoneural, AI software studio, AI development team India, Palash Lochan Mahana, Priyanshu Maity, AI startup India, custom AI development company",
    jsonLd: ROUTE_JSON_LD["about"],
  },
  {
    path: "/founders",
    title: "Founders & Leadership | Autoneural",
    description: "Meet the leadership behind Autoneural and the people building practical AI systems, agents and automation for real business workflows.",
    keywords: "Autoneural founders, Palash Lochan Mahana, Priyanshu Maity, AI leadership India, AI agency founders, AI software leadership",
  },
  {
    path: "/team-members",
    title: "Team | Autoneural",
    description: "Meet the Autoneural team building AI agents, automation systems and practical software for businesses.",
    keywords: "Autoneural team, AI engineers India, Shourya Kumar, automation developers, AI software team",
  },
  {
    path: "/contact",
    title: "Contact Autoneural | Book a Free AI Consultation",
    description: "Tell us what is slow and we will reply within one working day with a practical plan. Call, WhatsApp or send the form — no obligation, no sales script.",
    keywords: "contact Autoneural, AI consultation, book AI demo, hire AI developers India, AI automation quote, chatbot development enquiry",
    jsonLd: ROUTE_JSON_LD["contact"],
  },
  {
    path: "/aivora",
    title: "Aivora by Autoneural | AI Calling Agent & CRM",
    description: "Aivora is Autoneural’s AI calling agent and CRM. It answers your business number, calls leads back, qualifies them and books appointments.",
    keywords: "AI calling agent, AI phone agent, AI voice agent India, automated outbound calling, AI receptionist, lead qualification automation, appointment booking AI, AI CRM, call automation software, Aivora, Autoneural Aivora",
    jsonLd: ROUTE_JSON_LD["aivora"],
  },
  {
    path: "/ai-chatbots",
    title: "AI Chatbot & WhatsApp Agent Development | Autoneural",
    description: "Custom AI chatbots trained on your business, running on WhatsApp, your website, Instagram and voice calls. They answer, book and update your CRM.",
    keywords: "AI chatbot development, WhatsApp chatbot development, custom AI agents, conversational AI, omnichannel chatbot, Instagram chatbot, AI voice agent, customer support automation, chatbot for business",
    jsonLd: ROUTE_JSON_LD["ai-chatbots"],
  },
  {
    path: "/website-development",
    title: "Website Development Company | Fast, SEO-Ready Sites",
    description: "Custom website development that loads in under a second, ranks properly and converts. Business sites, e-commerce, portals and web apps. Fixed price, 2–6 weeks.",
    keywords: "website development company, custom website design India, business website development, ecommerce website development, React website development, SEO friendly website, web application development, landing page development",
    jsonLd: ROUTE_JSON_LD["website-development"],
  },
  {
    path: '/404',
    title: 'Page Not Found | Autoneural',
    description: 'The page you are looking for could not be found.',
    noindex: true,
  },
];

export function seoFor(path: string): RouteSeo {
  const normalised = path === '/' ? '/' : path.replace(/\/$/, '');
  return (
    ROUTES.find((r) => r.path === normalised) ?? {
      path: normalised,
      title: ROUTES[0]!.title,
      description: ROUTES[0]!.description,
    }
  );
}

export function canonicalFor(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/**
 * The JSON-LD graph for a route, with its FAQPage node regenerated from
 * `lib/faq.ts`.
 *
 * Any FAQPage carried in the static data is dropped first and rebuilt from the
 * same array the accordion renders. Google requires FAQ markup to match the
 * visible page, and deriving both from one source is what makes that true by
 * construction rather than by discipline.
 */
export function jsonLdFor(path: string): Record<string, unknown>[] {
  const seo = seoFor(path);
  const blocks = seo.jsonLd ?? [];
  const faq = faqSchemaFor(seo.path);

  return blocks.map((block) => {
    const graph = block['@graph'];
    if (!Array.isArray(graph)) return block;

    const withoutFaq = graph.filter(
      (node) => (node as Record<string, unknown>)?.['@type'] !== 'FAQPage',
    );

    return {
      ...block,
      '@graph': faq ? [...withoutFaq, faq] : withoutFaq,
    };
  });
}

/** Routes that belong in sitemap.xml. */
export function indexableRoutes(): RouteSeo[] {
  return ROUTES.filter((r) => !r.noindex);
}
