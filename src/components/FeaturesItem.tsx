import React from "react";

interface Faatures {
  image: string;
  title: string;
  text: string;
}

const FeaturesItem: React.FC<Faatures> = ({ image, title, text }) => {
  return (
    <div className="features-item-container">
      <div className="feat-item-img">
        <img src={image} alt="Feature Item Image" />
      </div>
      <div className="feat-item-content">
        <h3 className="feat-item-title">{title}</h3>
        <p className="feat-item-text">{text}</p>
      </div>
    </div>
  );
};
export default FeaturesItem;
