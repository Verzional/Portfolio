import type { Metadata } from "next";
import { NotFoundClient } from "./_components/not-found-client";

export const metadata: Metadata = {
  title: "404 - Lost Route",
  description: "Page not found. Return to the main gate.",
};

export default function NotFound() {
  return <NotFoundClient />;
}
