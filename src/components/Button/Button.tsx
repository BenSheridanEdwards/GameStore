import React, { ReactNode } from "react";
import clsx from "clsx";
import "./Button.scss";

interface ButtonProps {
  onClick: () => void;
  variant?: "primary" | "secondary" | "icon";
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
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
    "bg-primaryBtn hover:bg-primaryBtnHover text-light min-h-10 py-2 px-4 uppercase":
      variant === "primary",
    "bg-secondaryBtn hover:bg-secondaryBtnHover text-light min-h-10 py-2 px-4 uppercase":
      variant === "secondary",
    "bg-secondaryBtn hover:bg-secondaryBtnHover p-1": variant === "icon",
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
