import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - PolyFuse | Verzional",
  description:
    "Privacy Policy for PolyFuse, an offline single-player puzzle game by Verzional.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] px-4 py-16 font-sans text-slate-200 selection:bg-cyan-500 selection:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
          >
            &larr; Back to Verzional
          </Link>
        </div>

        {/* Header Card */}
        <div className="mb-8 rounded-2xl border border-slate-800/80 bg-[#111726]/80 p-6 shadow-2xl backdrop-blur-md sm:p-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-400 uppercase">
            Data Not Collected
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Game: <span className="font-medium text-slate-200">PolyFuse</span>{" "}
            &bull; Developer:{" "}
            <span className="font-medium text-slate-200">Verzional</span> &bull;
            Effective Date:{" "}
            <span className="font-medium text-slate-200">
              September 11, 2026
            </span>
          </p>

          <hr className="my-6 border-slate-800" />

          {/* Body Content */}
          <div className="space-y-8 text-sm leading-relaxed text-slate-300 sm:text-base">
            <p>
              Verzional (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
              built{" "}
              <strong className="font-semibold text-white">PolyFuse</strong> as
              a free-to-play, offline single-player puzzle game. This page
              informs players regarding our policies with the collection, use,
              and disclosure of personal information.
            </p>

            <section className="space-y-3">
              <h2 className="border-b border-slate-800 pb-2 text-xl font-bold text-white">
                1. Information Collection and Use
              </h2>
              <p className="font-medium text-slate-400">
                PolyFuse does not collect, store, or transmit any personally
                identifiable information (PII).
              </p>
              <ul className="list-disc space-y-2 pl-5 text-slate-400">
                <li>
                  <strong className="text-slate-200">
                    No Account Required:
                  </strong>{" "}
                  You can play without registering, logging in, or providing
                  personal details like your name, email address, or phone
                  number.
                </li>
                <li>
                  <strong className="text-slate-200">
                    No Third-Party Tracking or Ads:
                  </strong>{" "}
                  PolyFuse contains no third-party ad networks, no analytics
                  trackers, and does not track you across applications or
                  websites.
                </li>
                <li>
                  <strong className="text-slate-200">Offline Gameplay:</strong>{" "}
                  All gameplay logic, puzzle solvers, and score calculations run
                  entirely locally on your device.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="border-b border-slate-800 pb-2 text-xl font-bold text-white">
                2. Local Device Storage
              </h2>
              <p className="text-slate-400">
                PolyFuse stores minimal game preferences and progress data
                strictly on your local device:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-slate-400">
                <li>
                  <strong className="text-slate-200">
                    High Scores &amp; Statistics:
                  </strong>{" "}
                  Your best score, total lines cleared, and combo records.
                </li>
                <li>
                  <strong className="text-slate-200">
                    Audio &amp; Haptic Preferences:
                  </strong>{" "}
                  Your toggle states for sound effects and vibration.
                </li>
              </ul>
              <p className="text-slate-400">
                This data is stored locally via your device&apos;s standard
                storage systems and is never uploaded to external servers. You
                can erase this data at any time by uninstalling the application.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="border-b border-slate-800 pb-2 text-xl font-bold text-white">
                3. Native Sharing (Scorecards)
              </h2>
              <p className="text-slate-400">
                When you tap &quot;Share&quot; on the Game Over screen, PolyFuse
                generates an image of your run scorecard and delegates it to
                your device&apos;s native operating system share sheet (such as
                iOS UIActivityViewController). PolyFuse does not view, upload,
                or retain your shared images or recipient contacts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="border-b border-slate-800 pb-2 text-xl font-bold text-white">
                4. Children&apos;s Privacy
              </h2>
              <p className="text-slate-400">
                PolyFuse is designed for players of all ages. Because we do not
                collect any personal information whatsoever, our game complies
                fully with the Children&apos;s Online Privacy Protection Act
                (COPPA) and the EU General Data Protection Regulation (GDPR). We
                do not knowingly collect personal data from children under 13
                (or under 16 in the EU).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="border-b border-slate-800 pb-2 text-xl font-bold text-white">
                5. Changes to This Privacy Policy
              </h2>
              <p className="text-slate-400">
                We may update our Privacy Policy periodically. Any updates will
                be reflected on this page with a revised &quot;Effective
                Date&quot;.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="border-b border-slate-800 pb-2 text-xl font-bold text-white">
                6. Contact Us
              </h2>
              <p className="text-slate-400">
                If you have any questions or suggestions regarding this Privacy
                Policy, please reach out:
              </p>
              <div className="flex flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:flex-row sm:items-center">
                <div>
                  <p className="font-medium text-slate-200">
                    Verzional Support
                  </p>
                  <p className="text-sm text-cyan-400">contact@verzional.com</p>
                </div>
                <a
                  href="mailto:contact@verzional.com"
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-bold text-[#0A0D14] shadow-lg shadow-cyan-500/10 transition-colors hover:bg-cyan-400"
                >
                  Email Us
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-4 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Verzional. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
