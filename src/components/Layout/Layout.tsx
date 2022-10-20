import React, { ReactElement, ReactNode } from "react";
import { AppBar, AppBarProps } from "../AppBar/AppBar";
import "./styles.css";

interface LayoutProps {
  title: string;
  backButton?: AppBarProps["backButton"];
  children: ReactNode;
}

export function Layout({
  children,
  title,
  backButton,
}: LayoutProps): ReactElement {
  return (
    <div className="Layout">
      <AppBar headerText={title} backButton={backButton} />
      <div className="Layout__Content">{children}</div>
    </div>
  );
}
