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
      <div className="mt-6 grid gap-6">
        {paginatedProjects.map((p) => (
          <div key={p.id} className="p-4 bg-[#071022] rounded-xl border border-slate-800 grid md:grid-cols-3 gap-4">
            <div className="md:col-span-1 flex items-center justify-center">
              <img src={p.img} alt={p.title} className="w-full rounded-lg object-cover max-h-44" />
            </div>
            <div className="md:col-span-2">
              <h4 className="font-semibold text-gr-subtitle">{p.title}</h4>
              <p className="mt-2 text-gr-body text-slate-300">{p.desc}</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {p.tech.map((t) => (
                  <span key={`${p.id}-${t}`} className="px-2 py-1 text-gr-caption bg-[#08122a] rounded-full border border-slate-800">
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
