import React from 'react'

interface Text {
    text: string;
    url: string;
}

const Button: React.FC<Text> = ({text, url}) => {
    return(
        <div className="standard-btn-wrapper">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <button className="standard-btn">
                    <div className="standard-btn-content">{text}</div>
                </button>
            </a>
        </div>
    )
}

export default Button;