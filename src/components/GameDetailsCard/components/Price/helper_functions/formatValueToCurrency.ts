interface formatValueToCurrencyInterface {
  value: number;
  currency: string;
}

export function formatValueToCurrency({
  value,
  currency,
}: formatValueToCurrencyInterface) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);
}
