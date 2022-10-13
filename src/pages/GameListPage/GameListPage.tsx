import React, { memo, useContext } from "react";

import GameListCardWrapper from "components/GameDetailsCard/components/GameDetailsCardWrapper/GameDetailsCardWrapper";
import AddToBasketButton from "components/GameDetailsCard/components/AddToBasketButton/AddToBasketButton";
import ReleaseDateAndTitle from "components/GameDetailsCard/components/ReleaseDateAndTitle/ReleaseDateAndTitle";
import Price from "components/GameDetailsCard/components/Price/Price";
import Quantity from "components/GameDetailsCard/components/Quantity/Quantity";
import Rating from "components/GameDetailsCard/components/Rating/Rating";
import Tags from "components/GameDetailsCard/components/Tags/Tags";
import Layout from "../../components/Layout/Layout";
import StoreContext from "contexts/StoreContext";

const GameListPage = memo(() => {
  const storeContextObject = useContext(StoreContext);

  return (
    <Layout title="Games">
      {storeContextObject?.storeGames &&
        storeContextObject.storeGames.length > 0 &&
        storeContextObject.storeGames.map(
          ({
            artworkUrl,
            releaseDate,
            tags,
            rating,
            price,
            title,
            id,
            inCart,
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
                <Quantity value={quantity} onChange={() => {}} />
                <Price
                  value={price}
                  exchangeRates={storeContextObject?.currencyExchangeRates}
                  selectedCurrency={storeContextObject?.selectedCurrency}
                />
                <AddToBasketButton isAdded={inCart} onClick={() => {}} />
              </GameListCardWrapper>
            );
          }
        )}
    </Layout>
  );
});

export default GameListPage;
