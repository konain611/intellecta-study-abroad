import type { Metadata } from "next";
import { BlogPageContent } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Blog and Student Resources | Intellecta International Study Abroad",
  description: "Browse student resource topics for international education planning.",
};

export default function BlogPage() {
  return <BlogPageContent />;
}
