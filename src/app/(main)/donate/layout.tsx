import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate | Paws for Change India',
  description:
    'Support Paws for Change India with your donation. Every contribution helps rescue, rehabilitate, and rehome abandoned animals across India. 80G tax benefits available.',
  openGraph: {
    title: 'Donate | Paws for Change India',
    description:
      'Support Paws for Change India with your donation. Every contribution helps rescue, rehabilitate, and rehome abandoned animals across India. 80G tax benefits available.',
  },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
