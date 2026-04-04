const SKILLS: { name: string; src: string; whiteLogoBg?: boolean }[] = [
  { name: "JavaScript", src: "/pic/skill/JavaScript.png" },
  { name: "TypeScript", src: "/pic/skill/TypeScript2.png" },
  { name: "React", src: "/pic/skill/React2.png" },
  { name: "Next.js", src: "/pic/skill/nextjs-2.svg", whiteLogoBg: true },
  { name: "Node.js", src: "/pic/skill/Node.js.png" },
  { name: "Express", src: "/pic/skill/Express.png", whiteLogoBg: true },
  { name: "PHP", src: "/pic/skill/PHP2.png" },
  { name: "Python", src: "/pic/skill/python.png" },
  { name: "MySQL", src: "/pic/skill/MySQL.png" },
  { name: "Git", src: "/pic/skill/Git2.png" },
  { name: "Docker", src: "/pic/skill/Docker.png" },
  { name: "Tailwind CSS", src: "/pic/skill/Tailwind CSS.png" },
  { name: "VS Code", src: "/pic/skill/Visual Studio Code (VS Code).png" },
];

export default function Expertise() {
  return (
    <div id="skills" className="mx-auto mt-12 text-center py-4">
      <h3 className="text-gr-title font-semibold">Skills</h3>
      <p className="text-gr-body text-slate-400 mt-[13px]">
        Skills, tools, and technologies aligned with my CV profile:
      </p>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {SKILLS.map((item, index) => (
          <div
            key={item.name}
            className={`rounded-[13px] bg-[#1f232d] border-[1.6px] border-slate-700/55 px-[13px] py-[13px] flex flex-col items-center transition-all duration-300 ease-out hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(2,6,23,0.35)] ${
              SKILLS.length % 5 === 3 && index === SKILLS.length - 3 ? "lg:col-start-2" : ""
            }`}
          >
            <div
              className={`w-[84px] h-[84px] rounded-[8px] flex items-center justify-center p-[8px] ${
                item.whiteLogoBg ? "bg-white" : ""
              }`}
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-[13px] text-gr-subtitle text-slate-100 text-center font-semibold">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
