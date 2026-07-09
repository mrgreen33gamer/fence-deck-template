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
    { icon: faClipboardList, problem: "Entrance fences look mismatched", consequence: "Piecemeal repairs make the community entrance look neglected." },
    { icon: faClipboardList, problem: "Board approval stalls projects", consequence: "Without clear options and samples, committees delay decisions for months." },
    { icon: faClipboardList, problem: "Homeowner fence complaints", consequence: "Inconsistent rear-yard standards create neighbor disputes." },
    { icon: faClipboardList, problem: "Vendor no-shows after storms", consequence: "Common-area sections stay down while liability concerns rise." },
    { icon: faClipboardList, problem: "No phase plan for large scopes", consequence: "Big projects disrupt access without a clear communication plan." },
    { icon: faClipboardList, problem: "Wrong materials fail guidelines", consequence: "Unapproved heights or styles force expensive tear-outs." },
  ];

  const whyFeatures = [
    { icon: faFileContract, title: "HOA Spec Fluency", description: "We present material and height options that match community guidelines." },
    { icon: faFileContract, title: "Phased Common-Area Work", description: "Entrances and long runs completed in phases that keep access open." },
    { icon: faFileContract, title: "Board-Ready Documentation", description: "Photos and phase notes for meetings and homeowner updates." },
  ];

  const processSteps = [
    { number: 1, title: "Guidelines Review", description: "CC&Rs / architectural guidelines and site walk.", icon: faSearch },
    { number: 2, title: "Options Package", description: "Material samples, pricing, and phase plan for the board.", icon: faSearch },
    { number: 3, title: "Approved Install", description: "Work proceeds to the approved scope and colors.", icon: faSearch },
    { number: 4, title: "Phase Closeout", description: "Documentation delivered for board records.", icon: faSearch },
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
    { question: "Do you present options to HOA boards?", answer: "Yes — clear material options, pricing, and phase plans boards can act on." },
    { question: "Can you phase entrance fence replacements?", answer: "Yes — phased installs keep community access open and spending predictable." },
    { question: "Homeowner fence installations too?", answer: "Yes — individual homeowners inside HOAs are a major share of our residential work." },
    { question: "What materials do HOAs usually approve?", answer: "Cedar privacy, certain vinyl systems, and specific stain colors are common — we verify per community." },
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
        { label: "HOA Communities" },
      ]} />

      <SectionIntro title={"HOA Fence & Common-Area Installs"} subtitle={"HOA-approved materials, phased entrance and common-area fencing, and board-ready documentation."} />
      <TrustBar headline="TimberLine partners with builders, managers, and HOAs across Central Texas" />

      <div className={styles.section}>
        <IndustryPainPoints industry="hoa-communities" painPoints={painPoints} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why " + "HOA Communities" + " Choose TimberLine"} />
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
        <FAQ cityName="Waco" faq={faq} title={"HOA Communities FAQs"} />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} title="Central Texas Coverage" />
      </div>
      <CTABanner
        headline={"Let's talk about your hoa communities project"}
        subline="Free consultation. Flat-rate bids. 3-year workmanship warranty."
        primaryText="Call (254) 753-6400"
        primaryLink="tel:+12547536400"
        secondaryText="Request Estimate"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title="Request a Project Consultation" cityName="Waco" slug={"hoa-communities"} spot={"hoa-communities-page"} formVariant={4} />
      </div>
    </main>
  );
}
