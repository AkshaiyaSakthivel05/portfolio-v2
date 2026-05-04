/**
 * Script A: Scrape your own LinkedIn certifications using your browser session cookie.
 *
 * SETUP:
 *   bun add -d playwright
 *   bunx playwright install chromium
 *
 * USAGE:
 *   LI_AT=<your_li_at_cookie> bun scripts/fetch-linkedin-certs.mjs
 *
 * HOW TO GET li_at COOKIE:
 *   1. Log in to LinkedIn in your browser
 *   2. Open DevTools → Application → Cookies → https://www.linkedin.com
 *   3. Find "li_at" → copy its Value
 *   4. Paste as the LI_AT env var above
 *
 * OUTPUT:
 *   Prints JSON array to stdout — copy into certifications.ts
 */

import { chromium } from "playwright";

const LI_AT = process.env.LI_AT;
const PROFILE_SLUG = "akshaiya-sakthivel-aa1053240";

if (!LI_AT) {
  console.error("ERROR: LI_AT env var is required. See setup instructions at top of file.");
  process.exit(1);
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
});

// Inject the session cookie so LinkedIn sees us as logged in
await context.addCookies([
  {
    name: "li_at",
    value: LI_AT,
    domain: ".linkedin.com",
    path: "/",
    httpOnly: true,
    secure: true,
  },
]);

const page = await context.newPage();

console.error(`Navigating to linkedin.com/in/${PROFILE_SLUG} ...`);
await page.goto(`https://www.linkedin.com/in/${PROFILE_SLUG}/`, {
  waitUntil: "domcontentloaded",
  timeout: 30000,
});

// Check if we got redirected to login (cookie didn't work)
if (page.url().includes("login") || page.url().includes("authwall")) {
  console.error("ERROR: Redirected to login page. Your li_at cookie may be expired.");
  await browser.close();
  process.exit(1);
}

// LinkedIn lazy-loads sections — scroll down to trigger certification section load
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
await page.waitForTimeout(2000);
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(2000);

// Try to find the "Show all licenses & certifications" button and click it
const showAllBtn = page.locator('a[href*="details/certifications"]').first();
const hasShowAll = await showAllBtn.count();
if (hasShowAll > 0) {
  console.error("Found 'Show all certifications' link — navigating to full list...");
  await showAllBtn.click();
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(2000);
}

// Scrape all cert entries from the detail page or the section
const certs = await page.evaluate(() => {
  const results = [];

  // Selector patterns LinkedIn uses (may vary — we try multiple)
  const containers = document.querySelectorAll(
    [
      // Detail page layout
      "li.pvs-list__paged-list-item",
      // Inline section layout
      "#licenses_and_certifications ~ div li",
      "section[id*='certifications'] li",
    ].join(", "),
  );

  containers.forEach((el) => {
    const nameEl =
      el.querySelector(".t-bold span[aria-hidden='true']") ||
      el.querySelector("span.mr1 span[aria-hidden='true']");

    const linkEl = el.querySelector('a[href*="credential"]') || el.querySelector("a.optional-action-target-wrapper");

    const name = nameEl?.textContent?.trim() ?? null;
    const credentialUrl = linkEl?.href ?? null;

    if (name) results.push({ name, credentialUrl });
  });

  return results;
});

await browser.close();

if (certs.length === 0) {
  console.error(
    "WARNING: No certifications found. LinkedIn may have changed its DOM structure, or the section wasn't loaded.",
  );
  console.error("Try running with headless: false to debug (change line 47 to headless: false).");
} else {
  console.error(`Found ${certs.length} certification(s):`);
}

// Print clean JSON to stdout
console.log(JSON.stringify(certs, null, 2));
