import Select from "./../Select/Select";
import React, { memo, FC } from "react";
import Button from "./../Button/Button";
import { useHistory } from "react-router-dom";
import { ReactComponent as Cart } from "./../../assets/icons/cart.svg";
import { ReactComponent as ArrowBack } from "./../../assets/icons/arrow-back.svg";
import "./styles.css";

export type AppBarProps = {
  title: string;
  backButton?: {
    onClick: () => void;
    text: string;
  };
};

const AppBar: FC<AppBarProps> = memo(({ title, backButton }) => {
  const history = useHistory();
  const handleOnChangeCurrency = console.log;

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
                <Cart />
                <div className="AppBar__CartItemsBadge">0</div>
              </div>
            }
            onClick={() => history.push("/checkout")}
          >
            CHECKOUT
          </Button>
        </div>

        <div className="AppBar__Actions_Item">
          <Select
            value="usd"
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
