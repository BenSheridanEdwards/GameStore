import React from "react";
import ReactDOM from "react-dom";
import GameListPage from "./pages/GameListPage/GameListPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import { makeServer } from "mock/server";
import { StoreProvider } from "./contexts/StoreContext";
import { CurrencyProvider } from "contexts/CurrencyContext";
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
        <StoreProvider>
          <CurrencyProvider>
            <Route path="/list">
              <GameListPage />
            </Route>

            <Route path="/checkout">
              <CheckoutPage />
            </Route>

            <Redirect from="*" to="/list" />
          </CurrencyProvider>
        </StoreProvider>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
