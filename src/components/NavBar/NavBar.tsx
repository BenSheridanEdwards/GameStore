import React, { ChangeEvent, memo, useContext, useState } from "react";
import { Link } from "components/Link/Link";
import CurrencyContext from "contexts/CurrencyContext";
import StoreContext from "contexts/StoreContext";
import { ReactComponent as ArrowBack } from "../../assets/icons/arrow-back.svg";
import { ReactComponent as Basket } from "../../assets/icons/basket.svg";
import { Select } from "../Select/Select";
import "./styles.css";

export interface NavBarProps {
  headerText: string;
  backLink?: {
    to: string;
    text: string;
  };
}

export const NavBar = memo(function NavBar({
  headerText,
  backLink,
}: NavBarProps) {
  const { setSelectedCurrency, selectedCurrency } = useContext(CurrencyContext);
  const { basket } = useContext(StoreContext);
  const [currency, setCurrency] = useState(selectedCurrency);

  const numberOfGamesInBasket = basket.length;

  const handleOnChangeCurrency = (event: ChangeEvent) => {
    const { value } = event.target as HTMLSelectElement;
    setCurrency(value);
    setSelectedCurrency(value);
  };

  return (
    <div className="NavBar">
      <nav className="Nav">
        <div className="Nav__leftContainer">
          <h1 className="Nav__heading">{headerText}</h1>

          {backLink && (
            <Link leadingIcon={<ArrowBack />} to={backLink.to}>
              {backLink.text}
            </Link>
          )}
        </div>

        <Link
          leadingIcon={
            <div className="BasketIcon">
              <Basket />
              <span className="BasketIcon__badge">{numberOfGamesInBasket}</span>
            </div>
          }
          to="/checkout"
        >
          Checkout
        </Link>
      </nav>
      <Select
        value={currency}
        onChange={handleOnChangeCurrency}
        options={[
          {
            label: "USD ($)",
            value: "USD",
          },
          {
            label: "EUR (€)",
            value: "EUR",
          },
          {
            label: "GBP (£)",
            value: "GBP",
          },
        ]}
      />
    </div>
  );
});
