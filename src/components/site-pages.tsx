import Link from "next/link";
import Image from "next/image";
import {
  aboutContent,
  blogTopics,
  counsellors,
  courseSearchFactors,
  destinationDisclaimer,
  destinations,
  eventGuidance,
  faqItems,
  scholarshipReviewPoints,
  serviceSections,
  storyFormats,
  type Counsellor,
  type Destination,
} from "@/data/site-content";
import {
  BulletList,
  Container,
  ConsultationLink,
  ContentCard,
  PageTitle,
  SectionTitle,
  SiteLayout,
} from "@/components/site-layout";

function TextPageIntro({ children }: { children: string }) {
  return <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">{children}</p>;
}

export function AboutPageContent() {
  return (
    <SiteLayout>
      <section className="bg-blue-50 py-16 md:py-20">
        <Container>
          <PageTitle>About Us</PageTitle>
          <div className="mt-8 max-w-4xl space-y-5 text-lg leading-8 text-slate-700">
            {aboutContent.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container className="grid gap-10 md:grid-cols-2">
          <ContentCard>
            <h2 className="text-2xl font-bold text-blue-950">Our Mission</h2>
            <p className="mt-4 leading-8 text-slate-700">{aboutContent.mission}</p>
          </ContentCard>
          <ContentCard>
            <h2 className="text-2xl font-bold text-blue-950">Our Vision</h2>
            <p className="mt-4 leading-8 text-slate-700">{aboutContent.vision}</p>
          </ContentCard>
        </Container>
      </section>
      <section className="bg-blue-50 py-16 md:py-20">
        <Container>
          <SectionTitle>Our Values</SectionTitle>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aboutContent.values.map((value) => (
              <ContentCard key={value.title}>
                <h3 className="text-xl font-semibold text-blue-950">{value.title}:</h3>
                <p className="mt-3 leading-7 text-slate-700">{value.description}</p>
              </ContentCard>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container>
          <SectionTitle>Director&apos;s Message</SectionTitle>
          <blockquote className="mt-7 max-w-4xl rounded-md border-l-4 border-amber-400 bg-blue-50 p-6 text-lg leading-8 text-slate-700">
            {aboutContent.directorMessage}
          </blockquote>
          {/* TODO(owner): Have the Director approve this message and add their name and designation if desired. */}
        </Container>
      </section>
    </SiteLayout>
  );
}

export function ServicesPageContent() {
  return (
    <SiteLayout>
      <section className="bg-blue-50 py-16 md:py-20">
        <Container>
          <PageTitle>Our Services</PageTitle>
          <TextPageIntro>
            From your first enquiry to your pre-departure preparation, Intellecta International can help you understand the key stages of applying to study overseas. The exact support available will depend on your destination, institution, course, and individual circumstances.
          </TextPageIntro>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container className="space-y-7">
          {/* TODO(owner): List IELTS, TOEFL, PTE, Oxford Test of English, LanguageCert, or other tests only where relevant to the destination and institution. */}
          {/* TODO(owner): Include only training, internship, mentoring, or test-preparation programs that Intellecta actually offers. */}
          {serviceSections.map((service) => (
            <ContentCard key={service.title}>
              <h2 className="text-2xl font-bold text-blue-950">{service.title}</h2>
              <p className="mt-4 leading-8 text-slate-700">{service.description}</p>
              {service.bullets.length > 0 ? <BulletList items={service.bullets} /> : null}
              {service.notice ? (
                <p className="mt-5 rounded-md border border-amber-300 bg-amber-50 p-4 font-medium leading-7 text-blue-950">
                  {service.notice}
                </p>
              ) : null}
            </ContentCard>
          ))}
        </Container>
      </section>
    </SiteLayout>
  );
}

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <ContentCard className="flex h-full flex-col">
      <h2 className="text-2xl font-bold text-blue-950">
        <Link
          href={`/destinations/${destination.slug}`}
          className="rounded-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          {destination.name}
        </Link>
      </h2>
      {destination.introduction ? (
        <p className="mt-4 leading-7 text-slate-700">{destination.introduction}</p>
      ) : null}
      <BulletList items={destination.bullets} />
      <Link
        href={`/contact?destination=${destination.slug}`}
        className="mt-6 inline-flex self-start rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-blue-950 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
      >
        {destination.cta}
      </Link>
    </ContentCard>
  );
}

export function DestinationsPageContent() {
  return (
    <SiteLayout>
      <section className="bg-blue-50 py-16 md:py-20">
        <Container>
          <PageTitle>Study Destinations</PageTitle>
          <TextPageIntro>
            Every destination has its own education system, entry criteria, costs, and visa rules. Explore the overview below, then check the official university and government sources for current information. Availability, fees, work rights, scholarships, and visa conditions vary and may change.
          </TextPageIntro>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </Container>
      </section>
      <section className="bg-blue-50 py-12">
        <Container>
          <p className="rounded-md border border-blue-200 bg-white p-6 leading-7 text-slate-700">
            {destinationDisclaimer}
          </p>
        </Container>
      </section>
    </SiteLayout>
  );
}

export function DestinationDetailPageContent({ destination }: { destination: Destination }) {
  return (
    <SiteLayout>
      <section className="bg-blue-50 py-16 md:py-20">
        <Container>
          <PageTitle>{destination.name}</PageTitle>
          {destination.introduction ? <TextPageIntro>{destination.introduction}</TextPageIntro> : null}
          <div className="mt-8 max-w-4xl rounded-md bg-white p-6 shadow-sm">
            <BulletList items={destination.bullets} />
            <Link
              href={`/contact?destination=${destination.slug}`}
              className="mt-6 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-blue-950 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
            >
              {destination.cta}
            </Link>
          </div>
        </Container>
      </section>
      <section className="py-12">
        <Container>
          <p className="rounded-md border border-blue-200 bg-blue-50 p-6 leading-7 text-slate-700">
            {destinationDisclaimer}
          </p>
        </Container>
      </section>
    </SiteLayout>
  );
}

export function ScholarshipsPageContent() {
  return (
    <SiteLayout>
      <section className="bg-blue-50 py-16 md:py-20">
        <Container>
          <PageTitle>Scholarships and Funding</PageTitle>
          <TextPageIntro>
            A scholarship can make international study more manageable, but each award has its own eligibility criteria, application process, and deadline. Intellecta International can help students research potential opportunities and understand the documents they may need.
          </TextPageIntro>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container>
          <SectionTitle>What Students Should Review</SectionTitle>
          <div className="mt-7 max-w-4xl">
            <BulletList items={scholarshipReviewPoints} />
          </div>
          {/* TODO(owner): Do not publish fixed scholarship percentages, guaranteed awards, or deadlines unless they have been checked against current official information. */}
          <div className="mt-9">
            <ConsultationLink>Ask us to help you explore scholarship options.</ConsultationLink>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}

export function CourseSearchPageContent() {
  return (
    <SiteLayout>
      <section className="bg-blue-50 py-16 md:py-20">
        <Container>
          <PageTitle>Study Options and Course Search</PageTitle>
          <TextPageIntro>
            Not sure which course is right for you? Start with your interests, previous studies, preferred career direction, and budget. Our team can help you narrow down options and identify the information you should compare before applying.
          </TextPageIntro>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <BulletList
              items={courseSearchFactors.map((factor) =>
                factor.details ? `${factor.label}: ${factor.details}` : factor.label,
              )}
            />
          </div>
          <div className="rounded-md border border-slate-200 bg-blue-50 p-6">
            {/* TODO(owner): A live course-search tool requires a reliable, up-to-date course database. */}
            <div className="grid gap-4 sm:grid-cols-2">
              {["Destination", "Study Level", "Subject", "Intake", "Budget Range"].map((label) => (
                <label key={label} htmlFor={`filter-${label}`} className="text-sm font-medium text-blue-950">
                  {label}
                  <input
                    id={`filter-${label}`}
                    disabled
                    aria-label={label}
                    className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white"
                  />
                </label>
              ))}
            </div>
            <Link
              href="/contact#enquiry"
              className="mt-6 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-blue-950 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
            >
              Help Me Find a Course
            </Link>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}

export function StudentStoriesPageContent() {
  return (
    <SiteLayout>
      <section className="bg-blue-50 py-16 md:py-20">
        <Container>
          <PageTitle>Student Stories and Outcomes</PageTitle>
          <TextPageIntro>
            Real student experiences can help future applicants understand the process and feel better prepared. Use this section to share verified stories with the student&apos;s permission.
          </TextPageIntro>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container>
          <SectionTitle>Suggested content formats</SectionTitle>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {storyFormats.map((format) => (
              <ContentCard key={format.title}>
                <h2 className="text-xl font-semibold text-blue-950">{format.title}:</h2>
                <p className="mt-3 leading-7 text-slate-700">{format.description}</p>
              </ContentCard>
            ))}
          </div>
          {/* TODO(owner): Testimonials must be verified with the named students, with consent, before publishing; fictional stories must never be presented as real outcomes. */}
          <div aria-hidden="true" className="mt-8 min-h-24 rounded-md border border-dashed border-slate-300 bg-slate-50" />
        </Container>
      </section>
    </SiteLayout>
  );
}

export function EventsPageContent() {
  return (
    <SiteLayout>
      <section className="bg-blue-50 py-16 md:py-20">
        <Container>
          <PageTitle>University Partners and Events</PageTitle>
          <TextPageIntro>
            Give students opportunities to learn about institutions and their programs through verified university information, online sessions, education fairs, and visits by authorised representatives, where available.
          </TextPageIntro>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container>
          <BulletList items={eventGuidance} />
          {/* TODO(owner): Verify partnerships and logo permissions before publishing. */}
          <div id="upcoming-events" aria-hidden="true" className="mt-8 min-h-24 rounded-md border border-dashed border-slate-300 bg-slate-50" />
          <Link href="#upcoming-events" className="mt-7 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-blue-950 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2">
            View Upcoming Events
          </Link>
        </Container>
      </section>
    </SiteLayout>
  );
}

export function CounsellorCard({ counsellor }: { counsellor: Counsellor }) {
  return (
    <ContentCard>
      {counsellor.photo ? (
        <Image
          src={counsellor.photo}
          alt={`${counsellor.name} professional photo`}
          width={320}
          height={320}
          className="mb-5 aspect-square w-full rounded-md object-cover"
        />
      ) : null}
      <h2 className="text-xl font-semibold text-blue-950">{counsellor.name}</h2>
      <p className="mt-2 text-slate-700">{counsellor.jobTitle}</p>
      <p className="mt-3 leading-7 text-slate-700">{counsellor.education}</p>
      <p className="mt-3 text-sm text-slate-600">{counsellor.destinations.join(", ")}</p>
      {counsellor.languages ? (
        <p className="mt-3 text-sm text-slate-600">{counsellor.languages.join(", ")}</p>
      ) : null}
      <p className="mt-4 leading-7 text-slate-700">{counsellor.message}</p>
    </ContentCard>
  );
}

export function CounsellorsPageContent() {
  return (
    <SiteLayout>
      <section className="bg-blue-50 py-16 md:py-20">
        <Container>
          <PageTitle>Meet Our Counsellors</PageTitle>
          <TextPageIntro>
            Choosing a study destination can feel overwhelming. Introduce the people who help students navigate their options and applications.
          </TextPageIntro>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container>
          <SectionTitle>Suggested profile format for each counsellor</SectionTitle>
          <div className="mt-7 max-w-4xl">
            <BulletList items={counsellorProfileFormat} />
          </div>
          <p className="mt-7 font-medium leading-7 text-blue-950">
            Only publish accurate qualifications, experience, rankings, and professional claims that can be verified.
          </p>
          {/* TODO(owner): Add verified counsellor profiles with approved details and photos. */}
          {counsellors.length > 0 ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {counsellors.map((counsellor) => (
                <CounsellorCard key={counsellor.name} counsellor={counsellor} />
              ))}
            </div>
          ) : null}
        </Container>
      </section>
    </SiteLayout>
  );
}

export function FaqPageContent() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <SiteLayout>
      <section className="bg-blue-50 py-16 md:py-20">
        <Container>
          <PageTitle>Frequently Asked Questions</PageTitle>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container className="max-w-4xl space-y-4">
          {faqItems.map(({ question, answer }) => (
            <details key={question} className="group rounded-md border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-blue-950 marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
                {question}
                <span aria-hidden="true" className="float-right text-amber-700 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-7 text-slate-700">{answer}</p>
            </details>
          ))}
        </Container>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </SiteLayout>
  );
}

export function BlogPageContent() {
  return (
    <SiteLayout>
      <section className="bg-blue-50 py-16 md:py-20">
        <Container>
          <PageTitle>Blog and Student Resources</PageTitle>
          <TextPageIntro>
            A resource centre can help students and parents make informed decisions and improve the website&apos;s usefulness. Publish articles that are accurate, current, and reviewed before going live.
          </TextPageIntro>
        </Container>
      </section>
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogTopics.map((topic) => (
              <ContentCard key={topic.title}>
                <h2 className="text-xl font-semibold text-blue-950">{topic.title}:</h2>
                <p className="mt-3 leading-7 text-slate-700">{topic.description}</p>
              </ContentCard>
            ))}
          </div>
          {/* TODO(owner): Add accurate, current, reviewed resource articles before publishing. */}
          <div id="resources" aria-hidden="true" className="mt-8 min-h-24 rounded-md border border-dashed border-slate-300 bg-slate-50" />
          <Link href="#resources" className="mt-7 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-blue-950 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2">
            Explore More Student Resources
          </Link>
        </Container>
      </section>
    </SiteLayout>
  );
}

export function PolicyPlaceholderPage({ title }: { title: "Privacy Policy" | "Terms of Use" }) {
  return (
    <SiteLayout>
      <section className="min-h-[50vh] py-16 md:py-20">
        <Container>
          <PageTitle>{title}</PageTitle>
          {/* TODO(owner): Add approved {title.toLowerCase()} content before publishing. */}
        </Container>
      </section>
    </SiteLayout>
  );
}
