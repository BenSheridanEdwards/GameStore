import React, { ChangeEvent, ChangeEventHandler, ReactElement } from "react";
import "./styles.css";

interface SelectProps {
  value: string;
  onChange: (event: ChangeEvent) => void;
  options: {
    label: string;
    value: string;
  }[];
}

export function Select({
  value,
  onChange,
  options,
}: SelectProps): ReactElement {
  return (
    <select
      className="Select"
      value={value}
      onChange={onChange as ChangeEventHandler}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
