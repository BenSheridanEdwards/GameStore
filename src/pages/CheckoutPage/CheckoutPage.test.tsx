import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { CurrencyProvider } from "contexts/CurrencyContext";
import { StoreProvider } from "contexts/StoreContext";
import { AnyRegistry } from "miragejs/-types";
import { Server } from "miragejs/server";
import { makeServer } from "../../mock/server";
import { CheckoutPage } from "./CheckoutPage";
import { storeContextValueMock } from "./mocks/storeContext.mock";

describe("CheckoutPage", () => {
  let server: Server<AnyRegistry>;
  beforeEach(() => {
    server = makeServer({ environment: "test" });

    render(
      <StoreProvider
        passedStoreValue={{ setGames: jest.fn(), ...storeContextValueMock }}
      >
        <CurrencyProvider>
          <CheckoutPage />
        </CurrencyProvider>
      </StoreProvider>
    );
  });

  afterEach(() => {
    server.shutdown();
  });

  it("Renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the game detail cards that are in the basket correctly", async () => {
    await waitFor(() => {
      expect(screen.getAllByTestId(/GameDetailsCard/i));
    });
  });
});
