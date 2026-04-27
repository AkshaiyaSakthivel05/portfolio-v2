---
name: Portfolio v2 — Full Handover Document
description: Complete state of the portfolio project — what was built, what's done, what's pending, open decisions, full file map
type: project
originSessionId: 51f13df2-61d3-4112-b94c-045b7cb48ce1
---
# Portfolio v2 — Full Handover Document

**Last updated:** 2026-04-27  
**Portfolio owner:** Akshaiya Sakthivel  
**Portfolio location:** `C:\Akshaiya_Sakthivel\OTHER\DOCS\portfolio`  
**Live URL:** To be confirmed (was deployed to Vercel — exact domain unknown, verify with user)

---

## What This Is

A personal developer portfolio site for Akshaiya Sakthivel — AI Developer and FinTech Engineer at Q Data Tech (IHC - Cyrius Holdings), Abu Dhabi, UAE. Single-page Next.js app, dark theme, deployed on Vercel.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, static-friendly) |
| UI Library | React 19 |
| Language | TypeScript — strict mode, `"moduleResolution": "bundler"` |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite` via Turbopack) |
| UI Primitives | shadcn/ui (badge, button, card, input, sheet, textarea) |
| Animations | Framer Motion v12 (motion, AnimatePresence, whileInView) |
| Charts | Recharts (RadarChart, BarChart for Skills section) |
| Icons | Lucide React + react-icons/si (Simple Icons for brand logos) |
| Email | Resend SDK (`/api/contact/route.ts`) |
| Package manager | **BUN only** — `bun install`, `bun run dev`, `bun run build` |
| Deploy | Vercel |

**CRITICAL:** npm/npx builds fail on this project. Only bun works. This is due to Tailwind CSS v4 + shadcn/ui resolver compatibility. Never use npm here.

---

## How to Run

```bash
# New environment setup
curl -fsSL https://bun.sh/install | bash   # install bun if needed
git clone <repo-url>
cd portfolio
bun install
cp .env.local.example .env.local           # or create manually with RESEND_API_KEY
bun run dev
```

```bash
# Build and deploy
bun run build          # must pass with 0 errors first
git add -A
git commit -m "..."
git push
vercel --prod --yes
```

**VS Code TypeScript errors:** `.vscode/settings.json` is committed and sets `"typescript.tsdk": "node_modules/typescript/lib"`. This forces VS Code to use workspace TypeScript (v5.9.x) which supports `moduleResolution: bundler`, fixing 29 false-positive import errors on framer-motion and lucide-react.

---

## Design System

| Token | Value |
|---|---|
| Background | `#080810` (near-black with blue tint) |
| Surface / glass | `#0f0f1a` / `rgba(15,15,26,0.8)` backdrop-blur |
| Primary accent | Indigo `#6366f1` |
| Secondary accent | Cyan `#22d3ee` |
| Gradient | indigo → cyan |
| Muted text | `#94a3b8` |
| Subtle border | `rgba(99,102,241,0.2)` |
| Font | Inter (weights 400–900, variable `--font-inter`) |

CSS custom classes in `globals.css`: `glass-card`, `glass`, `btn-gradient`, `gradient-text`, `section-heading`, `grid-dots`, `animate-marquee`, `animate-marquee-reverse`

---

## Page Structure (section order in `page.tsx`)

1. Navbar (sticky, frosted-glass, 8 links)
2. Hero
3. About
4. Projects
5. Skills
6. Technologies
7. Experience
8. Certifications
9. Contact
10. Footer

---

## Full File Map

```
src/
├── app/
│   ├── layout.tsx              # Inter font, metadata, dark html
│   ├── page.tsx                # Section assembly
│   ├── globals.css             # Design system, animations, custom classes
│   └── api/contact/route.ts   # POST /api/contact → Resend email
├── components/
│   ├── effects/
│   │   ├── AnimatedCounter.tsx  # Counts up to target value on scroll-into-view
│   │   ├── GlowCard.tsx         # Card with indigo glow on hover
│   │   ├── ParticleField.tsx    # Animated floating particles (Hero bg)
│   │   ├── ScrollReveal.tsx     # Fade+slide in on scroll (wraps children)
│   │   └── TypingText.tsx       # Typewriter cycling through string array
│   ├── layout/
│   │   ├── Navbar.tsx           # Sticky nav, 8 links, mobile Sheet drawer
│   │   └── Footer.tsx           # "FinTech Developer" tagline, social links
│   ├── sections/
│   │   ├── Hero.tsx             # Full-viewport, particles, TypingText, metrics, CTAs
│   │   ├── About.tsx            # Story text, stats grid, tech marquee
│   │   ├── Projects.tsx         # Filter bar, bento grid, 14 project cards
│   │   ├── Skills.tsx           # Recharts radar + bar, category tabs
│   │   ├── Technologies.tsx     # 2-row infinite marquee with brand icons
│   │   ├── Experience.tsx       # Vertical timeline, work + education
│   │   ├── Certifications.tsx   # Auto-cycling spotlight card, Clearbit logos
│   │   └── Contact.tsx          # Contact info cards + form (Resend API)
│   └── ui/                      # shadcn primitives (badge, button, card, input, sheet, textarea)
├── data/
│   ├── projects.ts              # 14 projects — see Projects section below
│   ├── skills.ts                # 6 categories × 6 skills, realistic spread 55–92
│   ├── experience.ts            # 2 work entries + 1 education
│   └── certifications.ts        # 12 certs + 1 achievement (CERT_TOTAL = 13)
└── lib/
    └── utils.ts                 # cn() helper (clsx + tailwind-merge)
```

---

## Data: Projects (`src/data/projects.ts`)

14 projects total. IDs are not sequential (ids 1–8, 9–14, no id gap for 9 — Acceler-AI uses id 9 and is placed last in the array).

| # | ID | Title | Category | Folder | Notes |
|---|---|---|---|---|---|
| 1 | 1 | Master AI Trading System | AI/ML, Trading | `Developer/master-ai` | featured, privateOrg |
| 2 | 2 | QBot Algorithmic Trading | Trading | `Developer/mt5-python` | featured, privateOrg |
| 3 | 3 | AI News Agent | AI/ML | `Developer/news-agent` | privateOrg |
| 4 | 4 | MT5 Trading Dashboard | Full-Stack | `Developer/mt5-dashboard` | privateOrg |
| 5 | 5 | Trading Audit System | Trading | `Developer/audit_system` | privateOrg |
| 6 | 6 | Signal Ingestor | Full-Stack | `Developer/ingestor` | privateOrg |
| 7 | 7 | MT5 Daily Report Bot | Trading | `Developer/mt5-dailyreport` | privateOrg |
| 8 | 8 | HRM Research Model | AI/ML | `Developer2/hrm` | privateOrg |
| 9 | 10 | Technical Analysis Engine | AI/ML, Trading | `Developer/ta-engine` | privateOrg |
| 10 | 11 | Polymarket Intelligence Platform | AI/ML, Full-Stack | `Developer/polymarket-trading` | privateOrg |
| 11 | 12 | Context Agent — MCP Dev Assistant | AI/ML, Full-Stack | `Developer/context-agent` | privateOrg |
| 12 | 13 | Federated Deep Learning IDS | AI/ML | No local folder found | academic project |
| 13 | 14 | FLICKS&PICKS | Full-Stack | No local folder found | academic project |
| 14 | 9 | Acceler-AI — Startup Ecosystem Platform | AI/ML, Full-Stack | GitHub only | hackathon, has GitHub link |

**Featured projects** (shown large in bento grid): #1 Master AI, #2 QBot, #14 Acceler-AI

---

## Data: Skills (`src/data/skills.ts`)

6 categories. Realistic spread — NOT all 80+. Range: 55–92.

Key values (approximate): Python 92, MT5 API 90, Pandas 90, FastAPI 88; React 80, TypeScript 78; Nginx 55, CI/CD 60, Celery 64.

---

## Data: Certifications (`src/data/certifications.ts`)

12 certifications + 1 achievement = 13 entries. CERT_TOTAL = 12 (counts certs only).

Issuers: IBM, NPTEL, MathWorks, Cisco (×2), UiPath, freeCodeCamp, AutoCAD, Meta, HackerRank (×2), IAMNeo (achievement)

Certifications section displays them as an auto-cycling spotlight card (one at a time, cycles every 3200ms, pauses on hover). Uses Clearbit logo API for issuer logos with fallback icons.

---

## Data: Experience (`src/data/experience.ts`)

3 entries:
1. AI Developer @ Q Data Tech (IHC - Cyrius Holdings) — May 2025–Present, Abu Dhabi
2. Data Analyst Intern @ Heron Technologies — May 2024–Mar 2025, Chennai
3. B.Tech AI & Data Science @ Sri Krishna College of Technology — 2021–2025, CGPA 8.32

---

## Technologies Section

Two-row infinite marquee. Row 1 scrolls left (`animate-marquee`), Row 2 scrolls right (`animate-marquee-reverse`).

20 technologies with brand icons from `react-icons/si`: Python, PyTorch, TensorFlow, FastAPI, React, Next.js, TypeScript, Docker, MongoDB, PostgreSQL, Pandas, NumPy, Tailwind, SQLite, Redis, Linux, JavaScript, GitHub, Git, Node.js

Fade masks on left/right sides (`w-32`) give "floating in centre" effect. Hover pauses animation.

---

## Navbar Links

8 links: Home · About · Projects · Skills · Tools · Experience · Academics · Contact

- "Tools" → `#technologies`
- "Academics" → `#certifications`

---

## Contact Form (`/api/contact/route.ts`)

- Validates: all fields required, email regex check
- If `RESEND_API_KEY` is set: sends real email via Resend to `aks05.sk.ai@gmail.com`
- If not set: logs to console (dev fallback), returns `{ success: true, dev: true }`
- HTML email template with portfolio branding (indigo/dark)
- `replyTo` set to submitter's email

**Resend API key:** `.env.local` has placeholder. Must set `RESEND_API_KEY` in Vercel dashboard for production emails to work.

---

## Tone Guidelines

**Goal: "Silent power"** — politely confident, specific, factual. Let numbers and specifics speak. No hyperbole.

**Banned phrases:** "next-gen", "push the boundaries", "thrive at the edges of what's technically possible", "passion for", "I'd love to hear from you", "sophisticated", "modern" (as adjective for a system)

**Approved tone:** warm, composed, first-person, direct. Example: "I work at the intersection of AI and financial systems" — not "I'm passionate about building next-gen AI solutions".

---

## Known Quirks / Important Constraints

1. **Bun only** — npm builds fail due to Tailwind v4 + shadcn resolver. Never use npm.
2. **`@types/bun` must not be in devDependencies** — causes TypeScript conflicts on Vercel (Node.js environment).
3. **Cannot run bun from Claude's bash shell** — Windows permission restriction on `~/.bun/bin/bun.exe`. All build verification must be done by the user in their own terminal.
4. **VS Code TypeScript errors are false positives** — fixed by `.vscode/settings.json`. Workspace TypeScript v5.9.x supports `moduleResolution: bundler`; VS Code's built-in TS does not.
5. **Contact API route was hard to find via Glob** — located at `src/app/api/contact/route.ts`. If Glob returns nothing for API routes, read directly by path.
6. **`animate-marquee-reverse` must exist in globals.css** — About section uses `animate-marquee`, Technologies uses both. If the animation class is missing, marquee will be static.

---

## Local Project Folders — Coverage Check

All folders under `C:\Akshaiya_Sakthivel\Developer\` and `Developer2\` and what's in the portfolio:

### Covered in portfolio ✅
`master-ai`, `mt5-python`, `news-agent`, `mt5-dashboard`, `audit_system`, `ingestor`, `mt5-dailyreport`, `hrm`, `ta-engine`, `polymarket-trading`, `context-agent`

### NOT currently in portfolio — open decisions needed ⚠️

| Folder | What it appears to be | Decision needed |
|---|---|---|
| `Developer/data-engine` | Portfolio data backend — has full frontend (`frontend/bun.lock`), comprehensive docs (ARCHITECTURE.md, API_SPEC.md), notebooks, Parquet caching. Substantial project. | **Ask user: should this be added as a portfolio project?** |
| `Developer/overview-python` | Internal portfolio monitoring/analytics service — generates parquet snapshots of portfolio performance. Very internal. | **Ask user: is this a standalone project or just an internal tool?** |
| `Developer/qbot` | Has its own `.git` repo (separate from `mt5-python`). Appears to be a distinct QBot codebase. Unclear if it's an older version of #2 or a separate system. | **Ask user: is `qbot/` the same as QBot (#2) or different?** |
| `candle_chart/candle chart` | Has AI agents (forecast_agent.py, sentiment_agent.py, fundamental_agent.py) + Trend Analysis Dashboard (Streamlit). Could be a real portfolio project. | **Ask user: should this be added?** |
| `Developer/trello-ai` | Only planning documents (`OPENCLAW-PLAN.md`), no implementation code found. | Probably not worth adding — confirm with user |
| `Developer2/RL` | Reinforcement Learning — only zip files, seems archived/abandoned. | Probably not worth adding — confirm with user |
| `Developer/avatar` | Cloned open-source avatar repos (`aiavatarkit`, `airi`). Not Akshaiya's own project. | Do not add |

---

## What's Fully Done ✅

- [x] Portfolio built from scratch (Next.js 15, full stack)
- [x] All 8 sections implemented and styled
- [x] 14 projects in `projects.ts` with accurate descriptions and metrics
- [x] Technologies section — 2-row infinite marquee with brand icons
- [x] Certifications section — auto-cycling spotlight card, Clearbit logos, flip animation
- [x] Tone overhaul — "silent power" applied across Hero, About, Projects, Skills, Contact
- [x] Skills values — realistic spread (55–92), not artificially inflated
- [x] About section heading — full sentence (not "AI · Quantitative Finance · Production Systems")
- [x] Navbar — 8 links, "Tools" and "Academics" added
- [x] Footer — "FinTech Developer" (not "Builder")
- [x] `.gitignore` — `*.txt`, `Thumbs.db`, `*.log`, `.vscode/*` (with `!.vscode/settings.json` exception)
- [x] `layout.tsx` metadata — GitHub URL corrected to `AkshaiyaSakthivel05`, descriptions cleaned
- [x] `@types/bun` removed from `package.json` devDependencies
- [x] VS Code TypeScript errors fixed — `.vscode/settings.json` committed
- [x] Contact location `href` — was `"#"`, fixed to `https://maps.google.com/?q=Abu+Dhabi,UAE`
- [x] ML Accuracy stat suffix — was `"%+"`, corrected to `"%"`
- [x] Project `longDescription` fields cleaned of puffery

---

## What's Still Pending ⏳

### Must do (user actions)
1. **Build + deploy** — user must run:
   ```bash
   cd C:\Akshaiya_Sakthivel\OTHER\DOCS\portfolio
   bun run build
   git add -A && git commit -m "describe what changed"
   git push
   vercel --prod --yes
   ```
2. **Set Resend API key in Vercel** — go to Vercel → Project Settings → Environment Variables → add `RESEND_API_KEY`

### Open decisions (need user input before proceeding)
3. **`data-engine` folder** — substantial project not in portfolio. Add it?
4. **`overview-python` folder** — internal service. Add it?
5. **`qbot` folder** — separate git repo. Is this the same as QBot (#2) or a different project?
6. **`candle_chart` project** — has AI agents + dashboard. Add to portfolio?
7. **`trello-ai`** — only planning docs, no code. Confirm it should stay out.
8. **Portfolio domain** — what is the live URL? (verify it's pointing to the right place)
9. **Resume PDF** — `public/resume.pdf` is a placeholder. Does the user want to upload the real one?

---

## Git / Version Control

Portfolio folder (`C:\Akshaiya_Sakthivel\OTHER\DOCS\portfolio`) has been used with git. Remote is on GitHub. Connected to Vercel for auto-deploy on push.

**Note:** As of 2026-04-27, there are uncommitted changes from the last session (tone fixes, metadata, .gitignore, etc.) that have NOT been committed yet. User must run the build + commit + push before the live site reflects all changes.

---

## Contact Info in Portfolio

Email: `aks05.sk.ai@gmail.com`  
UAE phone: `+971 50 359 2275`  
India phone: `+91 90428 48703`  
Location: Abu Dhabi, UAE  
LinkedIn: `akshaiyasakthivel-aa1053240`  
GitHub (Main): `AkshaiyaSakthivel05`  
GitHub (Research): `AkshaiyaSakthivel003`

---

## How to Use This Document

Hand this to Claude at the start of a new session. Say: "Read HANDOVER.md in the memory folder and continue working on the portfolio." Claude should read it, ask about any open decisions listed above before making changes, and pick up from exactly where this left off.

If this document is outdated, the most reliable source of truth is the actual files in `C:\Akshaiya_Sakthivel\OTHER\DOCS\portfolio\src\`.
