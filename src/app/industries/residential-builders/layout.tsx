import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = `${BASE_URL}/industries/residential-builders`;

export const metadata: Metadata = {
  title: "Residential Builders | TimberLine Fence & Deck",
  description: "Schedule-driven fencing and decks for new homes and remodels — specs, punch lists, and one reliable trade partner.",
  alternates: { canonical: url },
  openGraph: {
    title: "Residential Builders | TimberLine Fence & Deck",
    description: "Schedule-driven fencing and decks for new homes and remodels — specs, punch lists, and one reliable trade partner.",
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
