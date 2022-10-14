import Select from "./../Select/Select";
import React, { memo, useContext, useState } from "react";
import Button from "./../Button/Button";
import { useHistory } from "react-router-dom";
import { ReactComponent as Basket } from "./../../assets/icons/cart.svg";
import { ReactComponent as ArrowBack } from "./../../assets/icons/arrow-back.svg";
import "./styles.css";
import StoreContext from "contexts/StoreContext";
import CurrencyContext from "contexts/CurrencyContext";
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

        {!!backButton && (
          <div
            className="AppBar__BackButton__Label"
            onClick={backButton.onClick}
          >
            <ArrowBack className="AppBar__BackButton__Icon" />

            {backButton.text}
          </div>
        )}
      </div>

      <div className="AppBar__ActionsContainer">
        <div className="AppBar__Actions_Item">
          <Button
            variant="link"
            icon={
              <div className="AppBar__CartIconContainer">
                <Basket />
                <div className="AppBar__CartItemsBadge">{basket.length}</div>
              </div>
            }
            onClick={() => history.push("/checkout")}
          >
            CHECKOUT
          </Button>
        </div>

        <div className="AppBar__Actions_Item">
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
