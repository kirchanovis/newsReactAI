import React from "react";
import { Routes, Route } from "react-router-dom";
import { Articles } from "../Articles";
import { Header } from "../Header";
import { Main } from "../Main";
import { Region } from "../Region";
import "./styles.css";

function SiteLayout() {
  return (
    <div className="site-layout">
      <Header />
      <main className="site-main">
        <Routes>
          <Route index element={<Main />} />
          <Route path="region" element={<Region />} />
          <Route path="articles" element={<Articles />} />
          <Route path="photos" element={<Photos />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </main>
      <footer />
    </div>
  );
}

export default SiteLayout;

function Photos() {
  return <h1>Фоторепортажи</h1>;
}

function History() {
  return <h1>История Ставрополья</h1>;
}
