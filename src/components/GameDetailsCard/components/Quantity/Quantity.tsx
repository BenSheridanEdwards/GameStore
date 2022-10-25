import React, {
  ReactElement,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { ReactComponent as AddIcon } from "assets/icons/add.svg";
import { ReactComponent as SubtractIcon } from "assets/icons/subtract.svg";
import { Button } from "components/Button/Button";
import { Game } from "types/types";
import "./styles.css";

interface QuantityProps {
  gameId: string;
  quantity: number;
  setStateCallback: Dispatch<SetStateAction<Game[]>>;
}

export function Quantity({
  gameId,
  quantity,
  setStateCallback,
}: QuantityProps): ReactElement {
  const handleDecreaseClick = useCallback(() => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setStateCallback((games) => {
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
  }, [quantity, setStateCallback, gameId]);

  const handleIncreaseClick = useCallback(() => {
    const newQuantity = quantity + 1;
    setStateCallback((games) => {
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
  }, [quantity, setStateCallback, gameId]);

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
