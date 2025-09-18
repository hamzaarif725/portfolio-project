import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
    });

    // Make scroll instance available globally
    window.locomotiveScroll = scroll;

    return () => {
      if (window.locomotiveScroll) {
        window.locomotiveScroll.destroy();
        window.locomotiveScroll = null;
      }
    };
  }, []);

  return (
    <>
      {/* ✅ Navbar OUTSIDE locomotive container */}
      <Navbar />

      {/* ✅ Locomotive applies only here */}
      <div data-scroll-container>
        <Home />
      </div>
    </>
  );
}

export default App;
