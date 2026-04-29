import { ExternalLink } from "lucide-react";
import { type ProjectItem, TAG_COLORS, TYPE_BADGE } from "@/data/projects";

export default function ProjectCard({ p }: { p: ProjectItem }) {
  return (
    <article className="group flex flex-col rounded-2xl bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-slate-700/55 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 dark:hover:border-slate-600/70 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_16px_40px_rgba(2,6,23,0.5)]">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          className="w-full h-44 object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0b1220]/80 via-transparent to-transparent" />
        <span className={`absolute top-3 right-3 text-gr-caption px-2.5 py-1 rounded-full border font-medium ${TYPE_BADGE[p.type]}`}>
          {p.type}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 gap-3 p-5">
        <div>
          <h4 className="text-gr-subtitle font-semibold text-gray-900 dark:text-slate-100 leading-snug">{p.title}</h4>
          <p className="mt-0.5 text-gr-caption text-emerald-500 dark:text-emerald-400/80">{p.org}</p>
        </div>

        <p className="text-gr-body text-gray-500 dark:text-slate-400 leading-relaxed flex-1">{p.desc}</p>

        <div className="flex items-end justify-between gap-3 flex-wrap mt-1">
          <div className="flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span
                key={t.name}
                className={`px-2 py-0.5 text-gr-caption rounded-full border ${TAG_COLORS[t.color]}`}
              >
                {t.name}
              </span>
            ))}
          </div>

          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1.5 text-gr-small text-emerald-500 dark:text-emerald-400 hover:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
            >
              Live demo <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
