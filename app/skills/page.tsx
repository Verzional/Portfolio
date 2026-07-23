import { Metadata } from "next";
import { SkillsClient } from "./client";

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return <SkillsClient />;
}
