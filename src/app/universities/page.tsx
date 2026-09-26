import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const selectionPoints = [
  {
    title: "Academic fit",
    description: "The course, teaching style, and institutional strengths should align with the student’s background and ambitions.",
  },
  {
    title: "Entry requirements",
    description: "University criteria vary significantly, so the application strategy needs to be realistic and well timed.",
  },
  {
    title: "Student support",
    description: "Support systems and practical consideration matter when students are planning a move to a new country.",
  },
  {
    title: "Long-term direction",
    description: "The right institution should support both immediate study needs and future academic or career direction.",
  },
];

export default function UniversitiesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="University guidance"
          description="Selecting the right university is about academic fit, realistic readiness, and a clear understanding of what the student wants from the study experience."
          primaryLink={{ href: "/contact", label: "Discuss options" }}
          secondaryLink={{ href: "/destinations", label: "See destinations" }}
        />

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Selection process"
            title="A measured approach to identifying suitable universities."
            description="We review each student’s profile, intended study field, and destination priorities to identify institutions with the best fit."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {selectionPoints.map((point) => (
              <div key={point.title} className="rounded-3xl border border-[#dfe7f0] bg-[#f7fafd] p-6">
                <h2 className="text-xl font-semibold text-[#0f1f38]">{point.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#465d7a]">{point.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f4f8fd] py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Application readiness"
              title="University choice should support your application strategy."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-[#dfe7f0] bg-white p-6">
                <h3 className="text-xl font-semibold text-[#0f1f38]">Before applying</h3>
                <p className="mt-3 text-sm leading-7 text-[#465d7a]">We review requirements, deadlines, and whether the shortlisted institutions match the student’s academic profile and expected outcome.</p>
              </div>
              <div className="rounded-3xl border border-[#dfe7f0] bg-white p-6">
                <h3 className="text-xl font-semibold text-[#0f1f38]">During the process</h3>
                <p className="mt-3 text-sm leading-7 text-[#465d7a]">We help maintain structure, manage submission priorities, and prepare follow-up steps after applications are sent.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
