import React, {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Game } from "types/types";
import { fetchGames } from "../api/fetchFunctions/fetchGames/fetchGames";

export type StoreContextValue = {
  storeGames: Game[];
  basket: Game[];
  setGames: React.Dispatch<React.SetStateAction<Game[]>>;
};

interface StoreProviderProps {
  passedStoreValue?: StoreContextValue;
  children: ReactNode;
}

const StoreContext = createContext<StoreContextValue>({} as StoreContextValue);

export function StoreProvider({
  children,
  passedStoreValue,
}: StoreProviderProps): ReactElement {
  const [games, setGames] = useState<Game[]>([]);
  const [basket, setBasket] = useState<Game[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

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

  const storeInitialValue: StoreContextValue = useMemo(() => {
    return {
      storeGames: games,
      basket,
      setGames,
    };
  }, [basket, games]);

  return (
    <StoreContext.Provider value={passedStoreValue || storeInitialValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContext;
