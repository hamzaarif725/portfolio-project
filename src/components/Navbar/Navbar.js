import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Hamzalogo from "../../assets/images/Hamzalogo.png"; // ✅ adjust path if needed

const Navbar = () => {
 const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Left Side */}
        <div className="navbar-left">
          <img src={Hamzalogo} alt="Logo" className="logo-img" />
          <a href="mailto:hamzaarifdev0@gmail.com" className="email">
            hamzaarifdev0@gmail.com
          </a>
        </div>

        {/* Right Side (Menu + Button) */}
        <div className="navbar-right">
          <ul className="navbar-menu">
            <li><a href="#services">Services</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#hire" className="hire-btn">Hire me!</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
