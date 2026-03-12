'use client';

import { motion } from 'framer-motion';
import { Brain, TrendingUp, Cpu, Zap } from 'lucide-react';
import ScrollReveal from '@/components/effects/ScrollReveal';
import AnimatedCounter from '@/components/effects/AnimatedCounter';

const STATS = [
  { icon: TrendingUp, label: 'Years Experience', value: 2, suffix: '+', color: 'text-indigo-400' },
  { icon: Cpu, label: 'Systems Built', value: 8, suffix: '+', color: 'text-cyan-400' },
  { icon: Brain, label: 'ML Accuracy', value: 85, suffix: '%+', color: 'text-purple-400' },
  { icon: Zap, label: 'Uptime SLA', value: 99.9, suffix: '%', decimals: 1, color: 'text-green-400' },
];

const TECH_BADGES = [
  'Python', 'PyTorch', 'FastAPI', 'LangChain', 'React 19', 'Next.js',
  'TypeScript', 'Docker', 'MT5 API', 'PostgreSQL', 'Redis', 'Celery',
  'TradingView', 'Gemini API', 'TanStack', 'Pandas', 'NumPy', 'CUDA',
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#080810] overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-dots opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-indigo-400 font-mono text-sm font-semibold tracking-wider uppercase mb-3 block">
            About Me
          </span>
          <h2 className="section-heading">
            Building the <span className="gradient-text">Future of Finance</span>
            <br />with Artificial Intelligence
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Story */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-5 text-slate-400 leading-relaxed text-base">
              <p>
                I&apos;m <span className="text-white font-semibold">Akshaiya Sakthivel</span>, an AI Developer
                and FinTech engineer with a passion for building systems at the intersection of
                artificial intelligence and financial markets.
              </p>
              <p>
                Currently at{' '}
                <span className="text-indigo-400 font-semibold">Q Data (IHC - Cyrius Holdings)</span>, I architect
                multi-agent AI trading systems, algorithmic execution engines, and real-time
                analytics platforms that handle millions in portfolio value.
              </p>
              <p>
                My approach combines{' '}
                <span className="text-cyan-400 font-medium">quantitative rigor</span> with{' '}
                <span className="text-purple-400 font-medium">deep learning</span> — from Kelly Criterion
                position sizing to 27M-parameter reasoning models. I thrive at the edges of what&apos;s
                technically possible.
              </p>
              <p>
                When I&apos;m not building trading systems, I&apos;m researching hybrid AI architectures
                for abstract reasoning (ARC-AGI), contributing to open-source projects, and
                mentoring aspiring AI engineers.
              </p>

              {/* Highlight callout */}
              <div className="glass p-4 rounded-xl border-l-4 border-indigo-500 mt-6">
                <p className="text-white font-medium text-sm">
                  &quot;I believe the best financial technology is invisible — it just works,
                  reliably, at scale, with machine-level precision.&quot;
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats + badges */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-8">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="glass-card p-5 group"
                  >
                    <stat.icon size={20} className={`${stat.color} mb-3`} />
                    <div className={`text-3xl font-black ${stat.color} mb-1`}>
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                        decimals={(stat as { decimals?: number }).decimals ?? 0}
                      />
                    </div>
                    <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Tech marquee */}
              <div className="overflow-hidden">
                <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-3">
                  Technologies I work with
                </p>
                <div className="flex gap-2 animate-marquee" style={{ width: 'max-content' }}>
                  {[...TECH_BADGES, ...TECH_BADGES].map((tech, i) => (
                    <span
                      key={`${tech}-${i}`}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
