// src/components/Expertise.tsx

const PROGRAMMING_SKILLS: { name: string; src: string; needsLightBg?: boolean }[] = [
  { name: "JavaScript", src: "/pic/skill/javascrip.png" },
  { name: "TypeScript", src: "/pic/skill/typescript.png" },
  { name: "React", src: "/pic/skill/react.png" },
  { name: "Next.js", src: "/pic/skill/nextjs.png", needsLightBg: true },
  { name: "Express.js", src: "/pic/skill/expressjs.png", needsLightBg: true },
  { name: "Python", src: "/pic/skill/python.png" },
  { name: "Git & GitHub", src: "/pic/skill/git.png" },
];

const DATA_AND_TOOLS: string[] = [
  "PostgreSQL",
  "MySQL",
  "Database Design",
  "Database Query",
  "Microsoft Office",
  "Looker Studio",
  "Project Management & Collaboration",
  "Docker",
];

export default function Expertise() {
  return (
    <div id="skills" className="mx-auto mt-12 text-center py-4">
      <h3 className="text-gr-title font-semibold">Skills</h3>
      <p className="text-gr-body text-slate-400 mt-2">
        Skills, tools, and technologies aligned with my CV profile:
      </p>

      <div className="mt-8">
        <h4 className="text-left text-gr-subtitle font-semibold text-slate-200">Programming</h4>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-6 items-center justify-items-center">
          {PROGRAMMING_SKILLS.map((item) => (
            <div key={item.name} className="flex flex-col items-center justify-center">
              <div
                className={`flex items-center justify-center rounded-lg p-3 ${
                  item.needsLightBg ? "bg-white" : ""
                }`}
              >
                <img src={item.src} alt={item.name} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
              </div>
              <div className="mt-3 text-gr-small text-slate-300">{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h4 className="text-left text-gr-subtitle font-semibold text-slate-200">Data & Tools</h4>
        <div className="mt-4 flex flex-wrap gap-3 justify-start">
          {DATA_AND_TOOLS.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-full text-gr-small text-slate-200 bg-[#08122a] border border-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
