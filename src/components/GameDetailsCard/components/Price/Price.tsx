import { convertCurrencyUsingExchangeRate } from "../../../../utils/convertCurrencyUsingExchangeRate";
import { formatAmountToCurrency } from "./helper_functions/formatAmountToCurrency";
import "./styles.css";
import React, { useMemo } from "react";
import type { Rates } from "types/types";

interface PriceProps {
  value: number;
  selectedCurrency: string;
  exchangeRates: Rates | null;
}

const Price = ({ value, selectedCurrency, exchangeRates }: PriceProps) => {
  const price = useMemo(
    () =>
      exchangeRates && exchangeRates[selectedCurrency] !== 1
        ? convertCurrencyUsingExchangeRate({
            amount: value,
            desiredCurrency: selectedCurrency,
            exchangeRates,
          })
        : value,
    [exchangeRates, selectedCurrency, value]
  );

  const priceFormattedInSelectedCurrency = formatAmountToCurrency({
    amount: price,
    currency: selectedCurrency,
  });

  return <div className="Price">{priceFormattedInSelectedCurrency}</div>;
};

export default Price;
