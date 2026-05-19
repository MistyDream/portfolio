import type { CSSProperties, ReactNode } from 'react';
import { Code2, Database, Server } from 'lucide-react';
import { fr } from '../../lang/fr';

export function HeroVisual() {
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

