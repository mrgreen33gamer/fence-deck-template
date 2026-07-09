'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import RelatedLinks from '#/BlogComponents/RelatedLinks/RelatedLinks';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faTriangleExclamation, faHammer, faShieldHalved, faSun, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Texas sun and sudden storms chew through deck finishes. Here's a practical reseal schedule for wood decks around Waco — and what happens if you wait too long.",
  },
  {
    type: 'cards',
    heading: "How Often Should You Reseal Your Deck in Central Texas",
    cards: [
      { icon: faTriangleExclamation, title: "Full-Sun Decks: Often Every 12–18 Months", body: "South- and west-facing decks fade and dry out fastest; water-bead tests fail sooner." },
      { icon: faHammer, title: "Partial Shade: Often Every 18–36 Months", body: "Trees help, but leaf debris and moisture still break finishes down." },
      { icon: faShieldHalved, title: "Watch for Gray Fibers and Splinters", body: "When the surface feels fuzzy or splinters appear, the finish is no longer protecting the wood." },
      { icon: faSun, title: "Don't Seal Over Soft Boards", body: "Resealing won't fix rot. Soft spots need board or joist repair first." },
      { icon: faRulerCombined, title: "Composite Still Needs Care", body: "Composite skips stain cycles but still benefits from cleaning and fastener checks." },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "If water no longer beads and the wood looks uniformly gray, you're overdue. A timely reseal costs less than a resurfacing project.",
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title={"How Often Should You Reseal Your Deck in Central Texas?"}
        description={"Texas sun and sudden storms chew through deck finishes. Here's a practical reseal schedule for wood decks around Waco — and what happens if you wait too long."}
        imageSrc={"/pages/blogs/deck-reseal-timing.svg"}
        imageAlt={"Deck resealing schedule guide for Central Texas homes"}
        category={"Deck Care"}
        date={"April 14, 2026"}
        readTime={6}
      />
      <BlogBody sections={sections} />
      <RelatedLinks
        links={[
          { href: "/services/deck-repair-resurfacing", text: "Deck Repair & Resurfacing" },
          { href: "/services/deck-building", text: "Deck Building" },
        ]}
      />
      <BlogCTA
        title={"Deck Looking Tired?"}
        body={"Book a free deck inspection — repair, reseal guidance, or resurfacing options."}
        buttonText="Get Free Estimate"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot={"how-often-should-you-reseal-your-deck-texas-blog"} />
    </>
  );
}
