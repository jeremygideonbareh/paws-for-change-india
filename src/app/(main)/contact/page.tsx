'use client';

import { useState, type FormEvent, type ChangeEvent, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Envelope,
  PaperPlaneTilt,
  Spinner,
  CheckCircle,
  XCircle,
} from '@phosphor-icons/react';
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';

// ─── Types ───────────────────────────────────────────

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// ─── Constants ───────────────────────────────────────

const SUBJECTS = [
  'General Inquiry',
  'Adoption',
  'Volunteering',
  'Donation',
  'Partnership',
  'Other',
] as const;

const contactDetails = [
  {
    icon: MapPin,
    label: 'Address',
    lines: [
      '42 Charity Lane, Andheri East,',
      'Mumbai, Maharashtra 400093',
      'India',
    ],
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: Envelope,
    label: 'Email',
    value: 'hello@pawsforchange.in',
    href: 'mailto:hello@pawsforchange.in',
  },
];

const socialLinks = [
  { icon: FacebookLogo, label: 'Facebook', href: '#' },
  { icon: InstagramLogo, label: 'Instagram', href: '#' },
  { icon: TwitterLogo, label: 'Twitter', href: '#' },
  { icon: YoutubeLogo, label: 'YouTube', href: '#' },
];

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

// ─── Component ───────────────────────────────────────

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus('submitting');
      setErrorMessage('');

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: 'YOUR_ACCESS_KEY_HERE',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
          }),
        });

        const data = await response.json();

        if (data.success) {
          setStatus('success');
          setFormData(INITIAL_FORM);
        } else {
          setStatus('error');
          setErrorMessage(data.message || 'Something went wrong. Please try again later.');
        }
      } catch {
        setStatus('error');
        setErrorMessage('Network error. Please check your connection and try again.');
      }
    },
    [formData],
  );

  return (
    <>
      {/* ─── Header ─── */}
      <section className="relative overflow-hidden bg-background pt-32 pb-16">
        {/* Decorative gradient orbs */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[140px]" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent-light/5 blur-[120px]" />
        </div>
        {/* Decorative pet images */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-[20%] right-[5%] h-32 w-32 overflow-hidden rounded-2xl opacity-[0.05]">
            <img src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=200&q=60&fm=webp&fit=crop" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-[15%] left-[3%] h-40 w-40 overflow-hidden rounded-2xl opacity-[0.04]">
            <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=250&q=60&fm=webp&fit=crop" alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Have a question about adoption, volunteering, donations, or partnerships?
              We&apos;d love to hear from you. Reach out and we&apos;ll get back within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Form + Sidebar ─── */}
      <section className="relative bg-surface pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* ── Form Column ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl border border-border bg-background p-8 sm:p-10">
                {/* Success banner */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-start gap-3 rounded-xl border border-green-500/20 bg-green-50 p-4"
                  >
                    <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-green-600" />
                    <div>
                      <p className="text-sm font-medium text-green-800">
                        Message sent successfully!
                      </p>
                      <p className="mt-1 text-sm text-green-700">
                        Thank you for reaching out. We&apos;ll get back to you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Error banner */}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-50 p-4"
                  >
                    <XCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-red-600" />
                    <div>
                      <p className="text-sm font-medium text-red-800">Failed to send message</p>
                      <p className="mt-1 text-sm text-red-700">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  {/* ── Honeypot ── */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="absolute -left-[9999px] -top-[9999px]"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* ── Access key ── */}
                  <input
                    type="hidden"
                    name="access_key"
                    value="YOUR_ACCESS_KEY_HERE"
                  />

                  <div className="space-y-6">
                    {/* Name + Email */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Name <span className="text-accent">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Email <span className="text-accent">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                    </div>

                    {/* Phone + Subject */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Phone <span className="text-muted">(optional)</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Subject <span className="text-accent">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        >
                          <option value="" disabled>
                            Select a subject
                          </option>
                          {SUBJECTS.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Message <span className="text-accent">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how you'd like to help..."
                        className="w-full resize-y rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-background transition-all hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Spinner size={18} weight="bold" className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <PaperPlaneTilt size={18} weight="fill" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* ── Sidebar ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-6 lg:col-span-2"
            >
              {/* Contact details card */}
              <div className="rounded-2xl border border-border bg-background p-8">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Contact Information
                </h2>
                <div className="mt-6 space-y-6">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;
                    return (
                      <div key={detail.label} className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                          <Icon size={20} weight="fill" className="text-accent" />
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-widest text-muted">
                            {detail.label}
                          </p>
                          {'lines' in detail && detail.lines ? (
                            <address className="mt-1 not-italic text-sm text-foreground">
                              {(detail.lines as string[]).map((line, i) => (
                                <span key={i}>
                                  {line}
                                  {i < (detail.lines as string[]).length - 1 && <br />}
                                </span>
                              ))}
                            </address>
                          ) : (
                            <a
                              href={(detail as typeof detail & { href: string }).href}
                              className="mt-1 block text-sm text-foreground transition-colors hover:text-accent"
                            >
                              {detail.value}
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social links card */}
              <div className="rounded-2xl border border-border bg-background p-8">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Follow Us
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-200 hover:border-accent hover:text-accent"
                        aria-label={link.label}
                      >
                        <Icon size={18} weight="fill" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="overflow-hidden rounded-2xl border border-border">
                <div className="flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br from-accent/[0.04] to-accent/[0.10]">
                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                      <MapPin size={26} weight="fill" className="text-accent" />
                    </div>
                    <p className="mt-3 font-display text-sm font-semibold text-foreground">
                      Visit Us
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      42 Charity Lane, Andheri East
                      <br />
                      Mumbai, Maharashtra 400093
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
