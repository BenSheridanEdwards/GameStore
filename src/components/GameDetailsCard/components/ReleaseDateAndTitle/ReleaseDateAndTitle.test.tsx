import React from "react";
import { render, screen } from "@testing-library/react";
import { ReleaseDateAndTitle } from "./ReleaseDateAndTitle";

describe("ReleaseDateAndTitle", () => {
  beforeEach(() => {
    render(<ReleaseDateAndTitle releaseDate="2018-02-08" title="Game title" />);
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the release date prefix correctly", () => {
    screen.getByRole("heading", { name: /Released ∙ /i });
  });

  it("renders the release date correctly", () => {
    screen.getByRole("heading", { name: /February 8, 2018/i });
  });

  it("renders the title correctly", () => {
    screen.getByText("Game title");
  });
});
