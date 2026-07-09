import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Fence & Deck Services in Waco, TX | TimberLine Fence & Deck",
  description:
    "Wood fencing, vinyl and composite fencing, custom decks, deck repair, gate automation, and commercial fencing in Waco, TX. Flat-rate quotes, free estimates, 3-year workmanship warranty.",
  keywords: [
    "fence services Waco TX",
    "deck builder Waco",
    "wood fencing Central Texas",
    "vinyl fence Waco",
    "gate automation Waco",
    "commercial fencing Temple",
    "TimberLine Fence & Deck services",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Fence & Deck Services in Waco, TX | TimberLine Fence & Deck",
    description:
      "Wood fencing, vinyl/composite, decks, repairs, gates, and commercial installs. Flat-rate quotes and free estimates.",
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "website",
  },
};

const offerCatalog = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Fence & Deck Services",
  itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wood Fencing", url: `${BASE_URL}/services/wood-fencing` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vinyl & Composite Fencing", url: `${BASE_URL}/services/vinyl-composite-fencing` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deck Building", url: `${BASE_URL}/services/deck-building` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deck Repair & Resurfacing", url: `${BASE_URL}/services/deck-repair-resurfacing` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gate Automation", url: `${BASE_URL}/services/gate-automation` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Fencing", url: `${BASE_URL}/services/commercial-fencing` } },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalog) }} />
      {children}
    </>
  );
}
