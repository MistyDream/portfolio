import type { ReactNode } from 'react';
import { BadgeCheck, Building2, MonitorCog, Rocket } from 'lucide-react';
import { TagList } from '../components/ui/TagList';
import { fr } from '../lang/fr';

const highlightIcons = {
  monitor: <MonitorCog size={15} aria-hidden="true" />,
  rocket: <Rocket size={15} aria-hidden="true" />,
  badge: <BadgeCheck size={15} aria-hidden="true" />,
};

export function ExperienceSection() {
  const { experience } = fr;

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

          {experience.items.map((item) => (
            <TimelineRow align={item.timelineAlign} key={item.company}>
              <TimelineDot
                tone={item.timelineTone}
                featured={'featured' in item && item.featured}
              />
              {'featured' in item && item.featured && 'highlights' in item ? (
                <FeaturedExperienceCard item={item} />
              ) : (
                <ExperienceCard item={item} compact />
              )}
            </TimelineRow>
          ))}
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
        <span
          className={
            featured
              ? 'h-2.5 w-2.5 rounded-full bg-current'
              : 'h-1.5 w-1.5 rounded-full bg-current'
          }
        />
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
        {item.highlights.map((highlight) => (
          <div className="rounded-md bg-[#081020] p-5" key={highlight.title}>
            <div className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-sky-400/10 text-sky-300">
                {highlightIcons[highlight.icon]}
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
