import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@/components/icons";

type Project = {
  title: string;
  image: string;
  href: string;
  tags: readonly string[];
  description: string;
  tutorialUrl?: string;
};

export function ProjectCard({ project, reversed }: { project: Project; reversed?: boolean }) {
  return (
    <article
      className={`group grid gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-500/20 hover:bg-white/[0.05] sm:p-8 lg:grid-cols-2 lg:items-center ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden rounded-xl ring-1 ring-white/10 transition group-hover:ring-emerald-500/30"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={640}
          height={360}
          className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </Link>

      <div>
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-2xl font-bold text-white">{project.title}</h3>
        <p className="mt-4 leading-relaxed text-slate-400">
          {project.description}
          {project.tutorialUrl && (
            <>
              {" "}
              <a
                href={project.tutorialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-emerald-400 underline-offset-4 transition hover:text-emerald-300 hover:underline"
              >
                tutorial
              </a>
              .
            </>
          )}
        </p>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
        >
          View project
          <ExternalLinkIcon className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}