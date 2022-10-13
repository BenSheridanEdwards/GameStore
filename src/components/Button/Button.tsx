import React, { memo, FC, ReactNode } from "react";
import clsx from "clsx";
import "./styles.css";

const Button: FC<{
  onClick: () => void;
  variant?: "link" | "secondary" | "primary";
  fullWidth?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
}> = ({ children, onClick, variant, icon, fullWidth }) => {
  const className = clsx({
    Button: true,
    "Button--link": variant === "link",
    "Button--secondary": variant === "secondary",
    "Button--primary": variant === "primary",
    "Button--fullWidth": fullWidth,
  });

  return (
    <button className={className} onClick={onClick}>
      {!!icon && <div className="Button__Icon">{icon}</div>}

      {children}
    </button>
  );
};

export default memo(Button);
