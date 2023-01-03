import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../screens/HomePage";

function AppRoutes() {
  const location = useLocation();

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ position: "relative" }}
    >
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AppRoutes;
