// components/PageComponents/SectionIndustriesServed/SectionIndustriesServed.tsx
"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHardHat,
  faBuilding,
  faPeopleRoof,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

const INDUSTRIES = [
  {
    slug: 'residential-builders',
    label: 'Residential Builders',
    icon: faHardHat,
    description: 'Partner fencing and decks for new builds and remodels — specs, schedules, and punch lists that match your jobsite.',
  },
  {
    slug: 'property-management',
    label: 'Property Management',
    icon: faBuilding,
    description: 'Portfolio fencing repair and replacement with documented visits and one point of contact across properties.',
  },
  {
    slug: 'hoa-communities',
    label: 'HOA Communities',
    icon: faPeopleRoof,
    description: 'HOA-approved materials, phased common-area installs, and board-ready documentation for community fences.',
  },
];

interface SectionIndustriesServedProps {
  title?: string;
  subtitle?: string;
  disableLinks?: boolean;
}

export default function SectionIndustriesServed({
  title = 'Who We Build For Across Central Texas',
  subtitle = 'Residential builders, property managers, and HOA communities — fence and deck work scoped for how your projects actually run.',
  disableLinks = false,
}: SectionIndustriesServedProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.sub}>{subtitle}</p>
      </div>

      <div className={styles.grid}>
        {INDUSTRIES.map(({ slug, label, icon, description }) => {
          const card = (
            <div className={styles.card} key={slug}>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={icon} className={styles.industryIcon} />
              </div>
              <div className={styles.cardText}>
                <span className={styles.industryLabel}>{label}</span>
                <p className={styles.industryDescription}>{description}</p>
              </div>
              {!disableLinks && (
                <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
              )}
            </div>
          );

          return disableLinks ? (
            card
          ) : (
            <Link
              key={slug}
              href={`/industries/${slug}`}
              className={styles.cardLink}
              aria-label={`Learn about our ${label} services`}
            >
              {card}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
