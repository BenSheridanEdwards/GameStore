import Button from "../Button/Button";
import Select from "../Select/Select";
import { ReactComponent as ArrowBack } from "./../../assets/icons/arrow-back.svg";
import { ReactComponent as Basket } from "./../../assets/icons/basket.svg";
import "./styles.css";
import CurrencyContext from "contexts/CurrencyContext";
import StoreContext from "contexts/StoreContext";
import React, { memo, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

export interface AppBarProps {
  title: string;
  backButton?: {
    onClick: () => void;
    text: string;
  };
}

const AppBar = memo(({ title, backButton }: AppBarProps) => {
  const history = useHistory();
  const { basket } = useContext(StoreContext);
  const { setSelectedCurrency, selectedCurrency } = useContext(CurrencyContext);
  const [currency, setCurrency] = useState(selectedCurrency);

  const handleOnChangeCurrency = (event: MouseEvent) => {
    const { value } = event.target as HTMLSelectElement;
    setCurrency(value);
    setSelectedCurrency(value);
  };

  return (
    <div className="AppBar">
      <div className="AppBar__TitleContainer">
        <div className="AppBar__Title">{title}</div>

        {backButton && (
          <Button
            variant="link"
            leadingIcon={<ArrowBack />}
            onClick={backButton.onClick}
          >
            {backButton.text}
          </Button>
        )}
      </div>

      <div className="AppBar__ActionsContainer">
        <div className="AppBar__Actions__Item">
          <Button
            leadingIcon={
              <div className="AppBar__BasketIconContainer">
                <Basket />
                <div className="AppBar__BasketItemsBadge">{basket.length}</div>
              </div>
            }
            variant="link"
            onClick={() => history.push("/checkout")}
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

export default memo(AppBar);
