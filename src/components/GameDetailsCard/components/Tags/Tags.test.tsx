import React from "react";
import { render, screen } from "@testing-library/react";
import { Tags } from "./Tags";

describe("Price", () => {
  beforeEach(() => {
    render(<Tags tags={["Role-playing", "Shooter", "2-Player"]} />);
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders all the tags correctly", () => {
    screen.getByText("Role-playing");
    screen.getByText("Shooter");
    screen.getByText("2-Player");
  });
});
