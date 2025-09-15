import React from "react";
import "./HeroSection.css";
import profilePic from "../../assets/images/profile.jpg"; // Replace with your image
import { FaFacebookF, FaLinkedinIn, FaDribbble, FaGithub, FaDownload } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="hero-page">
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="hero-container">
          {/* Left Text Section */}
          <div className="hero-text">
            <p className="intro">I am Hamza</p>
            <h1 className="main-role">
              Visual Artist + <br/>
              Web Developer
            </h1>
            <p className="description">
              I break down complex user experience problems to create integrity focussed solutions that connect billions of people
            </p>

            <div className="cta-section">
              <a href="#cv" className="download-cv">
                <FaDownload className="download-icon" />
                Download CV
              </a>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-icon">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="social-icon">
                  <FaDribbble />
                </a>
                <a href="#" className="social-icon">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Right Profile Section */}
          <div className="hero-image-wrapper">
            <div className="profile-card">
              <img src={profilePic} alt="Hamza" className="profile-image" />
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">7+</div>
            <div className="stat-label">
              <span>Years of</span>
              <span>Experience</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">
              <span>Project</span>
              <span>Completed</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1.5K</div>
            <div className="stat-label">
              <span>Happy</span>
              <span>Clients</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-number">7+</div>
            <div className="stat-label">
              <span>Years of</span>
              <span>Experience</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}