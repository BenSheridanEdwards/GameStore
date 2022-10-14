import { Game } from "types/types";

export function getBasketTotalAmount(basket: Game[]) {
  return basket.reduce<number>((accumulator: number, current: Game) => {
    return accumulator + current.price * current.quantity;
  }, 0);
}
