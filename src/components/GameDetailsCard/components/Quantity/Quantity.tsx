import React, { useCallback, useContext } from "react";
import Button from "components/Button/Button";
import { ReactComponent as AddIcon } from "assets/icons/add.svg";
import { ReactComponent as SubtractIcon } from "assets/icons/subtract.svg";
import "./styles.css";
import StoreContext from "contexts/StoreContext";

interface QuantityProps {
  quantity: number;
  gameId: string;
}

const Quantity = ({ quantity, gameId }: QuantityProps) => {
  const { setGames } = useContext(StoreContext);

  const handleDecreaseClick = useCallback(() => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setGames((games) => {
        return games.map((game) => {
          if (game.id === gameId) {
            game.quantity = newQuantity;
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
          game.quantity = newQuantity;
        }
        return game;
      });
    });
  }, [quantity, setGames, gameId]);

  return (
    <div className="Quantity">
      <h3>Quantity</h3>
      <div className="Quantity__Controls">
        <Button
          icon={<SubtractIcon />}
          onClick={handleDecreaseClick}
          variant="icon"
        />
        <div className="Quantity__Value">{quantity}</div>
        <Button
          icon={<AddIcon />}
          onClick={handleIncreaseClick}
          variant="icon"
        />
      </div>
    </div>
  );
};

export default Quantity;
