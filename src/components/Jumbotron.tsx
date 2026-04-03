export default function Jumbotron(){
  const name = 'Samuel Haposan Banjarnahor'
  const title = 'Full-Stack Web Developer'
  const email = 'sambjhr.work@gmail.com'

  return (
    <div className="grid md:grid-cols-3 gap-6 items-center" id="about">
      <div className="md:col-span-2">
        <h1 className="text-gr-hero font-extrabold">Hi, I'm <span className="text-emerald-400">{name}</span> 👋</h1>
        <p className="mt-4 text-gr-body text-slate-300 max-w-xl">{title} with a focus on creating digital experiences that are fast, accessible, visually appealing, and responsive.</p>

        <div className="mt-6 flex gap-3">
          <a href="#projects" className="text-gr-small px-5 py-2 rounded-full bg-emerald-500 text-black font-medium">Project</a>
          <a href={`mailto:${email}`} className="text-gr-small px-4 py-2 rounded-full border border-slate-700">Contact Me</a>
        </div>
      </div>

      <div className="p-4 from-[#0f1724] to-[#0b1220] rounded-xl shadow-xl flex justify-center">
        <img src="/pic/fotoUtama.png" alt="profile" className="" />
      </div>
    </div>
  )
}
