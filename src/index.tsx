import React from "react";
import ReactDOM from "react-dom";
import GameListPage from "./pages/GameListPage/GameListPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import { makeServer } from "mock/server";
import "fontsource-roboto";
import "./index.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/list">
          <GameListPage />
        </Route>

        <Route path="/checkout">
          <CheckoutPage />
        </Route>

        <Redirect from="*" to="/list" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
