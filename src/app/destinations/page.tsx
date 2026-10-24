import type { Metadata } from "next";
import { DestinationsPageContent } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Study Destinations | Intellecta International Study Abroad",
  description: "Explore study destinations and compare the information to check before applying.",
};

export default function DestinationsPage() {
  return <DestinationsPageContent />;
}
