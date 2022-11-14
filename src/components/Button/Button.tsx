import React, { ReactNode } from "react";
import clsx from "clsx";
import "./Button.scss";

interface ButtonProps {
  onClick: () => void;
  variant?: "primary" | "secondary" | "icon";
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
    "items-center rounded-md flex cursor-pointer justify-center leading-4 w-min":
      true,
    "bg-[#3f48d8] hover:bg-[#4a55e4] text-[#f5f5f5] min-h-10 py-2 px-4 uppercase":
      variant === "primary",
    "bg-[#303550] hover:bg-[#3b4161] text-[#f5f5f5] min-h-10 py-2 px-4 uppercase":
      variant === "secondary",
    "bg-[#303550] hover:bg-[#3b4161] p-1": variant === "icon",
    "Button--fullWidth": fullWidth,
  });

  return (
    <button className={className} onClick={onClick} type="button">
      {!!leadingIcon && (
        <span className="peer flex items-center justify-center">
          {leadingIcon}
        </span>
      )}
      {!!children && <span className="peer-[]:ml-2">{children}</span>}
    </button>
  );
}

Button.defaultProps = {
  variant: "primary",
};
