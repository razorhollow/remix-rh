import { prisma } from '~/db.server';

export async function loader() {
  // Get all published blog posts
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    select: {
      slug: true,
      updatedAt: true,
    },
    orderBy: { updatedAt: 'desc' },
  });

  // Generate URLs for blog posts
  const blogUrls = posts.map(post => `
  <url>
    <loc>https://www.razorhollow.com/blog/${post.slug}</loc>
    <lastmod>${post.updatedAt.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.70</priority>
  </url>`).join('');

  const content = `
  <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
  
  <url>
    <loc>https://www.razorhollow.com/</loc>
    <lastmod>2024-05-23T16:37:12+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://www.razorhollow.com/about</loc>
    <lastmod>2024-05-23T16:37:12+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.razorhollow.com/services</loc>
    <lastmod>2024-05-23T16:37:12+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.razorhollow.com/contact</loc>
    <lastmod>2024-05-23T16:37:12+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.razorhollow.com/legal</loc>
    <lastmod>2024-05-23T16:37:12+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://www.razorhollow.com/blog</loc>
    <lastmod>${posts[0]?.updatedAt.toISOString() || '2024-05-23T16:37:12+00:00'}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.90</priority>
  </url>
  ${blogUrls}
  </urlset>
  `;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      "encoding": "UTF-8"
    }
  });
}