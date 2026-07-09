import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";

export const metadata: Metadata = {
  title: "About TimberLine Fence & Deck — Waco TX Fence & Deck Builder Since 2012",
  description:
    "Meet TimberLine Fence & Deck. Locally owned and operated in Waco, Texas since 2012 by Jake Thornton. Licensed & insured, flat-rate quotes, and a 3-year workmanship warranty. Serving Waco, Temple, Killeen, Hewitt, Woodway, and Central Texas.",
  keywords: [
    "about TimberLine Fence & Deck",
    "Waco fence company",
    "deck builder Waco TX",
    "Jake Thornton fence contractor",
    "licensed fence contractor Waco",
  ],
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About TimberLine Fence & Deck — Waco TX Since 2012",
    description:
      "Locally owned fence and deck builder in Waco, TX. Licensed & insured, flat-rate quotes, 3-year workmanship warranty.",
    url: `${BASE_URL}/about`,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
