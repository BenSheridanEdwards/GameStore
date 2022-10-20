import React, { memo, useContext } from "react";
import { AddToBasketButton } from "components/GameDetailsCard/components/AddToBasketButton/AddToBasketButton";
import { GameDetailsCardWrapper } from "components/GameDetailsCard/components/GameDetailsCardWrapper/GameDetailsCardWrapper";
import { Price } from "components/GameDetailsCard/components/Price/Price";
import { Quantity } from "components/GameDetailsCard/components/Quantity/Quantity";
import { Rating } from "components/GameDetailsCard/components/Rating/Rating";
import { ReleaseDateAndTitle } from "components/GameDetailsCard/components/ReleaseDateAndTitle/ReleaseDateAndTitle";
import { Tags } from "components/GameDetailsCard/components/Tags/Tags";
import CurrencyContext from "contexts/CurrencyContext";
import StoreContext from "contexts/StoreContext";
import { Layout } from "../../components/Layout/Layout";

export const GameListPage = memo(function GameListPage() {
  const { storeGames, setGames } = useContext(StoreContext);
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
              <GameDetailsCardWrapper
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
                <AddToBasketButton
                  setGamesCallback={setGames}
                  gameId={id}
                  inBasket={inBasket}
                />
              </GameDetailsCardWrapper>
            );
          }
        )}
    </Layout>
  );
});
