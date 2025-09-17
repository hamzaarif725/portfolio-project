import React from "react";
import "./Navbar.css";
import Hamzalogo from "../../assets/images/Hamzalogo.png"; // ✅ adjust path based on your project

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Left Side */}
        <div className="navbar-left">
          <img  src={Hamzalogo} alt="Logo" className="logo-img" />
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
          <a href="/Home" className="hire-btn">Hire me!</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
