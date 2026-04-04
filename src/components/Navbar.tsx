export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] py-6 px-6 bg-[#0b0f17]/92 backdrop-blur-md border-b border-slate-800/60">
      <div className="container max-w-5xl mx-auto flex items-center justify-between">
        <div>
          <a href="#navbar">
            <img src="/pic/logobluebg40.png" alt="" />
          </a>
        </div>
        <nav className="hidden md:flex gap-6 text-gr-small text-slate-300">
          <a href="#about" className="hover:text-white">
            About Me
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#projects" className="hover:text-white">
            Work
          </a>
          <a href="#testimonials" className="hover:text-white">
            Testimonials
          </a>
        </nav>
        <div className="relative">
          <details className="group">
            <summary className="list-none cursor-pointer text-gr-small px-4 py-2 rounded-full border border-slate-700 text-slate-200 transition-colors duration-300 hover:bg-emerald-400 hover:border-emerald-400 hover:text-black [&::-webkit-details-marker]:hidden">
              Contact Me
            </summary>
            <div className="absolute right-0 mt-2 w-46 rounded-[13px] border border-slate-700/70 bg-[#0b1220] p-2 shadow-[0_12px_28px_rgba(2,6,23,0.45)]">
              <a
                href="https://www.linkedin.com/in/sambjhr/"
                target="_blank"
                rel="noreferrer"
                className="block rounded-[8px] px-3 py-2 text-right text-gr-small text-slate-200 hover:bg-slate-800/60"
              >
                My LinkedIn
              </a>
              <a
                href="https://wa.me/6281281015918"
                target="_blank"
                rel="noreferrer"
                className="block rounded-[8px] px-3 py-2 text-right text-gr-small text-slate-200 hover:bg-slate-800/60"
              >
                WhatsApp me
              </a>
              <a
                href="mailto:sambjhr.work@gmail.com"
                className="block rounded-[8px] px-3 py-2 text-right text-gr-small text-slate-200 hover:bg-slate-800/60"
              >
                E-mail me
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
