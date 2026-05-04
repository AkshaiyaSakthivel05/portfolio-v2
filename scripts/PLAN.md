# LinkedIn Certifications Scraper — Plan

**Goal:** Get the credential verification URL for each of the 12 certifications in `src/data/certifications.ts` so the Certifications section can show "View Credential" links.

**Current state:** `certifications.ts` has a `credentialUrl?: string` field on the interface, but no values are filled in yet.

---

## Where to Find the Cookie (Script A only)

1. Open `linkedin.com` in your browser — make sure you're logged in
2. Press `F12` → **Application** tab → **Cookies** → click **`https://www.linkedin.com`** (NOT a subdomain)
3. Find the row where **Name** = `li_at`
4. Copy the full **Value** (it's a long string, 100+ characters)

---

## Approach Order — Try These One by One

### Script A: Playwright + `li_at` session cookie (try first)

**What it does:** Launches a headless Chromium browser, injects your LinkedIn session cookie, navigates to your profile, clicks "Show all certifications", and scrapes each cert's name + credential URL.

**Risk:** Medium. It's your own profile. LinkedIn can detect headless browsers — if it does, you'll get redirected to login and the script exits cleanly with an error.

**Setup (run once):**
```bash
cd C:\Akshaiya_Sakthivel\OTHER\DOCS\portfolio
bun add -d playwright
bunx playwright install chromium
```

**Run:**
```powershell
$env:LI_AT="PASTE_YOUR_li_at_VALUE_HERE"; bun scripts/fetch-linkedin-certs.mjs
```

**Expected output (stdout):**
```json
[
  { "name": "Python For Data Science", "credentialUrl": "https://..." },
  ...
]
```

**If it fails:** Check the stderr message. Common errors:
- `Redirected to login` → cookie expired, get a fresh one
- `No certifications found` → LinkedIn's DOM changed, try headless: false (see below)
- Timeout → LinkedIn is slow, try again

**Debug mode (opens a real browser window so you can see what's happening):**
Change line 31 in `fetch-linkedin-certs.mjs`:
```js
// from:
const browser = await chromium.launch({ headless: true });
// to:
const browser = await chromium.launch({ headless: false });
```

---

### Script B: LinkedIn GDPR data export parser (fallback)

**What it does:** Parses the `Licenses and Certifications.csv` file from LinkedIn's official data export. Zero scraping — LinkedIn gives you this data themselves.

**Risk:** Zero. This is an official LinkedIn feature.

**How to request the export:**
1. LinkedIn → **Settings & Privacy** → **Data Privacy** → **Get a copy of your data**
2. Select **"Licenses and Certifications"** (or full archive)
3. Click **Request archive**
4. Wait for the email (up to 24 hours)
5. Download the ZIP → extract → find `Licenses and Certifications.csv`

**Setup:**
Copy `Licenses and Certifications.csv` into `scripts/` (it is gitignored — will NOT be committed).

**Run:**
```bash
bun scripts/parse-linkedin-export.mjs
```

**Expected output:** Same JSON format as Script A.

---

## After You Get the JSON

Once either script prints the JSON with credential URLs, update `src/data/certifications.ts`:

1. Match each result by cert name to the existing entry
2. Add the `credentialUrl` field value
3. For any cert with `credentialUrl: null` (not on LinkedIn), leave the field absent

**Example update:**
```ts
{ id: "python-ds", name: "Python For Data Science", issuer: "IBM", category: "Certification", credentialUrl: "https://..." },
```

Then update the `Certifications.tsx` component to render a "View Credential" link/button when `credentialUrl` is present.

---

## Files in This Folder

| File | Purpose |
|---|---|
| `fetch-linkedin-certs.mjs` | Script A — Playwright scraper |
| `parse-linkedin-export.mjs` | Script B — GDPR CSV parser |
| `PLAN.md` | This file |

**Gitignored (never committed):**
- `scripts/*.csv` — LinkedIn export data
- `scripts/*.zip` — LinkedIn export archive
- `scripts/*.json` — Any scraped output you save locally

---

## Status

- [x] `credentialUrl?: string` added to `Certification` interface
- [x] Script A written (`fetch-linkedin-certs.mjs`)
- [x] Script B written (`parse-linkedin-export.mjs`)
- [ ] Script A run successfully (pending — need `li_at` cookie)
- [ ] `certifications.ts` updated with credential URLs
- [ ] `Certifications.tsx` updated to render "View Credential" links
