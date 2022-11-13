"use client";

import { RemoveFromBasketButton } from "../../components/GameDetailsCard/components/RemoteFromBasketButton/RemoveFromBasketButton";
import { OrderDetails } from "../../components/OrderDetails/OrderDetails";
import StoreContext from "@/contexts/StoreContext";
import { Link } from "../../components/Link/Link";
import { useContext } from "react";
import { GameDetailsCardWrapper } from "../../components/GameDetailsCard/components/GameDetailsCardWrapper/GameDetailsCardWrapper";
import { Price } from "../../components/GameDetailsCard/components/Price/Price";
import { Quantity } from "../../components/GameDetailsCard/components/Quantity/Quantity";
import { ReleaseDateAndTitle } from "../../components/GameDetailsCard/components/ReleaseDateAndTitle/ReleaseDateAndTitle";
import { NavBar } from "../../components/NavBar/NavBar";
import CurrencyContext from "@/contexts/CurrencyContext";

export default function Checkout() {
  const { storeGames, setGames } = useContext(StoreContext);
  const { selectedCurrency, exchangeRates } = useContext(CurrencyContext);
  console.log(storeGames.filter((game) => game.inBasket));
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex min-h-[80px] w-full items-center bg-[#101320]">
        <NavBar
          headerText="Checkout"
          backLink={{
            text: "Go back to games list",
            to: "/",
          }}
        />
      </header>
      <div className="mt-20 py-10 px-6">
        <main className="flex flex-col flex-wrap justify-end xl:flex-row xl:flex-nowrap">
          <ul className="w-full">
            {storeGames &&
              storeGames.length > 0 &&
              storeGames
                .filter((game) => game.inBasket)
                .map(
                  ({ artworkUrl, releaseDate, price, title, id, quantity }) => {
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
                            fullWidth
                            gameId={id}
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
                          </div>
                          <div className="mt-2 flex gap-12">
                            <Quantity
                              gameId={id}
                              quantity={quantity}
                              setStateCallback={setGames}
                            />
                          </div>
                          <div className="mt-2 flex gap-12">
                            <Price
                              exchangeRates={exchangeRates}
                              selectedCurrency={selectedCurrency}
                              value={price}
                            />
                            <RemoveFromBasketButton
                              fullWidth
                              gameId={id}
                              setStateCallback={setGames}
                            />
                          </div>
                        </GameDetailsCardWrapper>
                      </li>
                    );
                  }
                )}
          </ul>

          <aside className="flex min-w-full flex-shrink flex-col items-center rounded-2xl bg-[#1e2131] p-8 xl:ml-[5%] xl:min-w-[360px]">
            <OrderDetails />
            <hr className="my-10 w-full border-t border-solid border-[#2f344b]" />
            <Link
              leadingIcon={
                <div className="mr-2 flex h-[18px] w-[18px] transform items-center justify-center duration-200 ease-in-out group-hover:translate-x-[-4px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <g fill="none">
                      <path d="M0 0L18 0 18 18 0 18z" />
                      <path
                        fill="currentColor"
                        d="M15 8.25L5.872 8.25 10.065 4.058 9 3 3 9 9 15 10.057 13.943 5.872 9.75 15 9.75z"
                      />
                    </g>
                  </svg>
                </div>
              }
              to="/"
            >
              Back to games list
            </Link>
          </aside>
        </main>
      </div>
    </>
  );
}
