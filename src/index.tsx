import React from "react";
import { CurrencyProvider } from "contexts/CurrencyContext";
import "fontsource-roboto";
import { makeServer } from "mock/server";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { StoreProvider } from "./contexts/StoreContext";
import "./index.css";
import { CheckoutPage } from "./pages/CheckoutPage/CheckoutPage";
import { GameListPage } from "./pages/GameListPage/GameListPage";

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
