"use client";

import { useContext } from "react";
import CurrencyContext from "@/contexts/CurrencyContext";
import StoreContext from "@/contexts/StoreContext";

import { AddToBasketButton } from "../components/GameDetailsCard/components/AddToBasketButton/AddToBasketButton";
import { GameDetailsCardWrapper } from "../components/GameDetailsCard/components/GameDetailsCardWrapper/GameDetailsCardWrapper";
import { Price } from "../components/GameDetailsCard/components/Price/Price";
import { Quantity } from "../components/GameDetailsCard/components/Quantity/Quantity";
import { Rating } from "../components/GameDetailsCard/components/Rating/Rating";
import { ReleaseDateAndTitle } from "../components/GameDetailsCard/components/ReleaseDateAndTitle/ReleaseDateAndTitle";
import { Tags } from "../components/GameDetailsCard/components/Tags/Tags";
import { NavBar } from "../components/NavBar/NavBar";

export default function Home() {
  const { storeGames, setGames } = useContext(StoreContext);
  const { selectedCurrency, exchangeRates } = useContext(CurrencyContext);
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex min-h-[80px] w-full items-center bg-headerBg">
        <NavBar headerText="Games" />
      </header>
      <main className="mt-20 py-10 px-6">
        <ul>
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
                  <li key={id} className="mb-6">
                    <GameDetailsCardWrapper
                      artworkUrl={artworkUrl}
                      title={title}
                      id={id}
                    >
                      <ReleaseDateAndTitle
                        releaseDate={releaseDate}
                        title={title}
                      />
                      <Rating value={rating} />
                      <Tags tags={tags} />
                      <Quantity
                        gameId={id}
                        quantity={quantity}
                        setStateCallback={setGames}
                      />
                      <Price
                        exchangeRates={exchangeRates}
                        selectedCurrency={selectedCurrency}
                        value={price}
                      />
                      <AddToBasketButton
                        gameId={id}
                        inBasket={inBasket}
                        setStateCallback={setGames}
                      />
                    </GameDetailsCardWrapper>
                    <GameDetailsCardWrapper
                      artworkUrl={artworkUrl}
                      title={title}
                      id={id}
                      isMobileCard
                    >
                      <div className="max-w-[180px] sm:max-w-none">
                        <ReleaseDateAndTitle
                          releaseDate={releaseDate}
                          title={title}
                        />
                        <Rating value={rating} />
                      </div>
                      <div className="mt-2 flex gap-12">
                        <Quantity
                          gameId={id}
                          quantity={quantity}
                          setStateCallback={setGames}
                        />
                        <Tags tags={tags} />
                      </div>
                      <div className="mt-2 flex gap-12">
                        <Price
                          exchangeRates={exchangeRates}
                          selectedCurrency={selectedCurrency}
                          value={price}
                        />
                        <AddToBasketButton
                          gameId={id}
                          inBasket={inBasket}
                          setStateCallback={setGames}
                        />
                      </div>
                    </GameDetailsCardWrapper>
                  </li>
                );
              },
            )}
        </ul>
      </main>
    </>
  );
}
