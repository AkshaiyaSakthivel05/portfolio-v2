/**
 * Script B: Parse LinkedIn GDPR data export to extract certification URLs.
 *
 * SETUP:
 *   1. Go to LinkedIn → Settings → Data Privacy → Get a copy of your data
 *   2. Select "Licenses and Certifications" (or full archive) → Request archive
 *   3. Wait for email (~24h) → download ZIP → extract
 *   4. Copy "Licenses and Certifications.csv" into this scripts/ folder
 *
 * USAGE:
 *   bun scripts/parse-linkedin-export.mjs
 *
 * OUTPUT:
 *   Prints JSON array to stdout — copy into certifications.ts
 */

import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CSV_PATH = join(__dirname, "Licenses and Certifications.csv");

let raw;
try {
  raw = readFileSync(CSV_PATH, "utf-8");
} catch {
  console.error(`ERROR: Could not read file at:\n  ${CSV_PATH}`);
  console.error("Make sure you've copied the CSV from your LinkedIn data export into scripts/");
  process.exit(1);
}

// Parse CSV — handle quoted fields with commas inside
function parseCSV(text) {
  const lines = text.trim().split("\n");
  const headers = splitCSVLine(lines[0]);
  return lines.slice(1).map((line) => {
    const values = splitCSVLine(line);
    return Object.fromEntries(headers.map((h, i) => [h.trim(), (values[i] ?? "").trim()]));
  });
}

function splitCSVLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;
  for (const ch of line) {
    if (ch === '"') { inQuotes = !inQuotes; continue; }
    if (ch === "," && !inQuotes) { result.push(current); current = ""; continue; }
    current += ch;
  }
  result.push(current);
  return result;
}

const rows = parseCSV(raw);

console.error(`Parsed ${rows.length} row(s) from CSV.`);
console.error("Headers found:", Object.keys(rows[0] ?? {}).join(", "));

const certs = rows
  .filter((r) => r.Name || r["Certification Name"] || r["License Name"])
  .map((r) => ({
    name: r.Name || r["Certification Name"] || r["License Name"] || "",
    issuer: r.Authority || r["Issuing Organization"] || r.Issuer || "",
    licenseNumber: r["License Number"] || r["Credential ID"] || "",
    credentialUrl: r.Url || r["Credential URL"] || r["Certificate URL"] || "",
    startDate: r["Started On"] || r["Issue Date"] || "",
    endDate: r["Finished On"] || r["Expiration Date"] || "",
  }))
  .filter((r) => r.name);

console.log(JSON.stringify(certs, null, 2));
