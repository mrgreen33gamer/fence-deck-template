import fs from "fs";
import path from "path";

const root = path.resolve("D:/Scott-Apps-Scott-Applications/web-templates/fence-deck-template");

const services = [
  {
    slug: "wood-fencing",
    title: "Wood Fencing",
    short: "wood fencing",
    heroSub: "Cedar privacy, picket, and ranch-style wood fences with concrete-set posts and a 3-year workmanship warranty.",
    trust: "3,400+ fences & decks installed — wood privacy is our most requested residential build",
    expect: [
      ["On-Site Measure", "We measure the full line, check pins and grades, and flag gate locations before quoting."],
      ["Material Options", "Cedar, pine, and ranch-style options explained with honest cost vs. lifespan trade-offs."],
      ["Flat-Rate Quote", "Linear feet, gates, and stain options itemized before we dig a single post hole."],
      ["Clean Install", "Plumb posts, tight panels, daily cleanup, and a 3-year workmanship warranty."],
    ],
    why: [
      ["Posts That Hold", "Concrete-set posts and hardware rated for Central Texas clay and wind — not shallow sets that lean after one season."],
      ["HOA Spec Ready", "Height, style, and stain choices matched to community guidelines before install day."],
      ["Straight Lines", "String-line discipline and consistent spacing so the finished fence looks intentional from every angle."],
    ],
    process: [
      ["Call or Book", "Free on-site estimate scheduled around your availability."],
      ["Measure & Design", "We walk the line, mark gates, and confirm material choices."],
      ["Written Quote", "Flat-rate price covering posts, panels, gates, and cleanup."],
      ["Build & Warranty", "Install, clean site, hand over 3-year workmanship warranty."],
    ],
    faq: [
      ["How much does a wood privacy fence cost in Waco?", "Pricing depends on linear feet, gates, terrain, and material grade. We measure on site and give a flat-rate written quote before work starts."],
      ["How long does a wood fence last in Central Texas?", "With proper post setting and periodic sealing, quality cedar privacy fences commonly deliver many years of service. We discuss maintenance during the estimate."],
      ["Do you handle permits or HOA approvals?", "We provide drawings and specs HOAs typically need and coordinate permit requirements when applicable for your city."],
      ["Can you match an existing fence style?", "Yes — we routinely match panel style, height, and cap/trim details for partial replacements and extensions."],
    ],
    keywords: ["wood fencing Waco TX", "cedar privacy fence Waco", "wood fence installation Central Texas", "privacy fence Hewitt TX"],
  },
  {
    slug: "vinyl-composite-fencing",
    title: "Vinyl & Composite Fencing",
    short: "vinyl and composite fencing",
    heroSub: "Low-maintenance vinyl and composite privacy systems that stay straight without annual staining.",
    trust: "Low-maintenance privacy systems installed across Waco, Temple, and Killeen neighborhoods",
    expect: [
      ["Style Walkthrough", "We show privacy, semi-privacy, and accent options that fit HOA color rules."],
      ["Site Assessment", "Grade, gates, and wind exposure checked so the system is engineered for your lot."],
      ["Fixed Quote", "Material package and labor in one written price — no mid-job surprises."],
      ["Precision Install", "Reinforced posts, square gates, and clean trim that stays true in Texas heat."],
    ],
    why: [
      ["No Reseal Cycle", "Vinyl and composite skip the annual stain and seal work that wood requires."],
      ["Color-Stable Options", "Systems selected for UV resistance in Central Texas sun."],
      ["Gate Hardware That Lasts", "Latches and hinges chosen to stay square through heat and humidity swings."],
    ],
    process: [
      ["Free Estimate", "On-site measure and material recommendation."],
      ["HOA Check", "Confirm height and color against community guidelines."],
      ["Order & Schedule", "Materials ordered; clear install window set."],
      ["Install & Walkthrough", "Completed line, gate demo, and warranty packet."],
    ],
    faq: [
      ["Is vinyl better than wood for privacy fences?", "Vinyl wins on maintenance; wood wins on classic look and often on upfront cost. We help you choose based on budget and how long you plan to stay."],
      ["Does vinyl crack in Texas heat?", "Quality systems with proper expansion gaps and reinforced posts hold up well. Cheap installs fail — we don't cut those corners."],
      ["Can vinyl fencing meet HOA rules?", "Often yes — many HOAs approve specific white or tan vinyl products. We verify before ordering materials."],
      ["How long does install take?", "Most residential vinyl privacy jobs finish in a few days once materials arrive, weather permitting."],
    ],
    keywords: ["vinyl fence Waco TX", "composite fencing Central Texas", "low maintenance fence Waco", "vinyl privacy fence Temple"],
  },
  {
    slug: "deck-building",
    title: "Deck Building",
    short: "custom deck building",
    heroSub: "Wood and composite decks with solid structure, code-compliant rails, and finishes built for Central Texas living.",
    trust: "Custom decks engineered for Texas sun, shade, and weekend cookouts",
    expect: [
      ["Design Conversation", "Size, levels, cover options, and rail style mapped to how you actually use the yard."],
      ["Structure First", "Footings, framing, and ledger details done right — the surface only looks good if the bones are solid."],
      ["Material Choice", "Wood vs. composite cost, feel, and maintenance explained clearly."],
      ["Finished Walkthrough", "Stairs, rails, and fasteners checked; site cleaned; warranty issued."],
    ],
    why: [
      ["Built to Code", "Rails, stairs, and spans that meet local requirements — not guesswork."],
      ["Weather-Ready Structure", "Framing details that handle Texas heat cycles and sudden storms."],
      ["Finish Options", "Hidden fasteners, fascia, and lighting prep when the design calls for it."],
    ],
    process: [
      ["Consult", "Free on-site design and measurement visit."],
      ["Quote", "Itemized flat-rate proposal for structure and finish."],
      ["Build", "Footings through decking on a clear schedule."],
      ["Handoff", "Walkthrough, care tips, 3-year workmanship warranty."],
    ],
    faq: [
      ["How much does a new deck cost in Waco?", "Depends on size, height, material, and features like covers or multi-level designs. Free on-site quotes give you a firm number."],
      ["Wood or composite decking?", "Wood costs less up front and needs sealing; composite costs more and needs less ongoing care. We'll price both when helpful."],
      ["Do you build covered decks?", "Yes — covered and multi-level decks are within our deck-building scope."],
      ["How long does a deck build take?", "Many residential decks finish in one to two weeks once materials are on site, depending on complexity and weather."],
    ],
    keywords: ["deck builder Waco TX", "composite deck installation Waco", "wood deck Central Texas", "custom deck Killeen TX"],
  },
  {
    slug: "deck-repair-resurfacing",
    title: "Deck Repair & Resurfacing",
    short: "deck repair and resurfacing",
    heroSub: "Board replacement, joist repair, and full resurfacing for decks worth saving — without a full tear-down.",
    trust: "Restore solid structure before you spend on a full rebuild",
    expect: [
      ["Structural Check", "We inspect joists, posts, ledger, and rails before recommending repair vs. replace."],
      ["Honest Options", "Clear price for targeted repairs and for full resurfacing so you can decide."],
      ["Quality Materials", "Boards, fasteners, and stain systems rated for Texas UV."],
      ["Clean Finish", "Safe walking surface, solid rails, debris hauled off."],
    ],
    why: [
      ["Save What Works", "If the structure is sound, resurfacing often costs far less than a full rebuild."],
      ["Safety First", "Soft boards, loose rails, and weak stairs get fixed — not painted over."],
      ["Warranty Backed", "Repair workmanship covered under our 3-year warranty terms."],
    ],
    process: [
      ["Inspect", "On-site structural and surface evaluation."],
      ["Quote", "Repair-only and resurface options priced clearly."],
      ["Repair", "Joists, boards, rails as approved."],
      ["Protect", "Stain/seal or composite surface; final walkthrough."],
    ],
    faq: [
      ["Can my old deck be saved?", "Often yes if posts and joists are sound. We tell you straight if a rebuild is the safer value."],
      ["How often should I reseal a wood deck in Texas?", "Many Central Texas decks need attention every 1–3 years depending on sun exposure and product. See our deck care blog for a practical schedule."],
      ["Do you fix stairs and railings only?", "Yes — targeted repairs are available when a full resurface isn't needed."],
      ["How long does resurfacing take?", "Many residential resurfaces finish within a week depending on dry time and scope."],
    ],
    keywords: ["deck repair Waco TX", "deck resurfacing Central Texas", "replace deck boards Waco", "deck railing repair Temple"],
  },
  {
    slug: "gate-automation",
    title: "Gate Automation",
    short: "gate automation",
    heroSub: "Driveway and entry gates with openers, keypads, remotes, and app access for homes and properties.",
    trust: "Automated gates installed with safety edges, battery backup, and clean operator setups",
    expect: [
      ["Access Plan", "Swing vs. slide, power location, and entry method mapped to your driveway."],
      ["Structural Check", "Posts and gate leaves sized for the operator — weak posts fail first."],
      ["Smart Access", "Keypad, remote, and phone app options configured clearly."],
      ["Safety First", "Photo eyes, edges, and backup power where the design requires them."],
    ],
    why: [
      ["Right-Sized Operators", "Hardware matched to gate weight and wind load — not the cheapest box."],
      ["Clean Install", "Conduit, pads, and wiring done neatly for long-term serviceability."],
      ["Local Service", "Waco-based team for setup, training, and follow-up."],
    ],
    process: [
      ["Site Visit", "Driveway measure and power assessment."],
      ["Proposal", "Gate style, operator, and access package quoted."],
      ["Install", "Posts, leaves, operator, and safety devices."],
      ["Training", "You learn remotes, codes, and manual release."],
    ],
    faq: [
      ["Can you automate an existing gate?", "Often yes if the structure and posts can handle the operator. We evaluate during the free estimate."],
      ["What if the power goes out?", "Battery backup options keep many systems operational during short outages."],
      ["Do you install keypads and phone apps?", "Yes — keypad, remote, and app access are common packages."],
      ["Residential and commercial gates?", "Both — from single home driveways to commercial entry points."],
    ],
    keywords: ["automatic gate Waco TX", "driveway gate opener Central Texas", "gate automation Killeen", "electric gate install Waco"],
  },
  {
    slug: "commercial-fencing",
    title: "Commercial Fencing",
    short: "commercial fencing",
    heroSub: "Chain-link, privacy, and gated access for commercial lots, builders, and HOA common areas.",
    trust: "Commercial and HOA fencing with documented phases and permit-aware installs",
    expect: [
      ["Scope Alignment", "Security goals, aesthetics, and budget balanced for the property type."],
      ["Phased Plans", "Work scheduled around tenant access, board meetings, or construction phases."],
      ["Written Bid", "Itemized proposal suitable for owners, managers, and HOA boards."],
      ["Documented Delivery", "Photos and phase completion notes when you need records."],
    ],
    why: [
      ["Jobsite Discipline", "Clean staging, daily cleanup, and schedules that respect operating businesses."],
      ["Mixed Systems", "Chain-link, privacy panels, and gates combined where each section needs different performance."],
      ["One Contact", "A single TimberLine lead for questions from owners, PMs, and superintendents."],
    ],
    process: [
      ["Walkthrough", "Property assessment with decision makers."],
      ["Bid Package", "Specs, options, and timeline in writing."],
      ["Mobilize", "Materials staged; phases communicated."],
      ["Complete", "Punch list, gates tested, documentation delivered."],
    ],
    faq: [
      ["Do you fence commercial lots and storage yards?", "Yes — perimeter security, privacy screening, and commercial gates are core commercial work."],
      ["Can you work with general contractors on new builds?", "Yes — we partner with residential builders and GCs on schedule-driven fencing packages."],
      ["HOA common-area projects?", "Yes — phased entrance and common-area fence work with board-friendly documentation."],
      ["Do you handle permits?", "We coordinate permit requirements when the city or project scope requires them."],
    ],
    keywords: ["commercial fencing Waco TX", "chain link fence Temple", "HOA fence contractor Waco", "commercial gate installation Central Texas"],
  },
];

const processIcons = ["faHeadset", "faSearch", "faFileContract", "faCheckCircle"];

for (const s of services) {
  const dir = path.join(root, "src/app/services", s.slug);
  fs.mkdirSync(dir, { recursive: true });

  const page = `// TimberLine Fence & Deck — ${s.title}
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTree, faBorderAll, faHammer, faBuilding,
  faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const SLUG = "${s.slug}";

export default function ServicePage() {
  const expectations = [
${s.expect.map(([t, d]) => `    { icon: faSearch, title: ${JSON.stringify(t)}, description: ${JSON.stringify(d)} },`).join("\n")}
  ];

  const whyFeatures = [
${s.why.map(([t, d]) => `    { icon: faShieldHalved, title: ${JSON.stringify(t)}, description: ${JSON.stringify(d)} },`).join("\n")}
  ];

  const processSteps = [
${s.process.map((p, i) => `    { number: ${i + 1}, title: ${JSON.stringify(p[0])}, description: ${JSON.stringify(p[1])}, icon: ${processIcons[i]} },`).join("\n")}
  ];

  const metrics = [
    { icon: faTrophy, value: 3400, label: "Fences & decks installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 97, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 12, label: "Years serving Central Texas properties", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Flat-rate quote before work starts", us: "✅ Always written", others: "❌ Verbal only" },
    { feature: "3-year workmanship warranty", us: "✅ Every install", others: "❌ Limited or none" },
    { feature: "HOA-friendly material options", us: "✅ Standard process", others: "❌ Guesswork" },
    { feature: "Licensed & insured crews", us: "✅ Documented", others: "❌ Varies" },
    { feature: "Daily site cleanup", us: "✅ Every job", others: "❌ Often skipped" },
  ];

  const faq = [
${s.faq.map(([q, a]) => `    { question: ${JSON.stringify(q)}, answer: ${JSON.stringify(a)} },`).join("\n")}
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and crew availability.", badge: "Home Base" },
    { town: "Temple", benefit: "Full service coverage across Bell County.", badge: "" },
    { town: "Killeen", benefit: "Military-friendly scheduling near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Regular residential installs and repairs.", badge: "" },
    { town: "Woodway", benefit: "HOA-friendly materials and first-pass specs.", badge: "" },
    { town: "McGregor", benefit: "Rural and residential projects welcome.", badge: "" },
  ];

  const crossServices = [
    { icon: faTree, title: "Wood Fencing", body: "Cedar privacy and ranch-style wood fences.", link: "/services/wood-fencing" },
    { icon: faBorderAll, title: "Vinyl & Composite", body: "Low-maintenance privacy systems.", link: "/services/vinyl-composite-fencing" },
    { icon: faHammer, title: "Deck Building", body: "Custom wood and composite decks.", link: "/services/deck-building" },
    { icon: faBuilding, title: "Commercial Fencing", body: "Lots, HOAs, and commercial perimeters.", link: "/services/commercial-fencing" },
  ].filter(c => !c.link.includes(SLUG));

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: ${JSON.stringify(s.title)} },
      ]} />

      <SectionIntro
        title={${JSON.stringify(s.title + " in Waco, TX")}}
        subtitle={${JSON.stringify(s.heroSub)}}
      />

      <TrustBar headline={${JSON.stringify(s.trust)}} />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Waco Chooses TimberLine for " + ${JSON.stringify(s.title)}} />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/" + SLUG} title={${JSON.stringify(s.title + " Across Central Texas")}} />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title={${JSON.stringify(s.title + " FAQs")}} />
      </div>

      <CTABanner
        headline={${JSON.stringify("Ready for " + s.short + "?")}}
        subline="Free on-site estimate. Flat-rate quote. 3-year workmanship warranty."
        primaryText="Call (254) 753-6400"
        primaryLink="tel:+12547536400"
        secondaryText="Request Estimate"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent cards={crossServices} heading="Related Services" subheading="Pair your project with the rest of TimberLine's fence and deck lineup." />
      </div>

      <div className={styles.section}>
        <Variant4 title={"Get a Free " + ${JSON.stringify(s.title)} + " Estimate"} cityName="Waco" slug={SLUG} spot={SLUG + "-page"} formVariant={4} />
      </div>
    </main>
  );
}
`;

  fs.writeFileSync(path.join(dir, "page.tsx"), page);

  const layout = `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = \`\${BASE_URL}/services/${s.slug}\`;

export const metadata: Metadata = {
  title: "${s.title} in Waco, TX | TimberLine Fence & Deck",
  description: ${JSON.stringify(s.heroSub)},
  keywords: ${JSON.stringify(s.keywords.concat(["TimberLine Fence & Deck"]))},
  alternates: { canonical: url },
  openGraph: {
    title: "${s.title} in Waco, TX | TimberLine Fence & Deck",
    description: ${JSON.stringify(s.heroSub)},
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "website",
    images: [{ url: \`\${BASE_URL}/logos/scott-apps-banner.png\`, alt: "${s.title} in Waco, TX – TimberLine Fence & Deck" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "${s.title} in Waco, TX | TimberLine Fence & Deck",
    description: ${JSON.stringify(s.heroSub)},
    images: [\`\${BASE_URL}/logos/scott-apps-banner.png\`],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "${s.title}",
  description: ${JSON.stringify(s.heroSub)},
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
  serviceType: "${s.title}",
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
`;
  fs.writeFileSync(path.join(dir, "layout.tsx"), layout);
  console.log("Wrote", s.slug);
}

console.log("Done services");
