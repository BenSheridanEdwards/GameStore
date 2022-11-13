import React, { ChangeEvent, ReactElement } from "react";
import "./styles.css";

interface SelectProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
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
    <select className="Select" value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
