import React, { memo, useContext } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import "./styles.css";
import StoreContext from "contexts/StoreContext";
import GameListCardWrapper from "components/GameDetailsCard/components/GameDetailsCardWrapper/GameDetailsCardWrapper";
import ReleaseDateAndTitle from "components/GameDetailsCard/components/ReleaseDateAndTitle/ReleaseDateAndTitle";
import Price from "components/GameDetailsCard/components/Price/Price";
import Quantity from "components/GameDetailsCard/components/Quantity/Quantity";
import RemoveFromBasketButton from "components/GameDetailsCard/components/RemoteFromBasketButton/RemoveFromBasketButton";
import OrderDetails from "components/OrderDetails/OrderDetails";
import CurrencyContext from "contexts/CurrencyContext";

const CheckoutPage = memo(() => {
  const { storeGames } = useContext(StoreContext);
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
                    <GameListCardWrapper
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
                      <RemoveFromBasketButton gameId={id} />
                    </GameListCardWrapper>
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

export default CheckoutPage;
