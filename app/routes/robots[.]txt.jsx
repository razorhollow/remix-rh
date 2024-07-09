export const loader = () => {
  const robotText = `
User-agent: *
Disallow: /dashboard
Disallow: /healthcheck
Disallow: /logout
Disallow: /login
Disallow: /notes
Disallow: /send
Disallow: /test

Sitemap: https://www.razorhollow.com/sitemap.xml
  `;
  
  return new Response(robotText.trim(), {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
