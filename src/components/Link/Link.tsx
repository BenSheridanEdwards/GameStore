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
      className="group flex min-h-[24px] cursor-pointer items-center bg-transparent text-sm text-[#14f0af]"
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
