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
    { icon: faClipboardList, problem: "Fence trades slow the closing timeline", consequence: "Late fence installs push CO dates and create buyer frustration before move-in." },
    { icon: faClipboardList, problem: "Inconsistent quality across lots", consequence: "Different crews and materials make neighborhoods look uneven at inspection." },
    { icon: faClipboardList, problem: "Change-order noise on every phase", consequence: "Vague bids turn into mid-job surprises that burn GC time." },
    { icon: faClipboardList, problem: "No single point of contact", consequence: "Superintendents waste hours chasing status on multiple fence vendors." },
    { icon: faClipboardList, problem: "HOA and municipal rework", consequence: "Wrong heights or materials fail inspection and force expensive rework." },
    { icon: faClipboardList, problem: "Jobsite mess left behind", consequence: "Debris and cutoffs create punch-list items and neighbor complaints." },
  ];

  const whyFeatures = [
    { icon: faFileContract, title: "Builder-Ready Scheduling", description: "We stage materials and crews to hit your phase dates — not a vague 'sometime next week'." },
    { icon: faFileContract, title: "Consistent Specs Across Lots", description: "Matched materials and install standards so the subdivision reads as intentional." },
    { icon: faFileContract, title: "One Contact for Punch Lists", description: "A single TimberLine lead for supers, owners, and walkthrough notes." },
  ];

  const processSteps = [
    { number: 1, title: "Scope Review", description: "Plans, lot list, and material specs aligned with your schedule.", icon: faSearch },
    { number: 2, title: "Bid & Calendar", description: "Written bid with phase windows that match your critical path.", icon: faSearch },
    { number: 3, title: "Install Phases", description: "Lot-by-lot or block-by-block installs with clean staging.", icon: faSearch },
    { number: 4, title: "Punch & Close", description: "Quick response on punch items and final documentation.", icon: faSearch },
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
    { question: "Do you work as a subcontractor for general contractors?", answer: "Yes — residential builders and GCs are a core client type for fence and deck packages." },
    { question: "Can you match builder material specs?", answer: "Yes — we install to agreed specs and HOA guidelines for the community." },
    { question: "How do you handle multi-lot schedules?", answer: "We plan phases around your framing/finish timeline and communicate status clearly." },
    { question: "Do you install decks on new homes too?", answer: "Yes — decks and fencing can be packaged together when the schedule allows." },
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
        { label: "Residential Builders" },
      ]} />

      <SectionIntro title={"Fence & Deck Partner for Residential Builders"} subtitle={"Schedule-driven fencing and decks for new homes and remodels — specs, punch lists, and one reliable trade partner."} />
      <TrustBar headline="TimberLine partners with builders, managers, and HOAs across Central Texas" />

      <div className={styles.section}>
        <IndustryPainPoints industry="residential-builders" painPoints={painPoints} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why " + "Residential Builders" + " Choose TimberLine"} />
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
        <FAQ cityName="Waco" faq={faq} title={"Residential Builders FAQs"} />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} title="Central Texas Coverage" />
      </div>
      <CTABanner
        headline={"Let's talk about your residential builders project"}
        subline="Free consultation. Flat-rate bids. 3-year workmanship warranty."
        primaryText="Call (254) 753-6400"
        primaryLink="tel:+12547536400"
        secondaryText="Request Estimate"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title="Request a Project Consultation" cityName="Waco" slug={"residential-builders"} spot={"residential-builders-page"} formVariant={4} />
      </div>
    </main>
  );
}
