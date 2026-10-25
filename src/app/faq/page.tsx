import type { Metadata } from "next";
import { FaqPageContent } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Intellecta International Study Abroad",
  description: "Answers to common questions about planning to study abroad.",
};

export default function FaqPage() {
  return <FaqPageContent />;
}
