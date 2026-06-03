import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>
          &copy;{" "}
          <time dateTime={String(year)}>{year}</time> {site.name}. All rights
          reserved.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="transition hover:text-emerald-400"
        >
          {site.email}
        </a>
      </div>
    </footer>
  );
}