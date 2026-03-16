'use client';

import ScrollReveal from '@/components/effects/ScrollReveal';
import {
  SiPython, SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiFastapi, SiNodedotjs, SiDocker, SiMongodb, SiPostgresql,
  SiPytorch, SiTensorflow, SiTailwindcss, SiSqlite, SiRedis,
  SiGit, SiGithub, SiLinux, SiPandas, SiNumpy,
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface Tech {
  name: string;
  Icon: IconType;
  color: string;
}

const ROW_1: Tech[] = [
  { name: 'Python',       Icon: SiPython,      color: '#3776AB' },
  { name: 'React',        Icon: SiReact,       color: '#61DAFB' },
  { name: 'Next.js',      Icon: SiNextdotjs,   color: '#ffffff' },
  { name: 'TypeScript',   Icon: SiTypescript,  color: '#3178C6' },
  { name: 'FastAPI',      Icon: SiFastapi,     color: '#009688' },
  { name: 'Node.js',      Icon: SiNodedotjs,   color: '#339933' },
  { name: 'Docker',       Icon: SiDocker,      color: '#2496ED' },
  { name: 'MongoDB',      Icon: SiMongodb,     color: '#47A248' },
  { name: 'PostgreSQL',   Icon: SiPostgresql,  color: '#4169E1' },
  { name: 'Git',          Icon: SiGit,         color: '#F05032' },
];

const ROW_2: Tech[] = [
  { name: 'PyTorch',      Icon: SiPytorch,     color: '#EE4C2C' },
  { name: 'TensorFlow',   Icon: SiTensorflow,  color: '#FF6F00' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'SQLite',       Icon: SiSqlite,      color: '#4479A1' },
  { name: 'Redis',        Icon: SiRedis,       color: '#DC382D' },
  { name: 'Linux',        Icon: SiLinux,       color: '#FCC624' },
  { name: 'JavaScript',   Icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'GitHub',       Icon: SiGithub,      color: '#ffffff' },
  { name: 'Pandas',       Icon: SiPandas,      color: '#150458' },
  { name: 'NumPy',        Icon: SiNumpy,       color: '#013243' },
];

function TechCard({ name, Icon, color }: Tech) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 mx-2 rounded-xl bg-[#0f0f1a] border border-indigo-500/15 hover:border-indigo-500/40 transition-colors duration-200 group">
      <Icon size={22} style={{ color }} className="flex-shrink-0" />
      <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: Tech[]; reverse?: boolean }) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full py-2">
      <div className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {doubled.map((tech, i) => (
          <TechCard key={`${tech.name}-${i}`} {...tech} />
        ))}
      </div>
    </div>
  );
}

export default function Technologies() {
  return (
    <section id="technologies" className="relative py-24 bg-[#080810] overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-20" />

      {/* Fade masks on left/right */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#080810] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#080810] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <span className="text-indigo-400 font-mono text-sm font-semibold tracking-wider uppercase mb-3 block">
            Tech Stack
          </span>
          <h2 className="section-heading mb-4">
            Technologies <span className="gradient-text">&amp; Tools</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Building with modern, production-ready technologies across the full stack.
          </p>
        </ScrollReveal>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow items={ROW_1} reverse={false} />
        <MarqueeRow items={ROW_2} reverse={true} />
      </div>
    </section>
  );
}
