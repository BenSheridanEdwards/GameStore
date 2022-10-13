import React, { memo, ReactNode } from "react";
import clsx from "clsx";
import "./styles.css";

interface ButtonProps {
  onClick: () => void;
  variant?: "link" | "secondary" | "primary" | "icon";
  fullWidth?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
}

const Button = ({
  children,
  onClick,
  variant,
  icon,
  fullWidth,
}: ButtonProps) => {
  const className = clsx({
    Button: true,
    "Button--link": variant === "link",
    "Button--secondary": variant === "secondary",
    "Button--primary": variant === "primary",
    "Button--icon": variant === "icon",
    "Button--fullWidth": fullWidth,
  });

  return (
    <button className={className} onClick={onClick}>
      {!!icon && <div className="Button__Icon">{icon}</div>}
      {children && <span className="Button__Text">{children}</span>}
    </button>
  );
};

export default memo(Button);
