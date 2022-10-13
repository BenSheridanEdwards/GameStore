import React from "react";
import type { Rates } from "types/types";
import "./styles.css";
import { getPriceUsingExchangeRate } from "./helper_functions/getPriceUsingExchangeRate";
import { formatValueToCurrency } from "./helper_functions/formatValueToCurrency";

interface PriceProps {
  value: number;
  selectedCurrency: string;
  exchangeRates: Rates | null;
}

const Price = ({ value, selectedCurrency, exchangeRates }: PriceProps) => {
  let price = value;

  if (exchangeRates) {
    const exchangeRate = exchangeRates[selectedCurrency];
    price = getPriceUsingExchangeRate({ value, exchangeRate });
  }

  const formattedPrice = formatValueToCurrency({
    value: price,
    currency: selectedCurrency,
  });

  return <div className="Price">{formattedPrice}</div>;
};

export default Price;
