import React, { useState } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "IELTS – International English Language Testing System",
      organization: "British Council / Cambridge / IDP",
      date: "June 2025",
      score: "Overall Band Score: 7.5 | CEFR Level: C1",
      category: "English Language",
      image: "/certificates/Ielts_1.jpg"
    },
    {
      id: 2,
      title: "IELTS Preparation Course",
      organization: "Times Consultant",
      date: "May 2025",
      score: "Completed full course, focused on exam preparation",
      category: "English Language",
      image: "/certificates/ielt_training.png"
    },
    {
      id: 3,
      title: "Pitman English",
      organization: "Minhaj University Lahore",
      date: "July 2022",
      score: "Completed English language course, and prepared for assessment",
      category: "English Language",
      image: "/certificates/Pitman_training_1.jpg"
    },
    {
      id: 4,
      title: "Diploma in Software Engineering (DSE)",
      organization: "PNY Trainings",
      date: "Dec 2021",
      score: "One-year diploma covering software development fundamentals",
      category: "Software Development",
      image: "/certificates/DSE.jpg"
    },
    {
      id: 5,
      title: "Full Stack Web Developer",
      organization: "PNY Trainings",
      date: "Mar 2021",
      score: "Hands-on training in full-stack development using MERN technologies",
      category: "Web Development",
      image: "/certificates/6months_web_development_1.jpg"
    },
    {
      id: 6,
      title: "Full Stack Graphic Designer",
      organization: "PNY Trainings",
      date: "Aug 2021",
      score: "Six-month course covering Adobe Creative Suite and design principles",
      category: "Graphic Design",
      image: "/certificates/Full_stack_graphics_1.jpg"
    },
    {
      id: 7,
      title: "Graphic Designing Program",
      organization: "PNY Trainings",
      date: "Jan 2020",
      score: "Training focused on core design tools and branding",
      category: "Graphic Design",
      image: "/certificates/Graphic_design_1.jpg"
    },
    {
      id: 8,
      title: "3DS Maya & Max Animation",
      organization: "PNY Trainings",
      date: "Nov 2019",
      score: "Completed animation basics using 3D modeling software",
      category: "3D Animation",
      image: "/certificates/3ds_maya_1.jpg"
    },
    {
      id: 9,
      title: "Adobe Premiere Pro and After Effect",
      organization: "PNY Trainings",
      date: "August 2019",
      score: "Mastered video editing using Top-Notch editing software",
      category: "Video Editing",
      image: "/certificates/After_effects_1.jpg"
    }
  ];

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="certificates-page">
      <div className="certificates-wrapper">
        <div className="certificates-header">
          <h1 className="certificates-title">My Certificates</h1>
          <p className="certificates-subtitle">Professional certifications and achievements</p>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div 
              key={certificate.id} 
              className="certificate-card"
              onClick={() => openCertificate(certificate)}
            >
              <div className="certificate-image-container">
                <img 
                  src={certificate.image} 
                  alt={certificate.title}
                  className="certificate-image"
                  onError={(e) => {
                    // Fallback to a placeholder gradient background
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('placeholder-bg');
                  }}
                />
                <div className="certificate-overlay">
                  <div className="certificate-info">
                    <h3 className="certificate-name">{certificate.title}</h3>
                    <p className="certificate-org">{certificate.organization}</p>
                    <p className="certificate-date">{certificate.date}</p>
                    <p className="certificate-score">{certificate.score}</p>
                    <span className="certificate-category">{certificate.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedCertificate && (
        <div className="certificate-modal" onClick={closeCertificate}>
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeCertificate}>
              ×
            </button>
            <div className="modal-certificate">
              <img 
                src={selectedCertificate.image} 
                alt={selectedCertificate.title}
                className="modal-certificate-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('modal-placeholder-bg');
                }}
              />
              <div className="watermark">PORTFOLIO PREVIEW</div>
            </div>
            <div className="modal-info">
              <h2>{selectedCertificate.title}</h2>
              <p><strong>Organization:</strong> {selectedCertificate.organization}</p>
              <p><strong>Date:</strong> {selectedCertificate.date}</p>
              <p><strong>Details:</strong> {selectedCertificate.score}</p>
              <span className="modal-category">{selectedCertificate.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;