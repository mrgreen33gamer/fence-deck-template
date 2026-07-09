import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = `${BASE_URL}/services/deck-building`;

export const metadata: Metadata = {
  title: "Deck Building in Waco, TX | TimberLine Fence & Deck",
  description: "Wood and composite decks with solid structure, code-compliant rails, and finishes built for Central Texas living.",
  keywords: ["deck builder Waco TX","composite deck installation Waco","wood deck Central Texas","custom deck Killeen TX","TimberLine Fence & Deck"],
  alternates: { canonical: url },
  openGraph: {
    title: "Deck Building in Waco, TX | TimberLine Fence & Deck",
    description: "Wood and composite decks with solid structure, code-compliant rails, and finishes built for Central Texas living.",
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: "Deck Building in Waco, TX – TimberLine Fence & Deck" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck Building in Waco, TX | TimberLine Fence & Deck",
    description: "Wood and composite decks with solid structure, code-compliant rails, and finishes built for Central Texas living.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Deck Building",
  description: "Wood and composite decks with solid structure, code-compliant rails, and finishes built for Central Texas living.",
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
  serviceType: "Deck Building",
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
