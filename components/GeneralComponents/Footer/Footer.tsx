"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot, faPhone, faEnvelope,
  faShieldHalved, faHammer, faClock, faAward,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';
import { useTrackEvent } from '&/useTrackEvent';

const NAV_LINKS = [
  { href: '/',               label: 'Home' },
  { href: '/services',       label: 'Services' },
  { href: '/projects',       label: 'Projects' },
  { href: '/about',          label: 'About' },
  { href: '/blogs',          label: 'Blog' },
  { href: '/contact',        label: 'Get a Quote' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

const SERVICE_LINKS = [
  { href: '/services/wood-fencing',            label: 'Wood Fencing' },
  { href: '/services/vinyl-composite-fencing', label: 'Vinyl & Composite Fencing' },
  { href: '/services/deck-building',           label: 'Deck Building' },
  { href: '/services/deck-repair-resurfacing', label: 'Deck Repair & Resurfacing' },
  { href: '/services/gate-automation',         label: 'Gate Automation' },
  { href: '/services/commercial-fencing',      label: 'Commercial Fencing' },
];

const LOCAL_AREAS = [
  'Waco, TX', 'Temple, TX', 'Killeen, TX',
  'Hewitt, TX', 'Woodway, TX', 'McGregor, TX',
  'China Spring, TX', 'Bellmead, TX',
];

const TRUST_ITEMS = [
  { icon: faShieldHalved, label: 'Licensed & Insured' },
  { icon: faHammer,       label: 'Fence & Deck Pros' },
  { icon: faClock,        label: 'On-Time Builds' },
  { icon: faAward,        label: '3-Yr Warranty' },
];

const SOCIALS = [
  { href: 'https://facebook.com/timberlinefencedeck', icon: faFacebookF, label: 'Facebook' },
  { href: 'https://g.page/r/timberlinefencedeck',     icon: faGoogle,    label: 'Google' },
];

export default function Footer() {
  const trackEvent = useTrackEvent();

  return (
    <footer className={styles.footer}>

      <div className={styles.trustStrip}>
        <div className={styles.trustInner}>
          {TRUST_ITEMS.map(({ icon, label }) => (
            <div key={label} className={styles.trustItem}>
              <span className={styles.trustIcon}><FontAwesomeIcon icon={icon} /></span>
              <span className={styles.trustLabel}>{label}</span>
            </div>
          ))}
          <Link
            href="/contact"
            className={styles.trustCta}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: 'Book Now', section: 'Footer-Trust' })}
          >
            Get a Free Estimate →
          </Link>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.inner}>

          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMark}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20V8l4-4h8l4 4v12"/>
                  <path d="M4 12h16"/>
                  <path d="M8 12v8"/>
                  <path d="M12 12v8"/>
                  <path d="M16 12v8"/>
                </svg>
              </span>
              <div className={styles.logoText}>
                <span className={styles.logoName}>TimberLine Fence &amp; Deck</span>
                <span className={styles.logoSub}>Waco, Texas</span>
              </div>
            </Link>

            <p className={styles.tagline}>
              Fences &amp; decks built to last — Central Texas quality. Flat-rate quotes, licensed crews, 3-year workmanship warranty since 2012.
            </p>

            <div className={styles.contactBlock}>
              <a href="tel:+12547536400" className={styles.phoneLink}
                onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Footer Phone', section: 'Footer-Brand' })}>
                <FontAwesomeIcon icon={faPhone} />
                (254) 753-6400
              </a>
              <a href="mailto:hello@timberlinefencedeck.com" className={styles.emailLink}
                onClick={() => trackEvent({ eventType: 'email_click', elementLabel: 'Footer Email', section: 'Footer-Brand' })}>
                <FontAwesomeIcon icon={faEnvelope} />
                hello@timberlinefencedeck.com
              </a>
              <span className={styles.addressLine}>
                <FontAwesomeIcon icon={faLocationDot} />
                3501 S Valley Mills Dr, Waco, TX 76711
              </span>
            </div>

            <div className={styles.socials}>
              {SOCIALS.map(({ href, icon, label }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} className={styles.socialBtn}
                  onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Social' })}>
                  <FontAwesomeIcon icon={icon} />
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <span className={styles.colHead}>Company</span>
            <ul className={styles.linkList}>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Nav' })}>
                    <span className={styles.linkArrow}>›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <span className={styles.colHead}>Our Services</span>
            <ul className={styles.linkList}>
              {SERVICE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Services' })}>
                    <span className={styles.linkArrow}>›</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <span className={styles.colHead}>Service Areas</span>
            <ul className={styles.areaList}>
              {LOCAL_AREAS.map((area) => (
                <li key={area}>
                  <span className={styles.areaDot} />
                  {area}
                </li>
              ))}
              <li className={styles.areaMore}>+ All of Central Texas</li>
            </ul>
          </div>

        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} TimberLine Fence &amp; Deck. All Rights Reserved. | Licensed &amp; Insured
          </p>
          <a href="tel:+12547536400" className={styles.emergencyBtn}
            onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Storm Repair Line', section: 'Footer-Bottom' })}>
            <span className={styles.emergencyDot} />
            Storm Fence Repair Line
          </a>
        </div>
      </div>

    </footer>
  );
}
