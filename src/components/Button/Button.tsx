import React, { ReactNode } from "react";
import clsx from "clsx";
import "./styles.scss";

interface ButtonProps {
  onClick: () => void;
  variant?: "link" | "secondary" | "primary" | "icon";
  fullWidth?: boolean;
  leadingIcon?: any;
  children?: ReactNode;
}

export function Button({
  children,
  onClick,
  variant,
  leadingIcon,
  fullWidth,
}: ButtonProps) {
  const className = clsx({
    Button: true,
    "Button--primary": variant === "primary",
    "Button--secondary": variant === "secondary",
    "Button--link": variant === "link",
    "Button--icon": variant === "icon",
    "Button--fullWidth": fullWidth,
  });

  return (
    <button className={className} onClick={onClick} type="button">
      {!!leadingIcon && <span className="Button__Icon">{leadingIcon}</span>}
      {!!children && <span className="Button__Text">{children}</span>}
    </button>
  );
}
