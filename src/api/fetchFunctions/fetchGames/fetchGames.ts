import { Dispatch, SetStateAction } from "react";
import type { Game } from "types/types";

interface FetchGamesInterface {
  setStateFunction: Dispatch<SetStateAction<Game[]>>;
  signal: AbortSignal;
}

export function fetchGames({
  setStateFunction,
  signal,
}: FetchGamesInterface): void {
  fetch("/api/games", { signal })
    .then((response) => response.json())
    .then((data) => {
      setStateFunction(data.games);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error.message);
    });
}
