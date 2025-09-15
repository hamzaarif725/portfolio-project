import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Hamza Arif. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/hamza-arif-1712251ba/">LinkedIn</a>
        <a href="https://www.youtube.com/@hamzaarif222">YouTube</a>
        <a href="https://www.fiverr.com/s/WErRwlR">Fiverr</a>
      </div>
    </footer>
  );
}
