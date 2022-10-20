import React, { ReactElement, useCallback, useContext } from "react";
import { ReactComponent as AddIcon } from "assets/icons/add.svg";
import { ReactComponent as SubtractIcon } from "assets/icons/subtract.svg";
import { Button } from "components/Button/Button";
import StoreContext from "contexts/StoreContext";
import "./styles.css";

interface QuantityProps {
  quantity: number;
  gameId: string;
}

export function Quantity({ quantity, gameId }: QuantityProps): ReactElement {
  const { setGames } = useContext(StoreContext);

  const handleDecreaseClick = useCallback(() => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setGames((games) => {
        return games.map((game) => {
          if (game.id === gameId) {
            return {
              ...game,
              quantity: newQuantity,
            };
          }
          return game;
        });
      });
    }
  }, [quantity, setGames, gameId]);

  const handleIncreaseClick = useCallback(() => {
    const newQuantity = quantity + 1;
    setGames((games) => {
      return games.map((game) => {
        if (game.id === gameId) {
          return {
            ...game,
            quantity: newQuantity,
          };
        }
        return game;
      });
    });
  }, [quantity, setGames, gameId]);

  return (
    <div>
      <h3>Quantity</h3>
      <div className="Quantity__Controls">
        <Button
          leadingIcon={<SubtractIcon />}
          onClick={handleDecreaseClick}
          variant="icon"
        />
        <div className="Quantity__Value">{quantity}</div>
        <Button
          leadingIcon={<AddIcon />}
          onClick={handleIncreaseClick}
          variant="icon"
        />
      </div>
    </div>
  );
}
