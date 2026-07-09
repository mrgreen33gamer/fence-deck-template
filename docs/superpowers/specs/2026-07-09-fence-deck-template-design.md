# Fence & Deck Builder Template — Design

## Origin

`fence-deck-template` is a full mirror of `hvac-template` (Arctic Air HVAC),
re-skinned as **TimberLine Fence & Deck** — a Central Texas fence and deck
builder listing. Sibling references: `landscaping-template` (no city SEO
subpages, clean service/industry structure), `construction-hub-template`
(projects portfolio pattern), and `pressure-washing-template`.

## Business identity (locked)

| Field | Value |
|---|---|
| Name | TimberLine Fence & Deck |
| Tagline | Fences & Decks Built to Last — Central Texas Quality |
| Founded | 2012 · Owner: Jake Thornton |
| HQ | Waco, TX |
| Cities | Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead |
| Phone | (254) 753-6400 / `tel:+12547536400` |
| Email | hello@timberlinefencedeck.com |
| Domain | timberlinefencedeck.com |
| Address | 3501 S Valley Mills Dr, Waco, TX 76711 |
| Credentials | Licensed & Insured Fence/Deck Contractor |
| Guarantee | 3-Year Workmanship Warranty |
| Social proof | 4.9★ · 510+ reviews · 3,400+ fences & decks installed |
| Accent | Forest green `#15803d` (deeper than landscaping `#16a34a`) |

## What stays untouched

- Admin dashboard UI/logic (generic labels)
- Tracking APIs, auth, contact submit pipeline
- Component architecture and folder conventions
- Three-font system (Barlow Condensed / Outfit / Inter aliases)

## What changes

### Brand tokens (`globalVariables.scss`)

- Navy+orange → deep timber/forest palette
- Primary accent: `$green: #15803d` (forest), light `#22c55e`, dark `#14532d`
- Obsidian base: deep forest `#0c1a12` / `#14261c`
- Greys: forest-tinted
- `$orange` aliases point at green for legacy components

### Services (6 pages; **no per-city SEO subpages**)

| HVAC | Fence & Deck |
|---|---|
| ac-repair | wood-fencing |
| heating | vinyl-composite-fencing |
| installation | deck-building |
| duct-cleaning | deck-repair-resurfacing |
| indoor-air-quality | gate-automation |
| maintenance | commercial-fencing |

### Industries (3 pages)

| HVAC | Fence & Deck |
|---|---|
| automotive | residential-builders |
| manufacturing | property-management |
| oil-gas | hoa-communities |

### Blogs (3 posts)

| HVAC | Fence & Deck |
|---|---|
| heat-pump-vs-traditional-hvac-texas | wood-vs-vinyl-fencing-central-texas |
| how-often-should-you-replace-hvac-filter | how-often-should-you-reseal-your-deck-texas |
| signs-ac-needs-replacement-waco-tx | signs-your-fence-needs-repair-or-replacement-waco-tx |

### Projects (KEEP + rebuild)

Portfolio gallery is core for this trade. Rebuild `libs/local-db/projects.ts`
and `/projects` (plus case-study `[slug]` route from construction-hub pattern)
for fence/deck installs: wood privacy, vinyl, decks, gates, commercial, HOA.
Use gallery placeholders under `/public/projects/gallery/` until real photos.

### Locale

Central Texas; cities listed above. **No city subpages** under services.

### Images

Blog SVGs / labeled placeholders. Gallery reuses existing project gallery assets
with fence/deck copy.

## Out of scope

- Real photography
- New Mongo credentials
- Admin feature work
- New page types beyond HVAC + projects case studies
