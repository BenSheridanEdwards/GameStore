"use client";

import React, { ChangeEvent, memo, useContext, useState } from "react";
import { Link } from "../Link/Link";

import { Select } from "@/components/Select/Select";
import CurrencyContext from "@/contexts/CurrencyContext";
import StoreContext from "@/contexts/StoreContext";

export interface NavBarProps {
  headerText: string;
  backLink?: {
    to: string;
    text: string;
  };
}

export const NavBar = memo(function NavBar({
  headerText,
  backLink,
}: NavBarProps) {
  const { setSelectedCurrency, selectedCurrency } = useContext(CurrencyContext);
  const { basket } = useContext(StoreContext);
  const [currency, setCurrency] = useState(selectedCurrency);

  const numberOfGamesInBasket = basket.length;

  const handleOnChangeCurrency = (event: ChangeEvent) => {
    const { value } = event.target as HTMLSelectElement;
    setCurrency(value);
    setSelectedCurrency(value);
  };

  return (
    <div className="mx-auto flex h-full w-full max-w-screen-2xl items-center px-6">
      <nav className="mr-8 flex w-full justify-between">
        <div className="m-w-[240px] flex flex-col pr-8">
          <h1 className="text-2xl font-bold text-white">{headerText}</h1>

          {backLink && (
            <Link
              leadingIcon={
                <div className="mr-2 flex h-[18px] w-[18px] transform items-center justify-center duration-200 ease-in-out group-hover:translate-x-[-4px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <g fill="none">
                      <path d="M0 0L18 0 18 18 0 18z" />
                      <path
                        fill="currentColor"
                        d="M15 8.25L5.872 8.25 10.065 4.058 9 3 3 9 9 15 10.057 13.943 5.872 9.75 15 9.75z"
                      />
                    </g>
                  </svg>
                </div>
              }
              to={backLink.to}
            >
              {backLink.text}
            </Link>
          )}
        </div>

        <Link
          leadingIcon={
            <div className="relative mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fill="#F5F5F5"
                    d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                  />
                  <path d="M0 0L24 0 24 24 0 24z" />
                </g>
              </svg>
              <span className="absolute right-[-50%] top-[-50%] h-[24px] w-[24px] rounded-xl bg-[#14f0af] text-center font-bold leading-6 text-black">
                {numberOfGamesInBasket}
              </span>
            </div>
          }
          to="/checkout"
        >
          Checkout
        </Link>
      </nav>
      <Select
        value={currency}
        onChange={handleOnChangeCurrency}
        options={[
          {
            label: "USD ($)",
            value: "USD",
          },
          {
            label: "EUR (€)",
            value: "EUR",
          },
          {
            label: "GBP (£)",
            value: "GBP",
          },
        ]}
      />
    </div>
  );
});
