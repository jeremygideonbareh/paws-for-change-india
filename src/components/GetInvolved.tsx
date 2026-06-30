'use client';

import { motion } from 'motion/react';
import { HandHeart, CurrencyCircleDollar, Calendar } from '@phosphor-icons/react';

const ways = [
  {
    icon: CurrencyCircleDollar,
    title: 'Donate',
    desc: 'Your contribution helps us provide food, shelter, and medical care to animals in need.',
    action: 'Donate Now',
    href: '#',
  },
  {
    icon: HandHeart,
    title: 'Volunteer',
    desc: 'Join our network of volunteers for rescue operations, events, and community outreach.',
    action: 'Sign Up',
    href: '#',
  },
  {
    icon: Calendar,
    title: 'Foster',
    desc: 'Open your home temporarily to an animal in recovery. We provide all supplies and support.',
    action: 'Learn More',
    href: '#',
  },
];

export default function GetInvolved() {
  return (
    <section id="involved" className="relative bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
            Get Involved
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            There are many ways to make a difference. Whether you donate, volunteer, or foster, your
            support changes lives.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-accent/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Icon size={24} weight="fill" className="text-accent" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {way.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{way.desc}</p>
                <a
                  href={way.href}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-background transition-all hover:bg-accent-dark"
                >
                  {way.action}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
