import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { CurrencyProvider } from "contexts/CurrencyContext";
import { StoreProvider } from "contexts/StoreContext";
import { AnyRegistry } from "miragejs/-types";
import { Server } from "miragejs/server";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "../../mock/server";
import { GameListPage } from "./GameListPage";

describe("GameListPage", () => {
  let server: Server<AnyRegistry>;
  beforeEach(() => {
    server = makeServer({ environment: "test" });

    render(
      <Router>
        <StoreProvider>
          <CurrencyProvider>
            <GameListPage />
          </CurrencyProvider>
        </StoreProvider>
      </Router>
    );
  });

  afterEach(() => {
    server.shutdown();
  });

  it("Renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders all the game detail card labels correctly", async () => {
    await waitFor(() => {
      expect(screen.queryAllByText("Released", { exact: false })).not.toBe([]);
      expect(screen.queryAllByText("Rating", { exact: false })).not.toBe([]);
      expect(screen.queryAllByText("Tags", { exact: false })).not.toBe([]);
      expect(screen.queryAllByText("Quantity", { exact: false })).not.toBe([]);
    });
  });

  it("renders all the game detail card data correctly", async () => {
    await waitFor(() => {
      expect(screen.getAllByTestId(/GameDetailsCard/i));
    });
  });
});
