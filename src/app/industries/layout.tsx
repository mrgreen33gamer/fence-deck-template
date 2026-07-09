import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | TimberLine Fence & Deck",
  description:
    "Fence and deck services for residential builders, property managers, and HOA communities across Central Texas. Flat-rate bids and a 3-year workmanship warranty.",
  keywords: [
    "builder fence contractor Waco",
    "property management fencing Texas",
    "HOA fence contractor Waco",
    "commercial fencing Central Texas",
    "TimberLine Fence & Deck industries",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | TimberLine Fence & Deck",
    description:
      "Builders, property managers, and HOA communities — fence and deck work scoped for how your projects run.",
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
