import { site } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Skills
        </h2>
        <p className="mt-2 text-2xl font-bold text-white">Technologies I work with</p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {site.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}