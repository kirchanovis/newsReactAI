import React from "react";
import { MasonryItem } from "../../components/MasonryItem";
import "./styles.css";

function Main() {

  return (
    
      <div className="grid">
        <div className="item item-1-2">1-2</div>
        <MasonryItem section="Ставропольский край" time="2 часа назад">
          <h3>Ессентуки вкусная вода</h3>
        </MasonryItem>
        <div className="item item-4">4</div>
        <div className="item">5</div>
        <div className="item">6</div>
        <div className="item">7</div>
        <div className="item">9</div>
        <div className="item">10</div>
        <div className="item">11</div>
        <div className="item">12</div>
      </div>
  );
}

export default Main;
