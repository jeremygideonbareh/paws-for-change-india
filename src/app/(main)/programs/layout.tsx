import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Programs | Paws for Change India',
  description:
    'Explore our comprehensive animal welfare programmes — from emergency rescue and medical care to sterilisation drives, adoption services, and community education.',
  openGraph: {
    title: 'Our Programs | Paws for Change India',
    description:
      'Explore our comprehensive animal welfare programmes — from emergency rescue and medical care to sterilisation drives, adoption services, and community education.',
  },
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
