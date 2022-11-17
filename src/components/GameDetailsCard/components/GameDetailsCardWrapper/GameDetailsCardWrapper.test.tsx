import React from "react";
import { render, screen } from "@testing-library/react";
import { GameDetailsCardWrapper } from "./GameDetailsCardWrapper";

describe("GameDetailsCardWrapper", () => {
  beforeEach(() => {
    render(
      <GameDetailsCardWrapper
        artworkUrl="http://www.imageurl.com"
        id="1"
        title="Card title"
      >
        Card children text
      </GameDetailsCardWrapper>,
    );
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the card", () => {
    screen.getByRole("article");
  });

  it("renders the card image", () => {
    screen.getByRole("img", { name: /Card title/i });
  });

  it("renders the card children", () => {
    screen.getByText("Card children text");
  });
});
