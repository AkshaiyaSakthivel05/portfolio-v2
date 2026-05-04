/**
 * Script A: Scrape your own LinkedIn certifications using your browser session cookie.
 *
 * SETUP:
 *   bun add -d playwright
 *   npx playwright install chromium
 *
 * USAGE:
 *   LI_AT=<your_li_at_cookie> bun scripts/fetch-linkedin-certs.mjs
 *
 * OUTPUT:
 *   Prints JSON array to stdout — paste output here for certifications.ts update
 */

import { chromium } from "playwright";

const LI_AT = process.env.LI_AT;
const PROFILE_SLUG = "akshaiya-sakthivel-aa1053240";

if (!LI_AT) {
  console.error("ERROR: LI_AT env var is required.");
  process.exit(1);
}

const browser = await chromium.launch({
  headless: true,
  args: [
    "--disable-blink-features=AutomationControlled",
    "--no-sandbox",
    "--disable-setuid-sandbox",
  ],
});

const context = await browser.newContext({
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
  viewport: { width: 1280, height: 800 },
  locale: "en-US",
  extraHTTPHeaders: {
    "Accept-Language": "en-US,en;q=0.9",
  },
});

// Inject li_at before any navigation so LinkedIn treats the first request as authenticated
await context.addCookies([
  { name: "li_at", value: LI_AT, domain: ".linkedin.com", path: "/", httpOnly: true, secure: true },
]);

const page = await context.newPage();

// Remove navigator.webdriver flag that headless Chrome exposes
await page.addInitScript(() => {
  Object.defineProperty(navigator, "webdriver", { get: () => undefined });
});

// ── Step 1: Land on the feed first so LinkedIn establishes a full session ──
console.error("Step 1: Landing on feed to establish session...");
try {
  await page.goto("https://www.linkedin.com/feed/", {
    waitUntil: "domcontentloaded",
    timeout: 30000,
  });
} catch (err) {
  console.error("Feed navigation failed:", err.message);
}

const feedUrl = page.url();
console.error(`Landed on: ${feedUrl}`);

if (feedUrl.includes("login") || feedUrl.includes("authwall") || feedUrl.includes("checkpoint")) {
  console.error("ERROR: Cookie rejected — redirected to auth page. Get a fresh li_at cookie.");
  await browser.close();
  process.exit(1);
}

// Wait for LinkedIn to finish setting its own session cookies
await page.waitForTimeout(2500);

// ── Step 2: Navigate to the certifications detail page ──
const certUrl = `https://www.linkedin.com/in/${PROFILE_SLUG}/details/certifications/`;
console.error(`Step 2: Navigating to ${certUrl} ...`);

try {
  await page.goto(certUrl, { waitUntil: "domcontentloaded", timeout: 30000 });
} catch (err) {
  console.error("Certifications page failed:", err.message);
  await browser.close();
  process.exit(1);
}

console.error(`Landed on: ${page.url()}`);
await page.waitForTimeout(3000);

// Scroll to trigger lazy-loading
for (let i = 0; i < 5; i++) {
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await page.waitForTimeout(600);
}

// ── Step 3: Scrape ──
const rawItems = await page.evaluate(() => {
  const results = [];

  const pvsList = document.querySelectorAll("li.pvs-list__paged-list-item");

  pvsList.forEach((el) => {
    const nameEl =
      el.querySelector(".t-bold span[aria-hidden='true']") ||
      el.querySelector("[data-field='certificationName'] span[aria-hidden='true']") ||
      el.querySelector(".mr1 span[aria-hidden='true']");

    const linkEl =
      el.querySelector('a[href*="credential"]') ||
      el.querySelector('a[href*="certificationId"]') ||
      el.querySelector('a[href*="credly"]') ||
      el.querySelector('a[href*="coursera"]') ||
      el.querySelector('a[href*="verify"]') ||
      el.querySelector('a[href*="freecodecamp"]') ||
      el.querySelector('a[href*="hackerrank"]');

    const name = nameEl?.textContent?.trim() ?? null;
    const credentialUrl = linkEl?.href ?? null;

    if (name) results.push({ name, credentialUrl });
  });

  // Fallback: find by "Show credential" / "View credential" link text
  if (results.length === 0) {
    document.querySelectorAll("a").forEach((a) => {
      const txt = a.textContent?.trim().toLowerCase() ?? "";
      if (txt.includes("show credential") || txt.includes("view credential")) {
        const section = a.closest("li, section, div[data-view-name]");
        const nameEl = section?.querySelector(".t-bold span[aria-hidden='true']");
        results.push({
          name: nameEl?.textContent?.trim() ?? "(unknown)",
          credentialUrl: a.href,
        });
      }
    });
  }

  // Debug fallback: dump raw text of each list item so we can see what loaded
  if (results.length === 0) {
    pvsList.forEach((el) => {
      results.push({
        name: el.textContent?.replace(/\s+/g, " ").trim().slice(0, 150),
        credentialUrl: null,
        _debug: true,
      });
    });
  }

  return results;
});

await browser.close();

if (rawItems.length === 0) {
  console.error(
    "WARNING: Nothing found. Page may not have loaded certs — try headless: false (line 26) to visually inspect.",
  );
} else if (rawItems[0]?._debug) {
  console.error(
    `Found ${rawItems.length} raw items (debug — name selectors missed, showing raw text):`,
  );
} else {
  console.error(`Found ${rawItems.length} certification(s).`);
}

console.log(JSON.stringify(rawItems, null, 2));
