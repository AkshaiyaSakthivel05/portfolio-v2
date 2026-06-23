---
name: Portfolio v2 — Full Handover Document
description: Complete state of the portfolio project — what was built, what's done, what's pending, open decisions, full file map
type: project
originSessionId: 51f13df2-61d3-4112-b94c-045b7cb48ce1
---
# Portfolio v2 — Full Handover Document

**Last updated:** 2026-06-19  
**Portfolio owner:** Akshaiya Sakthivel  
**Portfolio location:** `/Users/akshaiyasakthivel/Documents/Codes/portfolio`  
**Live URL:** Not yet decided — domain selection pending

---

## What This Is

A personal developer portfolio site for Akshaiya Sakthivel — AI Developer and FinTech Engineer at Q Data Tech (IHC - Cyrius Holdings), Abu Dhabi, UAE. Single-page Next.js app, dark theme, deployed on Vercel.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.4 (App Router) |
| UI Library | React 19.2.5 |
| Language | TypeScript — strict mode, `"moduleResolution": "bundler"` |
| Styling | Tailwind CSS v4 |
| UI Primitives | shadcn/ui (badge, button, card, input, sheet, textarea) |
| Animations | Framer Motion v12 |
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

**VS Code TypeScript errors:** `.vscode/settings.json` is committed and sets `"typescript.tsdk": "node_modules/typescript/lib"`. This forces VS Code to use workspace TypeScript which supports `moduleResolution: bundler`, fixing false-positive import errors on framer-motion and lucide-react.

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
│   ├── projects.ts              # 14 projects
│   ├── skills.ts                # 6 categories × 6 skills, realistic spread 55–92
│   ├── experience.ts            # 2 work entries + 1 education
│   └── certifications.ts        # 15 certs + 1 achievement (CERT_TOTAL = 16)
└── lib/
    └── utils.ts                 # cn() helper (clsx + tailwind-merge)
```

---

## Data: Projects (`src/data/projects.ts`)

14 projects total.

| # | ID | Title | Category | Notes |
|---|---|---|---|---|
| 1 | 1 | Master AI Trading System | AI/ML, Trading | featured, privateOrg |
| 2 | 2 | QBot Algorithmic Trading | Trading | featured, privateOrg |
| 3 | 3 | AI News Agent | AI/ML | privateOrg |
| 4 | 4 | MT5 Trading Dashboard | Full-Stack | privateOrg |
| 5 | 5 | Trading Audit System | Trading | privateOrg |
| 6 | 6 | Signal Ingestor | Full-Stack | privateOrg |
| 7 | 7 | MT5 Daily Report Bot | Trading | privateOrg |
| 8 | 8 | HRM Research Model | AI/ML | privateOrg |
| 9 | 10 | Technical Analysis Engine | AI/ML, Trading | privateOrg |
| 10 | 11 | Polymarket Intelligence Platform | AI/ML, Full-Stack | privateOrg |
| 11 | 12 | Context Agent — MCP Dev Assistant | AI/ML, Full-Stack | privateOrg |
| 12 | 13 | Federated Deep Learning IDS | AI/ML | academic |
| 13 | 14 | FLICKS&PICKS | Full-Stack | academic |
| 14 | 9 | Acceler-AI | AI/ML, Full-Stack | hackathon, has GitHub link |

**Featured:** #1 Master AI, #2 QBot, #14 Acceler-AI

---

## Data: Skills (`src/data/skills.ts`)

6 categories. Range: 55–92. Key values: Python 92, MT5 API 90, Pandas 90, FastAPI 88; Nginx 55, CI/CD 60.

---

## Data: Certifications (`src/data/certifications.ts`)

15 certifications + 1 achievement = 16 entries total. `CERT_TOTAL = 16`.

Issuers: IBM, NPTEL, MathWorks, Cisco, Automation Anywhere, Celonis, freeCodeCamp (×3), Bentley, HackerRank (×3), Saylor Academy (×2), IAMNeo (achievement)

---

## Data: Experience (`src/data/experience.ts`)

3 entries:
1. AI Developer @ Q Data Tech (IHC - Cyrius Holdings) — **Jul 2025–Present**, Abu Dhabi
2. Data Analyst Intern @ Heron Technologies — May 2024–Mar 2025, Chennai
3. B.Tech AI & Data Science @ Sri Krishna College of Technology — 2021–2025, CGPA 8.32

---

## Technologies Section

Two-row infinite marquee. 20 technologies with brand icons from `react-icons/si`.

---

## Navbar Links

8 links: Home · About · Projects · Skills · Tools · Experience · Academics · Contact

- "Tools" → `#technologies`
- "Academics" → `#certifications`

---

## Contact Form (`/api/contact/route.ts`)

- Validates: all fields required, email regex check
- **HTML-escapes all user input** before interpolating into the email template
- If `RESEND_API_KEY` is set: sends real email via Resend to `aks05.sk.ai@gmail.com`
- If not set: logs to console (dev fallback), returns `{ success: true, dev: true }`
- `replyTo` set to submitter's email
- Rate limited: 3 requests per 10 minutes per IP

**Resend API key:** Must set `RESEND_API_KEY` in Vercel dashboard for production emails to work.

**Resend `from` email:** Currently `onboarding@resend.dev` (sandbox). When domain is decided, set up a verified domain in Resend and update the `from` field to something like `contact@yourdomain.com`.

---

## Tone Guidelines

**Goal: "Silent power"** — politely confident, specific, factual. Let numbers and specifics speak. No hyperbole.

**Banned phrases:** "next-gen", "push the boundaries", "thrive at the edges of what's technically possible", "passion for", "I'd love to hear from you", "sophisticated", "modern" (as adjective for a system)

---

## Known Quirks / Important Constraints

1. **Bun only** — npm builds fail due to Tailwind v4 + shadcn resolver. Never use npm.
2. **`@types/bun` must not be in devDependencies** — causes TypeScript conflicts on Vercel (Node.js environment).
3. **VS Code TypeScript errors are false positives** — fixed by `.vscode/settings.json`.
4. **Contact API route:** located at `src/app/api/contact/route.ts`.
5. **`animate-marquee-reverse` must exist in globals.css** — if missing, marquee will be static.

---

## What's Fully Done ✅

- [x] All 10 sections implemented and styled (Navbar, Hero, About, Projects, Skills, Technologies, Experience, Certifications, Contact, Footer)
- [x] 14 projects with accurate descriptions, metrics, tech stack
- [x] Technologies section — 2-row infinite marquee with brand icons
- [x] Certifications — auto-cycling spotlight card, Clearbit logos, flip animation, 16 entries
- [x] Tone — "silent power" applied across all sections
- [x] Skills — realistic spread 55–92
- [x] Navbar — 8 links including "Tools" and "Academics"
- [x] Footer — "FinTech Developer" tagline (consistent with Hero)
- [x] Resume PDF — real file at `public/Akshaiya-Sakthivel-Resume.pdf`
- [x] Contact API — rate limiting, validation, HTML injection protection
- [x] Metadata — title, description, keywords, OG, Twitter cards in layout.tsx
- [x] `.gitignore` — excludes logs, txt, Thumbs.db; keeps `.vscode/settings.json`
- [x] Q Data start date corrected to Jul 2025 (confirmed via LinkedIn export)
- [x] Unused Next.js template SVGs removed from `public/`

---

## What's Still Pending ⏳

### Needs domain decision first
1. **`metadataBase`** — add to `layout.tsx` once domain is known so OG/Twitter card URLs resolve correctly
2. **OG social image** — create `public/og.png` for social sharing previews (`summary_large_image` is set but no image exists)
3. **`src/app/sitemap.ts`** — Next.js 13+ App Router dynamic sitemap
4. **`src/app/robots.ts`** — Next.js 13+ App Router robots.txt
5. **Email template domain** — update "Via portfolio contact form" reference once domain is live
6. **Resend `from` email** — change from sandbox `onboarding@resend.dev` to `contact@yourdomain.com` after verifying domain in Resend

### Must do (user actions)
7. **Set `RESEND_API_KEY` in Vercel** — Project Settings → Environment Variables
8. **Build + deploy**:
   ```bash
   bun run build
   git add -A && git commit -m "..."
   git push
   ```

### Open decisions (projects not yet added)
9. **`data-engine` folder** — substantial project with full frontend + architecture docs. Add to portfolio?
10. **`candle_chart`** — AI agents + Streamlit trading dashboard. Add?
11. **`qbot/` folder** — separate git repo, unclear if same as QBot #2 or distinct project

---

## Contact Info in Portfolio

Email: `aks05.sk.ai@gmail.com`  
UAE phone: `+971 50 359 2275`  
India phone: `+91 90428 48703`  
Location: Abu Dhabi, UAE  
LinkedIn: `akshaiyasakthivel-aa1053240`  
GitHub (Main): `AkshaiyaSakthivel05`  
GitHub (Research): `AkshaiyaSakthivel003`
