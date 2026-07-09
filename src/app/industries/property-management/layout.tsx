import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = `${BASE_URL}/industries/property-management`;

export const metadata: Metadata = {
  title: "Property Management | TimberLine Fence & Deck",
  description: "Portfolio fencing repair, storm response, and replacement with documented visits and one invoice contact.",
  alternates: { canonical: url },
  openGraph: {
    title: "Property Management | TimberLine Fence & Deck",
    description: "Portfolio fencing repair, storm response, and replacement with documented visits and one invoice contact.",
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
