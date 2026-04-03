export default function Navbar(){
  return (
    <header className="py-6 px-6 bg-transparent">
      <div className="container max-w-5xl mx-auto flex items-center justify-between">
        <div>
          <a href="#navbar"><img src="/pic/logobluebg40.png" alt="" /></a>
          
        </div>
        <nav className="hidden md:flex gap-6 text-gr-small text-slate-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Work</a>
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
        </nav>
        <div>
          <a href="#contact" className="hover:text-white text-gr-small px-4 py-2 rounded-full border border-slate-700">Contact Me</a>
        </div>
      </div>
    </header>
  )
}
