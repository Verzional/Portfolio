import { Metadata } from "next";
import { SocialsClient } from "./client";

export const metadata: Metadata = {
  title: "Socials",
};

export default function Socials() {
  return <SocialsClient />;
}
