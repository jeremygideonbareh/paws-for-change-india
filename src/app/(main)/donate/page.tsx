'use client';

import { useState, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  PawPrint,
  ShieldCheck,
  Bank,
  Question,
  CurrencyCircleDollar,
  Spinner,
  ArrowRight,
} from '@phosphor-icons/react';

// ─── Types ───────────────────────────────────────────

interface Tier {
  amount: number;
  label: string;
  description: string;
  features: string[];
}

interface FaqItem {
  q: string;
  a: string;
}

// ─── Constants ───────────────────────────────────────

const TIERS: Tier[] = [
  {
    amount: 500,
    label: 'Supporter',
    description:
      'Provides a full day of food and hydration for 10 rescued animals at our shelter.',
    features: [
      'Nutritious meals for shelter animals',
      'Clean drinking water supply',
      'Basic hygiene supplies',
    ],
  },
  {
    amount: 1000,
    label: 'Guardian',
    description:
      'Covers complete veterinary care including vaccinations for a rescued animal.',
    features: [
      'Full vaccination course',
      'Deworming and flea treatment',
      'Basic health checkup',
      'Microchipping',
    ],
  },
  {
    amount: 5000,
    label: 'Lifesaver',
    description:
      'Funds emergency medical surgery and post-operative care for a critical case.',
    features: [
      'Emergency surgery costs',
      'Post-op medication',
      'Extended hospitalization',
      'Follow-up consultations',
    ],
  },
];

const FAQS: FaqItem[] = [
  {
    q: 'Is my donation tax-exempt?',
    a: 'Yes! Paws for Change India is registered under Section 80G of the Income Tax Act. Donations of ₹500 and above are eligible for a 50% tax deduction. You will receive a receipt for your donation.',
  },
  {
    q: 'How is my donation used?',
    a: '100% of your donation goes directly to our animal welfare programs — rescue operations, medical care, shelter, food, and adoption drives. We maintain complete transparency with quarterly impact reports shared with our donors.',
  },
  {
    q: 'Can I make a recurring donation?',
    a: 'Absolutely! You can set up a monthly donation through our Razorpay subscription. Monthly donors receive exclusive updates and behind-the-scenes content from our shelters.',
  },
  {
    q: 'Will I receive a receipt?',
    a: 'Yes, an automated receipt is sent to your email immediately after successful payment. For 80G certificates, we email a tax-compliant receipt within 7 working days.',
  },
];

const BANK_DETAILS = [
  { label: 'Account Name', value: 'Paws for Change India' },
  { label: 'Account Number', value: '123456789012' },
  { label: 'Bank', value: 'State Bank of India' },
  { label: 'Branch', value: 'Andheri East, Mumbai' },
  { label: 'IFSC Code', value: 'SBIN0001234' },
  { label: 'Account Type', value: 'Current Account' },
];

const TAX_BENEFITS = [
  'Donations of ₹500 and above qualify for 50% tax deduction under Section 80G',
  'Tax-exempt receipts are issued within 7 working days',
  'PAN card details are required for 80G certificate issuance',
  'Your donation receipt serves as a valid document for IT filings',
];

// ─── Helpers ─────────────────────────────────────────

const loadRazorpay = (): Promise<boolean> => {
  return new Promise<boolean>((resolve) => {
    if ((window as any).Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

// ─── Component ───────────────────────────────────────

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleTierSelect = useCallback((amount: number) => {
    setSelectedAmount((prev) => (prev === amount ? null : amount));
    setCustomAmount('');
  }, []);

  const handleCustomAmount = useCallback((value: string) => {
    const cleaned = value.replace(/[^0-9]/g, '');
    setCustomAmount(cleaned);
    setSelectedAmount(null);
  }, []);

  const getPaymentAmount = (): number => {
    if (customAmount) return Math.max(10, parseInt(customAmount, 10) || 0);
    if (selectedAmount) return selectedAmount;
    return 0;
  };

  const handlePayment = useCallback(async () => {
    const amount = getPaymentAmount();
    if (amount < 10) {
      alert('Please select or enter a minimum donation amount of ₹10.');
      return;
    }

    setLoading(true);
    const loaded = await loadRazorpay();
    setLoading(false);

    if (!loaded) {
      alert('Failed to load the payment gateway. Please try again.');
      return;
    }

    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID',
      amount: amount * 100,
      currency: 'INR',
      name: 'Paws for Change India',
      description: 'Donation to Paws for Change India',
      image: '/favicon.ico',
      prefill: { contact: '', email: '' },
      notes: { address: 'Paws for Change India' },
      theme: { color: '#e63946' },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAmount, customAmount]);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-background pt-20">
        {/* Decorative orbs */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[140px]" />
          <div className="absolute -bottom-32 left-1/4 h-[600px] w-[600px] rounded-full bg-accent-light/10 blur-[160px]" />
          <div className="absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />
        </div>

        {/* Decorative animal photo backdrop */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&q=80&fm=webp&fit=crop"
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
              <Heart size={28} weight="fill" className="text-accent" />
            </div>
            <h1 className="mt-6 gradient-text text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Make a Difference Today
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Your support enables us to rescue, rehabilitate, and rehome abandoned animals.
              Every rupee directly impacts the lives of animals in need across India.
            </p>
          </motion.div>

          {/* Impact stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            {[
              { value: '5,000+', label: 'Animals Rescued' },
              { value: '2,500+', label: 'Successful Adoptions' },
              { value: '12+', label: 'Years of Service' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-surface/60 p-4 backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Donation Tiers ─── */}
      <section className="relative bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="gradient-text text-3xl font-bold tracking-tight sm:text-4xl">
              Choose Your Impact
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Every contribution, big or small, creates a ripple of change.
            </p>
          </motion.div>

          {/* Tier cards */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {TIERS.map((tier, index) => {
              const isActive = selectedAmount === tier.amount;
              return (
                <motion.button
                  key={tier.amount}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onClick={() => handleTierSelect(tier.amount)}
                  className={`group relative overflow-hidden rounded-2xl border p-8 text-left transition-all ${
                    isActive
                      ? 'border-accent bg-accent/5 shadow-lg shadow-accent/10'
                      : 'border-border bg-background hover:border-accent/30'
                  }`}
                >
                  {/* Decorative icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <CurrencyCircleDollar size={24} weight="fill" className="text-accent" />
                  </div>

                  <p className="mt-5 font-display text-3xl font-bold text-foreground">
                    ₹{tier.amount.toLocaleString('en-IN')}
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold uppercase tracking-widest text-accent">
                    {tier.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{tier.description}</p>

                  <ul className="mt-4 space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                        <PawPrint
                          size={14}
                          weight="fill"
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-accent">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 6L5 8.5L9.5 3.5"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Custom amount + Pay button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mt-12 max-w-xl"
          >
            <div className="rounded-2xl border border-border bg-background p-8 text-center">
              <label
                htmlFor="custom-amount"
                className="font-display text-base font-semibold text-foreground"
              >
                Or enter a custom amount
              </label>

              <div className="mt-4 flex items-center justify-center gap-1">
                <span className="text-2xl font-bold text-muted">₹</span>
                <input
                  id="custom-amount"
                  type="text"
                  inputMode="numeric"
                  value={customAmount}
                  onChange={(e) => handleCustomAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-40 border-b-2 border-border bg-transparent px-2 py-1 text-center text-2xl font-bold text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                />
              </div>
              <p className="mt-2 text-xs text-muted">Minimum donation: ₹10</p>

              <button
                onClick={handlePayment}
                disabled={loading || getPaymentAmount() < 10}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-background transition-all hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Spinner size={18} weight="bold" className="animate-spin" />
                    Loading Payment...
                  </>
                ) : (
                  <>
                    <Heart size={18} weight="fill" />
                    Donate{' '}
                    {getPaymentAmount() >= 10
                      ? `₹${getPaymentAmount().toLocaleString('en-IN')}`
                      : 'Now'}
                  </>
                )}
              </button>

              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} weight="fill" className="text-accent" />
                  Secure Payment
                </span>
                <span className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect
                      x="2"
                      y="6"
                      width="20"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  Razorpay
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 80G Tax Benefits ─── */}
      <section className="relative overflow-hidden bg-background py-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
              <ShieldCheck size={28} weight="fill" className="text-accent" />
            </div>
            <h2 className="mt-6 gradient-text text-3xl font-bold tracking-tight sm:text-4xl">
              Tax Benefits Under 80G
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Paws for Change India is registered under Section 80G of the Income Tax Act, 1961.
              Donors are eligible for a{' '}
              <strong className="text-foreground">50% tax deduction</strong> on donations of ₹500
              and above.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mt-12 max-w-2xl"
          >
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Tax Exemption Details
              </h3>
              <ul className="mt-4 space-y-3">
                {TAX_BENEFITS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-4">
                <p className="text-xs text-accent">
                  <strong>80G Registration No:</strong> AAACP1234F
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Bank Transfer Details ─── */}
      <section className="relative bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
              <Bank size={28} weight="fill" className="text-accent" />
            </div>
            <h2 className="mt-6 gradient-text text-3xl font-bold tracking-tight sm:text-4xl">
              Bank Transfer
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Prefer a direct bank transfer? Use the details below to make your donation directly to
              our account.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mt-12 max-w-lg"
          >
            <div className="rounded-2xl border border-border bg-background p-8">
              <div className="space-y-4">
                {BANK_DETAILS.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border-b border-border pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-sm text-muted">{item.label}</span>
                    <span className="text-sm font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-4">
                <p className="text-xs leading-relaxed text-muted">
                  After transferring, please email the transaction details to{' '}
                  <a
                    href="mailto:accounts@pawsforchange.in"
                    className="font-medium text-accent underline transition-colors hover:text-accent-dark"
                  >
                    accounts@pawsforchange.in
                  </a>{' '}
                  so we can issue your donation receipt and 80G certificate.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="relative overflow-hidden bg-background py-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-accent-light/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
              <Question size={28} weight="fill" className="text-accent" />
            </div>
            <h2 className="mt-6 gradient-text text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 max-w-2xl space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/20"
              >
                <h3 className="font-display text-base font-semibold text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.a}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mt-12 max-w-lg text-center"
          >
            <p className="text-sm text-muted">
              Still have questions?{' '}
              <a
                href="/contact"
                className="inline-flex items-center gap-1 font-medium text-accent transition-colors hover:text-accent-dark"
              >
                Contact us
                <ArrowRight size={14} weight="bold" />
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
