// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.timberlinefencedeck.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact TimberLine Fence & Deck | Free Estimates in Waco, TX',
  description:
    'Request a free fence or deck estimate from TimberLine Fence & Deck. Call (254) 753-6400 or fill out our online form — serving Waco and Central Texas.',
  keywords: [
    'contact TimberLine Fence & Deck',
    'fence estimate Waco TX',
    'deck builder quote Waco',
    'fence contractor Central Texas',
    'TimberLine Fence & Deck contact',
    '254-753-6400',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact TimberLine Fence & Deck | Free Estimates in Waco, TX',
    description:
      'Call, text, or submit a request. Flat-rate pricing, 3-Year Workmanship Warranty, licensed crews.',
    url,
    siteName: 'TimberLine Fence & Deck',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact TimberLine Fence & Deck | Waco & Central Texas',
    description: 'Schedule a free fence or deck estimate. Call (254) 753-6400.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
