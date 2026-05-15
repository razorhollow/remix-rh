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
  { title: "Commercial Video Packages | Upstate NY | Razorhollow" },
  { name: "description", content: "Premium commercial video production for Upstate NY businesses. Choose Visibility, Growth, or Authority packages for campaigns that drive leads and trust." },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://www.razorhollow.com"
  },
  // Additional SEO meta tags for local targeting
  { name: "keywords", content: "commercial video packages, video production buffalo, brand film rochester, business video syracuse, vertical video southern tier" },
  { name: "geo.region", content: "US-NY" },
  { name: "geo.placename", content: "Buffalo, Rochester, Syracuse, Elmira, Corning, Binghamton, New York" },
  { name: "ICBM", content: "42.5584, -77.0574" }, // Coordinates more central to your actual service area including Southern Tier
  // Open Graph tags for social sharing
  { property: "og:title", content: "Commercial Video Packages | Razorhollow" },
  { property: "og:description", content: "Commercial video packages for upstate NY businesses. Visibility, Growth, and Authority plans built for measurable marketing outcomes." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://www.razorhollow.com" },
  { property: "og:locale", content: "en_US" },
  // Twitter Card tags
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Commercial Video Packages | Razorhollow" },
  { name: "twitter:description", content: "Commercial video packages for upstate NY businesses. Visibility, Growth, and Authority plans built for measurable marketing outcomes." },
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
