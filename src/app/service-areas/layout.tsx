import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: "Service Areas | TimberLine Fence & Deck — Waco & Central Texas",
  description:
    "TimberLine Fence & Deck serves Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and surrounding Central Texas communities.",
  alternates: { canonical: url },
  openGraph: {
    title: "Service Areas | TimberLine Fence & Deck",
    description:
      "Fence and deck installs across Waco and Central Texas. Free estimates, flat-rate quotes, 3-year workmanship warranty.",
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "website",
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
