import React, { useState } from "react";
import "./Navbar.css";
import Hamzalogo from "../../assets/images/Hamzalogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMenuOpen(false); // ✅ close menu after click
  };

  return (
    <nav className="navbar">
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
          <button onClick={() => handleScroll("hire")} className="hire-btn">
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
