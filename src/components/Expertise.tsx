"use client";

import { useState } from "react";

type Category = "all" | "frontend" | "backend" | "tools";

type Skill = {
  name: string;
  src: string;
  whiteLogoBg?: boolean;
  category: Exclude<Category, "all">;
};

const SKILLS: Skill[] = [
  { name: "JavaScript",   src: "/pic/skill/JavaScript.png",                        category: "frontend" },
  { name: "TypeScript",   src: "/pic/skill/TypeScript2.png",                        category: "frontend" },
  { name: "React",        src: "/pic/skill/React2.png",                             category: "frontend" },
  { name: "Next.js",      src: "/pic/skill/nextjs-2.svg",    whiteLogoBg: true,     category: "frontend" },
  { name: "Tailwind CSS", src: "/pic/skill/Tailwind CSS.png",                       category: "frontend" },
  { name: "Node.js",      src: "/pic/skill/Node.js.png",                            category: "backend"  },
  { name: "Express",      src: "/pic/skill/Express.png",     whiteLogoBg: true,     category: "backend"  },
  { name: "PHP",          src: "/pic/skill/PHP2.png",                               category: "backend"  },
  { name: "Python",       src: "/pic/skill/python.png",                             category: "backend"  },
  { name: "MySQL",        src: "/pic/skill/MySQL.png",                              category: "tools"    },
  { name: "Git",          src: "/pic/skill/Git2.png",                               category: "tools"    },
  { name: "Docker",       src: "/pic/skill/Docker.png",                             category: "tools"    },
  { name: "VS Code",      src: "/pic/skill/Visual Studio Code (VS Code).png",       category: "tools"    },
];

const TABS: { key: Category; label: string; count: number }[] = [
  { key: "all",      label: "All",        count: SKILLS.length },
  { key: "frontend", label: "Frontend",   count: SKILLS.filter((s) => s.category === "frontend").length },
  { key: "backend",  label: "Backend",    count: SKILLS.filter((s) => s.category === "backend").length  },
  { key: "tools",    label: "DB & Tools", count: SKILLS.filter((s) => s.category === "tools").length    },
];

const MARQUEE_ITEMS = [...SKILLS, ...SKILLS];

export default function Expertise() {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? SKILLS : SKILLS.filter((s) => s.category === active);

  return (
    <div id="skills" className="mx-auto mt-16 text-center py-4">
      <h3 className="text-gr-title font-semibold">Skills</h3>
      <span className="section-accent mt-2 mx-auto" />
      <p className="text-gr-body text-gray-500 dark:text-slate-400 mt-3">
        Technologies I work with — grouped by domain.
      </p>

      {/* ── Infinite marquee strip ── */}
      <div className="relative mt-8 overflow-hidden group">
        {/* Fade masks left & right */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-linear-to-r from-gray-50 dark:from-[#0b0f17] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-linear-to-l from-gray-50 dark:from-[#0b0f17] to-transparent" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {MARQUEE_ITEMS.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="flex flex-col items-center gap-2 px-5"
            >
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center p-1.5 ${
                  skill.whiteLogoBg ? "bg-white" : ""
                }`}
              >
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-gr-caption text-gray-400 dark:text-slate-500 whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Filter tabs ── */}
      {/* <div className="mt-8 flex justify-center flex-wrap gap-2">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-gr-small transition-all duration-200 ${
              active === tab.key
                ? "bg-emerald-500 text-black font-semibold shadow-[0_0_16px_rgba(52,211,153,0.35)]"
                : "border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"
            }`}
          >
            {tab.label}
            <span
              className={`text-gr-caption px-1.5 py-0.5 rounded-full ${
                active === tab.key
                  ? "bg-black/20 text-black"
                  : "bg-slate-800 text-slate-500"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div> */}

      {/* ── Skills grid with stagger animation ── */}
      {/* <div
        key={active}
        className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        {filtered.map((item, index) => (
          <div
            key={item.name}
            className={`stagger-card stagger-${index} group rounded-xl bg-[#0b1220] border border-slate-700/55 px-4 py-5 flex flex-col items-center gap-3 transition-colors duration-300 hover:border-emerald-500/50 hover:shadow-[0_8px_28px_rgba(52,211,153,0.10)]`}
          >
            <div
              className={`w-16 h-16 rounded-lg flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110 ${
                item.whiteLogoBg ? "bg-white" : ""
              }`}
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gr-small text-slate-300 font-semibold group-hover:text-slate-100 transition-colors">
              {item.name}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
