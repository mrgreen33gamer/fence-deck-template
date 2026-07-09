import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = `${BASE_URL}/blogs/signs-your-fence-needs-repair-or-replacement-waco-tx`;

export const metadata: Metadata = {
  title: "5 Signs Your Fence Needs Repair or Replacement (Waco, TX) | TimberLine Fence & Deck",
  description: "Leaning posts, soft wood, and failing gates rarely fix themselves. Here are the five signs Central Texas homeowners should watch for before a small repair becomes a full rebuild.",
  alternates: { canonical: url },
  openGraph: {
    title: "5 Signs Your Fence Needs Repair or Replacement (Waco, TX)",
    description: "Leaning posts, soft wood, and failing gates rarely fix themselves. Here are the five signs Central Texas homeowners should watch for before a small repair becomes a full rebuild.",
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "article",
    images: [{ url: `${BASE_URL}/pages/blogs/fence-repair-signs.svg`, alt: "Signs your fence needs repair or replacement in Waco, TX" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
