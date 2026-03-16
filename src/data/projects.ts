export type ProjectCategory = 'AI/ML' | 'Trading' | 'Full-Stack';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory[];
  tech: string[];
  metrics: { label: string; value: string }[];
  featured: boolean;
  github?: string;
  live?: string;
  privateOrg?: boolean;
  hackathon?: boolean;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Master AI Trading System',
    description: 'Multi-agent AI system orchestrating 250+ trading strategies with proprietary VIP Score ranking and real-time portfolio management.',
    longDescription: 'End-to-end algorithmic trading platform combining multi-agent AI orchestration, quantitative strategy selection, and real-time execution across multiple asset classes.',
    category: ['AI/ML', 'Trading'],
    tech: ['Python', 'FastAPI', 'LangChain', 'PyTorch', 'Redis', 'PostgreSQL', 'Docker'],
    metrics: [
      { label: 'Strategies', value: '250+' },
      { label: 'VIP Score', value: 'Proprietary' },
      { label: 'Uptime', value: '99.9%' },
    ],
    featured: true,
    privateOrg: true,
    gradient: 'from-indigo-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'QBot Algorithmic Trading',
    description: 'Kelly Criterion + Monte Carlo + Deep Neural Network ensemble for position sizing, risk management, and automated execution via FastAPI.',
    longDescription: 'Sophisticated algorithmic trading bot leveraging Kelly Criterion for optimal position sizing, Monte Carlo simulations for risk assessment, and DNN models for signal generation.',
    category: ['Trading'],
    tech: ['Python', 'FastAPI', 'TensorFlow', 'Docker', 'MT5 API', 'SQLite'],
    metrics: [
      { label: 'Win Rate', value: '68%+' },
      { label: 'Max DD', value: '<5%' },
      { label: 'Sharpe', value: '2.1+' },
    ],
    featured: true,
    privateOrg: true,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: 3,
    title: 'AI News Agent',
    description: 'Autonomous agent using Gemini 2.0 Flash to scrape Bloomberg & Reuters, perform VADER sentiment analysis, and generate trading signals.',
    longDescription: 'Real-time news intelligence system that aggregates financial news, applies NLP sentiment analysis, and generates actionable trading signals automatically.',
    category: ['AI/ML'],
    tech: ['Python', 'Gemini 2.0', 'VADER', 'BeautifulSoup', 'FastAPI', 'Celery'],
    metrics: [
      { label: 'Sources', value: 'Bloomberg + Reuters' },
      { label: 'Accuracy', value: '85%+' },
      { label: 'Latency', value: '<2s' },
    ],
    featured: false,
    privateOrg: true,
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    id: 4,
    title: 'MT5 Trading Dashboard',
    description: 'Full-stack real-time trading dashboard built with TanStack Start + React 19 + SSR, featuring live P&L, position management, and analytics.',
    longDescription: 'Modern trading dashboard with server-side rendering, real-time WebSocket data feeds, and interactive charting for MetaTrader 5 accounts.',
    category: ['Full-Stack'],
    tech: ['TanStack Start', 'React 19', 'TypeScript', 'Tailwind CSS', 'WebSocket', 'MT5 API'],
    metrics: [
      { label: 'Data Refresh', value: '100ms' },
      { label: 'SSR', value: 'Enabled' },
      { label: 'Charts', value: 'Real-time' },
    ],
    featured: false,
    privateOrg: true,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 5,
    title: 'Trading Audit System',
    description: '189-rule compliance engine validating every trade against regulatory and internal risk policies with 99.9% uptime and real-time alerts.',
    longDescription: 'Enterprise-grade audit system that validates trading activity against a comprehensive ruleset, generating compliance reports and real-time violation alerts.',
    category: ['Trading'],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
    metrics: [
      { label: 'Rules', value: '189' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Latency', value: '<50ms' },
    ],
    featured: false,
    privateOrg: true,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 6,
    title: 'Signal Ingestor',
    description: 'TradingView webhook receiver that parses, validates, and stores trading signals into SQLite via FastAPI with instant MT5 execution.',
    longDescription: 'Lightweight signal processing service that bridges TradingView alerts to MetaTrader 5 execution with validation, logging, and duplicate detection.',
    category: ['Full-Stack'],
    tech: ['Python', 'FastAPI', 'SQLite', 'TradingView API', 'MT5 API'],
    metrics: [
      { label: 'Signals/Day', value: '500+' },
      { label: 'Execution', value: '<100ms' },
      { label: 'Accuracy', value: '99%+' },
    ],
    featured: false,
    privateOrg: true,
    gradient: 'from-green-500 to-cyan-500',
  },
  {
    id: 7,
    title: 'MT5 Daily Report Bot',
    description: 'Automated Telegram bot delivering daily P&L summaries, position analytics, and performance metrics from MetaTrader 5 accounts.',
    longDescription: 'Scheduled reporting system that aggregates MT5 trading data and delivers formatted analytics reports directly to Telegram with charts and summaries.',
    category: ['Trading'],
    tech: ['Python', 'Telegram API', 'MT5 API', 'APScheduler', 'Matplotlib'],
    metrics: [
      { label: 'Reports/Day', value: 'Automated' },
      { label: 'Delivery', value: 'Telegram' },
      { label: 'Metrics', value: '20+' },
    ],
    featured: false,
    privateOrg: true,
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    id: 8,
    title: 'HRM Research Model',
    description: '27M parameter Hybrid Reasoning Model trained on ARC-AGI tasks using PyTorch CUDA, exploring compositional generalization and abstract reasoning.',
    longDescription: 'Custom neural architecture research project exploring hybrid reasoning approaches for abstract reasoning tasks, combining symbolic and neural methods.',
    category: ['AI/ML'],
    tech: ['PyTorch', 'CUDA', 'Python', 'ARC-AGI', 'Transformers', 'WandB'],
    metrics: [
      { label: 'Parameters', value: '27M' },
      { label: 'Dataset', value: 'ARC-AGI' },
      { label: 'GPU', value: 'CUDA' },
    ],
    featured: false,
    privateOrg: true,
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    id: 9,
    title: 'Acceler-AI — Startup Ecosystem Platform',
    description: 'Full-stack startup accelerator platform with AI pitch deck analyzer (0–100 scoring across 5 dimensions) and natural language assistant over live DB data.',
    longDescription: 'IFAVHUB — a comprehensive startup ecosystem built at a hackathon. Manages startups, investors, deals, events, and fundraising with two distinct AI workflows: PDF pitch deck analysis via LangChain + ChromaDB + LLM, and a conversational assistant with live DB context injection.',
    category: ['AI/ML', 'Full-Stack'],
    tech: ['FastAPI', 'LangChain', 'ChromaDB', 'OpenRouter', 'React 18', 'TypeScript', 'TanStack Query', 'SQLite', 'shadcn/ui', 'Tailwind v4'],
    metrics: [
      { label: 'Modules', value: '11' },
      { label: 'AI Workflows', value: '2 (Analyzer + Assistant)' },
      { label: 'Pitch Scoring', value: '5 Dimensions' },
    ],
    featured: true,
    hackathon: true,
    github: 'https://github.com/AkshaiyaSakthivel003/Acceler-AI',
    gradient: 'from-amber-500 to-orange-500',
  },
];
