// libs/local-db/projects.ts
// ─────────────────────────────────────────────────────────────────────────────
// Central data store for TimberLine Fence & Deck projects shown on /projects
// and /projects/[slug] case study pages.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectCategory =
  | 'Wood Fencing'
  | 'Vinyl & Composite'
  | 'Deck Building'
  | 'Deck Repair'
  | 'Gate Automation'
  | 'Commercial Fencing';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  category: ProjectCategory;
  year: string;
  shortDesc: string;
  fullDesc: string;
  result: string;
  tags: string[];
  images: ProjectImage[];
  beforeImage?: ProjectImage;
  afterImage?: ProjectImage;
  sqft?: string;
  duration?: string;
  featured?: boolean;
}

const G = '/projects/gallery';

const woodProjects: Project[] = [
  {
    id: 'woodway-privacy-fence',
    title: 'Woodway 6ft Cedar Privacy Fence',
    client: 'Private Residence',
    location: 'Woodway, TX',
    category: 'Wood Fencing',
    year: '2025',
    duration: '4 days',
    shortDesc: 'Full backyard cedar privacy fence with two walk gates — HOA-approved height and stain.',
    fullDesc: 'Homeowners needed a full backyard rebuild after a storm took down an aging pine fence. TimberLine set new posts in concrete, installed 6ft cedar privacy panels with cap and trim, and finished with a UV-resistant stain approved by the HOA. Two walk gates aligned to existing side-yard paths. Site left broom-clean daily.',
    result: 'HOA Approved',
    tags: ['Cedar Privacy', 'HOA Spec', 'Woodway'],
    images: [
      { src: `${G}/2.png`, alt: 'Cedar privacy fence in Woodway', caption: 'Completed cedar line' },
      { src: `${G}/3.png`, alt: 'Walk gate detail', caption: 'Walk gate' },
    ],
    beforeImage: { src: `${G}/4.png`, alt: 'Damaged fence before rebuild' },
    afterImage:  { src: `${G}/2.png`, alt: 'New cedar privacy fence' },
    featured: true,
  },
  {
    id: 'china-spring-ranch-fence',
    title: 'China Spring Ranch-Style Perimeter',
    client: 'Private Residence',
    location: 'China Spring, TX',
    category: 'Wood Fencing',
    year: '2024',
    duration: '2 weeks',
    shortDesc: 'Long ranch-style fence line with pipe gates for acreage access.',
    fullDesc: 'A China Spring property needed a durable ranch-style perimeter that could handle livestock access and vehicle gates. TimberLine ran a multi-span wood-and-post line with two wide pipe gates, careful post spacing over uneven grade, and hardware rated for rural use.',
    result: 'Long Span',
    tags: ['Ranch Fence', 'Pipe Gates', 'China Spring'],
    images: [
      { src: `${G}/5.png`, alt: 'Ranch-style fence line', caption: '' },
      { src: `${G}/7.png`, alt: 'Pipe gate installation', caption: '' },
    ],
  },
];

const vinylProjects: Project[] = [
  {
    id: 'hewitt-vinyl-privacy',
    title: 'Hewitt White Vinyl Privacy Fence',
    client: 'Private Residence',
    location: 'Hewitt, TX',
    category: 'Vinyl & Composite',
    year: '2025',
    duration: '3 days',
    shortDesc: 'Low-maintenance white vinyl privacy fence with matching double gate.',
    fullDesc: 'The homeowners wanted a clean look without annual staining. TimberLine installed a white vinyl privacy system with steel-reinforced posts, matching double driveway gate, and latch hardware that stays square in Texas heat. No paint, no reseal cycles.',
    result: 'Zero Maintenance',
    tags: ['Vinyl Privacy', 'Double Gate', 'Hewitt'],
    images: [
      { src: `${G}/ertret.png`, alt: 'White vinyl privacy fence', caption: '' },
      { src: `${G}/ewew.png`, alt: 'Vinyl double gate', caption: '' },
    ],
    featured: true,
  },
  {
    id: 'temple-composite-side-yard',
    title: 'Temple Composite Side-Yard Screen',
    client: 'Private Residence',
    location: 'Temple, TX',
    category: 'Vinyl & Composite',
    year: '2024',
    duration: '2 days',
    shortDesc: 'Composite screen panels for a narrow side yard between homes.',
    fullDesc: 'A tight Temple side yard needed privacy without eating usable width. TimberLine used slim composite screen panels on a steel post system, staying within property pins and matching the HOA color palette.',
    result: 'Tight-Lot Fit',
    tags: ['Composite', 'Side Yard', 'Temple'],
    images: [
      { src: `${G}/gythgnb.png`, alt: 'Composite side-yard screen', caption: '' },
    ],
  },
];

const deckProjects: Project[] = [
  {
    id: 'waco-covered-composite-deck',
    title: 'Waco Covered Composite Deck',
    client: 'Private Residence',
    location: 'Waco, TX',
    category: 'Deck Building',
    year: '2025',
    sqft: '420 sq ft',
    duration: '2 weeks',
    shortDesc: 'Covered composite deck with stairs, rail, and outdoor lighting prep.',
    fullDesc: 'Jake Thornton\'s crew built a covered composite deck for a Waco family that wanted year-round outdoor living. Scope included footings, framed structure, composite decking and fascia, code-compliant rail, stairs, and conduit prep for future lighting. Written schedule held through a wet week with one weather day built in.',
    result: 'On Schedule',
    tags: ['Composite Deck', 'Covered', 'Waco'],
    images: [
      { src: `${G}/htf.png`, alt: 'Covered composite deck exterior', caption: 'Completed deck' },
      { src: `${G}/iou.png`, alt: 'Deck rail and stairs', caption: '' },
    ],
    beforeImage: { src: `${G}/iytyuhn.png`, alt: 'Yard before deck build' },
    afterImage:  { src: `${G}/htf.png`, alt: 'Covered deck after build' },
    featured: true,
  },
  {
    id: 'killeen-multi-level-deck',
    title: 'Killeen Multi-Level Wood Deck',
    client: 'Private Residence',
    location: 'Killeen, TX',
    category: 'Deck Building',
    year: '2024',
    sqft: '380 sq ft',
    duration: '10 days',
    shortDesc: 'Two-level wood deck connecting house grade to a lower patio.',
    fullDesc: 'A sloped backyard needed usable outdoor space without a massive single platform. TimberLine designed a multi-level deck with clean transitions, hidden fasteners where specified, and railings that met local code on both levels.',
    result: 'Two Levels',
    tags: ['Multi-Level', 'Wood Deck', 'Killeen'],
    images: [
      { src: `${G}/jyfhtgb.png`, alt: 'Multi-level wood deck', caption: '' },
    ],
  },
];

const repairProjects: Project[] = [
  {
    id: 'bellmead-deck-resurfacing',
    title: 'Bellmead Deck Board Resurfacing',
    client: 'Private Residence',
    location: 'Bellmead, TX',
    category: 'Deck Repair',
    year: '2025',
    duration: '5 days',
    shortDesc: 'Full board replacement and joist sistering on a sun-damaged deck.',
    fullDesc: 'Rather than a full tear-down, TimberLine inspected structure, sistered weak joists, replaced all deck boards and fascia, and applied a high-UV stain system. Homeowners kept their existing footprint and saved roughly 40% versus a complete rebuild.',
    result: 'Saved Structure',
    tags: ['Resurfacing', 'Joist Repair', 'Bellmead'],
    images: [
      { src: `${G}/kgh.png`, alt: 'Resurfaced deck boards', caption: '' },
    ],
    beforeImage: { src: `${G}/liukj.png`, alt: 'Sun-damaged deck before' },
    afterImage:  { src: `${G}/kgh.png`, alt: 'Resurfaced deck after' },
  },
];

const gateProjects: Project[] = [
  {
    id: 'mcgregor-driveway-gate',
    title: 'McGregor Automated Driveway Gate',
    client: 'Private Residence',
    location: 'McGregor, TX',
    category: 'Gate Automation',
    year: '2025',
    duration: '1 week',
    shortDesc: 'Dual swing driveway gate with keypad, remote, and phone app access.',
    fullDesc: 'TimberLine built dual swing gates on reinforced posts, poured operator pads, and installed a commercial-grade opener with battery backup, keypad, and app control. Safety edges and photo eyes were included for vehicle and pedestrian protection.',
    result: 'App + Keypad',
    tags: ['Automation', 'Driveway Gate', 'McGregor'],
    images: [
      { src: `${G}/qwe.png`, alt: 'Automated driveway gate', caption: '' },
      { src: `${G}/rtet.png`, alt: 'Gate operator install', caption: '' },
    ],
    featured: true,
  },
];

const commercialProjects: Project[] = [
  {
    id: 'temple-commercial-perimeter',
    title: 'Temple Commercial Lot Perimeter',
    client: 'Local Commercial Property',
    location: 'Temple, TX',
    category: 'Commercial Fencing',
    year: '2025',
    duration: '3 weeks',
    shortDesc: 'Chain-link and privacy panel mix for a commercial storage lot.',
    fullDesc: 'A Temple property manager needed secure perimeter fencing with sections of privacy screening facing the street. TimberLine handled layout, permitting coordination, chain-link install, privacy slats where specified, and three commercial swing gates sized for delivery trucks.',
    result: 'Permit Ready',
    tags: ['Commercial', 'Chain-Link', 'Temple'],
    images: [
      { src: `${G}/sesrere.png`, alt: 'Commercial perimeter fence', caption: '' },
      { src: `${G}/uikhj.png`, alt: 'Commercial swing gate', caption: '' },
    ],
  },
  {
    id: 'waco-hoa-common-fence',
    title: 'Waco HOA Common-Area Fence Refresh',
    client: 'HOA Community',
    location: 'Waco, TX',
    category: 'Commercial Fencing',
    year: '2024',
    duration: '4 weeks',
    shortDesc: 'Phased HOA common-area fence replacement across three entrances.',
    fullDesc: 'An HOA board needed consistent materials and colors across three neighborhood entrances without blocking resident access for long stretches. TimberLine phased the work, matched existing profiles, and provided photo documentation for the board after each phase.',
    result: 'Phased Install',
    tags: ['HOA', 'Phased', 'Waco'],
    images: [
      { src: `${G}/umghtfn.png`, alt: 'HOA entrance fence', caption: '' },
    ],
  },
];

export const ALL_PROJECTS: Project[] = [
  ...woodProjects,
  ...vinylProjects,
  ...deckProjects,
  ...repairProjects,
  ...gateProjects,
  ...commercialProjects,
];

export const PROJECTS_BY_CATEGORY: Record<ProjectCategory, Project[]> = {
  'Wood Fencing': woodProjects,
  'Vinyl & Composite': vinylProjects,
  'Deck Building': deckProjects,
  'Deck Repair': repairProjects,
  'Gate Automation': gateProjects,
  'Commercial Fencing': commercialProjects,
};

export const CATEGORIES: ProjectCategory[] = [
  'Wood Fencing',
  'Vinyl & Composite',
  'Deck Building',
  'Deck Repair',
  'Gate Automation',
  'Commercial Fencing',
];

export function getProjectBySlug(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.id === slug);
}

export default ALL_PROJECTS;
