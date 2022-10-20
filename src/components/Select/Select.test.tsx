import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";

const mockOnChangeCallback = jest.fn();

describe("Select", () => {
  beforeEach(() => {
    render(
      <Select
        value="USD"
        onChange={mockOnChangeCallback}
        options={[
          {
            label: "USD ($)",
            value: "USD",
          },
          {
            label: "EUR (€)",
            value: "EUR",
          },
          {
            label: "GBP (£)",
            value: "GBP",
          },
        ]}
      />
    );
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the options correctly", () => {
    screen.getByRole("option", { name: "USD ($)" });
    screen.getByRole("option", { name: "EUR (€)" });
    screen.getByRole("option", { name: "GBP (£)" });
  });

  it("changes the selected option when a different option is selected from the dropdown", () => {
    const select = screen.getByRole("combobox");
    userEvent.selectOptions(select, "GBP");
    expect(mockOnChangeCallback).toHaveBeenCalled();
  });
});
