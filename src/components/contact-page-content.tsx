import Link from "next/link";
import { contactDetails, contactResponse } from "@/data/site-content";
import { EnquiryForm } from "@/components/enquiry-form";
import { Container, PageTitle, SiteLayout } from "@/components/site-layout";

export function ContactPageContent({ defaultDestination }: { defaultDestination?: string }) {
  return (
    <SiteLayout>
      <section className="bg-blue-50 py-16 md:py-20">
        <Container>
          <PageTitle>Contact Us</PageTitle>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            Your international education journey starts with a conversation. Tell us a little about your plans, and our team can help you understand the next steps.
          </p>
        </Container>
      </section>
      <section className="py-14 md:py-16">
        <Container className="max-w-4xl space-y-8">
          <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-blue-950">Intellecta International Study Abroad</h2>
            <dl className="mt-6 space-y-5">
              {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <dt className="font-semibold text-blue-950">{detail.label}:</dt>
                  <dd className="mt-1 text-slate-700">{detail.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#enquiry" className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-blue-950 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700">
                Book a Consultation
              </Link>
              <Link href="#enquiry" className="rounded-full border border-blue-900 px-5 py-3 text-sm font-semibold text-blue-950 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
                Send an Enquiry
              </Link>
              <Link href="#enquiry" className="rounded-full border border-blue-900 px-5 py-3 text-sm font-semibold text-blue-950 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
                Contact Us
              </Link>
            </div>
            {/* TODO(owner): Use a specific response time only if the team can consistently meet it. */}
            <p className="mt-7 text-sm leading-6 text-slate-600">{contactResponse}</p>
          </div>

          <div id="enquiry" className="scroll-mt-28 rounded-md border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-blue-950">Start Your Study Abroad Journey</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Share your details and study preferences so our team can understand your goals and contact you about relevant next steps.
            </p>
            {/* TODO(owner): Publish a clear privacy policy explaining how enquiry information is collected, used, stored, and protected. Collect only information needed for the enquiry at this stage; do not request sensitive documents through an unsecured general form. */}
            <div className="mt-7">
              <EnquiryForm defaultDestination={defaultDestination} />
            </div>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
