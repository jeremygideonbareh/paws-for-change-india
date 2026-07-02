import type { Metadata } from 'next';
import Link from 'next/link';
import { successStories } from '@/content/stories';
import ScrollReveal from '@/components/ScrollReveal';
import { Heart } from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = {
  title: 'Success Stories | Paws for Change India',
  description:
    'Meet the animals whose lives have been transformed — from abandonment and injury to loving forever homes. Real rescue stories from across India.',
  openGraph: {
    title: 'Success Stories | Paws for Change India',
    description:
      'Meet the animals whose lives have been transformed — from abandonment and injury to loving forever homes. Real rescue stories from across India.',
  },
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function StoriesPage() {
  return (
    <section className="relative bg-background py-24">
      {/* Decorative pet images */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[8%] right-[3%] h-40 w-40 overflow-hidden rounded-2xl opacity-[0.04]">
          <img src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?w=300&q=60&fm=webp&fit=crop" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute bottom-[20%] left-[4%] h-32 w-32 overflow-hidden rounded-2xl opacity-[0.04]">
          <img src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=240&q=60&fm=webp&fit=crop" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute top-[50%] left-[10%] h-20 w-20 overflow-hidden rounded-xl opacity-[0.03]">
          <img src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=160&q=60&fm=webp&fit=crop" alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
              Success Stories
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Every rescue is a story of hope. Meet the animals who found their second chance
              through your support.
            </p>
          </div>
        </ScrollReveal>

        {/* Stories Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {successStories.map((story, index) => (
            <ScrollReveal key={story.slug} delay={index * 0.05}>
              <Link href={`/stories/${story.slug}`} className="group block">
                <article className="overflow-hidden rounded-2xl border border-border bg-surface transition-shadow duration-300 hover:shadow-lg">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video">
                      <img
                        src={`https://images.unsplash.com/photo-${story.imageUrl}?w=800&q=80&fm=webp&fit=crop`}
                        alt={story.name}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/20" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h2 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                          {story.name}
                        </h2>
                        <p className="mt-0.5 text-sm text-muted">
                          {story.breed} &middot; {story.age} &middot; {story.location}
                        </p>
                      </div>
                      <Heart
                        size={20}
                        weight="bold"
                        className="mt-1 shrink-0 text-accent transition-colors group-hover:text-accent-light"
                      />
                    </div>

                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted">
                      {story.excerpt}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-xs text-muted">
                        Adopted {formatDate(story.adoptedDate)}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors group-hover:text-accent-light">
                        Read full story
                        <span
                          aria-hidden="true"
                          className="text-xs transition-transform group-hover:translate-x-0.5"
                        >
                          &rarr;
                        </span>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
