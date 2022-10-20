import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StoreProvider } from "contexts/StoreContext";
import { AddToBasketButton } from "./AddToBasketButton";

const mockSetGamesCallback = jest.fn();

describe("AddToBasketButton", () => {
  beforeEach(() => {
    render(
      <StoreProvider>
        <AddToBasketButton
          setBasketCallback={mockSetGamesCallback}
          inBasket={false}
          gameId="1"
        />
      </StoreProvider>
    );
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the button text 'Add to basket' when the item is not in the user's basket", () => {
    screen.getByRole("button", { name: /Add to basket/i });
  });

  it("renders the button text 'Added' when the item is in the user's basket", () => {
    render(
      <StoreProvider>
        <AddToBasketButton
          setBasketCallback={mockSetGamesCallback}
          inBasket
          gameId="1"
        />
      </StoreProvider>
    );
    screen.getByRole("button", { name: /Added/i });
  });

  it("calls the callback function when the button is clicked", () => {
    userEvent.click(screen.getByRole("button", { name: /Add to basket/i }));

    expect(mockSetGamesCallback).toHaveBeenCalled();
  });
});
