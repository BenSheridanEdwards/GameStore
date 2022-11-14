import React, { ReactNode } from "react";
import NavLink from "next/link";

interface LinkProps {
  onClick?: () => void;
  to: string;
  leadingIcon?: ReactNode;
  children?: ReactNode;
}

export function Link({ children, onClick, leadingIcon, to }: LinkProps) {
  return (
    <NavLink
      className="bg-transparent group flex min-h-[24px] cursor-pointer items-center text-sm text-accent"
      onClick={onClick}
      href={to}
    >
      {!!leadingIcon && leadingIcon}
      {!!children && <span className="group-hover:underline">{children}</span>}
    </NavLink>
  );
}

Link.defaultProps = {
  leadingIcon: null,
};
