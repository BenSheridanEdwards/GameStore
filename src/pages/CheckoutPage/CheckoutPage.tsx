import React, { memo, ReactElement, useContext } from "react";
import { GameDetailsCardWrapper } from "components/GameDetailsCard/components/GameDetailsCardWrapper/GameDetailsCardWrapper";
import Price from "components/GameDetailsCard/components/Price/Price";
import { Quantity } from "components/GameDetailsCard/components/Quantity/Quantity";
import { ReleaseDateAndTitle } from "components/GameDetailsCard/components/ReleaseDateAndTitle/ReleaseDateAndTitle";
import { RemoveFromBasketButton } from "components/GameDetailsCard/components/RemoteFromBasketButton/RemoveFromBasketButton";
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
      backButton={{
        text: "Go back to overview page",
        onClick: () => history.push("/list"),
      }}
    >
      <div className="CheckoutPage__Container">
        <div className="CheckoutPage__GameList__Container">
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
                    <GameDetailsCardWrapper
                      artworkUrl={artworkUrl}
                      title={title}
                      id={id}
                      key={id}
                    >
                      <ReleaseDateAndTitle
                        releaseDate={releaseDate}
                        title={title}
                      />
                      <Quantity gameId={id} quantity={quantity} />
                      <Price
                        value={price}
                        exchangeRates={exchangeRates}
                        selectedCurrency={selectedCurrency}
                      />
                      <RemoveFromBasketButton
                        gameId={id}
                        setGamesCallback={setGames}
                      />
                    </GameDetailsCardWrapper>
                  ) : null;
                }
              )}
        </div>

        <div className="CheckoutPage__Overview__Container">
          <OrderDetails />
          <hr className="CheckoutPage__Divider" />
          <Button
            variant="link"
            fullWidth
            onClick={() => history.push("/list")}
          >
            Back to overview
          </Button>
        </div>
      </div>
    </Layout>
  );
});
