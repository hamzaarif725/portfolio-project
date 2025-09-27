import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Certificates from "../../components/Certificates/Certificates";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <Certificates />
      <Footer />
    </div>
  );
}

export default Home;
