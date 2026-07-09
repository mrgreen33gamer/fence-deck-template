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
    body: "Leaning posts, soft wood, and failing gates rarely fix themselves. Here are the five signs Central Texas homeowners should watch for before a small repair becomes a full rebuild.",
  },
  {
    type: 'cards',
    heading: "5 Signs Your Fence Needs Repair or Replacement",
    cards: [
      { icon: faTriangleExclamation, title: "Leaning or Wobbly Posts", body: "Posts that move when you push the fence usually mean the set failed or wood is rotting at the ground line." },
      { icon: faHammer, title: "Soft or Splintered Boards", body: "Texas UV and moisture create soft spots that fail safety and privacy long before the whole line looks 'done'." },
      { icon: faShieldHalved, title: "Gates That Won't Latch", body: "Sagging gates are often a post or hinge problem — fixing early is cheaper than replacing the opening later." },
      { icon: faSun, title: "Soil Heave Gaps at the Bottom", body: "Clay soils shift. Growing gaps invite pets out and pests in; panel adjustments or rebuilds may be needed." },
      { icon: faRulerCombined, title: "Storm Damage Beyond a Few Pickets", body: "If multiple bays are twisted or posts are snapped, a sectional rebuild is usually the lasting fix." },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Caught early, many issues are sectional repairs. Waiting through another Central Texas storm season often means a longer line and a bigger bill.",
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title={"5 Signs Your Fence Needs Repair or Replacement (Waco, TX)"}
        description={"Leaning posts, soft wood, and failing gates rarely fix themselves. Here are the five signs Central Texas homeowners should watch for before a small repair becomes a full rebuild."}
        imageSrc={"/pages/blogs/fence-repair-signs.svg"}
        imageAlt={"Signs your fence needs repair or replacement in Waco, TX"}
        category={"Fence Care"}
        date={"April 18, 2026"}
        readTime={7}
      />
      <BlogBody sections={sections} />
      <RelatedLinks
        links={[
          { href: "/services/wood-fencing", text: "Wood Fencing" },
          { href: "/services/deck-repair-resurfacing", text: "Deck Repair & Resurfacing" },
        ]}
      />
      <BlogCTA
        title={"See Any of These Signs?"}
        body={"Get a free on-site fence assessment from TimberLine Fence & Deck."}
        buttonText="Get Free Estimate"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot={"signs-your-fence-needs-repair-or-replacement-waco-tx-blog"} />
    </>
  );
}
