import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.08, // lower = smoother (0.05–0.1 is best)
      multiplier: 1, // scroll speed
    });

    return () => {
      scroll.destroy(); // cleanup on unmount
    };
  }, []);

  return (
    <div data-scroll-container>
      <Home />
    </div>
  );
}

export default App;
