import Link from "next/link";

type PageHeroProps = {
  title: string;
  description: string;
  primaryLink?: { href: string; label: string };
  secondaryLink?: { href: string; label: string };
};

export function PageHero({
  title,
  description,
  primaryLink,
  secondaryLink,
}: PageHeroProps) {
  return (
    <section className="border-b border-[#dfe7f0] bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1.4fr_0.6fr] lg:px-8">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f6fb8]">
            Intellecta Study Abroad
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-[#0f1f38] md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#465d7a]">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryLink ? (
              <Link
                href={primaryLink.href}
                className="inline-flex items-center justify-center rounded-full bg-[#0d2d4f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#163f69]"
              >
                {primaryLink.label}
              </Link>
            ) : null}
            {secondaryLink ? (
              <Link
                href={secondaryLink.href}
                className="inline-flex items-center justify-center rounded-full border border-[#cdd9e6] bg-white px-6 py-3 text-sm font-semibold text-[#123a5d] transition-colors hover:border-[#9bb7d6] hover:bg-[#f4f8fd]"
              >
                {secondaryLink.label}
              </Link>
            ) : null}
          </div>
        </div>
        <div className="rounded-3xl border border-[#dfe7f0] bg-[#f4f8fd] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f6fb8]">
            Our guidance path
          </p>
          <ul className="mt-6 space-y-5 text-sm text-[#203a59]">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#dfeefb] text-xs font-semibold text-[#0d2d4f]">
                1
              </span>
              Explore options and academic fit
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#dfeefb] text-xs font-semibold text-[#0d2d4f]">
                2
              </span>
              Get guidance on programs and destinations
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#dfeefb] text-xs font-semibold text-[#0d2d4f]">
                3
              </span>
              Apply with accurate documentation
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#dfeefb] text-xs font-semibold text-[#0d2d4f]">
                4
              </span>
              Prepare for admission and visa steps
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
