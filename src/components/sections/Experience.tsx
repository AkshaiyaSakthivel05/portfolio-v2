"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-[#080810] overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-indigo-400 font-mono text-sm font-semibold tracking-wider uppercase mb-3 block">
            Journey
          </span>
          <h2 className="section-heading">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line md:left-1/2 md:-translate-x-px" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              const Icon = exp.type === "work" ? Briefcase : GraduationCap;
              const iconColor = exp.type === "work" ? "bg-indigo-600" : "bg-purple-600";

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative flex items-start gap-6 md:gap-0"
                >
                  {/* Icon dot — absolute at true center on desktop */}
                  <div className="z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">
                    <div
                      className={`w-12 h-12 rounded-full ${iconColor} flex items-center justify-center glow-indigo`}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>

                  {/* Card — half width on desktop, left or right of center */}
                  <div
                    className={`flex-1 md:w-1/2 md:flex-none ${isLeft ? "md:pr-10" : "md:pl-10 md:ml-auto"}`}
                  >
                    <div className="glass-card p-6">
                      {/* Role + company */}
                      <div className="mb-3">
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-slate-400">
                          <span className="text-indigo-400 font-semibold">{exp.company}</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2 mb-4">
                        {exp.bullets.map((bullet, bi) => (
                          <li key={bi} className="flex gap-2 text-sm text-slate-400">
                            <span className="text-indigo-500 mt-1 flex-shrink-0">▸</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {/* Tech */}
                      {exp.tech && (
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-xs rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
