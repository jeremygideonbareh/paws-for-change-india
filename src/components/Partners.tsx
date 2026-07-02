'use client';

import { motion } from 'motion/react';

const partners = [
  'Animal Welfare Board of India',
  'Mumbai Municipal Corp',
  'Petcare Foundation',
  'VetLife India',
  'Animal Aid',
  'Paws & Claws',
];

export default function Partners() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Decorative photos */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 overflow-hidden opacity-[0.03] max-md:hidden">
        <img
          src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400&q=60&fm=webp&fit=crop"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 overflow-hidden opacity-[0.03] max-md:hidden">
        <img
          src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=350&q=60&fm=webp&fit=crop"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute top-1/2 right-[8%] h-28 w-28 overflow-hidden rounded-full opacity-[0.03]">
        <img
          src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=180&q=60&fm=webp&fit=crop"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
      {/* Heading */}
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Trusted By
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mt-4 max-w-2xl text-lg text-muted"
        >
          We are proud to collaborate with leading organizations dedicated to animal welfare and
          community impact across India.
        </motion.p>
      </div>

      {/* Marquee rows */}
      <div className="mt-16 space-y-0">
        {/* Row 1 — scrolls left */}
        <div className="flex overflow-hidden border-t border-border py-6">
          <div className="animate-marquee flex w-max shrink-0 items-center gap-16 pl-8">
            {[...partners, ...partners].map((partner, index) => (
              <span
                key={`r1-${index}`}
                className="whitespace-nowrap text-lg font-semibold uppercase tracking-[0.15em] text-muted transition-colors duration-300 hover:text-accent"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (reverse) */}
        <div className="flex overflow-hidden border-b border-border py-6">
          <div className="animate-marquee-reverse flex w-max shrink-0 items-center gap-16 pl-8">
            {[...partners, ...partners].map((partner, index) => (
              <span
                key={`r2-${index}`}
                className="whitespace-nowrap text-lg font-semibold uppercase tracking-[0.15em] text-muted transition-colors duration-300 hover:text-accent"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
