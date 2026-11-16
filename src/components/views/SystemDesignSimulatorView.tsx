import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Network, 
  Server, 
  Database, 
  Zap, 
  Layers, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  DollarSign, 
  Cpu, 
  Clock, 
  ShieldCheck, 
  RotateCcw, 
  Play, 
  Pause, 
  Sliders, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ProgressStorage } from '../../services/progressStorage';
import { UserStats } from '../../types';

interface SystemDesignSimulatorViewProps {
  userStats: UserStats;
  onStatsUpdate: (stats: UserStats) => void;
  onNavigate: (view: string) => void;
}

interface Scenario {
  id: string;
  title: string;
  tagline: string;
  trafficReqPerSec: number;
  maxBudgetDollars: number;
  maxLatencyMs: number;
  maxErrorPercent: number;
  description: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'scenario-startup',
    title: 'Level 1: The Viral Product Launch',
    tagline: 'Survive 10,000 req/sec without crashing on a bootstrapper $150/mo cloud budget.',
    trafficReqPerSec: 10000,
    maxBudgetDollars: 150,
    maxLatencyMs: 120,
    maxErrorPercent: 1.0,
    description: 'Your startup just hit #1 on Product Hunt! A direct-to-database monolithic setup will immediately collapse. Configure an edge CDN and cache layer to protect the primary database while keeping cloud spend under budget.'
  },
  {
    id: 'scenario-black-friday',
    title: 'Level 2: Black Friday E-Commerce Surge',
    tagline: 'Absorb 45,000 req/sec spike with zero cart checkout downtime.',
    trafficReqPerSec: 45000,
    maxBudgetDollars: 450,
    maxLatencyMs: 90,
    maxErrorPercent: 0.5,
    description: 'Midnight flash sale is live. Single server clusters will experience connection exhaustion. Deploy a Load Balancer, horizontal app server scaling, Redis caching, and a Message Queue for asynchronous order processing.'
  },
  {
    id: 'scenario-fintech-ledger',
    title: 'Level 3: Global Real-Time Payment Ledger',
    tagline: 'Handle 80,000 req/sec with strict database ACID integrity and sub-60ms response time.',
    trafficReqPerSec: 80000,
    maxBudgetDollars: 850,
    maxLatencyMs: 60,
    maxErrorPercent: 0.1,
    description: 'Enterprise banking requirements: write operations must never drop. Utilize database Read Replicas to offload reporting queries, Kafka message queues for durable buffering, and multi-region CDN acceleration.'
  }
];

export const SystemDesignSimulatorView: React.FC<SystemDesignSimulatorViewProps> = ({
  userStats,
  onStatsUpdate,
  onNavigate
}) => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const activeScenario = SCENARIOS[selectedScenarioIndex];

  // Architectural Component State
  const [hasCdn, setHasCdn] = useState(true);
  const [hasLoadBalancer, setHasLoadBalancer] = useState(true);
  const [appInstances, setAppInstances] = useState(2); // 1 to 8
  const [hasRedisCache, setHasRedisCache] = useState(true);
  const [hasDbReadReplicas, setHasDbReadReplicas] = useState(0); // 0 to 4
  const [hasMessageQueue, setHasMessageQueue] = useState(false);
  const [manualTrafficSlider, setManualTrafficSlider] = useState<number | null>(null);

  // Simulation run state
  const [isSimulating, setIsSimulating] = useState(false);
  const [sustainedPassSeconds, setSustainedPassSeconds] = useState(0);
  const [levelPassed, setLevelPassed] = useState(false);

  const completedLevelIds = userStats.completedSystemDesignLevelIds || [];
  const isCurrentLevelCompleted = completedLevelIds.includes(activeScenario.id);

  const effectiveTraffic = manualTrafficSlider !== null ? manualTrafficSlider : activeScenario.trafficReqPerSec;

  // Compute live architecture metrics
  // 1. Cost calculation ($/mo)
  const cdnCost = hasCdn ? 30 : 0;
  const lbCost = hasLoadBalancer ? 25 : 0;
  const appCost = appInstances * 35;
  const redisCost = hasRedisCache ? 45 : 0;
  const dbPrimaryCost = 75;
  const dbReplicaCost = hasDbReadReplicas * 40;
  const queueCost = hasMessageQueue ? 50 : 0;
  const totalMonthlyCost = cdnCost + lbCost + appCost + redisCost + dbPrimaryCost + dbReplicaCost + queueCost;

  // 2. Capacity & Throughput analysis
  // CDN absorbs 60% of static traffic
  const trafficAfterCdn = hasCdn ? effectiveTraffic * 0.4 : effectiveTraffic;

  // App tier capacity (each instance handles ~4,000 req/s with LB, or 2,500 without LB)
  const appThroughputCapacity = hasLoadBalancer ? appInstances * 5500 : 2500;
  const appLoadRatio = trafficAfterCdn / Math.max(1, appThroughputCapacity);

  // DB queries: Redis absorbs 85% of reads
  const dbQueries = hasRedisCache ? trafficAfterCdn * 0.15 : trafficAfterCdn;
  const dbCapacity = 3000 * (1 + hasDbReadReplicas * 0.9);
  const dbLoadRatio = dbQueries / Math.max(1, dbCapacity);

  // Error Rate & Latency calculations
  let calculatedLatency = 25;
  let calculatedErrorRate = 0.0;
  const alerts: string[] = [];

  // Bottleneck checks
  if (!hasCdn && effectiveTraffic > 15000) {
    calculatedLatency += 40;
    alerts.push('No Edge CDN: All static assets hit origin servers directly, adding network latency.');
  }

  if (!hasLoadBalancer && appInstances > 1) {
    calculatedErrorRate += 12.0;
    alerts.push('Missing Load Balancer: Multiple app instances provisioned, but traffic cannot be routed!');
  } else if (!hasLoadBalancer && effectiveTraffic > 5000) {
    calculatedLatency += 90;
    calculatedErrorRate += 8.5;
    alerts.push('Single Server Bottleneck: App server CPU pegged at 100%. Add a Load Balancer & scale instances.');
  }

  if (appLoadRatio > 1.0) {
    const overflow = appLoadRatio - 1.0;
    calculatedErrorRate += Math.min(60, overflow * 30);
    calculatedLatency += Math.min(400, overflow * 200);
    alerts.push(`App Cluster Overloaded (${Math.round(appLoadRatio * 100)}%): Server thread pools saturated. Scale instances.`);
  }

  if (dbLoadRatio > 1.0) {
    const dbOverflow = dbLoadRatio - 1.0;
    calculatedErrorRate += Math.min(85, dbOverflow * 45);
    calculatedLatency += Math.min(600, dbOverflow * 350);
    alerts.push(`Database Connection Pool Exhausted: DB is receiving ${Math.round(dbQueries)} queries/sec (max capacity: ${dbCapacity}). Add Redis Cache or Read Replicas!`);
  }

  if (hasMessageQueue) {
    // Message queue smooths peak spikes and drops latency
    calculatedLatency = Math.max(18, calculatedLatency * 0.75);
    calculatedErrorRate = Math.max(0, calculatedErrorRate * 0.4);
  }

  if (hasRedisCache && dbLoadRatio < 0.8) {
    calculatedLatency = Math.max(15, calculatedLatency * 0.85);
  }

  calculatedLatency = Math.round(calculatedLatency);
  calculatedErrorRate = Math.min(100, Math.round(calculatedErrorRate * 10) / 10);

  // Check SLA satisfaction
  const budgetPass = totalMonthlyCost <= activeScenario.maxBudgetDollars;
  const latencyPass = calculatedLatency <= activeScenario.maxLatencyMs;
  const errorPass = calculatedErrorRate <= activeScenario.maxErrorPercent;
  const allCriteriaMet = budgetPass && latencyPass && errorPass;

  // Simulation timer hook
  useEffect(() => {
    let interval: any = null;
    if (isSimulating) {
      interval = setInterval(() => {
        if (allCriteriaMet) {
          setSustainedPassSeconds(prev => {
            const next = prev + 1;
            if (next >= 4 && !levelPassed) {
              setLevelPassed(true);
              confetti({
                particleCount: 120,
                spread: 90,
                origin: { y: 0.6 }
              });
              const updated = ProgressStorage.markSystemDesignComplete(activeScenario.id, 150);
              onStatsUpdate(updated);
            }
            return next;
          });
        } else {
          setSustainedPassSeconds(0);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isSimulating, allCriteriaMet, levelPassed, activeScenario.id]);

  const handleSelectScenario = (idx: number) => {
    setSelectedScenarioIndex(idx);
    setIsSimulating(false);
    setSustainedPassSeconds(0);
    setLevelPassed(false);
    setManualTrafficSlider(null);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] overflow-hidden bg-slate-950 font-sans">
      {/* Top Header Bar */}
      <div className="h-14 border-b border-slate-800 bg-slate-900/90 px-4 flex items-center justify-between select-none">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center">
            <Network className="w-4 h-4 text-indigo-400" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-sm text-white">System Design & Architecture Simulator</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Interactive Chaos Engineering
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Architect high-scale distributed topologies. Simulate traffic spikes and optimize cloud cost vs latency.
            </p>
          </div>
        </div>

        {/* Level Selector Tabs */}
        <div className="flex items-center space-x-1.5">
          {SCENARIOS.map((sc, idx) => {
            const isDone = completedLevelIds.includes(sc.id);
            return (
              <button
                key={sc.id}
                onClick={() => handleSelectScenario(idx)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition ${
                  selectedScenarioIndex === idx
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span>L{idx + 1}</span>
                {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-300" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Column: Topology Canvas & Components Control (7 cols) */}
        <div className="lg:col-span-7 border-r border-slate-800 bg-slate-950 flex flex-col overflow-y-auto p-4 space-y-4">
          {/* Mission Objective Header */}
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">
                Mission Objective • Level {selectedScenarioIndex + 1}
              </span>
              <span className="text-amber-400 font-mono text-xs font-bold">+150 XP</span>
            </div>
            <h2 className="text-base font-extrabold text-white">
              {activeScenario.title}
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              {activeScenario.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
                Incoming Surge: <strong className="text-white font-mono">{activeScenario.trafficReqPerSec.toLocaleString()} req/s</strong>
              </span>
              <span className={`px-2.5 py-1 rounded-lg border font-mono ${
                budgetPass ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300' : 'bg-rose-950/40 border-rose-500/30 text-rose-300'
              }`}>
                Budget: ≤ ${activeScenario.maxBudgetDollars}/mo
              </span>
              <span className={`px-2.5 py-1 rounded-lg border font-mono ${
                latencyPass ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300' : 'bg-rose-950/40 border-rose-500/30 text-rose-300'
              }`}>
                Target Latency: ≤ {activeScenario.maxLatencyMs}ms
              </span>
            </div>
          </div>

          {/* Interactive Topology Visual Diagram */}
          <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-slate-800 p-5 space-y-4 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-2">
              <span className="font-semibold text-slate-300 flex items-center space-x-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>Live Distributed Topology Network</span>
              </span>
              <span className="font-mono text-[11px] text-indigo-400">
                {isSimulating ? '● Traffic Flow Active' : '○ Idle'}
              </span>
            </div>

            {/* Visual Node Flow */}
            <div className="grid grid-cols-4 gap-3 py-3 items-center text-center">
              {/* Node 1: Traffic Origin */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="w-8 h-8 mx-auto rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Activity className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-bold text-white">Client Traffic</div>
                <div className="text-[10px] text-slate-400 font-mono">
                  {effectiveTraffic.toLocaleString()} req/s
                </div>
              </div>

              {/* Node 2: CDN Edge */}
              <div className={`p-3 rounded-xl border transition space-y-1 ${
                hasCdn ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-300' : 'bg-slate-900/40 border-slate-800/60 opacity-40'
              }`}>
                <div className="w-8 h-8 mx-auto rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-bold">Cloudflare CDN</div>
                <div className="text-[10px] font-mono">{hasCdn ? '60% Cached' : 'Disabled'}</div>
              </div>

              {/* Node 3: Load Balancer & App Servers */}
              <div className={`p-3 rounded-xl border transition space-y-1 ${
                hasLoadBalancer ? 'bg-indigo-950/30 border-indigo-500/40 text-indigo-200' : 'bg-amber-950/20 border-amber-500/30 text-amber-300'
              }`}>
                <div className="w-8 h-8 mx-auto rounded-lg bg-indigo-500/20 flex items-center justify-center">
                  <Server className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-[11px] font-bold">
                  {hasLoadBalancer ? 'Nginx ALB' : 'Direct IP'}
                </div>
                <div className="text-[10px] font-mono">{appInstances}x App Replicas</div>
              </div>

              {/* Node 4: Database & Redis */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-emerald-300">
                <div className="w-8 h-8 mx-auto rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <Database className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-[11px] font-bold text-white">
                  PostgreSQL
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  {hasRedisCache ? '+ Redis Cache' : 'No Cache'}
                  {hasDbReadReplicas > 0 ? ` (${hasDbReadReplicas}R)` : ''}
                </div>
              </div>
            </div>

            {/* Chaos Simulator Controller */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-800/80">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsSimulating(!isSimulating)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 shadow-lg transition ${
                    isSimulating
                      ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-600/30'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30'
                  }`}
                >
                  {isSimulating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  <span>{isSimulating ? 'Pause Surge' : 'Simulate Traffic Surge'}</span>
                </button>

                {isSimulating && (
                  <div className="text-xs font-mono text-slate-300">
                    Sustained SLA: <strong className="text-emerald-400">{sustainedPassSeconds}s / 4s</strong>
                  </div>
                )}
              </div>

              {/* Manual Traffic Surge Slider */}
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-slate-400">Load:</span>
                <input
                  type="range"
                  min={1000}
                  max={100000}
                  step={2000}
                  value={effectiveTraffic}
                  onChange={(e) => setManualTrafficSlider(Number(e.target.value))}
                  className="w-28 accent-indigo-500 cursor-pointer"
                />
                <span className="text-slate-200 font-mono w-16 text-right">
                  {Math.round(effectiveTraffic / 1000)}k/s
                </span>
              </div>
            </div>
          </div>

          {/* Infrastructure Controls Palette */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
              <Sliders className="w-3.5 h-3.5 text-indigo-400" />
              <span>Architectural Components Configuration</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Edge CDN Toggle */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Edge CDN (Cloudflare)</div>
                  <div className="text-[11px] text-slate-400">Caches static assets ($30/mo)</div>
                </div>
                <input
                  type="checkbox"
                  checked={hasCdn}
                  onChange={(e) => setHasCdn(e.target.checked)}
                  className="w-4 h-4 accent-indigo-600 cursor-pointer"
                />
              </div>

              {/* Load Balancer Toggle */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Nginx Load Balancer</div>
                  <div className="text-[11px] text-slate-400">Even traffic routing ($25/mo)</div>
                </div>
                <input
                  type="checkbox"
                  checked={hasLoadBalancer}
                  onChange={(e) => setHasLoadBalancer(e.target.checked)}
                  className="w-4 h-4 accent-indigo-600 cursor-pointer"
                />
              </div>

              {/* App Instances Slider */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-white">App Cluster Scale</span>
                  <span className="font-mono text-indigo-400 font-bold">{appInstances} Replicas (${appInstances * 35}/mo)</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={8}
                  value={appInstances}
                  onChange={(e) => setAppInstances(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              {/* Redis Cache Toggle */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Redis In-Memory Cache</div>
                  <div className="text-[11px] text-slate-400">Absorbs 85% DB queries ($45/mo)</div>
                </div>
                <input
                  type="checkbox"
                  checked={hasRedisCache}
                  onChange={(e) => setHasRedisCache(e.target.checked)}
                  className="w-4 h-4 accent-indigo-600 cursor-pointer"
                />
              </div>

              {/* DB Read Replicas Slider */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-white">Database Read Replicas</span>
                  <span className="font-mono text-emerald-400 font-bold">{hasDbReadReplicas} Replicas (${hasDbReadReplicas * 40}/mo)</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={4}
                  value={hasDbReadReplicas}
                  onChange={(e) => setHasDbReadReplicas(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              {/* Message Queue Toggle */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Kafka / RabbitMQ Queue</div>
                  <div className="text-[11px] text-slate-400">Buffers write spikes ($50/mo)</div>
                </div>
                <input
                  type="checkbox"
                  checked={hasMessageQueue}
                  onChange={(e) => setHasMessageQueue(e.target.checked)}
                  className="w-4 h-4 accent-indigo-600 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Telemetry, Bottlenecks & Scorecard (5 cols) */}
        <div className="lg:col-span-5 bg-slate-950 flex flex-col overflow-y-auto p-4 space-y-4">
          {/* Success Banner */}
          {(levelPassed || isCurrentLevelCompleted) && (
            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-200 text-xs space-y-1.5 shadow-xl animate-fadeIn">
              <div className="flex items-center space-x-2 font-bold text-emerald-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Level {selectedScenarioIndex + 1} Architecture Passed!</span>
              </div>
              <p>Your distributed topology sustained the traffic surge within latency, error rate, and budget constraints. +150 XP awarded!</p>
              {selectedScenarioIndex < SCENARIOS.length - 1 && (
                <button
                  onClick={() => handleSelectScenario(selectedScenarioIndex + 1)}
                  className="mt-2 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center space-x-1.5 transition"
                >
                  <span>Advance to Next Level</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}

          {/* Telemetry Dashboard */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Real-Time Performance Telemetry</span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {/* Latency Meter */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400">Response Latency</span>
                <div className={`text-xl font-bold font-mono ${
                  calculatedLatency <= activeScenario.maxLatencyMs ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {calculatedLatency} ms
                </div>
                <span className="text-[10px] text-slate-500">Max SLA: {activeScenario.maxLatencyMs}ms</span>
              </div>

              {/* Error Rate */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400">HTTP 5xx Error Rate</span>
                <div className={`text-xl font-bold font-mono ${
                  calculatedErrorRate <= activeScenario.maxErrorPercent ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {calculatedErrorRate}%
                </div>
                <span className="text-[10px] text-slate-500">Threshold: ≤ {activeScenario.maxErrorPercent}%</span>
              </div>

              {/* Monthly Cost */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400">Estimated Cloud Cost</span>
                <div className={`text-xl font-bold font-mono ${
                  totalMonthlyCost <= activeScenario.maxBudgetDollars ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  ${totalMonthlyCost} <span className="text-xs text-slate-400 font-sans">/mo</span>
                </div>
                <span className="text-[10px] text-slate-500">Budget: ${activeScenario.maxBudgetDollars}/mo</span>
              </div>

              {/* App Utilization */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400">App Cluster CPU</span>
                <div className={`text-xl font-bold font-mono ${
                  appLoadRatio <= 0.85 ? 'text-emerald-400' : appLoadRatio <= 1.0 ? 'text-amber-400' : 'text-rose-400'
                }`}>
                  {Math.min(100, Math.round(appLoadRatio * 100))}%
                </div>
                <span className="text-[10px] text-slate-500">{appInstances} instances</span>
              </div>
            </div>
          </div>

          {/* Diagnostic Bottleneck Alerts */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>Architectural Diagnostics & Bottlenecks</span>
            </h3>

            {alerts.length === 0 ? (
              <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Optimal Architecture: Traffic flows smoothly through CDN, Load Balancer, and Redis Cache. Zero bottlenecks detected!</span>
              </div>
            ) : (
              <div className="space-y-2">
                {alerts.map((al, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/30 text-rose-300 text-xs flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{al}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
