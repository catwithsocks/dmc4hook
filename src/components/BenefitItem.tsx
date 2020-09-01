import React from "react";

interface Benefit {
  title: string;
  parag: string;
}

const BenefitItem: React.FC<Benefit> = ({ title, parag }) => {
  return (
    <div className="benefit-item-container">
      <h3 className="benefit-item-title">{title}</h3>
      <p className="benefit-item-text">{parag}</p>
    </div>
  );
};

export default BenefitItem;
