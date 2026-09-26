import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const values = [
  {
    title: "Student-centered advice",
    description:
      "We focus on long-term academic fit and realistic planning, rather than pressure-driven decisions.",
  },
  {
    title: "Structured support",
    description:
      "Applications, documents, and follow-up steps are organized so students know what comes next and why it matters.",
  },
  {
    title: "Practical decision-making",
    description:
      "We help students weigh destination, program, costs, and academic goals in a balanced, informed way.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="About Intellecta"
          description="Intellecta is built around clear study-abroad guidance for students who want a realistic and well-informed path toward international education."
          primaryLink={{ href: "/contact", label: "Talk to an advisor" }}
          secondaryLink={{ href: "/services", label: "View services" }}
        />

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <SectionHeading
                eyebrow="Our approach"
                title="Guidance that is clear, realistic, and focused on fit."
              />
              <p className="mt-6 text-lg leading-8 text-[#465d7a]">
                Studying abroad is a major academic and personal decision. We work with students to understand
                their goals, define suitable options, and build a plan that matches their profile without unnecessary
                complexity.
              </p>
              <p className="mt-5 text-base leading-7 text-[#465d7a]">
                From choosing a destination to preparing application documents, our role is to reduce uncertainty,
                keep communication practical, and support students with the steps they need to move forward with
                confidence.
              </p>
            </div>
            <div className="rounded-3xl border border-[#dfe7f0] bg-[#f4f8fd] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f6fb8]">What we do</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-[#203a59]">
                <li>Help students understand academic and destination fit</li>
                <li>Guide program and university selection</li>
                <li>Support applications, documents, and timelines</li>
                <li>Prepare students for admission and visa steps</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f8fd] py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Why students choose us"
              title="A steady, informed process from first conversation to final preparation."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="rounded-3xl border border-[#dfe7f0] bg-white p-6">
                  <h3 className="text-xl font-semibold text-[#0f1f38]">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#465d7a]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="flex flex-col gap-6 rounded-4xl border border-[#dfe7f0] bg-[#0f1f38] p-8 text-white md:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8bb7ea]">Next step</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Start with a clear conversation about the right study path.
              </h2>
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
