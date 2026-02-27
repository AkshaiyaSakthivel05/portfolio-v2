'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download, ArrowRight } from 'lucide-react';
import ParticleField from '@/components/effects/ParticleField';
import TypingText from '@/components/effects/TypingText';
import AnimatedCounter from '@/components/effects/AnimatedCounter';

const TYPING_WORDS = ['AI Engineer', 'FinTech Developer', 'Full-Stack Builder', 'Quant Researcher'];

const METRICS = [
  { label: 'Projects', value: 8, suffix: '+', prefix: '' },
  { label: 'Uptime', value: 99.5, suffix: '%', prefix: '', decimals: 1 },
  { label: 'ML Accuracy', value: 85, suffix: '%+', prefix: '' },
  { label: 'Portfolio Value', value: 300, suffix: 'K+', prefix: '$' },
];

const ORBS = [
  { color: 'from-indigo-600/40 to-indigo-900/0', size: 600, top: '-10%', left: '-5%', delay: 0 },
  { color: 'from-cyan-500/30 to-cyan-900/0', size: 500, top: '40%', right: '-10%', delay: 2 },
  { color: 'from-purple-600/30 to-purple-900/0', size: 400, bottom: '-5%', left: '30%', delay: 4 },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080810]"
    >
      {/* Grid dot background */}
      <div className="absolute inset-0 grid-dots opacity-40" />

      {/* Particle field */}
      <ParticleField count={50} />

      {/* Animated orb blobs */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className={`blob bg-gradient-radial ${orb.color}`}
          style={{
            width: orb.size,
            height: orb.size,
            top: (orb as { top?: string }).top,
            left: (orb as { left?: string }).left,
            right: (orb as { right?: string }).right,
            bottom: (orb as { bottom?: string }).bottom,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 15, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-cyan-400 font-mono font-semibold mb-4 h-7"
        >
          <TypingText words={TYPING_WORDS} />
        </motion.div>

        {/* Name heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none"
        >
          <span className="gradient-text-purple">Akshaiya</span>
          <br />
          <span className="text-white">Sakthivel</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-12"
        >
          Building next-gen AI trading systems, quantitative models, and full-stack
          platforms that push the boundaries of what&apos;s possible.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={scrollToProjects}
            className="btn-gradient flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-base shadow-lg"
          >
            View Projects
            <ArrowRight size={18} />
          </button>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-slate-200 font-semibold text-base border border-indigo-500/40 hover:border-indigo-500/80 hover:bg-indigo-500/10 transition-all duration-200"
          >
            <Download size={18} />
            Download Resume
          </a>

          {/* Social icons */}
          <a
            href="https://github.com/AKS-ai-sys"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl border border-white/10 hover:border-white/30 text-slate-400 hover:text-white transition-all duration-200 hover:bg-white/5"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/akshaiya-sakthivel"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl border border-indigo-500/20 hover:border-indigo-500/60 text-slate-400 hover:text-indigo-400 transition-all duration-200 hover:bg-indigo-500/10"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {METRICS.map((metric, i) => (
            <div
              key={metric.label}
              className="glass-card p-5 text-center group hover:border-indigo-500/50"
            >
              <div className="text-3xl md:text-4xl font-black gradient-text mb-1">
                <AnimatedCounter
                  target={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                  duration={2000 + i * 200}
                  decimals={(metric as { decimals?: number }).decimals ?? 0}
                />
              </div>
              <div className="text-slate-500 text-sm font-medium">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-slate-500 hover:text-indigo-400 transition-colors cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}
