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
    body: "Privacy, price, HOA rules, and heat all factor into the choice. Here's an honest comparison of wood and vinyl fencing for Waco-area properties.",
  },
  {
    type: 'cards',
    heading: "Wood vs. Vinyl Fencing: What Makes Sense for Central Texas",
    cards: [
      { icon: faTriangleExclamation, title: "Upfront Cost", body: "Wood usually costs less to install; vinyl packages cost more but avoid annual stain labor." },
      { icon: faHammer, title: "Maintenance", body: "Wood needs sealing/staining cycles. Vinyl needs occasional washing — no reseal schedule." },
      { icon: faShieldHalved, title: "Look & Customization", body: "Wood offers classic warmth and easy style matching. Vinyl offers clean, consistent lines." },
      { icon: faSun, title: "HOA Acceptance", body: "Both can pass — but approved colors and heights vary. Confirm before you order materials." },
      { icon: faRulerCombined, title: "Heat & Wind", body: "Both work in Texas when posts and hardware are installed correctly. Cheap installs fail first, not the material category." },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "There's no universal winner. The right fence is the one that matches your budget, maintenance tolerance, and HOA rules — installed correctly.",
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title={"Wood vs. Vinyl Fencing: What Makes Sense for Central Texas?"}
        description={"Privacy, price, HOA rules, and heat all factor into the choice. Here's an honest comparison of wood and vinyl fencing for Waco-area properties."}
        imageSrc={"/pages/blogs/wood-vs-vinyl.svg"}
        imageAlt={"Wood vs vinyl fencing comparison for Central Texas"}
        category={"Materials"}
        date={"April 10, 2026"}
        readTime={8}
      />
      <BlogBody sections={sections} />
      <RelatedLinks
        links={[
          { href: "/services/wood-fencing", text: "Wood Fencing" },
          { href: "/services/vinyl-composite-fencing", text: "Vinyl & Composite Fencing" },
        ]}
      />
      <BlogCTA
        title={"Still Deciding Between Wood and Vinyl?"}
        body={"We'll walk your property and price both options with a free on-site estimate."}
        buttonText="Get Free Estimate"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot={"wood-vs-vinyl-fencing-central-texas-blog"} />
    </>
  );
}
