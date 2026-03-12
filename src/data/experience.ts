export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'work' | 'education';
  bullets: string[];
  tech?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'AI Developer',
    company: 'Q Data Tech (IHC - Cyrius Holdings)',
    location: 'Abu Dhabi, UAE',
    period: 'May 2025 – Present',
    type: 'work',
    bullets: [
      'Architected and deployed the Master AI Trading System — a multi-agent platform orchestrating 250+ strategies with a proprietary VIP Score ranking algorithm.',
      'Built QBot, a full-stack algorithmic trading bot using Kelly Criterion, Monte Carlo simulation, and Deep Neural Networks for position sizing and execution.',
      'Developed an AI News Agent leveraging Gemini 2.0 Flash to process Bloomberg & Reuters feeds with VADER sentiment analysis for real-time signal generation.',
      'Created a 189-rule Trading Audit System achieving 99.9% uptime and sub-50ms compliance validation latency.',
      'Engineered the MT5 Trading Dashboard with TanStack Start + React 19, providing SSR-powered real-time analytics.',
    ],
    tech: ['Python', 'FastAPI', 'PyTorch', 'LangChain', 'React 19', 'MT5 API', 'Docker', 'PostgreSQL'],
  },
  {
    id: 2,
    role: 'Data Analyst Intern',
    company: 'Heron Technologies',
    location: 'Chennai, India',
    period: 'May 2024 – Mar 2025',
    type: 'work',
    bullets: [
      'Designed and maintained ETL pipelines processing 1M+ daily records with 99.5% data accuracy SLA.',
      'Built interactive dashboards in Power BI and Matplotlib, reducing executive reporting time by 40%.',
      'Performed statistical analysis and A/B testing to identify revenue optimization opportunities worth $300K+.',
      'Automated data collection workflows, eliminating 15+ hours of manual work weekly.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Power BI', 'SQL', 'Excel', 'Matplotlib'],
  },
  {
    id: 3,
    role: 'B.Tech — Artificial Intelligence & Data Science',
    company: 'Sri Krishna College of Technology',
    location: 'Coimbatore, India',
    period: '2021 – 2025',
    type: 'education',
    bullets: [
      'Graduated with CGPA 8.32 — specialized in machine learning, deep learning, and data science with hands-on projects.',
      'Research on Hybrid Reasoning Models (HRM) — 27M parameter architecture for ARC-AGI abstract reasoning tasks.',
      'Active participant in hackathons, AI competitions, and open-source contributions.',
    ],
    tech: ['Python', 'PyTorch', 'Machine Learning', 'Data Science', 'Research'],
  },
];
