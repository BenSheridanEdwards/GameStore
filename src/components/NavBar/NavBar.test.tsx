import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { StoreProvider } from "@/contexts/StoreContext";
import { NavBar } from "./NavBar";

describe("NavBar", () => {
  beforeEach(() => {
    render(
      <StoreProvider>
        <CurrencyProvider>
          <NavBar
            headerText="Games"
            backLink={{
              to: "/",
              text: "Back to previous page",
            }}
          />
        </CurrencyProvider>
      </StoreProvider>
    );
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the heading correctly", () => {
    screen.getByRole("heading", { name: /Games/i });
  });

  it("renders the back link correctly", () => {
    screen.getByRole("link", { name: /Back to previous page/i });
  });

  it("renders the checkout link correctly", () => {
    screen.getByRole("link", { name: /Checkout/i });
  });

  it("renders the currency option dropdown correctly", () => {
    screen.getByRole("option", { name: "USD ($)" });
  });

  it("changes the selected currency when a different option is selected from the dropdown", () => {
    const selectCurrency = screen.getByRole("combobox");

    expect(selectCurrency).toHaveValue("USD");

    userEvent.selectOptions(selectCurrency, "GBP");

    expect(selectCurrency).toHaveValue("GBP");
  });
});
