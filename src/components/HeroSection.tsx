import React from "react";
import DownloadButton from "../components/DownloadButton";
import site_logo from "../assets/images/site_logo.png";

const HeroSection: React.FC = () => {
  return (
    <section id="hero-section">
      <div className="landing">
        <a href="/">
          <h1>DMC4Hook</h1>
          <h2>Enhance your experience</h2>
        </a>
        <p>
          Most elaborate Trainer for the original version of Devil May Cry 4
        </p>
        <DownloadButton text="Get DMC4Hook" />
      </div>
      <div id="main-image">
        <img src={site_logo} alt="DMC4Hook Logo" />
      </div>
    </section>
  );
};

export default HeroSection;
