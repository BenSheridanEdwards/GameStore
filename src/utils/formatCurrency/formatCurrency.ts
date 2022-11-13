interface FormatCurrencyArgs {
  amount: number;
  currency: string;
}

export function formatCurrency({
  amount,
  currency,
}: FormatCurrencyArgs): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}
