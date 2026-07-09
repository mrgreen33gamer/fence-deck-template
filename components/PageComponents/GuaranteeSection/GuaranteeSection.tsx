// components/PageComponents/GuaranteeSection/GuaranteeSection.tsx
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faRotateLeft,
  faTag,
  faCertificate,
  faCalendarCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useTrackEvent } from '&/useTrackEvent';

interface Guarantee {
  icon: any;
  title: string;
  description: string;
}

interface GuaranteeSectionProps {
  title?:      string;
  headline?:   string;
  guarantees?: Guarantee[];
  ctaText?:    string;
  ctaLink?:    string;
}

const DEFAULT_GUARANTEES: Guarantee[] = [
  {
    icon: faTag,
    title: "Flat-Rate Quotes. Always.",
    description:
      "You get a firm written price before we dig or cut — no hourly billing, no surprise add-ons. What we quote is what you pay.",
  },
  {
    icon: faShieldHalved,
    title: "3-Year Workmanship Warranty",
    description:
      "Every install and repair we perform is covered for three years on workmanship. If our work fails, we make it right.",
  },
  {
    icon: faRotateLeft,
    title: "Satisfaction Guarantee",
    description:
      "Not satisfied with our work? We'll return to make it right. We stand behind every fence and deck, no exceptions.",
  },
  {
    icon: faCertificate,
    title: "Licensed & Insured Crews",
    description:
      "Licensed fence and deck contractor with fully insured crews on every job. Documentation available on request.",
  },
  {
    icon: faCalendarCheck,
    title: "Clear Schedule, Clean Site",
    description:
      "You get a realistic start date and daily cleanup. We earn referrals by leaving your property better than we found it.",
  },
  {
    icon: faStar,
    title: "HOA-Friendly Materials",
    description:
      "We know Central Texas HOA specs — height, material, and stain options that pass inspection the first time.",
  },
];

const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({
  title      = "Our Promise to You",
  headline   = "We back every job\nwith real guarantees.",
  guarantees = DEFAULT_GUARANTEES,
  ctaText    = "Get a Free Estimate",
  ctaLink    = "/contact",
}) => {
  const trackEvent = useTrackEvent();

  return (
    <section className={styles.section} aria-label="Our Guarantees">
      <div className={styles.container}>

        {/* Left: headline + CTA */}
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>{title}</span>
          <h2 className={styles.headline}>
            {headline.split("\n").map((line, i) => (
              <span key={i}>
                {i === 1 ? <em>{line}</em> : line}
                {i < headline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className={styles.body}>
            Every fence company in Central Texas makes promises. We back ours in writing — with flat-rate quotes, licensed crews, and a 3-year workmanship warranty on every install.
          </p>
          <Link
            href={ctaLink}
            className={styles.cta}
            onClick={() => trackEvent({
              eventType:    'click',
              elementLabel: ctaText,
              section:      'GuaranteeSection',
            })}
          >
            {ctaText}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>

          <div className={styles.ratingRow}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <span className={styles.ratingText}>4.9 · 510+ verified Google reviews</span>
          </div>
        </div>

        {/* Right: guarantee cards */}
        <div className={styles.rightCol}>
          <div className={styles.grid}>
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.45, ease: "easeOut" }}
              >
                <div className={styles.iconWrap} aria-hidden="true">
                  <FontAwesomeIcon icon={g.icon} className={styles.icon} />
                </div>
                <div className={styles.cardText}>
                  <h3 className={styles.cardTitle}>{g.title}</h3>
                  <p className={styles.cardBody}>{g.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GuaranteeSection;
