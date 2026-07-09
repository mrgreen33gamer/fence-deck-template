import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = `${BASE_URL}/blogs/wood-vs-vinyl-fencing-central-texas`;

export const metadata: Metadata = {
  title: "Wood vs. Vinyl Fencing: What Makes Sense for Central Texas? | TimberLine Fence & Deck",
  description: "Privacy, price, HOA rules, and heat all factor into the choice. Here's an honest comparison of wood and vinyl fencing for Waco-area properties.",
  alternates: { canonical: url },
  openGraph: {
    title: "Wood vs. Vinyl Fencing: What Makes Sense for Central Texas?",
    description: "Privacy, price, HOA rules, and heat all factor into the choice. Here's an honest comparison of wood and vinyl fencing for Waco-area properties.",
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "article",
    images: [{ url: `${BASE_URL}/pages/blogs/wood-vs-vinyl.svg`, alt: "Wood vs vinyl fencing comparison for Central Texas" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
