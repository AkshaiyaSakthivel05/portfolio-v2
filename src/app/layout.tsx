import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akshaiya-sakthivel05.vercel.app"),
  title: "Akshaiya Sakthivel — AI Developer & FinTech Engineer",
  description:
    "Portfolio of Akshaiya Sakthivel — AI systems engineer working at the intersection of quantitative finance and production machine learning.",
  keywords: [
    "AI Developer",
    "FinTech",
    "Algorithmic Trading",
    "Machine Learning",
    "Full-Stack",
    "Python",
    "FastAPI",
    "React",
    "Next.js",
    "PyTorch",
    "MT5",
    "Quantitative Finance",
  ],
  authors: [{ name: "Akshaiya Sakthivel", url: "https://github.com/AkshaiyaSakthivel05" }],
  creator: "Akshaiya Sakthivel",
  openGraph: {
    type: "website",
    title: "Akshaiya Sakthivel — AI Developer & FinTech Engineer",
    description:
      "AI systems engineering across quantitative finance, algorithmic trading, and full-stack platforms.",
    siteName: "AKS Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshaiya Sakthivel — AI Developer & FinTech Engineer",
    description:
      "AI systems engineering across quantitative finance, algorithmic trading, and full-stack platforms.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-[#080810] text-white antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
