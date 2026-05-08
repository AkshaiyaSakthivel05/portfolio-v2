import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export default function Footer() {
  return (
    <footer className="border-t border-indigo-500/20 bg-[#080810] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <span className="gradient-text font-black text-xl">AKS</span>
          <p className="text-slate-500 text-sm mt-1">
            AI Developer · FinTech Builder · Full-Stack Engineer
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/AkshaiyaSakthivel05"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/akshaiya-sakthivel-aa1053240/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:aks05.sk.ai@gmail.com"
            className="p-2 rounded-lg text-slate-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-slate-600 text-xs text-center">
          © {new Date().getFullYear()} Akshaiya Sakthivel. Built with Next.js + Framer Motion.
        </p>
      </div>
    </footer>
  );
}
