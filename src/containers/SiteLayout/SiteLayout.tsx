import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "../Header";
import { Main } from "../Main";
import "./styles.css";

function SiteLayout() {
  return (
    <div className="site-layout">
      <Header />
      <Switch>
        <Route path="/region">
          <Region />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/photos">
          <Photos />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <footer>
        <p>Нижний колонтитул сайта</p>
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
