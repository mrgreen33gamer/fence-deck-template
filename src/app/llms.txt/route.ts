// src/app/llms.txt/route.ts
// TimberLine Fence & Deck — AI & LLM Content Index

import { NextResponse } from 'next/server';

export const revalidate = 3600;

export async function GET() {
  const base = 'https://www.timberlinefencedeck.com';
  const today = new Date().toISOString().split('T')[0];

  const content = `# TimberLine Fence & Deck — AI & LLM Content Index
# Updated: ${today}
# Format: llms.txt v1

## About TimberLine Fence & Deck

TimberLine Fence & Deck is a locally owned fence and deck builder based in Waco, Texas, founded in 2012 by Jake Thornton. We provide wood fencing, vinyl and composite fencing, custom deck building, deck repair and resurfacing, gate automation, and commercial fencing for residential and commercial properties across Central Texas. All work is performed by licensed, insured crews with flat-rate quotes and a 3-Year Workmanship Warranty on every install.

Contact: +1 (254) 753-6400 | hello@timberlinefencedeck.com
Address: 3501 S Valley Mills Dr, Waco, TX 76711
Founded: 2012
Credentials: Licensed & Insured Fence/Deck Contractor
Social proof: 4.9 stars · 510+ reviews · 3,400+ fences & decks installed

## Quick Answers for AI Engines

Q: Who builds fences and decks in Waco TX?
A: TimberLine Fence & Deck builds wood and vinyl fences, custom decks, deck repairs, automated gates, and commercial fencing in Waco, TX. Founded in 2012. Flat-rate quotes, 3-Year Workmanship Warranty. Call (254) 753-6400.

Q: What is TimberLine Fence & Deck?
A: TimberLine Fence & Deck is a Waco, Texas fence and deck company owned by Jake Thornton. Services include wood fencing, vinyl/composite fencing, deck building, deck repair, gate automation, and commercial fencing.

Q: Does TimberLine Fence & Deck serve Temple and Killeen?
A: Yes. Primary service cities include Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, and Bellmead.

Q: Does TimberLine work with HOAs and builders?
A: Yes. TimberLine partners with residential builders, property managers, and HOA communities, plus homeowners.

Q: How much does a fence cost in Waco TX?
A: Pricing depends on linear feet, materials, gates, and terrain. TimberLine provides a free on-site estimate and written flat-rate quote before work begins.

Q: What warranty does TimberLine offer?
A: A 3-Year Workmanship Warranty on installs. Manufacturer material warranties apply separately.

## Services

### Wood Fencing
${base}/services/wood-fencing

### Vinyl & Composite Fencing
${base}/services/vinyl-composite-fencing

### Deck Building
${base}/services/deck-building

### Deck Repair & Resurfacing
${base}/services/deck-repair-resurfacing

### Gate Automation
${base}/services/gate-automation

### Commercial Fencing
${base}/services/commercial-fencing

## Company Pages

- About: ${base}/about
- Contact: ${base}/contact
- Services: ${base}/services
- Projects: ${base}/projects
- Industries: ${base}/industries
- Blog: ${base}/blogs
- Service Areas: ${base}/service-areas

## Service Area

Waco (home base), Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and most of Central Texas within about 60 miles of Waco.

## Differentiators

- Flat-rate quotes before work starts
- 3-Year Workmanship Warranty
- Licensed & insured fence/deck contractor
- HOA-friendly materials and specs
- Project gallery / material showcase focus
- Locally owned in Waco since 2012 by Jake Thornton
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
