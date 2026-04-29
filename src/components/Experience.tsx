"use client";

import { useState } from "react";
import { MapPin, ChevronDown, ChevronUp } from "lucide-react";

type ExpItem = {
  id: number;
  logo: string;
  role: string;
  company?: string;
  period: string;
  location?: string;
  bullets: string[];
  skills: string;
  useList?: boolean;
};

const EXPERIENCES: ExpItem[] = [
  {
    id: 1,
    logo: "/pic/algedrof.png",
    role: "Full-Stack Developer & System Designer",
    company: "Algedrof.Co",
    period: "Jan 2023 - Present · 3 yrs 4 mos",
    location: "Indonesia · Remote",
    bullets: [
      "Designed and developed a workflow-driven Public Complaint Reporting System for Dinas Sosial,translating business requirements into structured system flows and database architecture.",
      "Built BANGKOM Learning Management System for Kutai Kartanegara using Prisma ORM, designing system flow and database architecture for competency development, certification management, and user tracking.",
      "Led system flow and database design for a mobile-based PNS Attendance System (iOS & Android), and developed an end-to-end Asset Management Information System (JavaScript, PostgreSQL) covering backend logic and frontend implementation.",
    ],
    skills:
      "Full-Stack Development · System Design · Project Management · React · Node.js · PostgreSQL · AWS · GitHub Actions · Agile Methodologies",
  },
  {
    id: 2,
    logo: "/pic/kukarLogo.png",
    role: "Financial and Policy Analyst",
    company: "BKPSDM Kutai Kartanegara",
    period: "Jun 2024 - Present · 1 yr 11 mos",
    location: "Indonesia · On-site",
    bullets: [
      "Gathered and translated business requirements from multiple government stakeholders into structured planning and performance documents, ensuring alignment with institutional targets, regulations, and strategic objectives.",
      "Conducted institutional performance evaluations and prepared key reports including performance reports, financial statements, and follow-ups to external audit findings, supporting transparency and accountability.",
      "Analyzed financial data from multiple perspectives to identify gaps between budget allocation and realization, produced actionable insights for decision-makers, and coordinated with business units to validate findings—demonstrating the ability to view problems from diverse angles and propose cost- and time-efficient solutions.",
    ],
    skills:
      "Microsoft PowerPoint · Data Analytics · Risk Analysis · Excel Formulas · Data Analysis · Canva · Bahasa Indonesia",
  },
  {
    id: 3,
    logo: "/pic/komdigiLogo.jpeg",
    role: "Education Facilitator",
    company: "Komdigi × BKPSDM Kutai Kartanegara",
    period: "Apr 2024 - Present · 2 yrs 1 mo",
    location: "Indonesia · On-site",
    bullets: [
      "Delivered structured courses and ad hoc technical training for Civil Servants in Kutai Kartanegara (±72 classes, ±2,500 participants), covering Excel, Power Query, and Looker Studio for data visualization.",
    ],
    skills:
      "Teaching · Educational Instruction · Data Analytics · Excel Formulas · Canva · Bahasa Indonesia",
  },
  {
    id: 4,
    logo: "/pic/kemenkeuLogo.jpeg",
    role: "Accounting Intern",
    company: "Kementerian Keuangan Republik Indonesia",
    period: "Feb 2021 - Apr 2021 · 3 mos",
    location: "Indonesia · On-site",
    bullets: [
      "Prepared and organized documents related to financial disbursement.",
      "Researched the institution's work process system and provided improvement suggestions to superiors.",
    ],
    skills:
      "Accounting · Microsoft Excel · Finance · Administration · Excel Formulas · Bahasa Indonesia",
  },
  {
    id: 5,
    logo: "/pic/bregadaLogo.jpeg",
    role: "Teaching Assistant",
    company: "Relawan Angkatan Bregadasatya",
    period: "Nov 2020 - Aug 2021 · 10 mos",
    location: "Indonesia · On-site",
    bullets: [
      "Created educational videos and served as tutor for Computer-Assisted Audit Techniques, Accounting Information Systems, Government Accounting, and Applied Statistics.",
    ],
    skills:
      "Accounting · SQL · Microsoft Excel · Auditing · Excel Formulas · Bahasa Indonesia",
    useList: false,
  },
];

const PREVIEW_COUNT = 2;

export default function Experience() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [showAll, setShowAll] = useState(false);

  const toggle = (id: number) =>
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));

  const visibleExperiences = showAll ? EXPERIENCES : EXPERIENCES.slice(0, PREVIEW_COUNT);
  const hiddenCount = EXPERIENCES.length - PREVIEW_COUNT;

  return (
    <div id="experience" className="mt-16">
      <div className="text-center">
        <h3 className="text-gr-title font-semibold text-gray-900 dark:text-slate-100">Experience</h3>
        <span className="section-accent mt-2 mx-auto" />
        <p className="mt-3 text-gr-body text-gray-500 dark:text-slate-400">
          My professional journey across government, education, and tech.
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-10 relative">
        {/* Vertical connecting line */}
        <div className="absolute left-5 top-5 bottom-5 w-px bg-gray-300 dark:bg-slate-700/50" />

        <div className="space-y-5">
          {visibleExperiences.map((exp) => {
            const isCurrent = exp.period.includes("Present");
            const isExpanded = Boolean(expandedItems[exp.id]);
            const hasMore = exp.bullets.length > 2;
            const visibleBullets = hasMore && !isExpanded
              ? exp.bullets.slice(0, 2)
              : exp.bullets;
            const skills = exp.skills.split(" · ");

            return (
              <div key={exp.id} className="relative pl-14">
                {/* Logo circle — sits on the timeline line */}
                <div className="absolute left-0 w-10 h-10 rounded-full bg-gray-100 dark:bg-[#0d1117] border-2 border-gray-300 dark:border-slate-700 flex items-center justify-center overflow-hidden shrink-0 z-10">
                  <img
                    src={exp.logo}
                    alt={exp.company ?? ""}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Card */}
                <article className="bg-white dark:bg-[#0b1220] rounded-xl border border-gray-200 dark:border-slate-700/55 p-5 transition-all duration-300 hover:border-gray-300 dark:hover:border-slate-600/60 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_24px_rgba(2,6,23,0.4)]">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-gr-subtitle font-semibold text-emerald-500 dark:text-emerald-400">
                          {exp.role}
                        </h4>
                        {isCurrent && (
                          <span className="text-gr-caption px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      {exp.company && (
                        <p className="text-gr-body text-gray-800 dark:text-slate-200 mt-0.5">
                          {exp.company}
                        </p>
                      )}
                    </div>

                    <div className="sm:text-right shrink-0">
                      <p className="text-gr-small text-gray-500 dark:text-slate-400">{exp.period}</p>
                      {exp.location && (
                        <p className="mt-0.5 text-gr-caption text-gray-400 dark:text-slate-500 flex items-center gap-1 sm:justify-end">
                          <MapPin size={11} />
                          {exp.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="mt-3">
                    {exp.useList === false ? (
                      <div className="space-y-1.5">
                        {visibleBullets.map((b, i) => (
                          <p key={i} className="text-gr-body text-gray-500 dark:text-slate-400">{b}</p>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-1.5 list-disc list-outside pl-4">
                        {visibleBullets.map((b, i) => (
                          <li key={i} className="text-gr-body text-gray-500 dark:text-slate-400">{b}</li>
                        ))}
                      </ul>
                    )}

                    {hasMore && (
                      <button
                        type="button"
                        onClick={() => toggle(exp.id)}
                        className="mt-2 flex items-center gap-1 text-gr-small text-emerald-500 dark:text-emerald-400 hover:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
                      >
                        {isExpanded ? (
                          <><ChevronUp size={13} /> Show less</>
                        ) : (
                          <><ChevronDown size={13} /> {exp.bullets.length - 2} more responsibilities</>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Skill pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 text-gr-caption rounded-full bg-gray-100 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700/50 text-gray-500 dark:text-slate-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* View all / Show less */}
      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-gr-small font-medium border border-gray-200 dark:border-slate-700/55 text-gray-500 dark:text-slate-400 hover:border-emerald-400 hover:text-emerald-500 dark:hover:border-emerald-500 dark:hover:text-emerald-400 bg-white dark:bg-[#0b1220] transition-all duration-200"
        >
          {showAll ? (
            <><ChevronUp size={14} /> Show less</>
          ) : (
            <><ChevronDown size={14} /> View all {hiddenCount} more experiences</>
          )}
        </button>
      </div>
    </div>
  );
}
