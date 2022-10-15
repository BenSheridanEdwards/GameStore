import { Rates } from "types/types";

interface convertCurrencyUsingExchangeRateInterface {
  amount: number;
  exchangeRates: Rates;
  desiredCurrency: string;
}

export function convertCurrencyUsingExchangeRate({
  amount,
  desiredCurrency,
  exchangeRates,
}: convertCurrencyUsingExchangeRateInterface) {
  const exchangeRate = exchangeRates[desiredCurrency];
  return amount * exchangeRate;
}
