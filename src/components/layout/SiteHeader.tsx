import { Braces, Download, Github, Linkedin } from 'lucide-react';
import { fr } from '../../lang/fr';

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-surface/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          className="flex items-center gap-3"
          href="#hero"
          aria-label={fr.brand.homeLabel}
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-sky-400/40 bg-sky-500/10 text-sky-300 shadow-[0_0_24px_rgba(56,189,248,0.18)]">
            <Braces size={15} aria-hidden="true" />
          </span>
          <span className="text-sm font-bold text-white">{fr.brand.name}</span>
        </a>

        <div className="hidden items-center gap-8 text-xs font-semibold text-text-muted md:flex">
          {fr.navigation.links.map((link) => (
            <a className="transition hover:text-white" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            className="hidden text-text-muted transition hover:text-white sm:inline-flex"
            aria-label={fr.navigation.githubLabel}
            href={fr.navigation.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a
            className="hidden text-text-muted transition hover:text-white sm:inline-flex"
            aria-label={fr.navigation.linkedinLabel}
            href={fr.navigation.linkedinUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-md bg-sky-400 px-4 py-2 text-xs font-bold text-white shadow-[0_12px_36px_rgba(56,189,248,0.35)] transition hover:bg-sky-300"
            download
            href={fr.navigation.cvUrl}
          >
            <Download size={14} aria-hidden="true" />
            {fr.navigation.cvCta}
          </a>
        </div>
      </nav>
    </header>
  );
}

