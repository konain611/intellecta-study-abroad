import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intellecta International Study Abroad",
  description: "Study Beyond Borders. Build a Future Without Limits.",
  openGraph: {
    title: "Intellecta International Study Abroad",
    description: "Study Beyond Borders. Build a Future Without Limits.",
    siteName: "Intellecta International Study Abroad",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  // TODO(owner): Confirm service availability, destination coverage, partner relationships, contact details, testimonials, and policy information before publishing.
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-900">{children}</body>
    </html>
  );
}
