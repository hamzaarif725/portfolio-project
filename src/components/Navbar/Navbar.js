import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Hamzalogo from "../../assets/images/Hamzalogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scroll = window.locomotiveScroll;

    if (scroll) {
      scroll.on("scroll", (args) => {
        if (args.scroll.y > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      });
    }

    return () => {
      if (scroll) scroll.off("scroll");
    };
  }, []);

  const handleScroll = (id) => {
    const scroll = window.locomotiveScroll;
    const target = document.getElementById(id);

    if (scroll && target) {
      scroll.scrollTo(target, {
        offset: -90, // ✅ account for smaller navbar height
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0],
        disableLerp: true, // ✅ fixes iOS/Android smooth scroll issue
      });
    }
    setMenuOpen(false); // ✅ close menu after clicking
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Left Side */}
        <div className="navbar-left">
          <img
            src={Hamzalogo}
            alt="Logo"
            onClick={() => handleScroll("home")}
            className="logo-img"
          />
          <span className="email">hamzaarifdev0@gmail.com</span>
        </div>

        {/* Right Side */}
        <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-menu">
            <li><button onClick={() => handleScroll("services")}>Services</button></li>
            <li><button onClick={() => handleScroll("works")}>Works</button></li>
            <li><button onClick={() => handleScroll("resume")}>Resume</button></li>
            <li><button onClick={() => handleScroll("skills")}>Skills</button></li>
            <li><button onClick={() => handleScroll("testimonials")}>Testimonials</button></li>
            <li><button onClick={() => handleScroll("contact")}>Contact</button></li>
          </ul>
          <button onClick={() => handleScroll("home")} className="hire-btn">
            Hire me!
          </button>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
