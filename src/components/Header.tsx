import Link from "next/link";
import { site } from "@/data/site";
import { LinkIcon } from "@/components/icons";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link
          href="#top"
          className="text-sm font-semibold tracking-tight text-white transition hover:text-emerald-400"
        >
          {site.name}
        </Link>
        <ul className="flex items-center gap-1 sm:gap-2">
          {site.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-emerald-400"
              >
                <LinkIcon
                  name={link.icon}
                  className="h-4 w-4 shrink-0 opacity-70"
                />
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}