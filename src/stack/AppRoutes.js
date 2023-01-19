import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
//pages
import Footer from "../components/header&footer/Footer";
import Header from "../components/header&footer/Header";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import Question1Page from "../pages/Question1Page";
import Question2Page from "../pages/Question2Page";

function AppRoutes() {
  const location = useLocation();

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ position: "relative" }}
    >
      <AnimatePresence exitBeforeEnter>
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/question1" element={<Question1Page />} />
          <Route path="/question2" element={<Question2Page />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default AppRoutes;
