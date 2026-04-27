import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Akshaiya Sakthivel — AI Developer & FinTech Engineer',
  description:
    "Portfolio of Akshaiya Sakthivel — building next-gen AI trading systems, quantitative models, and full-stack platforms that push the boundaries of what's possible.",
  keywords: [
    'AI Developer', 'FinTech', 'Algorithmic Trading', 'Machine Learning', 'Full-Stack',
    'Python', 'FastAPI', 'React', 'Next.js', 'PyTorch', 'MT5', 'Quantitative Finance',
  ],
  authors: [{ name: 'Akshaiya Sakthivel', url: 'https://github.com/AKS-ai-sys' }],
  creator: 'Akshaiya Sakthivel',
  openGraph: {
    type: 'website',
    title: 'Akshaiya Sakthivel — AI Developer & FinTech Engineer',
    description: 'Building next-gen AI trading systems, quantitative models, and full-stack platforms.',
    siteName: 'AKS Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshaiya Sakthivel — AI Developer & FinTech Engineer',
    description: 'Building next-gen AI trading systems, quantitative models, and full-stack platforms.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-[#080810] text-white antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
