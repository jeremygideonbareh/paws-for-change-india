import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/content/blog';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Blog | Paws for Change India',
  description:
    'Read stories from the frontlines of animal rescue in India — rescue operations, adoption tips, community programmes, and more.',
  openGraph: {
    title: 'Blog | Paws for Change India',
    description:
      'Read stories from the frontlines of animal rescue in India — rescue operations, adoption tips, community programmes, and more.',
  },
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <section className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
              Our Blog
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Stories, guides, and updates from the frontlines of animal rescue and welfare across
              India.
            </p>
          </div>
        </ScrollReveal>

        {/* Blog Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 0.05}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="overflow-hidden rounded-2xl border border-border bg-surface transition-shadow duration-300 hover:shadow-lg">
                  {/* Cover Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video">
                      <img
                        src={`https://images.unsplash.com/photo-${post.imageUrl}?w=800&q=80&fm=webp&fit=crop`}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/20" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="mt-4 flex items-center gap-2 border-t border-border pt-4 text-xs text-muted">
                      <span>{post.author}</span>
                      <span aria-hidden="true">&middot;</span>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
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
