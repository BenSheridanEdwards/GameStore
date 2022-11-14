import { Dispatch, SetStateAction } from "react";

import type { Rates } from "@/types";

interface FetchRatesInterface {
  setStateFunction: Dispatch<SetStateAction<Rates | null>>;
  signal: AbortSignal;
}

export function fetchRates({
  setStateFunction,
  signal,
}: FetchRatesInterface): void {
  fetch("/api/rates", { signal })
    .then((response) => response.json())
    .then((data) => {
      setStateFunction(data);
    })
    .catch((error) => {
      console.warn(error.message);
      return null;
    });
}
