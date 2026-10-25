# Intellecta International Study Abroad: Website Implementation Instructions

> **Audience:** GitHub Copilot (agent mode) working inside an existing Next.js project.
> **Goal:** Build out every page/route of the Intellecta International Study Abroad website using the exact content in Part 2.

---

# PART 1: Working Rules (Read First)

## 1.1 Hard constraints

1. **Do NOT run any command.** No `npm`, `npx`, `yarn`, `pnpm`, `git`, `node`, build, lint, dev-server, install, or codegen commands. Only create and edit files in the codebase.
3. **Tailwind CSS only.** No CSS modules, styled-components, Sass, or inline `style={{}}` (except where Tailwind cannot express it). Global CSS is limited to the existing Tailwind directives and CSS variables already in the project.
4. **Content must match Part 2 exactly.** Every headline, paragraph, bullet, button label, FAQ question and answer, and CTA must appear word for word. Do not paraphrase, shorten, reorder, merge, or "improve" the copy. Do not invent new copy (no fake statistics, testimonials, university names, prices, or scholarship amounts).
5. **Work quietly and professionally.** Make the changes without long commentary. When finished, give a short summary (files created/changed, and any assumptions) and nothing more.

## 1.2 Before you write code

- Inspect the existing project first: the router in use (`app/` or `pages/`), the existing layout, header/navbar, footer, fonts, `tailwind.config.*`, global styles, and any existing components.
- **Reuse and extend** what exists (layout, navbar, footer, buttons, container components). Do not duplicate or break existing pages. If a route listed below already exists, update it rather than creating a second version.
- Match the existing code conventions (TypeScript vs JavaScript, file naming, import aliases such as `@/`, server vs client components).
- Preserve the existing brand look (colors, fonts, logo) if one is already defined. If none exists, define a tasteful palette inside the Tailwind config (see 1.4).

## 1.3 Routes to create (App Router shown; adapt to `pages/` if that is what the project uses)

| Route | Source section in Part 2 |
|---|---|
| `/` | 1. Homepage |
| `/about` | 2. About Us |
| `/services` | 3. Our Services |
| `/destinations` | 4. Study Destinations (overview of all destinations) |
| `/destinations/[slug]` | 4. Study Destinations (one page per country, same copy as the overview card for that country, plus the Destination Page Disclaimer) |
| `/scholarships` | 5. Scholarships and Funding |
| `/course-search` | 6. Study Options and Course Search |
| `/student-stories` | 7. Student Stories and Outcomes |
| `/events` | 8. University Partners and Events |
| `/counsellors` | 9. Meet Our Counsellors |
| `/faq` | 10. Frequently Asked Questions |
| `/blog` | 11. Blog and Student Resources |
| `/contact` | 12. Contact Us **and** 13. Online Enquiry Form (same page: contact details followed by the form) |
| Global footer | 14. Footer Content (rendered on every page) |

Destination slugs: `united-kingdom`, `united-states`, `canada`, `australia`, `europe`, `dubai-uae`, `malaysia`, `turkey`.

Use the section headings in Part 2 as the page `<h1>`/`<h2>` structure exactly as written.

## 1.4 Design and Tailwind guidance (your own additions)

- **Look and feel:** modern, trustworthy, education-focused. Clean white/light backgrounds, a deep navy or blue primary, a warm accent (amber/orange) for primary CTAs, generous whitespace, rounded cards (`rounded-2xl`), soft shadows, subtle hover transitions.
- **Palette:** if the project has none, extend `tailwind.config` with `brand` (primary), `accent`, and neutral shades, then use those tokens everywhere rather than hard-coded hex values.
- **Layout:** a reusable `Container` (`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`) and a reusable `Section` wrapper with consistent vertical padding (`py-16 md:py-24`).
- **Responsive:** mobile-first. Every page must work from 360px wide upward. Use `grid`, `flex`, and responsive prefixes (`sm:`, `md:`, `lg:`). Navbar collapses into a mobile menu.
- **Typography:** clear hierarchy (`text-4xl md:text-6xl font-bold` for hero, `text-3xl md:text-4xl` for section titles, `text-base md:text-lg text-slate-600` for body). Use the project's existing font (via `next/font` if already configured).
- **Buttons:** create shared `PrimaryButton` and `SecondaryButton` (or a single `Button` with variants). Primary = filled accent; secondary = outlined; text link variant for "Start Your Application".
- **Cards and lists:** services, destinations, steps, and values should use card grids. "Your Journey, Step by Step" should be a numbered stepper/timeline (1 to 6). FAQ should be an accessible accordion (use native `<details>/<summary>` or a small client component).
- **Accessibility:** semantic HTML (`header`, `nav`, `main`, `section`, `footer`), one `<h1>` per page, sufficient color contrast, visible focus states (`focus-visible:ring-2`), `aria-expanded` on accordions, labels on every form field, descriptive `alt` text.
- **Images:** do not invent photos. Use clean gradient or pattern backgrounds and simple inline SVG icons as placeholders. If the project already has images, reuse them.
- **SEO:** add `export const metadata` (title and description) for every route, based on the page content. Title format: `Page Name | Intellecta International Study Abroad`. Add `Open Graph` basics in the root layout.
- **Performance:** prefer server components. Use `"use client"` only for interactive pieces (mobile menu, accordion, form). Use `next/link` for internal links and `next/image` for images.

## 1.5 Code organization (suggested)

- `src/data/site.ts` (or equivalent): central constants for brand name, tagline, nav links, destinations, services, FAQs, steps, and the contact placeholders. Pages import from here so copy lives in one place and stays exact.
- `src/components/`: `Navbar`, `Footer`, `Container`, `Section`, `Button`, `ServiceCard`, `DestinationCard`, `StepList`, `FaqAccordion`, `EnquiryForm`, `CtaBanner`.
- Keep components small, typed, and reusable.

## 1.6 Navigation

- **Navbar links:** Home | About Us | Services | Study Destinations | Scholarships | Student Stories | Resources | Contact
  - "Resources" links to `/blog`.
  - Additional routes (`/course-search`, `/events`, `/counsellors`, `/faq`) must be reachable via the footer, in-page CTAs, or a "More" dropdown.
- **Persistent CTA button** in the navbar: **Book a Consultation** (links to `/contact`).
- Mark the active route visually.

## 1.7 Internal notes: DO NOT render on the public site

Part 2 contains editorial notes meant for the website owner, not for visitors. Do **not** display text marked as:
`Note for publishing`, `Publishing note`, `Website note`, `Implementation note`, `Important: The testimonials in the earlier draft...`, `Suggested website filters`, `Suggested CTA` labels (render only the CTA text itself as a button), sections 15 and 16, and the "Reference and Editorial Note".

Instead, convert them into **developer comments** (`// TODO(owner): ...` or `{/* TODO(owner): ... */}`) next to the relevant component, so the owner can see what to verify before launch.

Exceptions that **are** public and must be rendered: the `Important:` lines under Scholarship Guidance and Student Visa Guidance, the statement about truthful documents under Statement of Purpose, the **Destination Page Disclaimer**, and the **Footer disclaimer**.

## 1.8 Placeholders

Contact details in section 12 are bracketed placeholders (for example `[Add official email address]`). Keep them exactly as written, defined in one place (`site.ts`), so the owner can replace them later. Do not invent addresses, phone numbers, emails, or social links. Render footer social icons only if real URLs are supplied; otherwise leave a TODO comment.

## 1.9 Enquiry form behavior (section 13)

- Build the form with the exact fields listed in Part 2, proper `label`/`id` pairs, `required` on name, email, phone, destination, and consent.
- Use selects for preferred study level (Foundation, Pathway, Undergraduate, Postgraduate, Other) and destinations (the eight destinations; allow multiple).
- Include client-side validation and a success/error message state.
- **Do not** add a backend, API keys, or a third-party service. Create a placeholder handler (for example a `// TODO` submit function or a route handler stub that returns `{ ok: true }`) clearly marked for the owner to connect to their approved lead-management process.
- Do not request sensitive documents or ID numbers in this form.
- The consent checkbox label must reference the privacy notice, linking to `/privacy-policy` (create a minimal placeholder page only if none exists, containing a TODO comment and no invented legal text).

## 1.10 Definition of done

- Every route in 1.3 exists and renders the exact copy from Part 2.
- No unused imports, no TypeScript errors, no broken links, and no console warnings from your code.
- Fully responsive and accessible.
- Only Tailwind utility classes used for styling.
- No commands were run.

---

# PART 2: Exact Page Content

> Everything below is the authoritative content. Reproduce it verbatim, following the route mapping in 1.3 and the note-handling rules in 1.7.

**Intellecta International Study Abroad**
**Expanded Website Copy & Content Structure**
**Brand tagline:** Study Beyond Borders. Build a Future Without Limits.

*(Document purpose line, internal: "A complete, student-focused website content draft... Confirm all service availability, destination coverage, partner relationships, contact details, testimonials, and policy information before publishing." Do not render it; convert it to a TODO comment in the layout.)*

---

## 1. Homepage  (route: `/`)

### Hero Section

**Headline:** Study Beyond Borders. Build a Future Without Limits.

**Supporting copy:**
Your international education journey begins with the right plan. At Intellecta International, we help students explore study options, identify suitable universities and courses, and understand the steps involved in applying overseas. Whether you are considering the UK, USA, Canada, Australia, Europe, Turkey, Dubai (UAE), or Malaysia, our team can help you make informed decisions based on your academic background, interests, budget, and long-term goals.

From course selection and application preparation to scholarship research, visa-document guidance, and pre-departure planning, we aim to make a complex process clearer and more manageable.

**Primary button:** Book a Consultation
**Secondary button:** Explore Study Destinations
**Optional supporting link:** Start Your Application

### Explore Your Study Options

Every student has a different story, and the right destination depends on more than a university ranking. Explore countries, courses, entry requirements, tuition ranges, scholarship possibilities, and student-life considerations before deciding which path is right for you.

- Choose a destination that suits your academic and career plans.
- Compare programs, entry requirements, study duration, and estimated costs.
- Understand the application timeline and documents you may need.
- Discuss your options with a counsellor before making a decision.

### Our Core Services

- **Study Abroad Counselling** — one-to-one guidance to help you assess suitable courses and destinations.
- **University and Course Selection** — support with researching institutions and matching programs to your profile.
- **Application Assistance** — guidance with application forms, supporting documents, deadlines, and follow-up.
- **Scholarship Guidance** — help identifying relevant scholarship opportunities and understanding their criteria.
- **Statement of Purpose and Document Support** — guidance to present your genuine academic background, motivation, and goals clearly.
- **Student Visa Guidance** — information about destination-specific requirements and support in organising application documents.
- **English-Language Test Guidance** — information on accepted tests and score requirements; preparation courses only where offered.
- **Pre-Departure Support** — practical preparation for travel, accommodation research, cultural adjustment, and arrival.

### Why Choose Intellecta International?

- **Student-first guidance:** recommendations shaped around your qualifications, interests, budget, and plans.
- **Clear communication:** explanations of steps, timelines, documents, and responsibilities.
- **Informed choices:** support to compare courses and institutions rather than choosing on rankings alone.
- **Personalised application support:** practical help throughout the stages of your application.
- **Responsible advice:** realistic discussions of eligibility, costs, and the fact that admission, scholarships, and visas are decided by the relevant institutions or authorities.
- **Support beyond submission:** preparation for the next steps after an offer, including enrolment and departure planning.

### Your Journey, Step by Step

1. **Tell us about your goals** — share your preferred subject, qualifications, budget, and destinations.
2. **Review your options** — discuss suitable courses and institutions, entry criteria, and expected costs.
3. **Prepare your application** — organise the required forms and supporting documents.
4. **Track key updates** — review application progress, requests for further information, and deadlines.
5. **Prepare for the visa stage** — understand the applicable process and organise relevant documents.
6. **Get ready to travel** — plan accommodation, travel, finances, and arrival arrangements.

**Call to action:** Ready to explore your options? Book a consultation with Intellecta International.

---

## 2. About Us  (route: `/about`)

At Intellecta International Study Abroad, we believe international education can broaden perspectives, build independence, and open doors to new academic and professional experiences. Our role is to help students understand their options and navigate the study-abroad process with better information, thoughtful planning, and individual support.

We work with students who are exploring opportunities in the UK, USA, Canada, Australia, Europe, Turkey, Dubai (UAE), and Malaysia. Every student's circumstances are different, so we take time to understand academic history, subject interests, financial considerations, and future ambitions before discussing possible routes.

Our aim is to make the process easier to understand—from researching courses and preparing applications to reviewing visa requirements and planning for life abroad. We encourage students and families to ask questions, compare options carefully, and make decisions with a clear understanding of the requirements involved.

### Our Mission

To guide students towards suitable international education opportunities through personalised counselling, practical application support, and clear, responsible information—helping them make confident decisions about their education and future.

### Our Vision

To become a trusted name in international education guidance, recognised for student-centred service, professional integrity, and a commitment to helping learners pursue their ambitions around the world.

### Our Values

- **Integrity:** provide clear information and avoid unrealistic promises.
- **Student focus:** listen carefully and tailor guidance to individual needs.
- **Professionalism:** handle each enquiry and application with care and attention.
- **Transparency:** explain processes, requirements, costs, and limitations clearly.
- **Growth:** encourage students to think beyond admission and consider their long-term development.

### Director's Message

"At Intellecta International, we understand that choosing to study abroad is a major decision for students and their families. It involves ambition, planning, investment, and many questions along the way. Our responsibility is to help students explore their options carefully, understand the process, and move forward with confidence. We believe that good guidance begins with listening, honest advice, and a genuine commitment to each student's goals. We look forward to supporting learners as they take their next steps towards a global education."

*(Internal note, render as a TODO comment only: Have the Director approve this message and add their name and designation if desired.)*

---

## 3. Our Services  (route: `/services`)

From your first enquiry to your pre-departure preparation, Intellecta International can help you understand the key stages of applying to study overseas. The exact support available will depend on your destination, institution, course, and individual circumstances.

### Study Abroad Counselling

Discuss your academic background, interests, preferred countries, budget, and career ambitions with a counsellor. Together, you can identify possible study routes and the questions to investigate before committing to a program.

- Initial profile discussion and goal-setting.
- Destination and study-level exploration.
- Guidance on building a realistic shortlist.
- Discussion of timelines and next steps.

### University and Course Selection

Choosing a course is a decision that can shape your future. We help students compare programs by subject content, entry requirements, location, duration, tuition, available support, and alignment with career plans.

- Research into relevant universities and courses.
- Review of academic and English-language entry criteria.
- Comparison of study options and estimated expenses.
- Guidance on checking official university information before applying.

### Application Processing

Applications often require careful coordination of forms, transcripts, certificates, personal statements, references, and deadlines. We help students understand the application checklist and prepare their submissions for review.

- Application checklist and timeline planning.
- Guidance on completing forms accurately.
- Organisation of supporting documents.
- Follow-up guidance when an institution requests additional information.

### Scholarships and Funding Information

Scholarships and funding arrangements vary by institution, course, country, academic profile, and intake. We can help students research relevant opportunities, review eligibility criteria, and understand application deadlines.

- Research into available scholarships and tuition discounts.
- Review of eligibility criteria and required documents.
- Guidance on scholarship statements where required.
- Budget planning for tuition, accommodation, travel, insurance, and daily living costs.

**Important:** Scholarships are competitive and subject to the provider's terms. *(Render this as a visible callout. Do NOT render the line "Do not advertise a scholarship as guaranteed."; it is an internal note.)*

### Statement of Purpose, Personal Statement and CV

A strong application should reflect the student's real experiences, motivation, preparation, and future plans. We can guide students in structuring and reviewing application documents so their own voice and achievements are communicated clearly.

- Planning and review of Statements of Purpose or personal statements.
- CV structure and presentation guidance.
- Guidance on requesting academic references.
- Proofreading and consistency checks across application documents.

All documents must be truthful and based on the student's own background. No fabricated achievements, experience, or claims should be included.

### Student Visa Guidance

Visa processes and requirements differ by country and can change. We help students understand the published steps, prepare document checklists, and organise information relevant to their applications. Where appropriate, students should consult official immigration sources or an authorised professional for case-specific advice.

- Destination-specific document checklist guidance.
- Support with organising financial and academic documents.
- Preparation for interviews or credibility questions where applicable.
- Guidance on checking official visa fees, rules, and submission procedures.

**Important:** A visa decision is made by the relevant government authority. Intellecta International cannot guarantee visa approval.

### English-Language Tests and Preparation

Some institutions require proof of English-language proficiency, while accepted tests and minimum scores vary by course and university. We can help students check what their chosen institution accepts and plan their preparation.

- Check the test accepted by the chosen university or course.
- Understand score requirements and validity periods.
- Plan a preparation schedule and test date.
- Confirm whether exemptions or alternative evidence may be accepted.

*(Internal note, TODO comment only: List IELTS, TOEFL, PTE, Oxford Test of English, LanguageCert, or other tests only where relevant to the destination and institution.)*

### Pre-Departure and Arrival Preparation

Receiving an offer is an important milestone, but there is still plenty to prepare before travelling. Our pre-departure guidance can help students think through practical arrangements and prepare for the transition to a new academic and cultural environment.

- Accommodation research and planning.
- Travel preparation and document checklist.
- Budgeting, banking, mobile connectivity, and essential items.
- Cultural orientation and expectations for student life.
- Reminders to review enrolment, insurance, and arrival instructions from the institution.

### Student Development and Career Readiness

International study is about more than reaching a campus. Students can also benefit from building communication, independence, organisation, and career-planning skills. If offered by Intellecta, workshops or mentoring sessions may help students prepare for the academic and personal responsibilities of studying abroad.

*(Internal note, TODO comment only: Include only training, internship, mentoring, or test-preparation programs that Intellecta actually offers.)*

---

## 4. Study Destinations  (routes: `/destinations` and `/destinations/[slug]`)

Every destination has its own education system, entry criteria, costs, and visa rules. Explore the overview below, then check the official university and government sources for current information. Availability, fees, work rights, scholarships, and visa conditions vary and may change.

### United Kingdom (UK)  (`/destinations/united-kingdom`)

- A wide choice of universities, colleges, and subject specialisations.
- Options across undergraduate, postgraduate, foundation, and pathway programs, depending on provider.
- Many master's programs are designed for completion in one year, although duration varies by course.
- A diverse student community and access to academic, cultural, and professional networks.
- Students should check current tuition, living costs, course eligibility, and visa conditions before applying.

**CTA:** Explore study options in the UK.

### United States (USA)  (`/destinations/united-states`)

- A broad range of institutions, degrees, majors, and interdisciplinary study options.
- Opportunities to explore research, innovation, campus activities, and practical learning.
- Entry requirements, application components, and costs differ significantly by institution.
- Scholarships and financial aid may be available, subject to eligibility and provider rules.
- Students should check current student visa requirements and any applicable work authorisation rules.

**CTA:** Find a study pathway in the USA.

### Canada  (`/destinations/canada`)

- A range of universities and colleges offering programs in many academic and professional fields.
- A multicultural environment and a variety of campus and community experiences.
- Program eligibility, tuition, living costs, and admission requirements vary by institution and location.
- Study permits and any work or post-study options are governed by current Canadian rules and eligibility criteria.
- Students should verify that their chosen institution and program meet the applicable requirements.

**CTA:** Explore Canadian institutions and programs.

### Australia  (`/destinations/australia`)

- Universities and other providers offer programs across business, technology, health, engineering, sciences, and creative fields.
- International students can access campus services and student support, depending on the institution.
- Tuition and living expenses vary by city, course, and lifestyle.
- Visa conditions and post-study options depend on current government rules and individual eligibility.
- Students should confirm course registration, entry requirements, and official visa guidance before applying.

**CTA:** Plan your study journey in Australia.

### Europe  (`/destinations/europe`)

Europe includes a variety of education systems, languages, tuition models, and student experiences. Depending on Intellecta's current service coverage, destinations may include Germany, Ireland, Hungary, Malta, Finland, Sweden, and Cyprus.

- A diverse selection of undergraduate and postgraduate programs.
- Some institutions offer programs taught in English; availability depends on the country and course.
- Tuition fees, living costs, language requirements, and admission processes differ widely.
- Some countries or institutions may offer scholarships or reduced-fee options for eligible students.
- Students should review the official requirements for the specific country and institution.

**CTA:** Compare study options across Europe.

### Dubai, United Arab Emirates (UAE)  (`/destinations/dubai-uae`)

- A regional education hub with local campuses and international institutions, depending on the program.
- Proximity to Pakistan and a diverse international community.
- Study options may include business, technology, media, hospitality, and other fields, depending on the institution.
- Tuition, accommodation, and visa arrangements vary by provider and student circumstances.
- Students should verify campus accreditation, degree-awarding arrangements, and total costs before enrolling.

**CTA:** Discover education opportunities in Dubai.

### Malaysia  (`/destinations/malaysia`)

- A range of public and private institutions and programs across different fields.
- Potentially more affordable tuition and living options than some other international destinations, depending on the course and city.
- A multicultural setting and a variety of student experiences.
- Some institutions offer transfer or pathway arrangements with overseas universities; students should confirm the details directly with the provider.
- Admission and student-pass requirements depend on the institution and current regulations.

**CTA:** Explore study options in Malaysia.

### Turkey  (`/destinations/turkey`)

- A varied higher-education sector with public and private universities across many disciplines.
- A distinctive location connecting Europe and Asia, with rich cultural and historical experiences.
- Programs may be available in Turkish or English, depending on the institution and course.
- Tuition fees and living costs vary by university, city, language of instruction, and study level.
- Scholarships may be available through universities or external schemes, subject to eligibility and competition.
- Students should confirm language requirements, recognition, application deadlines, and current visa procedures before applying.

**CTA:** Start exploring universities in Turkey.

### Destination Page Disclaimer

Country information on this website is a general introduction, not a guarantee of admission, scholarship, employment, or visa outcomes. Requirements and policies change. Always verify details with the relevant institution and official government sources.

*(Render this disclaimer at the bottom of `/destinations` and every `/destinations/[slug]` page. All CTAs above should link to `/contact`, optionally with `?destination=<slug>` to pre-select the destination in the enquiry form.)*

---

## 5. Scholarships and Funding  (route: `/scholarships`)

A scholarship can make international study more manageable, but each award has its own eligibility criteria, application process, and deadline. Intellecta International can help students research potential opportunities and understand the documents they may need.

### What Students Should Review

- Academic performance and any subject-specific requirements.
- Nationality, residency, or country-specific eligibility rules.
- Whether the award covers tuition, living costs, travel, or only part of the expenses.
- Required personal statements, references, portfolios, or interviews.
- Renewal conditions and minimum academic performance after enrolment.

**CTA:** Ask us to help you explore scholarship options.

*(Internal note, TODO comment only: Do not publish fixed scholarship percentages, guaranteed awards, or deadlines unless they have been checked against current official information.)*

---

## 6. Study Options and Course Search  (route: `/course-search`)

Not sure which course is right for you? Start with your interests, previous studies, preferred career direction, and budget. Our team can help you narrow down options and identify the information you should compare before applying.

- **Study level:** Foundation, pathway, undergraduate, postgraduate, or other available options.
- **Subject area:** Business, computing and IT, engineering, health-related fields, social sciences, arts, or other disciplines.
- **Preferred destination and city.**
- **Academic background and English-language qualifications.**
- **Budget range and intended intake.**

**CTA:** Help Me Find a Course.

*(Developer guidance, not public copy: render the five items above as a visual filter/enquiry layout with filter labels "Destination | Study Level | Subject | Intake | Budget Range". Do NOT display any course listings or a live search. Build it as a non-functional enquiry-style panel whose "Help Me Find a Course" button leads to `/contact`. Add a TODO comment: a live course-search tool requires a reliable, up-to-date course database.)*

---

## 7. Student Stories and Outcomes  (route: `/student-stories`)

Real student experiences can help future applicants understand the process and feel better prepared. Use this section to share verified stories with the student's permission.

### Suggested content formats

- **Admission updates:** student name (with consent), institution, program, and intake.
- **Visa outcome announcements:** share only verified outcomes and obtain written permission.
- **Student interviews:** ask about the application journey, preparation, and advice for others.
- **Counsellor conversations:** short videos discussing course selection and application planning.
- **Parent or graduate feedback:** publish only authentic, approved comments.

*(Developer guidance: do NOT add any fake testimonials, names, photos, or outcomes. Render the intro and the five format cards above, plus a clean empty-state card for future stories. Add a TODO comment that testimonials must be verified with the named students, with consent, before publishing, and that fictional stories must never be presented as real outcomes.)*

---

## 8. University Partners and Events  (route: `/events`)

Give students opportunities to learn about institutions and their programs through verified university information, online sessions, education fairs, and visits by authorised representatives, where available.

- Publish upcoming webinars, seminars, and counselling events with confirmed dates.
- Share short interviews with visiting university representatives, with their approval.
- Explain admission criteria, available programs, scholarship deadlines, and student support using information approved by the institution.
- Display university logos only when permission and brand-use requirements have been checked.
- Clearly distinguish formal university partnerships from institutions that students may apply to independently.

**CTA:** View Upcoming Events.

*(Developer guidance: do NOT invent events, dates, universities, or logos. Render the content above and an empty-state card for upcoming events. Add TODO comments about verifying partnerships and logo permissions.)*

---

## 9. Meet Our Counsellors  (route: `/counsellors`)

Choosing a study destination can feel overwhelming. Introduce the people who help students navigate their options and applications.

### Suggested profile format for each counsellor

- Name and job title.
- Relevant education, professional experience, and areas of expertise.
- Destinations or study levels they advise on.
- Languages spoken, if relevant.
- A short, friendly message for students.
- Professional photo approved for website use.

Only publish accurate qualifications, experience, rankings, and professional claims that can be verified.

*(Developer guidance: do NOT invent counsellors. Render the intro, the profile-format list, and the verification statement. Additionally create a reusable, typed `CounsellorCard` component and an empty `counsellors` data array so the owner can add real profiles later, with a TODO comment.)*

---

## 10. Frequently Asked Questions  (route: `/faq`)

*(Render as an accessible accordion. Each question is the accordion title; the paragraph is the answer.)*

**When should I start planning to study abroad?**
Start as early as possible. Some courses have fixed deadlines, and students may need time to prepare tests, collect documents, apply for scholarships, and complete visa requirements. The ideal timeline depends on the country, institution, and intake.

**Can Intellecta help me choose a university?**
Yes. We can discuss your academic background, preferred subject, budget, and goals to help you research suitable options. Final eligibility and admission decisions rest with the institution.

**Can I get a scholarship?**
You may be eligible for some scholarships depending on your academic profile, chosen course, destination, and the award's criteria. Scholarships are not guaranteed, and students should check the terms and deadlines for each opportunity.

**Does Intellecta guarantee a visa?**
No consultancy can guarantee a visa decision. The relevant immigration authority makes the final decision. Intellecta can help you understand the published process and organise documents, within the scope of its services.

**How much does it cost to study abroad?**
Costs depend on destination, institution, program, city, accommodation, travel, insurance, and personal spending. Students should prepare a full budget and verify current figures with official sources and the institution.

**Do I need IELTS or another English test?**
It depends on the institution, course, and destination. Some providers accept different tests or other forms of evidence. Always check the requirements for your chosen program.

**Can I work while studying?**
Work rights depend on the destination, visa conditions, course, and current regulations. Check official government guidance before making financial plans based on part-time work.

**Can I apply if my grades are not very high?**
Possibly. Entry requirements vary by institution and course. A counsellor can help you investigate options, but eligibility must be confirmed by the institution.

**What documents are usually needed?**
Common documents may include academic transcripts and certificates, a passport, English-language results where required, a CV, a personal statement, references, and financial evidence for relevant stages. The exact list depends on the institution and destination.

*(Also add `FAQPage` JSON-LD structured data generated from these exact questions and answers.)*

---

## 11. Blog and Student Resources  (route: `/blog`)

A resource centre can help students and parents make informed decisions and improve the website's usefulness. Publish articles that are accurate, current, and reviewed before going live.

- **Study destination comparisons:** course options, costs, culture, and planning considerations.
- **Application timelines:** how to prepare for upcoming intakes.
- **Document checklists:** what students may need before applying.
- **Personal statement guidance:** how to explain genuine motivation and goals.
- **Scholarship explainers:** eligibility, deadlines, and common application mistakes.
- **Visa updates:** summaries linked to official government announcements.
- **Student budgeting:** tuition, accommodation, transport, food, insurance, and emergency funds.
- **Pre-departure advice:** packing, accommodation, travel documents, and arrival planning.
- **Parent guides:** supporting students through international education decisions.

**CTA:** Explore More Student Resources.

*(Developer guidance: render the nine topics as a card grid. Do NOT write articles. Add an empty-state area for future posts and a TODO comment.)*

---

## 12. Contact Us  (route: `/contact`, top section)

Your international education journey starts with a conversation. Tell us a little about your plans, and our team can help you understand the next steps.

**Intellecta International Study Abroad**
**Office address:** [Add confirmed office address and branch details]
**Phone / WhatsApp:** [Add official contact number]
**Email:** [Add official email address]
**Website:** [Add website URL]
**Office hours:** [Add confirmed working days and hours]

**CTA buttons:** Book a Consultation | Send an Enquiry | Contact Us

**Response promise:** "Our team will review your enquiry and contact you as soon as possible."

*(Internal note, TODO comment only: Use a specific response time only if the team can consistently meet it.)*

---

## 13. Online Enquiry Form  (route: `/contact`, below the contact details; anchor id `enquiry`)

**Form title:** Start Your Study Abroad Journey

**Introductory text:** Share your details and study preferences so our team can understand your goals and contact you about relevant next steps.

**Fields (in this order):**
1. Full name
2. Email address
3. Phone / WhatsApp number
4. Current city and country
5. Highest completed qualification
6. Current or most recent grades / GPA
7. Preferred study destination(s)
8. Preferred study level
9. Intended subject or course
10. Preferred intake
11. Approximate budget range (optional)
12. English-language test status (if applicable)
13. Message or questions
14. Consent checkbox for being contacted about this enquiry and acknowledgement of the privacy notice

**Button text:** Submit Enquiry

*(Internal note, TODO comment only: Publish a clear privacy policy explaining how enquiry information is collected, used, stored, and protected. Collect only information needed for the enquiry at this stage; do not request sensitive documents through an unsecured general form.)*

---

## 14. Footer Content  (global component, every page)

**Intellecta International Study Abroad**
Study Beyond Borders. Build a Future Without Limits.

**Explore:** Home | About Us | Services | Study Destinations | Scholarships | Student Stories | Resources | Contact

*(Also include secondary footer links to Study Options (`/course-search`), Events (`/events`), Counsellors (`/counsellors`), FAQ (`/faq`), Privacy Policy, and Terms of Use. Privacy and Terms may be placeholders with TODO comments.)*

**Footer disclaimer:** Information on this website is provided for general guidance and may change. Admission, scholarships, and visa decisions are made by the relevant institutions or authorities. Students should verify current requirements through official sources.

*(Internal note, TODO comment only: Add confirmed social media links, contact details, privacy policy, and terms of use.)*

---

# PART 3: Final Checklist for Copilot

- [ ] I did not run any command.
- [ ] I inspected the existing project and reused its layout, components, and conventions.
- [ ] All routes in 1.3 exist and are linked from navigation/footer.
- [ ] Copy in Part 2 appears verbatim; internal notes became developer comments, not visible text.
- [ ] Styling is Tailwind-only and responsive.
- [ ] No fabricated testimonials, counsellors, events, universities, prices, or contact details.
- [ ] Forms, accordions, and navigation are accessible.
- [ ] Each page has metadata.
- [ ] Final reply is a brief summary of files changed.
