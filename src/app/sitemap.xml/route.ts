// src/app/sitemap.xml/route.ts
// TimberLine Fence & Deck — XML Sitemap
import { NextResponse } from 'next/server';
import { getAllPosts } from '&/blog-posts';
import ALL_PROJECTS from '&/local-db/projects';

export const revalidate = 0;

export async function GET() {
  const baseUrl = 'https://www.timberlinefencedeck.com';
  const today   = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/',               priority: '1.0',  changefreq: 'weekly'  },
    { url: '/about',          priority: '0.9',  changefreq: 'monthly' },
    { url: '/services',       priority: '0.9',  changefreq: 'weekly'  },
    { url: '/projects',       priority: '0.9',  changefreq: 'weekly'  },
    { url: '/industries',     priority: '0.85', changefreq: 'monthly' },
    { url: '/service-areas',  priority: '0.85', changefreq: 'monthly' },
    { url: '/contact',        priority: '0.8',  changefreq: 'monthly' },
    { url: '/blogs',          priority: '0.7',  changefreq: 'weekly'  },
    { url: '/privacy-policy', priority: '0.4',  changefreq: 'yearly'  },
  ];

  const coreServices = [
    { url: '/services/wood-fencing',            priority: '0.95', changefreq: 'weekly'  },
    { url: '/services/vinyl-composite-fencing', priority: '0.90', changefreq: 'weekly'  },
    { url: '/services/deck-building',           priority: '0.90', changefreq: 'weekly'  },
    { url: '/services/deck-repair-resurfacing', priority: '0.85', changefreq: 'monthly' },
    { url: '/services/gate-automation',         priority: '0.85', changefreq: 'monthly' },
    { url: '/services/commercial-fencing',      priority: '0.85', changefreq: 'monthly' },
  ];

  const industries = [
    { url: '/industries/residential-builders', priority: '0.80', changefreq: 'monthly' },
    { url: '/industries/property-management',  priority: '0.80', changefreq: 'monthly' },
    { url: '/industries/hoa-communities',      priority: '0.80', changefreq: 'monthly' },
  ];

  const blogPages = getAllPosts().map((post) => ({
    url: `/blogs/${post.slug}`,
    priority: '0.70',
    changefreq: 'monthly',
  }));

  const projectPages = ALL_PROJECTS.map((p) => ({
    url: `/projects/${p.id}`,
    priority: '0.75',
    changefreq: 'monthly',
  }));

  const allPages = [
    ...staticPages,
    ...coreServices,
    ...industries,
    ...blogPages,
    ...projectPages,
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  allPages.forEach(({ url, priority, changefreq }) => {
    xml += `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
  });

  xml += '</urlset>';

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
    },
  });
}
