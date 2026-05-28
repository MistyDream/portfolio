import { Download, Github, Linkedin } from 'lucide-react';
import { HeroVisual } from '../components/hero/OrbitVisual';
import { fr } from '../lang/fr';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex overflow-hidden px-4 pb-12 pt-20 sm:px-8 md:pb-16 md:pt-24 lg:min-h-screen lg:items-center lg:pb-0"
    >
      <div
        className="absolute -left-48 top-12 h-[28rem] w-[28rem] rounded-full bg-sky-500/20 blur-[120px] sm:h-[38rem] sm:w-[38rem] sm:blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-52 h-[30rem] w-[30rem] rounded-full bg-sky-500/20 blur-[130px] sm:-bottom-48 sm:-right-40 sm:h-[44rem] sm:w-[44rem] sm:blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 items-center gap-0 py-6 md:gap-12 md:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-24">
        <HeroContent />
        <div className="hidden md:block">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div className="mx-auto min-w-0 max-w-2xl text-center lg:mx-0 lg:text-left">
      <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
        <span className="min-w-0 truncate">{fr.hero.availability}</span>
      </div>

      <h1 className="mx-auto mt-5 max-w-3xl text-[2.7rem] font-extrabold leading-[1.02] tracking-normal text-white min-[380px]:text-[3rem] sm:text-6xl md:mt-6 lg:mx-0 lg:text-7xl">
        {fr.hero.title.firstName}
        <br />
        {fr.hero.title.lastName}
        <span className="mt-3 block whitespace-nowrap bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-[1.55rem] font-bold leading-tight text-transparent min-[380px]:text-[1.75rem] sm:mt-4 sm:text-4xl lg:text-5xl">
          {fr.hero.title.role}
        </span>
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-7 text-sky-200/80 md:mt-7 md:text-lg md:leading-8 lg:mx-0">
        {fr.hero.description}
      </p>

      <div className="mx-auto mt-7 flex max-w-sm flex-col gap-3 md:mt-8 md:max-w-none md:flex-row md:flex-wrap md:justify-center lg:mx-0 lg:justify-start">
        <a
          className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(56,189,248,0.34)] transition hover:-translate-y-0.5 hover:bg-sky-300"
          href={fr.navigation.cvUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Download size={17} aria-hidden="true" />
          {fr.hero.primaryCta}
        </a>
        <a
          className="hidden items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06] md:inline-flex"
          href={fr.navigation.githubUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github size={17} aria-hidden="true" />
          {fr.hero.githubCta}
        </a>
        <a
          className="hidden items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06] md:inline-flex"
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
