export type TagColor = "yellow" | "sky" | "orange" | "violet" | "slate";
export type ProjectType = "Government" | "Freelance" | "Education";

export type Tech = {
  name: string;
  color: TagColor;
};

export type ProjectImage = {
  src: string;
  caption?: string;
};

export type ProjectSection = {
  heading: string;
  items: string[];
};

export type ProjectDetail = {
  /** Longer intro paragraph(s) shown at the top of the detail page. */
  summary?: string;
  role?: string;
  /** Free-text full tech stack line, e.g. "Next.js · Tailwind · Prisma". */
  techStack?: string;
  /** Sections such as "Fitur utama" or "Sorotan teknis". */
  sections?: ProjectSection[];
  /** Extra images to illustrate parts of the project. */
  gallery?: ProjectImage[];
};

export type ProjectItem = {
  id: number;
  slug: string;
  title: string;
  org: string;
  type: ProjectType;
  desc: string;
  img: string;
  tech: Tech[];
  url?: string;
  detail?: ProjectDetail;
};

export const TAG_COLORS: Record<TagColor, string> = {
  yellow: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
  sky:    "bg-sky-500/10    border-sky-500/30    text-sky-400",
  orange: "bg-orange-500/10 border-orange-500/30 text-orange-400",
  violet: "bg-violet-500/10 border-violet-500/30 text-violet-400",
  slate:  "bg-slate-700/40  border-slate-600/40  text-slate-400",
};

export const TYPE_BADGE: Record<ProjectType, string> = {
  Government: "bg-emerald-500/15 border-emerald-500/40 text-emerald-400",
  Freelance:  "bg-violet-500/15  border-violet-500/40  text-violet-400",
  Education:  "bg-sky-500/15     border-sky-500/40     text-sky-400",
};

export function screenshotUrl(siteUrl: string) {
  return `https://api.microlink.io/?url=${encodeURIComponent(siteUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 2,
    slug: "online-exam-system",
    title: "Online Exam System for Civil Servants",
    org: "BKPSDM, Kutai Kartanegara",
    type: "Freelance",
    desc: "Fullstack developer for a web-based examination system for the Kutai Kartanegara Regency HR Agency (BKPSDM) to evaluate civil servants' (ASN) understanding of the training they complete. Built to support ~1.000 concurrent test-takers over a 5-hour window.",
    img: "/pic/project/ujianonline.jpg",
    tech: [
      { name: "JavaScript",  color: "yellow" },
      { name: "REST API",    color: "sky"    },
      { name: "PostgreSQL",   color: "orange" },
      { name: "Full-Stack",   color: "slate"  },
      { name: "Dashboard",   color: "violet"  },
    ],
    url: "https://ujianonlinekukar.up.railway.app",
    detail: {
      summary:
        "A web-based examination system for the Kutai Kartanegara Regency HR Agency (BKPSDM) to evaluate civil servants' (ASN) understanding of the training they complete. Built to support ~2000 concurrent test-takers",
      role: "Full-stack Developer (database design, backend API, frontend, deployment).",
      techStack:
        "Next.js (App Router, React 19, TypeScript) · Tailwind CSS · Express.js · Prisma ORM · PostgreSQL · JWT auth.",
      sections: [
        {
          heading: "Highlights",
          items: [
            "Multi-role access control (Super Admin / Class Admin / Teacher / Student) where a single account can hold several roles, with tiered permissions.",
            "Academic management: classes & subjects (many-to-many), teacher/student exam management, and bulk user import via Excel/CSV.",
            "Flexible exam builder: multiple-choice, true/false, and essay questions; a randomized question bank (e.g. draw 50 of 100 per attempt) and bulk CSV question import.",
            "Dynamic class-based assignment: assign exams to whole classes; newly added students are included automatically.",
            "Exam anti-cheating lockdown: enforced fullscreen, auto-submit on tab/app switch, key & right-click blocking, screenshot detection, and a mandatory rules agreement.",
            "Auto + manual grading, KKM-capped remedial attempts, and Excel score export.",
            "Layered backend architecture (router → controller → service → DTO) with Prisma migrations for a complex relational schema.",
          ],
        },
      ],
      gallery: [
        // Add images to illustrate each part, e.g.:
        // { src: "/pic/project/online-exam/dashboard.png", caption: "Real-time monitoring dashboard" },
      ],
    },
  },
  {
    id: 1,
    slug: "bangkom-lms",
    title: "BANGKOM Learning Management System",
    org: "BKPSDM, Kutai Kartanegara",
    type: "Government",
    desc: "Led end-to-end delivery of an LMS for civil servant competency development. Defined data models, coordinated a cross-functional team (analyst, programmers, DBA, security), integrated ASN personnel systems, and built real-time monitoring dashboards with role-based access control.",
    img: "/pic/project/BangkomKukar.png",
    tech: [
      { name: "Prisma ORM",  color: "sky"    },
      { name: "JavaScript",  color: "yellow" },
      { name: "REST API",    color: "sky"    },
      { name: "RBAC",        color: "violet" },
      { name: "Dashboard",   color: "slate"  },
    ],
    url: "https://bangkom.kukarkab.go.id",
  },
  {
    id: 3,
    slug: "pelayanan-siswa-grii",
    title: "Pelayanan Siswa GRII Samarinda",
    org: "GRII Samarinda",
    type: "Freelance",
    desc: "Led end-to-end delivery of an LMS for civil servant competency development. Defined data models, coordinated a cross-functional team (analyst, programmers, DBA, security), integrated ASN personnel systems, and built real-time monitoring dashboards with role-based access control.",
    img: "/pic/project/BangkomKukar.png",
    tech: [
      { name: "Prisma ORM",  color: "sky"    },
      { name: "JavaScript",  color: "yellow" },
      { name: "REST API",    color: "sky"    },
      { name: "RBAC",        color: "violet" },
      { name: "Dashboard",   color: "slate"  },
    ],
    url: "https://bangkom.kukarkab.go.id",
  },
  {
    id: 4,
    slug: "praktis-attendance",
    title: "PRAKTIS — Integrated ASN Attendance System",
    org: "Kutai Kartanegara Regency Government",
    type: "Government",
    desc: "Led development of a multi-platform attendance system with face recognition and offline mode. Delivered on Web, Android, and iOS within a 60-day timeline. Integrated with e-Kinerja BKN webservice; adopted across government units for improved ASN discipline tracking.",
    img: "/pic/project/Praktis.png",
    tech: [
      { name: "JavaScript",       color: "yellow" },
      { name: "Face Recognition", color: "violet" },
      { name: "Android / iOS",    color: "sky"    },
      { name: "e-Kinerja BKN",    color: "slate"  },
      { name: "Offline Mode",     color: "slate"  },
    ],
    url: "https://praktis.kukarkab.go.id",
  },
  {
    id: 5,
    slug: "laundry-web-app",
    title: "Laundry Web App",
    org: "Purwadhika Final Project",
    type: "Education",
    desc: "Full-stack multi-outlet laundry e-commerce platform. Led development of driver & worker attendance, job tracking, station-based order queues, and real-time notifications. Implemented server-side pagination, filtering, sorting, and admin reporting.",
    img: screenshotUrl("https://finpro-fe.vercel.app"),
    tech: [
      { name: "Next.js",      color: "yellow" },
      { name: "Node.js",      color: "sky"    },
      { name: "PostgreSQL",   color: "orange" },
      { name: "Full-Stack",   color: "slate"  },
      { name: "Mobile-first", color: "slate"  },
    ],
    url: "https://finpro-fe.vercel.app",
  },
  {
    id: 6,
    slug: "simasos",
    title: "SIMASOS — Public Complaint Reporting System",
    org: "Dinas Sosial, Kutai Kartanegara",
    type: "Government",
    desc: "Designed and developed a workflow-driven citizen complaint platform. Covered full system analysis, business-flow design, and frontend implementation. Enabled social department staff to track, triage, and resolve public reports in real time.",
    img: "/pic/project/Simasos.png",
    tech: [
      { name: "JavaScript",      color: "yellow" },
      { name: "MySQL",           color: "orange" },
      { name: "Workflow Design", color: "slate"  },
      { name: "System Analysis", color: "slate"  },
    ],
  },
  {
    id: 7,
    slug: "asset-management-system",
    title: "Asset Management Information System",
    org: "Freelance Project",
    type: "Freelance",
    desc: "Built a full-stack asset management solution covering backend logic, REST API design, frontend implementation, and complete asset lifecycle tracking — from procurement and assignment to depreciation reporting.",
    img: "/pic/project/bangkom.png",
    tech: [
      { name: "JavaScript", color: "yellow" },
      { name: "Node.js",    color: "sky"    },
      { name: "PostgreSQL", color: "orange" },
      { name: "REST API",   color: "sky"    },
      { name: "Full-Stack", color: "slate"  },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
