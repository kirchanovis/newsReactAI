import React from 'react';

interface ILiveReport {
  time: string;
  image?: string;
  video?: string;
  text: string;
}

const LiveReport: React.FC<ILiveReport> = ({ time, image, video, text }) => {
  return (
    <div className="live-report">
      <div className="live-report__time">{time}</div>
      {image && <img className="live-report__image" src={image} alt="Live report" />}
      {video && <iframe className="live-report__video" src={video} title="Live report video" />}
      <div className="live-report__text">{text}</div>
    </div>
  );
};

export default LiveReport;
