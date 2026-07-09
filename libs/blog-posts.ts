// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'signs-your-fence-needs-repair-or-replacement-waco-tx',
    title:    '5 Signs Your Fence Needs Repair or Replacement (Waco, TX)',
    excerpt:  'Leaning posts, soft wood, and failing gates rarely fix themselves. Here are the five signs Central Texas homeowners should watch for before a small repair becomes a full rebuild.',
    category: 'Fence Care',
    date:     'April 18, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/fence-repair-signs.svg',
    imageAlt: 'Signs your fence needs repair or replacement in Waco, TX',
    featured: true,
  },
  {
    slug:     'how-often-should-you-reseal-your-deck-texas',
    title:    'How Often Should You Reseal Your Deck in Central Texas?',
    excerpt:  "Texas sun and sudden storms chew through deck finishes. Here's a practical reseal schedule for wood and composite decks around Waco — and what happens if you wait too long.",
    category: 'Deck Care',
    date:     'April 14, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/deck-reseal-timing.svg',
    imageAlt: 'Deck resealing schedule guide for Central Texas homes',
  },
  {
    slug:     'wood-vs-vinyl-fencing-central-texas',
    title:    'Wood vs. Vinyl Fencing: What Makes Sense for Central Texas?',
    excerpt:  "Privacy, price, HOA rules, and heat all factor into the choice. Here's an honest comparison of wood and vinyl fencing for Waco-area properties.",
    category: 'Materials',
    date:     'April 10, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/wood-vs-vinyl.svg',
    imageAlt: 'Wood vs vinyl fencing comparison for Central Texas',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
