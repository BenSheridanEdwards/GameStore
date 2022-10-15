import React, { memo, ReactNode } from "react";
import AppBar, { AppBarProps } from "./../AppBar/AppBar";
import "./styles.css";

interface LayoutProps {
  title: string;
  backButton?: AppBarProps["backButton"];
  children: ReactNode;
}

const Layout = memo(({ children, title, backButton }: LayoutProps) => {
  return (
    <div className="Layout">
      <AppBar title={title} backButton={backButton} />
      <div className="Layout__Content">{children}</div>
    </div>
  );
});

export default Layout;
