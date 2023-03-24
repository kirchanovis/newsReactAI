import React from "react";
import Masonry from "react-masonry-css";
import "./styles.css";

function Main() {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <main className="site-main">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        <div className="masonry-grid-item masonry-grid-item--height2"></div>
        <div className="masonry-grid-item"></div>
        <div className="masonry-grid-item"></div>
        <div className="masonry-grid-item"></div>
        <div className="masonry-grid-item"></div>
        <div className="masonry-grid-item"></div>
        <div className="masonry-grid-item masonry-grid-item--width2"></div>
        <div className="masonry-grid-item masonry-grid-item--width2"></div>
        <div className="masonry-grid-item"></div>
      </Masonry>
    </main>
  );
}

export default Main;
