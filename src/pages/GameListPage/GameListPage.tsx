import React, { memo, useState, useEffect } from "react";

import GameListCardWrapper from "components/GameDetailsCard/components/GameDetailsCardWrapper/GameDetailsCardWrapper";
import AddToBasketButton from "components/GameDetailsCard/components/AddToBasketButton/AddToBasketButton";
import ReleaseDateAndTitle from "components/GameDetailsCard/components/ReleaseDateAndTitle/ReleaseDateAndTitle";
import Price from "components/GameDetailsCard/components/Price/Price";
import Quantity from "components/GameDetailsCard/components/Quantity/Quantity";
import Rating from "components/GameDetailsCard/components/Rating/Rating";
import Tags from "components/GameDetailsCard/components/Tags/Tags";
import Layout from "../../components/Layout/Layout";
import type { Game, Rates } from "./types";
import { fetchRates } from "api/fetchRates/fetchRates";
import { fetchGames } from "api/fetchGames/fetchGames";

const GameListPage = memo(() => {
  const [games, setGames] = useState<Game[]>([]);
  const [rates, setRates] = useState<Rates | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchGames({ setStateFunction: setGames, signal });
    fetchRates({ setStateFunction: setRates, signal });

    return () => {
      controller.abort();
    };
  }, []);

  const selectedCurrency = "USD";

  return (
    <Layout title="Games">
      {games &&
        games.length > 0 &&
        games.map(
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
                  exchangeRates={rates}
                  selectedCurrency={selectedCurrency}
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
