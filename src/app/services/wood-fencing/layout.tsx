import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = `${BASE_URL}/services/wood-fencing`;

export const metadata: Metadata = {
  title: "Wood Fencing in Waco, TX | TimberLine Fence & Deck",
  description: "Cedar privacy, picket, and ranch-style wood fences with concrete-set posts and a 3-year workmanship warranty.",
  keywords: ["wood fencing Waco TX","cedar privacy fence Waco","wood fence installation Central Texas","privacy fence Hewitt TX","TimberLine Fence & Deck"],
  alternates: { canonical: url },
  openGraph: {
    title: "Wood Fencing in Waco, TX | TimberLine Fence & Deck",
    description: "Cedar privacy, picket, and ranch-style wood fences with concrete-set posts and a 3-year workmanship warranty.",
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: "Wood Fencing in Waco, TX – TimberLine Fence & Deck" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wood Fencing in Waco, TX | TimberLine Fence & Deck",
    description: "Cedar privacy, picket, and ranch-style wood fences with concrete-set posts and a 3-year workmanship warranty.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wood Fencing",
  description: "Cedar privacy, picket, and ranch-style wood fences with concrete-set posts and a 3-year workmanship warranty.",
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
  serviceType: "Wood Fencing",
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
