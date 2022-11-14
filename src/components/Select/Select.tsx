import React, { ChangeEvent, ReactElement } from "react";
import "./Select.scss";

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
    <select
      className="Select cursor-pointer appearance-none rounded-lg bg-[#1e2131] py-2 pr-6 pl-4 text-white hover:bg-[#282b40]"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
