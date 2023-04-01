import React from "react";
import "./styles.css";

type Props = {
    section: string;
    time: string;
    classContainer: string;
    img?: string;
    children: React.ReactNode;
  }

const MasonryItem = ({ section, time, children, classContainer, img }: Props) => {
  return (
    <div className={classContainer}>
      <div className="masonry-item">
        {img &&
          (<>
            <div className="masonry-item__img" />
            <div className="masonry-item__bg" />
          </>)
        }
        <div className="masonry-item__body">
        <div className="masonry-item__section">{section}</div>
        <div className="masonry-item__content">{children}</div>
        <div className="masonry-item__time">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default MasonryItem;
