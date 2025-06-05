import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { marked } from "marked";

import Clients from 'app/components/Clients'
import FeatureSection from 'app/components/FeatureSection'
import HeroSection from 'app/components/HeroSection'
import RecentBlogPosts from 'app/components/RecentBlogPosts'
import ServiceAreas from 'app/components/ServiceAreas'
import USP from 'app/components/USP'
import { prisma } from "~/db.server";
// import { useOptionalUser } from "~/utils";

export const loader = async () => {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 3, // Only get the 3 most recent posts
  });

  // Convert markdown to HTML for excerpts
  const postsWithHtml = posts.map(post => ({
    ...post,
    excerptHtml: marked(post.excerpt || post.content.slice(0, 200) + '...'),
  }));
  
  return json({ posts: postsWithHtml });
};

export const meta: MetaFunction = () => [
  { title: "Professional Film Production + Web Development | Upstate NY | Razorhollow" },
  { name: "description", content: "Complete digital storytelling for upstate NY businesses. Professional film production and custom web development designed together for measurable results. Serving Buffalo, Rochester, Syracuse, Elmira, Corning." },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://www.razorhollow.com"
  },
  // Additional SEO meta tags for local targeting
  { name: "keywords", content: "video production buffalo, film production rochester, corporate video syracuse, video production elmira corning, web development upstate ny, business video production southern tier, professional videographer western new york" },
  { name: "geo.region", content: "US-NY" },
  { name: "geo.placename", content: "Buffalo, Rochester, Syracuse, Elmira, Corning, Binghamton, New York" },
  { name: "ICBM", content: "42.5584, -77.0574" }, // Coordinates more central to your actual service area including Southern Tier
  // Open Graph tags for social sharing
  { property: "og:title", content: "Professional Film Production + Web Development | Razorhollow" },
  { property: "og:description", content: "Complete digital storytelling for upstate NY businesses. Film production and web development designed together for measurable results. Southern Tier to Western NY." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://www.razorhollow.com" },
  { property: "og:locale", content: "en_US" },
  // Twitter Card tags
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Professional Film Production + Web Development | Razorhollow" },
  { name: "twitter:description", content: "Complete digital storytelling for upstate NY businesses. Film production and web development designed together for measurable results. Southern Tier to Western NY." },
];

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();
  // const user = useOptionalUser();
  return (
    <>
    <Outlet />
    <HeroSection />
    <Clients />
    <USP />
    <FeatureSection />
    <ServiceAreas />
    <RecentBlogPosts posts={posts} />
    </>
  );
}
