import { site } from "@/data/site";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Featured Projects
        </h2>
        <p className="mt-2 text-2xl font-bold text-white">
          Work I&apos;m proud of
        </p>
        <div className="mt-12 flex flex-col gap-10">
          {site.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}