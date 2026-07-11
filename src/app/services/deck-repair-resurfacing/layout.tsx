import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = `${BASE_URL}/services/deck-repair-resurfacing`;

export const metadata: Metadata = {
  title: "Deck Repair & Resurfacing in Waco, TX | TimberLine Fence & Deck",
  description: "Board replacement, joist repair, and full resurfacing for decks worth saving — without a full tear-down.",
  keywords: ["deck repair Waco TX","deck resurfacing Central Texas","replace deck boards Waco","deck railing repair Temple","TimberLine Fence & Deck"],
  alternates: { canonical: url },
  openGraph: {
    title: "Deck Repair & Resurfacing in Waco, TX | TimberLine Fence & Deck",
    description: "Board replacement, joist repair, and full resurfacing for decks worth saving — without a full tear-down.",
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, alt: "Deck Repair & Resurfacing in Waco, TX – TimberLine Fence & Deck" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck Repair & Resurfacing in Waco, TX | TimberLine Fence & Deck",
    description: "Board replacement, joist repair, and full resurfacing for decks worth saving — without a full tear-down.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Deck Repair & Resurfacing",
  description: "Board replacement, joist repair, and full resurfacing for decks worth saving — without a full tear-down.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "TimberLine Fence & Deck",
    url: BASE_URL,
    telephone: "+12547536400",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3501 S Valley Mills Dr",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76711",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco" },
    { "@type": "City", name: "Temple" },
    { "@type": "City", name: "Killeen" },
    { "@type": "City", name: "Hewitt" },
    { "@type": "City", name: "Woodway" },
    { "@type": "City", name: "McGregor" },
    { "@type": "City", name: "China Spring" },
    { "@type": "City", name: "Bellmead" },
  ],
  serviceType: "Deck Repair & Resurfacing",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
