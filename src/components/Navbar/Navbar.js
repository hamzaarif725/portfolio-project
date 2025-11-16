import React, { useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "./Navbar.css";
import Hamzalogo from "../../assets/images/Hamzalogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setMenuOpen(false); // ✅ close menu after click
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      handleScroll('home');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Left Side */}
        <div className="navbar-left">
          <img
            src={Hamzalogo}
            alt="Logo"
            onClick={handleLogoClick}
            className="logo-img"
          />
          <span className="email">hamzaarifdev0@gmail.com</span>
        </div>

        {/* Right Side */}
        <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-menu">
            <li><button onClick={() => handleScroll("services")}>Services</button></li>
                        <li>
                        <Link 
                          to="/portfolio" 
                           className={`nav-portfolio-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
                            onClick={() => setMenuOpen(false)}
                                  >
                Portfolio
              </Link>
            </li>
            <li><button onClick={() => handleScroll("resume")}>Resume</button></li>
            <li><button onClick={() => handleScroll("skills")}>Skills</button></li>
            <li><button onClick={() => handleScroll("testimonials")}>Testimonials</button></li>
            <li><button onClick={() => handleScroll("contact")}>Contact</button></li>
            {/* Add Certificates link */}
            <li>
              <Link 
                to="/certificates" 
                className={`nav-certificates-link ${location.pathname === '/certificates' ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Certificates
              </Link>
            </li>
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