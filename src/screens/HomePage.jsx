import React from "react";
//sections
import EasyStepsSections from "../sections/EasyStepsSections";
import FAQ from "../sections/FAQ";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import TrustedSection from "../sections/TrustedSection";

function HomePage() {
  return (
    <div>
        <HeroSection />
        <TrustedSection />
        <ServicesSection />
        <EasyStepsSections />
        <FeaturesSection />
        <FAQ />
    </div>
  );
}

export default HomePage;
