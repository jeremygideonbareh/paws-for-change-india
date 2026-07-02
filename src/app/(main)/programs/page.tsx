'use client';

import type { ElementType } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { programs } from '@/content/programs';
import {
  Heartbeat,
  PawPrint,
  House,
  Syringe,
  BookOpen,
  Siren,
} from '@phosphor-icons/react';

/* ── Icon string → component mapping ── */

const iconMap: Record<string, ElementType> = {
  Heartbeat,
  PawPrint,
  House,
  Syringe,
  BookOpen,
  Siren,
};

/* ── Page ── */

export default function ProgramsPage() {
  return (
    <>
      {/* ════════════════ Hero ════════════════ */}
      <section className="relative overflow-hidden bg-background pt-32 pb-24">
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-accent/10 blur-[140px]" />
          <div className="absolute -bottom-20 left-1/3 h-[350px] w-[350px] rounded-full bg-accent-light/8 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-accent">
                What We Do
              </span>
              <h1 className="gradient-text mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Our Programmes
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                From emergency rescue to lifelong adoption, every programme is designed to create
                meaningful, measurable impact for animals and communities across India.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════ Program Cards ════════════════ */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, i) => {
              const Icon = iconMap[program.icon] ?? PawPrint;
              return (
                <ScrollReveal key={program.slug} delay={i * 0.08}>
                  <div
                    id={program.slug}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-accent/30"
                  >
                    {/* Card image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-${program.imageUrl}?w=600&q=80&fm=webp&fit=crop`}
                        alt={program.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 animate-fade-in"
                        loading={i < 2 ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                    </div>

                    {/* Card content */}
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                          <Icon size={20} weight="bold" className="text-accent" />
                        </div>
                        <h2 className="font-display text-xl font-semibold text-foreground">
                          {program.title}
                        </h2>
                      </div>

                      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                        {program.description}
                      </p>

                      {/* Stat */}
                      <div className="mt-6 flex items-baseline gap-3 border-t border-border pt-5">
                        <span className="font-display text-3xl font-bold tracking-tight text-accent">
                          {program.stat}
                        </span>
                        <span className="font-body text-xs font-medium uppercase tracking-[0.12em] text-muted">
                          {program.statLabel}
                        </span>
                      </div>

                      {/* Impact tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {program.impact.slice(0, 2).map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-accent/8 px-3 py-1 text-xs text-accent"
                          >
                            {item}
                          </span>
                        ))}
                        {program.impact.length > 2 && (
                          <span className="rounded-full bg-border px-3 py-1 text-xs text-muted">
                            +{program.impact.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Hover ring */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-accent/20 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
