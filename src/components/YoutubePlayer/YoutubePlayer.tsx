import React from "react";

interface YouTubeVideoProps {
  videoId: string;
  width?: number;
  height?: number;
}

const YoutubePlayer: React.FC<YouTubeVideoProps> = ({
  videoId,
  width = 560,
  height = 315,
}) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <iframe
      width={width}
      height={height}
      src={embedUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube Video Player"
    ></iframe>
  );
};

export default YoutubePlayer;
