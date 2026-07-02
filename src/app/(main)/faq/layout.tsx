import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Paws for Change India',
  description:
    'Frequently asked questions about Paws for Change India — adoption, donations, volunteering, animal rescue, CNVR, and more.',
  openGraph: {
    title: 'FAQ | Paws for Change India',
    description:
      'Frequently asked questions about Paws for Change India — adoption, donations, volunteering, animal rescue, CNVR, and more.',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
