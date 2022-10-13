interface getPriceUsingExchangeRateInterface {
  value: number;
  exchangeRate: number;
}

export function getPriceUsingExchangeRate({
  value,
  exchangeRate,
}: getPriceUsingExchangeRateInterface) {
  return value * exchangeRate;
}
