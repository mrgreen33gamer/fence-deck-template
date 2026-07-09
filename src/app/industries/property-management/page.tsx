"use client";
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
    { icon: faClipboardList, problem: "Tenant fence tickets pile up", consequence: "Leaning panels and broken gates generate complaints faster than vendors respond." },
    { icon: faClipboardList, problem: "No photo documentation", consequence: "Ownership asks for proof of work and managers have nothing to show." },
    { icon: faClipboardList, problem: "Inconsistent vendors per property", consequence: "Quality and pricing vary wildly across the portfolio." },
    { icon: faClipboardList, problem: "Storm damage response is slow", consequence: "Downed fences sit for days creating liability and vacancy risk." },
    { icon: faClipboardList, problem: "Budgets get blown by change orders", consequence: "Hourly fence vendors turn simple repairs into open-ended bills." },
    { icon: faClipboardList, problem: "Gates never stay adjusted", consequence: "Access issues create after-hours calls and resident frustration." },
  ];

  const whyFeatures = [
    { icon: faFileContract, title: "Portfolio-Friendly Billing", description: "Clear quotes and consolidated invoicing options across properties." },
    { icon: faFileContract, title: "Documented Completions", description: "Photo notes when you need records for ownership or insurance." },
    { icon: faFileContract, title: "Repair-First Mindset", description: "We fix what should be fixed and recommend replacement only when it saves money long-term." },
  ];

  const processSteps = [
    { number: 1, title: "Ticket Review", description: "Scope the repair list or multi-unit need with your team.", icon: faSearch },
    { number: 2, title: "Flat Quotes", description: "Written pricing before work — no open-ended hourly surprises.", icon: faSearch },
    { number: 3, title: "Scheduled Work", description: "Access windows coordinated with managers and tenants.", icon: faSearch },
    { number: 4, title: "Closeout", description: "Completion notes and photos when required.", icon: faSearch },
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
    { question: "Do you handle multi-property portfolios?", answer: "Yes — we regularly work with managers across Central Texas properties." },
    { question: "Can you prioritize storm damage?", answer: "We prioritize unsafe sections and access issues first and give honest timelines." },
    { question: "Do you repair and replace?", answer: "Both — targeted repairs when structure allows, full replacement when it's the better value." },
    { question: "Commercial and multifamily sites?", answer: "Yes — commercial fencing and multifamily common-area work are in scope." },
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
        { label: "Property Management" },
      ]} />

      <SectionIntro title={"Fence Repair & Replacement for Property Managers"} subtitle={"Portfolio fencing repair, storm response, and replacement with documented visits and one invoice contact."} />
      <TrustBar headline="TimberLine partners with builders, managers, and HOAs across Central Texas" />

      <div className={styles.section}>
        <IndustryPainPoints industry="property-management" painPoints={painPoints} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why " + "Property Management" + " Choose TimberLine"} />
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
        <FAQ cityName="Waco" faq={faq} title={"Property Management FAQs"} />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} title="Central Texas Coverage" />
      </div>
      <CTABanner
        headline={"Let's talk about your property management project"}
        subline="Free consultation. Flat-rate bids. 3-year workmanship warranty."
        primaryText="Call (254) 753-6400"
        primaryLink="tel:+12547536400"
        secondaryText="Request Estimate"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title="Request a Project Consultation" cityName="Waco" slug={"property-management"} spot={"property-management-page"} formVariant={4} />
      </div>
    </main>
  );
}
