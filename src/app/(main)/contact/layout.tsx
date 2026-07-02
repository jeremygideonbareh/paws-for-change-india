import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Paws for Change India',
  description:
    'Get in touch with Paws for Change India. Reach out for inquiries about adoption, volunteering, donations, partnerships, and our animal welfare programs.',
  openGraph: {
    title: 'Contact Us | Paws for Change India',
    description:
      'Get in touch with Paws for Change India. Reach out for inquiries about adoption, volunteering, donations, partnerships, and our animal welfare programs.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
