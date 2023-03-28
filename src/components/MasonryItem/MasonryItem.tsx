import React from "react";
import "./styles.css";

type Props = {
    section: string;
    time: string;
    children: React.ReactNode;
  }

const MasonryItem = ({ section, time, children }: Props) => {
  return (
    <div className="masonry-item">
      <div className="masonry-item__section">{section}</div>
      <div className="masonry-item__content">{children}</div>
      <div className="masonry-item__time">{time}</div>
    </div>
  );
};

export default MasonryItem;
