import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = `${BASE_URL}/blogs/how-often-should-you-reseal-your-deck-texas`;

export const metadata: Metadata = {
  title: "How Often Should You Reseal Your Deck in Central Texas? | TimberLine Fence & Deck",
  description: "Texas sun and sudden storms chew through deck finishes. Here's a practical reseal schedule for wood decks around Waco — and what happens if you wait too long.",
  alternates: { canonical: url },
  openGraph: {
    title: "How Often Should You Reseal Your Deck in Central Texas?",
    description: "Texas sun and sudden storms chew through deck finishes. Here's a practical reseal schedule for wood decks around Waco — and what happens if you wait too long.",
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "article",
    images: [{ url: `${BASE_URL}/pages/blogs/deck-reseal-timing.svg`, alt: "Deck resealing schedule guide for Central Texas homes" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
