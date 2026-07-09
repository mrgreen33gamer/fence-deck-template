// TimberLine Fence & Deck — Deck Building
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

const SLUG = "deck-building";

export default function ServicePage() {
  const expectations = [
    { icon: faSearch, title: "Design Conversation", description: "Size, levels, cover options, and rail style mapped to how you actually use the yard." },
    { icon: faSearch, title: "Structure First", description: "Footings, framing, and ledger details done right — the surface only looks good if the bones are solid." },
    { icon: faSearch, title: "Material Choice", description: "Wood vs. composite cost, feel, and maintenance explained clearly." },
    { icon: faSearch, title: "Finished Walkthrough", description: "Stairs, rails, and fasteners checked; site cleaned; warranty issued." },
  ];

  const whyFeatures = [
    { icon: faShieldHalved, title: "Built to Code", description: "Rails, stairs, and spans that meet local requirements — not guesswork." },
    { icon: faShieldHalved, title: "Weather-Ready Structure", description: "Framing details that handle Texas heat cycles and sudden storms." },
    { icon: faShieldHalved, title: "Finish Options", description: "Hidden fasteners, fascia, and lighting prep when the design calls for it." },
  ];

  const processSteps = [
    { number: 1, title: "Consult", description: "Free on-site design and measurement visit.", icon: faHeadset },
    { number: 2, title: "Quote", description: "Itemized flat-rate proposal for structure and finish.", icon: faSearch },
    { number: 3, title: "Build", description: "Footings through decking on a clear schedule.", icon: faFileContract },
    { number: 4, title: "Handoff", description: "Walkthrough, care tips, 3-year workmanship warranty.", icon: faCheckCircle },
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
    { question: "How much does a new deck cost in Waco?", answer: "Depends on size, height, material, and features like covers or multi-level designs. Free on-site quotes give you a firm number." },
    { question: "Wood or composite decking?", answer: "Wood costs less up front and needs sealing; composite costs more and needs less ongoing care. We'll price both when helpful." },
    { question: "Do you build covered decks?", answer: "Yes — covered and multi-level decks are within our deck-building scope." },
    { question: "How long does a deck build take?", answer: "Many residential decks finish in one to two weeks once materials are on site, depending on complexity and weather." },
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
        { label: "Deck Building" },
      ]} />

      <SectionIntro
        title={"Deck Building in Waco, TX"}
        subtitle={"Wood and composite decks with solid structure, code-compliant rails, and finishes built for Central Texas living."}
      />

      <TrustBar headline={"Custom decks engineered for Texas sun, shade, and weekend cookouts"} />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Waco Chooses TimberLine for " + "Deck Building"} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/" + SLUG} title={"Deck Building Across Central Texas"} />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title={"Deck Building FAQs"} />
      </div>

      <CTABanner
        headline={"Ready for custom deck building?"}
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
        <Variant4 title={"Get a Free " + "Deck Building" + " Estimate"} cityName="Waco" slug={SLUG} spot={SLUG + "-page"} formVariant={4} />
      </div>
    </main>
  );
}
