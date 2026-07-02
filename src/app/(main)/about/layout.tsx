import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Paws for Change India',
  description:
    'Learn about our mission to rescue, rehabilitate, and rehome abandoned animals across India. Discover our story, values, and impact.',
  openGraph: {
    title: 'About Us | Paws for Change India',
    description:
      'Learn about our mission to rescue, rehabilitate, and rehome abandoned animals across India.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
