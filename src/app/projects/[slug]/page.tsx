import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS, getProjectBySlug, TAG_COLORS, TYPE_BADGE, formatPeriod } from "@/data/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found — Samuel Haposan" };
  return {
    title: `${project.title} — Samuel Haposan`,
    description: project.detail?.summary ?? project.desc,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { title, org, type, desc, img, tech, url, detail } = project;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0b0f17] text-gray-900 dark:text-slate-200">
      <Navbar />

      <article className="container max-w-4xl mx-auto px-6 pt-16 pb-20">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className={`text-gr-caption px-2.5 py-1 rounded-full border font-medium ${TYPE_BADGE[type]}`}>
            {type}
          </span>
          <span className="text-gr-caption text-emerald-500 dark:text-emerald-400/80">{org}</span>
          <span className="inline-flex items-center gap-1.5 text-gr-caption text-gray-500 dark:text-slate-400">
            <CalendarDays size={13} /> {formatPeriod(project)}
          </span>

          <Link
            href="/projects"
            className="ml-auto inline-flex items-center gap-1.5 text-gr-small text-gray-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft size={15} /> Back to projects
          </Link>
        </div>

        <h1 className="text-gr-title font-bold text-gray-900 dark:text-slate-100 leading-tight">{title}</h1>
        <span className="section-accent mt-3" />

        {/* Cover image */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-700/55">
          <img src={img} alt={title} className="w-full object-cover object-top" />
        </div>

        {/* Summary */}
        <p className="mt-6 text-gr-body text-gray-600 dark:text-slate-300 leading-relaxed">
          {detail?.summary ?? desc}
        </p>

        {/* Role */}
        {detail?.role && (
          <p className="mt-5 text-gr-body text-gray-600 dark:text-slate-300">
            <span className="font-semibold text-gray-900 dark:text-slate-100">Role: </span>
            {detail.role}
          </p>
        )}

        {/* Tech stack */}
        <div className="mt-5">
          <span className="text-gr-body font-semibold text-gray-900 dark:text-slate-100">Tech stack</span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <span
                key={t.name}
                className={`px-2 py-0.5 text-gr-caption rounded-full border ${TAG_COLORS[t.color]}`}
              >
                {t.name}
              </span>
            ))}
          </div>
        </div>

        {/* Live demo */}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 text-black font-semibold text-gr-small transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_22px_rgba(52,211,153,0.45)]"
          >
            Live demo <ExternalLink size={15} />
          </a>
        )}

        {/* Sections (Fitur utama, Sorotan teknis, ...) */}
        {detail?.sections?.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-gr-subtitle font-semibold text-gray-900 dark:text-slate-100">{section.heading}</h2>
            <span className="section-accent mt-2" />
            <ul className="mt-4 space-y-2.5">
              {section.items.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-gr-body text-gray-600 dark:text-slate-300 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Gallery */}
        {detail?.gallery && detail.gallery.length > 0 && (
          <section className="mt-10">
            <h2 className="text-gr-subtitle font-semibold text-gray-900 dark:text-slate-100">Gallery</h2>
            <span className="section-accent mt-2" />
            <div className="mt-5 grid sm:grid-cols-2 gap-5">
              {detail.gallery.map((image, i) => (
                <figure
                  key={i}
                  className="overflow-hidden rounded-xl border border-gray-200 dark:border-slate-700/55 bg-white dark:bg-[#0b1220]"
                >
                  <img src={image.src} alt={image.caption ?? `${title} screenshot ${i + 1}`} className="w-full object-cover" />
                  {image.caption && (
                    <figcaption className="px-4 py-3 text-gr-caption text-gray-500 dark:text-slate-400">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}
      </article>

      <Footer />
    </main>
  );
}
