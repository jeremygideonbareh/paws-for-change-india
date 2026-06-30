'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import {
  PawPrint,
  HeartStraight,
  HandHeart,
  Syringe,
} from '@phosphor-icons/react';

/* ------------------------------------------------------------------ */
/*  CountUp – animates 0 → target when the ref enters the viewport    */
/* ------------------------------------------------------------------ */

function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1800; // ms
    const start = performance.now();

    function frame(now: number) {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);

      // Cubic ease-out – decelerates naturally for a premium feel
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(eased * value);

      setDisplay(current);

      if (t < 1) {
        requestAnimationFrame(frame);
      }
    }

    requestAnimationFrame(frame);
  }, [isInView, value]);

  // Format with locale commas
  const formatted = display.toLocaleString('en-IN');

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { icon: PawPrint, value: 12847, suffix: '+', label: 'Animals Rescued' },
  { icon: HeartStraight, value: 8932, suffix: '+', label: 'Happy Adoptions' },
  { icon: HandHeart, value: 15670, suffix: '+', label: 'Medical Treatments' },
  { icon: Syringe, value: 4821, suffix: '+', label: 'Sterilizations' },
];

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function ImpactStats() {
  return (
    <section className="relative bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
            Our Impact
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Every number represents a life changed, a family reunited, and a
            future made brighter through compassion and care.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex flex-col items-center rounded-2xl border border-border bg-surface-elevated px-4 py-10 text-center"
              >
                {/* Amber/gold top border accent */}
                <div className="mb-6 h-1 w-12 rounded-full bg-accent" />

                <Icon size={32} weight="fill" className="text-accent" />

                <span className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl tabular-nums">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </span>

                <span className="mt-1.5 text-sm text-muted">{stat.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
