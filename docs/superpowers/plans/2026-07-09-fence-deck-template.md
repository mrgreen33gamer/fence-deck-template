# TimberLine Fence & Deck — Implementation Plan

## Rollout order

1. Design spec (this + specs/)
2. Brand tokens + root layout metadata/schema + package name
3. Header / Footer / WelcomePage / shared defaults (Guarantee, CTA, forms, etc.)
4. libs: reviews, blog-posts, projects
5. Homepage
6. Services index + 6 service pages; delete HVAC folders + all city subpages
7. Industries index + 3 industry pages; delete HVAC industry folders
8. Blogs index + 3 posts; delete HVAC blog folders
9. About / contact / service-areas / privacy / layouts
10. Projects page rebuild + `[slug]` case studies + ProjectCardGrid CTAs
11. sitemap / llms.txt / robots / admin chrome brand strings
12. Final grep (Arctic/HVAC leftovers) + `npm run typecheck`
13. Logical git commits

## Service page structure (mirror landscaping)

Breadcrumb → SectionIntro → TrustBar → WhatToExpect → WhyChooseUs →
ProcessTimeline → ImpactMetrics → Testimonials → GuaranteeSection →
LocalServiceAreas → ValueComparison → FAQ → CTABanner → ServiceCards → Form

## Cities (service-areas, schema, footer)

Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead

## Nav

Home · Services · Projects · Service Areas · Blog · About · Contact

## Commits (logical chunks)

1. docs: design spec + plan
2. brand: tokens, layout, chrome, forms, shared components
3. content: homepage, services, industries, blogs, about/contact/areas
4. projects: portfolio data + pages + card grid
5. polish: sitemap/llms, residual strings, typecheck
