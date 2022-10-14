import React, { createContext, ReactNode, useEffect, useState } from "react";
import { fetchRates } from "../api/fetchRates/fetchRates";
import type { Rates } from "types/types";

export interface CurrencyContextInterface {
  exchangeRates: Rates | null;
  selectedCurrency: string;
  setSelectedCurrency: React.Dispatch<React.SetStateAction<string>>;
}

const CurrencyContext = createContext<CurrencyContextInterface>(
  {} as CurrencyContextInterface
);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
  const [rates, setRates] = useState<Rates | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchRates({ setStateFunction: setRates, signal });

    return () => {
      controller.abort();
    };
  }, []);

  const CurrencyInitialValue: CurrencyContextInterface = {
    exchangeRates: rates,
    selectedCurrency,
    setSelectedCurrency,
  };

  return (
    <CurrencyContext.Provider value={CurrencyInitialValue}>
      {children}
    </CurrencyContext.Provider>
  );
}

export default CurrencyContext;
