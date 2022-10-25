import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RemoveFromBasketButton } from "./RemoveFromBasketButton";

const mockSetGamesCallback = jest.fn();

describe("RemoveFromBasketButton", () => {
  beforeEach(() => {
    render(
      <RemoveFromBasketButton
        setStateCallback={mockSetGamesCallback}
        gameId="1"
      />
    );
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the button text 'Remove' correctly", () => {
    screen.getByRole("button", { name: /Remove/i });
  });

  it("calls the callback function when the button is clicked", () => {
    userEvent.click(screen.getByRole("button", { name: /Remove/i }));

    expect(mockSetGamesCallback).toHaveBeenCalled();
  });
});
