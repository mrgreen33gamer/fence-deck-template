// PageComponents/AboutStory/AboutStory.tsx
import styles from './styles.module.scss';

interface AboutStoryProps {
  cityName: string;
}

const AboutStory: React.FC<AboutStoryProps> = ({ cityName }) => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyContainer}>

        <div className={styles.labelRow}>
          <span className={styles.label}>Our Story</span>
          <div className={styles.labelLine} aria-hidden="true" />
        </div>

        <h2 className={styles.storyTitle}>
          A Local Company Built on<br />
          <span className={styles.highlight}>Honest Work & Fair Prices</span>
        </h2>

        <div className={styles.storyBody}>
          <div className={styles.storyPull}>
            <p className={styles.pullQuote}>
              "We started TimberLine because we were tired of watching homeowners get stuck with leaning fences and vague quotes from fly-by-night crews."
            </p>
            <div className={styles.pullAttrib}>
              <span className={styles.pullName}>— Jake Thornton</span>
              <span className={styles.pullTitle}>Founder, TimberLine Fence & Deck</span>
            </div>
          </div>

          <div className={styles.storyText}>
            <p className={styles.storyParagraph}>
              Founded in 2012 in Waco, TX, TimberLine Fence & Deck started with one crew and one principle:
              measure honestly, charge a fair flat rate, and back the work with a real workmanship warranty.
              No hourly surprises, no upsell pressure, no disappearing after install day.
            </p>
            <p className={styles.storyParagraph}>
              Today we proudly serve <strong>{cityName}</strong> and every surrounding community —
              from China Spring to Killeen — with licensed, insured fence and deck crews
              who live and work right here in Central Texas.
            </p>

            <div className={styles.milestones}>
              {[
                { year: '2012', label: 'Founded in Waco' },
                { year: '2016', label: 'Expanded crews' },
                { year: '2020', label: '2,000+ installs' },
                { year: '2025', label: '3,400+ projects' },
              ].map((m, i) => (
                <div key={i} className={styles.milestone}>
                  <span className={styles.milestoneYear}>{m.year}</span>
                  <span className={styles.milestoneLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStory;
