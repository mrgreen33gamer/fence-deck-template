import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = `${BASE_URL}/services/commercial-fencing`;

export const metadata: Metadata = {
  title: "Commercial Fencing in Waco, TX | TimberLine Fence & Deck",
  description: "Chain-link, privacy, and gated access for commercial lots, builders, and HOA common areas.",
  keywords: ["commercial fencing Waco TX","chain link fence Temple","HOA fence contractor Waco","commercial gate installation Central Texas","TimberLine Fence & Deck"],
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Fencing in Waco, TX | TimberLine Fence & Deck",
    description: "Chain-link, privacy, and gated access for commercial lots, builders, and HOA common areas.",
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: "Commercial Fencing in Waco, TX – TimberLine Fence & Deck" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Fencing in Waco, TX | TimberLine Fence & Deck",
    description: "Chain-link, privacy, and gated access for commercial lots, builders, and HOA common areas.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Fencing",
  description: "Chain-link, privacy, and gated access for commercial lots, builders, and HOA common areas.",
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
  serviceType: "Commercial Fencing",
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
