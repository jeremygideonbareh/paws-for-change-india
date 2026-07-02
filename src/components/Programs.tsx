'use client';

import { motion } from 'motion/react';
import {
  Heartbeat,
  PawPrint,
  House,
  Syringe,
  BookOpen,
  Siren,
} from '@phosphor-icons/react';

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

const ease = [0.25, 0.1, 0.25, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease,
    },
  }),
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease },
  },
};

export default function Programs() {
  return (
    <section id="programs" className="relative bg-background py-24">
      {/* Decorative background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[140px]" />
        <div className="absolute -bottom-32 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-light/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Our Programs
          </span>
          <h2 className="mt-4 gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
            How We Help
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Every year, we reach thousands of animals through our comprehensive programs — from
            emergency rescue to lifelong adoption.
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-accent/50" />
        </motion.div>

        {/* Card grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardVariants}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-shadow duration-500 hover:shadow-lg"
              >
                {/* Card image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${program.imageUrl}?w=600&q=80&fm=webp&fit=crop`}
                    alt={program.title}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                    loading={i < 2 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/10 to-transparent" />
                  {/* Icon overlay */}
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-background/80 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-accent" weight="bold" />
                  </div>
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {program.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {program.description}
                  </p>

                  {/* Stat */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={statVariants}
                    className="mt-6 flex items-baseline gap-3 border-t border-border pt-5"
                  >
                    <span className="font-display text-3xl font-bold tracking-tight text-accent">
                      {program.stat}
                    </span>
                    <span className="font-body text-xs font-medium uppercase tracking-[0.12em] text-muted">
                      {program.statLabel}
                    </span>
                  </motion.div>
                </div>

                {/* Hover ring */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-accent/20 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
