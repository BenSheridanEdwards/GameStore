import React, { memo, ReactNode } from "react";
import clsx from "clsx";
import "./styles.css";

interface ButtonProps {
  onClick: () => void;
  variant?: "link" | "secondary" | "primary" | "icon";
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
  children?: ReactNode;
}

const Button = ({
  children,
  onClick,
  variant,
  leadingIcon,
  fullWidth,
}: ButtonProps) => {
  const className = clsx({
    Button: true,
    "Button--primary": variant === "primary",
    "Button--secondary": variant === "secondary",
    "Button--link": variant === "link",
    "Button--icon": variant === "icon",
    "Button--fullWidth": fullWidth,
  });

  return (
    <button className={className} onClick={onClick}>
      {!!leadingIcon && <div className="Button__Icon">{leadingIcon}</div>}
      {!!children && <span className="Button__Text">{children}</span>}
    </button>
  );
};

export default memo(Button);
