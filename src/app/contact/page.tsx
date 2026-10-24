import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact-page-content";
import { enquiryDestinations } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact Us | Intellecta International Study Abroad",
  description: "Contact Intellecta International Study Abroad and send an enquiry about your study plans.",
};

type ContactPageProps = {
  searchParams: Promise<{ destination?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { destination } = await searchParams;
  const defaultDestination = enquiryDestinations.some((item) => item.value === destination)
    ? destination
    : undefined;
  return <ContactPageContent defaultDestination={defaultDestination} />;
}
