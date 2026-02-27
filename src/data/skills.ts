export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-ml',
    label: 'AI / ML',
    color: '#6366f1',
    skills: [
      { name: 'PyTorch', level: 90 },
      { name: 'TensorFlow', level: 82 },
      { name: 'LangChain', level: 88 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'Gemini API', level: 87 },
      { name: 'NLP / VADER', level: 80 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#22d3ee',
    skills: [
      { name: 'FastAPI', level: 92 },
      { name: 'Python', level: 95 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Redis', level: 80 },
      { name: 'SQLite', level: 88 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#a855f7',
    skills: [
      { name: 'React', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 83 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'TanStack', level: 80 },
      { name: 'Framer Motion', level: 78 },
    ],
  },
  {
    id: 'trading',
    label: 'Trading',
    color: '#f59e0b',
    skills: [
      { name: 'MT5 API', level: 93 },
      { name: 'Algorithmic Trading', level: 90 },
      { name: 'Risk Management', level: 88 },
      { name: 'TradingView', level: 85 },
      { name: 'Quantitative Analysis', level: 82 },
      { name: 'Kelly Criterion', level: 80 },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps',
    color: '#10b981',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'Linux', level: 83 },
      { name: 'Celery', level: 78 },
      { name: 'CI/CD', level: 75 },
      { name: 'Nginx', level: 72 },
    ],
  },
  {
    id: 'data',
    label: 'Data',
    color: '#ec4899',
    skills: [
      { name: 'Pandas', level: 92 },
      { name: 'NumPy', level: 90 },
      { name: 'Matplotlib', level: 85 },
      { name: 'Data Pipelines', level: 83 },
      { name: 'Statistical Analysis', level: 80 },
      { name: 'Recharts', level: 78 },
    ],
  },
];

export const radarData = skillCategories.map((cat) => ({
  category: cat.label,
  score: Math.round(cat.skills.reduce((sum, s) => sum + s.level, 0) / cat.skills.length),
  fullMark: 100,
}));
