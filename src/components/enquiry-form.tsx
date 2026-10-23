"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { enquiryDestinations } from "@/data/site-content";

const fieldClassName =
  "mt-2 block w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500";

export function EnquiryForm({ defaultDestination }: { defaultDestination?: string }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      setStatus("error");
      return;
    }

    // TODO(owner): Connect this form to the approved lead-management process.
    setStatus("success");
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-medium text-slate-800">
        Full name
        <input id="full-name" name="fullName" autoComplete="name" required className={fieldClassName} />
      </label>
      <label className="text-sm font-medium text-slate-800">
        Email address
        <input id="email" name="email" type="email" autoComplete="email" required className={fieldClassName} />
      </label>
      <label className="text-sm font-medium text-slate-800">
        Phone / WhatsApp number
        <input id="phone" name="phone" type="tel" autoComplete="tel" required className={fieldClassName} />
      </label>
      <label className="text-sm font-medium text-slate-800">
        Current city and country
        <input id="location" name="location" autoComplete="country-name" className={fieldClassName} />
      </label>
      <label className="text-sm font-medium text-slate-800">
        Highest completed qualification
        <input id="qualification" name="qualification" className={fieldClassName} />
      </label>
      <label className="text-sm font-medium text-slate-800">
        Current or most recent grades / GPA
        <input id="grades" name="grades" className={fieldClassName} />
      </label>
      <label className="text-sm font-medium text-slate-800 sm:col-span-2">
        Preferred study destination(s)
        <select
          id="destinations"
          name="destinations"
          multiple
          required
          defaultValue={defaultDestination ? [defaultDestination] : []}
          className={`${fieldClassName} min-h-40`}
        >
          {enquiryDestinations.map((destination) => (
            <option key={destination.value} value={destination.value}>{destination.label}</option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium text-slate-800">
        Preferred study level
        <select id="study-level" name="studyLevel" className={fieldClassName} defaultValue="">
          <option value="" disabled></option>
          <option>Foundation</option>
          <option>Pathway</option>
          <option>Undergraduate</option>
          <option>Postgraduate</option>
          <option>Other</option>
        </select>
      </label>
      <label className="text-sm font-medium text-slate-800">
        Intended subject or course
        <input id="subject" name="subject" className={fieldClassName} />
      </label>
      <label className="text-sm font-medium text-slate-800">
        Preferred intake
        <input id="intake" name="intake" className={fieldClassName} />
      </label>
      <label className="text-sm font-medium text-slate-800">
        Approximate budget range (optional)
        <input id="budget" name="budget" className={fieldClassName} />
      </label>
      <label className="text-sm font-medium text-slate-800 sm:col-span-2">
        English-language test status (if applicable)
        <input id="english-test" name="englishTest" className={fieldClassName} />
      </label>
      <label className="text-sm font-medium text-slate-800 sm:col-span-2">
        Message or questions
        <textarea id="message" name="message" rows={5} className={fieldClassName} />
      </label>
      <label className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:col-span-2">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-slate-300 accent-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        />
        <span>
          I consent to being contacted about this enquiry and acknowledge the{" "}
          <Link href="/privacy-policy" className="font-semibold text-blue-900 underline underline-offset-2">
            privacy notice
          </Link>
          .
        </span>
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex rounded-full bg-amber-500 px-7 py-3 font-semibold text-blue-950 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
        >
          Submit Enquiry
        </button>
        {status === "success" ? (
          <p role="status" className="mt-4 rounded-md bg-green-50 p-4 text-sm leading-6 text-green-900">
            Your enquiry details are ready for submission.
          </p>
        ) : null}
        {status === "error" ? (
          <p role="alert" className="mt-4 rounded-md bg-red-50 p-4 text-sm leading-6 text-red-900">
            Please complete the required fields before submitting your enquiry.
          </p>
        ) : null}
      </div>
    </form>
  );
}
