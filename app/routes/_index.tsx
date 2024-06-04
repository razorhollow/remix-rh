import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import Clients from 'app/components/Clients'
import FeatureSection from 'app/components/FeatureSection'
import HeroSection from 'app/components/HeroSection'
import USP from 'app/components/USP'
// import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [
  { title: "Razor Hollow: Outdoor Brand Development & Marketing" },
  { name: "description", content: "Razor Hollow: Leading outdoor brand development through web design, marketing strategy, video production, and photography. Elevate your outdoor business with us."},
  {
    tagName: "link",
    rel: "canonical",
    href: "https://razorhollow.com"
  },
];

export default function Index() {
  // const user = useOptionalUser();
  return (
    <>
    <Outlet />
    <HeroSection />
    <Clients />
    <USP />
    <FeatureSection />
    </>
  );
}
