import React from "react";
import install from "../assets/images/4hookinstall.gif";
import FeaturesItem from "../components/FeaturesItem";

const FeaturesSection: React.FC = () => {
  return (
    <section id="features-section">
      <h2 id="help-title">How-To</h2>
      <div className="features-container">
        <div className="row">
          <div className="col">
            <FeaturesItem
              title="Getting Started"
              text="The installation is as simple as drag and dropping a file into your DMC4 folder. For further information or in case of questions, refer to the link down below."
              btn_text="Installation Guide"
              btn_url="https://github.com/muhopensores/dmc4_hook/wiki/Installation-Instructions"
            /> 
          </div>
          <div className="col">
            <FeaturesItem
              title="Getting Help"
              text="DMC4Hook provides you with context-dependent helpmarkers to help you along with the options. Please refer to the link below, to find an in-depth explanation of all the Trainer's functionalities."
              btn_text="4hook wiki"
              btn_url="https://github.com/muhopensores/dmc4_hook/wiki"
            />
            </div>
          <div className="col">
            <FeaturesItem
              title="Trainer in Action"
              text="Follow the link to find a collection of resources which showcase DMC4Hook in action with all its awesomeness and quirks. If you want to contribute to this collection, please contact us via Twitter, Discord or Github."
              btn_text="Test"
              btn_url="https://github.com/muhopensores/dmc4_hook/wiki/Installation-Instructions"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
