import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import BenfitSection from "../components/BenefitSection";
import FeaturesSection from "../components/FeaturesSection";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Navigation />
      <HeroSection />
      <BenfitSection />
      <FeaturesSection />
    </div>
  );
};
export default Home;
