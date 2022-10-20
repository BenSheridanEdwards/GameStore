import React, { ReactElement } from "react";
import { ReactComponent as TrashIcon } from "assets/icons/trash.svg";
import { Button } from "components/Button/Button";
import { Game } from "types/types";

interface RemoveFromBasketButtonProps {
  gameId: string;
  setBasketCallback: React.Dispatch<React.SetStateAction<Game[]>>;
}

export function RemoveFromBasketButton({
  gameId,
  setBasketCallback,
}: RemoveFromBasketButtonProps): ReactElement {
  const handleClick = () => {
    setBasketCallback((games: Game[]) => {
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
