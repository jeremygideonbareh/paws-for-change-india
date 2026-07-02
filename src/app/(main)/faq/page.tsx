'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CaretDown, PawPrint } from '@phosphor-icons/react';
import ScrollReveal from '@/components/ScrollReveal';
import { faqItems } from '@/content/faq';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <>
      {/* ════════════════ Hero ════════════════ */}
      <section className="relative overflow-hidden bg-background pt-32 pb-24">
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 h-[350px] w-[350px] rounded-full bg-accent/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-[250px] w-[250px] rounded-full bg-accent-light/8 blur-[100px]" />
        </div>
        {/* Decorative pet images */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-[15%] right-[5%] h-40 w-40 overflow-hidden rounded-2xl opacity-[0.04]">
            <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=300&q=60&fm=webp&fit=crop" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-[10%] left-[3%] h-32 w-32 overflow-hidden rounded-2xl opacity-[0.04]">
            <img src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=240&q=60&fm=webp&fit=crop" alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Got Questions?
              </span>
              <h1 className="gradient-text mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Everything you need to know about our work, how you can help, and how we make a
                difference for animals across India.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════ Accordion ════════════════ */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div
                    className={`rounded-2xl border transition-colors duration-300 ${
                      isOpen
                        ? 'border-accent/30 bg-background'
                        : 'border-border bg-background hover:border-border-light'
                    }`}
                  >
                    {/* ── Question button ── */}
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8 md:py-6"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-base font-semibold text-foreground md:text-lg">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="shrink-0"
                      >
                        <CaretDown
                          size={20}
                          weight="bold"
                          className={`transition-colors duration-300 ${
                            isOpen ? 'text-accent' : 'text-muted'
                          }`}
                        />
                      </motion.div>
                    </button>

                    {/* ── Answer panel ── */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-border px-6 pb-6 pt-5 md:px-8 md:pb-8 md:pt-6">
                            <div
                              className="prose-sm prose max-w-none leading-relaxed text-muted prose-headings:text-foreground prose-headings:font-display prose-strong:text-foreground prose-ol:list-decimal prose-ul:list-disc prose-li:marker:text-accent"
                              dangerouslySetInnerHTML={{ __html: item.answer }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* ── Still have questions? ── */}
          <ScrollReveal delay={0.4}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/8 px-5 py-2 text-sm text-accent">
                <PawPrint size={16} weight="fill" />
                <span>Still have questions? Reach out to us</span>
              </div>
              <p className="mt-4 text-sm text-muted">
                Can&apos;t find what you&apos;re looking for?{' '}
                <a
                  href="/contact"
                  className="font-medium text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:decoration-accent"
                >
                  Contact our team
                </a>{' '}
                and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
