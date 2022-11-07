import React, { ReactElement, ReactNode } from "react";
import { NavBar, NavBarProps } from "../NavBar/NavBar";
import "./Layout.css";

interface LayoutProps {
  backLink?: NavBarProps["backLink"];
  children: ReactNode;
  title: string;
}

export function Layout({
  backLink,
  children,
  title,
}: LayoutProps): ReactElement {
  return (
    <div className="Layout">
      <header>
        <NavBar headerText={title} backLink={backLink} />
      </header>
      <main className="Layout__mainContent">{children}</main>
    </div>
  );
}
