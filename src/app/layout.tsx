import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Verzional",
  description: "Portfolio of Verzional, a Full-Stack Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", oswald.variable)}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
