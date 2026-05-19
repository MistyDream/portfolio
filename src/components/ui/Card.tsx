import type { ReactNode } from 'react';

type ExpertiseCardProps = {
  className?: string;
  children: ReactNode;
};

export function ExpertiseCard({
  className = '',
  children,
}: ExpertiseCardProps) {
  return (
    <article
      className={`rounded-xl border border-white/10 bg-panel p-7 shadow-[0_22px_70px_rgba(0,0,0,0.18)] ${className}`}
    >
      {children}
    </article>
  );
}

type CardIconProps = {
  icon: ReactNode;
};

export function CardIcon({ icon }: CardIconProps) {
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

export function CardHeading({ title, description }: CardHeadingProps) {
  return (
    <>
      <h3 className="text-base font-black tracking-normal text-white">
        {title}
      </h3>
      <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-text-secondary">
        {description}
      </p>
    </>
  );
}
