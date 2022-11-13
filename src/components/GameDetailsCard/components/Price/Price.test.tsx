import React from "react";
import { render, screen } from "@testing-library/react";
import { Price } from "./Price";

describe("Price", () => {
  beforeEach(() => {
    render(
      <Price
        value={100}
        selectedCurrency="USD"
        exchangeRates={{ USD: 1, GBP: 1.4, EUR: 1.2 }}
      />
    );
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the price in the selected currency correctly", () => {
    screen.getByText("$100.00");
  });
});
