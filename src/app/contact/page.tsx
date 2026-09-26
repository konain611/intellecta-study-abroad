import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Book a consultation"
          description="Speak with an advisor about your study goals, destination preferences, and the next practical steps in your journey."
          primaryLink={{ href: "/services", label: "See services" }}
          secondaryLink={{ href: "/about", label: "Learn about us" }}
        />

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl border border-[#dfe7f0] bg-[#f4f8fd] p-6">
              <h2 className="text-2xl font-semibold text-[#0f1f38]">Contact details</h2>
              <ul className="mt-6 space-y-5 text-sm leading-7 text-[#203a59]">
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#2f6fb8]">Email</span>
                  info.intellectainternational@gmail.com
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#2f6fb8]">Phone</span>
                  +1 (000) 000-0000
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#2f6fb8]">Hours</span>
                  Monday to Saturday, 9:00 AM to 6:00 PM
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#dfe7f0] bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-semibold text-[#0f1f38]">Send an inquiry</h2>
              <form className="mt-6 grid gap-5 md:grid-cols-2">
                <label className="block text-sm font-medium text-[#203a59]">
                  Full name
                  <input
                    type="text"
                    className="mt-2 w-full rounded-2xl border border-[#dfe7f0] bg-[#f7fafd] px-4 py-3 text-base text-[#0f1f38] outline-none ring-0 placeholder:text-[#7a8ca5]"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm font-medium text-[#203a59]">
                  Email address
                  <input
                    type="email"
                    className="mt-2 w-full rounded-2xl border border-[#dfe7f0] bg-[#f7fafd] px-4 py-3 text-base text-[#0f1f38] outline-none ring-0 placeholder:text-[#7a8ca5]"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block text-sm font-medium text-[#203a59] md:col-span-2">
                  Study interest
                  <input
                    type="text"
                    className="mt-2 w-full rounded-2xl border border-[#dfe7f0] bg-[#f7fafd] px-4 py-3 text-base text-[#0f1f38] outline-none ring-0 placeholder:text-[#7a8ca5]"
                    placeholder="Undergraduate, postgraduate, destination, field of study"
                  />
                </label>
                <label className="block text-sm font-medium text-[#203a59] md:col-span-2">
                  Message
                  <textarea
                    rows={5}
                    className="mt-2 w-full rounded-2xl border border-[#dfe7f0] bg-[#f7fafd] px-4 py-3 text-base text-[#0f1f38] outline-none ring-0 placeholder:text-[#7a8ca5]"
                    placeholder="Tell us about your academic goals and where you need guidance."
                  />
                </label>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#0d2d4f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#163f69]"
                  >
                    Send inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
