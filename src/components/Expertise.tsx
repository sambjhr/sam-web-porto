// src/components/Expertise.tsx

const SKILL_ITEMS: { name: string; src: string }[] = [
  { name: "Javascript", src: "/pic/skill/javascrip.png" },
  { name: "Typescript", src: "/pic/skill/typescript.png" },
  { name: "React", src: "/pic/skill/react.png" },
  { name: "Next.js", src: "/pic/skill/nextjs.png" },
  { name: "Node.js", src: "/pic/skill/nodejs.png" },
  { name: "Express.js", src: "/pic/skill/expressjs.png" },
  { name: "Tailwindcss", src: "/pic/skill/taiwind.png" },
  { name: "PHP", src: "/pic/skill/php.png" },
  { name: "Python", src: "/pic/skill/python.png" },
  { name: "Git", src: "/pic/skill/git.png" },
];

export default function Expertise() {
  return (
    <div id="skills" className="mx-auto mt-12 text-center py-4">
      <h3 className="text-3xl font-semibold">Skills</h3>
      <p className="text-slate-400 mt-2">
        The skills, tools and technologies I am really good at:
      </p>

      <div className="mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-y-8 gap-x-6 items-center justify-items-center">
          {SKILL_ITEMS.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center rounded-lg p-3">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-15 h-15 md:w-20 md:h-20 object-contain"
                />
              </div>
              <div className="mt-3 text-s text-slate-300">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}