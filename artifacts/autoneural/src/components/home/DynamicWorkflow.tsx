import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  Bell,
  BellRing,
  BookOpen,
  Bot,
  Brain,
  BrainCircuit,
  Calculator,
  Calendar,
  Check,
  CheckCircle,
  CheckCircle2,
  CheckSquare,
  Clock,
  Database,
  FileDown,
  FileText,
  GitFork,
  HardDrive,
  Headphones,
  Layers,
  Mail,
  MessageCircle,
  MessageSquare,
  Mic,
  Pause,
  PhoneCall,
  Play,
  Radio,
  RotateCcw,
  ScanText,
  Send,
  ShieldCheck,
  Sparkles,
  Split,
  UserCheck,
  Volume2,
  Wrench,
  Zap,
} from 'lucide-react';
import { WORKFLOWS, type WorkflowDefinition, type WorkflowNode, type WorkflowConnection } from '@/data/workflows';

const ICON_MAP: Record<string, React.ElementType> = {
  BarChart3,
  Bell,
  BellRing,
  BookOpen,
  Bot,
  Brain,
  BrainCircuit,
  Calculator,
  Calendar,
  Check,
  CheckCircle,
  CheckCircle2,
  CheckSquare,
  Clock,
  Database,
  FileDown,
  FileText,
  GitFork,
  HardDrive,
  Headphones,
  Layers,
  Mail,
  MessageCircle,
  MessageSquare,
  Mic,
  PhoneCall,
  Radio,
  ScanText,
  Send,
  ShieldCheck,
  Sparkles,
  Split,
  UserCheck,
  Volume2,
  Wrench,
  Zap,
};

function getNodeDimensions(node: WorkflowNode) {
  const width = node.width ?? (node.isWide ? 170 : 80);
  const height = node.height ?? 80;
  return { width, height };
}

export function DynamicWorkflow() {
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string>(WORKFLOWS[0]!.id);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const currentWorkflow = useMemo(() => {
    return WORKFLOWS.find((w) => w.id === selectedWorkflowId) ?? WORKFLOWS[0]!;
  }, [selectedWorkflowId]);

  // Reset execution when workflow changes
  useEffect(() => {
    setCurrentStepIndex(0);
  }, [selectedWorkflowId]);

  // Simulation timer loop
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const advanceStep = useCallback(() => {
    setCurrentStepIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex >= currentWorkflow.executionSteps.length) {
        return 0; // loop
      }
      return nextIndex;
    });
  }, [currentWorkflow.executionSteps.length]);

  useEffect(() => {
    if (!isPlaying || prefersReducedMotion) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      return;
    }

    const currentStep = currentWorkflow.executionSteps[currentStepIndex];
    const duration = currentStep ? currentStep.durationMs : 1200;

    timeoutRef.current = setTimeout(() => {
      advanceStep();
    }, duration);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isPlaying, currentStepIndex, currentWorkflow, advanceStep, prefersReducedMotion]);

  const activeStep = currentWorkflow.executionSteps[currentStepIndex] ?? currentWorkflow.executionSteps[0]!;

  // Determine node states
  const getNodeState = useCallback(
    (nodeId: string) => {
      const activeNodeIds = activeStep.activeNodeIds;
      if (activeNodeIds.includes(nodeId)) {
        return 'running';
      }

      // Check if node was part of an earlier step in the current cycle
      let hasCompletedEarlier = false;
      for (let i = 0; i < currentStepIndex; i++) {
        const step = currentWorkflow.executionSteps[i];
        if (step && step.activeNodeIds.includes(nodeId)) {
          hasCompletedEarlier = true;
          break;
        }
      }

      if (hasCompletedEarlier) {
        return 'completed';
      }

      return 'waiting';
    },
    [activeStep, currentStepIndex, currentWorkflow.executionSteps]
  );

  // Determine connection active state
  const isConnectionActive = useCallback(
    (connId: string) => {
      return activeStep.activeConnectionIds.includes(connId);
    },
    [activeStep]
  );

  const hasConnectionCompleted = useCallback(
    (connId: string) => {
      for (let i = 0; i < currentStepIndex; i++) {
        const step = currentWorkflow.executionSteps[i];
        if (step && step.activeConnectionIds.includes(connId)) {
          return true;
        }
      }
      return false;
    },
    [currentStepIndex, currentWorkflow.executionSteps]
  );

  // Calculate SVG connection path between two nodes
  const getConnectionPath = useCallback(
    (conn: WorkflowConnection) => {
      if (conn.pathD) return conn.pathD;

      const sourceNode = currentWorkflow.nodes.find((n) => n.id === conn.source);
      const targetNode = currentWorkflow.nodes.find((n) => n.id === conn.target);

      if (!sourceNode || !targetNode) return '';

      const srcDim = getNodeDimensions(sourceNode);
      const tgtDim = getNodeDimensions(targetNode);

      // Standard left-to-right socket positions
      let startX = sourceNode.x + srcDim.width;
      let startY = sourceNode.y + srcDim.height / 2;
      let endX = targetNode.x;
      let endY = targetNode.y + tgtDim.height / 2;

      // Handle vertical attachments (e.g. subnodes placed above/below)
      if (Math.abs(sourceNode.x - targetNode.x) < 30) {
        if (sourceNode.y < targetNode.y) {
          startX = sourceNode.x + srcDim.width / 2;
          startY = sourceNode.y + srcDim.height;
          endX = targetNode.x + tgtDim.width / 2;
          endY = targetNode.y;
          return `M ${startX} ${startY} V ${endY}`;
        } else {
          startX = sourceNode.x + srcDim.width / 2;
          startY = sourceNode.y;
          endX = targetNode.x + tgtDim.width / 2;
          endY = targetNode.y + tgtDim.height;
          return `M ${startX} ${startY} V ${endY}`;
        }
      }

      const dx = Math.max(30, (endX - startX) * 0.5);
      return `M ${startX} ${startY} C ${startX + dx} ${startY}, ${endX - dx} ${endY}, ${endX} ${endY}`;
    },
    [currentWorkflow]
  );

  return (
    <div className="w-full">
      {/* Workflow Selector Tabs */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div
          role="tablist"
          aria-label="Workflow selections"
          className="flex flex-wrap items-center gap-2 rounded-xl bg-[#202226] p-1.5 border border-white/10"
        >
          {WORKFLOWS.map((wf) => {
            const isSelected = wf.id === selectedWorkflowId;
            return (
              <button
                key={wf.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`workflow-panel-${wf.id}`}
                onClick={() => {
                  setSelectedWorkflowId(wf.id);
                  setIsPlaying(true);
                }}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-mono font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-primary text-white shadow-[0_2px_12px_rgba(107,30,50,0.35)]'
                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full transition-colors ${
                    isSelected ? 'bg-white animate-pulse' : 'bg-slate-600'
                  }`}
                />
                {wf.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Playback Controls & Status */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? 'Pause workflow simulation' : 'Play workflow simulation'}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#202226] px-3 py-1.5 text-xs font-mono font-semibold text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="h-3.5 w-3.5 text-primary" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 text-emerald-400" />
                <span>Play</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              setCurrentStepIndex(0);
              setIsPlaying(true);
            }}
            aria-label="Replay workflow"
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#202226] px-3 py-1.5 text-xs font-mono font-semibold text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Replay</span>
          </button>
        </div>
      </div>

      {/* Main Canvas Card */}
      <motion.div
        key={currentWorkflow.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="rounded-xl border border-white/10 bg-[#202226] shadow-[0_30px_90px_rgba(0,0,0,0.35)] overflow-hidden"
      >
        {/* Canvas Header */}
        <div className="flex flex-col gap-3 border-b border-white/10 bg-[#2a2d33] px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-white shadow-sm">
              <Bot className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading text-lg font-bold text-white">
                  {currentWorkflow.title}
                </h3>
                <span className="hidden sm:inline-block rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-slate-300">
                  {currentWorkflow.badgeText}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {currentWorkflow.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Step {currentStepIndex + 1} of {currentWorkflow.executionSteps.length}</span>
            </div>
          </div>
        </div>

        {/* Live Step Progress Banner */}
        <div className="border-b border-white/5 bg-[#25272c] px-5 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-300 font-mono">
            <span className="text-emerald-400 font-semibold">▶ ACTIVE EVENT:</span>
            <span className="truncate max-w-xl text-slate-200">{activeStep.description}</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
            <span>Execution status:</span>
            <span className="text-emerald-300 font-semibold">
              {currentStepIndex === currentWorkflow.executionSteps.length - 1 ? 'Cycle Completed' : 'Simulating'}
            </span>
          </div>
        </div>

        {/* Canvas Area with horizontal scroll for responsiveness */}
        <div className="overflow-x-auto select-none bg-[#1d1f23]">
          <div
            className="relative"
            style={{
              width: `${currentWorkflow.canvasWidth}px`,
              height: `${currentWorkflow.canvasHeight}px`,
            }}
          >
            {/* SVG Connection Layer */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none"
              viewBox={`0 0 ${currentWorkflow.canvasWidth} ${currentWorkflow.canvasHeight}`}
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <filter id="flowGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="activePacketGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#25D366" />
                  <stop offset="100%" stopColor="#58d08c" />
                </linearGradient>
              </defs>

              {/* Inactive & Base Connection lines */}
              {currentWorkflow.connections.map((conn) => {
                const pathD = getConnectionPath(conn);
                const isActive = isConnectionActive(conn.id);
                const isCompleted = hasConnectionCompleted(conn.id);

                return (
                  <g key={conn.id}>
                    {/* Background track line */}
                    <path
                      d={pathD}
                      stroke={isCompleted ? '#447d5e' : '#525866'}
                      strokeWidth="2.2"
                      strokeDasharray={isCompleted ? 'none' : '4 3'}
                      opacity={isCompleted ? 0.85 : 0.45}
                    />

                    {/* Active glowing path */}
                    {isActive && (
                      <path
                        d={pathD}
                        stroke="#58d08c"
                        strokeWidth="3"
                        filter="url(#flowGlow)"
                        strokeDasharray="8 4"
                        className="animate-[dash_1s_linear_infinite]"
                      />
                    )}

                    {/* Animated Data Packet along active line */}
                    {isActive && !prefersReducedMotion && (
                      <circle r="4.5" fill="url(#activePacketGrad)" filter="url(#flowGlow)">
                        <animateMotion path={pathD} dur="1s" repeatCount="indefinite" />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Connection Labels */}
            {currentWorkflow.connections.map((conn) => {
              if (!conn.label) return null;
              const sourceNode = currentWorkflow.nodes.find((n) => n.id === conn.source);
              const targetNode = currentWorkflow.nodes.find((n) => n.id === conn.target);
              if (!sourceNode || !targetNode) return null;

              const srcDim = getNodeDimensions(sourceNode);
              const tgtDim = getNodeDimensions(targetNode);

              const midX = (sourceNode.x + srcDim.width + targetNode.x) / 2;
              const midY = (sourceNode.y + srcDim.height / 2 + targetNode.y + tgtDim.height / 2) / 2;

              const isActive = isConnectionActive(conn.id);
              const isCompleted = hasConnectionCompleted(conn.id);

              return (
                <div
                  key={`label-${conn.id}`}
                  className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ left: `${midX}px`, top: `${midY - 14}px` }}
                >
                  <span
                    className={`inline-block font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full border transition-all ${
                      isActive
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-[0_0_12px_rgba(88,208,140,0.4)]'
                        : isCompleted
                        ? 'bg-emerald-950/40 text-emerald-400/80 border-emerald-800/40'
                        : 'bg-[#292c33] text-slate-400 border-white/10'
                    }`}
                  >
                    {conn.label}
                  </span>
                </div>
              );
            })}

            {/* Workflow Nodes */}
            {currentWorkflow.nodes.map((node) => {
              const { width, height } = getNodeDimensions(node);
              const state = getNodeState(node.id);
              const Icon = ICON_MAP[node.icon] ?? Bot;

              const isRunning = state === 'running';
              const isCompleted = state === 'completed';

              return (
                <div
                  key={node.id}
                  className={`absolute transition-all duration-300 rounded-md border shadow-[0_12px_34px_rgba(0,0,0,0.28)] ${
                    isRunning
                      ? 'border-emerald-400 bg-[#34373f] ring-2 ring-emerald-400/50 shadow-[0_0_24px_rgba(88,208,140,0.35)] -translate-y-0.5'
                      : isCompleted
                      ? 'border-emerald-500/70 bg-[#2d3036]'
                      : 'border-slate-600/70 bg-[#34373f]/90'
                  }`}
                  style={{
                    left: `${node.x}px`,
                    top: `${node.y}px`,
                    width: `${width}px`,
                    height: `${height}px`,
                  }}
                >
                  {/* Left & Right Connection Sockets */}
                  <span className="absolute -left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />
                  <span className="absolute -right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-slate-500 bg-[#555a64]" />

                  {/* Status Indicator Icon */}
                  {isCompleted && (
                    <span className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-black">
                      <Check className="h-3 w-3 stroke-[3]" aria-hidden="true" />
                    </span>
                  )}

                  {isRunning && (
                    <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center">
                      <span className="absolute h-full w-full rounded-full bg-emerald-400 animate-ping opacity-75" />
                      <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </span>
                  )}

                  {/* Node Content */}
                  <div className="relative flex h-full flex-col items-center justify-center px-2">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                        isRunning
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : isCompleted
                          ? 'bg-emerald-500/12 text-emerald-400'
                          : 'bg-slate-700/60 text-slate-300'
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </div>

                    {/* Wide node internal text */}
                    {node.isWide && (
                      <div className="mt-1 text-center w-full px-1">
                        <p className="text-xs font-bold leading-tight text-white truncate">
                          {node.label}
                        </p>
                        <p className="text-[10px] leading-tight text-slate-400 truncate">
                          {node.sublabel}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Bottom Outside Labels (for compact / non-wide nodes) */}
                  {!node.isWide && (
                    <div className="absolute left-1/2 top-full mt-2 w-32 -translate-x-1/2 text-center pointer-events-none">
                      <p
                        className={`text-xs font-bold leading-tight transition-colors ${
                          isRunning ? 'text-emerald-300' : 'text-white'
                        }`}
                      >
                        {node.label}
                      </p>
                      <p className="mt-0.5 text-[10px] leading-tight text-slate-400">
                        {node.sublabel}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Bottom Explanatory Callout Card */}
            <div className="absolute bottom-5 left-5 max-w-[620px] rounded-lg border border-white/10 bg-black/40 p-4 backdrop-blur-md z-20">
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>How This Automation Executes</span>
                </div>
                <span className="font-mono text-[10px] uppercase text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  Autonomous Flow
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                {currentWorkflow.explanation}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Swipe Hint */}
      <div className="mt-3 flex items-center justify-between text-xs text-slate-400 sm:hidden">
        <span>← Swipe horizontally to explore full workflow map →</span>
        <span className="font-mono text-emerald-400">Interactive</span>
      </div>
    </div>
  );
}
