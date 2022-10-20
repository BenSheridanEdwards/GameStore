import React, { ReactElement, useContext, useMemo } from "react";
import { formatCurrency } from "components/GameDetailsCard/components/Price/helper_functions/formatCurrency";
import CurrencyContext from "contexts/CurrencyContext";
import StoreContext from "contexts/StoreContext";
import { convertCurrencyAmount } from "utils/convertCurrencyAmount/convertCurrencyAmount";
import { getTotalNumberOfItemsInBasket } from "utils/getTotalNumberOfItemsInBasket/getTotalNumberOfItemsInBasket";
import { getBasketTotalAmount } from "./helper_functions/getBasketTotalAmount/getBasketTotalAmount";
import "./style.css";

export function OrderDetails(): ReactElement {
  const { basket } = useContext(StoreContext);
  const { selectedCurrency, exchangeRates } = useContext(CurrencyContext);

  const basketTotalAmount = useMemo(
    () =>
      exchangeRates && exchangeRates[selectedCurrency] !== 1
        ? convertCurrencyAmount({
            amount: getBasketTotalAmount(basket),
            desiredCurrency: selectedCurrency,
            exchangeRates,
          })
        : getBasketTotalAmount(basket),
    [exchangeRates, selectedCurrency, basket]
  );

  const totalOrderValue = formatCurrency({
    amount: basketTotalAmount,
    currency: selectedCurrency,
  });

  const totalNumberOfItems = getTotalNumberOfItemsInBasket(basket);

  return (
    <div className="OrderDetails">
      <div className="OrderDetails__OrderValue">
        <span>Order Value</span>
        <span>{totalOrderValue}</span>
      </div>
      <div className="OrderDetails__OrderSize">
        <span>Total items</span>
        <span>{totalNumberOfItems}</span>
      </div>
    </div>
  );
}
