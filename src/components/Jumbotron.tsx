"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const ROLES = [
  "Full-Stack Web Developer",
  "Business Analyst",
  "Education Facilitator",
];

const STATS = [
  { value: "3+", label: "Years Freelancing" },
  { value: "2,500+", label: "Students Trained" },
  { value: "3.78", label: "GPA — BINUS" },
  { value: "5+", label: "IT Projects Delivered" },
];

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function Jumbotron() {
  const name = "Samuel Haposan Banjarnahor";
  const { theme } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <div className="relative flex flex-col gap-8" id="home">
      {/* Ambient glow background */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[600px] h-[400px] rounded-full bg-emerald-500/5 blur-[120px]" />

      {/* Hero grid: text + photo */}
      <div className="grid md:grid-cols-3 gap-8 items-center py-8">
        {/* Left column */}
        <div className="md:col-span-2 animate-fade-in-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-gr-caption text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </div>

          <h1 className="text-gr-hero font-extrabold leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-emerald-500 dark:text-emerald-400">{name}</span>
          </h1>

          <div className="mt-3 h-8 flex items-center">
            <span className="text-gr-subtitle text-gray-600 dark:text-slate-300 font-medium">{displayed}</span>
            <span className="ml-0.5 inline-block w-0.5 h-5 bg-emerald-500 dark:bg-emerald-400 cursor-blink" />
          </div>

          <p className="mt-4 text-gr-body text-gray-500 dark:text-slate-400 max-w-xl">
            Building fast, accessible, and impactful digital experiences — from
            government systems to data-driven solutions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <a
              href="#projects"
              className="text-gr-small px-5 py-2.5 rounded-full bg-emerald-500 text-black font-semibold transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_22px_rgba(52,211,153,0.45)]"
            >
              View Projects
            </a>
            <a
              href="/cv/CV_Samuel_ATS_Purwadhika.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gr-small px-5 py-2.5 rounded-full border border-gray-300 dark:border-slate-600 text-gray-600 dark:text-slate-300 font-medium transition-all duration-300 hover:border-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-400"
            >
              Download CV
            </a>
          </div>

          <div className="mt-6 flex gap-5 items-center">
            <a href="https://www.linkedin.com/in/sambjhr/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 dark:text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/sambjhr" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 dark:text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200">
              <GitHubIcon />
            </a>
            <a href="mailto:sambjhr.work@gmail.com" aria-label="Email" className="text-gray-400 dark:text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200">
              <MailIcon />
            </a>
            <a href="https://wa.me/6281281015918" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 dark:text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200">
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        {/* Profile photo */}
        <div className="flex justify-center animate-fade-in-up-delay">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-emerald-400/15 blur-2xl scale-110" />
            <div className="relative w-52 h-52 md:w-60 md:h-60 rounded-full border-2 border-emerald-400/40 p-1 glow-ring">
              <img
                src={theme === "dark" ? "/pic/fotoUtamaDark.png" : "/pic/fotoUtamaLight.png"}
                alt="Samuel Haposan Banjarnahor"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-[#0b1220] rounded-[13px] border border-gray-200 dark:border-slate-700/55 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_8px_24px_rgba(52,211,153,0.08)]"
          >
            <div className="text-2xl font-extrabold text-emerald-500 dark:text-emerald-400">{stat.value}</div>
            <div className="mt-1 text-gr-caption text-gray-500 dark:text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
