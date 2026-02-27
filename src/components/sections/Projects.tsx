'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Cpu, TrendingUp, Code2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { projects, type ProjectCategory } from '@/data/projects';

type FilterType = 'All' | ProjectCategory;

const FILTERS: FilterType[] = ['All', 'AI/ML', 'Trading', 'Full-Stack'];

const CATEGORY_ICONS = {
  'AI/ML': Cpu,
  'Trading': TrendingUp,
  'Full-Stack': Code2,
};

const GRADIENT_BORDERS: Record<string, string> = {
  'from-indigo-500 to-cyan-500': 'border-t-indigo-500',
  'from-purple-500 to-indigo-500': 'border-t-purple-500',
  'from-cyan-500 to-teal-500': 'border-t-cyan-500',
  'from-indigo-500 to-purple-500': 'border-t-indigo-500',
  'from-orange-500 to-red-500': 'border-t-orange-500',
  'from-green-500 to-cyan-500': 'border-t-green-500',
  'from-blue-500 to-indigo-500': 'border-t-blue-500',
  'from-pink-500 to-purple-500': 'border-t-pink-500',
};

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(filter as ProjectCategory));

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 bg-[#080810] overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="text-indigo-400 font-mono text-sm font-semibold tracking-wider uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="section-heading mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            8 production-grade systems spanning AI trading, quantitative finance, and full-stack development.
          </p>
        </ScrollReveal>

        {/* Filter bar */}
        <ScrollReveal delay={0.1} className="flex flex-wrap gap-2 justify-center mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                filter === f
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'border border-indigo-500/20 text-slate-400 hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/10'
              }`}
            >
              {f}
            </button>
          ))}
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Featured cards (large) */}
            {featured.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {featured.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-6 group relative overflow-hidden border-t-2 border-t-indigo-500"
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    <div className="relative z-10">
                      {/* Categories */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.category.map((cat) => {
                          const Icon = CATEGORY_ICONS[cat];
                          return (
                            <Badge key={cat} variant="secondary" className="bg-indigo-500/15 text-indigo-300 border border-indigo-500/25 text-xs gap-1">
                              <Icon size={10} />
                              {cat}
                            </Badge>
                          );
                        })}
                        <span className="ml-auto text-xs text-indigo-400 font-semibold px-2 py-0.5 bg-indigo-500/10 rounded-full">
                          Featured
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="text-xs">
                            <span className="text-slate-500">{m.label}: </span>
                            <span className="text-cyan-400 font-semibold">{m.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 text-xs rounded-md bg-slate-800 text-slate-400 border border-slate-700">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors">
                            <Github size={13} /> Code
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                            <ExternalLink size={13} /> Live
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Rest of projects (grid) */}
            {rest.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((project, i) => {
                  const borderColor = GRADIENT_BORDERS[project.gradient] || 'border-t-indigo-500';
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 + 0.2 }}
                      className={`glass-card p-5 group relative overflow-hidden border-t-2 ${borderColor}`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                      <div className="relative z-10">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.category.map((cat) => (
                            <Badge key={cat} variant="secondary" className="bg-slate-800 text-slate-400 border border-slate-700 text-xs">
                              {cat}
                            </Badge>
                          ))}
                        </div>

                        <h3 className="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-400 text-xs leading-relaxed mb-3">
                          {project.description}
                        </p>

                        {/* Metrics */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.metrics.slice(0, 2).map((m) => (
                            <div key={m.label} className="text-xs">
                              <span className="text-slate-500">{m.label}: </span>
                              <span className="text-cyan-400 font-semibold">{m.value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tech.slice(0, 4).map((t) => (
                            <span key={t} className="px-1.5 py-0.5 text-xs rounded bg-slate-800/80 text-slate-500">
                              {t}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="text-xs text-slate-600">+{project.tech.length - 4}</span>
                          )}
                        </div>

                        <div className="flex gap-3">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-slate-500 hover:text-white transition-colors">
                              <Github size={12} /> Code
                            </a>
                          )}
                          {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                              <ExternalLink size={12} /> Live
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {filtered.length === 0 && (
              <div className="text-center py-20 text-slate-500">
                No projects found for this filter.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
