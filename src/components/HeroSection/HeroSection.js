import React from "react";
import "./HeroSection.css";
import profilePic from "../../assets/images/profile2.png"; // Replace with your image
import { FaLinkedinIn, FaGithub, FaDownload, FaYoutube } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";


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
              Visual Artist + <br />
              Web Developer
            </h1>
            <p className="description">
              Specialized in Post Production, Motion Graphics, and Full-Stack Web Development
            </p>

            <div className="cta-section">
              <a href="/Hamza_CV.pdf" className="download-cv">
                <FaDownload className="download-icon" />
                Download CV
              </a>
              <div className="social-icons">
                <a href="https://www.fiverr.com/s/VYeDdN5" className="social-icon">
                    <TbBrandFiverr />
                </a>
                <a href="https://www.linkedin.com/in/hamza-arif-1712251ba/" className="social-icon">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.youtube.com/@hamzaarif222" className="social-icon">
                  <FaYoutube />
                </a>
                <a href="https://github.com/hamzaarif725" className="social-icon">
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
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2.5K</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1.5K</div>
            <div className="stat-label">Satisfied Clients</div>
          </div>
        </div>
      </section>




































{/* Services Section */}
<section className="services-section">
  <div className="services-header">
    <h2>My Quality Services</h2>
    <p>
      I put your ideas and wishes in the form of unique projects that inspire 
      you and your customers.
    </p>
  </div>

  <div className="services-list">
    <div className="service-item">
      <span className="service-number">01</span>
      <h3>Post Production</h3>
      <p>
        High-quality video editing, color grading, sound design, and visual 
        enhancements tailored for films, ads, and digital platforms.
      </p>
      <span className="service-arrow">↗</span>
    </div>

    <div className="service-item">
      <span className="service-number">02</span>
      <h3>Graphics Design</h3>
      <p>
        Creating modern and impactful visuals, branding, and marketing 
        materials that capture attention and communicate your vision.
      </p>
      <span className="service-arrow">↗</span>
    </div>

    <div className="service-item">
      <span className="service-number">03</span>
      <h3>Web Development</h3>
      <p>
        Building responsive, fast, and scalable websites with seamless 
        user experiences using modern frameworks and tools.
      </p>
      <span className="service-arrow">↗</span>
    </div>

    <div className="service-item">
      <span className="service-number">04</span>
      <h3>Social Media Management</h3>
      <p>
        Managing social presence, creating engaging content strategies, 
        and growing communities across all major platforms.
      </p>
      <span className="service-arrow">↗</span>
    </div>
  </div>
</section>

































{/* Resume Section */}
<section className="resume-section">
  <div className="resume-container">

    {/* Experience Column */}
    <div className="resume-column">
          <h2 className="resume-heading">
           <img src="/verified.png" alt="experience icon" className="resume-custom-icon" />
            My Experience
           </h2>

      <div className="resume-card">
        <span className="resume-date">2025 – Present</span>
        <h3 className="resume-role">POST PRODUCTION EDITOR</h3>
        <p className="resume-org">Bitar Cosmetic Surgery Institute · Remote, Virginia, USA</p>
      </div>

      <div className="resume-card">
        <span className="resume-date">2017 – Present</span>
        <h3 className="resume-role">VIDEO EDITOR</h3>
        <p className="resume-org">Fiverr · Remote, Global clients</p>
      </div>

      <div className="resume-card">
        <span className="resume-date">2023 – 2025</span>
        <h3 className="resume-role">DESIGN ENGINEER</h3>
        <p className="resume-org">Aeronex Solar Power · Hybrid, Pakistan</p>
      </div>

      <div className="resume-card">
        <span className="resume-date">2021 – 2023</span>
        <h3 className="resume-role">LEAD DESIGNER</h3>
        <p className="resume-org">Ayesha Traders Ltd · Hybrid, Pakistan</p>
      </div>

      <div className="resume-card">
        <span className="resume-date">2019 – 2021</span>
        <h3 className="resume-role">PACKAGING DESIGNER</h3>
        <p className="resume-org">Neelam Food · On-site, Pakistan</p>
      </div>
    </div>

    {/* Education Column */}
    <div className="resume-column">
      <h2 className="resume-heading">
           <img src="/graduation.png" alt="experience icon" className="resume-custom-icon" />
            My Education
           </h2>

      <div className="resume-card">
        <span className="resume-date">2021 – 2025</span>
        <h3 className="resume-role">BSC SOFTWARE ENGINEERING</h3>
        <p className="resume-org">Minhaj University Lahore, Pakistan</p>
      </div>

      <div className="resume-card">
        <span className="resume-date">Mar 2021</span>
        <h3 className="resume-role">FULL STACK WEB DEVELOPER (MERN)</h3>
        <p className="resume-org">PNY Trainings, Lahore</p>
      </div>

      <div className="resume-card">
        <span className="resume-date">Aug 2021</span>
        <h3 className="resume-role">FULL STACK GRAPHIC DESIGNER</h3>
        <p className="resume-org">PNY Trainings, Lahore</p>
      </div>

      <div className="resume-card">
        <span className="resume-date">Dec 2021</span>
        <h3 className="resume-role">DIPLOMA IN SOFTWARE ENGINEERING</h3>
        <p className="resume-org">PNY Trainings, Lahore</p>
      </div>

      <div className="resume-card">
        <span className="resume-date">Jan 2020</span>
        <h3 className="resume-role">GRAPHIC DESIGNING PROGRAM</h3>
        <p className="resume-org">PNY Trainings, Lahore</p>
      </div>
    </div>

  </div>

  {/* Certifications Button */}
<div className="resume-btn-wrapper">
  <a href="/certifications" className="resume-btn">
    View My Certifications
  </a>
</div>
</section>















    </div>












  );




  










}
