// src/components/About.tsx
import React from 'react';

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

        <div className="md:col-span-2 bg-[#071022] p-6 rounded-4xl shadow-inner">
          <span className="inline-block px-3 py-1 rounded-full bg-[#1f2937] text-sm text-slate-300">
            About me
          </span>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-100">
            Curious about me? Here you have it:
          </h2>

          <div className="mt-4 text-slate-300 space-y-4 leading-relaxed">
            <p>
              I'm a passionate, self-proclaimed programmer who specializes in full-stack
              development (React.js & Node.js). I care about bringing the technical and visual
              aspects of digital products to life, user experience, and readable, high-performance 
              code matter to me.
            </p>

            <p>
              I began my journey as a web developer in 2025. Since then I've continued to grow
              and evolve, taking on new challenges and adopting modern technologies such as Next.js,
              TypeScript, TailwindCSS, Python, PHP, and many more.
            </p>

            <p>
              I enjoy working end-to-end on products — from ideation to deployment — and I love
              building tools that make people work easier.
            </p>

            <p>
              Outside of work, I hang out on Instagram and LinkedIn. You can also find me on GitHub.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-slate-200">Finally, some quick bits about me.</h4>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300">
              <ul className="list-disc list-inside space-y-1">
                <li>B.Sc. in Systems Information</li>
                <li>Full time Civil Servant</li>
              </ul>

              <ul className="list-disc list-inside space-y-1">
                <li>Avid learner</li>
                <li>Enjoy building in public</li>
              </ul>
            </div>

            <p className="mt-4 text-slate-300">
              One last thing — I&apos;m available for freelance work, so feel free to reach out and
              say hello! I promise I don&apos;t bite 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}