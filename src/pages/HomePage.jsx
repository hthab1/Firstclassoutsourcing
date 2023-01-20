import React, { useEffect, useRef } from "react";
//packages
import { motion } from "framer-motion";
//sections
import EasyStepsSections from "../sections/home/EasyStepsSections";
import FAQ from "../sections/home/FAQ";
import FeaturesSection from "../sections/home/FeaturesSection";
import HeroSection from "../sections/home/HeroSection";
import OurMissionSection from "../sections/home/OurMissionSection";
import ServicesSection from "../sections/home/ServicesSection";
import TrustedSection from "../sections/home/TrustedSection";
//custom components
import { useStateValue } from "../StateProvider";

function HomePage() {
  const { state, dispatch } = useStateValue();
  const servicesRef = useRef();
  const featuresRef = useRef();

  useEffect(() => {
    window.scroll(0, 0);
    if (state?.active === "services") {
      setTimeout(() => {
        servicesRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (state?.active === "features") {
      setTimeout(() => {
        featuresRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    dispatch({
      type: "SET_ACTIVE",
      active: "home",
    });
  }, [state?.active, dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <HeroSection />
      <TrustedSection />
      <div className="w-full" ref={servicesRef}>
        <ServicesSection />
      </div>
      <EasyStepsSections />
      <div className="w-full" ref={featuresRef}>
        <FeaturesSection />
      </div>
      <FAQ />
      <OurMissionSection />
    </motion.div>
  );
}

export default HomePage;
