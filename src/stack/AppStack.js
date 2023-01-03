import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function AppStack() {
  return (
      <Router>
        <AppRoutes />
      </Router>
  );
}

export default AppStack;
