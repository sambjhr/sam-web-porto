"use client";

import { useState } from "react";

type ExpItem = {
  id: number;
  logo: string;
  role: string;
  company?: string;
  period: string;
  location?: string;
  intro?: string;
  bullets: string[];
  skills: string;
  useList?: boolean;
};

const EXPERIENCES: ExpItem[] = [
  {
    id: 1,
    logo: "/pic/kukarLogo.png",
    role: "Financial and Policy Analyst",
    company: "BKPSDM Kutai Kartanegara",
    period: "Jun 2024 - Present · 1 yr 11 mos",
    location: "Indonesia · On-site",
    intro: "As a Financial and Policy Analyst, I have been responsible for:",
    bullets: [
      "Developed and coordinated strategic planning, budgeting, and performance documents for regional government agencies, ensuring alignment with institutional targets and regulations.",
      "Conducted institutional performance evaluations and prepared key reports including performance reports, financial statements, and follow-ups to external audit findings, supporting transparency and accountability.",
      "Designed and analyzed Public Satisfaction Surveys and formulated data-driven action plans to address service delivery gaps.",
      "Provided analysis and documentation for Internal Control System, Maturity Assessments and organizational risk management.",
      "Produced policy recommendations and technical briefing materials to support strategic leadership decisions and inter-departmental coordination."
    ],
    skills:
      "Microsoft PowerPoint · CRM Databases · Databases · Data Quality · Data Analytics · Risk Analysis · Multilingual · Excel Formulas · Data Analysis · Data Entry · Risk Analytics · Canva · Bahasa Indonesia",
  },
  {
    id: 2,
    logo: "/pic/komdigiLogo.jpeg",
    role: "Education Facilitator",
    company: "Komdigi x BKPSDM Kutai Kartanegara (Government Transformation Academy Program)",
    period: "Apr 2024 - Present · 2 yrs 1 mo",
    location: "Indonesia · On-site",
    intro:
      "As an Education Facilitator, I have been responsible for:",
    bullets: [
      "Government Transformation Academy Program: Delivered structured courses and ad hoc technical training for Civil Servants in Kutai Kartanegara (±72 classes, ± 2.500 participants), covering Excel (and other Microsoft Office Application), Power Query, and Looker Studio for data visualization."
    ],
    skills:
      "Microsoft PowerPoint · Data Quality · Data Analytics · Teaching · Educational Instruction · Multilingual · Excel Formulas · Data Entry · Canva · Bahasa Indonesia",
  },
  {
    id: 3,
    logo: "/pic/2.png",
    role: "Social Media Content Creator and Editor",
    company: "Algedrof.co · Self-employed",
    period: "Jan 2023 - Present · 3 yrs 4 mos",
    location: "Indonesia · On-site",
    intro:
      "As a Social Media Content Creator and Editor, I have been responsible for:",
    bullets: [
      "Grew over 350% followers in 3 months (Instagram @bkpsdm.kukar) by managing the official social media platforms, including Instagram, Facebook, and WhatsApp, to improve public relations and communication outreach.",
      "BKPSDM Kab Kukar & Dinas Sosial Kab. Kukar."
    ],
    skills:
      "Video Editing · Public Speaking · Multilingual · Social Media · Canva · Public Relations · Bahasa Indonesia",
    useList: false,
  },
  {
    id: 4,
    logo: "/pic/kukarLogo.png",
    role: "Financial Verifier",
    company: "Social Department of Kutai Kartanegara Regency · Full-time",
    period: "Jan 2022 - May 2024 · 2 yrs 5 mos",
    location: "Indonesia · On-site",
    intro: "As a Financial Verifier, I have been responsible for:",
    bullets: [
      "Responsible for planning and implementing budget verification processes to ensure effective resource allocation, which is valued up to 245K USD monthly.",
      "Analyzing financial data and preparing consolidated reports for both internal (Dinas Sosial) and external stakeholders (BPKAD)."
    ],
    skills:
      "Microsoft PowerPoint · CRM Databases · Databases · Accounting · Financial Planning · Data Quality · Data Analytics · Risk Analysis · Administration · Public Speaking · Excel Formulas · Data Analysis · Data Entry · Risk Analytics · Public Relations · Bahasa Indonesia",
  },
  {
    id: 5,
    logo: "/pic/kemenkeuLogo.jpeg",
    role: "Accounting Intern",
    company: "Kementerian Keuangan Republik Indonesia · Internship",
    period: "Feb 2021 - Apr 2021 · 3 mos",
    location: "Indonesia · On-site",
    intro: "As an Accounting Intern, I was responsible for:",
    bullets: [
      "Managing finances: preparing and organizing documents related to financial disbursement.",
      "Researched the institution's work process system and provided suggestions for possible improvements to superiors."
    ],
    skills:
      "Accounting · Microsoft Excel · Data Analytics · Microsoft Office · Finance · Administration · Excel Formulas · Bahasa Indonesia",
  },
  {
    id: 6,
    logo: "/pic/bregadaLogo.jpeg",
    role: "Teaching Assistant",
    company: "Relawan Angkatan Bregadasatya · Full-time",
    period: "Nov 2020 - Aug 2021 · 10 mos",
    location: "Indonesia · Remote",
    intro: "As a Teaching Assistant, I was responsible for:",
    bullets: [
      "Creating educational videos, summarizing materials, and serving as a tutor for Computer-Assisted Audit Techniques, Accounting Information Systems, Government Accounting Information Systems, and Applied Statistics."
    ],
    skills:
      "Accounting · SQL · Microsoft Excel · Auditing · Excel Formulas · Bahasa Indonesia",
    useList: false,
  },
];

export default function Experience() {
  const CARDS_PER_PAGE = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const totalPages = Math.ceil(EXPERIENCES.length / CARDS_PER_PAGE);

  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const paginatedExperiences = EXPERIENCES.slice(startIndex, startIndex + CARDS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  const toggleDetail = (id: number) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div id="experience" className="mt-12">
      <div className="text-center">
        <h3 className="text-gr-title font-semibold text-slate-300">Experience</h3>
        <p className="mt-[13px] text-gr-body text-slate-400">Here is a quick summary of my most recent experiences:</p>

        <div className="mt-[21px] space-y-8">
          {paginatedExperiences.map((exp) => (
            <article
              key={exp.id}
              className="relative rounded-[13px] bg-[#0b1220] border-[1.6px] border-slate-700/55 shadow-lg shadow-black/35 p-[21px] md:p-[21px] transition-all duration-300 ease-out hover:-translate-y-[3px] hover:shadow-[0_14px_30px_rgba(2,6,23,0.45)]"
            >
              <div className="grid grid-cols-12 items-start gap-[13px]">
                <div className="col-span-12 md:col-span-2 flex items-center justify-start md:justify-center">
                  <div className="w-[84px] h-[84px] md:w-[89px] md:h-[89px] flex items-center justify-center bg-transparent rounded-[8px] p-[8px]">
                    <img src={exp.logo} alt={`${exp.company ?? "logo"}`} className="max-w-full max-h-full object-contain"/>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-10 text-left">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[8px]">
                    <div>
                      <h4 className="text-gr-subtitle font-semibold text-emerald-400">{exp.role}</h4>
                      {exp.company && <p className="text-gr-body text-slate-200 mt-1">{exp.company.split("·")[0].trim()}</p>}
                    </div>

                    <div className="text-left md:text-right">
                      <p className="text-gr-small text-slate-400">{exp.period}</p>
                      {exp.location && <p className="text-gr-small text-slate-400 italic">{exp.location}</p>}
                    </div>
                  </div>

                  {exp.intro && <p className="mt-[13px] text-gr-body text-slate-200">{exp.intro}</p>}

                  <button
                    type="button"
                    onClick={() => toggleDetail(exp.id)}
                    className="mt-[13px] ml-auto block w-fit text-gr-small text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {expandedItems[exp.id] ? "Hide detail" : "View detail"}
                  </button>

                  {expandedItems[exp.id] && (
                    <>
                      {exp.useList === false ? (
                        <div className="mt-[13px] space-y-[8px]">
                          {exp.bullets.map((b, i) => (
                            <p key={i} className="text-gr-body text-slate-300">{b}</p>
                          ))}
                        </div>
                      ) : (
                        <ul className="mt-[13px] text-slate-300 list-disc list-outside pl-5 space-y-[8px]">
                          {exp.bullets.map((b, i) => <li key={i} className="text-gr-body">{b}</li>)}
                        </ul>
                      )}

                      <p className="mt-[13px] text-gr-body text-slate-300">
                        <span className="font-semibold text-slate-100">Skills:</span> {exp.skills}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="h-10 w-10 flex items-center justify-center text-2xl text-slate-400 disabled:opacity-35 disabled:cursor-not-allowed hover:text-slate-200 transition"
            aria-label="Previous page"
          >
            ←
          </button>

          {pageNumbers.map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              aria-label={`Go to page ${page}`}
              className={`h-10 w-10 flex items-center justify-center rounded-full text-gr-small transition ${
                currentPage === page
                  ? "bg-[#1f2742] text-white font-semibold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="h-10 w-10 flex items-center justify-center text-2xl text-slate-400 disabled:opacity-35 disabled:cursor-not-allowed hover:text-slate-200 transition"
            aria-label="Next page"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
