import React, {
  ReactElement,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { Button } from "@/components/Button/Button";
import type { Game } from "@/types";

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
      <h3 className="text-accent">Quantity</h3>
      <div className="mt-1 flex items-center text-light">
        <Button
          leadingIcon={
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Subtract</title>
              <path
                d="M15 9.85714H9.85714H8.14286H3V8.14285H8.14286L9.85714 8.14285L15 8.14285V9.85714Z"
                fill="currentColor"
              />
            </svg>
          }
          onClick={handleDecreaseClick}
          variant="icon"
        />
        <div className="mx-3">{quantity}</div>
        <Button
          leadingIcon={
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Add</title>
              <path
                d="M15 9.85714H9.85714V15H8.14286V9.85714H3V8.14286H8.14286V3H9.85714V8.14286H15V9.85714Z"
                fill="currentColor"
              />
            </svg>
          }
          onClick={handleIncreaseClick}
          variant="icon"
        />
      </div>
    </div>
  );
}
