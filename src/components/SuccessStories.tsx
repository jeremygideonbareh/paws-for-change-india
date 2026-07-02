'use client';

import { motion } from 'motion/react';
import { Heart } from '@phosphor-icons/react';
import { successStories } from '@/content/stories';

const stories = successStories.slice(0, 6);

export default function SuccessStories() {
  return (
    <section id="stories" className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
            Happy Tails
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Every rescue is a story of hope. Meet some of the animals whose lives have been
            transformed by your support.
          </p>
        </motion.div>

        {/* Gallery grid — CSS columns for a masonry art-gallery feel */}
        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-surface"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={`https://images.unsplash.com/photo-${story.imageUrl}?w=600&q=80&fm=webp&fit=crop`}
                    alt={story.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 animate-fade-in"
                    loading="lazy"
                  />
                </div>
                {/* Amber overlay on hover */}
                <div className="pointer-events-none absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/20" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {story.name}
                    </h3>
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

                <p className="mt-4 text-sm leading-relaxed text-muted">{story.excerpt}</p>

                <a
                  href={`/stories/${story.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-light"
                >
                  Read full story
                  <span aria-hidden="true" className="text-xs transition-transform group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
