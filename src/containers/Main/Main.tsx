import React from "react";
import { MasonryItem } from "../../components/MasonryItem";
import "./styles.css";

function Main() {

  return (
      <div className="grid">
        <MasonryItem classContainer="item item-1-2" section="Ставропольский край" time="2 часа назад">
          <div>
            <h3>Ессентуки вкусная вода</h3>
            <div>Хронология событий</div>
          </div>
        </MasonryItem>
        <MasonryItem classContainer="item" section="Ставропольский край" time="2 часа назад" img="test">
          <h3>Ессентуки вкусная вода</h3>
        </MasonryItem>
        <MasonryItem classContainer="item item-4" section="Ставропольский край" time="2 часа назад">
          <ul className="main__list">
            <li>В Ставропольском крае началась кампания по вакцинации от гриппа.</li>
            <li>В Невинномысске прошла акция по сбору пластиковых бутылок.</li>
            <li>В станице Чернолесской прошел фестиваль культуры и искусства.</li>
            <li>В Ставрополе начался ремонт улицы Ленина. </li>
            <li>В Пятигорске открылся новый музей.</li>
          </ul>
        </MasonryItem>
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
