const PROJECTS = [
  { 
    id:1, 
    title:'E‑Learning Platform (LMS)', 
    desc:'Platform LMS untuk 20.000 pengguna', 
    img:'/pic/project/bangkom.png', 
    tech:['Javascript','Node.js','TypeScript', 'Git', 'Tailwind CSS'] 
  },
  { 
    id:2, 
    title:'Dashboard Keuangan', 
    desc:'Dashboard reporting', 
    img:'/pic/project/epantau.png', 
    tech:['Next.js','Express.js', 'Python'] 
  }
]

export default function Projects(){
  return (
    <div id="projects" className="mt-12 ">
      <h3 className="text-2xl font-semibold text-center">Selected Projects</h3>
      <div className="mt-6 grid gap-6">
        {PROJECTS.map(p => (
          <div key={p.id} className="p-4 bg-[#071022] rounded-xl border border-slate-800 grid md:grid-cols-3 gap-4">
            <div className="md:col-span-1 flex items-center justify-center">
              <img src={p.img} alt={p.title} className="w-full rounded-lg object-cover max-h-44" />
            </div>
            <div className="md:col-span-2">
              <h4 className="font-semibold text-lg">{p.title}</h4>
              <p className="mt-2 text-slate-300">{p.desc}</p>
              <div className="mt-3 flex gap-2 flex-wrap text-xs">
                {p.tech.map((t,idx)=> <span key={idx} className="px-2 py-1 bg-[#08122a] rounded-full border border-slate-800">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}