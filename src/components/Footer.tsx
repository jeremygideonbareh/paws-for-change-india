'use client';

import { PawPrint } from '@phosphor-icons/react';
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';

const programs = [
  { name: 'Medical Care', href: '/programs#medical-care' },
  { name: 'Adoption Program', href: '/programs#adoption-program' },
  { name: 'Sterilization Drives', href: '/programs#sterilization-drives' },
  { name: 'Community Education', href: '/programs#community-education' },
  { name: 'Rescue Operations', href: '/programs#rescue-operations' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background">
      {/* Decorative photos */}
      <div className="pointer-events-none absolute right-0 bottom-0 h-48 w-48 overflow-hidden opacity-[0.03] max-md:hidden">
        <img
          src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&q=60&fm=webp&fit=crop"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute left-0 top-1/3 h-36 w-36 overflow-hidden opacity-[0.03] max-md:hidden">
        <img
          src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=300&q=60&fm=webp&fit=crop"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute right-[20%] top-[15%] h-24 w-24 overflow-hidden rounded-full opacity-[0.03] max-md:hidden">
        <img
          src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=180&q=60&fm=webp&fit=crop"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — About */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <PawPrint size={28} weight="fill" className="text-accent" />
              <span className="font-display text-xl font-bold text-foreground">
                Paws for Change
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              Dedicated to rescuing, rehabilitating, and rehoming abandoned animals across India.
              Every life matters, every paw deserves a chance.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                80G Registered
              </span>
              <span className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                FCRA Approved
              </span>
            </div>
          </div>

          {/* Column 2 — Programs */}
          <div className="space-y-5">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a
                    href={program.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="space-y-5">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              Contact
            </h3>
            <address className="space-y-3 not-italic">
              <p className="text-sm text-muted">
                42 Charity Lane, Andheri East,
                <br />
                Mumbai, Maharashtra 400093
                <br />
                India
              </p>
              <p>
                <a
                  href="tel:+919876543210"
                  className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                >
                  +91 98765 43210
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@pawsforchange.in"
                  className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                >
                  hello@pawsforchange.in
                </a>
              </p>
            </address>
          </div>

          {/* Column 4 — Connect + Newsletter */}
          <div className="space-y-5">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/pawsforchangeindia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-200 hover:border-accent hover:text-accent"
                aria-label="Facebook"
              >
                <FacebookLogo size={18} weight="fill" />
              </a>
              <a
                href="https://instagram.com/pawsforchangeindia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-200 hover:border-accent hover:text-accent"
                aria-label="Instagram"
              >
                <InstagramLogo size={18} weight="fill" />
              </a>
              <a
                href="https://twitter.com/pawsforchange"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-200 hover:border-accent hover:text-accent"
                aria-label="Twitter"
              >
                <TwitterLogo size={18} weight="fill" />
              </a>
              <a
                href="https://youtube.com/@pawsforchangeindia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-200 hover:border-accent hover:text-accent"
                aria-label="YouTube"
              >
                <YoutubeLogo size={18} weight="fill" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
                Newsletter
              </h4>
              <form
                action="https://pawsforchangeindia.us21.list-manage.com/subscribe/post?u=YOUR_MAILCHIMP_U&amp;id=YOUR_MAILCHIMP_ID"
                method="post"
                target="_blank"
                className="flex gap-2"
              >
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Your email"
                  className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  required
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background transition-all duration-200 hover:bg-accent-dark"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
          <p>&copy; {currentYear} Paws for Change India. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="/faq" className="transition-colors hover:text-accent">
              FAQ
            </a>
            <a href="/contact" className="transition-colors hover:text-accent">
              Contact Us
            </a>
            <span className="text-border-light">|</span>
            <span>80G: AAACP1234F</span>
            <span className="text-border-light">|</span>
            <span>FCRA: 0987654321</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
