import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { successStories } from '@/content/stories';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowLeft, Heart } from '@phosphor-icons/react/dist/ssr';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return successStories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = successStories.find((s) => s.slug === slug);

  if (!story) return {};

  return {
    title: `${story.name}'s Story | Paws for Change India`,
    description: story.excerpt,
    openGraph: {
      title: `${story.name}'s Story | Paws for Change India`,
      description: story.excerpt,
    },
  };
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = successStories.find((s) => s.slug === slug);

  if (!story) notFound();

  return (
    <article className="relative bg-background py-24">
      {/* Decorative pet images */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[5%] right-[3%] h-32 w-32 overflow-hidden rounded-2xl opacity-[0.04]">
          <img src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=220&q=60&fm=webp&fit=crop" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute bottom-[10%] left-[2%] h-28 w-28 overflow-hidden rounded-2xl opacity-[0.04]">
          <img src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=200&q=60&fm=webp&fit=crop" alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-6">
        {/* Back Link */}
        <ScrollReveal>
          <Link
            href="/stories"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Back to Stories
          </Link>
        </ScrollReveal>

        {/* Header */}
        <ScrollReveal delay={0.1}>
          <header className="mt-8">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                  {story.name}&rsquo;s Story
                </h1>
                <p className="mt-2 text-lg text-muted">
                  {story.breed} &middot; {story.age} &middot; {story.location}
                </p>
              </div>
              <Heart
                size={28}
                weight="bold"
                className="mt-1 shrink-0 text-accent"
              />
            </div>
          </header>
        </ScrollReveal>

        {/* Animal Details Card */}
        <ScrollReveal delay={0.15}>
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted">Name</p>
              <p className="mt-1 font-display text-lg font-semibold text-foreground">
                {story.name}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted">Breed</p>
              <p className="mt-1 font-display text-lg font-semibold text-foreground">
                {story.breed}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted">Age</p>
              <p className="mt-1 font-display text-lg font-semibold text-foreground">
                {story.age}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted">Adopted</p>
              <p className="mt-1 font-display text-lg font-semibold text-foreground">
                {formatDate(story.adoptedDate)}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Image */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <img
              src={`https://images.unsplash.com/photo-${story.imageUrl}?w=1200&q=80&fm=webp&fit=crop`}
              alt={story.name}
              className="w-full animate-fade-in object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal delay={0.25}>
          <div
            className="prose-custom mt-12"
            dangerouslySetInnerHTML={{ __html: story.content }}
          />
        </ScrollReveal>

        {/* Footer Back Link */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 border-t border-border pt-8">
            <Link
              href="/stories"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-light"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
              Back to all stories
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}
