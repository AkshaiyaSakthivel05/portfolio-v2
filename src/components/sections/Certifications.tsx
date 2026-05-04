"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { certifications, CERT_TOTAL } from "@/data/certifications";

const HOLD_MS = 3200;

const ISSUER_DOMAINS: Record<string, string> = {
  IBM: "ibm.com",
  NPTEL: "nptel.ac.in",
  MathWorks: "mathworks.com",
  Cisco: "cisco.com",
  "Automation Anywhere": "automationanywhere.com",
  Celonis: "celonis.com",
  freeCodeCamp: "freecodecamp.org",
  Bentley: "bentley.com",
  HackerRank: "hackerrank.com",
  "Saylor Academy": "saylor.org",
  IAMNeo: "iamneo.ai",
};

const ISSUER_COLORS: Record<string, string> = {
  IBM: "text-blue-400   bg-blue-500/10   border-blue-500/20",
  NPTEL: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  MathWorks: "text-red-400    bg-red-500/10    border-red-500/20",
  Cisco: "text-cyan-400   bg-cyan-500/10   border-cyan-500/20",
  "Automation Anywhere": "text-orange-400 bg-orange-500/10 border-orange-500/20",
  Celonis: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  freeCodeCamp: "text-green-400  bg-green-500/10  border-green-500/20",
  Bentley: "text-blue-400   bg-blue-500/10   border-blue-500/20",
  HackerRank: "text-green-400  bg-green-500/10  border-green-500/20",
  "Saylor Academy": "text-purple-400 bg-purple-500/10 border-purple-500/20",
  IAMNeo: "text-amber-400  bg-amber-500/10  border-amber-500/20",
};

function LogoImage({ issuer, idx }: { issuer: string; idx: number }) {
  const [errored, setErrored] = useState(false);
  const domain = ISSUER_DOMAINS[issuer];
  const isAchievement = issuer === "IAMNeo";

  // reset error state whenever the cert changes
  useEffect(() => {
    setErrored(false);
  }, [idx]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={idx}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full h-full flex items-center justify-center"
      >
        {!errored && domain ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={`https://logo.clearbit.com/${domain}`}
            alt={issuer}
            onError={() => setErrored(true)}
            className="max-h-16 max-w-[160px] object-contain filter brightness-90"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 opacity-40">
            {isAchievement ? (
              <Trophy size={36} className="text-amber-400" />
            ) : (
              <Award size={36} className="text-indigo-400" />
            )}
            <span className="text-xs text-slate-500 font-medium">{issuer}</span>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default function Certifications() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const cert = certifications[index];
  const isAchievement = cert.category === "Achievement";
  const issuerStyle =
    ISSUER_COLORS[cert.issuer] ?? "text-indigo-400 bg-indigo-500/10 border-indigo-500/20";
  const chars = cert.name.split("");

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % certifications.length), HOLD_MS);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section id="certifications" className="relative py-24 bg-[#080810] overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-20" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-10">
          <span className="text-indigo-400 font-mono text-sm font-semibold tracking-wider uppercase mb-3 block">
            Credentials
          </span>
          <h2 className="section-heading mb-3">
            Certifications <span className="gradient-text">&amp; Achievements</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Continuous learning across AI, security, data, and software development.
          </p>
        </ScrollReveal>

        {/* ── Card ── */}
        <ScrollReveal delay={0.1}>
          <div
            className="relative rounded-2xl border border-indigo-500/20 bg-[#07070f] overflow-hidden group"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* ── Top 60%: logo area ── */}
            <div className="relative h-44 flex items-center justify-center border-b border-indigo-500/10 bg-[#09090f]">
              {/* subtle radial glow behind logo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className={`w-32 h-32 rounded-full blur-2xl opacity-20 ${isAchievement ? "bg-amber-500" : "bg-indigo-500"}`}
                />
              </div>
              <div className="relative z-10 w-full h-full">
                <LogoImage issuer={cert.issuer} idx={index} />
              </div>
            </div>

            {/* ── Bottom 40%: departure board text ── */}
            <div className="px-7 pt-5 pb-4" style={{ perspective: "800px" }}>
              {/* Issuer badge + category */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`meta-${index}`}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 mb-3"
                >
                  {isAchievement ? (
                    <Trophy size={12} className="text-amber-400" />
                  ) : (
                    <Award size={12} className="text-indigo-400" />
                  )}
                  <span
                    className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${issuerStyle}`}
                  >
                    {cert.issuer}
                  </span>
                  <span className="text-[9px] text-slate-600 font-medium uppercase tracking-wider">
                    {cert.category}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Cert name — character flip */}
              <div
                className="font-semibold text-white leading-snug mb-4 min-h-[2.5rem]"
                style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.2rem)", perspective: "600px" }}
              >
                <AnimatePresence mode="wait">
                  <motion.span key={`name-${index}`} className="inline">
                    {chars.map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ rotateX: -90, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        transition={{ delay: i * 0.02, duration: 0.25, ease: "easeOut" }}
                        style={{
                          display: "inline-block",
                          transformOrigin: "top center",
                          whiteSpace: "pre",
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Hidden credential link — reveals on hover */}
              <div className="overflow-hidden h-5">
                <motion.div
                  initial={false}
                  animate={{ y: paused ? 0 : 20, opacity: paused ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] text-indigo-400 hover:text-indigo-300"
                    >
                      <ExternalLink size={10} />
                      <span>View credential</span>
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] text-slate-600 cursor-default">
                      <ExternalLink size={10} />
                      <span>No public link</span>
                    </span>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-px bg-indigo-500/10 mx-7 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-indigo-500/50"
                animate={{ width: `${((index + 1) / certifications.length) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-1.5 py-3">
              {certifications.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-5 h-1.5 bg-indigo-400"
                      : "w-1.5 h-1.5 bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to cert ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Count banner */}
        <ScrollReveal delay={0.15} className="flex justify-center mt-8">
          <div className="flex items-center gap-3 py-3.5 px-7 rounded-2xl border border-indigo-500/20 bg-indigo-500/5">
            <Award size={16} className="text-indigo-400" />
            <span className="text-white font-semibold text-sm">
              <span className="gradient-text text-lg font-black">{CERT_TOTAL}</span> Professional
              Certifications &amp; Awards
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
