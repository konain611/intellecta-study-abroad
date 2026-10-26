import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Home | Intellecta International Study Abroad",
  description: "Study Beyond Borders. Build a Future Without Limits.",
};

export default function Page() {
  return <HomePage />;
}
