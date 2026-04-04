export default function About() {
  return (
    <div id="about" className="mt-12">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="relative md:col-span-1 flex justify-center">
            <div className="p-4">
              <img
                src="/pic/fotoAbout.png"
                alt="Foto about"
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
        </div>

        <div className="md:col-span-2 bg-[#0b1220] p-6 rounded-4xl shadow-inner border border-slate-700/45">
          <h2 className="text-gr-title font-semibold text-slate-100">
            Curious <span className="text-emerald-400">about me</span>? Here you have it:
          </h2>

          <div className="mt-4 text-gr-body text-slate-300 space-y-4">
            <p>
              I am an Information Systems graduate from BINUS University with an
              accounting foundation from PKN STAN. My background combines public finance,
              data analytics, and full-stack development to build practical solutions.
            </p>

            <p>
              Currently, I work as a Financial and Policy Analyst at BKPSDM Kutai
              Kartanegara, where I support strategic planning, budgeting, institutional
              performance evaluation, and reporting. I also contribute as an Education
              Facilitator, delivering digital skills training for civil servants.
            </p>

            <p>
              Since 2023, I have also worked on freelance IT projects, including
              learning management systems, public complaint reporting systems, attendance
              systems, and asset management platforms.
            </p>

            <p>
              I am looking for opportunities in Full Stack Development and Data Analytics,
              with strong interest in building reliable systems, data-driven decisions,
              and impactful digital services.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-gr-subtitle font-semibold text-emerald-400">Finally, some quick bits about me.</h4>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gr-small text-slate-300">
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Bachelor in Information Systems, BINUS University (GPA 3.78)</li>
                <li>Associate in Accountancy, PKN STAN</li>
              </ul>

              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Financial and Policy Analyst at BKPSDM Kutai Kartanegara</li>
                <li>Freelance IT and Full-Stack Developer since 2023</li>
              </ul>
            </div>

            <p className="mt-4 text-gr-body text-slate-300">
              I am open to collaboration for Full Stack and Data Analytics projects.
              Feel free to connect via LinkedIn or email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
