import Image from "next/image";
import Link from "next/link";
import {
  brandName,
  footerDisclaimer,
  primaryNavigation,
  secondaryNavigation,
  tagline,
} from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" aria-label={`${brandName} home`}>
            <Image
              src="/studyaboradlogo.jpeg"
              alt={brandName}
              width={300}
              height={80}
              className="h-16 w-auto rounded bg-white object-contain"
            />
          </Link>
          <p className="mt-4 max-w-sm text-lg font-semibold">{brandName}</p>
          <p className="mt-2 text-sm leading-6 text-blue-100">{tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-300">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-blue-100">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="mt-4 space-y-3 text-sm text-blue-100">
            {secondaryNavigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* TODO(owner): Add confirmed social media links, contact details, privacy policy, and terms of use. */}
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-4 py-5 text-sm leading-6 text-blue-100 sm:px-6 lg:px-8">
          {footerDisclaimer}
        </p>
      </div>
    </footer>
  );
}
