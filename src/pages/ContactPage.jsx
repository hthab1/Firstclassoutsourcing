import React, { useEffect } from "react";
//packages
import { motion } from "framer-motion";
import ContactFirstSection from "../sections/contact/ContactFirstSection";
import GeneralInquiriesSection from "../sections/contact/GeneralInquiriesSection";
//sections

function ContactPage() {
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
        <ContactFirstSection />
        <GeneralInquiriesSection />
    </motion.div>
  );
}

export default ContactPage;
