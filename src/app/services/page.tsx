import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services } from "@/data/site-content";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Services"
          description="A focused range of study-abroad services designed to simplify the application journey and reduce uncertainty."
          primaryLink={{ href: "/contact", label: "Request guidance" }}
          secondaryLink={{ href: "/scholarships", label: "Scholarship guidance" }}
        />

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core services"
            title="Support that covers the full student journey."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-[#dfe7f0] bg-[#f7fafd] p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#dfeefb] text-sm font-semibold text-[#123a5d]">
                  {service.title.charAt(0)}
                </div>
                <h2 className="text-xl font-semibold text-[#0f1f38]">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#465d7a]">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#f4f8fd] py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <SectionHeading
                  eyebrow="How we support students"
                  title="Clear action at each stage of the process."
                />
              </div>
              <div className="space-y-5">
                <div className="rounded-2xl border border-[#dfe7f0] bg-white p-5">
                  <h3 className="text-lg font-semibold text-[#0f1f38]">Initial direction</h3>
                  <p className="mt-2 text-sm leading-7 text-[#465d7a]">We begin by understanding academic background, preferred destinations, and likely next steps.</p>
                </div>
                <div className="rounded-2xl border border-[#dfe7f0] bg-white p-5">
                  <h3 className="text-lg font-semibold text-[#0f1f38]">Application planning</h3>
                  <p className="mt-2 text-sm leading-7 text-[#465d7a]">We coordinate the sequencing of applications, document preparation, and institutional requirements.</p>
                </div>
                <div className="rounded-2xl border border-[#dfe7f0] bg-white p-5">
                  <h3 className="text-lg font-semibold text-[#0f1f38]">Visa and departure</h3>
                  <p className="mt-2 text-sm leading-7 text-[#465d7a]">When admission is secured, we help prepare for visa stages and the practical transition to study abroad.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="flex flex-col gap-6 rounded-4xl border border-[#dfe7f0] bg-[#0f1f38] p-8 text-white md:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8bb7ea]">Need support?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Plan your next steps with a clear advisory process.</h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0d2d4f] transition-colors hover:bg-[#edf4ff]"
            >
              Book a consultation
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
