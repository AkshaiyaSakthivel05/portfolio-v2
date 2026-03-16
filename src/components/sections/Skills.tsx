'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip,
  BarChart, Bar, XAxis, YAxis, Cell,
} from 'recharts';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { skillCategories, radarData } from '@/data/skills';

const CATEGORY_COLORS: Record<string, string> = {
  'ai-ml': '#6366f1',
  'backend': '#22d3ee',
  'frontend': '#a855f7',
  'trading': '#f59e0b',
  'devops': '#10b981',
  'data': '#ec4899',
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('ai-ml');

  const currentCat = skillCategories.find((c) => c.id === activeCategory)!;
  const barColor = CATEGORY_COLORS[activeCategory];

  const barData = currentCat.skills.map((s) => ({
    name: s.name,
    level: s.level,
  }));

  return (
    <section id="skills" className="relative py-28 bg-[#080810] overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-indigo-400 font-mono text-sm font-semibold tracking-wider uppercase mb-3 block">
            Technical Skills
          </span>
          <h2 className="section-heading mb-4">
            Skills <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            6 technical domains, 36+ skills. Click a category to explore the breakdown.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Radar Chart */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-6 text-center">Skill Profile Overview</h3>
              <ResponsiveContainer width="100%" height={320}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(99,102,241,0.2)" />
                  <PolarAngleAxis
                    dataKey="category"
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                  />
                  <Radar
                    name="Score"
                    dataKey="score"
                    stroke="#6366f1"
                    fill="#6366f1"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                  <Tooltip
                    contentStyle={{
                      background: '#0f0f1a',
                      border: '1px solid rgba(99,102,241,0.3)',
                      borderRadius: 8,
                      color: '#f8fafc',
                    }}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    formatter={(val: any) => [`${val ?? 0}/100`, 'Score']}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </ScrollReveal>

          {/* Category tabs + bar chart */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="glass-card p-6">
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {skillCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      activeCategory === cat.id
                        ? 'text-white shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                    style={activeCategory === cat.id ? {
                      background: CATEGORY_COLORS[cat.id],
                      boxShadow: `0 0 15px ${CATEGORY_COLORS[cat.id]}40`,
                    } : {}}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Bar chart */}
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ResponsiveContainer width="100%" height={260}>
                  <BarChart
                    data={barData}
                    layout="vertical"
                    margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
                  >
                    <XAxis
                      type="number"
                      domain={[0, 100]}
                      tick={{ fill: '#4b5563', fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      dataKey="name"
                      type="category"
                      width={90}
                      tick={{ fill: '#94a3b8', fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        background: '#0f0f1a',
                        border: '1px solid rgba(99,102,241,0.3)',
                        borderRadius: 8,
                        color: '#f8fafc',
                        fontSize: 12,
                      }}
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      formatter={(val: any) => [`${val ?? 0}%`, 'Proficiency']}
                    />
                    <Bar dataKey="level" radius={[0, 4, 4, 0]} maxBarSize={16}>
                      {barData.map((_, idx) => (
                        <Cell
                          key={`cell-${idx}`}
                          fill={barColor}
                          fillOpacity={0.7 + idx * 0.05}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Skill pills grid */}
        <ScrollReveal delay={0.3} className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {skillCategories.map((cat) => (
              <div key={cat.id} className="glass-card p-4 text-center group">
                <div
                  className="w-2 h-2 rounded-full mx-auto mb-2"
                  style={{ background: CATEGORY_COLORS[cat.id], boxShadow: `0 0 8px ${CATEGORY_COLORS[cat.id]}` }}
                />
                <div className="text-white text-xs font-bold mb-1">{cat.label}</div>
                <div className="text-slate-500 text-xs">
                  {Math.round(cat.skills.reduce((sum, s) => sum + s.level, 0) / cat.skills.length)}% avg
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
