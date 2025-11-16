import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [mainCategory, setMainCategory] = useState('editing'); // 'editing' or 'webdev'
  const [editingSubCategory, setEditingSubCategory] = useState('reels');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Editing & Design work data
  const editingWork = {
    reels: [
      {
        id: 1,
        title: "Social Media Reel #1",
        youtubeId: "n3AIhFkPgwk", // YouTube video ID
        type: "shorts", // 'shorts' or 'video'
        description: "Engaging social media content",
        date: "2025"
      }
      // Add more reels here
    ],
    gaming: [
      // Add gaming videos here
      {
        id: 1,
        title: "Gaming Montage",
        youtubeId: "SAMPLE_ID",
        type: "video",
        description: "Epic gaming moments",
        date: "2025"
      }
    ],
    socialMedia: [
      {
        id: 1,
        title: "Social Media Reel #1",
        youtubeId: "n3AIhFkPgwk",
        type: "shorts",
        description: "Viral content creation",
        date: "2025"
      }
    ],
    documentary: [
      // Add documentary videos here
    ]
  };

  // Web Development work data
  const webDevWork = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack MERN e-commerce solution",
      image: "/projects/ecommerce.jpg", // placeholder
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
      date: "2024"
    }
    // Add more projects here
  ];

  const editingCategories = [
    { id: 'reels', label: 'Reels', icon: '🎬' },
    { id: 'gaming', label: 'Gaming', icon: '🎮' },
    { id: 'socialMedia', label: 'Social Media', icon: '📱' },
    { id: 'documentary', label: 'Documentary', icon: '🎥' }
  ];

  const getYouTubeEmbedUrl = (videoId, isShorts) => {
    if (isShorts) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="portfolio-page">
      <div className="portfolio-wrapper">
        {/* Header */}
        <div className="portfolio-header">
          <h1 className="portfolio-title">My Portfolio</h1>
          <p className="portfolio-subtitle">Showcasing my creative work and projects</p>
        </div>

        {/* Main Category Toggle */}
        <div className="main-category-toggle">
          <button
            className={`category-btn ${mainCategory === 'webdev' ? 'active' : ''}`}
            onClick={() => setMainCategory('webdev')}
          >
            <span className="category-icon">💻</span>
            Web Development
          </button>
          <button
            className={`category-btn ${mainCategory === 'editing' ? 'active' : ''}`}
            onClick={() => setMainCategory('editing')}
          >
            <span className="category-icon">🎨</span>
            Editing & Design
          </button>
        </div>

        {/* Editing & Design Section */}
        {mainCategory === 'editing' && (
          <div className="editing-section">
            {/* Sub-category filters */}
            <div className="sub-category-filters">
              {editingCategories.map((category) => (
                <button
                  key={category.id}
                  className={`sub-category-btn ${editingSubCategory === category.id ? 'active' : ''}`}
                  onClick={() => setEditingSubCategory(category.id)}
                >
                  <span className="sub-icon">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>

            {/* Video Grid */}
            <div className="video-grid">
              {editingWork[editingSubCategory]?.map((video) => (
                <div
                  key={video.id}
                  className="video-card"
                  onClick={() => openVideoModal(video)}
                >
                  <div className="video-thumbnail">
                    <iframe
                      src={getYouTubeEmbedUrl(video.youtubeId, video.type === 'shorts')}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="video-embed-preview"
                    ></iframe>
                    <div className="video-overlay">
                      <div className="play-button">▶</div>
                    </div>
                  </div>
                  <div className="video-info">
                    <h3 className="video-title">{video.title}</h3>
                    <p className="video-description">{video.description}</p>
                    <span className="video-date">{video.date}</span>
                  </div>
                </div>
              ))}

              {/* Empty State */}
              {editingWork[editingSubCategory]?.length === 0 && (
                <div className="empty-state">
                  <div className="empty-icon">📹</div>
                  <p>No videos in this category yet</p>
                  <p className="empty-subtitle">Check back soon for new content!</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Web Development Section */}
        {mainCategory === 'webdev' && (
          <div className="webdev-section">
            <div className="projects-grid">
              {webDevWork.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('placeholder-project-bg');
                      }}
                    />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          🔗 Live Demo
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          💻 GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tech-stack">
                      {project.techStack.map((tech, index) => (
                        <span key={index} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="project-date">{project.date}</span>
                  </div>
                </div>
              ))}

              {/* Empty State */}
              {webDevWork.length === 0 && (
                <div className="empty-state">
                  <div className="empty-icon">💻</div>
                  <p>No projects yet</p>
                  <p className="empty-subtitle">Coming soon!</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeVideoModal}>
              ×
            </button>
            <div className="modal-video-container">
              <iframe
                src={getYouTubeEmbedUrl(selectedVideo.youtubeId, selectedVideo.type === 'shorts')}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="modal-video-player"
              ></iframe>
            </div>
            <div className="modal-video-info">
              <h2>{selectedVideo.title}</h2>
              <p>{selectedVideo.description}</p>
              <span className="video-date">{selectedVideo.date}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;