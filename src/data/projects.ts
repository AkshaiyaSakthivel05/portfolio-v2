export type ProjectCategory = "AI/ML" | "Trading" | "Full-Stack";

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
    title: "Master AI Trading System",
    description:
      "Multi-agent AI system orchestrating 250+ trading strategies with proprietary VIP Score ranking and real-time portfolio management.",
    longDescription:
      "End-to-end algorithmic trading platform combining multi-agent AI orchestration, quantitative strategy selection, and real-time execution across multiple asset classes.",
    category: ["AI/ML", "Trading"],
    tech: ["Python", "FastAPI", "LangChain", "PyTorch", "Redis", "PostgreSQL", "Docker"],
    metrics: [
      { label: "Strategies", value: "250+" },
      { label: "VIP Score", value: "Proprietary" },
      { label: "Uptime", value: "99.9%" },
    ],
    featured: true,
    privateOrg: true,
    gradient: "from-indigo-500 to-cyan-500",
  },
  {
    id: 2,
    title: "QBot Algorithmic Trading",
    description:
      "Kelly Criterion + Monte Carlo + Deep Neural Network ensemble for position sizing, risk management, and automated execution via FastAPI.",
    longDescription:
      "Algorithmic trading system leveraging Kelly Criterion for position sizing, Monte Carlo simulations for risk assessment, and DNN models for signal generation.",
    category: ["Trading"],
    tech: ["Python", "FastAPI", "TensorFlow", "Docker", "MT5 API", "SQLite"],
    metrics: [
      { label: "Win Rate", value: "68%+" },
      { label: "Max DD", value: "<5%" },
      { label: "Sharpe", value: "2.1+" },
    ],
    featured: true,
    privateOrg: true,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 3,
    title: "AI News Agent",
    description:
      "3-pipeline financial news system with FinBERT sentiment, 11-category risk classification, chaos mode detection, and LLM-generated daily trading briefings.",
    longDescription:
      "Three independent async pipelines: Macro news (13 RSS feeds + 180 Google queries + NewsAPI every 15 min), MMFN (AlphaVantage, EODHD, Alpaca WebSocket), and Historical (ForexFactory economic calendar daily). FinBERT handles Tier-1 financial sentiment; OpenRouter LLM runs deep narrative analysis on HIGH/CRITICAL events. A keyword risk engine across 11 categories triggers Chaos Mode when 5+ critical events occur within 60 minutes.",
    category: ["AI/ML"],
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "FinBERT",
      "OpenRouter",
      "Playwright",
      "APScheduler",
      "Telegram API",
    ],
    metrics: [
      { label: "Articles Tracked", value: "7,175+" },
      { label: "Risk Categories", value: "11" },
      { label: "Pipelines", value: "3 async" },
    ],
    featured: false,
    privateOrg: true,
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: 4,
    title: "MT5 Trading Dashboard",
    description:
      "Full-stack real-time trading dashboard built with TanStack Start + React 19 + SSR, featuring live P&L, position management, and analytics.",
    longDescription:
      "Trading dashboard with server-side rendering, real-time WebSocket data feeds, and interactive charting for MetaTrader 5 accounts.",
    category: ["Full-Stack"],
    tech: ["TanStack Start", "React 19", "TypeScript", "Tailwind CSS", "WebSocket", "MT5 API"],
    metrics: [
      { label: "Data Refresh", value: "100ms" },
      { label: "SSR", value: "Enabled" },
      { label: "Charts", value: "Real-time" },
    ],
    featured: false,
    privateOrg: true,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 5,
    title: "Trading Audit System",
    description:
      "189-rule compliance engine validating every trade against regulatory and internal risk policies with 99.9% uptime and real-time alerts.",
    longDescription:
      "Enterprise-grade audit system that validates trading activity against a comprehensive ruleset, generating compliance reports and real-time violation alerts.",
    category: ["Trading"],
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "Docker"],
    metrics: [
      { label: "Rules", value: "189" },
      { label: "Uptime", value: "99.9%" },
      { label: "Latency", value: "<50ms" },
    ],
    featured: false,
    privateOrg: true,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    title: "Signal Ingestor",
    description:
      "TradingView webhook receiver that parses, validates, and stores trading signals into SQLite via FastAPI with instant MT5 execution.",
    longDescription:
      "Lightweight signal processing service that bridges TradingView alerts to MetaTrader 5 execution with validation, logging, and duplicate detection.",
    category: ["Full-Stack"],
    tech: ["Python", "FastAPI", "SQLite", "TradingView API", "MT5 API"],
    metrics: [
      { label: "Signals/Day", value: "500+" },
      { label: "Execution", value: "<100ms" },
      { label: "Accuracy", value: "99%+" },
    ],
    featured: false,
    privateOrg: true,
    gradient: "from-green-500 to-cyan-500",
  },
  {
    id: 7,
    title: "MT5 Daily Report Bot",
    description:
      "Automated Telegram bot delivering daily P&L summaries, position analytics, and performance metrics from MetaTrader 5 accounts.",
    longDescription:
      "Scheduled reporting system that aggregates MT5 trading data and delivers formatted analytics reports directly to Telegram with charts and summaries.",
    category: ["Trading"],
    tech: ["Python", "Telegram API", "MT5 API", "APScheduler", "Matplotlib"],
    metrics: [
      { label: "Reports/Day", value: "Automated" },
      { label: "Delivery", value: "Telegram" },
      { label: "Metrics", value: "20+" },
    ],
    featured: false,
    privateOrg: true,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 8,
    title: "HRM Research Model",
    description:
      "27M parameter Hybrid Reasoning Model trained on ARC-AGI tasks using PyTorch CUDA, exploring compositional generalization and abstract reasoning.",
    longDescription:
      "Custom neural architecture research project exploring hybrid reasoning approaches for abstract reasoning tasks, combining symbolic and neural methods.",
    category: ["AI/ML"],
    tech: ["PyTorch", "CUDA", "Python", "ARC-AGI", "Transformers", "WandB"],
    metrics: [
      { label: "Parameters", value: "27M" },
      { label: "Dataset", value: "ARC-AGI" },
      { label: "GPU", value: "CUDA" },
    ],
    featured: false,
    privateOrg: true,
    gradient: "from-pink-500 to-purple-500",
  },
  {
    id: 10,
    title: "Technical Analysis Engine",
    description:
      "26 TradingView-compatible indicators rebuilt in Python, with Parquet caching, multi-timeframe signal pipeline, and a pluggable multi-LLM trading advisor.",
    longDescription:
      "Replicates TradingView's exact indicator calculations (RSI, MACD, ADX, Stochastic, and 22 others) using TA-Lib + Pandas. Runs across 30 symbols and 7 timeframes with APScheduler. Hybrid Parquet caching reduced data fetch time from 17s to 2–3s. A configurable LLM advisor layer (DeepSeek, Grok, Qwen, Claude) reads indicator output and generates trade reasoning on demand.",
    category: ["AI/ML", "Trading"],
    tech: [
      "Python",
      "FastAPI",
      "TA-Lib",
      "Pandas",
      "NumPy",
      "Apache Parquet",
      "APScheduler",
      "Streamlit",
    ],
    metrics: [
      { label: "Indicators", value: "26" },
      { label: "Symbols", value: "30" },
      { label: "Cache Speedup", value: "~7x" },
    ],
    featured: false,
    privateOrg: true,
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    id: 11,
    title: "Polymarket Intelligence Platform",
    description:
      "Tracks hundreds of live Polymarket prediction markets — collecting order book depth, bid/ask spreads, price history, and liquidity every 5 minutes.",
    longDescription:
      "Connects to Polymarket's REST API (via Cloudflare WARP SOCKS5 proxy for geo-restricted access) and runs a 5-minute collection cycle across all active markets. Stores order book snapshots, price history, and spread data in SQLite (dev) or PostgreSQL (prod) via Alembic migrations. A Streamlit dashboard surfaces best opportunities by spread tightness and liquidity depth.",
    category: ["AI/ML", "Full-Stack"],
    tech: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL", "SQLite", "Streamlit"],
    metrics: [
      { label: "Markets", value: "100+ live" },
      { label: "Cycle", value: "5 min" },
      { label: "Data Points", value: "Order book + spreads" },
    ],
    featured: false,
    privateOrg: true,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 12,
    title: "Context Agent — MCP Dev Assistant",
    description:
      "MCP-based multi-agent development assistant for Cursor/IDEs with BM25 semantic memory, drift detection, and automatic skill synthesis across sessions.",
    longDescription:
      "Built on the Model Context Protocol (MCP) with Anthropic and OpenAI SDKs. Three specialist agents — Architecture, Security, Performance — audit code against project guidelines. A global SQLite store with BM25 semantic search persists context across sessions. Drift detection compares live code against guidelines; Skill Synthesis auto-generates reusable tool commands. Context Pruning produces high-density snapshots to keep sessions focused.",
    category: ["AI/ML", "Full-Stack"],
    tech: ["TypeScript", "Node.js", "MCP", "Anthropic SDK", "OpenAI SDK", "SQLite", "BM25"],
    metrics: [
      { label: "Agents", value: "3 specialist" },
      { label: "Memory", value: "BM25 semantic" },
      { label: "Protocol", value: "MCP" },
    ],
    featured: false,
    privateOrg: true,
    gradient: "from-rose-500 to-pink-500",
  },
  {
    id: 13,
    title: "Federated Deep Learning IDS",
    description:
      "Final-year research project — intrusion detection system using federated learning so each node trains locally without sharing raw network traffic.",
    longDescription:
      "Designed and evaluated a federated learning architecture for network intrusion detection, where multiple edge nodes (simulated) train CNN and RNN models on local traffic data and share only model weights. Preserves data privacy while achieving comparable detection accuracy to centralised training. Built with TensorFlow and PyTorch across an 8-month research period.",
    category: ["AI/ML"],
    tech: ["Python", "TensorFlow", "PyTorch", "Federated Learning", "CNNs", "RNNs", "Scikit-learn"],
    metrics: [
      { label: "Architecture", value: "Federated" },
      { label: "Models", value: "CNN + RNN" },
      { label: "Duration", value: "8 months" },
    ],
    featured: false,
    gradient: "from-red-500 to-orange-500",
  },
  {
    id: 14,
    title: "FLICKS&PICKS",
    description:
      "Full-stack movie recommendation platform — React JS frontend, Spring Boot REST API backend, MySQL database, and JWT-based authentication.",
    longDescription:
      "Academic full-stack project covering the complete web application lifecycle. Users register, log in via JWT tokens, and receive personalised movie recommendations through a content-based filtering engine. Spring Boot handles business logic and data access; React JS renders the UI; MySQL stores user profiles, ratings, and movie metadata.",
    category: ["Full-Stack"],
    tech: ["React JS", "Spring Boot", "MySQL", "JWT", "REST API", "JavaScript"],
    metrics: [
      { label: "Stack", value: "Full-Stack" },
      { label: "Auth", value: "JWT" },
      { label: "Backend", value: "Spring Boot" },
    ],
    featured: false,
    gradient: "from-sky-500 to-blue-500",
  },
  {
    id: 9,
    title: "Acceler-AI — Startup Ecosystem Platform",
    description:
      "Full-stack startup accelerator platform with AI pitch deck analyzer (0–100 scoring across 5 dimensions) and natural language assistant over live DB data.",
    longDescription:
      "IFAVHUB — a startup ecosystem built at a hackathon. Manages startups, investors, deals, events, and fundraising with two distinct AI workflows: PDF pitch deck analysis via LangChain + ChromaDB + LLM, and a conversational assistant with live DB context injection.",
    category: ["AI/ML", "Full-Stack"],
    tech: [
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "OpenRouter",
      "React 18",
      "TypeScript",
      "TanStack Query",
      "SQLite",
      "shadcn/ui",
      "Tailwind v4",
    ],
    metrics: [
      { label: "Modules", value: "11" },
      { label: "AI Workflows", value: "2 (Analyzer + Assistant)" },
      { label: "Pitch Scoring", value: "5 Dimensions" },
    ],
    featured: true,
    hackathon: true,
    github: "https://github.com/AkshaiyaSakthivel05/Acceler-AI",
    gradient: "from-amber-500 to-orange-500",
  },
];
