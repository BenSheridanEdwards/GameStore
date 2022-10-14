import React, { memo, useContext } from "react";

import GameListCardWrapper from "components/GameDetailsCard/components/GameDetailsCardWrapper/GameDetailsCardWrapper";
import AddToCartButton from "components/GameDetailsCard/components/AddToBasketButton/AddToBasketButton";
import ReleaseDateAndTitle from "components/GameDetailsCard/components/ReleaseDateAndTitle/ReleaseDateAndTitle";
import Price from "components/GameDetailsCard/components/Price/Price";
import Quantity from "components/GameDetailsCard/components/Quantity/Quantity";
import Rating from "components/GameDetailsCard/components/Rating/Rating";
import Tags from "components/GameDetailsCard/components/Tags/Tags";
import Layout from "../../components/Layout/Layout";
import StoreContext from "contexts/StoreContext";
import CurrencyContext from "contexts/CurrencyContext";

const GameListPage = memo(() => {
  const { storeGames } = useContext(StoreContext);
  const { selectedCurrency, exchangeRates } = useContext(CurrencyContext);

  return (
    <Layout title="Games">
      {storeGames &&
        storeGames.length > 0 &&
        storeGames.map(
          ({
            artworkUrl,
            releaseDate,
            tags,
            rating,
            price,
            title,
            id,
            inBasket,
            quantity,
          }) => {
            return (
              <GameListCardWrapper
                artworkUrl={artworkUrl}
                title={title}
                id={id}
                key={id}
              >
                <ReleaseDateAndTitle releaseDate={releaseDate} title={title} />
                <Rating value={rating} />
                <Tags tags={tags} />
                <Quantity gameId={id} quantity={quantity} />
                <Price
                  value={price}
                  exchangeRates={exchangeRates}
                  selectedCurrency={selectedCurrency}
                />
                <AddToCartButton gameId={id} inBasket={inBasket} />
              </GameListCardWrapper>
            );
          }
        )}
    </Layout>
  );
});

export default GameListPage;
