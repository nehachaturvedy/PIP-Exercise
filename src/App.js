import React, { useState } from "react";
import TopBar from "./components/TopBar";
import MainNavigation from "./components/MainNavigation";
import MobileMenu from "./components/MobileMenu";
import SecondaryNavigation from "./components/SecondaryNavigation";
import Breadcrumb from "./components/Breadcrumb";
import HeroSection from "./components/HeroSection";
import CollectionCenters from "./components/CollectionCenters";
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <TopBar />
      <MainNavigation
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      {isMobileMenuOpen && <MobileMenu />}
      <SecondaryNavigation />
      <Breadcrumb />
      <HeroSection />

      <CollectionCenters />
    </>
  );
}
