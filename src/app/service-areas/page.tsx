// src/app/service-areas/page.tsx
// TimberLine Fence & Deck — Service Areas Page
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.scss';
import CTABanner from '#/PageComponents/CTABanner/CTABanner';
import FAQ from '#/PageComponents/FAQ/FAQ';

const SERVICE_AREAS = [
  {
    city: 'Waco',
    slug: 'waco-tx',
    county: 'McLennan County',
    badge: 'Home Base',
    description: 'Our headquarters. Fastest scheduling and full service menu — wood fencing, vinyl, decks, repairs, gates, and commercial installs across all of Waco.',
    highlights: ['Priority scheduling', 'All services available', 'Flat-rate quotes'],
  },
  {
    city: 'Temple',
    slug: 'temple-tx',
    county: 'Bell County',
    badge: 'Primary Area',
    description: 'Full fence and deck coverage for Temple homes, builders, and commercial properties. Same crews and warranty as our Waco base.',
    highlights: ['Full service coverage', 'Builder & commercial', '3-Year Warranty'],
  },
  {
    city: 'Killeen',
    slug: 'killeen-tx',
    county: 'Bell County',
    badge: 'Primary Area',
    description: 'Fence and deck installs for Killeen and Fort Cavazos area homes and businesses. Military-friendly scheduling.',
    highlights: ['Military-friendly', 'Residential & commercial', 'On-time crews'],
  },
  {
    city: 'Hewitt',
    slug: 'hewitt-tx',
    county: 'McLennan County',
    badge: '',
    description: 'Regular residential privacy fences, decks, and HOA-friendly installs throughout Hewitt.',
    highlights: ['Regular coverage', 'HOA-friendly', 'Free estimates'],
  },
  {
    city: 'Woodway',
    slug: 'woodway-tx',
    county: 'McLennan County',
    badge: '',
    description: "Serving Woodway neighborhoods with HOA-ready materials, heights, and stain options that pass inspection.",
    highlights: ['HOA specs', 'Flat-rate quotes', '3-Year Warranty'],
  },
  {
    city: 'McGregor',
    slug: 'mcgregor-tx',
    county: 'McLennan County',
    badge: '',
    description: 'Rural and residential fence lines, ranch-style fencing, and automated driveway gates.',
    highlights: ['Rural coverage', 'Ranch fencing', 'Gate automation'],
  },
  {
    city: 'China Spring',
    slug: 'china-spring-tx',
    county: 'McLennan County',
    badge: '',
    description: 'Acreage and residential fence and deck work with the same flat-rate quoting as in-town jobs.',
    highlights: ['Rural & residential', 'Flat-rate quotes', 'Licensed crews'],
  },
  {
    city: 'Bellmead',
    slug: 'bellmead-tx',
    county: 'McLennan County',
    badge: '',
    description: 'Residential repairs, replacements, and commercial lot fencing for Bellmead properties.',
    highlights: ['Repairs & rebuilds', 'Commercial lots', 'Local crews'],
  },
];

const faq = [
  {
    question: 'What areas do you service?',
    answer: 'We serve Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and most of Central Texas within about 60 miles of Waco. Call us if you are not sure — we probably cover your address.',
  },
  {
    question: 'Is pricing the same in all service areas?',
    answer: 'Yes — flat-rate quotes apply across every city we serve. The written price before we start is the price you pay for the approved scope.',
  },
  {
    question: 'Do you handle storm-damaged fences outside Waco?',
    answer: 'Yes. Unsafe or downed sections are prioritized across our service area. We give an honest timeline when you call.',
  },
  {
    question: 'Do you work with HOAs and builders in every city?',
    answer: 'Yes — HOA-friendly materials and builder schedules are part of our normal process across Central Texas.',
  },
];

export default function ServiceAreasPage() {
  return (
    <main className={styles.page}>

      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              Central Texas Fence &amp; Deck — Since 2012
            </div>
            <h1 className={styles.heroTitle}>
              Service Areas
              <span className={styles.heroAccent}>We Come to You.</span>
            </h1>
            <p className={styles.heroSub}>
              Based in Waco, serving Central Texas. Flat-rate quotes, licensed crews, and a 3-Year Workmanship Warranty — no matter which community you call home.
            </p>
            <div className={styles.heroActions}>
              <a href="tel:+12547536400" className={styles.heroCTAPrimary}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call (254) 753-6400
              </a>
              <Link href="/contact" className={styles.heroCTASecondary}>
                Free Estimate
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div className={styles.trustStrip}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            {[
              { val: '60mi', lbl: 'Coverage radius from Waco' },
              { val: '8+', lbl: 'Cities we actively serve' },
              { val: 'Flat-Rate', lbl: 'Quotes in every area' },
              { val: '3-Year', lbl: 'Workmanship Warranty' },
            ].map(({ val, lbl }) => (
              <div key={lbl} className={styles.trustStat}>
                <span className={styles.trustVal}>{val}</span>
                <span className={styles.trustLbl}>{lbl}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.areasSection}>
        <div className={styles.areasSectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Full Coverage Map</span>
            <h2 className={styles.sectionTitle}>Every Community We Serve</h2>
            <p className={styles.sectionSub}>
              Fence and deck installs across Waco and Central Texas — free estimates, flat-rate quotes, and HOA-friendly specs.
            </p>
          </div>

          <div className={styles.areasGrid}>
            {SERVICE_AREAS.map((area, i) => {
              const isHub = area.badge === 'Home Base';
              const isPrimary = area.badge === 'Primary Area';

              return (
                <motion.div
                  key={area.slug}
                  className={`${styles.areaCard} ${isHub ? styles.areaCardHub : ''} ${isPrimary ? styles.areaCardPrimary : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                >
                  {area.badge && (
                    <span className={`${styles.areaBadge} ${isHub ? styles.areaBadgeHub : styles.areaBadgeNearby}`}>
                      {area.badge}
                    </span>
                  )}

                  <div className={styles.areaPin} aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>

                  <div className={styles.areaTopRow}>
                    <h3 className={styles.areaCity}>{area.city}</h3>
                    <span className={styles.areaCounty}>{area.county}</span>
                  </div>

                  <p className={styles.areaDesc}>{area.description}</p>

                  <ul className={styles.areaHighlights}>
                    {area.highlights.map(h => (
                      <li key={h}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.areaFooter}>
                    <a href="tel:+12547536400" className={styles.areaCallBtn}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      Call Now
                    </a>
                    <Link href="/contact" className={styles.areaEstimateBtn}>
                      Free Estimate
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.unlisted}>
        <div className={styles.unlistedInner}>
          <div className={styles.unlistedIcon} aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div className={styles.unlistedText}>
            <h3>Don&apos;t see your city?</h3>
            <p>We cover most of Central Texas within about 60 miles of Waco. Call us — there&apos;s a good chance we serve your area.</p>
          </div>
          <a href="tel:+12547536400" className={styles.unlistedCta}>Call (254) 753-6400</a>
        </div>
      </section>

      <div className={styles.faqSection}>
        <FAQ cityName="Waco" faq={faq} title="Service Area FAQs" />
      </div>

      <CTABanner
        headline="In Our Service Area? Let's Measure Your Project."
        subline="Free on-site estimates across Waco, Temple, Killeen, and surrounding communities."
        primaryText="Call (254) 753-6400"
        primaryLink="tel:+12547536400"
        secondaryText="Request Estimate"
        secondaryLink="/contact"
      />
    </main>
  );
}
