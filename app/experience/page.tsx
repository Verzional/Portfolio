import { Metadata } from "next";
import { ExperienceClient } from "./client";

export const metadata: Metadata = {
  title: "Experience",
};

export default function Experience() {
  return <ExperienceClient />;
}
