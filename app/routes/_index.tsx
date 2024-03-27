import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import Clients from 'app/components/Clients'
import FeatureSection from 'app/components/FeatureSection'
import HeroSection from 'app/components/HeroSection'
import NavBar from 'app/components/NavBar'
import USP from 'app/components/USP'
import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Razor Hollow" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
    <NavBar />
    <HeroSection />
    <Clients />
    <USP />
    <FeatureSection />
    </>
  );
}
