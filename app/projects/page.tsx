import { Metadata } from "next";
import { ProjectsClient } from "./client";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return <ProjectsClient />;
}
