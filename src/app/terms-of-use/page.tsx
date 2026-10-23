import type { Metadata } from "next";
import { PolicyPlaceholderPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Terms of Use | Intellecta International Study Abroad",
  description: "Terms of use placeholder.",
};

export default function TermsOfUsePage() {
  return <PolicyPlaceholderPage title="Terms of Use" />;
}
