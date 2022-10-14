import React, { useContext, useMemo } from "react";
import { formatAmountToCurrency } from "components/GameDetailsCard/components/Price/helper_functions/formatAmountToCurrency";
import { convertCurrencyUsingExchangeRate } from "utils/convertCurrencyUsingExchangeRate";
import CurrencyContext from "contexts/CurrencyContext";
import StoreContext from "contexts/StoreContext";
import { getTotalNumberOfItemsinBasket } from "utils/getTotalNumberOfItemsInBasket";
import { getBasketTotalAmount } from "./helper_functions/getBasketTotalAmount";
import "./style.css";

export default function OrderDetails() {
  const { basket } = useContext(StoreContext);
  const { selectedCurrency, exchangeRates } = useContext(CurrencyContext);

  const basketTotalAmount = useMemo(
    () =>
      exchangeRates && exchangeRates[selectedCurrency] !== 1
        ? convertCurrencyUsingExchangeRate({
            amount: getBasketTotalAmount(basket),
            desiredCurrency: selectedCurrency,
            exchangeRates,
          })
        : getBasketTotalAmount(basket),
    [exchangeRates, selectedCurrency, basket]
  );

  const totalOrderValue = formatAmountToCurrency({
    amount: basketTotalAmount,
    currency: selectedCurrency,
  });

  const totalNumberOfItems = getTotalNumberOfItemsinBasket(basket);

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
