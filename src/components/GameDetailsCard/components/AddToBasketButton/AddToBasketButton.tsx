import React, { ReactElement, Dispatch, SetStateAction } from "react";
import { ReactComponent as CheckIcon } from "assets/icons/check.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import { Button } from "components/Button/Button";
import { Game } from "types/types";

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
  const icon = inBasket ? <CheckIcon /> : <PlusIcon />;
  const label = inBasket ? "Added" : "Add to basket";
  const variant = inBasket ? "secondary" : "primary";

  const handleClick = () => {
    setStateCallback((games: Game[]) => {
      return games.map((game) => {
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
