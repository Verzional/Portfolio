import type { Metadata } from "next";
import { PrivacyClient } from "./_components/privacy-client";

export const metadata: Metadata = {
  title: "Privacy Policy - PolyFuse",
  description:
    "Privacy Policy for PolyFuse, an offline single-player puzzle game by Verzional.",
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
