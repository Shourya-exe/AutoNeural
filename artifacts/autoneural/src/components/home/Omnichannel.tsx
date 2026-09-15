import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Globe,
  Instagram,
  LayoutTemplate,
  Mail,
  MessageCircle,
  MessagesSquare,
  PhoneCall,
  Send,
  Smartphone,
  Users,
  type LucideIcon,
} from 'lucide-react';

type Message = { from: 'bot' | 'user'; text: string };

type Channel = {
  id: string;
  name: string;
  tag: string;
  icon: LucideIcon;
  /** Brand colour, used for the icon tile, top rule and preview header. */
  accent: string;
  desc: string;
  headline: string;
  thread: Message[];
  chips: string[];
};

const CHANNELS: Channel[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    tag: 'Business API',
    icon: MessageCircle,
    accent: '#1F8F52',
    desc: 'Orders, tracking, payments, and support inside the app your customers already use every day.',
    headline: 'Sell and support on WhatsApp',
    thread: [
      { from: 'bot', text: 'Hi Rahul 👋 Your order #4821 shipped this morning.' },
      { from: 'user', text: 'When will it reach me?' },
      { from: 'bot', text: 'Tomorrow before 6 PM. Want the live tracking link?' },
      { from: 'user', text: 'Yes please' },
    ],
    chips: ['Order updates', 'Payment links', 'Broadcast campaigns'],
  },
  {
    id: 'website',
    name: 'Website',
    tag: 'Embed widget',
    icon: Globe,
    accent: '#6B1E32',
    desc: 'A trained assistant on every page that answers questions instantly and captures real leads.',
    headline: 'Turn visitors into enquiries',
    thread: [
      { from: 'user', text: 'Do you build software for logistics companies?' },
      { from: 'bot', text: 'Yes — route planning, POD capture, and billing automation.' },
      { from: 'bot', text: 'Shall I book a 20-minute call with the team?' },
      { from: 'user', text: 'Book it for Thursday' },
    ],
    chips: ['Lead capture', 'Instant answers', 'Meeting booking'],
  },
  {
    id: 'instagram',
    name: 'Instagram',
    tag: 'DM + comments',
    icon: Instagram,
    accent: '#C13584',
    desc: 'Auto-reply to comments, story mentions, and DMs — then recommend the right product.',
    headline: 'Reply to every DM in seconds',
    thread: [
      { from: 'user', text: 'Price for the tan leather bag?' },
      { from: 'bot', text: '₹4,299 — available in tan and espresso.' },
      { from: 'bot', text: 'Here is the checkout link, ships in 2 days 🛍️' },
      { from: 'user', text: 'Ordering now' },
    ],
    chips: ['Comment replies', 'Story mentions', 'Product recommendations'],
  },
  {
    id: 'messenger',
    name: 'Messenger',
    tag: 'Meta',
    icon: MessagesSquare,
    accent: '#0084FF',
    desc: '24/7 answers to FAQs, quotes, and booking requests without a support agent awake.',
    headline: 'Always-on Messenger support',
    thread: [
      { from: 'user', text: 'Is the Kolkata branch open on Sunday?' },
      { from: 'bot', text: 'Yes, 11 AM to 7 PM. Want directions?' },
      { from: 'user', text: 'Send them' },
      { from: 'bot', text: 'Sent 📍 Anything else I can help with?' },
    ],
    chips: ['FAQ handling', 'Store info', 'Human handover'],
  },
  {
    id: 'telegram',
    name: 'Telegram',
    tag: 'Bot API',
    icon: Send,
    accent: '#2AABEE',
    desc: 'Internal team bots, alerts, approvals, and customer groups handled automatically.',
    headline: 'Alerts and approvals in one place',
    thread: [
      { from: 'bot', text: '⚠️ Invoice INV-2291 crossed the ₹2L approval limit.' },
      { from: 'user', text: 'Approve' },
      { from: 'bot', text: 'Approved and pushed to Tally. Finance has been notified.' },
    ],
    chips: ['Ops alerts', 'Approvals', 'Group automation'],
  },
  {
    id: 'mobile',
    name: 'Mobile App',
    tag: 'SDK',
    icon: Smartphone,
    accent: '#264639',
    desc: 'Drop the same assistant into your Android or iOS app with full session context.',
    headline: 'In-app help that knows the user',
    thread: [
      { from: 'user', text: 'My subscription did not renew' },
      { from: 'bot', text: 'I can see the failed payment on 2 Aug. Retry with the same card?' },
      { from: 'user', text: 'Use my UPI instead' },
      { from: 'bot', text: 'Done ✅ Renewed until 2 Sep.' },
    ],
    chips: ['Logged-in context', 'Ticket deflection', 'Push follow-ups'],
  },
  {
    id: 'voice',
    name: 'Voice & Calls',
    tag: 'AI voice agent',
    icon: PhoneCall,
    accent: '#8B5CF6',
    desc: 'Inbound and outbound calls answered by a natural voice agent that logs to your CRM.',
    headline: 'A voice agent that never misses a call',
    thread: [
      { from: 'bot', text: '"Good morning, this is Autoneural. How can I help?"' },
      { from: 'user', text: '"I want a quote for 500 units."' },
      { from: 'bot', text: '"Noted. Sending the quote to your email and booking a callback at 4 PM."' },
    ],
    chips: ['Inbound + outbound', 'Lead qualification', 'CRM sync'],
  },
  {
    id: 'landing',
    name: 'Landing Pages',
    tag: 'Conversational form',
    icon: LayoutTemplate,
    accent: '#E0A030',
    desc: 'Replace long forms with a short conversation — completion rates go up, drop-offs go down.',
    headline: 'Forms that feel like a chat',
    thread: [
      { from: 'bot', text: 'Quick one — what is your monthly order volume?' },
      { from: 'user', text: 'Around 1,200' },
      { from: 'bot', text: 'Perfect fit for the Growth plan. Where should I send the proposal?' },
    ],
    chips: ['Surveys', 'Qualification', 'Higher completion'],
  },
  {
    id: 'email',
    name: 'Email',
    tag: 'Inbox agent',
    icon: Mail,
    accent: '#B0432A',
    desc: 'An agent that reads incoming mail, drafts replies, and routes what needs a human.',
    headline: 'An inbox that sorts itself',
    thread: [
      { from: 'bot', text: '14 new enquiries overnight. 11 answered, 3 need you.' },
      { from: 'user', text: 'Show me the 3' },
      { from: 'bot', text: 'Two pricing negotiations and one refund escalation.' },
    ],
    chips: ['Auto-drafting', 'Routing', 'Escalation rules'],
  },
  {
    id: 'teams',
    name: 'Slack & Teams',
    tag: 'Internal copilot',
    icon: Users,
    accent: '#4A5FC1',
    desc: 'Let staff ask your data questions in plain language, right inside their work chat.',
    headline: 'Ask your business anything',
    thread: [
      { from: 'user', text: 'What did we invoice last week?' },
      { from: 'bot', text: '₹18.4L across 63 invoices — 12% above the previous week.' },
      { from: 'user', text: 'Which client was biggest?' },
      { from: 'bot', text: 'Meridian Exports at ₹3.1L.' },
    ],
    chips: ['Internal Q&A', 'Report on demand', 'SOP answers'],
  },
];

export function Omnichannel() {
  const [activeId, setActiveId] = useState(CHANNELS[0]!.id);
  // How many messages of the current thread are visible, so the conversation
  // types itself out rather than appearing all at once.
  const [visible, setVisible] = useState(0);

  const active = CHANNELS.find((c) => c.id === activeId) ?? CHANNELS[0]!;

  useEffect(() => {
    setVisible(0);
    const timers = active.thread.map((_, i) =>
      setTimeout(() => setVisible(i + 1), 320 + i * 520),
    );
    return () => timers.forEach(clearTimeout);
  }, [active]);

  return (
    <section
      id="omnichannel"
      className="relative overflow-hidden border-y border-border bg-muted/50 py-24 md:py-28"
      data-testid="omnichannel-section"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-primary/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-accent/[0.07] blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <motion.p
              className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              Omnichannel
            </motion.p>
            <motion.h2
              className="font-serif text-5xl font-semibold leading-[0.96] text-foreground md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              One AI brain.
              <span className="block text-primary">Every channel you sell on.</span>
            </motion.h2>
          </div>
          <motion.p
            className="max-w-xl text-lg leading-8 text-secondary-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Build the assistant once. It carries the same knowledge, tone, and history to WhatsApp,
            your website, Instagram, phone calls, and your team&apos;s internal chat — so a customer
            never has to repeat themselves.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* Channel picker. Hovering selects, so the preview follows the
              pointer; clicking is the equivalent for touch and keyboard. */}
          <motion.div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            {CHANNELS.map((channel) => {
              const isActive = channel.id === activeId;
              const Icon = channel.icon;
              return (
                <button
                  key={channel.id}
                  type="button"
                  onClick={() => setActiveId(channel.id)}
                  onMouseEnter={() => setActiveId(channel.id)}
                  onFocus={() => setActiveId(channel.id)}
                  className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-primary/45 bg-card shadow-clay lg:-translate-y-1'
                      : 'border-border bg-card/55 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-sm'
                  }`}
                  data-testid={`omnichannel-${channel.id}`}
                  aria-pressed={isActive}
                >
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] origin-left transition-transform duration-300"
                    style={{
                      background: channel.accent,
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    }}
                  />
                  <span
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-colors"
                    style={{ backgroundColor: `${channel.accent}1A`, color: channel.accent }}
                  >
                    <Icon size={20} />
                  </span>
                  <span className="block font-heading text-base font-semibold text-foreground">
                    {channel.name}
                  </span>
                  <span className="mt-1 block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-secondary-foreground">
                    {channel.tag}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Conversation preview for the hovered channel. */}
          <motion.div
            className="lg:sticky lg:top-28 lg:self-start"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-clay">
              <div
                className="flex items-center gap-3 px-5 py-4"
                style={{
                  background: `linear-gradient(120deg, ${active.accent}, ${active.accent}CC)`,
                }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                  <active.icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="truncate font-heading text-sm font-semibold text-white">
                    Autoneural Assistant
                  </p>
                  <p className="flex items-center gap-1.5 text-[0.7rem] text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
                    Online on {active.name}
                  </p>
                </div>
              </div>

              <div className="min-h-[290px] space-y-3 bg-[linear-gradient(180deg,_rgba(0,0,0,0.02),_transparent)] p-5">
                <AnimatePresence mode="popLayout">
                  {active.thread.slice(0, visible).map((msg, i) => (
                    <motion.div
                      key={`${active.id}-${i}`}
                      layout
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <span
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-6 shadow-sm ${
                          msg.from === 'user'
                            ? 'rounded-br-sm bg-foreground text-background'
                            : 'rounded-bl-sm border border-border bg-background text-foreground'
                        }`}
                      >
                        {msg.text}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing indicator, shown until the thread finishes. */}
                {visible < active.thread.length && (
                  <div className="flex justify-start">
                    <span className="flex gap-1 rounded-2xl rounded-bl-sm border border-border bg-background px-4 py-3">
                      {[0, 1, 2].map((dot) => (
                        <motion.span
                          key={dot}
                          className="h-1.5 w-1.5 rounded-full bg-secondary-foreground"
                          animate={{ opacity: [0.25, 1, 0.25] }}
                          transition={{ duration: 1, repeat: Infinity, delay: dot * 0.15 }}
                        />
                      ))}
                    </span>
                  </div>
                )}
              </div>

              <div className="border-t border-border bg-background/70 px-5 py-5">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {active.headline}
                </h3>
                <p className="mt-2 text-sm leading-6 text-secondary-foreground">{active.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {active.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-secondary-foreground">
              Hover or tap a channel to preview a real conversation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
