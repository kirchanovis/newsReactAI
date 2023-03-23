import React from "react";
import "./styles.css";

function Header() {
  return (
    <header className="site-header">
      <img
        src="https://via.placeholder.com/50x150"
        alt="Логотип сайта"
        className="site-logo"
      />
      <nav className="site-menu">
        <a href="#" className="menu-link active">
          Главная
        </a>
        <a href="#" className="menu-link">
          Регион
        </a>
        <a href="#" className="menu-link">
          Статьи
        </a>
        <a href="#" className="menu-link">
          Фоторепортажи
        </a>
        <a href="#" className="menu-link">
          История Ставрополья
        </a>
      </nav>
    </header>
  );
}

export default Header;
