import React, { ReactElement, Dispatch, SetStateAction } from "react";
import { Game } from "@/types";
import { Button } from "@/components/Button/Button";

interface AddToBasketButtonProps {
  inBasket: boolean;
  gameId: string;
  setStateCallback: Dispatch<SetStateAction<Game[]>>;
}

export function AddToBasketButton({
  inBasket,
  gameId,
  setStateCallback,
}: AddToBasketButtonProps): ReactElement {
  const icon = inBasket ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <g fill="none">
        <path d="M0 0L0 18 18 18 18 0z" />
        <path
          fill="currentColor"
          d="M5.59 12.58L1.42 8.41 0 9.82 5.59 15.41 17.59 3.41 16.18 2z"
        />
      </g>
    </svg>
  ) : (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 9.85714H9.85714V15H8.14286V9.85714H3V8.14286H8.14286V3H9.85714V8.14286H15V9.85714Z"
        fill="white"
      />
    </svg>
  );
  const label = inBasket ? "Added" : "Add to basket";
  const variant = inBasket ? "secondary" : "primary";

  const handleClick = () => {
    setStateCallback((games: Game[]) => {
      return games.map(game => {
        if (game.id === gameId) {
          return {
            ...game,
            inBasket: !inBasket,
          };
        }

        return game;
      });
    });
  };

  return (
    <Button
      leadingIcon={icon}
      variant={variant}
      onClick={handleClick}
      fullWidth
    >
      {label}
    </Button>
  );
}
