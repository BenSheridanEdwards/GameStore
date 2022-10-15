import React, { createContext, ReactNode, useEffect, useState } from "react";
import { fetchGames } from "../api/fetchGames/fetchGames";
import type { Game } from "types/types";

export interface StoreContextInterface {
  storeGames: Game[];
  basket: Game[];
  setGames: React.Dispatch<React.SetStateAction<Game[]>>;
}

const StoreContext = createContext<StoreContextInterface>(
  {} as StoreContextInterface
);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [games, setGames] = useState<Game[]>([]);
  const [basket, setBasket] = useState<Game[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchGames({ setStateFunction: setGames, signal });

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const gamesInBasket = games.filter((game) => {
      return game.inBasket;
    });

    setBasket(gamesInBasket);
  }, [games]);

  const storeInitialValue: StoreContextInterface = {
    storeGames: games,
    basket,
    setGames,
  };

  return (
    <StoreContext.Provider value={storeInitialValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContext;
