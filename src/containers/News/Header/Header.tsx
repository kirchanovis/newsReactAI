import React from "react";
import "./styles.css";
import { Menu } from "../Menu"

function Header() {
  return (
    <header className="site-header">
      <div className="header-logo">
        <img
          src="https://via.placeholder.com/50x150"
          alt="Логотип сайта"
          className="site-logo"
        />
      </div>
      <Menu />
    </header>
  );
}

export default Header;
