import React, { ReactElement, Dispatch, SetStateAction } from "react";
import { ReactComponent as TrashIcon } from "assets/icons/trash.svg";
import { Button } from "components/Button/Button";
import { Game } from "types/types";

interface RemoveFromBasketButtonProps {
  gameId: string;
  setStateCallback: Dispatch<SetStateAction<Game[]>>;
}

export function RemoveFromBasketButton({
  gameId,
  setStateCallback,
}: RemoveFromBasketButtonProps): ReactElement {
  const handleClick = () => {
    setStateCallback((games: Game[]) => {
      return games.map((game) => {
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
      leadingIcon={<TrashIcon />}
      variant="secondary"
      onClick={handleClick}
    >
      Remove
    </Button>
  );
}
