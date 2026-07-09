// TimberLine Fence & Deck — Gate Automation
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

const SLUG = "gate-automation";

export default function ServicePage() {
  const expectations = [
    { icon: faSearch, title: "Access Plan", description: "Swing vs. slide, power location, and entry method mapped to your driveway." },
    { icon: faSearch, title: "Structural Check", description: "Posts and gate leaves sized for the operator — weak posts fail first." },
    { icon: faSearch, title: "Smart Access", description: "Keypad, remote, and phone app options configured clearly." },
    { icon: faSearch, title: "Safety First", description: "Photo eyes, edges, and backup power where the design requires them." },
  ];

  const whyFeatures = [
    { icon: faShieldHalved, title: "Right-Sized Operators", description: "Hardware matched to gate weight and wind load — not the cheapest box." },
    { icon: faShieldHalved, title: "Clean Install", description: "Conduit, pads, and wiring done neatly for long-term serviceability." },
    { icon: faShieldHalved, title: "Local Service", description: "Waco-based team for setup, training, and follow-up." },
  ];

  const processSteps = [
    { number: 1, title: "Site Visit", description: "Driveway measure and power assessment.", icon: faHeadset },
    { number: 2, title: "Proposal", description: "Gate style, operator, and access package quoted.", icon: faSearch },
    { number: 3, title: "Install", description: "Posts, leaves, operator, and safety devices.", icon: faFileContract },
    { number: 4, title: "Training", description: "You learn remotes, codes, and manual release.", icon: faCheckCircle },
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
    { question: "Can you automate an existing gate?", answer: "Often yes if the structure and posts can handle the operator. We evaluate during the free estimate." },
    { question: "What if the power goes out?", answer: "Battery backup options keep many systems operational during short outages." },
    { question: "Do you install keypads and phone apps?", answer: "Yes — keypad, remote, and app access are common packages." },
    { question: "Residential and commercial gates?", answer: "Both — from single home driveways to commercial entry points." },
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
        { label: "Gate Automation" },
      ]} />

      <SectionIntro
        title={"Gate Automation in Waco, TX"}
        subtitle={"Driveway and entry gates with openers, keypads, remotes, and app access for homes and properties."}
      />

      <TrustBar headline={"Automated gates installed with safety edges, battery backup, and clean operator setups"} />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Waco Chooses TimberLine for " + "Gate Automation"} />
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
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/" + SLUG} title={"Gate Automation Across Central Texas"} />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title={"Gate Automation FAQs"} />
      </div>

      <CTABanner
        headline={"Ready for gate automation?"}
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
        <Variant4 title={"Get a Free " + "Gate Automation" + " Estimate"} cityName="Waco" slug={SLUG} spot={SLUG + "-page"} formVariant={4} />
      </div>
    </main>
  );
}
