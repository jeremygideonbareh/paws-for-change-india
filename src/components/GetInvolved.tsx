'use client';

import { motion } from 'motion/react';
import { HandHeart, CurrencyCircleDollar, Calendar } from '@phosphor-icons/react';

const ways = [
  {
    icon: CurrencyCircleDollar,
    title: 'Donate',
    desc: 'Your contribution helps us provide food, shelter, and medical care to animals in need.',
    action: 'Donate Now',
    href: '/donate',
    imageUrl: '1552053831-71594a27632d',
  },
  {
    icon: HandHeart,
    title: 'Volunteer',
    desc: 'Join our network of volunteers for rescue operations, events, and community outreach.',
    action: 'Sign Up',
    href: '/contact',
    imageUrl: '1559190394-df5a28aab5c5',
  },
  {
    icon: Calendar,
    title: 'Foster',
    desc: 'Open your home temporarily to an animal in recovery. We provide all supplies and support.',
    action: 'Learn More',
    href: '/contact',
    imageUrl: '1450778869180-41d0601e046e',
  },
];

export default function GetInvolved() {
  return (
    <section id="involved" className="relative bg-surface py-24">
      {/* Decorative photos */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-[10%] right-[5%] h-40 w-40 overflow-hidden rounded-2xl opacity-[0.03]">
          <img
            src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=280&q=60&fm=webp&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute top-[15%] left-[3%] h-32 w-32 overflow-hidden rounded-2xl opacity-[0.03]">
          <img
            src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=240&q=60&fm=webp&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
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
                className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all hover:border-accent/30"
              >
                {/* Decorative photo behind icon */}
                <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 overflow-hidden rounded-full opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.12]">
                  <img
                    src={`https://images.unsplash.com/photo-${way.imageUrl}?w=300&q=60&fm=webp&fit=crop`}
                    alt=""
                    className="h-full w-full object-cover"
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>
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
