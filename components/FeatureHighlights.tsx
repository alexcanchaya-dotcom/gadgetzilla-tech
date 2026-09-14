'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'What we publish',
    description: 'An editorial list. We do not take checkout or promise a live Amazon price.',
  },
  {
    title: 'How we are paid',
    description: 'Amazon Associate links. If you buy after a click, we may earn a commission.',
    href: '/affiliate-disclosure',
    linkLabel: 'Read the disclosure',
  },
  {
    title: 'Your data',
    description: 'Email is optional. Analytics and ads load only when real IDs are configured.',
    href: '/privacy',
    linkLabel: 'Privacy policy',
  },
];

export function FeatureHighlights() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, idx) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: idx * 0.08 } }}
          viewport={{ once: true }}
          className="glass-panel relative overflow-hidden rounded-2xl p-5"
        >
          <h3 className="text-xl font-bold text-white">{feature.title}</h3>
          <p className="mt-1 text-sm text-white/70">{feature.description}</p>
          {feature.href ? (
            <Link href={feature.href} className="mt-3 inline-block text-sm text-neonBlue underline underline-offset-4">
              {feature.linkLabel}
            </Link>
          ) : null}
        </motion.div>
      ))}
    </div>
  );
}
