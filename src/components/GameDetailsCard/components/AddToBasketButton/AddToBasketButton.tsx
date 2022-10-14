import React, { useCallback, useContext } from "react";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import { ReactComponent as CheckIcon } from "assets/icons/check.svg";
import Button from "components/Button/Button";
import StoreContext from "contexts/StoreContext";

interface AddToBasketButtonProps {
  inBasket: boolean;
  gameId: string;
}

const AddToBasketButton = ({ inBasket, gameId }: AddToBasketButtonProps) => {
  const { setGames } = useContext(StoreContext);
  const icon = inBasket ? <CheckIcon /> : <PlusIcon />;
  const label = inBasket ? "Added" : "Add to basket";
  const variant = inBasket ? "secondary" : "primary";

  const handleClick = useCallback(() => {
    setGames((games) => {
      return games.map((game) => {
        if (game.id === gameId) {
          game.inBasket = !inBasket;
        }

        return game;
      });
    });
  }, [gameId, setGames, inBasket]);

  return (
    <Button icon={icon} variant={variant} onClick={handleClick} fullWidth>
      {label}
    </Button>
  );
};

export default AddToBasketButton;
