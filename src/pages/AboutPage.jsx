import React, { useEffect } from "react";
//packages
import { motion } from "framer-motion";
//sections
import WeAreSection from "../sections/about/WeAreSection";
import AboutSecondSection from "../sections/about/AboutSecondSection";
import VisionSection from "../sections/about/VisionSection";

function AboutPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <WeAreSection />
      <AboutSecondSection />
      <VisionSection />
    </motion.div>
  );
}

export default AboutPage;
