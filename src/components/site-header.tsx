"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNavigation } from "@/data/site-content";

const headerNavigation = primaryNavigation.filter((item) => item.href !== "/");

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative h-10 w-32 shrink-0 overflow-hidden rounded bg-white sm:h-14 sm:w-64"
          aria-label="Intellecta International Study Abroad home"
        >
          <Image
            src="/studyaboradlogo.jpeg"
            alt="Intellecta International Study Abroad"
            fill
            sizes="(max-width: 640px) 128px, 256px"
            className="object-contain"
            priority
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 2xl:flex">
          {headerNavigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded px-1 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  active ? "text-blue-950" : "text-slate-700 hover:text-blue-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex whitespace-nowrap rounded-full bg-amber-500 px-2 py-2.5 text-xs font-semibold text-blue-950 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 sm:px-4 sm:text-sm"
          >
            Book a Consultation
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 2xl:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" className="text-2xl leading-none">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        className="border-t border-slate-200 bg-white px-4 py-3 2xl:hidden"
      >
        <ul className="mx-auto grid max-w-7xl gap-1 sm:grid-cols-2">
          {headerNavigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    active ? "bg-blue-50 text-blue-950" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
