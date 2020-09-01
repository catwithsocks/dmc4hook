import React from "react";

interface ButtonText {
  text: string;
}

const DownloadButton: React.FC<ButtonText> = ({ text }) => {
  return (
    <a
      href="https://github.com/muhopensores/dmc4_hook/releases"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="download-latest-release-btn">
        <div className="download-btn-wrapper">{text}</div>
      </button>
    </a>
  );
};

export default DownloadButton;
