import type { Metadata } from "next";
import { StudentStoriesPageContent } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Student Stories and Outcomes | Intellecta International Study Abroad",
  description: "Learn how verified student experiences can help future applicants understand the process.",
};

export default function StudentStoriesPage() {
  return <StudentStoriesPageContent />;
}
