import React from "react";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import TrustedSection from "../sections/TrustedSection";

function HomePage() {
  return (
    <div>
        <HeroSection />
        <TrustedSection />
        <ServicesSection />
    </div>
  );
}

export default HomePage;
