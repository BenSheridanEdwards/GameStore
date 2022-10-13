import { render, waitFor } from "@testing-library/react";
import GameListPage from "./GameListPage";
import React from "react";
import { makeServer } from "../../mock/server";

describe("GameListPage", () => {
  let server: any;
  beforeEach(() => {
    server = makeServer({ environment: "test" });
  });

  afterEach(() => {
    server.shutdown();
  });

  it("Renders without error", () => {
    expect(render(<GameListPage />)).not.toBeNull();
  });

  it("renders all the game detail card labels correctly", async () => {
    const { queryAllByText } = render(<GameListPage />);

    await waitFor(() => {
      expect(queryAllByText("Released", { exact: false })).not.toBe([]);
      expect(queryAllByText("Rating", { exact: false })).not.toBe([]);
      expect(queryAllByText("Tags", { exact: false })).not.toBe([]);
      expect(queryAllByText("Quantity", { exact: false })).not.toBe([]);
    });
  });

  it("renders all the game detail card data correctly", async () => {
    const { getByText } = render(<GameListPage />);

    await waitFor(() => {
      expect(getByText("FINALFANTASY XV POCKET EDITION")).toBeInTheDocument();
    });
  });
});
