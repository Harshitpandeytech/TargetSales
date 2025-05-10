import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import CustomerSegmentationDashboard from "./CustomerSegmentationDashboard";



const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/segmentation-page" element={<CustomerSegmentationDashboard />} />
      </Routes>
    </Router>

  );
};

export default App;
