import React from "react";
import image4Hook from "../assets/images/4hook_only.png";
import FeaturesItem from "../components/FeaturesItem";

const FeaturesSection: React.FC = () => {
  return (
    <section id="features-section">
      <h2 id="help-title">How-To</h2>
      <div className="features-container">
        <FeaturesItem
          image={image4Hook}
          title="Getting Started"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          btn_text="Installation Guide"
          btn_url="https://github.com/muhopensores/dmc4_hook/wiki/Installation-Instructions"
        />
        <FeaturesItem
          image={image4Hook}
          title="Getting Help"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          btn_text="4hook wiki"
          btn_url="https://github.com/muhopensores/dmc4_hook/wiki"
        />
        <FeaturesItem
          image={image4Hook}
          title="Trainer in Action"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          btn_text="Test"
          btn_url="https://github.com/muhopensores/dmc4_hook/wiki/Installation-Instructions"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
