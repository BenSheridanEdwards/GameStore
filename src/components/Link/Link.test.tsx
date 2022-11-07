import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "./Link";

describe("Link", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Link to="/blog">Link text</Link>
      </BrowserRouter>
    );
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the link text correctly", () => {
    screen.getByRole("link", { name: /Link text/i });
  });
});
