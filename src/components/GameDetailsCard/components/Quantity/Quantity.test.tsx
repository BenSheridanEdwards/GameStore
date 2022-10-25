import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StoreProvider } from "contexts/StoreContext";
import { Quantity } from "./Quantity";

const mockSetGamesCallback = jest.fn();

describe("Quantity", () => {
  beforeEach(() => {
    render(
      <StoreProvider>
        <Quantity
          quantity={2}
          gameId="1"
          setStateCallback={mockSetGamesCallback}
        />
      </StoreProvider>
    );
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the heading text correctly", () => {
    screen.getByRole("heading", { name: /Quantity/ });
  });

  it("renders the current quantity text correctly", () => {
    screen.getByText("2");
  });

  it("calls the callback function when the subtract button is clicked", () => {
    userEvent.click(screen.getByRole("button", { name: /subtract.svg/i }));

    expect(mockSetGamesCallback).toHaveBeenCalled();
  });

  it("calls the callback function when the add button is clicked", () => {
    userEvent.click(screen.getByRole("button", { name: /add.svg/i }));

    expect(mockSetGamesCallback).toHaveBeenCalled();
  });
});
