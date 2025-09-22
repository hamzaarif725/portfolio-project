
import "./HeroSection.css";
import profilePic from "../../assets/images/profile2.png"; // Replace with your image
import { FaLinkedinIn, FaGithub, FaDownload, FaYoutube } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import CountUp from "react-countup";
import React, { useState, useEffect } from "react";

export default function HeroSection() {


const [currentPair, setCurrentPair] = useState(0);
const [fadeClass, setFadeClass] = useState('fade-in');

// All 8 testimonials data
const testimonials = [
  {
    id: 1,
    image: "/client1.webp",
    text: "Great work, first draft was basically exactly what I wanted to see and the small feedback was implemented quicky and without any further amendments.",
    name: "Gina Macauley",
    role: "Marketing Director, goodmarketing.uk"
  },
  {
    id: 2,
    image: "/bitar.jpeg",
    text: "Hamza’s post-production expertise brought precision and creativity to our medical reels and testimonials, transforming them into polished, engaging content that elevated our brand presence.",
    name: "George Bitar Marketing Team",
    role: "Marketing Team, Bitar Cosmetic Surgery Institute"
  },
  {
    id: 3,
    image: "/shahan.jpg",
    text: "Your designs during Students Week were vibrant, professional, and truly elevated the spirit of the event. The creativity and polish you brought made a lasting impression.",
    name: "Dr. Shahan Siddiqui",
    role: "Head of Department (CS Department), Minhaj University Lahore"
  },
  {
    id: 4,
    image: "/Mike_ball.jpg",
    text: "The backbone of my YouTube channels his AI skills and design expertise make my work smooth and professional.",
    name: "Mike Ball",
    role: "Former CTO at ShopHitly"
  },
  {
    id: 5,
    image: "/marco.webp",
    text: "Executed my YouTube analysis tasks with precision and creativity bringing skill, speed, and a professional edge that exceeded expectations.",
    name: "Marco Garduño",
    role: "YouTube Analyst, Fiverr.com"
  },
  {
    id: 6,
    image: "/radu.jpg",
    text: "Delivered top-notch research, design, and post-production across my YouTube channels tech, history, and F1 with creativity and precision that truly stand out.",
    name: "Radu Ionut",
    role: "Continental Automotive, Iasi"
  },
  {
    id: 7,
    image: "/johnny.jpg",
    text: "I’m a huge fan of gaming, and trust me this guy kept my passion alive with his editing skills and reel expertise. Creative, sharp, and always on point!",
    name: "Johnny Cronin",
    role: "U.S. Marine"
  },
  {
    id: 8,
    image: "/abda.jpg",
    text: "Built me a fully functional, modern website that perfectly fit my business needs fast, reliable, and truly professional.",
    name: "Abdaham Victoire Moncoeur",
    role: "Vice President, Fundación Alfa Omega Social"
  }
];

// Auto-play with fade effect
useEffect(() => {
  const interval = setInterval(() => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentPair((prev) => (prev + 1) % 4);
      setFadeClass('fade-in');
    }, 400);
  }, 10000);

  return () => clearInterval(interval);
}, []);

// Get current pair of testimonials
const getCurrentTestimonials = () => {
  const startIndex = currentPair * 2;
  return [testimonials[startIndex], testimonials[startIndex + 1]];
};

const handleDotClick = (index) => {
  if (index !== currentPair) {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentPair(index);
      setFadeClass('fade-in');
    }, 400);
  }
};









  return (
    <div className="hero-page">



      
      {/* Hero Section */}
      <section id="home"  className="hero-wrapper">
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
              <a href="/Hamza_CV.pdf" className="download-cv" target="_blank" 
                rel="noopener noreferrer">
                <FaDownload className="download-icon" />
                Download CV
              </a>
                        <div className="social-icons">
              <a 
                href="https://www.fiverr.com/s/VYeDdN5" 
                className="social-icon"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <TbBrandFiverr />
              </a>
              <a 
                href="https://www.linkedin.com/in/hamza-arif-1712251ba/" 
                className="social-icon"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://www.youtube.com/@hamzaarif222" 
                className="social-icon"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a 
                href="https://github.com/hamzaarif725" 
                className="social-icon"
                target="_blank" 
                rel="noopener noreferrer"
              >
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
          <div className="stat-number">
            <CountUp start={0} end={7} duration={2} suffix="+" />
          </div>
          <div className="stat-label">Years of Experience</div>
        </div>

                <div className="stat-item">
          <div className="stat-number">
            <CountUp start={0} end={2500} duration={2.5} suffix="+" />
          </div>
          <div className="stat-label">Projects Completed</div>
        </div>

        <div className="stat-item">
          <div className="stat-number">
            <CountUp start={0} end={1500} duration={2.5} suffix="+" />
          </div>
          <div className="stat-label">Satisfied Clients</div>
        </div>

        </div>
      </section>




































{/* Services Section */}
<section id="services" className="services-section ">
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
<section id="resume" className="resume-section">
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



























{/* =========================
    Skills Section
   ========================= */}
<section id="skills" className="skills-wrapper">
  <h2 className="skills-title">My Skills</h2>
  <p className="skills-text">
    A perfect blend of creativity and technology – combining web development expertise
    with professional editing and design skills.
  </p>

  {/* Development Skills */}
  <h3 className="skills-subtitle">Web Development</h3>
  <div className="skills-row">
    <div className="skill-card">
      <img src="/react.png" alt="React" className="skill-logo" />
      <div className="skill-level">85%</div>
      <p className="skill-name">React</p>
    </div>
    <div className="skill-card">
      <img src="/javascript.svg" alt="JavaScript" className="skill-logo" />
      <div className="skill-level">80%</div>
      <p className="skill-name">JavaScript</p>
    </div>
    <div className="skill-card">
      <img src="/bootstrap.png" alt="Bootstrap" className="skill-logo" />
      <div className="skill-level">93%</div>
      <p className="skill-name">Bootstrap</p>
    </div>
    <div className="skill-card">
      <img src="/mongodb.png" alt="MongoDB" className="skill-logo" />
      <div className="skill-level">85%</div>
      <p className="skill-name">MongoDB</p>
    </div>
    <div className="skill-card">
      <img src="/python.png" alt="Python" className="skill-logo" />
      <div className="skill-level">82%</div>
      <p className="skill-name">Python</p>
    </div>
  </div>

  {/* Design & Editing Skills */}
  <h3 className="skills-subtitle">Design & Editing</h3>
  <div className="skills-row">
    <div className="skill-card">
      <img src="/illustrator.png" alt="Illustrator" className="skill-logo" />
      <div className="skill-level">85%</div>
      <p className="skill-name">Illustrator</p>
    </div>
    <div className="skill-card">
      <img src="/photoshop.png" alt="Photoshop" className="skill-logo" />
      <div className="skill-level">80%</div>
      <p className="skill-name">Photoshop</p>
    </div>
    <div className="skill-card">
      <img src="/premierepro.png" alt="Premiere Pro" className="skill-logo" />
      <div className="skill-level">89%</div>
      <p className="skill-name">Premiere Pro</p>
    </div>
    <div className="skill-card">
      <img src="/aftereffects.png" alt="After Effects" className="skill-logo" />
      <div className="skill-level">79%</div>
      <p className="skill-name">After Effects</p>
    </div>
    <div className="skill-card">
      <img src="/adobexd.png" alt="Adobe XD" className="skill-logo" />
      <div className="skill-level">75%</div>
      <p className="skill-name">Adobe XD</p>
    </div>
    <div className="skill-card">
      <img src="/capcut.webp" alt="CapCut" className="skill-logo" />
      <div className="skill-level">90%</div>
      <p className="skill-name">CapCut</p>
    </div>
  </div>
</section>



























{/* Testimonials Section */}
<section id="testimonials" className="testimonials-section">
  <div className="testimonials-container">
    {/* Left Heading */}
    <div className="testimonials-left">
      <h2>
        My <span>Client's</span> Stories
      </h2>
      <p>
        Empowering people in new a digital journey with my super services
      </p>
    </div>

    {/* Right Cards */}
    <div className="testimonials-right">
      <div className={`cards-row ${fadeClass}`}>
        {getCurrentTestimonials().map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
                        <div className="quote-icon">
              <img src="/purple_diamond.png" alt="quote icon" />
            </div>
            <p className="testimonial-text">
              "{testimonial.text}"
            </p>
            <div className="client-info">
              <img src={testimonial.image} alt="client" className="client-img" />
              <div>
                <p className="client-name">{testimonial.name}</p>
                <p className="client-role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="dots">
        {[0, 1, 2, 3].map((index) => (
          <span
            key={index}
            className={`dot ${currentPair === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  </div>
</section>




    </div>












  );




  










}
