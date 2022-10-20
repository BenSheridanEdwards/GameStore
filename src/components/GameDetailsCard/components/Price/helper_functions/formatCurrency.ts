interface FormatCurrencyInterface {
  amount: number;
  currency: string;
}

export function formatCurrency({
  amount,
  currency,
}: FormatCurrencyInterface): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}
