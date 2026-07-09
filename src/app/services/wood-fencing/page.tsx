// TimberLine Fence & Deck — Wood Fencing
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

const SLUG = "wood-fencing";

export default function ServicePage() {
  const expectations = [
    { icon: faSearch, title: "On-Site Measure", description: "We measure the full line, check pins and grades, and flag gate locations before quoting." },
    { icon: faSearch, title: "Material Options", description: "Cedar, pine, and ranch-style options explained with honest cost vs. lifespan trade-offs." },
    { icon: faSearch, title: "Flat-Rate Quote", description: "Linear feet, gates, and stain options itemized before we dig a single post hole." },
    { icon: faSearch, title: "Clean Install", description: "Plumb posts, tight panels, daily cleanup, and a 3-year workmanship warranty." },
  ];

  const whyFeatures = [
    { icon: faShieldHalved, title: "Posts That Hold", description: "Concrete-set posts and hardware rated for Central Texas clay and wind — not shallow sets that lean after one season." },
    { icon: faShieldHalved, title: "HOA Spec Ready", description: "Height, style, and stain choices matched to community guidelines before install day." },
    { icon: faShieldHalved, title: "Straight Lines", description: "String-line discipline and consistent spacing so the finished fence looks intentional from every angle." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Free on-site estimate scheduled around your availability.", icon: faHeadset },
    { number: 2, title: "Measure & Design", description: "We walk the line, mark gates, and confirm material choices.", icon: faSearch },
    { number: 3, title: "Written Quote", description: "Flat-rate price covering posts, panels, gates, and cleanup.", icon: faFileContract },
    { number: 4, title: "Build & Warranty", description: "Install, clean site, hand over 3-year workmanship warranty.", icon: faCheckCircle },
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
    { question: "How much does a wood privacy fence cost in Waco?", answer: "Pricing depends on linear feet, gates, terrain, and material grade. We measure on site and give a flat-rate written quote before work starts." },
    { question: "How long does a wood fence last in Central Texas?", answer: "With proper post setting and periodic sealing, quality cedar privacy fences commonly deliver many years of service. We discuss maintenance during the estimate." },
    { question: "Do you handle permits or HOA approvals?", answer: "We provide drawings and specs HOAs typically need and coordinate permit requirements when applicable for your city." },
    { question: "Can you match an existing fence style?", answer: "Yes — we routinely match panel style, height, and cap/trim details for partial replacements and extensions." },
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
        { label: "Wood Fencing" },
      ]} />

      <SectionIntro
        title={"Wood Fencing in Waco, TX"}
        subtitle={"Cedar privacy, picket, and ranch-style wood fences with concrete-set posts and a 3-year workmanship warranty."}
      />

      <TrustBar headline={"3,400+ fences & decks installed — wood privacy is our most requested residential build"} />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Waco Chooses TimberLine for " + "Wood Fencing"} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/" + SLUG} title={"Wood Fencing Across Central Texas"} />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title={"Wood Fencing FAQs"} />
      </div>

      <CTABanner
        headline={"Ready for wood fencing?"}
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
        <Variant4 title={"Get a Free " + "Wood Fencing" + " Estimate"} cityName="Waco" slug={SLUG} spot={SLUG + "-page"} formVariant={4} />
      </div>
    </main>
  );
}
