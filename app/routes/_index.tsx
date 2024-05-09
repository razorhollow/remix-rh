import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import Clients from 'app/components/Clients'
import FeatureSection from 'app/components/FeatureSection'
import HeroSection from 'app/components/HeroSection'
import USP from 'app/components/USP'
// import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Razor Hollow" }];

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
