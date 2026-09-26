import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { scholarshipGuidance, universitySelectionCriteria } from "@/data/site-content";

export default function ScholarshipsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Scholarships and funding guidance"
          description="Funding decisions should be informed and realistic. We help students assess relevant opportunities and understand how they fit into the wider study plan."
          primaryLink={{ href: "/contact", label: "Ask about funding" }}
          secondaryLink={{ href: "/universities", label: "View university guidance" }}
        />

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading
                eyebrow="Funding guidance"
                title="Scholarships can be relevant, but they require careful planning."
              />
              <p className="mt-6 text-base leading-8 text-[#465d7a]">
                Scholarship decisions are not only about eligibility. They depend on deadlines, documentation,
                destination requirements, academic profile, and how the funding supports the wider admission plan.
              </p>
            </div>
            <div className="rounded-3xl border border-[#dfe7f0] bg-[#f7fafd] p-6">
              <h3 className="text-xl font-semibold text-[#0f1f38]">What we help with</h3>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-[#465d7a]">
                {scholarshipGuidance.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#dfeefb] text-[10px] font-semibold text-[#123a5d]">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f8fd] py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="University selection"
              title="Strong funding decisions start with the right academic fit."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {universitySelectionCriteria.map((item) => (
                <div key={item} className="rounded-3xl border border-[#dfe7f0] bg-white p-6">
                  <div className="mb-4 h-10 w-10 rounded-full bg-[#dfeefb]" />
                  <p className="text-base font-medium text-[#0f1f38]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
