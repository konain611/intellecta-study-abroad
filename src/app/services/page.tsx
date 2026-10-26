import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Our Services | Intellecta International Study Abroad",
  description: "Explore study-abroad counselling, application assistance, scholarship guidance, visa guidance, and more.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
