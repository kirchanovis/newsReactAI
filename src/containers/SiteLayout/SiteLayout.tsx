import React from "react";
import "./styles.css";

function SiteLayout() {
  return (
    <div className="site-layout">
      <header>
        <h1>Заголовок сайта</h1>
      </header>
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