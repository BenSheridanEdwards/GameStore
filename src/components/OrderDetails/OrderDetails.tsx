import React, { ReactElement, useMemo } from "react";
import { formatCurrency } from "@/utils/formatCurrency/formatCurrency";
import { convertCurrencyAmount } from "@/utils/convertCurrencyAmount/convertCurrencyAmount";
import { getTotalNumberOfItemsInBasket } from "@/utils/getTotalNumberOfItemsInBasket/getTotalNumberOfItemsInBasket";
import { getBasketTotalAmount } from "../../utils/getBasketTotalAmount/getBasketTotalAmount";
import { Game, Rates } from "@/types";

interface OrderDetailsProps {
  basket: Game[];
  selectedCurrency: string;
  exchangeRates: Rates;
}

export function OrderDetails({
  basket,
  selectedCurrency,
  exchangeRates,
}: OrderDetailsProps): ReactElement {
  const basketTotalAmount = useMemo(
    () =>
      exchangeRates && exchangeRates[selectedCurrency] !== 1
        ? convertCurrencyAmount({
            amount: getBasketTotalAmount(basket),
            desiredCurrency: selectedCurrency,
            exchangeRates,
          })
        : getBasketTotalAmount(basket),
    [exchangeRates, selectedCurrency, basket],
  );

  const totalOrderValue = formatCurrency({
    amount: basketTotalAmount,
    currency: selectedCurrency,
  });

  const totalNumberOfItems = getTotalNumberOfItemsInBasket(basket);

  return (
    <dl className="text-light w-full">
      <div className="flex justify-between text-2xl font-bold">
        <dt>Order value</dt>
        <dd>{totalOrderValue}</dd>
      </div>
      <div className="mt-6 flex justify-between text-2xl">
        <dt>Total items</dt>
        <dd>{totalNumberOfItems}</dd>
      </div>
    </dl>
  );
}
