import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/content/blog';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | Paws for Change India`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Paws for Change India`,
      description: post.excerpt,
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back Link */}
        <ScrollReveal>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Back to Blog
          </Link>
        </ScrollReveal>

        {/* Header */}
        <ScrollReveal delay={0.1}>
          <header className="mt-8">
            {/* Category */}
            <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {post.category}
            </span>

            <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted">
              <span>{post.author}</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </header>
        </ScrollReveal>

        {/* Cover Image */}
        <ScrollReveal delay={0.15}>
          <div className="mt-10 overflow-hidden rounded-2xl">
            <img
              src={`https://images.unsplash.com/photo-${post.imageUrl}?w=1200&q=80&fm=webp&fit=crop`}
              alt={post.title}
              className="w-full animate-fade-in object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal delay={0.2}>
          <div
            className="prose-custom mt-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </ScrollReveal>

        {/* Footer Back Link */}
        <ScrollReveal delay={0.25}>
          <div className="mt-16 border-t border-border pt-8">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-light"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
              Back to all articles
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}
