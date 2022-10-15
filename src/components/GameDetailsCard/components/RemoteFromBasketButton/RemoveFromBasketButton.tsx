import React, { useContext } from "react";
import { ReactComponent as TrashIcon } from "assets/icons/trash.svg";
import Button from "components/Button/Button";
import StoreContext from "contexts/StoreContext";

interface RemoveFromBasketButtonProps {
  gameId: string;
}

const RemoveFromBasketButton = ({ gameId }: RemoveFromBasketButtonProps) => {
  const { setGames } = useContext(StoreContext);

  const handleClick = () => {
    setGames((games) => {
      return games.map((game) => {
        if (game.id === gameId) {
          game.inBasket = false;
          game.quantity = 1;
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
};

export default RemoveFromBasketButton;
