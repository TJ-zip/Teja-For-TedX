import Reveal from "@/components/Reveal";
import SceneMount from "@/components/SceneMount";
import { ScrollProgressProvider } from "@/components/ScrollProgress";
import {
  accomplishments,
  certifications,
  departments,
  education,
  experience,
  languages,
  mentors,
  person,
  skills,
  summary,
} from "@/data/content";

function SectionHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <p className="mb-3 font-mono text-xs tracking-[0.35em] text-red">{index}</p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{children}</h2>
      <div className="rule mt-5 w-40" />
    </div>
  );
}

export default function Page() {
  return (
    <ScrollProgressProvider>
      <SceneMount />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-red focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <main id="main" className="relative z-10">
        {/* 01 — Hero */}
        <section
          aria-labelledby="hero-title"
          className="mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center px-6 py-24"
        >
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-red">
              {person.role}
            </p>
            <h1
              id="hero-title"
              className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
            >
              {person.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
              {person.tagline}
            </p>
            <p className="mt-4 font-mono text-sm tracking-widest text-neutral-500">
              {person.org} · Logistics · Hospitality · Public Relations · Security
            </p>
            <p className="mt-16 font-mono text-xs tracking-[0.3em] text-neutral-600">
              SCROLL
            </p>
          </Reveal>
        </section>

        {/* 02 — Why I am standing */}
        <section
          aria-labelledby="summary-title"
          className="mx-auto max-w-3xl px-6 py-24 sm:py-32"
        >
          <Reveal>
            <SectionHeading index="01">
              <span id="summary-title">{summary.heading}</span>
            </SectionHeading>
          </Reveal>
          {summary.body.map((paragraph, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="mb-5 text-lg leading-relaxed text-neutral-300">{paragraph}</p>
            </Reveal>
          ))}
        </section>

        {/* 03 — The four departments */}
        <section
          aria-labelledby="mandate-title"
          className="mx-auto max-w-5xl px-6 py-24 sm:py-32"
        >
          <Reveal>
            <SectionHeading index="02">
              <span id="mandate-title">The mandate I am asking for</span>
            </SectionHeading>
            <p className="mb-14 max-w-2xl text-lg leading-relaxed text-neutral-400">
              Four departments, and the record I have already built in each one — every
              event named below was held at Jai Hind College.
            </p>
          </Reveal>

          <ol className="space-y-5">
            {departments.map((dept, i) => (
              <li key={dept.id}>
                <Reveal delay={i * 80}>
                  <article className="rounded-lg border border-line bg-surface/80 p-7 backdrop-blur-sm transition-colors hover:border-red/60 sm:p-9">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-mono text-xs tracking-[0.3em] text-red">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl font-semibold tracking-tight">{dept.name}</h3>
                    </div>
                    <p className="mt-3 text-neutral-300">{dept.claim}</p>
                    <ul className="mt-5 space-y-2.5">
                      {dept.evidence.map((item, j) => (
                        <li key={j} className="flex gap-3 text-neutral-400">
                          <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-red" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        {/* 04 — How I would lead */}
        <section
          aria-labelledby="lead-title"
          className="mx-auto max-w-3xl px-6 py-24 sm:py-32"
        >
          <Reveal>
            <SectionHeading index="03">
              <span id="lead-title">How I would lead</span>
            </SectionHeading>
          </Reveal>
          <Reveal delay={80}>
            <p className="mb-5 text-lg leading-relaxed text-neutral-300">
              A Vice-Chairperson has to translate a vision downward without losing it. My
              BBA and the McKinsey Forward programme built the structured
              problem-solving and communication side of that. Serving as an Organising
              Committee member built the other half — knowing what an instruction actually
              costs the person receiving it.
            </p>
            <p className="mb-5 text-lg leading-relaxed text-neutral-300">
              That is why I can brief HoDs and OCs in the same room and have both leave
              with the same picture. Logistics, Hospitality, PR and Security fail at the
              seams between them, not inside them. Holding all four means those seams have
              one owner.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Learnt the function at root level from
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {mentors.map((mentor) => (
                <li
                  key={mentor.name}
                  className="rounded-md border border-line bg-surface/70 px-5 py-4"
                >
                  <p className="font-medium text-neutral-100">{mentor.name}</p>
                  <p className="mt-1 text-sm text-neutral-500">{mentor.role}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* 05 — Experience */}
        <section
          aria-labelledby="experience-title"
          className="mx-auto max-w-4xl px-6 py-24 sm:py-32"
        >
          <Reveal>
            <SectionHeading index="04">
              <span id="experience-title">Experience</span>
            </SectionHeading>
          </Reveal>
          <ol className="space-y-10">
            {experience.map((job, i) => (
              <li key={job.org}>
                <Reveal delay={i * 80}>
                  <article className="border-l-2 border-line pl-6 transition-colors hover:border-red">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-xl font-semibold tracking-tight">{job.org}</h3>
                      <p className="font-mono text-xs tracking-widest text-red">
                        {job.period}
                      </p>
                    </div>
                    <p className="mt-1 text-neutral-400">
                      {job.title} · {job.place}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.bullets.map((bullet, j) => (
                        <li key={j} className="text-neutral-400">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        {/* 06 — Recognition */}
        <section
          aria-labelledby="awards-title"
          className="mx-auto max-w-4xl px-6 py-24 sm:py-32"
        >
          <Reveal>
            <SectionHeading index="05">
              <span id="awards-title">Recognition</span>
            </SectionHeading>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {accomplishments.map((item, i) => (
              <li key={item}>
                <Reveal delay={i * 60}>
                  <div className="h-full rounded-md border border-line bg-surface/70 px-5 py-5 text-neutral-200">
                    {item}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={120}>
            <h3 className="mt-16 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Certifications
            </h3>
            <ul className="mt-5 space-y-2 text-neutral-400">
              {certifications.map((cert) => (
                <li key={cert} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-red" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* 07 — Education, skills, languages */}
        <section
          aria-labelledby="background-title"
          className="mx-auto max-w-4xl px-6 py-24 sm:py-32"
        >
          <Reveal>
            <SectionHeading index="06">
              <span id="background-title">Background</span>
            </SectionHeading>
          </Reveal>

          <div className="grid gap-12 sm:grid-cols-2">
            <Reveal>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Education
              </h3>
              <ul className="mt-5 space-y-5">
                {education.map((item) => (
                  <li key={item.school}>
                    <p className="font-medium text-neutral-100">
                      {item.course} — {item.school}
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">
                      {item.place} · {item.period}
                    </p>
                  </li>
                ))}
              </ul>

              <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Skills
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line px-4 py-1.5 text-sm text-neutral-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Languages
              </h3>
              <ul className="mt-5 space-y-5">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-neutral-200">{lang.name}</span>
                      <span className="text-sm text-neutral-500">{lang.level}</span>
                    </div>
                    <div
                      className="mt-2 h-1 w-full rounded-full bg-line"
                      role="img"
                      aria-label={`${lang.name}: ${lang.level}`}
                    >
                      <div
                        className="h-1 rounded-full bg-red"
                        style={{ width: `${lang.value}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 08 — Contact */}
        <section
          aria-labelledby="contact-title"
          className="mx-auto max-w-3xl px-6 py-24 sm:py-32"
        >
          <Reveal>
            <SectionHeading index="07">
              <span id="contact-title">Contact</span>
            </SectionHeading>
            <p className="mb-10 text-lg leading-relaxed text-neutral-300">
              Happy to walk through any of the above in person.
            </p>
            <ul className="space-y-3 text-lg">
              <li>
                <a
                  className="text-neutral-200 underline decoration-red decoration-2 underline-offset-4 transition-colors hover:text-red"
                  href={`mailto:${person.email}`}
                >
                  {person.email}
                </a>
              </li>
              <li>
                <a
                  className="text-neutral-200 underline decoration-red decoration-2 underline-offset-4 transition-colors hover:text-red"
                  href={`tel:${person.phone}`}
                >
                  {person.phone}
                </a>
              </li>
              <li>
                <a
                  className="text-neutral-200 underline decoration-red decoration-2 underline-offset-4 transition-colors hover:text-red"
                  href={`https://${person.linkedin}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {person.linkedin}
                </a>
              </li>
              <li>
                <a
                  className="text-neutral-200 underline decoration-red decoration-2 underline-offset-4 transition-colors hover:text-red"
                  href={`https://${person.instagram}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {person.instagram}
                </a>
              </li>
              <li className="text-neutral-500">{person.location}</li>
            </ul>
          </Reveal>
        </section>

        <footer className="mx-auto max-w-3xl px-6 pb-20">
          <div className="rule mb-6 w-full" />
          <p className="text-sm leading-relaxed text-neutral-600">
            Independent candidacy portfolio by {person.name}. This is a personal
            application and is not an official communication of TEDxJaiHindCollege, Jai
            Hind College, or TED. TED and TEDx are trademarks of TED Conferences, LLC.
          </p>
        </footer>
      </main>
    </ScrollProgressProvider>
  );
}
