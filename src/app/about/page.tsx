// TimberLine Fence & Deck — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faHammer,
  faSearch, faRocket, faStar, faTools,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2012",
      description: "TimberLine Fence & Deck was founded in Waco by Jake Thornton after years building fences and decks across Central Texas. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "Crews You Can Trust on Your Property",
      description: "Licensed and insured crews who treat every yard like a neighbor's. Gates closed, debris hauled, and daily cleanup without you having to ask.",
    },
    {
      icon: faHammer,
      title: "Honest From the First Measure",
      description: "We won't push vinyl when wood is the better fit, or a full rebuild when a sectional repair will do. Straight talk is how we earned 510+ reviews.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3400, label: "Fences & decks we've installed in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 97,   label: "Customer satisfaction rate",                        suffix: "%", duration: 2 },
    { icon: faClock,     value: 12,   label: "Years serving Central Texas properties",            suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Free On-Site Consultation", description: "We measure your property, discuss materials, and give you a written flat-rate quote before any work begins.", icon: faSearch },
    { number: 2, title: "Clear Project Schedule", description: "Once you approve the quote, you get a realistic start window and daily communication while we're on site.", icon: faRocket },
    { number: 3, title: "Quality Build, Every Time", description: "Posts set right, panels plumb, gates that latch — and a clean site when we leave.", icon: faStar },
    { number: 4, title: "Warranty & Support", description: "3-year workmanship warranty and a local team that answers the phone after the project is done.", icon: faTools },
  ];

  return (
    <main className={styles.pageWrapper}>
      <SectionIntro
        title="About TimberLine Fence & Deck"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2012. Fences and decks built to last — Central Texas quality for the families and businesses we call neighbors."
      />

      <TrustBar headline="3,400+ fences & decks · 4.9★ from 510+ Central Texas reviews" />

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Who We Are" />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="12 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Waco's Fence & Deck Builder — Ready When You Are"
        subline="Flat-rate quotes. 3-Year Workmanship Warranty. Licensed & insured."
        primaryText="Call Us Now"
        primaryLink="tel:+12547536400"
        secondaryText="Request Estimate Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
