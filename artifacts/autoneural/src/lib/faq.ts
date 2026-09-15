/**
 * FAQ content.
 *
 * One source of truth for both the visible accordion and the FAQPage
 * structured data, so the two can never drift apart — Google requires the
 * markup to match what the user actually sees.
 *
 * Groups are reused across routes: the general set appears on the home,
 * services, about and contact pages; the rest are page-specific.
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_GROUPS = {
  general: [
    {
      question: "How long does a typical AI or automation project take?",
      answer:
        "Most chatbots and automations go live in two to four weeks. Custom software and larger platforms usually run six to twelve weeks, delivered in stages so you see working software early.",
    },
    {
      question: "Do we own the code and the data?",
      answer:
        "Yes. You own the source code, the accounts, and the data. We hand over the repository, the infrastructure, and the documentation at the end of every project.",
    },
    {
      question: "What does an AI agent or automation project cost?",
      answer:
        "We quote a fixed price per phase after a short discovery call, so there are no open-ended hourly bills. Small automations typically start in the low five figures (INR), and we tell you honestly when something is not worth building.",
    },
    {
      question: "What happens after launch?",
      answer:
        "Every project includes a support window. After that you can stay on a monthly support plan for monitoring, improvements, and new features, or take it fully in-house — your choice.",
    },
    {
      question: "Will you sign an NDA?",
      answer:
        "Yes, before we see anything sensitive. We also work with least-privilege access, keep credentials in a managed secret store, and can deploy inside your own cloud account if you prefer.",
    },
  ],
  chatbot: [
    {
      question: "Where does the AI chatbot get its answers?",
      answer:
        "From your material — catalogues, price lists, SOPs, past tickets, and your website. It cites what it used, and it is guard-railed to say it does not know rather than invent an answer.",
    },
    {
      question: "Can a human take over a chatbot conversation?",
      answer:
        "Any time. Your team gets a shared inbox with the full transcript and a suggested reply, and you can set rules that force a handover automatically — for refunds or high-value orders, for example.",
    },
    {
      question: "Which channels can the chatbot run on?",
      answer:
        "WhatsApp, your website, Instagram, Messenger, Telegram, your mobile app, email, phone calls, and internal chat like Slack or Teams — all sharing one knowledge base.",
    },
    {
      question: "Is customer data kept private?",
      answer:
        "Card, ID, and phone numbers are masked in transcripts and exports. Data can stay in your region, and we support on-premise deployment where compliance requires it.",
    },
  ],
  aivora: [
    {
      question: "What is Aivora?",
      answer:
        "Aivora is Autoneural’s own AI calling agent and CRM. It answers your business number, calls leads back, qualifies them in a real conversation, books appointments, and writes the contact, transcript and next step into the CRM before the call ends.",
    },
    {
      question: "What does Aivora cost?",
      answer:
        "Starter is ₹3,000 a month with a ₹15,000 one-time setup and 100 call minutes. Growth is ₹15,000 a month with 600 minutes, and Custom starts at ₹45,000 a month, quoted per business. All prices exclude GST, and the full inclusions for each plan are listed on this page.",
    },
    {
      question: "What happens if we use more minutes than the plan includes?",
      answer:
        "You are billed per extra minute — ₹22 on Starter, ₹18 on Growth, and ₹12–15 on Custom. Usage auto-pauses at 150% of your bundle pending your confirmation, so an overage can never reach you as a surprise invoice. You can also add a 500-minute pack for ₹8,000.",
    },
    {
      question: "Does Aivora make and answer real phone calls?",
      answer:
        "Yes. Aivora answers calls to your business number and places outbound calls to leads you provide. Callers speak naturally, hear a consistent greeting, and can ask questions or book time without pressing through a phone tree.",
    },
    {
      question: "Is outbound calling compliant in India?",
      answer:
        "On Growth and above, yes: DLT-registered routing, dial-time DND scrubbing, calling-window enforcement between 9am and 9pm, a consent register and opt-out handling are built in. We can also complete your DLT and telemarketer registration for you as a one-time add-on.",
    },
    {
      question: "How quickly can our first agent go live?",
      answer:
        "Usually within a few working days. We connect a number and calendar with you, load your services and common answers, then run test calls together. Real customers only reach the agent once you are happy with what you hear.",
    },
    {
      question: "What happens when a caller needs a person?",
      answer:
        "You set the handover rules. Aivora can transfer the call immediately, take the reason and ask a teammate to call back, or route urgent topics to a dedicated number. Every handover carries the conversation context with it.",
    },
    {
      question: "Can we control what the agent says?",
      answer:
        "Yes. You set the greeting, the business facts, the qualification questions, what it may quote, and when it must escalate. Test calls let you hear the experience before customers do, and changes go live without developer help.",
    },
    {
      question: "Which languages can Aivora handle?",
      answer:
        "English and Hindi on every plan. Bengali, Tamil, Marathi and further languages on request come with the Custom tier. Tell us which languages your callers use and we will confirm what is supported before you commit.",
    },
    {
      question: "How is Aivora different from a custom Autoneural agent?",
      answer:
        "Aivora is a finished product you configure, so it starts in days rather than weeks. A custom agent is built from scratch around an unusual process. Same team either way, and Aivora can be extended with custom work when the product alone does not cover your flow.",
    },
    {
      question: "Who owns the calls, recordings and customer data?",
      answer:
        "You do. Numbers, recordings, transcripts and CRM records belong to your business and can be exported at any time. Where compliance requires it, we deploy Aivora inside your own cloud account.",
    },
  ],
  website: [
    {
      question: "What do you build websites with?",
      answer:
        "React and TypeScript on the front, with a Node API when the site needs a backend. For content-led sites we wire in a headless CMS so your team edits pages without calling us.",
    },
    {
      question: "Will my website be fast and rank well on Google?",
      answer:
        "We target 90+ Lighthouse scores on mobile, ship clean semantic markup and structured data, and set up sitemaps, meta tags, and analytics before launch.",
    },
    {
      question: "Can we edit the website content ourselves?",
      answer:
        "Yes. We connect a CMS or an admin panel so text, images, blog posts, and case studies are yours to change, with no developer in the loop.",
    },
    {
      question: "Do you redesign existing websites?",
      answer:
        "Often. We audit what you have, keep the pages that already earn traffic, redirect the rest properly, and rebuild the experience without losing your search rankings.",
    },
  ],
} satisfies Record<string, FaqItem[]>;

export type FaqGroup = keyof typeof FAQ_GROUPS;

/** Which group each route renders. Keep in sync with the page components. */
export const FAQ_BY_ROUTE: Record<string, FaqGroup> = {
  '/': 'general',
  '/services': 'general',
  '/about': 'general',
  '/contact': 'general',
  '/ai-chatbots': 'chatbot',
  '/aivora': 'aivora',
  '/website-development': 'website',
};

/**
 * schema.org FAQPage node for a route, or null when the route has no FAQ.
 * Built from the same array the accordion renders.
 */
export function faqSchemaFor(path: string): Record<string, unknown> | null {
  const group = FAQ_BY_ROUTE[path];
  if (!group) return null;

  return {
    '@type': 'FAQPage',
    '@id': `${path === '/' ? '' : path}/#faq`,
    mainEntity: FAQ_GROUPS[group].map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
