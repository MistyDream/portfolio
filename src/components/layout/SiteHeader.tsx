import { useState } from 'react';
import { Braces, Download, Github, Linkedin, Menu, X } from 'lucide-react';
import { fr } from '../../lang/fr';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-surface/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <a
          className="flex min-w-0 items-center gap-3"
          href="#hero"
          aria-label={fr.brand.homeLabel}
          onClick={closeMenu}
        >
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-sky-400/40 bg-sky-500/10 text-sky-300 shadow-[0_0_24px_rgba(56,189,248,0.18)]">
            <Braces size={15} aria-hidden="true" />
          </span>
          <span className="truncate text-sm font-semibold text-white max-[380px]:hidden">
            {fr.brand.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 text-xs font-semibold text-text-muted lg:flex">
          {fr.navigation.links.map((link) => (
            <a
              className="transition hover:text-white"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:gap-4 md:flex">
          <a
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-text-muted transition hover:bg-white/[0.04] hover:text-white"
            aria-label={fr.navigation.githubLabel}
            href={fr.navigation.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-text-muted transition hover:bg-white/[0.04] hover:text-white"
            aria-label={fr.navigation.linkedinLabel}
            href={fr.navigation.linkedinUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <a
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-sky-400 px-4 text-xs font-semibold text-white shadow-[0_12px_36px_rgba(56,189,248,0.35)] transition hover:-translate-y-0.5 hover:bg-sky-300"
            aria-label={fr.navigation.cvLabel}
            href={fr.navigation.cvUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Download size={14} aria-hidden="true" />
            <span>{fr.navigation.cvCta}</span>
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            className="inline-flex h-9 items-center justify-center rounded-md bg-sky-400 px-3 text-xs font-semibold text-white shadow-[0_12px_32px_rgba(56,189,248,0.28)] transition hover:bg-sky-300"
            aria-label={fr.navigation.cvLabel}
            href={fr.navigation.cvUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {fr.navigation.cvCta}
          </a>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:border-white/20 hover:bg-white/[0.06]"
            type="button"
            aria-label={
              isMenuOpen
                ? fr.navigation.closeMenuLabel
                : fr.navigation.menuLabel
            }
            aria-controls="mobile-social-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <X size={17} aria-hidden="true" />
            ) : (
              <Menu size={17} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div
          id="mobile-social-menu"
          className="mx-4 mb-3 rounded-md border border-white/10 bg-surface/95 p-2 shadow-[0_22px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl md:hidden"
        >
          <a
            className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold text-text-secondary transition hover:bg-white/[0.06] hover:text-white"
            aria-label={fr.navigation.githubLabel}
            href={fr.navigation.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
            onClick={closeMenu}
          >
            <Github size={17} aria-hidden="true" />
            {fr.navigation.githubLabel}
          </a>
          <a
            className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold text-text-secondary transition hover:bg-white/[0.06] hover:text-white"
            aria-label={fr.navigation.linkedinLabel}
            href={fr.navigation.linkedinUrl}
            rel="noopener noreferrer"
            target="_blank"
            onClick={closeMenu}
          >
            <Linkedin size={17} aria-hidden="true" />
            {fr.navigation.linkedinLabel}
          </a>
        </div>
      ) : null}
    </header>
  );
}
