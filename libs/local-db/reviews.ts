// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for TimberLine Fence & Deck — used by Testimonials,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Wood Fencing',
    text:     "TimberLine replaced our entire back privacy fence after a storm. Posts set in concrete, straight lines, and they cleaned up every scrap. The written quote matched the final invoice to the dollar.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Deck Building',
    text:     "Our composite deck looks better than we imagined. Jake walked us through material options, HOA specs, and rail choices without pressure. Crew was on time every day and finished a day early.",
  },
  {
    name:     'David R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Vinyl & Composite Fencing',
    text:     "Went with white vinyl for low maintenance. Install was clean, gates swing true, and the HOA signed off on the first inspection. Exactly the professional job we wanted.",
  },
  {
    name:     'Patricia M.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Deck Repair & Resurfacing',
    text:     "They rescued a 15-year-old deck that two other companies said to tear out. New boards, solid joists, and a stain that still looks great through a Texas summer.",
  },
  {
    name:     'James O.',
    location: 'Killeen, TX',
    rating:   4,
    date:     'November 2025',
    service:  'Gate Automation',
    text:     "Automatic driveway gate with keypad and phone app. Install took one day after the post work cured. A few extra days for the concrete set, but communication was clear the whole way.",
  },
  {
    name:     'Linda B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Commercial Fencing',
    text:     "Chain-link and privacy panels for our small commercial lot. Permits handled, schedule held, and the site was left broom-clean. We'll use TimberLine for the expansion phase too.",
  },
  {
    name:     'Chris H.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Wood Fencing',
    text:     "Ranch-style fence along a long property line. Posts plumb, gates level, and they even worked around our irrigation heads carefully. Highly recommend for larger rural installs.",
  },
  {
    name:     'Angela P.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Deck Building',
    text:     "Covered deck with stairs and railings for our backyard. Kids use it every day. TimberLine's 3-year workmanship warranty made the decision easy.",
  },
];

export default reviews;
