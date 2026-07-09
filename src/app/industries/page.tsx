"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "./page.module.scss";

import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Role Before We Bid",
      description: "Builders, property managers, and HOA boards each need different schedules, documentation, and material approvals. We scope fence and deck work to how your projects actually run.",
    },
    {
      icon: faShieldHalved,
      title: "Locally Operated, Spec-Savvy",
      description: "Based in Waco since 2012, TimberLine knows Central Texas soils, HOA guidelines, and builder punch-list expectations.",
    },
    {
      icon: faLightbulb,
      title: "Repair, Replace & Document Under One Roof",
      description: "Storm repairs, full rebuilds, and board-ready photo notes — without juggling multiple fence vendors.",
    },
  ];

  const metrics = [
    { icon: faTrophy, value: 3, label: "Partner types actively served across Texas", suffix: "", duration: 2 },
    { icon: faChartLine, value: 3400, label: "Fences & decks installed company-wide", suffix: "+", duration: 3 },
    { icon: faClock, value: 12, label: "Years serving Texas properties", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "HQ for builder, PM, and HOA projects across McLennan County.", badge: "Headquarters" },
    { town: "Temple", benefit: "Builder and commercial fencing across Bell County.", badge: "" },
    { town: "Killeen", benefit: "Multifamily and residential builder support.", badge: "" },
    { town: "Hewitt", benefit: "HOA communities and property management portfolios.", badge: "" },
    { town: "Woodway", benefit: "HOA-heavy neighborhoods and custom homes.", badge: "" },
    { town: "Bellmead", benefit: "Commercial lots and managed properties.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Role-specific project approach", us: "✅ Built per partner type", others: "❌ Generic residential only" },
    { feature: "Local Central Texas knowledge", us: "✅ Serving Texas since 2012", others: "❌ Out-of-area crews" },
    { feature: "Repair + rebuild + documentation", us: "✅ All under one roof", others: "❌ Siloed vendors" },
    { feature: "Transparent fixed pricing", us: "✅ Quote before work starts", others: "❌ Billable hours + surprises" },
    { feature: "3-year workmanship warranty", us: "✅ Every install", others: "❌ Limited" },
  ];

  const faq = [
    {
      question: "Who does TimberLine partner with?",
      answer: "Residential builders and general contractors, property management companies, and HOA communities across Central Texas — plus homeowners on every service line.",
    },
    {
      question: "Do you customize scope for each partner type?",
      answer: "Yes. A builder lot schedule, a multifamily repair ticket list, and an HOA entrance phase plan are scoped differently on purpose.",
    },
    {
      question: "Do you serve properties outside Waco?",
      answer: "Yes — Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and most of Central Texas within our service radius.",
    },
    {
      question: "Can you handle both repairs and large replacements?",
      answer: "Yes — targeted repairs, full line replacements, decks, and commercial perimeters under one warranty-backed team.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />

      <SectionIntro
        title="Industries We Serve"
        subtitle="Fence and deck work scoped for residential builders, property managers, and HOA communities across Central Texas."
      />

      <TrustBar headline="Partner-ready fence & deck installs since 2012" />

      <div className={styles.section}>
        <SectionIndustriesServed />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for How Your Projects Run" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} title="Central Texas Coverage" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Industry Partnership FAQs" />
      </div>

      <CTABanner
        headline="Need a Fence & Deck Partner You Can Schedule Against?"
        subline="Flat-rate bids. Clear phases. 3-year workmanship warranty."
        primaryText="Call (254) 753-6400"
        primaryLink="tel:+12547536400"
        secondaryText="Request Consultation"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant4 title="Request a Partner Consultation" cityName="Waco" slug="industries" spot="industries-page" formVariant={4} />
      </div>
    </main>
  );
}
