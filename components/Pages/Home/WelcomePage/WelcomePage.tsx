// _archetype-library/hero-h-parallax/Component.tsx
//
// Hero H: Layered Parallax — foliage/gravel texture via CSS gradients + optional
// textureSrc image layers. Scroll-linked depth on document.body (scroll container).
// No discrete widget card — full-bleed layered texture behind left-aligned copy.
'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function useBodyScrollY() {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const read = () => {
      // document.body is the scroll container in these templates
      const y =
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.scrollY ||
        0;
      scrollY.set(y);
    };
    read();
    document.body.addEventListener('scroll', read, { passive: true });
    window.addEventListener('scroll', read, { passive: true });
    return () => {
      document.body.removeEventListener('scroll', read);
      window.removeEventListener('scroll', read);
    };
  }, [scrollY]);

  return scrollY;
}

export default function WelcomePage() {
const badgeText = 'Waco\'s Fence & Deck Builder — Since 2012';
const headlineLines = [
  'Frame It.',
  'Finish It.',
];
const headlineAccent = 'TimberLine.';
const subheadline = 'Fences & decks built to last — Central Texas quality. Flat-rate quotes, licensed crews, and a 3-year workmanship warranty on every install.';
const primaryCta = { label: 'Call (254) 753-6400', href: 'tel:+12547536400' };
const secondaryCta = { label: 'Free Estimate', href: '/contact' };
const chips = [
  'Free Estimates',
  '3-Yr Warranty',
  'Licensed & Insured',
  '12+ Yrs Local',
  'HOA-Friendly',
];
const stats = [
  {
    "value": "3,400+",
    "label": "Fences & Decks"
  },
  {
    "value": "4.9 ★",
    "label": "Google Rating"
  },
  {
    "value": "3-Year",
    "label": "Workmanship Warranty"
  },
  {
    "value": "Free",
    "label": "On-Site Estimates"
  }
];
const meterTarget = 72;
const meterTopLabel = "Featured";
const meterMidLabel = "Popular";
const meterBotLabel = "Classic";
const particleColor = '#65a30d';
const beforeImageSrc = '/pages/home/welcome/before.jpg';
const afterImageSrc = '/pages/home/welcome/after.jpg';
const beforeLabel = "Failing fence";
const afterLabel = "New line";
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "Cedar Privacy", swatch: "#65a30d", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Iron", swatch: "#4d7c0f", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Composite Deck", swatch: "#a3e635", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "Ranch Rail", swatch: "#84cc16", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Gate Kits", swatch: "#3f6212", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Stain Grade", swatch: "#365314", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "Posts are plumb, pickets consistent, and the gate latch actually works. Neighbors already asked who did it.";
const authorName = "Samantha W.";
const authorMeta = "Privacy fence · Lorena";
const rating = 5;
const schematicLabel = "TimberLine schematic";
const gauges = [
  { label: "Linear ft", value: "120k+" },
  { label: "Rating", value: "4.8 ★" },
  { label: "Posts", value: "Set deep" },
  { label: "Warranty", value: "Workmanship" }
];
const toggles = [
  { label: "Showroom open", on: true },
  { label: "Samples ready", on: true },
  { label: "Install crews", on: true }
];
const textureSrc = '/pages/home/welcome/hero-main.jpg';
const textureAlt = 'Texture';
const accentWord = "TimberLine";

  const scrollY = useBodyScrollY();
  const smoothY = useSpring(scrollY, { stiffness: 90, damping: 28, mass: 0.4 });

  const layerFarY = useTransform(smoothY, [0, 500], [0, 90]);
  const layerMidY = useTransform(smoothY, [0, 500], [0, 50]);
  const layerNearY = useTransform(smoothY, [0, 500], [0, 22]);
  const textureY = useTransform(smoothY, [0, 500], [0, 70]);
  const vignetteOpacity = useTransform(smoothY, [0, 300], [0.55, 0.85]);

  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Full-bleed layered texture stack */}
      <div className={styles.layers} aria-hidden="true">
        <motion.div
          className={`${styles.layer} ${styles.layerFar}`}
          style={reducedMotion ? undefined : { y: layerFarY }}
        />
        <motion.div
          className={`${styles.layer} ${styles.layerMid}`}
          style={reducedMotion ? undefined : { y: layerMidY }}
        />
        {textureSrc ? (
          <motion.div
            className={`${styles.layer} ${styles.layerTexture}`}
            style={reducedMotion ? undefined : { y: textureY }}
          >
            {/* Decorative texture layer — next/image optional when adapting into a template */}
            <img src={textureSrc} alt={textureAlt} className={styles.textureImg} />
          </motion.div>
        ) : null}
        <motion.div
          className={`${styles.layer} ${styles.layerNear}`}
          style={reducedMotion ? undefined : { y: layerNearY }}
        />
        <motion.div
          className={styles.vignette}
          style={reducedMotion ? undefined : { opacity: vignetteOpacity }}
        />
        <div className={styles.grain} />
      </div>

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Spacer column preserves grid balance on wide viewports; texture shows through */}
        <div className={styles.depthWell} aria-hidden="true">
          <div className={styles.depthRing} />
          <div className={styles.depthRingOuter} />
        </div>
      </div>
    </section>
  );
}
