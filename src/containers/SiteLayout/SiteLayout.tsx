import React from "react";
import { Routes, Route } from "react-router-dom";
import { Articles } from "../News/Articles";
import { Header } from "../News/Header";
import { Main } from "../News/Main";
import { Photos } from "../News/Photos";
import { Region } from "../News/Region";
import { FlightMain } from "../Flight/FlightMain";
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
          <Route path="flight" element={<FlightMain />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </main>
      <footer />
    </div>
  );
}

export default SiteLayout;

function History() {
  return <h1>История Ставрополья</h1>;
}
