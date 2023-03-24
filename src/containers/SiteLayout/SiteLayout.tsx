import React from "react";
import { Header } from "../Header";
import { Main } from "../Main";
import "./styles.css";

function SiteLayout() {
  return (
    <div className="site-layout">
      <Header />
      <Main />
      <footer>
        <p>Нижний колонтитул сайта</p>
      </footer>
    </div>
  );
}

export default SiteLayout;