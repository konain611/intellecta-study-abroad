import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { destinations } from "@/data/site-content";

export default function DestinationsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Study destinations"
          description="Explore destinations based on academic focus, student experience, and long-term goals."
          primaryLink={{ href: "/contact", label: "Speak with an advisor" }}
          secondaryLink={{ href: "/services", label: "Explore services" }}
        />

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Popular destinations"
            title="Choose a study environment that suits your academic direction."
            description="Different countries offer different strengths. We help students compare their options based on course quality, cost, support framework, and personal priorities."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((destination) => (
              <article key={destination.name} className="rounded-3xl border border-[#dfe7f0] bg-[#f7fafd] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f6fb8]">{destination.region}</p>
                <h2 className="mt-3 text-2xl font-semibold text-[#0f1f38]">{destination.name}</h2>
                <p className="mt-3 text-sm leading-7 text-[#465d7a]">{destination.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#f4f8fd] py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="What to consider"
              title="Destination choice should reflect more than location alone."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-3xl border border-[#dfe7f0] bg-white p-6">
                <h3 className="text-xl font-semibold text-[#0f1f38]">Academic strengths</h3>
                <p className="mt-3 text-sm leading-7 text-[#465d7a]">The quality, structure, and recognition of the course or institution matter most.</p>
              </div>
              <div className="rounded-3xl border border-[#dfe7f0] bg-white p-6">
                <h3 className="text-xl font-semibold text-[#0f1f38]">Cost and planning</h3>
                <p className="mt-3 text-sm leading-7 text-[#465d7a]">Students should understand tuition expectations, living costs, and financial planning realistically.</p>
              </div>
              <div className="rounded-3xl border border-[#dfe7f0] bg-white p-6">
                <h3 className="text-xl font-semibold text-[#0f1f38]">Support systems</h3>
                <p className="mt-3 text-sm leading-7 text-[#465d7a]">The destination should align with the student’s support needs and ease of transition.</p>
              </div>
              <div className="rounded-3xl border border-[#dfe7f0] bg-white p-6">
                <h3 className="text-xl font-semibold text-[#0f1f38]">Future direction</h3>
                <p className="mt-3 text-sm leading-7 text-[#465d7a]">The best choice is the one that matches the student’s longer-term career or academic goals.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
