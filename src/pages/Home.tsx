import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import BenfitSection from "../components/BenefitSection";
import FeaturesSection from "../components/FeaturesSection";
import HowToSection from "../components/HowToSection";


const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Navigation />
      <HeroSection />
      <BenfitSection />
      <FeaturesSection />
      <HowToSection /> 
    </div>
  );
};
export default Home;
