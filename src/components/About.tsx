import { GraduationCap, Briefcase, Code2, Target } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    label: "Education",
    detail: "Information Systems @ Binus University",
  },
  {
    icon: Briefcase,
    label: "Current Role",
    detail: "Freelance · Financial & Policy Analyst",
  },
  {
    icon: Code2,
    label: "Developer Since",
    detail: "2023 · 4+ IT projects delivered",
  },
  {
    icon: Target,
    label: "Open To",
    detail: "Full-Stack Dev & Business Analyst",
  },
];

const TAGS = [
  "Full-Stack Dev",
  "Business Analyst",
  "2,500+ Students Trained",
  "Government Tech",
  "Data-Driven",
];

export default function About() {
  return (
    <div id="about" className="mt-16">
      {/* Section header */}
      <div className="mb-8">
        <h2 className="text-gr-title font-semibold text-gray-900 dark:text-slate-100">
          About <span className="text-emerald-500 dark:text-emerald-400">Me</span>
        </h2>
        <span className="section-accent mt-2" />
      </div>

      {/* Main grid */}
      <div className="grid md:grid-cols-5 gap-6 items-start">
        {/* Photo column */}
        <div className="md:col-span-2">
          <div className="relative group">
            <img
              src="/pic/IMG_9253.jpg"
              alt="Samuel about"
              className="w-full rounded-2xl object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-linear-to-t from-[#0b0f17]/95 via-[#0b0f17]/70 to-transparent px-5 py-4">
              <p className="text-gr-small font-semibold text-emerald-400">
                Full Stack Developer
              </p>
              <p className="text-gr-caption text-slate-400 mt-0.5">
                Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Content column */}
        <div className="md:col-span-3 flex flex-col gap-5">
          {/* Short bio */}
          <div className="bg-white dark:bg-[#0b1220] rounded-2xl border border-gray-200 dark:border-slate-700/45 p-5">
            <p className="text-gr-body text-gray-600 dark:text-slate-300 leading-relaxed">
              Information Systems graduate from BINUS University with an accounting
              foundation from PKN STAN — combining <span className="text-gray-900 dark:text-slate-100 font-medium">public finance</span>,{" "}
              <span className="text-gray-900 dark:text-slate-100 font-medium">data analytics</span>, and{" "}
              <span className="text-gray-900 dark:text-slate-100 font-medium">full-stack development</span> to
              build practical, impactful digital solutions.
            </p>
            <p className="mt-3 text-gr-body text-gray-500 dark:text-slate-400">
              Currently serving at BKPSDM Kutai Kartanegara as a Financial & Policy
              Analyst, while also delivering digital skills training for civil servants
              and taking on freelance IT projects since 2023.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-3">
            {HIGHLIGHTS.map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                className="bg-white dark:bg-[#0b1220] rounded-xl border border-gray-200 dark:border-slate-700/45 p-4 flex gap-3 items-start transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_6px_20px_rgba(52,211,153,0.07)] hover:-translate-y-0.5"
              >
                <div className="mt-0.5 shrink-0 text-emerald-500 dark:text-emerald-400">
                  <Icon size={17} />
                </div>
                <div>
                  <p className="text-gr-small font-semibold text-gray-900 dark:text-slate-100">{label}</p>
                  <p className="text-gr-caption text-gray-500 dark:text-slate-400 mt-0.5 leading-snug">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tag pills */}
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-gr-caption bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
