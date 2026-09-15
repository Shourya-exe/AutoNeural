export type NodeType =
  | 'trigger'
  | 'condition'
  | 'ai'
  | 'memory'
  | 'database'
  | 'api'
  | 'tool'
  | 'transform'
  | 'notification'
  | 'human'
  | 'output';

export interface WorkflowNode {
  id: string;
  label: string;
  sublabel: string;
  type: NodeType;
  icon: string;
  x: number; // Left coordinate in px
  y: number; // Top coordinate in px
  width?: number; // default 80
  height?: number; // default 80
  isWide?: boolean; // wide card for AI agents / tools
  shape?: 'rect' | 'circle' | 'wide';
  metadata?: Record<string, string>;
}

export interface WorkflowConnection {
  id: string;
  source: string;
  target: string;
  label?: string; // e.g. "YES", "NO", "1 item", "true", "false"
  branch?: 'yes' | 'no' | 'main' | 'sub';
  // SVG path curve override if custom bezier needed
  pathD?: string;
}

export interface WorkflowExecutionStep {
  stepIndex: number;
  activeNodeIds: string[];
  activeConnectionIds: string[];
  description: string;
  durationMs: number;
}

export interface WorkflowDefinition {
  id: string;
  title: string;
  tabLabel: string;
  subtitle: string;
  explanation: string;
  badgeText: string;
  canvasWidth: number;
  canvasHeight: number;
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
  executionSteps: WorkflowExecutionStep[];
}

export const WORKFLOWS: WorkflowDefinition[] = [
  {
    id: 'real-estate-lead-agent',
    title: 'Real Estate Lead Qualification',
    tabLabel: 'Real Estate Lead Agent',
    subtitle: 'Website / WhatsApp lead capture, AI qualification, property matching, and routing.',
    badgeText: 'Live Process Map',
    explanation:
      'A buyer lead arrives from WhatsApp or the portal. The agent validates the phone and preferences, queries available units in the property database, scores buyer intent, and instantly assigns high-intent clients to senior brokers with an automated WhatsApp introduction.',
    canvasWidth: 1420,
    canvasHeight: 650,
    nodes: [
      {
        id: 're-trigger',
        label: 'Website / WhatsApp Lead',
        sublabel: 'Source: Inbound Webhook',
        type: 'trigger',
        icon: 'MessageSquare',
        x: 40,
        y: 220,
      },
      {
        id: 're-received',
        label: 'Lead Received',
        sublabel: 'Ingest & Deduplicate',
        type: 'transform',
        icon: 'FileDown',
        x: 170,
        y: 220,
      },
      {
        id: 're-validate',
        label: 'Validate Lead Data',
        sublabel: 'Phone, Budget, Area',
        type: 'transform',
        icon: 'CheckCircle2',
        x: 300,
        y: 220,
      },
      {
        id: 're-ai-qual',
        label: 'AI Lead Qualification',
        sublabel: 'Intent & Timeline Agent',
        type: 'ai',
        icon: 'BrainCircuit',
        x: 440,
        y: 220,
        width: 170,
        isWide: true,
      },
      {
        id: 're-db-check',
        label: 'Check Property DB',
        sublabel: 'Inventory & Pricing',
        type: 'database',
        icon: 'Database',
        x: 650,
        y: 220,
      },
      {
        id: 're-score',
        label: 'Score Lead',
        sublabel: 'Algorithm: 0 - 100',
        type: 'tool',
        icon: 'Calculator',
        x: 770,
        y: 220,
      },
      {
        id: 're-intent-check',
        label: 'High Intent?',
        sublabel: 'Score >= 75',
        type: 'condition',
        icon: 'GitFork',
        x: 890,
        y: 220,
      },
      // YES branch (Top / Straight)
      {
        id: 're-assign-sales',
        label: 'Assign Sales Agent',
        sublabel: 'Round-Robin Broker',
        type: 'human',
        icon: 'UserCheck',
        x: 1040,
        y: 110,
      },
      {
        id: 're-wa-intro',
        label: 'WhatsApp Follow-up',
        sublabel: 'Send Matched Listings',
        type: 'notification',
        icon: 'Send',
        x: 1170,
        y: 110,
      },
      {
        id: 're-crm-update',
        label: 'CRM Update',
        sublabel: 'Zoho / HubSpot Sync',
        type: 'database',
        icon: 'Layers',
        x: 1300,
        y: 110,
      },
      // NO branch (Bottom)
      {
        id: 're-auto-followup',
        label: 'Automated Follow-up',
        sublabel: '3-Day Nurture Drip',
        type: 'tool',
        icon: 'Clock',
        x: 1050,
        y: 350,
      },
      {
        id: 're-wa-reminder',
        label: 'WhatsApp Reminder',
        sublabel: 'Schedule Catalog',
        type: 'notification',
        icon: 'BellRing',
        x: 1200,
        y: 350,
      },
      // Bottom Analytics
      {
        id: 're-analytics',
        label: 'Analytics Engine',
        sublabel: 'Conversion Metrics',
        type: 'output',
        icon: 'BarChart3',
        x: 1170,
        y: 490,
      },
    ],
    connections: [
      { id: 'c-re-1', source: 're-trigger', target: 're-received' },
      { id: 'c-re-2', source: 're-received', target: 're-validate', label: '1 item' },
      { id: 'c-re-3', source: 're-validate', target: 're-ai-qual' },
      { id: 'c-re-4', source: 're-ai-qual', target: 're-db-check' },
      { id: 'c-re-5', source: 're-db-check', target: 're-score' },
      { id: 'c-re-6', source: 're-score', target: 're-intent-check' },
      // YES branch
      { id: 'c-re-yes', source: 're-intent-check', target: 're-assign-sales', label: 'YES (Score >= 75)', branch: 'yes' },
      { id: 'c-re-7', source: 're-assign-sales', target: 're-wa-intro' },
      { id: 'c-re-8', source: 're-wa-intro', target: 're-crm-update' },
      { id: 'c-re-9', source: 're-crm-update', target: 're-analytics' },
      // NO branch
      { id: 'c-re-no', source: 're-intent-check', target: 're-auto-followup', label: 'NO (Score < 75)', branch: 'no' },
      { id: 'c-re-10', source: 're-auto-followup', target: 're-wa-reminder' },
      { id: 'c-re-11', source: 're-wa-reminder', target: 're-analytics' },
    ],
    executionSteps: [
      { stepIndex: 0, activeNodeIds: ['re-trigger'], activeConnectionIds: [], description: 'Inbound lead received from website form / WhatsApp.', durationMs: 1200 },
      { stepIndex: 1, activeNodeIds: ['re-received'], activeConnectionIds: ['c-re-1'], description: 'Ingesting payload and deduplicating record.', durationMs: 1000 },
      { stepIndex: 2, activeNodeIds: ['re-validate'], activeConnectionIds: ['c-re-2'], description: 'Verifying phone number and budget criteria.', durationMs: 1000 },
      { stepIndex: 3, activeNodeIds: ['re-ai-qual'], activeConnectionIds: ['c-re-3'], description: 'AI qualification analyzing property preference and buying urgency.', durationMs: 1400 },
      { stepIndex: 4, activeNodeIds: ['re-db-check'], activeConnectionIds: ['c-re-4'], description: 'Querying property database for matching units.', durationMs: 1100 },
      { stepIndex: 5, activeNodeIds: ['re-score'], activeConnectionIds: ['c-re-5'], description: 'Computing buyer lead score (Result: 88/100).', durationMs: 1000 },
      { stepIndex: 6, activeNodeIds: ['re-intent-check'], activeConnectionIds: ['c-re-6'], description: 'Branch evaluation: Score 88 >= 75 (High Intent: YES).', durationMs: 1200 },
      { stepIndex: 7, activeNodeIds: ['re-assign-sales'], activeConnectionIds: ['c-re-yes'], description: 'Assigning high-value prospect to specialized sales agent.', durationMs: 1200 },
      { stepIndex: 8, activeNodeIds: ['re-wa-intro'], activeConnectionIds: ['c-re-7'], description: 'Sending personalized WhatsApp brochure and agent contact.', durationMs: 1200 },
      { stepIndex: 9, activeNodeIds: ['re-crm-update'], activeConnectionIds: ['c-re-8'], description: 'Updating CRM deal stage and logging activity.', durationMs: 1100 },
      { stepIndex: 10, activeNodeIds: ['re-analytics'], activeConnectionIds: ['c-re-9'], description: 'Lead qualification metrics logged to executive dashboard.', durationMs: 1600 },
    ],
  },
  {
    id: 'ai-calling-agent',
    title: 'Aivora AI Voice Calling Agent',
    tabLabel: 'AI Calling Agent',
    subtitle: 'Autonomous inbound telephony, speech recognition, live reasoning, and calendar booking.',
    badgeText: 'Live Telephony Map',
    explanation:
      'When an inbound call rings, Aivora answers instantaneously. Speech is streamed into high-accuracy STT, evaluated through low-latency AI reasoning, caller credentials are verified, appointments booked directly into Google Calendar, and confirmation sent via WhatsApp before call termination.',
    canvasWidth: 1420,
    canvasHeight: 650,
    nodes: [
      {
        id: 'call-trigger',
        label: 'Incoming Call',
        sublabel: 'SIP / Twilio Trunk',
        type: 'trigger',
        icon: 'PhoneCall',
        x: 40,
        y: 220,
      },
      {
        id: 'call-voice-agent',
        label: 'Voice Agent',
        sublabel: 'Low-latency Pipeline',
        type: 'ai',
        icon: 'Headphones',
        x: 180,
        y: 220,
      },
      {
        id: 'call-stt',
        label: 'Speech Recognition',
        sublabel: 'Streaming Whisper STT',
        type: 'ai',
        icon: 'Mic',
        x: 310,
        y: 220,
      },
      {
        id: 'call-reasoning',
        label: 'AI Reasoning Engine',
        sublabel: 'LLM Intent & Dialogue',
        type: 'ai',
        icon: 'Brain',
        x: 450,
        y: 220,
        width: 170,
        isWide: true,
      },
      {
        id: 'call-qualification',
        label: 'Customer Qualification',
        sublabel: 'Requirements & Scope',
        type: 'tool',
        icon: 'ShieldCheck',
        x: 660,
        y: 220,
      },
      {
        id: 'call-crm-update',
        label: 'CRM Update',
        sublabel: 'Caller & Call Audio Log',
        type: 'database',
        icon: 'Database',
        x: 790,
        y: 220,
      },
      {
        id: 'call-booking',
        label: 'Appointment Booking',
        sublabel: 'Google Calendar API',
        type: 'tool',
        icon: 'Calendar',
        x: 920,
        y: 220,
      },
      {
        id: 'call-wa-followup',
        label: 'WhatsApp Follow-up',
        sublabel: 'Invite & Call Summary',
        type: 'notification',
        icon: 'MessageCircle',
        x: 1060,
        y: 220,
      },
      {
        id: 'call-sales-alert',
        label: 'Sales Notification',
        sublabel: 'Slack / Email Ping',
        type: 'notification',
        icon: 'Bell',
        x: 1200,
        y: 220,
      },
      // Memory & Model Sub-nodes
      {
        id: 'call-audio-stream',
        label: 'Duplex Audio Stream',
        sublabel: '< 400ms Turnaround',
        type: 'tool',
        icon: 'Volume2',
        x: 230,
        y: 90,
      },
      {
        id: 'call-memory',
        label: 'Session Memory',
        sublabel: 'Context Buffer',
        type: 'memory',
        icon: 'HardDrive',
        x: 480,
        y: 90,
      },
      {
        id: 'call-tts',
        label: 'Neural TTS Output',
        sublabel: 'Natural Voice Synthesis',
        type: 'output',
        icon: 'Radio',
        x: 480,
        y: 370,
      },
    ],
    connections: [
      { id: 'c-call-1', source: 'call-trigger', target: 'call-voice-agent' },
      { id: 'c-call-sub1', source: 'call-voice-agent', target: 'call-audio-stream' },
      { id: 'c-call-2', source: 'call-voice-agent', target: 'call-stt' },
      { id: 'c-call-3', source: 'call-stt', target: 'call-reasoning' },
      { id: 'c-call-mem', source: 'call-memory', target: 'call-reasoning' },
      { id: 'c-call-tts', source: 'call-reasoning', target: 'call-tts' },
      { id: 'c-call-4', source: 'call-reasoning', target: 'call-qualification' },
      { id: 'c-call-5', source: 'call-qualification', target: 'call-crm-update' },
      { id: 'c-call-6', source: 'call-crm-update', target: 'call-booking' },
      { id: 'c-call-7', source: 'call-booking', target: 'call-wa-followup' },
      { id: 'c-call-8', source: 'call-wa-followup', target: 'call-sales-alert' },
    ],
    executionSteps: [
      { stepIndex: 0, activeNodeIds: ['call-trigger'], activeConnectionIds: [], description: 'Caller dials dedicated business hotline.', durationMs: 1100 },
      { stepIndex: 1, activeNodeIds: ['call-voice-agent', 'call-audio-stream'], activeConnectionIds: ['c-call-1', 'c-call-sub1'], description: 'Voice agent connects live duplex audio in <400ms.', durationMs: 1200 },
      { stepIndex: 2, activeNodeIds: ['call-stt'], activeConnectionIds: ['c-call-2'], description: 'Streaming speech recognition transcribes customer query.', durationMs: 1100 },
      { stepIndex: 3, activeNodeIds: ['call-reasoning', 'call-memory'], activeConnectionIds: ['c-call-3', 'c-call-mem'], description: 'AI reasoning processes dialogue against conversation memory.', durationMs: 1400 },
      { stepIndex: 4, activeNodeIds: ['call-tts'], activeConnectionIds: ['c-call-tts'], description: 'Natural voice synthesizer generates immediate audio reply.', durationMs: 1000 },
      { stepIndex: 5, activeNodeIds: ['call-qualification'], activeConnectionIds: ['c-call-4'], description: 'Validating prospect requirements and meeting eligibility.', durationMs: 1100 },
      { stepIndex: 6, activeNodeIds: ['call-crm-update'], activeConnectionIds: ['c-call-5'], description: 'Transcript and customer profile recorded to CRM.', durationMs: 1100 },
      { stepIndex: 7, activeNodeIds: ['call-booking'], activeConnectionIds: ['c-call-6'], description: 'Selecting mutually open calendar slot & generating Google Meet link.', durationMs: 1200 },
      { stepIndex: 8, activeNodeIds: ['call-wa-followup'], activeConnectionIds: ['c-call-7'], description: 'Sending instant WhatsApp invite and confirmation notice.', durationMs: 1100 },
      { stepIndex: 9, activeNodeIds: ['call-sales-alert'], activeConnectionIds: ['c-call-8'], description: 'Account executive notified with call summary & key takeaways.', durationMs: 1600 },
    ],
  },
  {
    id: 'whatsapp-support-agent',
    title: 'WhatsApp Intelligent Support Agent',
    tabLabel: 'WhatsApp Support',
    subtitle: 'Bilingual customer resolution, semantic knowledge retrieval, tool execution, and CRM sync.',
    badgeText: 'Live Support Map',
    explanation:
      'Customer messages arrive via the official WhatsApp Business API. The system detects language and intent, queries the business vector database with cited answers, decides if transactional actions (like order tracking or refund status) are required, executes tools, and confirms resolution.',
    canvasWidth: 1420,
    canvasHeight: 650,
    nodes: [
      {
        id: 'wa-trigger',
        label: 'WhatsApp Message',
        sublabel: 'Meta Cloud API',
        type: 'trigger',
        icon: 'MessageSquare',
        x: 40,
        y: 220,
      },
      {
        id: 'wa-intent',
        label: 'Intent Detection',
        sublabel: 'Language & Classification',
        type: 'ai',
        icon: 'Sparkles',
        x: 180,
        y: 220,
      },
      {
        id: 'wa-rag',
        label: 'Retrieve Business Knowledge',
        sublabel: 'Vector DB & SOP Docs',
        type: 'database',
        icon: 'BookOpen',
        x: 320,
        y: 220,
        width: 170,
        isWide: true,
      },
      {
        id: 'wa-response',
        label: 'AI Response Generation',
        sublabel: 'Grounded Answer Agent',
        type: 'ai',
        icon: 'Bot',
        x: 530,
        y: 220,
        width: 170,
        isWide: true,
      },
      {
        id: 'wa-condition',
        label: 'Need Action?',
        sublabel: 'Tool Required Check',
        type: 'condition',
        icon: 'Split',
        x: 740,
        y: 220,
      },
      // YES branch: Tool Execution
      {
        id: 'wa-tool-exec',
        label: 'Execute Tool',
        sublabel: 'ERP / Inventory / Order API',
        type: 'tool',
        icon: 'Wrench',
        x: 890,
        y: 110,
        width: 150,
        isWide: true,
      },
      {
        id: 'wa-crm-sync',
        label: 'CRM / ERP Update',
        sublabel: 'Ticket & Status Update',
        type: 'database',
        icon: 'Database',
        x: 1080,
        y: 110,
      },
      {
        id: 'wa-confirm-action',
        label: 'Action Confirmation',
        sublabel: 'Delivery & Reference Code',
        type: 'output',
        icon: 'CheckCircle',
        x: 1240,
        y: 110,
      },
      // NO branch: Direct Response
      {
        id: 'wa-reply-customer',
        label: 'Reply to Customer',
        sublabel: 'WhatsApp Outbound Message',
        type: 'output',
        icon: 'Send',
        x: 930,
        y: 350,
        width: 160,
        isWide: true,
      },
      // Sub nodes
      {
        id: 'wa-buffer-memory',
        label: 'Window Buffer Memory',
        sublabel: 'Previous 10 Messages',
        type: 'memory',
        icon: 'HardDrive',
        x: 480,
        y: 80,
      },
      {
        id: 'wa-human-escalate',
        label: 'Human Handover',
        sublabel: 'On-Demand Live Agent',
        type: 'human',
        icon: 'UserCheck',
        x: 1150,
        y: 350,
      },
    ],
    connections: [
      { id: 'c-wa-1', source: 'wa-trigger', target: 'wa-intent' },
      { id: 'c-wa-2', source: 'wa-intent', target: 'wa-rag' },
      { id: 'c-wa-3', source: 'wa-rag', target: 'wa-response' },
      { id: 'c-wa-mem', source: 'wa-buffer-memory', target: 'wa-response' },
      { id: 'c-wa-4', source: 'wa-response', target: 'wa-condition' },
      // YES branch
      { id: 'c-wa-yes', source: 'wa-condition', target: 'wa-tool-exec', label: 'YES (Action / Order)', branch: 'yes' },
      { id: 'c-wa-5', source: 'wa-tool-exec', target: 'wa-crm-sync' },
      { id: 'c-wa-6', source: 'wa-crm-sync', target: 'wa-confirm-action' },
      // NO branch
      { id: 'c-wa-no', source: 'wa-condition', target: 'wa-reply-customer', label: 'NO (Factual Query)', branch: 'no' },
      { id: 'c-wa-esc', source: 'wa-reply-customer', target: 'wa-human-escalate', label: 'If requested' },
    ],
    executionSteps: [
      { stepIndex: 0, activeNodeIds: ['wa-trigger'], activeConnectionIds: [], description: 'Inbound WhatsApp question received from customer.', durationMs: 1100 },
      { stepIndex: 1, activeNodeIds: ['wa-intent'], activeConnectionIds: ['c-wa-1'], description: 'Classifying customer query: Order Tracking request.', durationMs: 1000 },
      { stepIndex: 2, activeNodeIds: ['wa-rag'], activeConnectionIds: ['c-wa-2'], description: 'Querying order policy knowledge and customer SOPs.', durationMs: 1200 },
      { stepIndex: 3, activeNodeIds: ['wa-response', 'wa-buffer-memory'], activeConnectionIds: ['c-wa-3', 'c-wa-mem'], description: 'AI Agent synthesizes response utilizing session memory.', durationMs: 1400 },
      { stepIndex: 4, activeNodeIds: ['wa-condition'], activeConnectionIds: ['c-wa-4'], description: 'Branch evaluation: Action required to look up live status (YES).', durationMs: 1100 },
      { stepIndex: 5, activeNodeIds: ['wa-tool-exec'], activeConnectionIds: ['c-wa-yes'], description: 'Executing ERP tool: Fetching real-time shipment location.', durationMs: 1300 },
      { stepIndex: 6, activeNodeIds: ['wa-crm-sync'], activeConnectionIds: ['c-wa-5'], description: 'Logging ticket interaction to CRM / ERP record.', durationMs: 1100 },
      { stepIndex: 7, activeNodeIds: ['wa-confirm-action'], activeConnectionIds: ['c-wa-6'], description: 'Sending interactive dispatch tracking link directly to customer.', durationMs: 1600 },
    ],
  },
  {
    id: 'document-automation',
    title: 'Intelligent Document & Invoice Automation',
    tabLabel: 'Document Automation',
    subtitle: 'OCR extraction, classification, line-item matching, approval routing, and ERP entry.',
    badgeText: 'Live Document Engine',
    explanation:
      'Invoices, forms, or contracts arriving via email or folder upload are classified automatically. Specialized OCR extracts tabular line items and metadata, AI checks total matching against purchase orders, and flags edge cases for human review while auto-posting verified records.',
    canvasWidth: 1420,
    canvasHeight: 650,
    nodes: [
      {
        id: 'doc-trigger',
        label: 'Email / Upload',
        sublabel: 'IMAP / S3 Storage',
        type: 'trigger',
        icon: 'Mail',
        x: 40,
        y: 220,
      },
      {
        id: 'doc-detect',
        label: 'Document Detection',
        sublabel: 'PDF / Image / Excel',
        type: 'transform',
        icon: 'FileText',
        x: 180,
        y: 220,
      },
      {
        id: 'doc-ocr',
        label: 'OCR / Extraction',
        sublabel: 'Vision Parser',
        type: 'ai',
        icon: 'ScanText',
        x: 320,
        y: 220,
      },
      {
        id: 'doc-classify',
        label: 'AI Classification',
        sublabel: 'Vendor, Invoice, Tax ID',
        type: 'ai',
        icon: 'BrainCircuit',
        x: 460,
        y: 220,
        width: 160,
        isWide: true,
      },
      {
        id: 'doc-validate',
        label: 'PO & Math Validation',
        sublabel: 'Line Item Comparison',
        type: 'tool',
        icon: 'CheckSquare',
        x: 660,
        y: 220,
      },
      {
        id: 'doc-approval-check',
        label: 'Approval Required?',
        sublabel: 'Mismatch > ₹10,000',
        type: 'condition',
        icon: 'Split',
        x: 800,
        y: 220,
      },
      // YES branch: Human Review
      {
        id: 'doc-human-review',
        label: 'Human Review',
        sublabel: 'Finance Team Sign-off',
        type: 'human',
        icon: 'UserCheck',
        x: 960,
        y: 110,
      },
      // NO branch: Auto Process
      {
        id: 'doc-auto-process',
        label: 'Auto Process',
        sublabel: 'Direct Reconciliation',
        type: 'tool',
        icon: 'Zap',
        x: 960,
        y: 340,
      },
      // Common converge: Record / CRM
      {
        id: 'doc-record-crm',
        label: 'Record / ERP',
        sublabel: 'SAP / Tally / Zoho Sync',
        type: 'database',
        icon: 'Database',
        x: 1120,
        y: 220,
        width: 150,
        isWide: true,
      },
      {
        id: 'doc-notification',
        label: 'Notification',
        sublabel: 'Vendor Remittance Advice',
        type: 'notification',
        icon: 'Send',
        x: 1300,
        y: 220,
      },
    ],
    connections: [
      { id: 'c-doc-1', source: 'doc-trigger', target: 'doc-detect' },
      { id: 'c-doc-2', source: 'doc-detect', target: 'doc-ocr' },
      { id: 'c-doc-3', source: 'doc-ocr', target: 'doc-classify' },
      { id: 'c-doc-4', source: 'doc-classify', target: 'doc-validate' },
      { id: 'c-doc-5', source: 'doc-validate', target: 'doc-approval-check' },
      // YES branch
      { id: 'c-doc-yes', source: 'doc-approval-check', target: 'doc-human-review', label: 'YES (Exception)', branch: 'yes' },
      { id: 'c-doc-6', source: 'doc-human-review', target: 'doc-record-crm', label: 'Approved' },
      // NO branch
      { id: 'c-doc-no', source: 'doc-approval-check', target: 'doc-auto-process', label: 'NO (Matched 100%)', branch: 'no' },
      { id: 'c-doc-7', source: 'doc-auto-process', target: 'doc-record-crm' },
      // Final
      { id: 'c-doc-8', source: 'doc-record-crm', target: 'doc-notification' },
    ],
    executionSteps: [
      { stepIndex: 0, activeNodeIds: ['doc-trigger'], activeConnectionIds: [], description: 'Supplier PDF invoice uploaded via inbound billing email.', durationMs: 1100 },
      { stepIndex: 1, activeNodeIds: ['doc-detect'], activeConnectionIds: ['c-doc-1'], description: 'Multi-page document structure analyzed.', durationMs: 1000 },
      { stepIndex: 2, activeNodeIds: ['doc-ocr'], activeConnectionIds: ['c-doc-2'], description: 'High-precision OCR extracting line-items and tax subtotals.', durationMs: 1300 },
      { stepIndex: 3, activeNodeIds: ['doc-classify'], activeConnectionIds: ['c-doc-3'], description: 'AI classification matching vendor GSTIN and purchase order number.', durationMs: 1200 },
      { stepIndex: 4, activeNodeIds: ['doc-validate'], activeConnectionIds: ['c-doc-4'], description: 'Cross-verifying items against ERP purchase order records.', durationMs: 1100 },
      { stepIndex: 5, activeNodeIds: ['doc-approval-check'], activeConnectionIds: ['c-doc-5'], description: 'Decision: 100% matched within tolerance threshold (NO approval needed).', durationMs: 1100 },
      { stepIndex: 6, activeNodeIds: ['doc-auto-process'], activeConnectionIds: ['c-doc-no'], description: 'Executing automatic reconciliation and posting ledger entries.', durationMs: 1200 },
      { stepIndex: 7, activeNodeIds: ['doc-record-crm'], activeConnectionIds: ['c-doc-7'], description: 'Recording ledger voucher to accounting / ERP system.', durationMs: 1100 },
      { stepIndex: 8, activeNodeIds: ['doc-notification'], activeConnectionIds: ['c-doc-8'], description: 'Automated payment remittance advice transmitted to vendor.', durationMs: 1600 },
    ],
  },
];
