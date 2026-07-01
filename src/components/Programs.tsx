'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'motion/react';
import {
  Heartbeat,
  PawPrint,
  House,
  Syringe,
  BookOpen,
  Siren,
} from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

interface Program {
  icon: React.ElementType;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  imageUrl: string;
}

const programs: Program[] = [
  {
    icon: Heartbeat,
    title: 'Medical Care',
    description:
      'Veterinary treatment and rehabilitation for injured and sick stray animals across Mumbai.',
    stat: '12,450+',
    statLabel: 'Animals Treated',
    imageUrl: '1530281700549-e82e7bf110d6',
  },
  {
    icon: Siren,
    title: 'Rescue Operations',
    description:
      '24/7 emergency rescue team responding to animals in distress across the city.',
    stat: '3,200+',
    statLabel: 'Rescues This Year',
    imageUrl: '1544568100-847a948585b9',
  },
  {
    icon: House,
    title: 'Adoption Program',
    description:
      'Finding loving forever homes through careful screening and post-adoption support.',
    stat: '2,800+',
    statLabel: 'Forever Homes',
    imageUrl: '1583511655857-d19b40a7a54e',
  },
  {
    icon: Syringe,
    title: 'Sterilization Drives',
    description:
      'Humane population management through mass sterilization and vaccination camps.',
    stat: '8,500+',
    statLabel: 'Procedures Done',
    imageUrl: '1601758228041-f3b2795255f1',
  },
  {
    icon: BookOpen,
    title: 'Community Education',
    description:
      'Teaching compassion and animal welfare awareness to school children and communities.',
    stat: '15,000+',
    statLabel: 'Students Reached',
    imageUrl: '1587402092301-725e37c70fd8',
  },
  {
    icon: PawPrint,
    title: 'Emergency Response',
    description:
      'Disaster relief and emergency aid for animals affected by natural calamities.',
    stat: '24/7',
    statLabel: 'Rapid Response',
    imageUrl: '1600804340584-c7db2eacf0bf',
  },
];

export default function Programs() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (!wrap.current || !track.current) return;

    const ctx = gsap.context(() => {
      const trackEl = track.current;
      if (!trackEl) return;

      const distance = trackEl.scrollWidth - window.innerWidth;
      if (distance <= 0) return;

      const buffer = window.innerHeight * 0.5;
      const scrollDistance = distance + buffer;

      ScrollTrigger.create({
        trigger: wrap.current,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        pin: true,
        anticipatePin: 1,
        scrub: 1.5,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const scrolled = self.progress * scrollDistance;
          const xProgress = Math.min(scrolled / distance, 1);
          gsap.set(trackEl, { x: -xProgress * distance });
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      id="programs"
      ref={wrap}
      className="relative overflow-hidden bg-background"
    >
      {/* ── Fixed title panel ── */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-[35vw] min-w-[320px] max-w-[480px] items-center justify-center px-12">
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Gradient backdrop — fades into the scrolling cards */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent" />

          <div className="relative z-10 max-w-sm">
            <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
              Our Programs
            </span>
            <h2 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tighter text-foreground">
              How We
              <br />
              <span className="text-accent">Help</span>
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted">
              Every year, we reach thousands of animals through our
              comprehensive programs — from emergency rescue to lifelong
              adoption.
            </p>
            <div className="mt-8 h-px w-16 bg-accent/50" />
          </div>
        </div>
      </div>

      {/* ── Scrolling card track ── */}
      <div
        ref={track}
        className="flex h-[100dvh] items-center gap-6 will-change-transform"
      >
        {/* Invisible spacer matching the fixed title panel width */}
        <div
          className="shrink-0"
          style={{ width: 'clamp(320px, 35vw, 480px)' }}
        />

        {programs.map((program, i) => {
          const Icon = program.icon;
          return (
            <div
              key={program.title}
              className="group relative flex w-[420px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated"
              style={{ minHeight: 'clamp(50vh, 70vh, 600px)' }}
            >
              {/* ── Card image ── */}
              <div className="relative h-[45%] min-h-[200px] overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${program.imageUrl}?w=600&q=80&fm=webp&fit=crop`}
                  alt={program.title}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 animate-fade-in"
                  loading={i < 2 ? 'eager' : 'lazy'}
                />
                {/* Gradient overlay from image into content */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/10 to-transparent" />
              </div>

              {/* ── Card content ── */}
              <div className="flex flex-1 flex-col justify-between p-7">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                      <Icon
                        className="h-5 w-5 text-accent"
                        weight="bold"
                      />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {program.title}
                    </h3>
                  </div>
                  <p className="mt-4 font-body text-sm leading-relaxed text-muted">
                    {program.description}
                  </p>
                </div>

                {/* ── Stat ── */}
                <div className="mt-6 flex items-baseline gap-3 border-t border-border pt-5">
                  <span className="font-display text-3xl font-bold tracking-tight text-accent">
                    {program.stat}
                  </span>
                  <span className="font-body text-xs font-medium uppercase tracking-[0.12em] text-muted">
                    {program.statLabel}
                  </span>
                </div>
              </div>

              {/* Hover ring */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-accent/20 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          );
        })}

        {/* Trailing breathing room */}
        <div className="shrink-0 w-16" />
      </div>
    </section>
  );
}
