'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PawPrint, ArrowRight, CaretDown } from '@phosphor-icons/react';

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const headingOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const subheadingY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const ctaY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const orbsScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const orbsOpacity = useTransform(scrollYProgress, [0, 1], [0.08, 0.02]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Background gradient orbs with parallax */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ scale: orbsScale, opacity: orbsOpacity }}
      >
        <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[140px]" />
        <div className="absolute -bottom-32 left-1/4 h-[600px] w-[600px] rounded-full bg-accent-light/10 blur-[160px]" />
        <div className="absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute -top-20 right-1/3 h-[350px] w-[350px] rounded-full bg-accent-light/8 blur-[100px]" />
      </motion.div>

      {/* Cinematic dog photo backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=1920&q=80&fm=webp&fit=crop"
          alt=""
          className="h-full w-full object-cover animate-blur-in"
          fetchPriority="high"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/10" />
      </div>

      {/* Main content with parallax */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ y: subheadingY, opacity: headingOpacity }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/8 px-4 py-1.5 text-sm font-medium text-accent">
            <PawPrint size={16} weight="fill" />
            <span>Animal Rescue &amp; Adoption NGO — India</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-display text-5xl font-black leading-tight tracking-tight text-foreground sm:text-7xl md:text-8xl"
          style={{ y: headingY, opacity: headingOpacity }}
        >
          Every Paw
          <br />
          <span className="gradient-text">Deserves a Chance</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          style={{ y: subheadingY, opacity: headingOpacity }}
        >
          We rescue, rehabilitate, and rehome abandoned animals across India. With your support, we
          give stray and injured animals a second chance at a loving home.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-6 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row"
          style={{ y: ctaY, opacity: headingOpacity }}
        >
          <a
            href="#involved"
            className="flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-background transition-all hover:bg-accent-dark"
          >
            Get Involved
            <ArrowRight size={16} weight="bold" />
          </a>
          <a
            href="#programs"
            className="flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
          >
            Our Programs
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 max-md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-muted">
            Scroll
          </span>
          <CaretDown size={16} weight="bold" className="text-accent" />
        </motion.div>
      </motion.div>

    </section>
  );
}
