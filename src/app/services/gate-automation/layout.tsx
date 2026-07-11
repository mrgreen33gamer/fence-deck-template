import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = `${BASE_URL}/services/gate-automation`;

export const metadata: Metadata = {
  title: "Gate Automation in Waco, TX | TimberLine Fence & Deck",
  description: "Driveway and entry gates with openers, keypads, remotes, and app access for homes and properties.",
  keywords: ["automatic gate Waco TX","driveway gate opener Central Texas","gate automation Killeen","electric gate install Waco","TimberLine Fence & Deck"],
  alternates: { canonical: url },
  openGraph: {
    title: "Gate Automation in Waco, TX | TimberLine Fence & Deck",
    description: "Driveway and entry gates with openers, keypads, remotes, and app access for homes and properties.",
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, alt: "Gate Automation in Waco, TX – TimberLine Fence & Deck" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gate Automation in Waco, TX | TimberLine Fence & Deck",
    description: "Driveway and entry gates with openers, keypads, remotes, and app access for homes and properties.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gate Automation",
  description: "Driveway and entry gates with openers, keypads, remotes, and app access for homes and properties.",
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
  serviceType: "Gate Automation",
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
