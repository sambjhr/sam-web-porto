import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";
import Footer from "@/components/Footer";

export const metadata = {
  title: "All Projects — Samuel Haposan",
  description: "Full list of projects by Samuel Haposan Banjarnahor.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0b0f17] text-gray-900 dark:text-slate-200">
      <Navbar />

      <div className="container max-w-5xl mx-auto px-6 pb-16">
        {/* Header */}
        <div className="mb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-gr-small text-gray-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors mb-6"
          >
            <ArrowLeft size={15} /> Back to home
          </Link>

          <h1 className="text-gr-title font-semibold text-gray-900 dark:text-slate-100">
            All <span className="text-emerald-500 dark:text-emerald-400">Projects</span>
          </h1>
          <span className="section-accent mt-2" />
          <p className="mt-3 text-gr-body text-gray-500 dark:text-slate-400">
            All {PROJECTS.length} projects — government systems, freelance builds, and personal work.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
