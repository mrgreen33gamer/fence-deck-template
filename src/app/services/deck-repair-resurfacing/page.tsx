// TimberLine Fence & Deck — Deck Repair & Resurfacing
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

const SLUG = "deck-repair-resurfacing";

export default function ServicePage() {
  const expectations = [
    { icon: faSearch, title: "Structural Check", description: "We inspect joists, posts, ledger, and rails before recommending repair vs. replace." },
    { icon: faSearch, title: "Honest Options", description: "Clear price for targeted repairs and for full resurfacing so you can decide." },
    { icon: faSearch, title: "Quality Materials", description: "Boards, fasteners, and stain systems rated for Texas UV." },
    { icon: faSearch, title: "Clean Finish", description: "Safe walking surface, solid rails, debris hauled off." },
  ];

  const whyFeatures = [
    { icon: faShieldHalved, title: "Save What Works", description: "If the structure is sound, resurfacing often costs far less than a full rebuild." },
    { icon: faShieldHalved, title: "Safety First", description: "Soft boards, loose rails, and weak stairs get fixed — not painted over." },
    { icon: faShieldHalved, title: "Warranty Backed", description: "Repair workmanship covered under our 3-year warranty terms." },
  ];

  const processSteps = [
    { number: 1, title: "Inspect", description: "On-site structural and surface evaluation.", icon: faHeadset },
    { number: 2, title: "Quote", description: "Repair-only and resurface options priced clearly.", icon: faSearch },
    { number: 3, title: "Repair", description: "Joists, boards, rails as approved.", icon: faFileContract },
    { number: 4, title: "Protect", description: "Stain/seal or composite surface; final walkthrough.", icon: faCheckCircle },
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
    { question: "Can my old deck be saved?", answer: "Often yes if posts and joists are sound. We tell you straight if a rebuild is the safer value." },
    { question: "How often should I reseal a wood deck in Texas?", answer: "Many Central Texas decks need attention every 1–3 years depending on sun exposure and product. See our deck care blog for a practical schedule." },
    { question: "Do you fix stairs and railings only?", answer: "Yes — targeted repairs are available when a full resurface isn't needed." },
    { question: "How long does resurfacing take?", answer: "Many residential resurfaces finish within a week depending on dry time and scope." },
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
        { label: "Deck Repair & Resurfacing" },
      ]} />

      <SectionIntro
        title={"Deck Repair & Resurfacing in Waco, TX"}
        subtitle={"Board replacement, joist repair, and full resurfacing for decks worth saving — without a full tear-down."}
      />

      <TrustBar headline={"Restore solid structure before you spend on a full rebuild"} />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Waco Chooses TimberLine for " + "Deck Repair & Resurfacing"} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/" + SLUG} title={"Deck Repair & Resurfacing Across Central Texas"} />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title={"Deck Repair & Resurfacing FAQs"} />
      </div>

      <CTABanner
        headline={"Ready for deck repair and resurfacing?"}
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
        <Variant4 title={"Get a Free " + "Deck Repair & Resurfacing" + " Estimate"} cityName="Waco" slug={SLUG} spot={SLUG + "-page"} formVariant={4} />
      </div>
    </main>
  );
}
