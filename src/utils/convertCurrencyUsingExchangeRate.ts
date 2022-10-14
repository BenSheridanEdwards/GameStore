import { Rates } from "types/types";

interface getPriceUsingExchangeRateInterface {
  amount: number;
  exchangeRates: Rates;
  desiredCurrency: string;
}

export function convertCurrencyUsingExchangeRate({
  amount,
  desiredCurrency,
  exchangeRates,
}: getPriceUsingExchangeRateInterface) {
  const exchangeRate = exchangeRates[desiredCurrency];
  return amount * exchangeRate;
}
