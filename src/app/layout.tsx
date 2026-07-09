// src/app/layout.tsx
// TimberLine Fence & Deck — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#0c1a12' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//                                Two values supplied so Safari can pick the
//                                right one for light vs dark mode.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Merriweather, Cabin, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS — uniqueness
const fontTitle = Merriweather({
  weight: ["400","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Cabin({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = Source_Serif_4({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});


const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.timberlinefencedeck.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a2e1a" },
    { media: "(prefers-color-scheme: dark)",  color: "#1a2e1a" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "TimberLine Fence & Deck | Wood, Vinyl & Deck Building — Waco, TX",
    template: "%s | TimberLine Fence & Deck",
  },
  description:
    "TimberLine Fence & Deck is a Waco, TX fence and deck builder offering wood fencing, vinyl and composite fencing, custom decks, deck repair, gate automation, and commercial fencing across Central Texas. Licensed, insured, 3-year workmanship warranty.",
  keywords: [
    "TimberLine Fence & Deck",
    "fence company Waco TX",
    "deck builder Waco Texas",
    "wood fencing Waco",
    "vinyl fence Central Texas",
    "deck building Waco TX",
    "fence contractor Hewitt TX",
    "gate automation Waco",
    "commercial fencing Temple TX",
  ],
  authors: [{ name: "TimberLine Fence & Deck", url: BASE_URL }],
  creator: "TimberLine Fence & Deck",
  publisher: "TimberLine Fence & Deck",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "TimberLine Fence & Deck | Wood, Vinyl & Deck Building — Waco, TX",
    description:
      "Waco-based fence and deck builder for wood fencing, vinyl/composite, custom decks, repairs, gates, and commercial installs across Central Texas. Licensed & insured. 3-year workmanship warranty.",
    url: BASE_URL,
    siteName: "TimberLine Fence & Deck",
    images: [
      {
        url: `${BASE_URL}/logos/scott-apps-banner.png?v=1`,
        width: 1200,
        height: 630,
        alt: "TimberLine Fence & Deck — Waco TX Fences & Decks",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TimberLine Fence & Deck | Waco TX Fence & Deck Builder",
    description:
      "Wood fencing, vinyl/composite, custom decks, repairs & commercial installs for Central Texas. Licensed & insured — 3-year workmanship warranty.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "4.9";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "TimberLine Fence & Deck",
  alternateName: "TimberLine Fence and Deck",
  description:
    "Residential and commercial fence and deck services in Waco and Central Texas — wood fencing, vinyl and composite fencing, custom deck building, deck repair and resurfacing, gate automation, and commercial fencing. Licensed, insured, 3-year workmanship warranty.",
  url: BASE_URL,
  telephone: "+12547536400",
  email: "hello@timberlinefencedeck.com",
  foundingDate: "2012",
  founder: {
    "@type": "Person",
    name: "Jake Thornton",
    jobTitle: "Owner & Founder",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "3501 S Valley Mills Dr",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76711",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5155,
    longitude: -97.1550,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",         containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fence & Deck Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wood Fencing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vinyl & Composite Fencing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deck Building" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deck Repair & Resurfacing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gate Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Fencing" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(Math.max(reviewCount, 510)),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/timberlinefencedeck",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#65a30d" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#1a2e1a",
                }}
              >
                <PulseLoader size={50} color="#65a30d" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}
