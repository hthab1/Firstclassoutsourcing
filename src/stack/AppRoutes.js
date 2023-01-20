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
import Question3Page from "../pages/Question3Page";
import ThankyouPage from "../pages/ThankyouPage";

function AppRoutes() {
  const location = useLocation();

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ position: "relative" }}
    >
      <AnimatePresence exitBeforeEnter>
        <div className="fixed w-full z-50 top-0">
          <Header />
        </div>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/question1" element={<Question1Page />} />
          <Route path="/question2" element={<Question2Page />} />
          <Route path="/question3" element={<Question3Page />} />
          <Route path="/thankyou" element={<ThankyouPage />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default AppRoutes;
