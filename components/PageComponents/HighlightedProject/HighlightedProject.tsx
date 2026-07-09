// PageComponents/HighlightedProject/HighlightedProject.tsx
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

interface HighlightedProjectProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  projectLink?: string;
  ctaLink?: string;
}

const HighlightedProject: React.FC<HighlightedProjectProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  projectLink = "/projects",
  ctaLink = "/contact",
}) => {
  return (
    <section className={styles.section} aria-label="Highlighted Project">
      <div className={styles.container}>
        <div className={styles.textSide}>
          <div className={styles.card}>
            <span className={styles.tag}>Featured Project</span>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardDesc}>{description}</p>
            <div className={styles.ctaRow}>
              <Link
                href={projectLink}
                className={styles.btnPrimary}
              >
                View All Projects
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <Link href={ctaLink} className={styles.btnGhost}>
                Free Estimate
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.imageSide}>
          <div className={styles.imageFrame}>
            <Image
              fill
              src={imageSrc}
              alt={imageAlt}
              style={{ objectFit: "cover" }}
              quality={100}
              loading="lazy"
            />
            <div className={styles.imageOverlay} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightedProject;