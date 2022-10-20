import React, {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Rates } from "types/types";
import { fetchRates } from "../api/fetchFunctions/fetchRates/fetchRates";

export type CurrencyContextValue = {
  exchangeRates: Rates | null;
  selectedCurrency: string;
  setSelectedCurrency: React.Dispatch<React.SetStateAction<string>>;
};

interface CurrencyProviderProps {
  passedStoreValue?: CurrencyContextValue;
  children: ReactNode;
}

const CurrencyContext = createContext<CurrencyContextValue>(
  {} as CurrencyContextValue
);

export function CurrencyProvider({
  children,
  passedStoreValue,
}: CurrencyProviderProps): ReactElement {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
  const [rates, setRates] = useState<Rates | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetchRates({ setStateFunction: setRates, signal });

    return () => {
      controller.abort();
    };
  }, []);

  const currencyInitialValue: CurrencyContextValue = useMemo(() => {
    return {
      exchangeRates: rates,
      selectedCurrency,
      setSelectedCurrency,
    };
  }, [rates, selectedCurrency]);

  return (
    <CurrencyContext.Provider value={passedStoreValue || currencyInitialValue}>
      {children}
    </CurrencyContext.Provider>
  );
}

export default CurrencyContext;
