import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";


function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default Home;
