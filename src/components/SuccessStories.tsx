'use client';

import { motion } from 'motion/react';
import { Heart } from '@phosphor-icons/react';

const stories = [
  {
    name: 'Luna',
    age: '2 yrs',
    breed: 'Indie',
    location: 'Mumbai',
    story:
      'Found on the streets with a broken leg, Luna made a full recovery and now enjoys beach walks with her forever family.',
  },
  {
    name: 'Max',
    age: '5 yrs',
    breed: 'Labrador',
    location: 'Pune',
    story:
      'Max survived a road accident and spent months in recovery. Today he brings joy to everyone he meets.',
  },
  {
    name: 'Bella',
    age: '3 yrs',
    breed: 'Beagle',
    location: 'Delhi',
    story:
      'Abandoned as a puppy, Bella was adopted by a senior couple who say she brought joy back into their home.',
  },
  {
    name: 'Charlie',
    age: '1 yr',
    breed: 'Indie',
    location: 'Bangalore',
    story:
      'Found dehydrated and malnourished, Charlie was nursed back to health and found his forever home within weeks.',
  },
  {
    name: 'Daisy',
    age: '4 yrs',
    breed: 'Spitz',
    location: 'Mumbai',
    story:
      'After years on the street, Daisy now lives like a queen — with a garden to explore and a family who adores her.',
  },
  {
    name: 'Rocky',
    age: '6 yrs',
    breed: 'Rottweiler',
    location: 'Chennai',
    story:
      'Rocky was rescued from an abusive situation. With patience and love, he has become the gentlest family dog.',
  },
];

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
                    src={`https://picsum.photos/seed/${story.name.toLowerCase()}/600/700`}
                    alt={story.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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

                <p className="mt-4 text-sm leading-relaxed text-muted">{story.story}</p>

                <a
                  href="#"
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
