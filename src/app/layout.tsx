import React from "react";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { StoreProvider } from "@/contexts/StoreContext";
import { Roboto } from "@next/font/google";
import "../../styles/globals.scss";

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({ weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <title>GameStore</title>
        <meta name="description" content="GameStore by Ben Sheridan-Edwards" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <StoreProvider>
          <CurrencyProvider>
            <div className="mx-auto max-w-screen-2xl">{children}</div>
          </CurrencyProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
