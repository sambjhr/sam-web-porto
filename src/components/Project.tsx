import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";

const FEATURED = PROJECTS.slice(0, 4);

export default function Projects() {
  return (
    <div id="projects" className="mt-16">
      <div className="text-center">
        <h3 className="text-gr-title font-semibold">Selected Projects</h3>
        <span className="section-accent mt-2 mx-auto" />
        <p className="mt-3 text-gr-body text-gray-500 dark:text-slate-400">
          A curated selection of projects that represent my recent work.
        </p>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {FEATURED.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-300 dark:border-slate-600 text-gr-small text-gray-600 dark:text-slate-300 font-medium transition-all duration-300 hover:border-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-400"
        >
          View all projects <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
