import type { Metadata } from "next";
import { CourseSearchPageContent } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Study Options and Course Search | Intellecta International Study Abroad",
  description: "Explore study level, subject, destination, academic background, and budget considerations.",
};

export default function CourseSearchPage() {
  return <CourseSearchPageContent />;
}
