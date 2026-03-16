'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { certifications, CERT_TOTAL, type CertCategory } from '@/data/certifications';

type FilterType = 'All' | CertCategory;
const FILTERS: FilterType[] = ['All', 'Certification', 'Achievement'];

export default function Certifications() {
  const [filter, setFilter] = useState<FilterType>('All');

  const filtered = filter === 'All'
    ? certifications
    : certifications.filter((c) => c.category === filter);

  return (
    <section id="certifications" className="relative py-28 bg-[#080810] overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-20" />

      {/* Background orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="text-indigo-400 font-mono text-sm font-semibold tracking-wider uppercase mb-3 block">
            Credentials
          </span>
          <h2 className="section-heading mb-4">
            Certifications <span className="gradient-text">&amp; Achievements</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Continuous learning and professional development across multiple domains.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1} className="flex flex-wrap gap-2 justify-center mb-10">
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

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
          >
            {filtered.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="glass-card p-5 group relative overflow-hidden"
                style={{ borderTop: `2px solid ${cert.color}` }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${cert.color}15 0%, transparent 70%)` }}
                />

                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}40` }}
                  >
                    {cert.category === 'Achievement' ? (
                      <Trophy size={18} style={{ color: cert.color }} />
                    ) : (
                      <Award size={18} style={{ color: cert.color }} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: `${cert.color}20`, color: cert.color }}
                      >
                        {cert.category}
                      </span>
                      <span className="text-xs text-slate-600">{cert.year}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1 leading-snug group-hover:text-indigo-300 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Total count banner */}
        <ScrollReveal delay={0.2}>
          <div className="glass-card px-8 py-5 flex items-center justify-center gap-3 max-w-sm mx-auto">
            <Star size={18} className="text-indigo-400" />
            <span className="text-white font-semibold">
              <span className="gradient-text text-xl font-black">{CERT_TOTAL}</span>
              {' '}Professional Certifications Earned
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
