import type { Metadata } from "next";
import { ScholarshipsPageContent } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Scholarships and Funding | Intellecta International Study Abroad",
  description: "Review scholarship eligibility, application requirements, and funding considerations.",
};

export default function ScholarshipsPage() {
  return <ScholarshipsPageContent />;
}
