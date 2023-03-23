import React from "react";
import { Header } from "../Header";
import "./styles.css";

function SiteLayout() {
  return (
    <div className="site-layout">
      <Header />
      <main>
        <p>Основное содержимое сайта здесь</p>
      </main>
      <footer>
        <p>Нижний колонтитул сайта</p>
      </footer>
    </div>
  );
}

export default SiteLayout;