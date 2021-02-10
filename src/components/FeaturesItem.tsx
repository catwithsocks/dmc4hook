import React from "react";
import Button from "./Button";

interface Features {
  image: string;
  title: string;
  text: string;
  btn_text: string;
  btn_url: string
}

const FeaturesItem: React.FC<Features> = ({ title, text, btn_text, btn_url }) => {
  return (
    <div className="features-item-container">
      <div className="feat-item-content">
        <h3 className="feat-item-title">{title}</h3>
        <p className="feat-item-text">{text}</p>
      </div>
        <Button text={btn_text} url={btn_url} />
    </div>
  );
};
export default FeaturesItem;
