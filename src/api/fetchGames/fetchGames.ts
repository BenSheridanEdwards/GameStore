import { Dispatch, SetStateAction } from "react";
import type { Game } from "types/types";

interface fetchGamesInterface {
  setStateFunction: Dispatch<SetStateAction<Game[]>>;
  signal: AbortSignal;
}

export function fetchGames({ setStateFunction, signal }: fetchGamesInterface) {
  fetch("/api/games", { signal })
    .then((response) => response.json())
    .then((data) => {
      setStateFunction(data.games);
    })
    .catch((error) => {
      console.log(error);
    });
}
