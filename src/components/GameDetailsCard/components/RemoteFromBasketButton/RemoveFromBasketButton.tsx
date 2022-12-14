import React, { ReactElement, Dispatch, SetStateAction } from "react";
import { Button } from "@/components/Button/Button";
import { Game } from "@/types";

interface RemoveFromBasketButtonProps {
  gameId: string;
  setStateCallback: Dispatch<SetStateAction<Game[]>>;
  fullWidth?: boolean;
}

export function RemoveFromBasketButton({
  gameId,
  setStateCallback,
  fullWidth,
}: RemoveFromBasketButtonProps): ReactElement {
  const handleClick = () => {
    setStateCallback((games: Game[]) => {
      return games.map(game => {
        if (game.id === gameId) {
          return {
            ...game,
            inBasket: false,
            quantity: 1,
          };
        }
        return game;
      });
    });
  };

  return (
    <Button
      leadingIcon={
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
              d="M4.786 14.571c0 .865.707 1.572 1.571 1.572h6.286c.864 0 1.571-.707 1.571-1.572V5.143H4.786v9.428zM15 2.786h-2.75L11.464 2H7.536l-.786.786H4v1.571h11V2.786z"
            />
          </g>
        </svg>
      }
      variant="secondary"
      onClick={handleClick}
      fullWidth={fullWidth}
    >
      Remove
    </Button>
  );
}
