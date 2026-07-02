'use client';

import { motion } from 'motion/react';
import { PawPrint, HandHeart, ShieldCheck, Tree } from '@phosphor-icons/react';

const values = [
  {
    icon: HandHeart,
    title: 'Compassion First',
    description: 'Every animal receives individual care, dignity, and respect throughout their journey.',
  },
  {
    icon: ShieldCheck,
    title: 'Medical Excellence',
    description: 'Full veterinary care including surgeries, vaccinations, and rehabilitation.',
  },
  {
    icon: Tree,
    title: 'Community Impact',
    description: 'Building a culture of empathy through education and community outreach.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-background py-24">
      {/* Decorative pet images */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[10%] right-[3%] h-32 w-32 overflow-hidden rounded-2xl opacity-[0.04]">
          <img
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=250&q=60&fm=webp&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute bottom-[20%] left-[2%] h-40 w-40 overflow-hidden rounded-2xl opacity-[0.03]">
          <img
            src="https://images.unsplash.com/photo-1560807707-8cc77767d783?w=300&q=60&fm=webp&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:col-span-3"
        >
          <h2 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Paws for Change India is a registered non-profit dedicated to ending animal suffering
            through rescue operations, medical care, sterilization drives, and adoption programs
            across Maharashtra and beyond.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative lg:col-span-2"
        >
          <div className="gradient-border overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80&fm=webp&fit=crop"
              alt="Animal rescue in action"
              className="h-full w-full object-cover animate-fade-in"
              loading="lazy"
            />
          </div>
          <div className="absolute -inset-4 -z-10 rounded-full bg-accent/5 blur-[80px] opacity-60" />
        </motion.div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index, ease: [0.25, 0.1, 0.25, 1] }}
                className="rounded-2xl border border-border bg-surface p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Icon size={24} weight="fill" className="text-accent" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
