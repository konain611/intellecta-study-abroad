import type { Metadata } from "next";
import { EventsPageContent } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "University Partners and Events | Intellecta International Study Abroad",
  description: "Find out how students can learn about institutions through verified information and events.",
};

export default function EventsPage() {
  return <EventsPageContent />;
}
