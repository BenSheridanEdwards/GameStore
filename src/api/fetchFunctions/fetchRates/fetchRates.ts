import { Dispatch, SetStateAction } from "react";
import type { Rates } from "types/types";

interface fetchRatesInterface {
  setStateFunction: Dispatch<SetStateAction<Rates | null>>;
  signal: AbortSignal;
}

export function fetchRates({ setStateFunction, signal }: fetchRatesInterface) {
  fetch("/api/rates", { signal })
    .then((response) => response.json())
    .then((data) => {
      setStateFunction(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
