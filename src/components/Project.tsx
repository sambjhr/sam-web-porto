"use client";

import { useState } from "react";

type ProjectItem = {
  id: number;
  title: string;
  desc: string;
  img: string;
  tech: string[];
};

const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Public Complaint Reporting System",
    desc: "Designed and developed a workflow-driven application for citizen complaint reporting at Dinas Sosial.",
    img: "/pic/project/epantau.png",
    tech: ["JavaScript", "Workflow Design", "System Analysis"],
  },
  {
    id: 2,
    title: "BANGKOM Learning Management System",
    desc: "Designed system flow and database architecture for competency development and certification management.",
    img: "/pic/project/bangkom.png",
    tech: ["Prisma ORM", "Database Design", "LMS"],
  },
  {
    id: 3,
    title: "PNS Attendance System (iOS & Android)",
    desc: "Led system flow and database design for a mobile-based attendance system in Kutai Kartanegara.",
    img: "/pic/project/epantau.png",
    tech: ["Mobile System Design", "Database Architecture", "Business Flow"],
  },
  {
    id: 4,
    title: "Asset Management Information System",
    desc: "Built an end-to-end asset management solution, covering backend logic, frontend implementation, and asset tracking.",
    img: "/pic/project/bangkom.png",
    tech: ["JavaScript", "PostgreSQL", "Full-Stack Development"],
  },
];

export default function Projects() {
  const CARDS_PER_PAGE = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(PROJECTS.length / CARDS_PER_PAGE);

  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const paginatedProjects = PROJECTS.slice(startIndex, startIndex + CARDS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div id="projects" className="mt-12">
      <h3 className="text-gr-title font-semibold text-center">Selected Projects</h3>
      <p className="mt-[13px] text-gr-body text-slate-400 text-center">A curated selection of projects that represent my recent work.</p>
      <div className="mt-[21px] grid gap-6">
        {paginatedProjects.map((p, index) => (
          <div
            key={p.id}
            className="px-[13px] py-[13px] bg-[#0b1220] rounded-[13px] border-[1.6px] border-slate-700/55 grid md:grid-cols-3 gap-[13px] transition-all duration-300 ease-out hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(2,6,23,0.4)]"
          >
            <div className={`md:col-span-1 flex items-center justify-center ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
              <img src={p.img} alt={p.title} className="w-full rounded-[8px] object-cover max-h-44" />
            </div>
            <div className={`md:col-span-2 flex flex-col justify-center gap-[13px] ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
              <h4 className="font-semibold text-gr-subtitle text-emerald-400">{p.title}</h4>
              <p className="text-gr-body text-slate-300">{p.desc}</p>
              <div className="flex gap-[8px] flex-wrap">
                {p.tech.map((t) => (
                  <span
                    key={`${p.id}-${t}`}
                    className="px-[8px] py-[5px] text-gr-caption bg-[#0b1220] rounded-full border border-slate-700/55"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
  );
}
