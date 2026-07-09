// TimberLine Fence & Deck — Services Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faTree, faBorderAll, faHammer, faTools, faDoorOpen, faBuilding,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faShieldHalved, faLock, faRotateLeft, faBolt, faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faTree,      title: "Wood Fencing",              body: "Cedar privacy, picket, and ranch-style wood fences with concrete-set posts.", link: "/services/wood-fencing" },
    { icon: faBorderAll, title: "Vinyl & Composite Fencing", body: "Low-maintenance privacy systems that skip the annual stain cycle.", link: "/services/vinyl-composite-fencing" },
    { icon: faHammer,    title: "Deck Building",             body: "Custom wood and composite decks with solid structure and code-compliant rails.", link: "/services/deck-building" },
    { icon: faTools,     title: "Deck Repair & Resurfacing", body: "Board replacement, joist repair, and resurfacing for decks worth saving.", link: "/services/deck-repair-resurfacing" },
    { icon: faDoorOpen,  title: "Gate Automation",           body: "Driveway and entry gates with openers, keypads, and app access.", link: "/services/gate-automation" },
    { icon: faBuilding,  title: "Commercial Fencing",        body: "Chain-link, privacy, and gated access for commercial lots and HOAs.", link: "/services/commercial-fencing" },
  ];

  const expectations = [
    { icon: faSearch,       title: "Free On-Site Estimate",     description: "We measure, discuss materials, and explain options with a flat-rate price before anything is ordered." },
    { icon: faCheckCircle,  title: "Upfront Flat-Rate Pricing", description: "No hourly billing, no surprise fees. You approve the price before we start — and it holds." },
    { icon: faShieldHalved, title: "Licensed & Insured Crews",  description: "Licensed fence/deck contractor with fully insured crews. Documentation available on request." },
    { icon: faRotateLeft,   title: "3-Year Workmanship Warranty", description: "Every install is backed by our 3-year workmanship warranty." },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3400, label: "Fences & decks installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 97,   label: "Customer satisfaction rating",                   suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,   label: "Years of local fence & deck experience",         suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faBolt,   title: "Clear Schedule, Clean Site", description: "Realistic start dates, daily cleanup, and crews that communicate." },
    { icon: faHeadset, title: "One Local Team",             description: "Design, build, and warranty under one Waco-based company — Jake Thornton ownership since 2012." },
    { icon: faUsers,  title: "HOA & Builder Friendly",      description: "Specs that pass inspection and schedules that work with builders and boards." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Call, text, or book online. Free on-site estimate, usually within a few business days.", icon: faHeadset },
    { number: 2, title: "Measure On-Site", description: "We walk the property, confirm materials, and note HOA or site constraints.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. No surprises.", icon: faFileContract },
    { number: 4, title: "Build & Warranty", description: "Install to spec, clean the site, 3-year workmanship warranty.", icon: faCheckCircle },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — best availability and fastest response.", badge: "Home Base" },
    { town: "Temple", benefit: "Full fence and deck service across Bell County.", badge: "" },
    { town: "Killeen", benefit: "Military-friendly scheduling for Killeen homes.", badge: "" },
    { town: "Hewitt", benefit: "Regular residential installs and repairs.", badge: "" },
    { town: "Woodway", benefit: "HOA-friendly materials and first-pass specs.", badge: "" },
    { town: "China Spring", benefit: "Rural and residential coverage.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate upfront pricing", us: "✅ Always", others: "❌ Hourly + surprise fees" },
    { feature: "3-year workmanship warranty", us: "✅ Every install", others: "❌ Limited or none" },
    { feature: "HOA-friendly process", us: "✅ Standard", others: "❌ Varies" },
    { feature: "Material showcase & gallery", us: "✅ Always", others: "❌ Rare" },
    { feature: "Free on-site estimates", us: "✅ Every property", others: "❌ Rare or paid" },
  ];

  const faq = [
    { question: "What fence and deck services do you offer?", answer: "Wood fencing, vinyl and composite fencing, custom deck building, deck repair and resurfacing, gate automation, and commercial fencing." },
    { question: "Do you provide free estimates?", answer: "Yes — free on-site estimates with a flat-rate written quote before work begins." },
    { question: "Are you licensed and insured?", answer: "Yes — licensed fence and deck contractor with fully insured crews on every job." },
    { question: "How quickly can you start a project?", answer: "Timelines depend on material lead times and current schedule. We give an honest start window with every quote." },
    { question: "Do you work with HOAs and builders?", answer: "Yes — HOA specs and builder schedules are a regular part of our residential and commercial work." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]} />

      <SectionIntro
        title="Fence & Deck Services in Waco, TX"
        subtitle="Material showcase quality installs — wood, vinyl, decks, gates, and commercial fencing with flat-rate quotes and a 3-year workmanship warranty."
      />

      <TrustBar headline="Licensed crews · flat-rate quotes · 3-year workmanship warranty" />

      <div className={styles.section}>
        <ServiceCardComponent cards={services} />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect Working With TimberLine" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" title="Serving All of Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Fence & Deck Service FAQs" />
      </div>

      <CTABanner
        headline="Ready to Start Your Fence or Deck Project?"
        subline="Free estimates across Waco, Temple, Killeen, Hewitt, Woodway, and Central Texas."
        primaryText="Call (254) 753-6400"
        primaryLink="tel:+12547536400"
        secondaryText="Request Estimate"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant2 title="Request a Free Estimate" cityName="Waco" slug="services" spot="services-page-form" formVariant={2} />
      </div>
    </main>
  );
}
