'use client';

import { motion } from 'motion/react';

const partners = [
  'Animal Welfare Board of India',
  'PETA India',
  'World Animal Protection',
  'Blue Cross of India',
  'People for Animals',
];

export default function TrustBar() {
  return (
    <section className="relative border-y border-border/50 bg-background/60 py-5 backdrop-blur-sm md:py-6">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-center text-xs font-medium tracking-widest uppercase text-muted/50"
        >
          Trusted by
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2"
        >
          {partners.map((name) => (
            <span
              key={name}
              className="text-sm font-medium text-muted/40 transition-colors hover:text-muted/60"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
