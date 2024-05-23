export async function loader() {
  const content = `
  <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
  
  
  <url>
    <loc>https://razorhollow.com/</loc>
    <lastmod>2024-05-23T16:37:12+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://razorhollow.com/about</loc>
    <lastmod>2024-05-23T16:37:12+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://razorhollow.com/services</loc>
    <lastmod>2024-05-23T16:37:12+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://razorhollow.com/contact</loc>
    <lastmod>2024-05-23T16:37:12+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://razorhollow.com/services/web-development</loc>
    <lastmod>2024-05-23T16:37:12+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://razorhollow.com/services/video-production</loc>
    <lastmod>2024-05-23T16:37:12+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://razorhollow.com/services/marketing-strategy</loc>
    <lastmod>2024-05-23T16:37:12+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://razorhollow.com/services/photography</loc>
    <lastmod>2024-05-23T16:37:12+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://razorhollow.com/legal</loc>
    <lastmod>2024-05-23T16:37:12+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  
  
  </urlset>
  `
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      "encoding": "UTF-8"
    }
  })
}