import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import {
  coreValues,
  destinations,
  faqItems,
  howItWorks,
  journeySteps,
  reasons,
  services,
  studyFields,
  studyLevels,
} from "@/data/site-content";

export function HomePage() {
  return (
    <div>
      <main>
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#2f6fb8]">
                Study abroad with clarity
              </p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-[#0f1f38] md:text-5xl lg:text-[4rem] lg:leading-[1.05]">
                Shape your future through the right study path.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#465d7a]">
                Intellecta helps students explore international study opportunities with realistic guidance,
                informed decisions, and support at every stage of the application journey.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0d2d4f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#163f69]"
                >
                  Book a consultation
                </Link>
                <Link
                  href="/destinations"
                  className="inline-flex items-center justify-center rounded-full border border-[#cdd9e6] bg-white px-6 py-3 text-sm font-semibold text-[#123a5d] transition-colors hover:border-[#9bb7d6] hover:bg-[#f4f8fd]"
                >
                  Explore destinations
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-[#e3eaf3] pt-6 text-sm text-[#465d7a]">
                <span>Student counseling</span>
                <span>Application support</span>
                <span>Visa preparation</span>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-8 rounded-full border border-[#dfe7f0] bg-[#f4f8fd]" />
              <div className="relative w-full max-w-xl rounded-4xl border border-[#dfe7f0] bg-white p-4 shadow-[0_20px_60px_rgba(17,39,67,0.08)]">
                <div className="overflow-hidden rounded-3xl border border-[#dfe7f0] bg-[#f6f9fc]">
                  <Image
                    src="/studyaboradlogo.jpeg"
                    alt="Intellecta Study Abroad brand logo"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-[#dfe7f0] bg-[#f4f8fd] p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f6fb8]">
                      Path
                    </div>
                    <div className="mt-2 text-lg font-semibold text-[#0f1f38]">Explore</div>
                  </div>
                  <div className="rounded-2xl border border-[#dfe7f0] bg-[#f4f8fd] p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f6fb8]">
                      Guidance
                    </div>
                    <div className="mt-2 text-lg font-semibold text-[#0f1f38]">Apply</div>
                  </div>
                  <div className="rounded-2xl border border-[#dfe7f0] bg-[#f4f8fd] p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f6fb8]">
                      Outcome
                    </div>
                    <div className="mt-2 text-lg font-semibold text-[#0f1f38]">Abroad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f8fd] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Why study abroad"
              title="Thoughtful guidance for students choosing the right academic future."
              description="Study abroad is not just a move; it is a major decision. We help students assess the right destination, program, and preparation strategy before they begin the process."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {reasons.map((reason) => (
                <div key={reason.title} className="rounded-3xl border border-[#dfe7f0] bg-white p-6 shadow-sm">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#dfeefb] text-lg font-semibold text-[#123a5d]">
                    {reason.title.charAt(0)}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0f1f38]">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#465d7a]">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Study destinations"
              title="Choose a destination based on fit, goals, and practical planning."
              description="Every destination brings different academic strengths, costs, and study experiences. We guide students through those differences with a realistic lens."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {destinations.map((destination) => (
                <article key={destination.name} className="rounded-3xl border border-[#dfe7f0] bg-[#f7fafd] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f6fb8]">{destination.region}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#0f1f38]">{destination.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#465d7a]">{destination.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f4f8fd] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Study levels"
              title="Study pathways designed around each stage of academic progress."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {studyLevels.map((level) => (
                <div key={level.title} className="rounded-3xl border border-[#dfe7f0] bg-white p-6">
                  <div className="mb-4 h-10 w-10 rounded-full bg-[#dfeefb]" />
                  <h3 className="text-xl font-semibold text-[#0f1f38]">{level.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#465d7a]">{level.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Fields of study"
              title="Academic options across multiple disciplines and career interests."
            />
            <div className="mt-10 flex flex-wrap gap-3">
              {studyFields.map((field) => (
                <span
                  key={field}
                  className="rounded-full border border-[#dfe7f0] bg-[#f7fafd] px-4 py-2 text-sm font-medium text-[#1d3c5d]"
                >
                  {field}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f4f8fd] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Services"
              title="Support across every step of the international study journey."
              description="The work is practical and structured, from initial exploration to final departure planning."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="rounded-3xl border border-[#dfe7f0] bg-white p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#dfeefb] text-sm font-semibold text-[#123a5d]">
                    {service.title.charAt(0)}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0f1f38]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#465d7a]">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="How it works"
              title="A straightforward process from first conversation to final preparation."
            />
            <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {howItWorks.map((step, index) => (
                <div key={step.title} className="relative rounded-3xl border border-[#dfe7f0] bg-[#f7fafd] p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0d2d4f] text-sm font-semibold text-white">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0f1f38]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#465d7a]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f4f8fd] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Why Intellecta"
              title="Professional guidance grounded in realistic planning."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {coreValues.map((value) => (
                <div key={value.title} className="rounded-3xl border border-[#dfe7f0] bg-white p-6">
                  <h3 className="text-xl font-semibold text-[#0f1f38]">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#465d7a]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="rounded-4xl border border-[#dfe7f0] bg-[#f7fafd] px-6 py-10 md:px-10">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2f6fb8]">
                    Student journey
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0f1f38] md:text-4xl">
                    A clear path to studying abroad.
                  </h2>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {journeySteps.map((step) => (
                      <span
                        key={step}
                        className="rounded-full border border-[#dfe7f0] bg-white px-3 py-2 text-sm font-medium text-[#1d3c5d]"
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-[#dfe7f0] bg-white p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f6fb8]">
                    Guidance priorities
                  </p>
                  <ul className="mt-5 space-y-4 text-sm leading-7 text-[#465d7a]">
                    <li>Accurate course and destination matching</li>
                    <li>Document readiness and application flow</li>
                    <li>Scholarship and admission planning</li>
                    <li>Visa preparation and pre-departure guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions students ask before they begin."
              align="center"
            />
            <div className="mt-10 space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-2xl border border-[#dfe7f0] bg-[#f7fafd] p-5">
                  <h3 className="text-lg font-semibold text-[#0f1f38]">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#465d7a]">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0f1f38] py-16 text-white md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8bb7ea]">
                  Start your application
                </p>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
                  Discuss your study goals and plan your next step with confidence.
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0d2d4f] transition-colors hover:bg-[#ebf2fb]"
              >
                Book a consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
