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
    role: "Sr. Frontend Developer",
    company: "Upwork",
    period: "Nov 2021 - Present",
    bullets: [
      "Membangun UI responsif dan performa tinggi untuk aplikasi klien.",
      "Optimisasi bundle, lazy-loading, dan code-splitting.",
      "Menulis dokumentasi dan melakukan code review."
    ]
  },
  {
    id: 2,
    logo: "/pic/2.png",
    role: "Team Lead",
    company: "Upwork",
    period: "Jul 2017 - Oct 2021",
    bullets: [
      "Memimpin tim 4-6 engineer untuk beberapa proyek klien.",
      "Mentoring, arsitektur, dan proses deployment.",
      "Meningkatkan kecepatan release melalui CI/CD."
    ]
  },
  {
    id: 3,
    logo: "/pic/2.png",
    role: "Full Stack Developer",
    company: "Upwork",
    period: "Dec 2015 - May 2017",
    bullets: [
      "Mengembangkan fitur end-to-end (React + Node).",
      "Membangun API, integrasi database, dan pengujian."
    ]
  }
];

export default function Experience() {
  return (
    <div id="experience" className="mt-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="text-3xl text-slate-300">Experience</span>
        <h3 className="mt-6 text-xl md:text-2xl font-semibold text-slate-100">Here is a quick summary of my most recent experiences:</h3>

        <div className="mt-8 space-y-8">
          {EXPERIENCES.map(exp => (
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
                    <h4 className="text-lg md:text-xl font-semibold text-slate-100">{exp.role}</h4>
                    {/* for small screens the period moves below; for md+ it's at right */}
                    <p className="text-sm text-slate-400 md:hidden mt-2">{exp.period}</p>
                  </div>

                  <ul className="mt-3 text-slate-300 list-disc list-inside space-y-2 text-left md:text-left">
                    {exp.bullets.map((b, i) => <li key={i} className="text-sm leading-relaxed">{b}</li>)}
                  </ul>
                </div>

                {/* Right: period (visible on md+) */}
                <div className="hidden md:flex col-span-12 md:col-span-2 items-start justify-end">
                  <p className="text-sm text-slate-400">{exp.period}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}