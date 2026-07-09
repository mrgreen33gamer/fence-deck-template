// TimberLine Fence & Deck — Vinyl & Composite Fencing
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

const SLUG = "vinyl-composite-fencing";

export default function ServicePage() {
  const expectations = [
    { icon: faSearch, title: "Style Walkthrough", description: "We show privacy, semi-privacy, and accent options that fit HOA color rules." },
    { icon: faSearch, title: "Site Assessment", description: "Grade, gates, and wind exposure checked so the system is engineered for your lot." },
    { icon: faSearch, title: "Fixed Quote", description: "Material package and labor in one written price — no mid-job surprises." },
    { icon: faSearch, title: "Precision Install", description: "Reinforced posts, square gates, and clean trim that stays true in Texas heat." },
  ];

  const whyFeatures = [
    { icon: faShieldHalved, title: "No Reseal Cycle", description: "Vinyl and composite skip the annual stain and seal work that wood requires." },
    { icon: faShieldHalved, title: "Color-Stable Options", description: "Systems selected for UV resistance in Central Texas sun." },
    { icon: faShieldHalved, title: "Gate Hardware That Lasts", description: "Latches and hinges chosen to stay square through heat and humidity swings." },
  ];

  const processSteps = [
    { number: 1, title: "Free Estimate", description: "On-site measure and material recommendation.", icon: faHeadset },
    { number: 2, title: "HOA Check", description: "Confirm height and color against community guidelines.", icon: faSearch },
    { number: 3, title: "Order & Schedule", description: "Materials ordered; clear install window set.", icon: faFileContract },
    { number: 4, title: "Install & Walkthrough", description: "Completed line, gate demo, and warranty packet.", icon: faCheckCircle },
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
    { question: "Is vinyl better than wood for privacy fences?", answer: "Vinyl wins on maintenance; wood wins on classic look and often on upfront cost. We help you choose based on budget and how long you plan to stay." },
    { question: "Does vinyl crack in Texas heat?", answer: "Quality systems with proper expansion gaps and reinforced posts hold up well. Cheap installs fail — we don't cut those corners." },
    { question: "Can vinyl fencing meet HOA rules?", answer: "Often yes — many HOAs approve specific white or tan vinyl products. We verify before ordering materials." },
    { question: "How long does install take?", answer: "Most residential vinyl privacy jobs finish in a few days once materials arrive, weather permitting." },
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
        { label: "Vinyl & Composite Fencing" },
      ]} />

      <SectionIntro
        title={"Vinyl & Composite Fencing in Waco, TX"}
        subtitle={"Low-maintenance vinyl and composite privacy systems that stay straight without annual staining."}
      />

      <TrustBar headline={"Low-maintenance privacy systems installed across Waco, Temple, and Killeen neighborhoods"} />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Waco Chooses TimberLine for " + "Vinyl & Composite Fencing"} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/" + SLUG} title={"Vinyl & Composite Fencing Across Central Texas"} />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title={"Vinyl & Composite Fencing FAQs"} />
      </div>

      <CTABanner
        headline={"Ready for vinyl and composite fencing?"}
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
        <Variant4 title={"Get a Free " + "Vinyl & Composite Fencing" + " Estimate"} cityName="Waco" slug={SLUG} spot={SLUG + "-page"} formVariant={4} />
      </div>
    </main>
  );
}
