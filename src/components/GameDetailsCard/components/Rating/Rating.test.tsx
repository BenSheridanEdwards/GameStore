import React from "react";
import { render, screen } from "@testing-library/react";
import { Rating } from "./Rating";

describe("Price", () => {
  beforeEach(() => {
    render(<Rating value={5} />);
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders all the rating stars correctly", () => {
    screen.getByTitle("Star 1");
    screen.getByTitle("Star 2");
    screen.getByTitle("Star 3");
    screen.getByTitle("Star 4");
    screen.getByTitle("Star 5");
  });
});
