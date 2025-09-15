import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Left Side */}
        <div className="navbar-left">
          <div className="logo">G</div>
          <a href="mailto:mail@gerolddesign.com" className="email">
            mail@gerolddesign.com
          </a>
        </div>

        {/* Right Side (Menu + Button together) */}
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
