import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = `${BASE_URL}/industries/hoa-communities`;

export const metadata: Metadata = {
  title: "HOA Communities | TimberLine Fence & Deck",
  description: "HOA-approved materials, phased entrance and common-area fencing, and board-ready documentation.",
  alternates: { canonical: url },
  openGraph: {
    title: "HOA Communities | TimberLine Fence & Deck",
    description: "HOA-approved materials, phased entrance and common-area fencing, and board-ready documentation.",
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
