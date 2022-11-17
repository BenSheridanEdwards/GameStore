import React from "react";
import { render, screen } from "@testing-library/react";

import { OrderDetails } from "./OrderDetails";

describe("OrderDetails", () => {
  beforeEach(() => {
    render(
      <OrderDetails
        basket={[
          {
            id: "1152350815",
            artworkUrl:
              "https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/f8/b5/fe/f8b5fead-500d-59ed-25e0-dca91d6aba1c/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/200x200bb.png",
            title: "FINALFANTASY XV POCKET EDITION",
            rating: 4,
            tags: ["Games", "Action", "Role Playing"],
            releaseDate: "2018-02-08",
            price: 2.1,
            quantity: 1,
            inBasket: true,
          },
          {
            id: "1287138671",
            artworkUrl:
              "https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/7b/b0/2e/7bb02eeb-74c7-e6c1-994a-ed9929d74469/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/200x200bb.png",
            title: "Thumper: Pocket Edition",
            rating: 5,
            tags: ["Games", "Music", "Action"],
            releaseDate: "2018-01-24",
            price: 4.7,
            quantity: 1,
            inBasket: true,
          },
        ]}
        exchangeRates={{ USD: 1, EUR: 0.8738967054, GBP: 0.7869876781 }}
        selectedCurrency="USD"
      />,
    );
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the order value label correctly", () => {
    screen.getByText("Order value");
  });

  it("renders the total items label correctly", () => {
    screen.getByText("Total items");
  });
});
