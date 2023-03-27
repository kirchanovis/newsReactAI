import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../Header";
import { Main } from "../Main";
import "./styles.css";

function SiteLayout() {
  return (
    <div className="site-layout">
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="region" element={<Region />} />
        <Route path="articles" element={<Articles />} />
        <Route path="photos" element={<Photos />} />
        <Route path="history" element={<History />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <footer>
      </footer>
    </div>
  );
}

export default SiteLayout;



function Region() {
  return <h1>Регион</h1>;
}

function Articles() {
  return <h1>Статьи</h1>;
}

function Photos() {
  return <h1>Фоторепортажи</h1>;
}

function History() {
  return <h1>История Ставрополья</h1>;
}
