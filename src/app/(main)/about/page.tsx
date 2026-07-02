'use client';

import ScrollReveal from '@/components/ScrollReveal';
import {
  HandHeart,
  ShieldCheck,
  Tree,
  PawPrint,
  Heart,
  Star,
} from '@phosphor-icons/react';

/* ── Data ── */

const stats = [
  { value: '10+', label: 'Years of Service' },
  { value: '5', label: 'Cities Across India' },
  { value: '50+', label: 'Full-Time Staff' },
  { value: '500+', label: 'Active Volunteers' },
];

const values = [
  {
    icon: HandHeart,
    title: 'Compassion First',
    description:
      'Every animal receives individual care, dignity, and respect throughout their journey with us.',
  },
  {
    icon: ShieldCheck,
    title: 'Medical Excellence',
    description:
      'Full veterinary care including surgeries, vaccinations, and rehabilitation by qualified professionals.',
  },
  {
    icon: Tree,
    title: 'Community Impact',
    description:
      'Building a culture of empathy through education and community outreach programmes.',
  },
  {
    icon: PawPrint,
    title: 'Sustainable Solutions',
    description:
      'Long-term population management through sterilisation and preventive healthcare initiatives.',
  },
  {
    icon: Heart,
    title: 'Collective Action',
    description:
      'Mobilising volunteers, partners, and communities to create lasting change for animals.',
  },
  {
    icon: Star,
    title: 'Transparency & Trust',
    description:
      'Every rupee accounted for, every outcome measured, every promise kept to our supporters.',
  },
];

const team = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Founder & CEO',
    image: '1580486799522-15e2645327d2',
  },
  {
    name: 'Vikram Patel',
    role: 'Director of Operations',
    image: '1560250097-0b935284c45a',
  },
  {
    name: 'Dr. Sneha Reddy',
    role: 'Head of Veterinary Services',
    image: '1594744800804-3d5dd3c4a6d4',
  },
  {
    name: 'Arjun Mehta',
    role: 'Rescue Team Lead',
    image: '1507003211169-0a1dd7228f2d',
  },
];

const milestones = [
  {
    year: '2015',
    title: 'Founded in Mumbai',
    description:
      'A group of passionate animal lovers came together to form Paws for Change India, starting with a small shelter in a rented garage in Mumbai.',
  },
  {
    year: '2017',
    title: 'First Veterinary Clinic',
    description:
      'Opened our first full-service veterinary clinic, equipped with a surgical suite, digital X-ray, and in-house lab diagnostics.',
  },
  {
    year: '2019',
    title: 'Expanded to Pune',
    description:
      'Extended operations to Pune, launching rescue services and a second treatment facility to reach more animals in need.',
  },
  {
    year: '2020',
    title: 'COVID Emergency Response',
    description:
      'Provided critical care and food distribution for street animals during the nationwide lockdown when communities could not care for them.',
  },
  {
    year: '2021',
    title: '10,000 Animals Treated',
    description:
      'Crossed the milestone of treating over 10,000 animals across all our programmes since inception.',
  },
  {
    year: '2023',
    title: 'Pan-India Presence',
    description:
      'Expanded operations to Delhi, Bangalore, and Chennai. Now active in five cities with a unified rescue network.',
  },
  {
    year: '2025',
    title: 'Disaster Relief Initiative',
    description:
      'Formalised our disaster response team and pre-positioned emergency supplies across four strategic locations.',
  },
];

/* ── Page ── */

export default function AboutPage() {
  return (
    <>
      {/* ════════════════ Hero / Mission ════════════════ */}
      <section className="relative overflow-hidden bg-background pt-32 pb-24">
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent-light/8 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  About Us
                </span>
                <h1 className="gradient-text mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Our Mission
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  Paws for Change India is a registered non-profit dedicated to ending animal
                  suffering through rescue operations, medical care, sterilisation drives, and
                  adoption programmes across Maharashtra and beyond.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Founded in 2015, we have grown from a small group of passionate volunteers to a
                  full-service animal welfare organization with operations in five cities and a team
                  of over 50 dedicated professionals.
                </p>
              </div>
              <div className="relative">
                <div className="gradient-border overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80&fm=webp&fit=crop"
                    alt="Animal rescue team in action"
                    className="h-full w-full object-cover animate-fade-in"
                  />
                </div>
                <div className="absolute -inset-4 -z-10 rounded-full bg-accent/5 blur-[80px] opacity-60" />
              </div>
            </div>
          </ScrollReveal>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-border bg-surface p-6 text-center">
                  <div className="font-display text-3xl font-bold tracking-tight text-accent">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ Values ════════════════ */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
                Our Values
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Everything we do is guided by a set of core principles that define who we are and
                how we serve the animals and communities that need us.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <div className="rounded-2xl border border-border bg-background p-8 transition-all hover:border-accent/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                      <Icon size={24} weight="fill" className="text-accent" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════ Team & History ════════════════ */}
      <section className="relative bg-background py-24">
        {/* Decorative pet images */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-[30%] right-[2%] h-48 w-48 overflow-hidden rounded-2xl opacity-[0.04]">
            <img src="https://images.unsplash.com/photo-1560807707-8cc77767d783?w=350&q=60&fm=webp&fit=crop" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-[10%] left-[2%] h-36 w-36 overflow-hidden rounded-2xl opacity-[0.03]">
            <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=280&q=60&fm=webp&fit=crop" alt="" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
                Our Team
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Behind every rescue, every surgery, and every adoption is a team of dedicated
                professionals who pour their hearts into this mission every single day.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="group rounded-2xl border border-border bg-surface p-6 text-center transition-all hover:border-accent/30">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src={`https://images.unsplash.com/photo-${member.image}?w=200&q=80&fm=webp&fit=crop&crop=face`}
                      alt={member.name}
                      className="h-full w-full object-cover animate-fade-in"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-20 grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 rounded-2xl border border-border bg-surface-elevated p-10 lg:p-14">
                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  Our History
                </h3>
                <p className="mt-4 leading-relaxed text-muted">
                  Paws for Change India was founded in 2015 by Dr. Priya Sharma, a veterinarian who
                  saw the immense suffering of street animals in Mumbai and decided to act. What began
                  as a small shelter operating out of a rented garage has since grown into one of
                  India&apos;s most respected animal welfare organisations. Today, we operate across
                  five cities with a team of over 50 staff, 500+ volunteers, and a track record of
                  transforming the lives of thousands of animals every year.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80&fm=webp&fit=crop"
                  alt="Rescued animal at our shelter"
                  className="h-full w-full object-cover animate-fade-in"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════ Timeline ════════════════ */}
      <section className="relative bg-surface py-24">
        {/* Decorative pet images */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute bottom-[20%] right-[3%] h-44 w-44 overflow-hidden rounded-2xl opacity-[0.04]">
            <img src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=320&q=60&fm=webp&fit=crop" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute top-[15%] left-[2%] h-28 w-28 overflow-hidden rounded-2xl opacity-[0.03]">
            <img src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=220&q=60&fm=webp&fit=crop" alt="" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
                Our Journey
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                From a small garage shelter to a pan-India operation — key milestones that shaped
                our organisation.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative mt-20">
            {/* Vertical connecting line (desktop) */}
            <div className="absolute left-[23px] top-2 bottom-2 hidden w-px bg-border md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <ScrollReveal key={milestone.year} delay={i * 0.08}>
                  <div className="group relative pl-14 md:pl-16">
                    {/* Year dot */}
                    <div className="absolute left-0 top-1.5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-background md:left-[5px] md:h-9 md:w-9">
                      <span className="font-display text-xs font-bold text-accent">
                        {milestone.year.slice(2)}
                      </span>
                    </div>

                    <div className="rounded-2xl border border-border bg-background p-6 transition-all hover:border-accent/30 md:p-8">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                        <span className="font-display text-sm font-bold uppercase tracking-[0.15em] text-accent">
                          {milestone.year}
                        </span>
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="mt-3 leading-relaxed text-muted">{milestone.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
