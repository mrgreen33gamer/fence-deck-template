'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string;
  icon?:    string;
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'Materials We Install',
    items: [
      { name: 'Cedar Privacy', type: 'brand', icon: '🪵' },
      { name: 'Pine / Ranch',  type: 'brand', icon: '🪵' },
      { name: 'Vinyl Privacy', type: 'brand', icon: '⬜' },
      { name: 'Composite',     type: 'brand', icon: '⬜' },
      { name: 'Chain-Link',    type: 'brand', icon: '🔗' },
      { name: 'Composite Deck', type: 'brand', icon: '🟫' },
      { name: 'Wood Deck',     type: 'brand', icon: '🟫' },
      { name: 'Gate Hardware', type: 'brand', icon: '🔐' },
    ],
  },
  {
    label: 'Credentials & Coverage',
    items: [
      { name: 'Licensed Contractor', type: 'cert', icon: '✓' },
      { name: 'Fully Insured',       type: 'cert', icon: '✓' },
      { name: '3-Year Warranty',     type: 'cert', icon: '✓' },
      { name: 'HOA Spec Ready',      type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Project Types',
    items: [
      { name: 'Privacy Fences',      type: 'tool', icon: '🏡' },
      { name: 'Ranch Fences',       type: 'tool', icon: '🏡' },
      { name: 'Custom Decks',       type: 'tool', icon: '🏡' },
      { name: 'Deck Resurfacing',   type: 'tool', icon: '🛠️' },
      { name: 'Gate Automation',    type: 'tool', icon: '⚙️' },
      { name: 'Commercial Perimeters', type: 'tool', icon: '🏢' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Materials, Credentials & Project Types',
  subtitle = 'From cedar privacy to composite decks and automated gates — built for Central Texas properties.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Materials and credentials">
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Work With</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className={styles.group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08, duration: 0.45 }}
            >
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <div className={styles.itemGrid}>
                {group.items.map((item) => (
                  <div key={item.name} className={styles.item}>
                    <span className={styles.itemIcon} aria-hidden="true">{item.icon}</span>
                    <span className={styles.itemName}>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
