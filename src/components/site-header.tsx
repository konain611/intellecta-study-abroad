import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Destinations", href: "/destinations" },
  { label: "Services", href: "/services" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Universities", href: "/universities" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe7f0] bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Intellecta Study Abroad home">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#dfe7f0] bg-white shadow-sm">
            <Image
              src="/studyaboradlogo.jpeg"
              alt="Intellecta Study Abroad logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <div className="text-xl font-semibold tracking-tight text-[#0f1f38]">
              Intellecta
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#2f6fb8]">
              Study Abroad
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#203a59] lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-[#0d2d4f]">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-[#0d2d4f] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#163f69]"
        >
          Book a consultation
        </Link>
      </div>
    </header>
  );
}
