import React from "react";

import { Link, Outlet } from "react-router-dom";

import "./styles.css";

function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li className="menu-link active"><Link to="/">Главная</Link></li>
        <li className="menu-link"><Link to="/region">Регион</Link></li>
        <li className="menu-link"><Link to="/articles">Статьи</Link></li>
        <li className="menu-link"><Link to="/photos">Фоторепортажи</Link></li>
        <li className="menu-link"><Link to="/history">История Ставрополья</Link></li>
      </ul>
      <Outlet />
    </nav>
  );
}

export default Menu;
