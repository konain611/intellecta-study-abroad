import type { Metadata } from "next";
import { AboutPageContent } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "About Us | Intellecta International Study Abroad",
  description: "Learn about Intellecta International Study Abroad, our mission, vision, and values.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
