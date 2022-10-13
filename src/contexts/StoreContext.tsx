import React, { createContext, ReactNode, useEffect, useState } from "react";
import { fetchGames } from "../api/fetchGames/fetchGames";
import { fetchRates } from "../api/fetchRates/fetchRates";
import type { Game, Rates } from "types/types";

export interface StoreContextInterface {
  storeGames: Game[];
  currencyExchangeRates: Rates | null;
  selectedCurrency: string;
}

const StoreContext = createContext<StoreContextInterface | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [games, setGames] = useState<Game[]>([]);
  const [rates, setRates] = useState<Rates | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchGames({ setStateFunction: setGames, signal });
    fetchRates({ setStateFunction: setRates, signal });

    return () => {
      controller.abort();
    };
  }, []);

  const storeInitialValue: StoreContextInterface = {
    storeGames: games,
    currencyExchangeRates: rates,
    selectedCurrency: "USD",
  };

  return (
    <StoreContext.Provider value={storeInitialValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContext;
