import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DestinationDetailPageContent } from "@/components/site-pages";
import { destinations } from "@/data/site-content";

type DestinationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return destinations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) {
    return { title: "Study Destination | Intellecta International Study Abroad" };
  }
  return {
    title: `${destination.name} | Intellecta International Study Abroad`,
    description: `Explore study options and information about ${destination.name}.`,
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) notFound();
  return <DestinationDetailPageContent destination={destination} />;
}
