"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const NAV_LINKS = [
  { href: "#about", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "/projects", label: "Project" },
  { href: "#experience", label: "Work" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex items-center px-4 py-3 md:px-8">
      {/* Floating pill */}
      <div className="w-full max-w-5xl mx-auto bg-white/90 dark:bg-[#0b0f17]/90 backdrop-blur-md rounded-full border border-gray-200 dark:border-slate-800/60 px-4 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
        <div className="relative flex w-full items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center">
            <img
              src={theme === "dark" ? "/pic/logobluebg40.png" : "/pic/logowhitebg.png"}
              alt="Sam logo"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5 text-gr-small" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    if (link.href.startsWith("#")) setActiveSection(link.href.slice(1));
                  }}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-emerald-400/10 text-emerald-500 dark:text-emerald-400 font-semibold"
                      : "text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right section */}
          <div className="flex shrink-0 items-center gap-1.5">
            {/* Dark mode toggle */}
            <button
              type="button"
              onClick={toggle}
              className="h-8 w-8 shrink-0 rounded-full flex items-center justify-center text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800/60 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden h-9 w-9 shrink-0 rounded-full flex items-center justify-center text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800/60 transition-colors"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen ? "true" : "false"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Desktop CTA */}
            <a
              href="https://wa.me/6281281015918"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-6 py-2 rounded-full bg-emerald-500 text-black text-gr-small font-semibold hover:bg-emerald-400 transition-colors duration-200 shadow-sm"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile menu — absolute below pill */}
          {menuOpen && (
            <div className="absolute -inset-x-4 top-[calc(100%+0.75rem)] z-50 rounded-2xl bg-white dark:bg-[#0b0f17] border border-gray-200 dark:border-slate-800/60 p-4 shadow-xl md:hidden">
              <div className="space-y-1">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setMenuOpen(false);
                        if (link.href.startsWith("#")) setActiveSection(link.href.slice(1));
                      }}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-emerald-400/10 text-emerald-500 dark:text-emerald-400 font-semibold"
                          : "text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800/50"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <div className="border-t border-gray-200 dark:border-slate-800/40 mt-3 pt-3">
                  <a
                    href="https://wa.me/6281281015918"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-center px-4 py-2.5 rounded-full bg-emerald-500 text-black text-sm font-semibold hover:bg-emerald-400 transition-colors shadow-sm"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}
