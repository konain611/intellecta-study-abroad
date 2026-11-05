import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "@/components/social-icon";
import {
  brandName,
  footerDisclaimer,
  officeAddress,
  primaryNavigation,
  socialLinks,
  secondaryNavigation,
  tagline,
} from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="bg-red-700 text-white">
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
          <p className="mt-2 text-sm leading-6 text-red-50">{tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-300">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-red-50">
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
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-300">
            More
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-red-50">
            {secondaryNavigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wider text-amber-300">
            Visit our office
          </h2>
          <p className="mt-3 text-sm leading-6 text-red-50">{officeAddress}</p>
          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wider text-amber-300">
            Follow us
          </h2>
          <ul className="mt-3 flex flex-wrap gap-3 text-red-50">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon name={social.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-4 py-5 text-sm leading-6 text-red-50 sm:px-6 lg:px-8">
          {footerDisclaimer}
        </p>
      </div>
    </footer>
  );
}
