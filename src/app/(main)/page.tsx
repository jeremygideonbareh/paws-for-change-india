import { Suspense } from 'react';

// Static imports
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ImpactStats from '@/components/ImpactStats';
import About from '@/components/About';
import SuccessStories from '@/components/SuccessStories';
import GetInvolved from '@/components/GetInvolved';
import Partners from '@/components/Partners';
import ScrollReveal from '@/components/ScrollReveal';

// GSAP-heavy component wrapped in a Client Component with ssr: false
import ProgramsWrapper from '@/components/ProgramsWrapper';

export default function Home() {
  return (
    <>
      <Hero />

      <TrustBar />

      <ImpactStats />

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <Suspense
        fallback={
          <section className="bg-surface py-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex min-h-[300px] items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
              </div>
            </div>
          </section>
        }
      >
        <ProgramsWrapper />
      </Suspense>

      <ScrollReveal>
        <SuccessStories />
      </ScrollReveal>

      <ScrollReveal>
        <GetInvolved />
      </ScrollReveal>

      <Partners />
    </>
  );
}
