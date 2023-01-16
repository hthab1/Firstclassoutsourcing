import React from "react";
//sections
import EasyStepsSections from "../sections/EasyStepsSections";
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
    </div>
  );
}

export default HomePage;
