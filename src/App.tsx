import type { CSSProperties, ReactNode } from 'react';
import {
  BadgeCheck,
  Braces,
  Building2,
  Code2,
  Database,
  Download,
  Github,
  Lightbulb,
  Linkedin,
  MonitorCog,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { fr } from './lang/fr';

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-text-primary">
      <SiteHeader />
      <HeroSection />
      <CapabilitiesSection />
      <ExperienceSection />
    </main>
  );
}

function SiteHeader() {
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

function HeroSection() {
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

function HeroVisual() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center sm:max-w-[520px]">
      <div
        className="absolute inset-[13%] rounded-full bg-sky-400/10 blur-2xl"
        aria-hidden="true"
      />

      <OrbitRing inset="2%" opacity="border-white/35" />
      <OrbitRing inset="14%" opacity="border-white/30" />
      <OrbitRing inset="26%" opacity="border-white/25" />

      <div className="relative z-20 flex aspect-square w-[34%] min-w-36 items-center justify-center overflow-hidden rounded-full bg-sky-400/10 p-2 shadow-[0_0_70px_rgba(56,189,248,0.35)]">
        <img
          className="h-full w-full rounded-full object-cover object-[center_30%]"
          src="/moi_cartoon.png"
          alt={fr.hero.portraitAlt}
        />
      </div>

      <SatelliteOrbit
        inset="1%"
        start="-18deg"
        counterStart="18deg"
        counterEnd="-342deg"
        duration="24s"
      >
        <Satellite tone="sky">
          <Code2 className="text-sky-300" size={18} aria-hidden="true" />
        </Satellite>
      </SatelliteOrbit>
      <SatelliteOrbit
        inset="14%"
        start="248deg"
        counterStart="-248deg"
        counterEnd="-608deg"
        duration="18s"
      >
        <Satellite tone="emerald">
          <Server className="text-emerald-300" size={18} aria-hidden="true" />
        </Satellite>
      </SatelliteOrbit>
      <SatelliteOrbit
        inset="26%"
        start="96deg"
        counterStart="-96deg"
        counterEnd="-456deg"
        duration="21s"
      >
        <Satellite tone="violet">
          <Database className="text-violet-300" size={18} aria-hidden="true" />
        </Satellite>
      </SatelliteOrbit>
    </div>
  );
}

function CapabilitiesSection() {
  const { capabilities } = fr;

  return (
    <section
      id="capabilities"
      className="relative px-5 py-24 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-normal text-white sm:text-4xl">
            {capabilities.title}
          </h2>
          <p className="mt-4 text-sm font-medium leading-6 text-sky-200/75">
            {capabilities.subtitle}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ExpertiseCard className="lg:col-span-2">
            <CardIcon icon={<BadgeCheck size={15} />} />
            <CardHeading
              title={capabilities.cards.product.title}
              description={capabilities.cards.product.description}
            />
            <ProductMap />
          </ExpertiseCard>

          <ExpertiseCard>
            <CardIcon icon={<Sparkles size={15} />} />
            <CardHeading
              title={capabilities.cards.architecture.title}
              description={capabilities.cards.architecture.description}
            />
            <ArchitecturePanel />
            <TagList tags={capabilities.cards.architecture.tags} />
          </ExpertiseCard>

          <ExpertiseCard>
            <CardIcon icon={<Zap size={15} />} />
            <CardHeading
              title={capabilities.cards.performance.title}
              description={capabilities.cards.performance.description}
            />
            <PerformancePanel />
            <TagList tags={capabilities.cards.performance.tags} />
          </ExpertiseCard>

          <ExpertiseCard className="lg:col-span-2">
            <CardIcon icon={<Lightbulb size={15} />} />
            <CardHeading
              title={capabilities.cards.autonomy.title}
              description={capabilities.cards.autonomy.description}
            />
            <ProductCycle />
          </ExpertiseCard>
        </div>
      </div>
    </section>
  );
}

type ExpertiseCardProps = {
  className?: string;
  children: ReactNode;
};

function ExpertiseCard({ className = '', children }: ExpertiseCardProps) {
  return (
    <article className={`rounded-xl border border-white/10 bg-[#141b2e] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.18)] ${className}`}>
      {children}
    </article>
  );
}

type CardIconProps = {
  icon: ReactNode;
};

function CardIcon({ icon }: CardIconProps) {
  return (
    <div className="mb-6 inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-sky-400/10 text-sky-300">
      {icon}
    </div>
  );
}

type CardHeadingProps = {
  title: string;
  description: string;
};

function CardHeading({ title, description }: CardHeadingProps) {
  return (
    <>
      <h3 className="text-base font-black tracking-normal text-white">{title}</h3>
      <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-text-secondary">
        {description}
      </p>
    </>
  );
}

function ProductMap() {
  const product = fr.capabilities.cards.product;

  return (
    <div className="mt-8 rounded-md border border-white/10 bg-[#081020] p-5">
      <div className="grid gap-8 sm:grid-cols-[1fr_auto_1fr] sm:items-start">
        <StackColumn
          title={product.frontend}
          items={product.stacks}
          dotClassName="bg-sky-400"
        />
        <div className="hidden h-9 w-9 items-center justify-center rounded-full border border-sky-300/30 bg-sky-400/20 text-xs font-bold text-sky-200 sm:mt-12 sm:flex">
          ↔
        </div>
        <StackColumn
          title={product.backend}
          items={product.backendStacks}
          dotClassName="bg-violet-400"
        />
      </div>
      <div className="mt-8 flex items-center justify-between text-[11px] text-text-muted">
        <span>{product.label}</span>
        <span className="text-sky-300">{product.metric}</span>
      </div>
    </div>
  );
}

type StackColumnProps = {
  title: string;
  items: readonly string[];
  dotClassName: string;
};

function StackColumn({ title, items, dotClassName }: StackColumnProps) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2 text-[11px] font-bold text-white">
        <span className={`h-2 w-2 rounded-sm ${dotClassName}`} />
        {title}
      </div>
      <div className="space-y-2 text-[11px] text-text-muted">
        {items.map((item) => (
          <p className="flex items-center gap-2" key={item}>
            <span className={`h-1.5 w-1.5 rounded-full ${dotClassName}`} />
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function ArchitecturePanel() {
  const iconClasses = ['text-sky-300', 'text-violet-300', 'text-emerald-300'];

  return (
    <div className="mt-8 rounded-md bg-[#081020] p-4">
      <div className="space-y-3">
        {fr.capabilities.cards.architecture.principles.map((principle, index) => (
          <div className="flex items-center gap-3" key={principle.title}>
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 ${iconClasses[index]}`}>
              {index === 0 ? <Code2 size={14} aria-hidden="true" /> : null}
              {index === 1 ? <Rocket size={14} aria-hidden="true" /> : null}
              {index === 2 ? <ShieldCheck size={14} aria-hidden="true" /> : null}
            </div>
            <div>
              <p className="text-[11px] font-black text-white">{principle.title}</p>
              <p className="mt-0.5 text-[10px] font-medium text-text-muted">
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PerformancePanel() {
  const rowStyles = [
    {
      dot: 'bg-sky-400',
      value: 'text-sky-300',
    },
    {
      dot: 'bg-emerald-400',
      value: 'text-emerald-300',
    },
    {
      dot: 'bg-violet-400',
      value: 'text-violet-300',
    },
  ];

  return (
    <div className="mt-8 rounded-md bg-[#081020] p-4">
      <div className="divide-y divide-white/5">
        {fr.capabilities.cards.performance.metrics.map((metric, index) => (
          <div
            className="grid grid-cols-[1fr_auto] items-center gap-3 py-3 text-[11px] first:pt-0 last:pb-0"
            key={metric.label}
          >
            <span className="flex min-w-0 items-center gap-2 font-semibold text-text-secondary">
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${rowStyles[index].dot}`} />
              <span className="truncate">{metric.label}</span>
            </span>
            <span className={`font-black ${rowStyles[index].value}`}>
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductCycle() {
  const icons = [
    <Lightbulb size={15} aria-hidden="true" />,
    <Code2 size={15} aria-hidden="true" />,
    <Server size={15} aria-hidden="true" />,
    <Rocket size={15} aria-hidden="true" />,
  ];

  return (
    <div className="mt-8 rounded-md bg-[#081020] p-5">
      <div className="mb-7 flex items-center justify-between text-[10px] font-bold uppercase tracking-normal text-text-muted">
        <span>{fr.capabilities.cards.autonomy.cycleLabel}</span>
        <span className="text-sky-300">{fr.capabilities.cards.autonomy.metric}</span>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {fr.capabilities.cards.autonomy.steps.map((step, index) => (
          <div className="relative text-center" key={step.title}>
            {index < fr.capabilities.cards.autonomy.steps.length - 1 ? (
              <div className="absolute left-1/2 top-5 hidden h-px w-full bg-white/10 md:block" />
            ) : null}
            <div className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-sky-400/10 text-sky-300">
              {icons[index]}
            </div>
            <p className="mt-3 text-xs font-black text-white">{step.title}</p>
            <p className="mt-1 text-[10px] font-medium text-text-muted">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-7 border-t border-white/5 pt-5">
        <div className="grid gap-5 md:grid-cols-3">
          {fr.capabilities.cards.autonomy.strengths.map((strength) => (
            <div className="text-center" key={strength.title}>
              <p className="text-[11px] font-black text-white">{strength.title}</p>
              <p className="mt-1 text-[10px] font-medium text-text-muted">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type TagListProps = {
  tags: readonly string[];
};

function TagList({ tags }: TagListProps) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          className="rounded bg-slate-700/60 px-2.5 py-1 text-[11px] font-bold text-text-muted"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ExperienceSection() {
  const { experience } = fr;
  const [first, featured, last] = experience.items;

  return (
    <section id="experience" className="relative px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-normal text-white sm:text-4xl">
            {experience.title}
          </h2>
          <p className="mt-4 text-sm font-medium leading-6 text-sky-200/70">
            {experience.subtitle}
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />

          <TimelineRow align="right">
            <TimelineDot tone="accent" />
            <ExperienceCard item={first} compact />
          </TimelineRow>

          <TimelineRow align="center">
            <TimelineDot tone="accent" featured />
            <FeaturedExperienceCard item={featured} />
          </TimelineRow>

          <TimelineRow align="left">
            <TimelineDot tone="blue" />
            <ExperienceCard item={last} compact />
          </TimelineRow>
        </div>
      </div>
    </section>
  );
}

type TimelineRowProps = {
  align: 'left' | 'right' | 'center';
  children: ReactNode;
};

function TimelineRow({ align, children }: TimelineRowProps) {
  const position =
    align === 'right'
      ? 'lg:grid-cols-[1fr_3rem_1fr] lg:[&>article]:col-start-3'
      : align === 'left'
        ? 'lg:grid-cols-[1fr_3rem_1fr] lg:[&>article]:col-start-1'
        : 'lg:grid-cols-[1fr_3rem_1fr] lg:[&>article]:col-span-3 lg:[&>article]:mx-auto';

  return (
    <div className={`relative grid gap-5 py-8 lg:items-center ${position}`}>
      {children}
    </div>
  );
}

type TimelineDotProps = {
  tone: 'accent' | 'blue';
  featured?: boolean;
};

function TimelineDot({ tone, featured = false }: TimelineDotProps) {
  const toneClass =
    tone === 'accent'
      ? 'border-sky-300/50 bg-sky-400/15 text-sky-300 shadow-[0_0_28px_rgba(56,189,248,0.35)]'
      : 'border-sky-300/40 bg-sky-400/10 text-sky-300 shadow-[0_0_24px_rgba(56,189,248,0.2)]';

  return (
    <div className="hidden justify-center lg:col-start-2 lg:row-start-1 lg:flex">
      <div
        className={`flex items-center justify-center rounded-full border ${toneClass} ${featured ? 'h-8 w-8' : 'h-6 w-6'}`}
      >
        <span className={featured ? 'h-2.5 w-2.5 rounded-full bg-current' : 'h-1.5 w-1.5 rounded-full bg-current'} />
      </div>
    </div>
  );
}

type ExperienceItem = (typeof fr.experience.items)[number];

type ExperienceCardProps = {
  item: ExperienceItem;
  compact?: boolean;
};

function ExperienceCard({ item, compact = false }: ExperienceCardProps) {
  return (
    <article
      className={`rounded-lg border border-white/10 bg-[#141b2e] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.16)] ${compact ? 'max-w-sm' : ''}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <ExperienceLogo item={item} />
          <div>
            <h3 className="text-sm font-black text-white">{item.company}</h3>
            <p className="mt-1 text-xs font-bold text-text-secondary">{item.role}</p>
          </div>
        </div>
        <span className="rounded bg-sky-400/15 px-2 py-1 text-[10px] font-black text-sky-300">
          {item.duration}
        </span>
      </div>
      {'description' in item ? (
        <p className="mt-5 text-xs font-medium leading-5 text-text-secondary">
          {item.description}
        </p>
      ) : null}
      <TagList tags={item.tags} />
    </article>
  );
}

function FeaturedExperienceCard({ item }: ExperienceCardProps) {
  if (!('highlights' in item)) {
    return <ExperienceCard item={item} />;
  }

  return (
    <article className="w-full max-w-2xl rounded-xl border border-sky-300/15 bg-[#161c31] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.24)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <ExperienceLogo item={item} featured />
          <div className="flex flex-wrap items-center gap-2">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-black text-white">{item.company}</h3>
                {'duration' in item ? (
                  <span className="rounded bg-sky-400/15 px-2 py-1 text-[10px] font-black text-sky-300">
                    {item.duration}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-xs font-bold text-text-secondary">{item.role}</p>
            </div>
          </div>
        </div>
        <span className="text-[10px] font-bold text-text-muted">{item.period}</span>
      </div>

      <div className="mt-7 space-y-5">
        {item.highlights.map((highlight, index) => (
          <div className="rounded-md bg-[#081020] p-5" key={highlight.title}>
            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-sky-400/10 text-sky-300">
                {index === 0 ? <MonitorCog size={15} aria-hidden="true" /> : null}
                {index === 1 ? <Rocket size={15} aria-hidden="true" /> : null}
                {index === 2 ? <BadgeCheck size={15} aria-hidden="true" /> : null}
              </div>
              <div>
                <h4 className="text-xs font-black text-white">{highlight.title}</h4>
                <p className="mt-2 text-[11px] font-medium leading-5 text-text-secondary">
                  {highlight.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <TagList tags={item.tags} />
    </article>
  );
}

type ExperienceLogoProps = {
  item: ExperienceItem;
  featured?: boolean;
};

function ExperienceLogo({ item, featured = false }: ExperienceLogoProps) {
  const logo = 'logo' in item ? item.logo : undefined;
  const logoWide = 'logoWide' in item ? item.logoWide : false;
  const sizeClass = logoWide
    ? 'h-12 w-28 rounded-lg p-2.5'
    : featured
      ? 'h-12 w-12 rounded-lg p-2'
      : 'h-10 w-10 rounded-lg p-1.5';
  const backgroundClass = logo ? 'border-white/10 bg-white' : 'border-white/10 bg-[#081020]';

  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden border ${backgroundClass} ${sizeClass}`}
    >
      {logo ? (
        <img
          className="h-full w-full object-contain"
          src={logo}
          alt={`Logo ${item.company}`}
        />
      ) : (
        <Building2 className="text-sky-300" size={featured ? 22 : 18} aria-hidden="true" />
      )}
    </div>
  );
}

type OrbitRingProps = {
  inset: string;
  opacity: string;
};

function OrbitRing({ inset, opacity }: OrbitRingProps) {
  return (
    <div
      className={`absolute rounded-full border ${opacity}`}
      style={{ inset }}
      aria-hidden="true"
    />
  );
}

type SatelliteOrbitProps = {
  inset: string;
  start: string;
  counterStart: string;
  counterEnd: string;
  duration: string;
  children: ReactNode;
};

function SatelliteOrbit({
  inset,
  start,
  counterStart,
  counterEnd,
  duration,
  children,
}: SatelliteOrbitProps) {
  const style = {
    inset,
    '--orbit-start': start,
    '--orbit-counter-start': counterStart,
    '--orbit-counter-end': counterEnd,
    '--orbit-duration': duration,
  } as CSSProperties;

  return (
    <div
      className="orbit-track absolute z-30 motion-reduce:[animation:none]"
      style={style}
    >
      <div className="orbit-satellite">
        <div className="orbit-satellite-content motion-reduce:[animation:none]">
          {children}
        </div>
      </div>
    </div>
  );
}

type SatelliteProps = {
  tone: 'sky' | 'emerald' | 'violet';
  children: ReactNode;
};

function Satellite({ tone, children }: SatelliteProps) {
  const toneClass = {
    sky: 'border-sky-300/25 bg-sky-400/10 shadow-[0_12px_40px_rgba(56,189,248,0.24)]',
    emerald:
      'border-emerald-300/25 bg-emerald-400/10 shadow-[0_12px_40px_rgba(52,211,153,0.22)]',
    violet:
      'border-violet-300/25 bg-violet-400/10 shadow-[0_12px_40px_rgba(167,139,250,0.22)]',
  }[tone];

  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur ${toneClass}`}
    >
      {children}
    </div>
  );
}
