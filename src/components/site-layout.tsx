import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl md:text-6xl">
      {children}
    </h1>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
      {children}
    </h2>
  );
}

export function ContentCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={`rounded-md border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
      {children}
    </article>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-base leading-7 text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ConsultationLink({ children = "Book a Consultation" }: { children?: ReactNode }) {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-blue-950 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
    >
      {children}
    </Link>
  );
}
