import React from "react";
import { render, screen } from "@testing-library/react";

import { Link } from "./Link";

describe("Link", () => {
  beforeEach(() => {
    render(<Link to="/blog">Link text</Link>);
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the link text correctly", () => {
    screen.getByRole("link", { name: /Link text/i });
  });
});
