import React, { ReactElement, useMemo } from "react";
import type { Rates } from "types/types";
import { convertCurrencyAmount } from "../../../../utils/convertCurrencyAmount/convertCurrencyAmount";
import { formatCurrency } from "./helper_functions/formatCurrency";
import "./styles.css";

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

  return <div className="Price">{price}</div>;
}

export default Price;
