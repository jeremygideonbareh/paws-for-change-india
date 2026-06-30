'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { PawPrint, List, X } from '@phosphor-icons/react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Success Stories', href: '#stories' },
  { name: 'Get Involved', href: '#involved' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const { scrollY } = useScroll();

  // ── Track scroll position for transparency ──
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  // ── Track active section via IntersectionObserver ──
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-20% 0px -70% 0px' },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // ── Lock body scroll when mobile menu is open ──
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          scrolled
            ? 'border-b border-border bg-background/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-2">
            <PawPrint size={24} weight="fill" className="text-accent" />
            <span className="font-display text-lg font-bold text-foreground">
              Paws for Change
            </span>
          </a>

          {/* ── Desktop nav ── */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-accent'
                      : 'text-muted hover:text-accent'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    />
                  )}
                </a>
              );
            })}
            <a
              href="#involved"
              onClick={handleLinkClick}
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-background transition-all hover:bg-accent-dark"
            >
              Donate Now
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted md:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <X size={20} weight="bold" />
            ) : (
              <List size={20} weight="bold" />
            )}
          </button>
        </nav>
      </header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay backdrop */}
            <motion.div
              key="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in panel */}
            <motion.div
              key="mobile-menu-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="fixed top-0 right-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-border bg-background pt-24 md:hidden"
            >
              <nav className="flex flex-col gap-2 px-6">
                {navLinks.map((link) => {
                  const sectionId = link.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-accent/10 text-accent'
                          : 'text-muted hover:bg-accent/5 hover:text-accent'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-auto border-t border-border px-6 py-8">
                <a
                  href="#involved"
                  onClick={handleLinkClick}
                  className="flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-background transition-all hover:bg-accent-dark"
                >
                  Donate Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
