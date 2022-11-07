import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CurrencyProvider } from "contexts/CurrencyContext";
import { StoreProvider } from "contexts/StoreContext";
import { MemoryRouter } from "react-router-dom";
import { NavBar } from "./NavBar";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("NavBar", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <StoreProvider>
          <CurrencyProvider>
            <NavBar
              headerText="Games"
              backLink={{
                to: "/list",
                text: "Back to previous page",
              }}
            />
          </CurrencyProvider>
        </StoreProvider>
      </MemoryRouter>
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

  it.skip("navigates to the checkout route when the checkbox link is clicked", () => {
    userEvent.click(screen.getByRole("link", { name: /Checkout/i }));
    expect(mockHistoryPush).toHaveBeenCalledWith("/checkout");
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
