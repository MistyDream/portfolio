import {
  BadgeCheck,
  Code2,
  Lightbulb,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { CardHeading, CardIcon, ExpertiseCard } from '../components/ui/Card';
import { TagList } from '../components/ui/TagList';
import { fr } from '../lang/fr';

const architectureIcons = {
  code: <Code2 size={14} aria-hidden="true" />,
  rocket: <Rocket size={14} aria-hidden="true" />,
  shield: <ShieldCheck size={14} aria-hidden="true" />,
};

const toneTextClasses = {
  sky: 'text-sky-300',
  violet: 'text-violet-300',
  emerald: 'text-emerald-300',
};

const metricToneClasses = {
  sky: {
    dot: 'bg-sky-400',
    value: 'text-sky-300',
  },
  emerald: {
    dot: 'bg-emerald-400',
    value: 'text-emerald-300',
  },
  violet: {
    dot: 'bg-violet-400',
    value: 'text-violet-300',
  },
};

const productCycleIcons = {
  lightbulb: <Lightbulb size={15} aria-hidden="true" />,
  code: <Code2 size={15} aria-hidden="true" />,
  server: <Server size={15} aria-hidden="true" />,
  rocket: <Rocket size={15} aria-hidden="true" />,
};

export function CapabilitiesSection() {
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
          &harr;
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
  return (
    <div className="mt-8 rounded-md bg-[#081020] p-4">
      <div className="space-y-3">
        {fr.capabilities.cards.architecture.principles.map((principle) => (
          <div className="flex items-center gap-3" key={principle.title}>
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 ${toneTextClasses[principle.tone]}`}
            >
              {architectureIcons[principle.icon]}
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
  return (
    <div className="mt-8 rounded-md bg-[#081020] p-4">
      <div className="divide-y divide-white/5">
        {fr.capabilities.cards.performance.metrics.map((metric) => (
          <div
            className="grid grid-cols-[1fr_auto] items-center gap-3 py-3 text-[11px] first:pt-0 last:pb-0"
            key={metric.label}
          >
            <span className="flex min-w-0 items-center gap-2 font-semibold text-text-secondary">
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${metricToneClasses[metric.tone].dot}`}
              />
              <span className="truncate">{metric.label}</span>
            </span>
            <span className={`font-black ${metricToneClasses[metric.tone].value}`}>
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductCycle() {
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
              {productCycleIcons[step.icon]}
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
