import React, { ReactElement, ReactNode } from "react";
import { AppBar, AppBarProps } from "../AppBar/AppBar";
import "./styles.css";

interface LayoutProps {
  backButton?: AppBarProps["backButton"];
  children: ReactNode;
  title: string;
}

export function Layout({
  backButton,
  children,
  title,
}: LayoutProps): ReactElement {
  return (
    <div className="Layout">
      <AppBar headerText={title} backButton={backButton} />
      <div className="Layout__Content">{children}</div>
    </div>
  );
}
