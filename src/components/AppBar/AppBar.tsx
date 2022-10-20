import React, { ChangeEvent, memo, useContext, useState } from "react";
import CurrencyContext from "contexts/CurrencyContext";
import StoreContext from "contexts/StoreContext";
import { useHistory } from "react-router-dom";
import { ReactComponent as ArrowBack } from "../../assets/icons/arrow-back.svg";
import { ReactComponent as Basket } from "../../assets/icons/basket.svg";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";
import "./styles.css";

export interface AppBarProps {
  headerText: string;
  backButton?: {
    onClick: () => void;
    text: string;
  };
}

export const AppBar = memo(function AppBar({
  headerText,
  backButton,
}: AppBarProps) {
  const history = useHistory();
  const { basket } = useContext(StoreContext);
  const { setSelectedCurrency, selectedCurrency } = useContext(CurrencyContext);
  const [currency, setCurrency] = useState(selectedCurrency);
  const numberOfGamesInBasket = basket.length;

  const handleOnChangeCurrency = (event: ChangeEvent) => {
    const { value } = event.target as HTMLSelectElement;
    setCurrency(value);
    setSelectedCurrency(value);
  };

  const handleCheckoutNavigationClick = () => {
    history.push("/checkout");
  };

  return (
    <div className="AppBar">
      <div className="AppBar__HeaderContainer">
        <h1 className="AppBar__Header">{headerText}</h1>

        {backButton && (
          <nav>
            <Button
              variant="link"
              leadingIcon={<ArrowBack />}
              onClick={backButton.onClick}
            >
              {backButton.text}
            </Button>
          </nav>
        )}
      </div>

      <div className="AppBar__ActionsContainer">
        <div className="AppBar__Actions__Item">
          <Button
            leadingIcon={
              <div className="AppBar__BasketIconContainer">
                <Basket />
                <div className="AppBar__BasketItemsBadge">
                  {numberOfGamesInBasket}
                </div>
              </div>
            }
            variant="link"
            onClick={handleCheckoutNavigationClick}
          >
            Checkout
          </Button>
        </div>

        <div className="AppBar__Actions__Item">
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
      </div>
    </div>
  );
});
