import React from "react";
//sections
import EasyStepsSections from "../sections/EasyStepsSections";
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
    </div>
  );
}

export default HomePage;
