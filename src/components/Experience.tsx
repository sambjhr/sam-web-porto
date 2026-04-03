"use client";

import { useState } from "react";

type ExpItem = {
  id: number;
  logo: string;      // path ke image di public/
  role: string;
  company?: string;
  period: string;
  bullets: string[];
};

const EXPERIENCES: ExpItem[] = [
  {
    id: 1,
    logo: "/pic/2.png",
    role: "Financial and Policy Analyst",
    company: "BKPSDM Pemerintah Kabupaten Kutai Kartanegara",
    period: "Jun 2024 - Present",
    bullets: [
      "Developed and coordinated strategic planning, budgeting, and performance documents aligned with institutional targets and regulations.",
      "Conducted institutional performance evaluations and prepared key outputs: performance reports, financial statements, and follow-ups to external audit findings.",
      "Monitored budget allocation vs realization, performed variance analysis, and coordinated with units to validate financial utilization."
    ],
  },
  {
    id: 2,
    logo: "/pic/2.png",
    role: "Education Facilitator",
    company: "BKPSDM Kutai Kartanegara (with Ministry of Communication and Digital Affairs)",
    period: "Apr 2024 - Present",
    bullets: [
      "Delivered structured and ad hoc digital training for civil servants through the Government Transformation Academy program.",
      "Facilitated around 72 classes with approximately 2,500 participants.",
      "Covered Excel, Microsoft Office, Power Query, and Looker Studio for data processing and visualization."
    ],
  },
  {
    id: 3,
    logo: "/pic/2.png",
    role: "Financial Verifier",
    company: "Dinas Sosial Pemerintah Kabupaten Kutai Kartanegara",
    period: "Jan 2022 - Jun 2024",
    bullets: [
      "Planned and implemented budget verification processes to support effective resource allocation.",
      "Analyzed financial data and prepared consolidated reports for internal and external stakeholders."
    ],
  },
  {
    id: 4,
    logo: "/pic/2.png",
    role: "Accountant Intern",
    company: "Lembaga National Single Window - Ministry of Finance RI",
    period: "Feb 2021 - Apr 2021",
    bullets: [
      "Prepared and organized financial disbursement documentation.",
      "Researched institutional work processes and proposed improvement recommendations."
    ],
  },
];

export default function Experience() {
  const CARDS_PER_PAGE = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(EXPERIENCES.length / CARDS_PER_PAGE);

  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const paginatedExperiences = EXPERIENCES.slice(startIndex, startIndex + CARDS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div id="experience" className="mt-12">
      <div className="text-center">
        <span className="text-gr-title text-slate-300">Experience</span>
        <h3 className="mt-6 text-gr-subtitle font-semibold text-slate-100">Here is a quick summary of my most recent experiences:</h3>

        <div className="mt-8 space-y-8">
          {paginatedExperiences.map((exp) => (
            <article
              key={exp.id}
              className="relative rounded-xl bg-[#0b1220] border border-slate-800 shadow-lg shadow-black/40 p-6 md:p-8"
            >
              <div className="grid grid-cols-12 items-start gap-4">
                {/* Logo / left */}
                <div className="col-span-12 md:col-span-2 flex items-center justify-start md:justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-transparent rounded-lg p-2">
                    <img src={exp.logo} alt={`${exp.company ?? "logo"}`} className="max-w-full max-h-full object-contain"/>
                  </div>
                </div>

                {/* Middle: role and bullets */}
                <div className="col-span-12 md:col-span-8">
                  <div className="flex items-start justify-between md:items-center">
                    <div className="text-left">
                      <h4 className="text-gr-subtitle font-semibold text-slate-100">{exp.role}</h4>
                      {exp.company && <p className="text-gr-small text-slate-400 mt-1">{exp.company}</p>}
                    </div>
                    {/* for small screens the period moves below; for md+ it's at right */}
                    <p className="text-gr-small text-slate-400 md:hidden mt-2">{exp.period}</p>
                  </div>

                  <ul className="mt-3 text-slate-300 list-disc list-outside pl-5 space-y-2 text-left">
                    {exp.bullets.map((b, i) => <li key={i} className="text-gr-small">{b}</li>)}
                  </ul>
                </div>

                {/* Right: period (visible on md+) */}
                <div className="hidden md:flex col-span-12 md:col-span-2 items-start justify-end">
                  <p className="text-gr-small text-slate-400">{exp.period}</p>
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
