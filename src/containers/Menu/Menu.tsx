import React from "react";

import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="site-menu">
      <ul>
        <li className="menu-link active"><Link to="/">Главная</Link></li>
        <li className="menu-link"><Link to="/region">Регион</Link></li>
        <li className="menu-link"><Link to="/articles">Статьи</Link></li>
        <li className="menu-link"><Link to="/photos">Фоторепортажи</Link></li>
        <li className="menu-link"><Link to="/history">История Ставрополья</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
