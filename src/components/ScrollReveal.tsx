'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Animation start delay in seconds (default 0) */
  delay?: number;
}

export default function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier ease-out
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
