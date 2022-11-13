import React, { ReactElement, useMemo } from "react";
import type { Rates } from "@/types";
import { convertCurrencyAmount } from "@/utils/convertCurrencyAmount/convertCurrencyAmount";
import { formatCurrency } from "@/utils/formatCurrency/formatCurrency";

interface PriceProps {
  value: number;
  selectedCurrency: string;
  exchangeRates: Rates | null;
}

export function Price({
  value,
  selectedCurrency,
  exchangeRates,
}: PriceProps): ReactElement {
  const amountInSelectedCurrency = useMemo(
    () =>
      exchangeRates && exchangeRates[selectedCurrency] !== 1
        ? convertCurrencyAmount({
            amount: value,
            desiredCurrency: selectedCurrency,
            exchangeRates,
          })
        : value,
    [exchangeRates, selectedCurrency, value]
  );

  const price = formatCurrency({
    amount: amountInSelectedCurrency,
    currency: selectedCurrency,
  });

  return <h3 className="text-4xl">{price}</h3>;
}
