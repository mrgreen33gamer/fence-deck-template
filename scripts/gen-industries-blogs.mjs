import fs from "fs";
import path from "path";

const root = path.resolve("D:/Scott-Apps-Scott-Applications/web-templates/fence-deck-template");

// ── Industries ──────────────────────────────────────────────────────────────
const industries = [
  {
    slug: "residential-builders",
    label: "Residential Builders",
    title: "Fence & Deck Partner for Residential Builders",
    subtitle: "Schedule-driven fencing and decks for new homes and remodels — specs, punch lists, and one reliable trade partner.",
    pains: [
      ["Fence trades slow the closing timeline", "Late fence installs push CO dates and create buyer frustration before move-in."],
      ["Inconsistent quality across lots", "Different crews and materials make neighborhoods look uneven at inspection."],
      ["Change-order noise on every phase", "Vague bids turn into mid-job surprises that burn GC time."],
      ["No single point of contact", "Superintendents waste hours chasing status on multiple fence vendors."],
      ["HOA and municipal rework", "Wrong heights or materials fail inspection and force expensive rework."],
      ["Jobsite mess left behind", "Debris and cutoffs create punch-list items and neighbor complaints."],
    ],
    why: [
      ["Builder-Ready Scheduling", "We stage materials and crews to hit your phase dates — not a vague 'sometime next week'."],
      ["Consistent Specs Across Lots", "Matched materials and install standards so the subdivision reads as intentional."],
      ["One Contact for Punch Lists", "A single TimberLine lead for supers, owners, and walkthrough notes."],
    ],
    process: [
      ["Scope Review", "Plans, lot list, and material specs aligned with your schedule."],
      ["Bid & Calendar", "Written bid with phase windows that match your critical path."],
      ["Install Phases", "Lot-by-lot or block-by-block installs with clean staging."],
      ["Punch & Close", "Quick response on punch items and final documentation."],
    ],
    faq: [
      ["Do you work as a subcontractor for general contractors?", "Yes — residential builders and GCs are a core client type for fence and deck packages."],
      ["Can you match builder material specs?", "Yes — we install to agreed specs and HOA guidelines for the community."],
      ["How do you handle multi-lot schedules?", "We plan phases around your framing/finish timeline and communicate status clearly."],
      ["Do you install decks on new homes too?", "Yes — decks and fencing can be packaged together when the schedule allows."],
    ],
  },
  {
    slug: "property-management",
    label: "Property Management",
    title: "Fence Repair & Replacement for Property Managers",
    subtitle: "Portfolio fencing repair, storm response, and replacement with documented visits and one invoice contact.",
    pains: [
      ["Tenant fence tickets pile up", "Leaning panels and broken gates generate complaints faster than vendors respond."],
      ["No photo documentation", "Ownership asks for proof of work and managers have nothing to show."],
      ["Inconsistent vendors per property", "Quality and pricing vary wildly across the portfolio."],
      ["Storm damage response is slow", "Downed fences sit for days creating liability and vacancy risk."],
      ["Budgets get blown by change orders", "Hourly fence vendors turn simple repairs into open-ended bills."],
      ["Gates never stay adjusted", "Access issues create after-hours calls and resident frustration."],
    ],
    why: [
      ["Portfolio-Friendly Billing", "Clear quotes and consolidated invoicing options across properties."],
      ["Documented Completions", "Photo notes when you need records for ownership or insurance."],
      ["Repair-First Mindset", "We fix what should be fixed and recommend replacement only when it saves money long-term."],
    ],
    process: [
      ["Ticket Review", "Scope the repair list or multi-unit need with your team."],
      ["Flat Quotes", "Written pricing before work — no open-ended hourly surprises."],
      ["Scheduled Work", "Access windows coordinated with managers and tenants."],
      ["Closeout", "Completion notes and photos when required."],
    ],
    faq: [
      ["Do you handle multi-property portfolios?", "Yes — we regularly work with managers across Central Texas properties."],
      ["Can you prioritize storm damage?", "We prioritize unsafe sections and access issues first and give honest timelines."],
      ["Do you repair and replace?", "Both — targeted repairs when structure allows, full replacement when it's the better value."],
      ["Commercial and multifamily sites?", "Yes — commercial fencing and multifamily common-area work are in scope."],
    ],
  },
  {
    slug: "hoa-communities",
    label: "HOA Communities",
    title: "HOA Fence & Common-Area Installs",
    subtitle: "HOA-approved materials, phased entrance and common-area fencing, and board-ready documentation.",
    pains: [
      ["Entrance fences look mismatched", "Piecemeal repairs make the community entrance look neglected."],
      ["Board approval stalls projects", "Without clear options and samples, committees delay decisions for months."],
      ["Homeowner fence complaints", "Inconsistent rear-yard standards create neighbor disputes."],
      ["Vendor no-shows after storms", "Common-area sections stay down while liability concerns rise."],
      ["No phase plan for large scopes", "Big projects disrupt access without a clear communication plan."],
      ["Wrong materials fail guidelines", "Unapproved heights or styles force expensive tear-outs."],
    ],
    why: [
      ["HOA Spec Fluency", "We present material and height options that match community guidelines."],
      ["Phased Common-Area Work", "Entrances and long runs completed in phases that keep access open."],
      ["Board-Ready Documentation", "Photos and phase notes for meetings and homeowner updates."],
    ],
    process: [
      ["Guidelines Review", "CC&Rs / architectural guidelines and site walk."],
      ["Options Package", "Material samples, pricing, and phase plan for the board."],
      ["Approved Install", "Work proceeds to the approved scope and colors."],
      ["Phase Closeout", "Documentation delivered for board records."],
    ],
    faq: [
      ["Do you present options to HOA boards?", "Yes — clear material options, pricing, and phase plans boards can act on."],
      ["Can you phase entrance fence replacements?", "Yes — phased installs keep community access open and spending predictable."],
      ["Homeowner fence installations too?", "Yes — individual homeowners inside HOAs are a major share of our residential work."],
      ["What materials do HOAs usually approve?", "Cedar privacy, certain vinyl systems, and specific stain colors are common — we verify per community."],
    ],
  },
];

for (const ind of industries) {
  const dir = path.join(root, "src/app/industries", ind.slug);
  fs.mkdirSync(dir, { recursive: true });

  const page = `"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";

import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faClipboardList, faCalendarAlt, faFileContract, faUserTie,
  faCloudRain, faSearch, faTrophy, faChartLine, faClock,
  faTree, faBorderAll, faHammer, faBuilding, faHardHat,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustryPage() {
  const painPoints = [
${ind.pains.map(([p, c], i) => `    { icon: faClipboardList, problem: ${JSON.stringify(p)}, consequence: ${JSON.stringify(c)} },`).join("\n")}
  ];

  const whyFeatures = [
${ind.why.map(([t, d]) => `    { icon: faFileContract, title: ${JSON.stringify(t)}, description: ${JSON.stringify(d)} },`).join("\n")}
  ];

  const processSteps = [
${ind.process.map((p, i) => `    { number: ${i + 1}, title: ${JSON.stringify(p[0])}, description: ${JSON.stringify(p[1])}, icon: faSearch },`).join("\n")}
  ];

  const metrics = [
    { icon: faTrophy, value: 3400, label: "Fences & decks installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 97, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 12, label: "Years serving Central Texas", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Industry-specific project approach", us: "✅ Built for your role", others: "❌ Generic residential only" },
    { feature: "Flat-rate written bids", us: "✅ Always", others: "❌ Hourly surprises" },
    { feature: "Documented completions", us: "✅ Available", others: "❌ Rare" },
    { feature: "HOA / builder fluency", us: "✅ Daily work", others: "❌ Occasional" },
    { feature: "3-year workmanship warranty", us: "✅ Every install", others: "❌ Limited" },
  ];

  const faq = [
${ind.faq.map(([q, a]) => `    { question: ${JSON.stringify(q)}, answer: ${JSON.stringify(a)} },`).join("\n")}
  ];

  const localAreas = [
    { town: "Waco", benefit: "HQ — strongest crew availability for industry projects.", badge: "Home Base" },
    { town: "Temple", benefit: "Builder and commercial coverage in Bell County.", badge: "" },
    { town: "Killeen", benefit: "Multifamily and residential builder support.", badge: "" },
    { town: "Hewitt", benefit: "HOA and residential property work.", badge: "" },
    { town: "Woodway", benefit: "HOA-heavy neighborhoods and custom homes.", badge: "" },
    { town: "Bellmead", benefit: "Property management and commercial lots.", badge: "" },
  ];

  const services = [
    { icon: faTree, title: "Wood Fencing", body: "Privacy and ranch-style wood systems.", link: "/services/wood-fencing" },
    { icon: faBorderAll, title: "Vinyl & Composite", body: "Low-maintenance privacy fencing.", link: "/services/vinyl-composite-fencing" },
    { icon: faHammer, title: "Deck Building", body: "Custom decks for new builds and remodels.", link: "/services/deck-building" },
    { icon: faBuilding, title: "Commercial Fencing", body: "Lots, HOAs, and commercial perimeters.", link: "/services/commercial-fencing" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: ${JSON.stringify(ind.label)} },
      ]} />

      <SectionIntro title={${JSON.stringify(ind.title)}} subtitle={${JSON.stringify(ind.subtitle)}} />
      <TrustBar headline="TimberLine partners with builders, managers, and HOAs across Central Texas" />

      <div className={styles.section}>
        <IndustryPainPoints painPoints={painPoints} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why " + ${JSON.stringify(ind.label)} + " Choose TimberLine"} />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <ServiceCardComponent cards={services} heading="Services We Deliver" />
      </div>
      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title={${JSON.stringify(ind.label + " FAQs")}} />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} title="Central Texas Coverage" />
      </div>
      <CTABanner
        headline={${JSON.stringify("Let's talk about your " + ind.label.toLowerCase() + " project")}}
        subline="Free consultation. Flat-rate bids. 3-year workmanship warranty."
        primaryText="Call (254) 753-6400"
        primaryLink="tel:+12547536400"
        secondaryText="Request Estimate"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title="Request a Project Consultation" cityName="Waco" slug={${JSON.stringify(ind.slug)}} spot={${JSON.stringify(ind.slug + "-page")}} formVariant={4} />
      </div>
    </main>
  );
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), page);

  const layout = `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = \`\${BASE_URL}/industries/${ind.slug}\`;

export const metadata: Metadata = {
  title: "${ind.label} | TimberLine Fence & Deck",
  description: ${JSON.stringify(ind.subtitle)},
  alternates: { canonical: url },
  openGraph: {
    title: "${ind.label} | TimberLine Fence & Deck",
    description: ${JSON.stringify(ind.subtitle)},
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;
  fs.writeFileSync(path.join(dir, "layout.tsx"), layout);
  console.log("industry", ind.slug);
}

// ── Blogs ───────────────────────────────────────────────────────────────────
const blogs = [
  {
    slug: "signs-your-fence-needs-repair-or-replacement-waco-tx",
    title: "5 Signs Your Fence Needs Repair or Replacement (Waco, TX)",
    category: "Fence Care",
    date: "April 18, 2026",
    readTime: 7,
    image: "/pages/blogs/fence-repair-signs.svg",
    imageAlt: "Signs your fence needs repair or replacement in Waco, TX",
    intro: "Leaning posts, soft wood, and failing gates rarely fix themselves. Here are the five signs Central Texas homeowners should watch for before a small repair becomes a full rebuild.",
    cards: [
      ["Leaning or Wobbly Posts", "Posts that move when you push the fence usually mean the set failed or wood is rotting at the ground line."],
      ["Soft or Splintered Boards", "Texas UV and moisture create soft spots that fail safety and privacy long before the whole line looks 'done'."],
      ["Gates That Won't Latch", "Sagging gates are often a post or hinge problem — fixing early is cheaper than replacing the opening later."],
      ["Soil Heave Gaps at the Bottom", "Clay soils shift. Growing gaps invite pets out and pests in; panel adjustments or rebuilds may be needed."],
      ["Storm Damage Beyond a Few Pickets", "If multiple bays are twisted or posts are snapped, a sectional rebuild is usually the lasting fix."],
    ],
    callout: "Caught early, many issues are sectional repairs. Waiting through another Central Texas storm season often means a longer line and a bigger bill.",
    related: [
      ["/services/wood-fencing", "Wood Fencing"],
      ["/services/deck-repair-resurfacing", "Deck Repair & Resurfacing"],
    ],
    ctaTitle: "See Any of These Signs?",
    ctaBody: "Get a free on-site fence assessment from TimberLine Fence & Deck.",
  },
  {
    slug: "how-often-should-you-reseal-your-deck-texas",
    title: "How Often Should You Reseal Your Deck in Central Texas?",
    category: "Deck Care",
    date: "April 14, 2026",
    readTime: 6,
    image: "/pages/blogs/deck-reseal-timing.svg",
    imageAlt: "Deck resealing schedule guide for Central Texas homes",
    intro: "Texas sun and sudden storms chew through deck finishes. Here's a practical reseal schedule for wood decks around Waco — and what happens if you wait too long.",
    cards: [
      ["Full-Sun Decks: Often Every 12–18 Months", "South- and west-facing decks fade and dry out fastest; water-bead tests fail sooner."],
      ["Partial Shade: Often Every 18–36 Months", "Trees help, but leaf debris and moisture still break finishes down."],
      ["Watch for Gray Fibers and Splinters", "When the surface feels fuzzy or splinters appear, the finish is no longer protecting the wood."],
      ["Don't Seal Over Soft Boards", "Resealing won't fix rot. Soft spots need board or joist repair first."],
      ["Composite Still Needs Care", "Composite skips stain cycles but still benefits from cleaning and fastener checks."],
    ],
    callout: "If water no longer beads and the wood looks uniformly gray, you're overdue. A timely reseal costs less than a resurfacing project.",
    related: [
      ["/services/deck-repair-resurfacing", "Deck Repair & Resurfacing"],
      ["/services/deck-building", "Deck Building"],
    ],
    ctaTitle: "Deck Looking Tired?",
    ctaBody: "Book a free deck inspection — repair, reseal guidance, or resurfacing options.",
  },
  {
    slug: "wood-vs-vinyl-fencing-central-texas",
    title: "Wood vs. Vinyl Fencing: What Makes Sense for Central Texas?",
    category: "Materials",
    date: "April 10, 2026",
    readTime: 8,
    image: "/pages/blogs/wood-vs-vinyl.svg",
    imageAlt: "Wood vs vinyl fencing comparison for Central Texas",
    intro: "Privacy, price, HOA rules, and heat all factor into the choice. Here's an honest comparison of wood and vinyl fencing for Waco-area properties.",
    cards: [
      ["Upfront Cost", "Wood usually costs less to install; vinyl packages cost more but avoid annual stain labor."],
      ["Maintenance", "Wood needs sealing/staining cycles. Vinyl needs occasional washing — no reseal schedule."],
      ["Look & Customization", "Wood offers classic warmth and easy style matching. Vinyl offers clean, consistent lines."],
      ["HOA Acceptance", "Both can pass — but approved colors and heights vary. Confirm before you order materials."],
      ["Heat & Wind", "Both work in Texas when posts and hardware are installed correctly. Cheap installs fail first, not the material category."],
    ],
    callout: "There's no universal winner. The right fence is the one that matches your budget, maintenance tolerance, and HOA rules — installed correctly.",
    related: [
      ["/services/wood-fencing", "Wood Fencing"],
      ["/services/vinyl-composite-fencing", "Vinyl & Composite Fencing"],
    ],
    ctaTitle: "Still Deciding Between Wood and Vinyl?",
    ctaBody: "We'll walk your property and price both options with a free on-site estimate.",
  },
];

for (const b of blogs) {
  const dir = path.join(root, "src/app/blogs", b.slug);
  fs.mkdirSync(dir, { recursive: true });

  const page = `'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import RelatedLinks from '#/BlogComponents/RelatedLinks/RelatedLinks';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faTriangleExclamation, faHammer, faShieldHalved, faSun, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: ${JSON.stringify(b.intro)},
  },
  {
    type: 'cards',
    heading: ${JSON.stringify(b.title.replace(/ \(Waco, TX\)/, "").replace(/\?$/, ""))},
    cards: [
${b.cards.map((c, i) => `      { icon: ${["faTriangleExclamation","faHammer","faShieldHalved","faSun","faRulerCombined"][i % 5]}, title: ${JSON.stringify(c[0])}, body: ${JSON.stringify(c[1])} },`).join("\n")}
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: ${JSON.stringify(b.callout)},
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title={${JSON.stringify(b.title)}}
        description={${JSON.stringify(b.intro)}}
        imageSrc={${JSON.stringify(b.image)}}
        imageAlt={${JSON.stringify(b.imageAlt)}}
        category={${JSON.stringify(b.category)}}
        date={${JSON.stringify(b.date)}}
        readTime={${b.readTime}}
      />
      <BlogBody sections={sections} />
      <RelatedLinks
        links={[
${b.related.map(([href, text]) => `          { href: ${JSON.stringify(href)}, text: ${JSON.stringify(text)} },`).join("\n")}
        ]}
      />
      <BlogCTA
        title={${JSON.stringify(b.ctaTitle)}}
        body={${JSON.stringify(b.ctaBody)}}
        buttonText="Get Free Estimate"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot={${JSON.stringify(b.slug + "-blog")}} />
    </>
  );
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), page);

  const layout = `import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.timberlinefencedeck.com";
const url = \`\${BASE_URL}/blogs/${b.slug}\`;

export const metadata: Metadata = {
  title: ${JSON.stringify(b.title + " | TimberLine Fence & Deck")},
  description: ${JSON.stringify(b.intro)},
  alternates: { canonical: url },
  openGraph: {
    title: ${JSON.stringify(b.title)},
    description: ${JSON.stringify(b.intro)},
    url,
    siteName: "TimberLine Fence & Deck",
    locale: "en_US",
    type: "article",
    images: [{ url: \`\${BASE_URL}${b.image}\`, alt: ${JSON.stringify(b.imageAlt)} }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;
  fs.writeFileSync(path.join(dir, "layout.tsx"), layout);
  console.log("blog", b.slug);
}

// Blog SVG placeholders
const svgDir = path.join(root, "public/pages/blogs");
fs.mkdirSync(svgDir, { recursive: true });
function svg(label) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0c1a12"/>
      <stop offset="100%" stop-color="#14532d"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="60" y="60" width="1080" height="510" rx="24" fill="none" stroke="#22c55e" stroke-width="3" opacity="0.5"/>
  <text x="600" y="300" text-anchor="middle" font-family="Arial, sans-serif" font-size="42" fill="#f6faf7" font-weight="700">${label}</text>
  <text x="600" y="360" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#22c55e">TimberLine Fence &amp; Deck · Placeholder</text>
</svg>`;
}
fs.writeFileSync(path.join(svgDir, "fence-repair-signs.svg"), svg("Fence Repair Signs"));
fs.writeFileSync(path.join(svgDir, "deck-reseal-timing.svg"), svg("Deck Reseal Timing"));
fs.writeFileSync(path.join(svgDir, "wood-vs-vinyl.svg"), svg("Wood vs Vinyl Fencing"));
console.log("blog svgs written");
console.log("done");
