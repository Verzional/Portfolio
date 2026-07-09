import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Lato } from "next/font/google";
import { cn } from "@/lib/utils";
import { AppShell } from "@/components/layout/app-shell";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://verzional.com",
  ),
  title: {
    default: "Verzional | Full-Stack Engineer",
    template: "%s | Verzional",
  },
  description:
    "Portfolio of Verzional, a Full-Stack Engineer specializing in high-fidelity web, mobile, and game applications with a core focus on deeply interactive, immersive, and playful user experiences.",
  keywords: [
    "Full-Stack Engineer",
    "Web Developer",
    "Mobile Developer",
    "Game Developer",
    "Backend Developer",
    "Next.js",
    "React",
    "Golang",
    "Portfolio",
    "Verzional",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Verzional" }],
  creator: "Verzional",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Verzional | Full-Stack Engineer",
    description:
      "Portfolio of Verzional, a Full-Stack Engineer specializing in high-fidelity web, mobile, and game applications with a core focus on deeply interactive, immersive, and playful user experiences.",
    siteName: "Verzional Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Verzional Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verzional | Full-Stack Engineer",
    description:
      "Portfolio of Verzional, a Full-Stack Engineer specializing in high-fidelity web, mobile, and game applications with a core focus on deeply interactive, immersive, and playful user experiences.",
    creator: "@verzional",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", lato.variable)}
    >
      <body className="flex min-h-full flex-col">
        <AppShell>{children}</AppShell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
