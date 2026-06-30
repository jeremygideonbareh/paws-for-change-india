'use client';

import dynamic from 'next/dynamic';

const Programs = dynamic(() => import('@/components/Programs'), {
  ssr: false,
  loading: () => (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex min-h-[300px] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        </div>
      </div>
    </section>
  ),
});

export default function ProgramsWrapper() {
  return <Programs />;
}
