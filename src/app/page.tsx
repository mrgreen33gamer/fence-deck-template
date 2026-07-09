// TimberLine Fence & Deck — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faTree, faBorderAll, faHammer, faTools, faDoorOpen, faBuilding,
  faTrophy, faChartLine, faClock,
  faBolt, faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    { icon: faTree,      title: "Wood Fencing",             body: "Cedar privacy, picket, and ranch-style fences set plumb with concrete posts built for Texas weather.", link: "/services/wood-fencing", image: "/pages/home/services/service-1.jpg" },
    { icon: faBorderAll, title: "Vinyl & Composite Fencing", body: "Low-maintenance privacy systems that stay straight without annual staining or sealing.", link: "/services/vinyl-composite-fencing", image: "/pages/home/services/service-2.jpg" },
    { icon: faHammer,    title: "Deck Building",            body: "Wood and composite decks with solid structure, code-compliant rails, and clean finishes.", link: "/services/deck-building", image: "/pages/home/services/service-3.jpg" },
    { icon: faTools,     title: "Deck Repair & Resurfacing", body: "Board replacement, joist repair, and full resurfacing that saves decks worth keeping.", link: "/services/deck-repair-resurfacing", image: "/pages/home/services/service-4.jpg" },
    { icon: faDoorOpen,  title: "Gate Automation",          body: "Driveway and entry gates with openers, keypads, and app access for homes and properties.", link: "/services/gate-automation", image: "/pages/home/services/service-1.jpg" },
    { icon: faBuilding,  title: "Commercial Fencing",       body: "Chain-link, privacy, and gated access for commercial lots, builders, and HOA common areas.", link: "/services/commercial-fencing", image: "/pages/home/services/service-2.jpg" },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3400, label: "Fences & decks installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 12,   label: "Years of local fence & deck experience",         suffix: "+", duration: 2 },
    { icon: faChartLine, value: 97,   label: "Customer satisfaction rating",                   suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faBolt,         title: "Clear Schedule, Clean Site", description: "You get a realistic start date, daily cleanup, and a crew that texts when they're en route — not an all-day maybe window." },
    { icon: faShieldHalved, title: "Licensed & Insured",         description: "Licensed fence and deck contractor with fully insured crews. 3-year workmanship warranty on every install we complete." },
    { icon: faUsers,        title: "Locally Owned Since 2012",   description: "TimberLine was founded in Waco by Jake Thornton. Every call is answered by someone who lives and builds here — not a franchise call center." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online",  description: "Phone, text, or the form below — your choice. We'll set a free on-site estimate that fits your schedule.", icon: faHeadset },
    { number: 2, title: "We Measure On-Site",   description: "We walk the property, check pins and grades, and discuss materials that fit your budget and HOA rules.", icon: faSearch },
    { number: 3, title: "Flat-Rate Written Quote", description: "Itemized price before we dig. You decide with zero pressure — the number holds once approved.", icon: faFileContract },
    { number: 4, title: "Build & Warranty",     description: "Install to spec, clean the site, and hand you a 3-year workmanship warranty on the finished work.", icon: faCheckCircle },
  ];

  const expectations = [
    { icon: faSearch,      title: "Honest Material Guidance", description: "We recommend wood, vinyl, or composite based on your property — not what's easiest to sell that week." },
    { icon: faHammer,      title: "Clean, Respectful Crews",  description: "Gates closed, debris hauled, neighbors considered. Every single day on site." },
    { icon: faCheckCircle, title: "Upfront Flat-Rate Price",  description: "Written quote before any work starts. The number doesn't change mid-job unless you change the scope." },
    { icon: faStar,        title: "Quality Materials Only",   description: "Posts, boards, and hardware rated for Central Texas sun, wind, and clay soils — backed by our 3-year warranty." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available crews in the city.", badge: "Home Base" },
    { town: "Temple",       benefit: "Full fence and deck coverage across Bell County neighborhoods.",       badge: "" },
    { town: "Killeen",      benefit: "Military-friendly scheduling for Killeen and Fort Cavazos area homes.", badge: "" },
    { town: "Hewitt",       benefit: "Regular route — residential privacy fences and decks weekly.",          badge: "" },
    { town: "Woodway",      benefit: "HOA-friendly installs with first-pass inspection standards.",          badge: "" },
    { town: "McGregor",     benefit: "Rural and residential coverage with no trip games on the quote.",      badge: "" },
  ];

  const faq = [
    { question: "How much does a privacy fence cost in Waco?", answer: "Most residential 6ft wood privacy fences land in a wide range depending on linear feet, gates, and terrain. We always provide a free on-site measurement and a flat-rate written quote before any work starts." },
    { question: "Do you work with HOAs?", answer: "Yes — HOA-friendly materials, heights, and stain colors are a core part of our process. We'll help you match community guidelines before we dig posts." },
    { question: "How long does a typical fence install take?", answer: "Many residential backyard fences finish in a few days once materials are on site. Larger commercial or multi-gate jobs are scheduled in clear phases so you know the timeline up front." },
    { question: "Wood or vinyl — which should I choose?", answer: "Wood wins on classic look and upfront cost; vinyl wins on low maintenance. We'll walk you through trade-offs for your property, sun exposure, and budget during the free estimate." },
    { question: "What's covered by the 3-year workmanship warranty?", answer: "Our workmanship on the install — posts, panels, gates we built, and deck framing we set. Manufacturer material warranties apply separately and we help you claim them if needed." },
    { question: "Do you build decks as well as fences?", answer: "Yes — custom wood and composite decks, plus repair and resurfacing for decks worth saving. Deck building is one of our six core services." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar headline="3,400+ fences & decks · 4.9★ from 510+ Central Texas reviews" />
      <div className={styles.section}>
        <ServiceCardComponent cards={services} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} />
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
      <CTABanner
        secondaryLink="/contact"
        secondaryText="Free Fence Quote"
        primaryLink="tel:+12547536400"
        primaryText="Call (254) 753-6400"
        subline="Cedar, iron, and composite — posts set right, lines true, and clean gates that swing for years."
        headline="Fences & Decks Built Square." 
        imageSrc="/pages/home/welcome/hero-main.jpg"
       />
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} />
      </div>
      <div className={styles.section}>
        <WhatToExpect expectations={expectations} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Get a Free Fence or Deck Estimate"
          cityName="Waco"
          slug="home"
          spot="homepage-form"
          formVariant={4}
        />
      </div>
    </main>
  );
}
