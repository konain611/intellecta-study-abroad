import type { Metadata } from "next";
import { PolicyPlaceholderPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Privacy Policy | Intellecta International Study Abroad",
  description: "Privacy policy placeholder.",
};

export default function PrivacyPolicyPage() {
  return <PolicyPlaceholderPage title="Privacy Policy" />;
}
