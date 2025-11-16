import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Certificates from "./components/Certificates/Certificates";
import Portfolio from "./components/Portfolio/Portfolio";

import "./App.css";

function App() {
  return (
    <Router>
      {/* ✅ Navbar always fixed at top */}
      <Navbar />

      {/* ✅ Regular scroll container with routing */}
      <div>
        <Routes>
          {/* Home page route - shows HeroSection + Certificates + Footer */}
          <Route path="/" element={<Home />} />
          
          {/* Dedicated Certificates page - shows only certificates */}
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;