import React from "react";
import BenefitItem from "../components/BenefitItem";

const BenfitSection: React.FC = () => {
  return (
    <section id="benefit-section">
      <h2 id="benefit-title">Why use 4Hook ?</h2>
      <div className="benefit-container">
        <div className="row">
          <div className="col">
            <BenefitItem
              title="Fast"
              parag="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
            />
          </div>
          <div className="col">
            <BenefitItem
              title="Extensive"
              parag="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
            />
          </div>
          <div className="col">
            <BenefitItem
              title="Simple"
              parag="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenfitSection;
