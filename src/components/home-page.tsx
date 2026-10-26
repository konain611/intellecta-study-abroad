import Link from "next/link";
import {
  coreServices,
  homepageOptions,
  homeJourneySteps,
  reasons,
  tagline,
} from "@/data/site-content";
import {
  BulletList,
  Container,
  ContentCard,
  ConsultationLink,
  SectionTitle,
  SiteLayout,
} from "@/components/site-layout";

export function HomePage() {
  return (
    <SiteLayout>
      <section className="overflow-hidden bg-gradient-to-br from-white via-white to-blue-50 py-16 md:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl md:text-6xl">
              {tagline}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Your international education journey begins with the right plan. At Intellecta International, we help students explore study options, identify suitable universities and courses, and understand the steps involved in applying overseas. Whether you are considering the UK, USA, Canada, Australia, Europe, Turkey, Dubai (UAE), or Malaysia, our team can help you make informed decisions based on your academic background, interests, budget, and long-term goals.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              From course selection and application preparation to scholarship research, visa-document guidance, and pre-departure planning, we aim to make a complex process clearer and more manageable.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ConsultationLink />
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center rounded-full border border-blue-900 px-6 py-3 text-sm font-semibold text-blue-950 transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                Explore Study Destinations
              </Link>
            </div>
            <Link
              href="/contact#enquiry"
              className="mt-5 inline-flex rounded text-sm font-semibold text-blue-900 underline decoration-amber-500 decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Start Your Application
            </Link>
          </div>
          <div aria-hidden="true" className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-full border border-blue-100 bg-white p-8 shadow-xl shadow-blue-950/5">
            <div className="absolute inset-8 rounded-full border border-dashed border-amber-300" />
            <div className="relative h-40 w-40 rounded-full bg-gradient-to-br from-blue-950 to-blue-700 shadow-lg" />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <SectionTitle>Explore Your Study Options</SectionTitle>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">
            Every student has a different story, and the right destination depends on more than a university ranking. Explore countries, courses, entry requirements, tuition ranges, scholarship possibilities, and student-life considerations before deciding which path is right for you.
          </p>
          <BulletList items={homepageOptions} />
          <Link href="/course-search" className="mt-7 inline-flex font-semibold text-blue-900 underline decoration-amber-500 underline-offset-4">
            Help Me Find a Course
          </Link>
        </Container>
      </section>

      <section className="bg-blue-50 py-16 md:py-24">
        <Container>
          <SectionTitle>Our Core Services</SectionTitle>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreServices.map((service) => (
              <ContentCard key={service.title}>
                <p className="leading-7 text-slate-700">
                  <strong className="font-semibold text-blue-950">{service.title}</strong> — {service.description}
                </p>
              </ContentCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <SectionTitle>Why Choose Intellecta International?</SectionTitle>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <ContentCard key={reason.title}>
                <h3 className="text-lg font-semibold text-blue-950">{reason.title}:</h3>
                <p className="mt-3 leading-7 text-slate-700">{reason.description}</p>
              </ContentCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-blue-50 py-16 md:py-24">
        <Container>
          <SectionTitle>Your Journey, Step by Step</SectionTitle>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {homeJourneySteps.map((step, index) => (
              <li key={step.title}>
                <ContentCard className="h-full">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 font-bold text-blue-950">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-blue-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-700">— {step.description}</p>
                </ContentCard>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-blue-950 py-14 text-white">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h2 className="max-w-3xl text-3xl font-bold">
            Ready to explore your options? Book a consultation with Intellecta International.
          </h2>
          <ConsultationLink />
        </Container>
      </section>
    </SiteLayout>
  );
}
