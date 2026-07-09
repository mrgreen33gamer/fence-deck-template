import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = `${BASE_URL}/services/vinyl-composite-fencing`;

export const metadata: Metadata = {
  title: "Vinyl & Composite Fencing in Waco, TX | TimberLine Fence & Deck",
  description: "Low-maintenance vinyl and composite privacy systems that stay straight without annual staining.",
  keywords: ["vinyl fence Waco TX","composite fencing Central Texas","low maintenance fence Waco","vinyl privacy fence Temple","TimberLine Fence & Deck"],
  alternates: { canonical: url },
  openGraph: {
    title: "Vinyl & Composite Fencing in Waco, TX | TimberLine Fence & Deck",
    description: "Low-maintenance vinyl and composite privacy systems that stay straight without annual staining.",
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/scott-apps-banner.png`, alt: "Vinyl & Composite Fencing in Waco, TX – TimberLine Fence & Deck" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinyl & Composite Fencing in Waco, TX | TimberLine Fence & Deck",
    description: "Low-maintenance vinyl and composite privacy systems that stay straight without annual staining.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vinyl & Composite Fencing",
  description: "Low-maintenance vinyl and composite privacy systems that stay straight without annual staining.",
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
  serviceType: "Vinyl & Composite Fencing",
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
