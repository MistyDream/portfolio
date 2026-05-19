import { Download, Github, Linkedin } from 'lucide-react';
import { HeroVisual } from '../components/hero/OrbitVisual';
import { fr } from '../lang/fr';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-5 pt-24 sm:px-8"
    >
      <div
        className="absolute -left-40 top-12 h-[38rem] w-[38rem] rounded-full bg-sky-500/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-48 -right-40 h-[44rem] w-[44rem] rounded-full bg-sky-500/20 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 py-16 lg:grid-cols-[1fr_0.95fr] lg:py-24">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
        {fr.hero.availability}
      </div>

      <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
        {fr.hero.title.firstName}
        <br />
        <span className="text-sky-300">{fr.hero.title.lastName}</span>
        <br />
        {fr.hero.title.role}
      </h1>

      <p className="mt-7 max-w-xl text-base font-medium leading-8 text-sky-200/80 sm:text-lg">
        {fr.hero.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          className="inline-flex items-center gap-2 rounded-md bg-sky-400 px-5 py-3 text-sm font-bold text-white shadow-[0_16px_42px_rgba(56,189,248,0.34)] transition hover:-translate-y-0.5 hover:bg-sky-300"
          download
          href={fr.navigation.cvUrl}
        >
          <Download size={17} aria-hidden="true" />
          {fr.hero.primaryCta}
        </a>
        <a
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-bold text-white transition hover:border-white/20 hover:bg-white/[0.06]"
          href={fr.navigation.githubUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github size={17} aria-hidden="true" />
          {fr.hero.githubCta}
        </a>
        <a
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-bold text-white transition hover:border-white/20 hover:bg-white/[0.06]"
          href={fr.navigation.linkedinUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin size={17} aria-hidden="true" />
          {fr.hero.secondaryCta}
        </a>
      </div>
    </div>
  );
}

