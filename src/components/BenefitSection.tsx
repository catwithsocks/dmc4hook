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
              parag="Quickly get it working in a few minutes. With the one-time setup your settings will be automatically applied on every startup" 
            />
          </div>
          <div className="col">
            <BenefitItem
              title="Extensive"
              parag="Various gameplay customization options and plenty of quality of life improvements Various gameplay customization options and plenty of quality of life improvements"
            />
          </div>
          <div className="col">
            <BenefitItem
              title="Simple"
              parag="Easy Installation. Simply download and put the dinput8.dll file into your Devil May Cry 4 folder and you are ready to go"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenfitSection;
