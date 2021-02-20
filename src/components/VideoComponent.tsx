import React from 'react'
interface Video {
  title: string;
}

const VideoComponent: React.FC<Video> = ({title}) => {
    return(
        <video controls >
            <source src={title} type="video/mp4"/>
        </video>
    );
};

export default VideoComponent;