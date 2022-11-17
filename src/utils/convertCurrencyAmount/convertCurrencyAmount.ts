import { Rates } from "@/types";

interface ConvertCurrencyAmountInterface {
  amount: number;
  desiredCurrency: string;
  exchangeRates: Rates;
}

export function convertCurrencyAmount({
  amount,
  desiredCurrency,
  exchangeRates,
}: ConvertCurrencyAmountInterface): number {
  if (!exchangeRates[desiredCurrency]) {
    return amount;
  }

  const exchangeRate = exchangeRates[desiredCurrency];
  return amount * exchangeRate;
}
