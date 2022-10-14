interface formatValueToCurrencyInterface {
  amount: number;
  currency: string;
}

export function formatAmountToCurrency({
  amount,
  currency,
}: formatValueToCurrencyInterface) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}
