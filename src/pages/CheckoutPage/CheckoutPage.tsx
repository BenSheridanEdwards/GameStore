import React, { memo, ReactElement, useContext } from "react";
import { GameDetailsCardWrapper } from "components/GameDetailsCard/components/GameDetailsCardWrapper/GameDetailsCardWrapper";
import Price from "components/GameDetailsCard/components/Price/Price";
import { Quantity } from "components/GameDetailsCard/components/Quantity/Quantity";
import { ReleaseDateAndTitle } from "components/GameDetailsCard/components/ReleaseDateAndTitle/ReleaseDateAndTitle";
import { RemoveFromBasketButton } from "components/GameDetailsCard/components/RemoteFromBasketButton/RemoveFromBasketButton";
import { Link } from "components/Link/Link";
import { OrderDetails } from "components/OrderDetails/OrderDetails";
import CurrencyContext from "contexts/CurrencyContext";
import StoreContext from "contexts/StoreContext";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Layout } from "../../components/Layout/Layout";
import "./styles.css";

export const CheckoutPage = memo(function CheckoutPage(): ReactElement {
  const { storeGames, setGames } = useContext(StoreContext);
  const { exchangeRates, selectedCurrency } = useContext(CurrencyContext);

  const history = useHistory();

  return (
    <Layout
      title="Checkout"
      backLink={{
        text: "Go back to overview page",
        to: "/list",
      }}
    >
      <div className="CheckoutPage">
        <ul>
          {storeGames &&
            storeGames.length > 0 &&
            storeGames
              .filter((game) => game.inBasket)
              .map(
                ({
                  artworkUrl,
                  releaseDate,
                  price,
                  title,
                  id,
                  inBasket,
                  quantity,
                }) => {
                  return inBasket ? (
                    <li key={id}>
                      <GameDetailsCardWrapper
                        artworkUrl={artworkUrl}
                        title={title}
                        id={id}
                      >
                        <ReleaseDateAndTitle
                          releaseDate={releaseDate}
                          title={title}
                        />
                        <Quantity
                          gameId={id}
                          quantity={quantity}
                          setStateCallback={setGames}
                        />
                        <Price
                          value={price}
                          exchangeRates={exchangeRates}
                          selectedCurrency={selectedCurrency}
                        />
                        <RemoveFromBasketButton
                          gameId={id}
                          setStateCallback={setGames}
                        />
                      </GameDetailsCardWrapper>
                    </li>
                  ) : null;
                }
              )}
        </ul>

        <aside className="OrderOverview">
          <OrderDetails />
          <hr className="Overview__divider" />
          <Link to="/list">Back to overview</Link>
        </aside>
      </div>
    </Layout>
  );
});
