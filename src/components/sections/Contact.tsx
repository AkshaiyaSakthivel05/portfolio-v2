"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "@/components/effects/ScrollReveal";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "aks05.sk.ai@gmail.com",
    href: "mailto:aks05.sk.ai@gmail.com",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Phone,
    label: "UAE",
    value: "+971 50 359 2275",
    href: "tel:+971503592275",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Phone,
    label: "India",
    value: "+91 90428 48703",
    href: "tel:+919042848703",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Abu Dhabi, UAE",
    href: "#",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "akshaiyasakthivel-aa1053240",
    href: "https://www.linkedin.com/in/akshaiya-sakthivel-aa1053240/",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: GithubIcon,
    label: "GitHub (Main)",
    value: "AkshaiyaSakthivel05",
    href: "https://github.com/AkshaiyaSakthivel05",
    color: "text-slate-300",
    bg: "bg-slate-500/10",
  },
  {
    icon: GithubIcon,
    label: "GitHub (Research)",
    value: "AkshaiyaSakthivel003",
    href: "https://github.com/AkshaiyaSakthivel003",
    color: "text-slate-400",
    bg: "bg-slate-500/10",
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#080810] overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-20" />

      {/* Glow blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-indigo-400 font-mono text-sm font-semibold tracking-wider uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="section-heading mb-4">
            Let&apos;s <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Whether it&apos;s a trading system, AI project, or just a conversation — I&apos;d love
            to hear from you.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg mb-6">Contact Information</h3>
              {CONTACT_INFO.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card p-4 group"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${info.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <info.icon size={18} className={info.color} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">{info.label}</div>
                    <div className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="glass-card p-7">
              <h3 className="text-white font-semibold text-lg mb-6">Send a Message</h3>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-5 flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/25 text-green-400 text-sm"
                  >
                    <CheckCircle size={18} className="flex-shrink-0" />
                    Message sent! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-5 flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/25 text-red-400 text-sm"
                  >
                    <AlertCircle size={18} className="flex-shrink-0" />
                    {errorMsg}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-xs font-medium mb-1.5 block">
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-white/5 border-indigo-500/20 text-white placeholder:text-slate-600 focus:border-indigo-500/60 focus:ring-indigo-500/20"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs font-medium mb-1.5 block">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="bg-white/5 border-indigo-500/20 text-white placeholder:text-slate-600 focus:border-indigo-500/60 focus:ring-indigo-500/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium mb-1.5 block">
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="bg-white/5 border-indigo-500/20 text-white placeholder:text-slate-600 focus:border-indigo-500/60 focus:ring-indigo-500/20"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium mb-1.5 block">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className="bg-white/5 border-indigo-500/20 text-white placeholder:text-slate-600 focus:border-indigo-500/60 focus:ring-indigo-500/20 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full btn-gradient flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
