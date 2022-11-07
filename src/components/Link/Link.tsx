import React, { memo, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import "./Link.css";

interface LinkProps {
  onClick?: () => void;
  to: string;
  leadingIcon?: ReactNode;
  children?: ReactNode;
}

export const Link = memo(function Link({
  children,
  onClick,
  leadingIcon,
  to,
}: LinkProps) {
  return (
    <NavLink className="Link" onClick={onClick} to={to}>
      {!!leadingIcon && <div className="Link__icon">{leadingIcon}</div>}
      {!!children && <span className="Link__text">{children}</span>}
    </NavLink>
  );
});
