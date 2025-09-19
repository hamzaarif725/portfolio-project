import React from "react";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      {/* ✅ Navbar always fixed at top */}
      <Navbar />

      {/* ✅ Regular scroll container (no locomotive) */}
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
