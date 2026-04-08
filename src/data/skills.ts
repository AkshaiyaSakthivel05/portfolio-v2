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
    id: "ai-ml",
    label: "AI / ML",
    color: "#6366f1",
    skills: [
      { name: "PyTorch", level: 88 },
      { name: "TensorFlow", level: 78 },
      { name: "LangChain", level: 83 },
      { name: "FinBERT / HuggingFace", level: 72 },
      { name: "Scikit-learn", level: 76 },
      { name: "ChromaDB / RAG", level: 74 },
      { name: "OpenRouter API", level: 70 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#22d3ee",
    skills: [
      { name: "Python", level: 92 },
      { name: "FastAPI", level: 88 },
      { name: "SQLModel / SQLAlchemy", level: 80 },
      { name: "PostgreSQL", level: 76 },
      { name: "SQLite", level: 82 },
      { name: "APScheduler", level: 74 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    color: "#a855f7",
    skills: [
      { name: "Tailwind CSS", level: 85 },
      { name: "React", level: 80 },
      { name: "TypeScript", level: 78 },
      { name: "TanStack Start", level: 74 },
      { name: "TanStack Query", level: 72 },
      { name: "Next.js", level: 70 },
    ],
  },
  {
    id: "trading",
    label: "Trading",
    color: "#f59e0b",
    skills: [
      { name: "MT5 API", level: 90 },
      { name: "Algorithmic Trading", level: 86 },
      { name: "Risk Management", level: 82 },
      { name: "Quantitative Analysis", level: 78 },
      { name: "TradingView", level: 75 },
      { name: "Kelly Criterion", level: 72 },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    color: "#10b981",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Docker", level: 76 },
      { name: "Linux", level: 70 },
      { name: "Celery", level: 64 },
      { name: "CI/CD", level: 60 },
      { name: "Nginx", level: 55 },
    ],
  },
  {
    id: "data",
    label: "Data",
    color: "#ec4899",
    skills: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 86 },
      { name: "Polars", level: 72 },
      { name: "Apache Parquet", level: 74 },
      { name: "Data Pipelines", level: 78 },
      { name: "Statistical Analysis", level: 70 },
    ],
  },
];

export const radarData = skillCategories.map((cat) => ({
  category: cat.label,
  score: Math.round(cat.skills.reduce((sum, s) => sum + s.level, 0) / cat.skills.length),
  fullMark: 100,
}));
