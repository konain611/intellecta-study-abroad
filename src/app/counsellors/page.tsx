import type { Metadata } from "next";
import { CounsellorsPageContent } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Meet Our Counsellors | Intellecta International Study Abroad",
  description: "Meet the people who help students navigate study options and applications.",
};

export default function CounsellorsPage() {
  return <CounsellorsPageContent />;
}
