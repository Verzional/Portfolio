"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Mail } from "lucide-react";

export function PrivacyClient() {
  const router = useRouter();

  // Bind Keyboard Navigation Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      if (e.key === "Escape" || e.key.toLowerCase() === "b") {
        e.preventDefault();
        router.push("/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <div className="relative min-h-screen w-full bg-background px-4 py-12 text-foreground selection:bg-primary selection:text-foreground sm:px-6 md:py-16 lg:px-8">
      {/* Background Ambience Glow */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-hero-glow opacity-50" />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Navigation Bar */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-edo-sz text-sm tracking-widest text-muted transition-colors hover:text-primary uppercase md:text-base"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return to Home
          </Link>

          <span className="hidden font-lato text-xs tracking-widest text-muted/50 uppercase sm:inline">
            [ESC] Back
          </span>
        </div>

        {/* Main Document Card */}
        <div className="border border-foreground/10 bg-background/70 p-6 shadow-2xl backdrop-blur-xs sm:p-10 md:p-12">
          {/* Header */}
          <div className="mb-2 inline-block border border-primary/40 bg-primary/10 px-3 py-1 font-lato text-xs font-semibold tracking-wider text-primary uppercase">
            PolyFuse • Privacy Policy
          </div>

          <h1 className="font-edo-sz text-3xl tracking-wider text-foreground sm:text-5xl">
            Privacy Policy
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-lato text-xs tracking-wider text-muted sm:text-sm">
            <span>
              Game: <span className="text-foreground">PolyFuse</span>
            </span>
            <span aria-hidden="true" className="text-muted/40">
              •
            </span>
            <span>
              Developer: <span className="text-foreground">Verzional</span>
            </span>
            <span aria-hidden="true" className="text-muted/40">
              •
            </span>
            <span>
              Effective Date:{" "}
              <span className="text-foreground">September 11, 2026</span>
            </span>
          </div>

          <div className="my-6 h-px w-full bg-divider opacity-60" />

          {/* Body Content */}
          <div className="space-y-8 font-lato text-sm leading-relaxed tracking-wider text-muted/90 sm:text-base">
            <p>
              Verzional (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
              built{" "}
              <strong className="font-semibold text-foreground">
                PolyFuse
              </strong>{" "}
              as a free-to-play, offline single-player puzzle game. This page
              informs players regarding our policies with the collection, use,
              and disclosure of personal information.
            </p>

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="border-b border-foreground/10 pb-2 font-edo-sz text-xl tracking-wider text-foreground uppercase sm:text-2xl">
                1. Information Collection and Use
              </h2>

              <div className="border-l-2 border-primary bg-primary/5 px-4 py-3 text-sm font-medium text-foreground">
                PolyFuse does not collect, store, or transmit any personally
                identifiable information (PII).
              </div>

              <ul className="list-disc space-y-2 pl-5 text-muted/80">
                <li>
                  <strong className="text-foreground">
                    No Account Required:
                  </strong>{" "}
                  You can play without registering, logging in, or providing
                  personal details like your name, email address, or phone
                  number.
                </li>
                <li>
                  <strong className="text-foreground">
                    No Third-Party Tracking or Ads:
                  </strong>{" "}
                  PolyFuse contains no third-party ad networks, no analytics
                  trackers, and does not track you across applications or
                  websites.
                </li>
                <li>
                  <strong className="text-foreground">Offline Gameplay:</strong>{" "}
                  All gameplay logic, puzzle solvers, and score calculations run
                  entirely locally on your device.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="border-b border-foreground/10 pb-2 font-edo-sz text-xl tracking-wider text-foreground uppercase sm:text-2xl">
                2. Local Device Storage
              </h2>
              <p>
                PolyFuse stores minimal game preferences and progress data
                strictly on your local device:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-muted/80">
                <li>
                  <strong className="text-foreground">
                    High Scores &amp; Statistics:
                  </strong>{" "}
                  Your best score, total lines cleared, and combo records.
                </li>
                <li>
                  <strong className="text-foreground">
                    Audio &amp; Haptic Preferences:
                  </strong>{" "}
                  Your toggle states for sound effects and vibration.
                </li>
              </ul>
              <p className="text-xs text-muted/70 sm:text-sm">
                This data is stored locally via your device&apos;s standard
                storage systems and is never uploaded to external servers. You
                can erase this data at any time by uninstalling the application.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="border-b border-foreground/10 pb-2 font-edo-sz text-xl tracking-wider text-foreground uppercase sm:text-2xl">
                3. Native Sharing (Scorecards)
              </h2>
              <p>
                When you tap &quot;Share&quot; on the Game Over screen, PolyFuse
                generates an image of your run scorecard and delegates it to your
                device&apos;s native operating system share sheet (such as iOS
                UIActivityViewController). PolyFuse does not view, upload, or
                retain your shared images or recipient contacts.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="border-b border-foreground/10 pb-2 font-edo-sz text-xl tracking-wider text-foreground uppercase sm:text-2xl">
                4. Children&apos;s Privacy
              </h2>
              <p>
                PolyFuse is designed for players of all ages. Because we do not
                collect any personal information whatsoever, our game complies
                fully with the Children&apos;s Online Privacy Protection Act
                (COPPA) and the EU General Data Protection Regulation (GDPR). We
                do not knowingly collect personal data from children under 13
                (or under 16 in the EU).
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="border-b border-foreground/10 pb-2 font-edo-sz text-xl tracking-wider text-foreground uppercase sm:text-2xl">
                5. Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy periodically. Any updates will
                be reflected on this page with a revised &quot;Effective
                Date&quot;.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="border-b border-foreground/10 pb-2 font-edo-sz text-xl tracking-wider text-foreground uppercase sm:text-2xl">
                6. Contact Us
              </h2>
              <p>
                If you have any questions or suggestions regarding this Privacy
                Policy, please reach out:
              </p>

              {/* Contact Box */}
              <div className="flex flex-col justify-between gap-4 border border-foreground/10 bg-foreground/5 p-5 sm:flex-row sm:items-center">
                <div>
                  <p className="font-edo-sz text-lg tracking-wider text-foreground">
                    Verzional Support
                  </p>
                  <p className="font-lato text-sm font-semibold text-primary">
                    contact@verzional.com
                  </p>
                </div>

                <a
                  href="mailto:contact@verzional.com"
                  className="inline-flex items-center justify-center gap-2 -skew-x-12 border border-foreground/30 bg-primary px-5 py-2 font-edo-sz text-sm tracking-widest text-foreground uppercase shadow-[2px_2px_0_rgba(255,255,255,0.7)] transition-all hover:translate-x-0.5 hover:bg-primary/90"
                >
                  <span className="flex items-center gap-2 skew-x-12">
                    <Mail className="h-4 w-4" />
                    Email Us
                  </span>
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 py-4 text-center font-lato text-xs tracking-widest text-muted/50 uppercase">
          &copy; 2026 Verzional. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
