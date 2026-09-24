import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Destinations", href: "/destinations" },
  { label: "Services", href: "/services" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Universities", href: "/universities" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dfe7f0] bg-[#0f1f38] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <div className="text-2xl font-semibold tracking-tight">Intellecta</div>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#dfeaf7]">
            Study-abroad guidance for students who want clear direction, realistic planning,
            and support from first shortlist to final visa preparation.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8bb7ea]">
            Explore
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-[#dfeaf7]">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8bb7ea]">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-[#dfeaf7]">
            <li>hello@intellecta-studyabroad.com</li>
            <li>+1 (000) 000-0000</li>
            <li>Mon to Sat, 9:00 AM to 6:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-sm text-[#dfeaf7] md:px-6 lg:px-8">
          <span>© 2026 Intellecta Study Abroad</span>
          <span>Clear guidance, practical support.</span>
        </div>
      </div>
    </footer>
  );
}
