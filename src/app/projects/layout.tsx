// src/app/projects/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.timberlinefencedeck.com';
const url = `${BASE_URL}/projects`;

export const metadata: Metadata = {
  title: 'Projects & Portfolio | TimberLine Fence & Deck — Waco, TX',
  description:
    'Real fence and deck projects by TimberLine Fence & Deck across Central Texas — wood privacy, vinyl, custom decks, gate automation, and commercial installs in Waco, Temple, Killeen, and beyond.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Projects & Portfolio | TimberLine Fence & Deck',
    description: 'Material showcase and completed fence and deck projects across Central Texas.',
    url,
    siteName: 'TimberLine Fence & Deck',
    locale: 'en_US',
    type: 'website',
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: 'TimberLine Fence & Deck projects — Waco TX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects & Portfolio | TimberLine Fence & Deck',
    description: 'Real fence and deck projects for Central Texas homeowners and businesses.',
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
  robots: { index: true, follow: true },
};

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'TimberLine Fence & Deck — Projects & Portfolio',
  description:
    'A portfolio of wood fencing, vinyl fencing, custom decks, deck repairs, gate automation, and commercial fencing completed by TimberLine Fence & Deck across Central Texas.',
  url,
  about: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'TimberLine Fence & Deck',
    url: BASE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3501 S Valley Mills Dr',
      addressLocality: 'Waco',
      addressRegion: 'TX',
      postalCode: '76711',
      addressCountry: 'US',
    },
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      {children}
    </>
  );
}
